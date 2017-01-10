import { Pipe, PipeTransform } from '@angular/core';

const ALPHABET_LC = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

@Pipe({
  name: 'number2alpha'
})

export class Number2AlphaPipe implements PipeTransform {
  transform(value: number, lowercase: boolean = false) : string {
    if (typeof value === 'number' && value < ALPHABET_UC.length) {
      return String(lowercase ? ALPHABET_LC : ALPHABET_UC).charAt(value - 1);
    }
    return null;
  }
}
