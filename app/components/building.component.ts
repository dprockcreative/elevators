import { Component, OnInit } from '@angular/core';

import { SessionService, ShaftService } from '../services/index';

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

  constructor (
    private shaftService: ShaftService
  ) {}

  ngOnInit (): void {
    console.log('BuildingComponent', this.shaftService);
    this.shaftService.build();
  }
}

/*
      <shafts></shafts>
      <floors></floors>
      <foundation></foundation>
*/
