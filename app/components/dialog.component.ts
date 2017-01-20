import { Component, AfterContentChecked } from '@angular/core';

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
          <h5>{{count()}}</h5>
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
export class DialogComponent implements AfterContentChecked {

  protected dialog: Dialog;

  constructor (
    private dialogService: DialogService
  ) {
    this.dialog = dialogService.current();
  }

  /*  Count
      @type     protected
      @return   string
   */
  protected count (): string {
    return `${this.dialog.index + 1} of ${this.dialog.content.length}`;
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
  protected content (): any {
    return this.dialog.screen();
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

  ngAfterContentChecked (): void {
    this.dialog = this.dialogService.current();
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
            'type': 'generic-content',
            'template': `<any html/>`
          },
          {
            'type' : 'input-text-content',
            'inputs': {
              'label': 'Screen One Label',
              'name' : 'one'
            }
          },
          {
            'type': 'input-text-content',
            'inputs': {
              'label': 'Screen Two Label',
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
