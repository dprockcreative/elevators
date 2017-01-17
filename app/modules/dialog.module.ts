import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogService } from '../services/index';
import { DialogComponent } from '../components/index';
import { DYNAMIC_COMPONENTS, DialogAlert, DialogConfirm, DialogWizard } from './dialogs/index';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  providers:    [ DialogService ],
  declarations: [ DYNAMIC_COMPONENTS, DialogComponent, DialogAlert, DialogConfirm, DialogWizard ],
  exports:      [ DialogComponent ]
})

export class DialogModule {}
