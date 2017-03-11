import {
  BooleanFunc
} from '../types';

/**
 *  Waits For
 *  @type private
 *  @param callback [(): boolean => {}]
 *  @param timeout [!optional number]
 *  @return promise [any]
 */
export const WaitsFor = (callback: BooleanFunc, cancels?: BooleanFunc, timeout?: number): Promise<any> => {
  return new Promise((resolve, reject) => {

    if (cancels && cancels()) {
      reject();
    }

    let T, I;
    const iterate = () => {
      if (callback()) {
        clearTimeout(I);
        resolve();
      } else {
        I = setTimeout(iterate, 0);
      }
    };

    iterate();

    if (timeout) {
      T = setTimeout(() => {
        if (!callback()) {
          clearTimeout(T);
          reject(`WaitsFor operation timed out [${callback.toString()}] [${timeout}]`);
        }
      }, timeout);
    }
  });
};
