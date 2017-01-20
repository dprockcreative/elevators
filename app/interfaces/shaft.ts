import { Elevator } from './elevator';

interface ShaftI {
  id: number;
  stories: number;
  elevator: Elevator;
}

export class Shaft implements ShaftI {
  id: number;
  stories: number;
  elevator: Elevator;

  constructor (id: number, stories: number) {
    this.id = id;
    this.stories = stories;
    this.elevator = new Elevator(this);
  }
}

