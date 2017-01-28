import { Component } from '@angular/core';

import {
  ShaftService,
  Shaft
} from '../../shaft/index';

import {
  FloorService,
  Floor
} from '../../floor/index';

@Component({
  selector: 'floors',
  template: `
    <ol reversed="true">
      <li *ngFor="let floor of floors" [floor]="floor" [attr.value]="floor.id"></li>
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

    let stories = this.shaftService.getTopStory();

    this.floorService
      .buildFloors(stories)
      .then(floors => (this.floors = floors));
  }
}

