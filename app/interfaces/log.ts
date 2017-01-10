import {
  LOG_DISMISS_TIMEOUT,
  LOG_EXPIRED_TIMEOUT
} from '../constants/index';

interface iLog {
  message: string;
  expired: boolean;
  live (): Promise<any>;
}

export class Log implements iLog {
  message: string;
  expired: boolean = false;

  constructor (message: string) {
    this.message = message;
  }

  live (): Promise<any> {
    return new Promise((resolve, reject) => {
      let TID = setTimeout(() => {
        this.expired = true;
        clearTimeout(TID);
        TID = setTimeout(() => {
        	resolve();
        	clearTimeout(TID);
        }, LOG_EXPIRED_TIMEOUT);
      }, LOG_DISMISS_TIMEOUT);
    });
  }
}