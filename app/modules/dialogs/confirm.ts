import { Component, OnInit } from '@angular/core';

import { Dialog } from '../../interfaces/index';

import { DialogService } from '../../services/index';

import { DialogComponent } from '../../components/index';

@Component({
  selector: 'confirm',
  template: `
    <div [innerHTML]="content()"></div>
    <footer>
      <label>
       <input type="reset" value="cancel" (click)="reset()" />
      </label>
      <label>
       <input type="submit" value="confirm" />
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

  protected reset (): void {
    console.log('DialogConfirm::reset');
    super.service().complete(false);
  }

  protected submit (): void {
    console.log('DialogConfirm::submit');
    if (!this.dialog.next()) {
      super.service().complete(true);
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
    super.reset  = this.reset;
    console.log('DialogConfirm::OnInit');
  }

}


/*
 [innerHtml]="dialog.header"
 (ngSubmit)="dialog.submit()"


          {{dialog.body}}
          <footer>
            <label *ngIf="(dialog.type !== 'alert')">
             <input type="reset" value="{{dialog.labels('no')}}" (click)="dialog.reset()" />
            </label>
            <label>
             <input type="submit" value="{{dialog.labels('yes')}}" />
            </label>
          </footer>
*/