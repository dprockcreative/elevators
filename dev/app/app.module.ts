import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import './extensions/rxjs-extensions';

import {
  AppComponent,
  LogComponent
} from './components/index';

import {
  BuildingModule,
  DialogModule,
  TooltipModule
} from './modules/index';

import {
  InMemoryDataService,
  LogService,
  SessionService,
  TasksService
} from './services/index';

import {
  MarkdownPipe
} from './pipes/index';

@NgModule({
  imports: [
    BrowserModule,
    BuildingModule,
    DialogModule,
    FormsModule,
    HttpModule,
    TooltipModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
  ],
  providers: [
    LogService,
    SessionService,
    TasksService
  ],
  declarations: [
    AppComponent,
    LogComponent,
    MarkdownPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
