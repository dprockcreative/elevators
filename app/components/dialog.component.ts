import { Component, DoCheck } from '@angular/core';

import { Dialog } from '../interfaces/index';
import { DialogService } from '../services/index';

@Component({
  selector: 'dialog',
  template: `
    <div [ngClass]="{'active':active()}">
      <article>
        <header>
          <h3 [innerHtml]="dialog.header"></h3>
        </header>
        <form (ngSubmit)="dialog.submit()">
          {{dialog.body}}
          <footer>
            <label *ngIf="(dialog.type !== 'alert')">
             <input type="reset" value="{{dialog.labels('no')}}" (click)="dialog.reset()" />
            </label>
            <label>
             <input type="submit" value="{{dialog.labels('yes')}}" />
            </label>
          </footer>
        </form>
      </article>
    </div>
  `
})

/**
 *  Dialog Component
 *
    let d = this.dialogService.make(
      'Construct a new Building?',
      `
        <label>
          <input type="text" name="text" placeholder="Enter Text" />
        </label>
      `,
      'wizard'
    );

    this.dialogService.add(d);
 */
export class DialogComponent implements DoCheck {

  dialog: Dialog | null;

  constructor (private dialogService: DialogService) {}

  /*  Active
      @type   public
      @return boolean
   */
  public active (): boolean {
    return this.dialogService.active();
  }

  ngDoCheck (): void {
    let active = this.dialogService.active();
    if (!this.dialog || !this.dialog.parent) {
      this.dialog = active ? this.dialogService.get() : new Dialog();
    }
  }
}
