import { Component, OnInit } from '@angular/core';

import { Dialog } from '../../interfaces/index';

import { DialogService } from '../../services/index';

import { DialogComponent } from '../../components/index';

@Component({
  selector: 'wizard',
  template: `
    <div [innerHTML]="content()"></div>
    <footer>
      <label>
       <input type="button" [value]="label('no')" (click)="reset()" />
      </label>
      <label>
       <input type="submit" [value]="label('yes')" />
      </label>
    </footer>
  `
})

export class DialogWizard extends DialogComponent implements OnInit {

  protected dialog: Dialog;

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  protected submit (): void {
    console.log('DialogWizard::submit');
    if (!this.dialog.next()) {
      super.service().dismiss();
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
    console.log('DialogWizard::OnInit');
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