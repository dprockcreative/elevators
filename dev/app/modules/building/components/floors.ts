import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

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

export class FloorsComponent implements OnDestroy {

  floors: Floor[] = [];

  bShaftSubscription: Subscription;

  constructor(
    private shaftService: ShaftService,
    private floorService: FloorService
  ) {
    this.bShaftSubscription = shaftService.buildShaftsStream.subscribe(shafts => this.setFloors(shafts));
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

  ngOnDestroy (): void {
    this.bShaftSubscription.unsubscribe();
  }

}

