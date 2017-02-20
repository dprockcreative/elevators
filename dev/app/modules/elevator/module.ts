import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElevatorDirective,
  ElevatorComponent
} from './index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ElevatorComponent, ElevatorDirective ],
  exports:      [ ElevatorComponent ]
})

export class ElevatorModule {}
