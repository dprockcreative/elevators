import { Directive, Inject, ElementRef, OnInit, AfterViewChecked } from '@angular/core';

import {
  ElevatorComponent
} from '../components/elevator';

@Directive({
  selector: '.elevator'
})

export class ElevatorDirective implements OnInit, AfterViewChecked {

  private elem: any;
  private height: number = 0;
  private shaftHeight: number = 0;
  private floorHeight: number = 0;

  constructor (
    public element: ElementRef,
    @Inject(ElevatorComponent) public ec: ElevatorComponent
  ) {}

  /*  Get Current Floor
      @type   private
      @return number
      - calculates floor level of elevator based on DOM properties
   */
  private getCurrentFloor (): number {
    return Math.round(((this.shaftHeight - (this.elem.offsetTop + this.height)) / this.floorHeight) + 1);
  }

  /*  AfterViewChecked - Lifecycle Hook
      @type   public
      @return void
      - Fired because the ElevatorComponent::arrived (and sibling methods employ Zone Functions)
   */
  ngAfterViewChecked (): void {
    //console.log('ElevatorDirective', this.ec.parent.id, this.getCurrentFloor());
    this.ec.parent.elevator.floor = this.getCurrentFloor();
  }

  /*  OnInit - Lifecycle Hook
      @type   public
      @return void
   */
  ngOnInit (): void {
    this.elem         = this.element.nativeElement;
    this.height       = this.elem.offsetHeight;
    this.shaftHeight  = this.elem.offsetParent.offsetHeight;
    this.floorHeight  = this.shaftHeight / this.ec.parent.stories;
  }

}
