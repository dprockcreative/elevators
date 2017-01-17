import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Dialog } from '../../interfaces/index';

import { DialogService } from '../../services/index';

import { DialogComponent } from '../../components/index';

import { DYNAMIC_COMPONENTS, DYNAMIC_COMPONENTS_MAP } from './content';

@Component({
  selector: 'wizard',
  template: `
    <div *ngFor="let screen of dialog.content; let index = index">
      <content-component *ngIf="(index == dialog.index)" [dcd]="content(screen)" [formGroup]="form"></content-component>
    </div>
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

  @Input() form: FormGroup;

  constructor (
    dialogService: DialogService
  ) {
    super(dialogService);
    this.dialog = dialogService.current();
  }

  /*  Content
      @type     protected
      @params   screen [{[key: string] string}]
      @return   dynamic content definition [object]
      - overrides DialogComponent
   */
  protected content (screen?: any): any {
    let dcd = {
      'component': DYNAMIC_COMPONENTS_MAP['generic-content'],
      'inputs': { 'label' : screen.label || '' }
    };

    if (screen.type in DYNAMIC_COMPONENTS_MAP) {
      Object.assign(dcd, {'component' : DYNAMIC_COMPONENTS_MAP[screen.type]});
    }

    if (screen.model && screen.model.name) {
      Object.assign(dcd.inputs, {'name' : screen.model.name, 'form': this.form});
    }

    return dcd;
  }

  /*  Submit
      @type     protected
      @return   void
      - overrides DialogComponent
   */
  protected submit (): void {
    console.log('DialogWizard::submit', this.form);
    if (!this.dialog.next()) {
      super.service().dismiss();
    }
  }

  ngOnInit (): void {
    let screens = this.dialog.content.slice(0);

    let fcs = {};
    screens.forEach((screen, index) => {
      if('model' in screen && 'name' in screen.model) {
        fcs[screen.model.name] = new FormControl(screen.model.value || '');
      }
    });

    this.form = new FormGroup(fcs);

    super.content = this.content;
    super.submit  = this.submit;

    console.log('DialogWizard::ngOnInit', fcs);

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