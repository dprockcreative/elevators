import { Shaft } from '../shaft/interface';

interface ElevatorI {
  shaft: Shaft;
  open: boolean;
  floor: number;
  current: number;
  next: number;
  goTo (floor: number): void;
  ready (): boolean;
  subscribe: any;
}

export class Elevator implements ElevatorI {
  shaft: Shaft;
  open: boolean = false;
  floor: number = 0;
  current: number = 1;
  next: number = 1;
  subscribe: any;

  constructor (shaft: Shaft) {
    this.shaft = shaft;
  }

  public goTo (floor: number): void {
    this.current = floor;
    this.next    = floor;
  }

  /*  Elevator Ready
      @type public
      @return boolean - instantiated
   */
  public ready (): boolean {
    return this.floor > 0;
  }
}

