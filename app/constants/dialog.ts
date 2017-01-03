export const DIALOG_TYPES = ['alert', 'confirm', 'wizard'];

export const DIALOG_DEFAULT_TYPE = DIALOG_TYPES[0];

export const DIALOG_STRING_MAP = {
  'alert'   : { 'yes' : 'ok', 'no': ''},
  'confirm' : { 'yes' : 'confirm', 'no': 'cancel'},
  'wizard'  : { 'yes' : 'next', 'no': 'prev'},
};
