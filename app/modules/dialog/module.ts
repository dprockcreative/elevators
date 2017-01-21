import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogService } from './service';
import { DialogComponent, DialogAlert, DialogConfirm, DialogWizard } from './components/index';
import { DYNAMIC_COMPONENTS } from './factories';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule ],
  providers:    [ DialogService ],
  declarations: [ DYNAMIC_COMPONENTS, DialogComponent, DialogAlert, DialogConfirm, DialogWizard ],
  exports:      [ DialogComponent ]
})

export class DialogModule {}
