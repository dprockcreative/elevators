import { Component, OnInit } from '@angular/core';

import { Floor, Shaft } from '../interfaces/index';
import { FloorService, ShaftService, DialogService } from '../services/index';

@Component({
  selector: 'section',
  template: `
    <ul>
      <li *ngFor="let shaft of shafts" [shaft]="shaft"></li>
    </ul>
    <ol reversed="true">
      <li *ngFor="let floor of floors" [floor]="floor"></li>
    </ol>
    <footer>
      <form>
        <label class="inline" title="Shafts">
          <input type="number" name="shafts" min="1" max="5" step="1" (ngModelChange)="setShaftsLength($event)" [(ngModel)]="config.length" [readonly]="processing()" tabindex="1"/>
        </label>
        <label class="inline" *ngFor="let row of config" title="Shaft {{row.id}}">
          <input type="number" name="shaft_{{row.id}}" min="3" max="10" step="1" (ngModelChange)="setShaftsStories($event, row)" [(ngModel)]="row.stories" tabindex="{{row.id + 1}}"/>
        </label>
      </form>
    </footer>
  `
})

export class BuildingComponent implements OnInit {
  error: any;
  shafts: Shaft[] = [];
  floors: Floor[] = [];
  stories: number;

  config: any[] = [];

  constructor(
    private floorService: FloorService,
    private shaftService: ShaftService,
    private dialogService: DialogService
  ) {}

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

  /*  Build
      @type   private
      @return void
   */
  private build (): void {
    this.buildShafts()
      .then(shafts => this.setStories(shafts))
      .then(stories => this.buildFloors(stories))
      .then(() => this.setConfig())
      .catch(error => this.error = error);
  }

  /*  Set Config
      @type   private
      @return void
   */
  private setConfig (): void {
    this.config = this.shaftService.getConfig();
  }

  ngOnInit (): void {
    this.build();
  }
}
