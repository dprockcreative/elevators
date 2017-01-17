import { Component } from '@angular/core';

import { Dialog } from '../interfaces/index';

import { DialogService } from '../services/index';

import {
  DIALOG_STRING_MAP
} from '../constants/index';

@Component({
  selector: 'dialog',
  template: `
    <div [ngClass]="{'active':service().active()}">
      <article>
        <header>
          <h3>{{dialog.header()}}</h3>
        </header>
        <form (ngSubmit)="submit()" [formGroup]="dialog.form">
          <alert *ngIf="dialog.type === 'alert'"></alert>
          <confirm *ngIf="dialog.type === 'confirm'"></confirm>
          <wizard *ngIf="dialog.type === 'wizard'"></wizard>
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

  constructor (
    private dialogService: DialogService
  ) {
    this.dialog = dialogService.current();
  }

  /*  Label
      @override true
      @type     protected
      @param    key [string]
      @param    alt [string !optional]
      @return   string
      - default functions occur if not overridden by sub class
   */
  protected label (key: string, alt?: string): string {
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
    this.dialogService.dismiss();
  }

  /*  Submit
      @override true
      @type     protected
      @return   void
      - default functions occur if not overridden by sub class
   */
  protected submit (): void {
    this.dialogService.dismiss();
  }

}

/*
  USE:

    ================
    ALERTS

      ANON ALERT

      this.dialogService.alert(
        'Text Appears in Header',
        [
          `<p>Any Plain Html Content</p>`
        ]
      ).promise().then(() => {
        // after user clicks "ok"
      });

      DELAYED ALERT

      let alert = this.dialogService.alert(
            'Text Appears in Header',
            [
              `<p>Any Plain Html Content</p>`
            ],
            false
          )

      // ^^^ third argument = false : means that the dialog will not be added to the queue until: 
      if (conditional) {
        this.dialogService.add(alert).then(d => d.activate());
      }

      alert.promise().then(() => {
        // after user clicks "ok"
      });

    ================
    CONFIRMS 

      this.dialogService.confirm(
          'Text Appears in Header',
          [`<p>Click confirm or cancel</p>`]
        ).promise()
          .then(() => {
            // occurs after user clicks "confirm"
            // TRUE
          })
          .catch(() => {
            // occurs after user clicks "cancel"
            // FALSE
          });

    ================
    WIZARDS
      - wizards can contain dynamic form elements which require definitions:

      this.dialogService.wizard(
        'Text Appears in Header',
        [
          {
            'label': 'Screen One Label',
            'type' : 'input-text-content',
            'model': {
              'name' : 'one'
            }
          },
          {
            'label': 'Screen Two Label',
            'type': 'input-text-content',
            'model': {
              'name' : 'two'
            }
          },
        ]
      ).promise()
        .then((results) => {
          // wizard outputs values as JSON
          // results = {'one': 'Foo', 'two' : 'Bar'};
        })
        .catch(() => {
          // wizard cancelled
        });
 */
