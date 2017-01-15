import { Component, OnInit } from '@angular/core';
import { Floor, Shaft } from '../interfaces/index';
import { FloorService, LogService, SessionService, ShaftService, TasksService } from '../services/index';

@Component({
  selector: 'section',
  template: `
    <article>
      <ul>
        <li *ngFor="let shaft of shafts" [shaft]="shaft" [attr.shaft]="shaft.id | number2alpha"></li>
      </ul>
      <ol reversed="true">
        <li *ngFor="let floor of floors" [floor]="floor"></li>
      </ol>
      <footer>
        <form>
          <label class="inline" title="Shafts">
            <input type="number" name="shafts" min="1" max="5" step="1" (ngModelChange)="setShaftsLength($event)" [(ngModel)]="config.length" [readonly]="processing()" tabindex="1"/>
          </label>
          <label class="inline" *ngFor="let row of config" title="Shaft {{row.id | number2alpha}}">
            <input type="number" name="shaft_{{row.id}}" min="3" max="10" step="1" (ngModelChange)="setShaftsStories($event, row)" [(ngModel)]="row.stories" tabindex="{{row.id + 1}}"/>
          </label>
        </form>
      </footer>
    </article>
  `
})

export class BuildingComponent implements OnInit {

  shafts  : Shaft[] = [];
  floors  : Floor[] = [];
  config  : any[]   = [];
  stories : number;

  constructor(
    private sessionService: SessionService,
    private floorService: FloorService,
    private logService: LogService,
    private shaftService: ShaftService,
    private tasksService: TasksService
  ) {
    logService.useConsole('info');
  }

  /*  Processing
      @type   public
      @return boolean
   */
  public processing (): boolean {
    return this.config.length !== this.shafts.length;
  }

  /*  Set Shafts Length
      @type   public
      @param  value [number]
      @return void
   */
  public setShaftsLength (value: number): void {
    let length = this.config.length;
    if (length !== value) {
      // delete
      let promises = [];
      let i;

      if (length > value) {
        for (i = length - value; i >= 1; i--) {
          promises.push(this.shaftService.remove(this.shafts[length - i]));
        }
      }
      // push
      else {
        for (i = value - length; i >= 1; i--) {
          let shaft = {'stories': this.config[length - i].stories};
          this.config.push(Object.assign({}, shaft, { 'id' : value }));
          promises.push(this.shaftService.save(shaft as Shaft));
        }
      }

      Promise.all(promises).then(() => this.build());
    }
  }

  /*  Set Shafts Stories
      @type   public
      @param  value [number]
      @return void
   */
  public setShaftsStories (value: number, shaft: Shaft): void {
    if (shaft.stories === value) {
      this.shaftService.save(shaft as Shaft)
        .then(() => this.build());
    }
  }

  /*  Set Stories
      @type   private
      @param  shafts [Shaft Array]
      @return number
   */
  private setStories (shafts: Shaft[]): number {
    this.stories = 0;
    shafts.forEach(shaft => (this.stories = (this.stories < shaft.stories) ? shaft.stories : this.stories));
    return this.stories;
  }

  /*  Build Floors
      @type   private
      @param  stories [number]
      @return Promise [Floor Array]
   */
  private buildFloors (stories: number): Promise<Floor[]> {
    return this.floorService
        .buildFloors(stories)
        .then(floors => this.floors = floors);
  }

  /*  Build Floors
      @type   private
      @return Promise [Shaft Array]
   */
  private buildShafts (): Promise<Shaft[]> {
    return this.shaftService
      .buildShafts()
      .then(shafts => this.shafts = shafts);
  }

  /*  Set Config
      @type   private
      @return void
   */
  private setConfig (): void {
    this.config = this.shaftService.getConfig();
    this.tasksService.reset();
    console.info(`Building Rendered`, `Shafts: *${this.shafts.length}*`, `Highest Floor: *${this.floors.length}*`);
  }

  /*  Build
      @type   private
      @return void
   */
  private build (): void {
    this.buildShafts()
      .then(shafts => this.setStories(shafts))
      .then(stories => this.buildFloors(stories))
      .then(() => this.setConfig());
  }

  ngOnInit (): void {
    this.build();
  }
}
