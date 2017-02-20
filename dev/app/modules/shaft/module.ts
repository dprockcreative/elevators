import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ShaftComponent,
} from './components/shaft';

import { ElevatorModule } from '../elevator/module';

@NgModule({
  imports:      [ CommonModule, ElevatorModule ],
  declarations: [ ShaftComponent ],
  exports:      [ ShaftComponent ]
})

export class ShaftModule {}
