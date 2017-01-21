import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ShaftModule,
  ShaftService
} from '../shaft/index';

import {
  FloorModule,
  FloorService
} from '../floor/index';

import {
  SessionService,
  TasksService
} from '../../services/index';

import {
  BuildingComponent,
  FloorsComponent,
  FoundationComponent,
  ShaftsComponent
} from './components/index';

import {
  Number2AlphaPipe
} from '../../pipes/index';

@NgModule({
  imports:      [ CommonModule, ShaftModule, FloorModule ],
  providers:    [ FloorService, ShaftService, SessionService, TasksService ],
  declarations: [ BuildingComponent, FloorsComponent, FoundationComponent, ShaftsComponent, Number2AlphaPipe ],
  exports:      [ BuildingComponent ]
})

export class BuildingModule {}
