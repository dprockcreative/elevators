import { Elevator } from '../elevator/interface';

interface ShaftI {
  id: number;
  stories: number;
  elevator: Elevator;
  subscribe: any;
}

export class Shaft implements ShaftI {
  id: number;
  stories: number;
  elevator: Elevator;
  subscribe: any;

  constructor (id: number, stories: number) {
    this.id = id;
    this.stories = stories;
  }
}

