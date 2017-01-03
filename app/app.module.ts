import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import './extensions/rxjs-extensions';

import { AppComponent, BuildingComponent, DialogComponent } from './components/index';
import { ShaftModule, FloorModule } from './modules/index';
import { InMemoryDataService, DialogService, FloorService, ShaftService, TasksService } from './services/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ShaftModule,
    FloorModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
  ],
  declarations: [ AppComponent, BuildingComponent, DialogComponent ],
  providers:    [ DialogService, FloorService, ShaftService, TasksService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
