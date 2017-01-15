import { Deferred } from '../extensions/deferred';

import {
  DIALOG_TYPES,
  DIALOG_STRING_MAP,
  DIALOG_TYPE_ALERT,
  DIALOG_TYPE_CONFIRM,
  DIALOG_TYPE_WIZARD
} from '../constants/index';

interface iDialog {
  index     : number;
  active    : boolean;
  type      : string;
  title     : string;
  content   : string[];
  deferred  : Deferred<any>;
  next      (): boolean;
  header    (): string;
  screen    (): string;
  activate  (): void;
  deactivate(): Promise<any>;
  promise   (): Promise<any>;
}

export class Dialog implements iDialog {
  index   : number    = 0;
  active  : boolean   = false;
	type    : string    = '';
  title   : string    = '';
  content : string[]  = [];
  deferred: Deferred<any>;

	constructor (title?: string, content?: string[], type?: string) {
    if (title && content && type) {
      this.title    = title;
      this.content  = content;
      this.type     = type;
      this.deferred = new Deferred<any>();
    }
	}

  public next (): boolean {
    this.index++;
    return this.index < this.content.length;
  }

  public header (): string {
    return this.title;
  }

  public screen (): string {
    return this.content[this.index];
  }

  public activate (): void {
    this.active = true;
  }

  public deactivate (): Promise<any> {
    return new Promise((resolve, reject) => {
      this.active = false;
      let T = setTimeout(() => {
        resolve();
        clearTimeout(T);
      }, 500);
    });
  }

  public promise (): Promise<any> {
    return this.deferred.promise;
  }
}

  /*  Labels
      @type   protected
      @param  which [string]
      @return string
	protected labels (which: string): string {
		return this.strings[this.type][which];
	}
   */
  /*  Action
      @type   public
      @param  args [any]
      @return Promise [any]
	public action (args?: any): Promise<any> {
		console.debug('Dialog->action[default]', args);
		return new Promise((resolve, reject) => {
			resolve(args);
			this.dismiss();
		});
	}

   */

  /*  Dismiss
      @type   protected
      @return void
	protected dismiss (): void {
		console.debug('Dialog->dismiss');
		this.parent.dismiss(this.index);
	}
   */
  /*  Submit
      @type   protected
      @param  model [!optional hashmap]
      @return void
	protected submit (model?: {[key: string]: any}): boolean {
		console.debug('Dialog->submit');

		switch (this.type) {
			case 'wizard':
				this.update(model);
				this.action(this.model).then(() => {
					this.dismiss();
				});
			break;
			default:
				this.action(true).then(() => {
					this.dismiss();
				});
			break;
		}
		return false;
	}
   */


  /*  Reset
      @type   protected
      @return void
	protected reset (): void {
		switch (this.type) {
			case 'wizard':
			break;
			default:
				this.action(false).then(() => {
					this.dismiss();
				});
			break;
		}
	}
   */


  /*  Update
      @type   protected
      @param  model [hashmap]
      @return void
	protected update (model: {[key: string]: any}): void {
		Object.assign(this.model, model);
	}
   */
/*
		this.header = header;
		this.body = body;
		if (type && !!~DIALOG_TYPES.indexOf(type)) {
			this.type = type;
		}
*/


/*
	parent	: any;
	index		: number 	= 0;
	header	: string 	= '';
	body		: any 		= '';

	protected model		: {[key: string]: any} 	= {};
	protected strings : {[key: string]: any} 	= DIALOG_STRING_MAP;
*/

/*
	parent	: any;
	index		: number;
	header	: string;
	body		: any;
	action	: (args?: any) => Promise<any>;
*/
