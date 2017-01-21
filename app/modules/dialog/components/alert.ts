import { Component, OnInit } from '@angular/core';

import { Dialog } from '../interface';

import { DialogService } from '../service';

import { DialogComponent } from './dialog';

@Component({
  selector: 'alert',
  template: `
    <div [innerHTML]="content()"></div>
    <footer>
      <label>
       <input type="submit" [value]="label('yes')" />
      </label>
    </footer>
  `
})

export class DialogAlert extends DialogComponent implements OnInit {

  protected dialog: Dialog;

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  /*  Submit
      @type     protected
      @return   void
      - overrides DialogComponent
   */
  protected submit (): void {
    if (!this.dialog.next()) {
      super.service().dismiss();
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
  }
}
