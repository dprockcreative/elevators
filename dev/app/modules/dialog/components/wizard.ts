import { Component, Input, OnInit } from '@angular/core';

import {
  DialogService,
  Dialog,
  DIALOG_STRING_MAP,
  DYNAMIC_COMPONENTS,
  DYNAMIC_COMPONENTS_MAP
} from '../index';

import { DialogComponent } from './dialog';

@Component({
  selector: 'wizard',
  template: `
    <div *ngFor="let dcd of dcds; let index = index">
      <content-component *ngIf="(index == dialog.index)" [dcd]="dcd"></content-component>
    </div>
    <footer>
      <label>
       <input type="button" [value]="label('no', 'start')" (click)="reset()" />
      </label>
      <label>
       <input type="submit" [value]="label('yes', 'end')" [disabled]="disabled()" />
      </label>
    </footer>
  `
})

export class DialogWizard extends DialogComponent implements OnInit {

  dcds: any[] = [];

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  /*  Disabled
      @type     public
      @return   void
      - overrides DialogComponent
   */
  public disabled (): boolean {
    return this.dialog.end() && (this.dialog.form.valid === false) || false;
  }

  /*  Label
      @type     public
      @return   string
      - overrides DialogComponent
   */
  public label (key: string, alt?: string): string {
    if (this.dialog.start() && key === 'no') {
      return DIALOG_STRING_MAP[this.dialog.type]['start'];
    } else if (this.dialog.end() && key === 'yes') {
      return DIALOG_STRING_MAP[this.dialog.type]['end'];
    } else {
      return DIALOG_STRING_MAP[this.dialog.type][key];
    }
  }

  /*  Reset
      @type     public
      @return   void
      - overrides DialogComponent
   */
  public reset (): void {
    if (!this.dialog.prev()) {
      super.service().complete(false);
    }
  }

  /*  Submit
      @type     public
      @return   void
      - overrides DialogComponent
   */
  public submit (): void {
    if (!this.dialog.next()) {
      super.service().complete(this.dialog.form.value);
    }
  }

  /*  Dynamic Component Definitions
      @type     public
      @return   dcds [Array object]
   */
  public dynamicComponentDefinitions (): any[] {

    let tdcds: any[] = [];

    this.dialog.content.slice(0).forEach(screen => {

      let type = screen.type;

      if (type in DYNAMIC_COMPONENTS_MAP) {

        let inputs = Object.assign({}, screen.inputs, { 'form' : this.dialog.form });

        let dcd = Object.assign({}, DYNAMIC_COMPONENTS_MAP[type], { 'inputs' : inputs });

        tdcds.push(dcd);
      }

    });

    return tdcds;
  }

  ngOnInit (): void {
    super.label   = this.label;
    super.reset   = this.reset;
    super.submit  = this.submit;
    this.dcds     = this.dynamicComponentDefinitions();
  }
}
