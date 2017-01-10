import { Component, OnInit } from '@angular/core';

import { Floor, Shaft } from '../interfaces/index';
import { FloorService, ShaftService, DialogService, LogService } from '../services/index';

@Component({
  selector: 'section',
  template: `
    <ul>
      <li *ngFor="let shaft of shafts" [shaft]="shaft"></li>
    </ul>
    <ol reversed="true">
      <li *ngFor="let floor of floors" [floor]="floor"></li>
    </ol>
  `
})

export class BuildingComponent implements OnInit {
  error: any;
  shafts: Shaft[] = [];
  floors: Floor[] = [];
  stories: number;

  constructor(
    private floorService: FloorService,
    private shaftService: ShaftService,
    private dialogService: DialogService,
    private logService: LogService
  ) {
    logService.useConsole('info');
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
    console.info('Building Rendered');
    this.buildShafts()
      .then(shafts => this.setStories(shafts))
      .then(stories => this.buildFloors(stories))
      .catch(error => this.error = error);
  }

  ngOnInit (): void {
    this.build();
  }
}
