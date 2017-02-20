import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import {
  ShaftService,
  Shaft
} from '../../shaft/index';

@Component({
  selector: 'shafts',
  template: `
    <ul>
      <li *ngFor="let shaft of shafts" [shaft]="shaft" [attr.shaft]="shaft.id | number2alpha"></li>
    </ul>
  `
})

export class ShaftsComponent implements OnDestroy {

  shafts: Shaft[] = [];

  bShaftSubscription: Subscription;

  constructor(
    private shaftService: ShaftService
  ) {
    this.bShaftSubscription = shaftService.buildShaftsStream.subscribe(shafts => this.setShafts(shafts));
  }

  /*  Set Shafts
      @type   private
      @param  shafts [Shaft Array]
      @return void
   */
  private setShafts (shafts: Shaft[]): void {
    this.shafts = shafts;
  }

  ngOnDestroy (): void {
    this.bShaftSubscription.unsubscribe();
  }

}
