interface ElevatorI {
  open: boolean;
  floor: number;
  current: number;
  next: number;
  goTo (floor: number): void;
  ready (): boolean;
}

export class Elevator implements ElevatorI {
  open: boolean = false;
  floor: number = 0;
  current: number = 1;
  next: number = 1;

  constructor () {
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

