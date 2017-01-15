import { Component, OnInit } from '@angular/core';

import { Dialog } from '../../interfaces/index';

import { DialogService } from '../../services/index';

import { DialogComponent } from '../../components/index';

import {
  DIALOG_TYPES,
  DIALOG_STRING_MAP,
  DIALOG_TYPE_ALERT,
  DIALOG_TYPE_CONFIRM,
  DIALOG_TYPE_WIZARD
} from '../../constants/index';

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

  protected submit (): void {
    console.log('DialogAlert::submit');
    if (!this.dialog.next()) {
      super.service().dismiss();
    }
  }

  ngOnInit (): void {
    super.submit = this.submit;
    console.log('DialogAlert::OnInit');
  }

}


/*
  //@ContentChild(TemplateRef) content;
  //@ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;


 Input, Inject, ContentChild, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, 

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