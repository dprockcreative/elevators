interface ElevatorI {
  open: boolean;
  floor: number;
  current: number;
  next: number;
  goTo (floor: number): void;
}

export class Elevator implements ElevatorI {
  open: boolean = false;
  floor: number = 0;
  current: number = 1;
  next: number = 1;

  constructor () {}

  public goTo (floor: number): void {
    this.current = floor;
    this.next    = floor;
  }
}

