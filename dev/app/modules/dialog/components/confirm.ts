import { Component, OnInit } from '@angular/core';

import {
  DialogService,
  Dialog
} from '../index';

import { DialogComponent } from './dialog';

@Component({
  selector: 'confirm',
  template: `
    <div [innerHTML]="content()"></div>
    <footer>
      <label>
       <input type="reset" [value]="label('no')" (click)="reset()" />
      </label>
      <label>
       <input type="submit" [value]="label('yes')" />
      </label>
    </footer>
  `
})

export class DialogConfirm extends DialogComponent implements OnInit {

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  /*  Reset
      @type     public
      @return   void
      - overrides DialogComponent
   */
  public reset (): void {
    if (!this.dialog.prev()) {
      super.service().complete(false);
    }
  }

  /*  Submit
      @type     public
      @return   void
      - overrides DialogComponent
   */
  public submit (): void {
    if (!this.dialog.next()) {
      super.service().complete(true);
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
    super.reset  = this.reset;
  }
}
