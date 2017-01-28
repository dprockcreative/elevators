import { Injectable, NgZone } from '@angular/core';

import {
  DialogService,
  DIALOG_WIZARD_WELCOME
} from '../modules/dialog/index';

import {
  SESSION_START_NS,
  SESSION_WELCOMED_NS,
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

    let setWelcome = () => {
      this.welcomed = true;
      sessionStorage.setItem(SESSION_WELCOMED_NS, String(this.welcomed));
    };

    if (!this.welcomed) {
      let check = (): boolean => {

        if (DateTimeHasPassed(new Date(), this.start, SESSION_WELCOMED_DELAY)) {

          this.dialogService.wizard(DIALOG_WIZARD_WELCOME).promise()
            .then(setWelcome)
            .catch(setWelcome);

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
