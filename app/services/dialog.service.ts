import { Injectable } from '@angular/core';

import { Dialog } from '../interfaces/index';

import {
  DIALOG_TYPE_ALERT,
  DIALOG_TYPE_CONFIRM,
  DIALOG_TYPE_WIZARD
} from '../constants/index';

@Injectable()
export class DialogService {

  queue: Dialog[] = [];

  constructor () {}

  /*  Alert
      @type   public
      @param  args [rest - array]
      @return dialog [instance of Dialog]
   */
  public alert (...args: any[]): Dialog {
    return this.create(DIALOG_TYPE_ALERT, args[0]);
  }

  /*  Confirm
      @type   public
      @param  args [rest - array]
      @return dialog [instance of Dialog]
   */
  public confirm (...args: any[]): Dialog {
    return this.create(DIALOG_TYPE_CONFIRM, args[0]);
  }

  /*  Wizard
      @type   public
      @param  args [rest - array]
      @return dialog [instance of Dialog]
   */
  public wizard (...args: any[]): Dialog {
    return this.create(DIALOG_TYPE_WIZARD, args[0]);
  }

  /*  Current
      @type   public
      @return boolean
   */
  public current (): Dialog {
    return this.queue[0] || new Dialog();
  }

  /*  Active
      @type   public
      @return boolean
   */
  public active (): boolean {
    return this.queue.length ? this.current().active : false;
  }

  /*  Add
      @type   public
      @param  dialog [Dialog]
      @return void
   */
  public add (dialog: Dialog): Promise<Dialog> {
    this.queue.push(dialog);
    return Promise.resolve(dialog);
  }

  /*  Remove
      @type   public
      @param  dialog [Dialog]
      @return void
   */
  public remove (dialog: Dialog): void {
    let index;
    if (!!~(index = this.queue.indexOf(dialog))) {
      this.queue.splice(index, 1);
    }
  }

  /*  Complete
      @type   public
      @param  args [any]
      @return void
   */
  public complete (args?: any): void {
    let dialog = this.current();
    dialog.deactivate().then(() => {
      if (typeof args === 'boolean') {
        dialog.deferred[args ? 'resolve' : 'reject']();
      } else {
        dialog.deferred.resolve(args);
      }
      this.remove(dialog);
    });
  }

  /*  Dismiss
      @type   public
      @return void
   */
  public dismiss (args?: any): void {
    let dialog = this.current();
    dialog.deactivate().then(() => {
      dialog.deferred.resolve(args);
      this.remove(dialog);
    });
  }

  /*  Create
      @type   private
      @param  type [string - constant]
      @param  args [rest - array]
      @return dialog [instance of Dialog]
   */
  private create (type: string, ...args: any[]): Dialog {
    let header: string = args[0][0];
    let content: any[] = args[0][1];
    let immediate: boolean = args[0][2] ? Boolean(args[0][2]) : true;
    let dialog = new Dialog(header, content, type);
    if (immediate) {
      this.add(dialog).then(d => d.activate());
    }
    return dialog;
  }
}
