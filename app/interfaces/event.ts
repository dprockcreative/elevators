export class Event {
  status: string;
  floor: number;

  constructor (status: string, floor: number) {
    this.status = status;
    this.floor = floor;
  }
}
