import { Component, OnInit } from '@angular/core';

import { LogService, SessionService, ShaftService } from '../services/index';

@Component({
  selector: 'section',
  template: `
    <article>
      <shafts></shafts>
      <floors></floors>
      <foundation></foundation>
    </article>
  `
})

export class BuildingComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private logService: LogService,
    private shaftService: ShaftService
  ) {
    logService.useConsole('info');
  }

  ngOnInit (): void {
    this.shaftService.build();
  }
}

/*
      <shafts></shafts>
      <floors></floors>
      <foundation></foundation>
*/
