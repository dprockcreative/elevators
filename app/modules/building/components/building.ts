import { Component, OnInit } from '@angular/core';

import { ShaftService } from '../../shaft/service';

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
    this.shaftService.build()
      .then(() => {
        let length = this.shaftService.getLength();
        let top = this.shaftService.getTopStory();
        console.info(`Building Rendered`, `Shafts: *${length}*`, `Highest Floor: *${top}*`);
      });
  }
}
