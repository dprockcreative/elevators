import { Injectable } from '@angular/core';

import { Log } from '../interfaces/index';

@Injectable()
export class LogService {

  private queue: Log[] = [];

  /*  Collection
      @type public
      @return queue [Log Array]
   */
  public collection (): Log[] {
    return this.queue;
  }

  /*  Use Console
      @type   public
      @param  method [string]
      @return void
      - applies console method to Log
   */
  public useConsole (method: string): void {
    try {
      window.console[method] = (...args) => {
        this.log([...args].join('. ') + '.');
      };
    } catch(err) {
      console.error('LogService: ' + err);
    }
  }

  /*  Log
      @type public
      @param message [string]
      @return void
   */
  public log (message: string): void {
    let log = new Log(message);
    this.queue.unshift(log);
    log.live().then(() => this.remove());
  }

  /*  Remove
      @type public
      @return queue [Log Array]
   */
  public remove (): void {
    this.queue.pop();
  }

}