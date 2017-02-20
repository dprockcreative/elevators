import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  DialogService,
  DialogComponent,
  DialogAlert,
  DialogConfirm,
  DialogWizard,
  DYNAMIC_COMPONENTS
} from './index';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule ],
  providers:    [ DialogService ],
  declarations: [ DYNAMIC_COMPONENTS, DialogComponent, DialogAlert, DialogConfirm, DialogWizard ],
  exports:      [ DialogComponent ]
})

export class DialogModule {}
