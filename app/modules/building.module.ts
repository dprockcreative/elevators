import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShaftModule } from './shaft.module';
import { FloorModule } from './floor.module';

import {
  FloorService,
  ShaftService,
  SessionService,
  TasksService
} from '../services/index';

import {
  BuildingComponent,
  FloorsComponent,
  FoundationComponent,
  ShaftsComponent
} from '../components/index';

import {
  Number2AlphaPipe
} from '../pipes/index';

@NgModule({
  imports:      [ CommonModule, ShaftModule, FloorModule ],
  providers:    [ FloorService, ShaftService, SessionService, TasksService ],
  declarations: [ BuildingComponent, FloorsComponent, FoundationComponent, ShaftsComponent, Number2AlphaPipe ],
  exports:      [ BuildingComponent ]
})

export class BuildingModule {}
