import { Shaft } from './shaft';

interface iElevator {
  shaft: Shaft;
  open: boolean;
  floor: number;
  current: number;
  next: number;
  goTo (floor: number): void;
  ready (): boolean ;
}

export class Elevator implements iElevator {
  shaft   : Shaft;
  open    : boolean = false;
  floor   : number  = 0;
  current : number  = 1;
  next    : number  = 1;

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

