import { Component, OnInit } from '@angular/core';

import { Floor, Shaft } from '../interfaces/index';
import { FloorService, ShaftService, DialogService } from '../services/index';

@Component({
  selector: 'footer',
  template: `
    <form>
      <label class="inline" title="Shafts">
        <input type="number" name="shafts" min="1" max="5" step="1" (ngModelChange)="setShaftsLength($event)" [(ngModel)]="config.length" [readonly]="processing()" tabindex="1"/>
      </label>
      <label class="inline" *ngFor="let row of config" title="Shaft {{row.id}}">
        <input type="number" name="shaft_{{row.id}}" min="3" max="10" step="1" (ngModelChange)="setShaftsStories($event, row)" [(ngModel)]="row.stories" tabindex="{{row.id + 1}}"/>
      </label>
    </form>
  `
})

export class ConfigComponent implements OnInit {

  config: any[] = [];

  constructor(
    private shaftService: ShaftService
  ) {}

  /*  Processing
      @type   public
      @return boolean
   */
  public processing (): boolean {
    return this.config.length !== this.shaftService.getLength();
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
          promises.push(this.shaftService.removeByIndex(length - i));
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

      Promise.all(promises).then(() => this.setConfig());
    }
  }

  /*  Set Config
      @type   private
      @return void
   */
  private setConfig (): void {
    this.config = this.shaftService.getConfig();
  }

  ngOnInit (): void {
    this.setConfig();
  }
}
