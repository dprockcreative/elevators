import { Injectable } from '@angular/core';

import { Floor } from './interface';

@Injectable()
export class FloorService {

  floors: Floor[];

  /*  Build Floors
      @type   public
      @param  stories [number]
      @return Promise [any]
   */
  public buildFloors (stories: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let floors: Floor[] = [];
      for (let i = stories; i >= 1; i--) {
        floors.push(new Floor(i));
      }
      this.floors = floors;
      resolve(this.floors);
    });
  }

  /*  Get Floors length
      @type   public
      @return number
   */
  public getFloorsLength (): number {
    return this.floors.length;
  }
}
