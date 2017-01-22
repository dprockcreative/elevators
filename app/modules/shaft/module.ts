import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ShaftComponent,
  ElevatorModule
} from './index';

@NgModule({
  imports:      [ CommonModule, ElevatorModule ],
  declarations: [ ShaftComponent ],
  exports:      [ ShaftComponent ]
})

export class ShaftModule {}
