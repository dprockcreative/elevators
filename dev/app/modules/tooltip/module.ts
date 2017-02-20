import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TooltipComponent
} from './components/index';

import {
  TooltipDirective
} from './directives/index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TooltipComponent, TooltipDirective ],
  exports:      [ TooltipComponent ]
})

export class TooltipModule {}
