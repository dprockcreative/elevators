import { Component, AfterContentChecked } from '@angular/core';

import {
  DialogService,
  Dialog,
  DIALOG_STRING_MAP
} from '../index';

@Component({
  selector: 'dialogs',
  template: `
    <dialog [attr.open]="open()">
      <article>
        <header>
          <h3>{{header()}}</h3>
          <h5>{{count()}}</h5>
        </header>
        <form (ngSubmit)="submit()" [formGroup]="dialog.form">
          <alert *ngIf="dialog.type === 'alert'"></alert>
          <confirm *ngIf="dialog.type === 'confirm'"></confirm>
          <wizard *ngIf="dialog.type === 'wizard'"></wizard>
        </form>
      </article>
    </dialog>
  `
})

/**
 *  Dialog Component
 */
export class DialogComponent implements AfterContentChecked {

  dialog: Dialog;

  constructor (
    private dialogService: DialogService
  ) {
    this.dialog = dialogService.current();
  }

  /*  Open
      @type     public
      @return   boolean | null
   */
  public open (): boolean | null {
    return this.service().active() ? true : null;
  }

  /*  Header
      @type     public
      @return   string
   */
  public header (): string {
    return this.dialog.header();
  }

  /*  Count
      @type     public
      @return   string
   */
  public count (): string {
    return `${this.dialog.index + 1} of ${this.dialog.content.length}`;
  }

  /*  Service
      @override true
      @type     public
      @return   DialogService
      - default functions occur if not overridden by sub class
   */
  public  service (): DialogService {
    return this.dialogService;
  }

  /*  Content
      @type     public
      @return   any
      - default functions occur if not overridden by sub class
   */
  public  content (): any {
    return this.dialog.screen();
  }

  /*  Label
      @override true
      @type     public
      @param    key [string]
      @param    alt [string !optional]
      @return   string
      - default functions occur if not overridden by sub class
   */
  public  label (key: string, alt?: string): string {
    return DIALOG_STRING_MAP[this.dialog.type][key];
  }

  /*  Reset
      @override true
      @type     public
      @return   void
      - default functions occur if not overridden by sub class
   */
  public  reset (): void {
    this.dialogService.dismiss();
  }

  /*  Submit
      @override true
      @type     public
      @return   void
      - default functions occur if not overridden by sub class
   */
  public  submit (): void {
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
