import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        <form (ngSubmit)="submit()" [formGroup]="form">
          <alert *ngIf="S.isType('alert')"></alert>
          <confirm *ngIf="S.isType('confirm')"></confirm>
          <wizard *ngIf="S.isType('wizard')" [form]="form"></wizard>
        </form>
      </article>
    </div>
  `
})

/**
 *  Dialog Component
 */
export class DialogComponent implements OnInit, AfterContentChecked, AfterViewInit {

  protected dialog: Dialog;
  private S: DialogService;

  form: FormGroup = new FormGroup({});

  constructor (
    private dialogService: DialogService
  ) {
    this.S = dialogService;
    this.dialog = dialogService.current();
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

  /*  Content
      @type     protected
      @return   any
      - default functions occur if not overridden by sub class
   */
  protected content (screen?:any): any {
    return this.dialog.screen();
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

  ngAfterContentChecked (): void {
    //console.log('DialogComponent::ngAfterContentChecked', this.dialog);
  }

  ngAfterViewInit (): void {
    //console.log('DialogComponent::ngAfterViewInit', this.dialog);
  }

  ngOnInit() {
    //console.log('DialogComponent::ngOnInit', this.dialog);
    //this.form = new FormGroup({'default': new FormControl('')});
  }

}
