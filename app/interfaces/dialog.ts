import {
  DIALOG_TYPES,
  DIALOG_STRING_MAP,
  DIALOG_DEFAULT_TYPE
} from '../constants/index';

interface iDialog {
	parent	: any;
	index		: number;
	header	: string;
	body		: any;
	action	: (args?: any) => Promise<any>;
}

export class Dialog implements iDialog {
	parent	: any;
	index		: number 	= 0;
	header	: string 	= '';
	body		: any 		= '';

	protected type		: string 								= DIALOG_DEFAULT_TYPE;
	protected strings : {[key: string]: any} 	= DIALOG_STRING_MAP;
	protected model		: {[key: string]: any} 	= {};

	constructor (header: string = '', body: any = '', type?: string) {
		this.header = header;
		this.body = body;
		if (type && !!~DIALOG_TYPES.indexOf(type)) {
			this.type = type;
		}
	}

  /*  Action
      @type   public
      @param  args [any]
      @return Promise [any]
   */
	public action (args?: any): Promise<any> {
		console.debug('Dialog->action[default]', args);
		return new Promise((resolve, reject) => {
			resolve(args);
			this.dismiss();
		});
	}

  /*  Dismiss
      @type   protected
      @return void
   */
	protected dismiss (): void {
		console.debug('Dialog->dismiss');
		this.parent.dismiss(this.index);
	}

  /*  Labels
      @type   protected
      @param  which [string]
      @return string
   */
	protected labels (which: string): string {
		return this.strings[this.type][which];
	}

  /*  Submit
      @type   protected
      @param  model [!optional hashmap]
      @return void
   */
	protected submit (model?: {[key: string]: any}): void {
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
		};
	}

  /*  Reset
      @type   protected
      @return void
   */
	protected reset (): void {
		switch (this.type) {
			case 'wizard':
			break;
			default:
				this.action(false).then(() => {
					this.dismiss();
				});
			break;
		};
	}

  /*  Update
      @type   protected
      @param  model [hashmap]
      @return void
   */
	protected update (model: {[key: string]: any}): void {
		Object.assign(this.model, model);
	}
}
