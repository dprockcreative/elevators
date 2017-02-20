import { Component } from '@angular/core';

@Component({
  selector: 'tooltip',
  template: `
    <i [ngClass]="xy">
      <ng-content></ng-content>
    </i>
  `
})

export class TooltipComponent {
  public xy: string = '';
  constructor () {}
}
