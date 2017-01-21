import { Component, OnInit } from '@angular/core';

import { Dialog } from '../interface';

import { DialogService } from '../service';

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

  protected dialog: Dialog;

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  /*  Reset
      @type     protected
      @return   void
      - overrides DialogComponent
   */
  protected reset (): void {
    if (!this.dialog.prev()) {
      super.service().complete(false);
    }
  }

  /*  Submit
      @type     protected
      @return   void
      - overrides DialogComponent
   */
  protected submit (): void {
    if (!this.dialog.next()) {
      super.service().complete(true);
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
    super.reset  = this.reset;
  }
}
