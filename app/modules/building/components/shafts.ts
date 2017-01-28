import { Component } from '@angular/core';

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

export class ShaftsComponent {

  shafts: Shaft[] = [];

  constructor(
    private shaftService: ShaftService
  ) {
    shaftService.buildShaftsStream.subscribe(shafts => this.setShafts(shafts));
  }

  /*  Set Shafts
      @type   private
      @param  shafts [Shaft Array]
      @return void
   */
  private setShafts (shafts: Shaft[]): void {
    this.shafts = shafts;
  }
}
