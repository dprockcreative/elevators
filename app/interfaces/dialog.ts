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
  content   : any[];
  models    : {[key: string]: any}
  deferred  : Deferred<any>;
  next      (): boolean;
  header    (): string;
  screen    (): any;
  activate  (): void;
  deactivate(): Promise<any>;
  promise   (): Promise<any>;
}

export class Dialog implements iDialog {
  index   : number                = 0;
  active  : boolean               = false;
	type    : string                = '';
  title   : string                = '';
  content : any[]                 = [];
  models  : {[key: string]: any}  = {};

  deferred: Deferred<any>;

	constructor (title?: string, content?: string[], type?: string) {
    if (title && content && type) {
      this.title    = title;
      this.content  = content;
      this.type     = type;
      this.deferred = new Deferred<any>();

      this.models = {
        'foo': 'I am Foo'
      };
    }
	}

  /*  Next
      @type   public
      @return boolean
   */
  public next (): boolean {
    this.index++;
    return this.index < this.content.length;
  }

  /*  Header
      @type   public
      @return title [string]
   */
  public header (): string {
    return this.title;
  }

  /*  Screen
      @type   public
      @return any
   */
  public screen (): any {
    return this.content[this.index];
  }

  /*  Activate
      @type   public
      @return void
   */
  public activate (): void {
    this.active = true;
  }

  /*  Deactivate
      @type   public
      @return Promise [any]
   */
  public deactivate (): Promise<any> {
    return new Promise((resolve, reject) => {
      this.active = false;
      let T = setTimeout(() => {
        resolve();
        clearTimeout(T);
      }, 500);
    });
  }

  /*  Labels
      @type   public
      @return Promise [any]
   */
  public promise (): Promise<any> {
    return this.deferred.promise;
  }
}