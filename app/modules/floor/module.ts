import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FloorComponent
} from './index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FloorComponent ],
  exports:      [ FloorComponent ]
})

export class FloorModule {}
