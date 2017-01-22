import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FloorModule,
  ShaftModule,
  FloorService,
  ShaftService,
  SessionService,
  TasksService,
  Number2AlphaPipe,
  BuildingComponent,
  FloorsComponent,
  FoundationComponent,
  ShaftsComponent
} from './index';

@NgModule({
  imports:      [ CommonModule, ShaftModule, FloorModule ],
  providers:    [ FloorService, ShaftService, SessionService, TasksService ],
  declarations: [ BuildingComponent, FloorsComponent, FoundationComponent, ShaftsComponent, Number2AlphaPipe ],
  exports:      [ BuildingComponent ]
})

export class BuildingModule {}
