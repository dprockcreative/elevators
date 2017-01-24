import { Component } from '@angular/core';

import { LogService, SessionService } from '../services/index';

@Component({
  selector: 'main',
  template: `
    <aside></aside>
    <section></section>
    <dialogs></dialogs>
  `
})

export class AppComponent {

  constructor (
    private sessionService: SessionService,
    private logService: LogService
  ) {
    logService.useConsole('info');
  }

}
