import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import './extensions/rxjs-extensions';

import { AppComponent, BuildingComponent, LogComponent, DialogComponent } from './components/index';
import { MarkdownPipe, Number2AlphaPipe } from "./pipes/index";
import { DialogModule, FloorModule, ShaftModule } from './modules/index';
import { InMemoryDataService, FloorService, LogService, SessionService, ShaftService, TasksService } from './services/index';

@NgModule({
  imports: [
    BrowserModule,
    DialogModule,
    FormsModule,
    ShaftModule,
    FloorModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
  ],
  providers:    [ FloorService, LogService, SessionService, ShaftService, TasksService ],
  declarations: [ AppComponent, BuildingComponent, LogComponent, MarkdownPipe, Number2AlphaPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
