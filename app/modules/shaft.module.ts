import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevatorModule } from './elevator.module';
import { ShaftComponent } from '../components/index';

@NgModule({
  imports:      [ CommonModule, ElevatorModule ],
  declarations: [ ShaftComponent ],
  exports:      [ ShaftComponent ]
})

export class ShaftModule { }
