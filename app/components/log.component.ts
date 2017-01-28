import { Component, DoCheck } from '@angular/core';

import { Log } from '../interfaces/index';
import { LogService } from '../services/index';

@Component({
  selector: 'aside',
  template: `
    <ul [ngClass]="{'active': active()}">
      <li *ngFor="let log of collection" [ngClass]="{'expired': log.expired}" [innerHTML]="log.message | markdown"></li>
    </ul>
  `
})

export class LogComponent implements DoCheck {

  collection: Log[] = [];

  constructor(
    private logService: LogService
  ) {}

  active (): boolean {
    return this.collection.length > 0;
  }

  ngDoCheck (): void {
    this.collection = this.logService.collection();
  }

}
