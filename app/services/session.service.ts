import { Injectable, NgZone } from '@angular/core';

import { DialogService } from './dialog.service';

import {
  SESSION_START_NS,
  SESSION_WELCOMED_NS,
  SESSION_TIME_TO_MIN,
  SESSION_TIME_FROM_MIN,
  SESSION_QUERY_INTERVAL,
  SESSION_WELCOMED_DELAY
} from '../constants/index';

// Date Utilities
const DateToLocaleString = (date: Date): string => {
  return date.toLocaleString();
};

const DateTimeHasPassed = (current: Date, stored: Date, compare: number): boolean => {
  let time = current.getTime() - stored.getTime();
  return time > compare;
};

@Injectable()
export class SessionService {

  start: Date;
  welcomed: boolean = false;

  constructor (
    private ngZone: NgZone, 
    private dialogService: DialogService
  ) {
    this.query();
  }

  /*  Is Welcomed
      @type   public
      @return welcomed [boolean]
   */
  public isWelcomed (): boolean {
    return this.welcomed;
  }

  /*  Welcome
      @type   public
      @param  welcome [boolean - true]
      @return void
   */
  public welcome (welcome: boolean = true): void {
    this.welcomed = welcome;
  }

  /*  Query
      @type   private
      @return void
   */
  private query (): void {

    // Session Start DTG
    let start = sessionStorage.getItem(SESSION_START_NS);
    this.start = start ? new Date(start) : new Date();

    if (!start) {
      start = DateToLocaleString(this.start);
      sessionStorage.setItem(SESSION_START_NS, start);
    }

    // Session Welcome Wizard
    this.welcomed = sessionStorage.getItem(SESSION_WELCOMED_NS) ? true : false;

    if (!this.welcomed) {
      let check = (): boolean => {
        if (DateTimeHasPassed(new Date(), this.start, SESSION_WELCOMED_DELAY)) {

          console.info('SessionService->', 'inject dialog');
//setTimeout(() => {

          let confirm = this.dialogService.confirm(
            'Does this work',
            [`<p>Click confirm or cancel</p>`]
          );

          let alert = this.dialogService.alert(
            'Hello and Welcome',
            [`<p>Content Part 1</p>`, `<p>Content Part 2</p>`]
          );

          confirm.promise()
            .then(() => {
              console.log('results of confirm action', 'confirmed');
              this.dialogService.remove(alert);
            })
            .catch(() => {
              console.log('results of confirm action', 'cancelled');
            });

          alert.promise().then(() => {
            console.log('results of alert action');
          });
/*
          let alert = this.dialogService.alert(
            'Hello and Welcome',
            [`<p>Content Part 1</p>`, `<p>Content Part 2</p>`]
          );

          alert.then(()=> {
            console.log('results of alert action');
          });
*/
//}, 1000);

/*
          let wizard = this.dialogService.make(
            'Hello and Welcome',
            'the body',
            'wizard'
          );

          this.dialogService.add(wizard);
*/

          return true;
        }
        return false;
      };

      if (!check()) {

        this.ngZone.runOutsideAngular(() => {
          let INT = setInterval(() => {

            if (this.welcomed || check()) {
              clearInterval(INT);
            }

          }, SESSION_QUERY_INTERVAL);
        });
      }

    }

  }


}