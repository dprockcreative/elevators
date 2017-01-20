import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Deferred } from '../extensions/deferred';

interface DialogI {
  index: number;
  type: string;
  title: string;
  active: boolean;
  content: any[];
  form: FormGroup;
  deferred: Deferred<any>;
  prev      (): boolean;
  next      (): boolean;
  start     (): boolean;
  end       (): boolean;
  header    (): string;
  screen    (): any;
  activate  (): void;
  deactivate(): Promise<any>;
  promise   (): Promise<any>;
}

export class Dialog implements DialogI {
  index: number   = 0;
  type: string    = '';
  title: string   = '';
  active: boolean = false;
  content: any[]  = [];
  form: FormGroup = new FormGroup({});
  deferred: Deferred<any>;

  constructor (title?: string, content?: any[], type?: string) {
    if (title && content && type) {
      this.title    = title;
      this.content  = content;
      this.type     = type;
      this.deferred = new Deferred<any>();
      this.contentToFormGroup();
    }
  }

  /*  Previous
      @type   public
      @return boolean
   */
  public prev (): boolean {
    if (this.index > 0) {
      this.index--;
      return true;
    }
    return false;
  }

  /*  Next
      @type   public
      @return boolean
   */
  public next (): boolean {
    return this.index++, (this.index < this.content.length);
  }

  /*  Start
      @type   public
      @return boolean
   */
  public start (): boolean {
    return this.index === 0;
  }

  /*  End
      @type   public
      @return boolean
   */
  public end (): boolean {
    return (this.index === (this.content.length - 1));
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

  /*  Content To Form Group
      @type   public
      @return void
   */
  private contentToFormGroup (): void {

    let screens = this.content.slice(0);
    let fcs = {};

    screens.forEach(screen => {
      if (typeof screen === 'object' && ('inputs' in screen && 'name' in screen.inputs)) {
        fcs[screen.inputs.name] = new FormControl(screen.inputs.value || '', Validators.required);
      }
    });

    this.form = new FormGroup(fcs);
  }
}
