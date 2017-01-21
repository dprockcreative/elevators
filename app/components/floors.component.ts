import { Component } from '@angular/core';

import { FloorService, ShaftService } from '../services/index';

import { Floor, Shaft } from '../interfaces/index';

@Component({
  selector: 'floors',
  template: `
    <ol reversed="true">
      <li *ngFor="let floor of floors" [floor]="floor"></li>
    </ol>
  `
})

export class FloorsComponent {

  floors: Floor[] = [];

  constructor(
    private shaftService: ShaftService,
    private floorService: FloorService
  ) {
    shaftService.buildShaftsStream.subscribe(shafts => this.setFloors(shafts));
  }

  /*  Set Floors
      @type   private
      @param  shafts [Shaft Array]
      @return void
   */
  private setFloors (shafts: Shaft[]): void {

    let stories = 0;
    shafts.forEach(shaft => (stories = (stories < shaft.stories) ? shaft.stories : stories));

    this.floorService
      .buildFloors(stories)
      .then(floors => (this.floors = floors));
  }
}

/*

*/

