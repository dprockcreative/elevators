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
      @param  header [string]
      @param  content [array]
      @param  immediate [boolean !optional]
      @return dialog [instance of Dialog]
   */
  public alert (header: string, content: any[], immediate?: boolean): Dialog {
    return this.create(header, content, DIALOG_TYPE_ALERT, immediate);
  }

  /*  Confirm
      @type   public
      @param  header [string]
      @param  content [array]
      @param  immediate [boolean !optional]
      @return dialog [instance of Dialog]
   */
  public confirm (header: string, content: any[], immediate?: boolean): Dialog {
    return this.create(header, content, DIALOG_TYPE_CONFIRM, immediate);
  }

  /*  Wizard
      @type   public
      @param  header [string]
      @param  content [array]
      @param  immediate [boolean !optional]
      @return dialog [instance of Dialog]
   */
  public wizard (header: string, content: any[], immediate?: boolean): Dialog {
    return this.create(header, content, DIALOG_TYPE_WIZARD, immediate);
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
      @param  header [string]
      @param  content [array]
      @param  type [string - constant]
      @param  immediate [boolean !default = true]
      @return dialog [instance of Dialog]
   */
  private create (header: string, content: any[], type: string, immediate: boolean = true): Dialog {
    let dialog = new Dialog(header, content, type);
    if (immediate) {
      this.add(dialog).then(d => d.activate());
    }
    return dialog;
  }
}
