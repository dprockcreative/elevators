import { Injectable } from '@angular/core';

import { Dialog } from '../interfaces/index';

@Injectable()
export class DialogService {

  queue: Dialog[] = [];

  constructor () {
    /*
    setTimeout(() => {
      this.add(this.make('Sample header', 'Sample message', () => {
        return new Promise((resolve, reject) => {
          console.warn('Sample Promise');
          resolve('sample resolve');
        });
      }));
    }, 1000);
    */
  }

  /*  Get
      @type   public
      @param  index [number = 0]
      @return object [Dialog]
   */
  public get (index: number = 0): Dialog {
    return this.queue[index];
  }

  /*  Make
      @type   public
      @param  header [string]
      @param  message [string]
      @param  type [!optional string]
      @return object [Dialog]
   */
  public make (header: string, message: string, type?:string): Dialog {
    return new Dialog(header, message, type);
  }

  /*  Add
      @type   public
      @param  dialog [Dialog]
      @return void
   */
  public add (dialog: Dialog): void {
    dialog.parent = this;
    dialog.index = this.queue.length;
    this.queue.push(dialog);
  }

  /*  Sequence
      @type   public
      @param  dialogs [Dialog Array]
      @return void
   */
  public sequence (dialogs: Dialog[]): void {
    for (var i = 0; i < dialogs.length; i++) {
      this.add(dialogs[i]);
    }
  }

  /*  Dismiss
      @type   public
      @param  index [number = 0]
      @return void
   */
  public dismiss (index: number = 0): void {
    this.queue.splice(index, 1);
  }

  /*  Active
      @type   public
      @return boolean
   */
  public active (): boolean {
    return this.queue.length > 0;
  }

}
