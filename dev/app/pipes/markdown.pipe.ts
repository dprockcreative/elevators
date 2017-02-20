import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { parse } from 'md-jml';
import { dom } from 'jml-h';

@Pipe({
  name: 'markdown'
})

export class MarkdownPipe implements PipeTransform {

  constructor (
    private sanitizer: DomSanitizer
  ) {}

  transform (value: string): SafeHtml {
    if (value != null) {
      let html;
      parse(value, {}, jml => (html = dom(jml)));
      while (!html) {};
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    return null;
  }
}

