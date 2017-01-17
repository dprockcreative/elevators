export const DIALOG_TYPES = ['alert', 'confirm', 'wizard'];

export const DIALOG_TYPE_ALERT    = DIALOG_TYPES[0];
export const DIALOG_TYPE_CONFIRM  = DIALOG_TYPES[1];
export const DIALOG_TYPE_WIZARD   = DIALOG_TYPES[2];

export const DIALOG_STRING_MAP = {
  [DIALOG_TYPE_ALERT]   : { 'yes' : 'ok'},
  [DIALOG_TYPE_CONFIRM] : { 'yes' : 'confirm', 'no' : 'cancel'},
  [DIALOG_TYPE_WIZARD]  : { 'yes' : 'next', 'no' : 'prev', 'start' : 'cancel', 'end' : 'complete' },
};
