import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogService } from '../services/index';
import { DialogComponent } from '../components/index';
import { DialogAlert, DialogConfirm, DialogWizard } from './dialogs/index';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  providers:    [ DialogService ],
  declarations: [ DialogComponent, DialogAlert, DialogConfirm, DialogWizard ],
  exports:      [ DialogComponent ]
})

export class DialogModule {}
