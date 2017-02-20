import { Directive, HostListener, Inject, ElementRef, OnInit } from '@angular/core';

import {
  TooltipComponent
} from '../components/tooltip';

@Directive({
  selector: 'tooltip > i'
})

export class TooltipDirective implements OnInit {

  private elem: any;
  private TID: any;

  constructor (
    public element: ElementRef,
    @Inject(TooltipComponent) public tcc: TooltipComponent
  ) {}

  private calculateOffsets (): void {
    if (!this.TID) {

      this.TID = setTimeout(() => {
        let elem = this.elem;
        let width: number = document.body.offsetWidth;
        let height: number = document.body.offsetHeight;
        let top: number = 0;
        let left: number = 0;
        let xy: string[] = [];

        do {
          top += elem.offsetTop;
          left += elem.offsetLeft;
          elem = elem.offsetParent;
        } while (elem !== null);

        xy.push((top > height/2) ? 'top' : 'bottom');
        xy.push((left > width/2) ? 'left' : 'right');

        this.tcc.xy = xy.join('-');

        clearTimeout(this.TID);
        this.TID = null;

      }, 1000);
    }
  }

  @HostListener('window:resize', ['$event']) onWindowResize(evt) {
    this.calculateOffsets();
  }

  ngOnInit (): void {
    this.elem = this.element.nativeElement;
    this.calculateOffsets();
  }
}
