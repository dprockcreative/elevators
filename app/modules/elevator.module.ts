import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevatorDirective } from '../directives/index';
import { ElevatorComponent } from '../components/index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ElevatorComponent, ElevatorDirective ],
  exports:      [ ElevatorComponent ]
})

export class ElevatorModule { }
