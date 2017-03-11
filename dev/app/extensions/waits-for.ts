import { NgZone } from '@angular/core';

import {
  BooleanFunc
} from '../types';

/**
 *  Waits For
 *  @type public
 *  @param callback [(): boolean => {}]
 *  @param cancels [!optional (): boolean => {}]
 *  @param timeout [!optional number]
 *  @return promise [any]
 */
export const WaitsFor = (callback: BooleanFunc, cancels?: BooleanFunc, timeout?: number): Promise<any> => {
  let ngZone = new NgZone(false);

  return new Promise((resolve, reject) => {
    ngZone.runOutsideAngular(() => {
      if (cancels && cancels()) {
        reject();
      }

      let I;
      let T;

      I = setInterval(() => {
        if (callback()) {
          clearInterval(I);
          resolve();
        }
      }, 1);

      if (timeout) {
        T = setTimeout(() => {
          if (!callback()) {
            clearTimeout(T);
            reject(`WaitsFor operation timed out [${callback.toString()}] [${timeout}]`);
          }
        }, timeout);
      }
    });
  });
};
