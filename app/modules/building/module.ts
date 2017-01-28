import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FloorModule,
  ShaftModule,
  TooltipModule,
  FloorService,
  ShaftService,
  Number2AlphaPipe,
  BuildingComponent,
  FloorsComponent,
  FoundationComponent,
  ShaftsComponent
} from './index';


@NgModule({
  imports:      [ CommonModule, FloorModule, ShaftModule, TooltipModule ],
  providers:    [ FloorService, ShaftService ],
  declarations: [ BuildingComponent, FloorsComponent, FoundationComponent, ShaftsComponent, Number2AlphaPipe ],
  exports:      [ BuildingComponent ]
})

export class BuildingModule {}
