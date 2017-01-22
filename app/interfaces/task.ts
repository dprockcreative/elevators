import { Shaft } from '../modules/shaft/interface';

import UUID from '../extensions/uuid';

interface TaskI {
  id: string;
  status: number;
  floor: number;
  stops: number[];
  up: boolean;
  down: boolean;
  shaft: Shaft;
  activate (): any;
  addStop (stop: number[] | number): void;
  assignShaft (shaft: Shaft): void;
  canUse (shaft: Shaft): boolean;
  getStatus (): number;
}

export class Task implements TaskI {
  id: string      = '';
  status: number  = 0;
  floor: number   = 0;
  stops: number[] = [];
  up: boolean;
  down: boolean;
  shaft: Shaft;

  constructor (floor: number, stop: number) {
    this.floor  = floor;
    this.stops  = [stop];
    this.up     = (stop > floor);
    this.down   = (floor > stop);
  }

  /*  Activate
      @type   public
      @return Task
   */
  public activate (): Task {
    this.id = UUID();
    return this;
  }

  /*  Add Stop
      @type   public
      @param  stop [number | number array]
      @return void
   */
  public addStop (stop: number[] | number): void {
    if (!Array.isArray(stop)) {
      stop = [stop];
    }
    let stops = this.stops.slice(0);
    stops = stops.concat(stop);
    stops = stops.filter((e, p, a) => a.indexOf(e) === p);
    stops.sort();
    if (this.down) {
      stops.reverse();
    }
    this.stops = stops;
  }

  /*  Assign Shaft to Task
      @type   public
      @param  shaft [Shaft]
      @return void
   */
  public assignShaft (shaft: Shaft): Task {
    this.shaft = shaft;
    return this;
  }

  /*  Task Can Use Shaft
      @type   public
      @param  shaft [Shaft]
      @return boolean
   */
  public canUse (shaft: Shaft): boolean {
    return !(this.floor > shaft.stories || Math.max(...this.stops) > shaft.stories);
  }

  /*  Get Status
      @type   public
      @return status [number]
   */
  public getStatus (): number {
    return this.status;
  }
}
