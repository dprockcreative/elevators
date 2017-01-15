import { Component } from '@angular/core';

import { Dialog } from '../interfaces/index';

import { DialogService } from '../services/index';

import {
  DIALOG_TYPES,
  DIALOG_STRING_MAP,
  DIALOG_TYPE_ALERT,
  DIALOG_TYPE_CONFIRM,
  DIALOG_TYPE_WIZARD
} from '../constants/index';

@Component({
  selector: 'dialog',
  template: `
    <div [ngClass]="{'active':S.active()}">
      <article>
        <header>
          <h3>{{dialog.header()}}</h3>
        </header>
        <form (ngSubmit)="submit()">
          <alert *ngIf="S.isType('alert')"></alert>
          <confirm *ngIf="S.isType('confirm')"></confirm>
          <wizard *ngIf="S.isType('wizard')"></wizard>
        </form>
      </article>
    </div>
  `
})

/**
 *  Dialog Component
 */
export class DialogComponent {

  protected dialog: Dialog;
  private S: DialogService;

  constructor (
    private dialogService: DialogService
  ) {
    this.S = dialogService;
    this.dialog = dialogService.current();
  }

  /*  Content
      @type     protected
      @return   string
      - default functions occur if not overridden by sub class
   */
  protected content (): string {
    return this.dialog.screen();
  }

  /*  Label
      @type     protected
      @return   string
      - default functions occur if not overridden by sub class
   */
  protected label (key: string): string {
    return DIALOG_STRING_MAP[this.dialog.type][key];
  }

  /*  Service
      @override true
      @type     protected
      @return   DialogService
      - default functions occur if not overridden by sub class
   */
  protected service (): DialogService {
    return this.dialogService;
  }

  /*  Reset
      @override true
      @type     protected
      @return   void
      - default functions occur if not overridden by sub class
   */
  protected reset (): void {
    this.service().dismiss();
  }


  /*  Submit
      @override true
      @type     protected
      @return   void
      - default functions occur if not overridden by sub class
   */
  protected submit (): void {
    this.service().dismiss();
  }

}
