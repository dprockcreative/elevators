import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShaftsComponent, FloorsComponent } from '../components/index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ShaftsComponent, FloorsComponent ],
  exports:      [ ShaftsComponent, FloorsComponent ]
})

export class BuildingModule {}
