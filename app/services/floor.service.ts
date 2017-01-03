import { Injectable } from '@angular/core';

import { Floor } from '../interfaces/index';

@Injectable()
export class FloorService {

  floors: Floor[];

  /*  Build Floors
      @type   public
      @param  stories [number]
      @return Promise [any]
   */
  public buildFloors (stories: number): Promise<any> {
    this.floors = [];
    return new Promise((resolve, reject) => {
      for (let i = stories;i >= 1; i--) {
        this.floors.push(new Floor(i));
      }
      resolve(this.floors);
    });
  }

  /*  Get Floors
      @type   public
      @return Promise [Floor Array]
   */
  public getFloors (): Promise<Floor[]> {
    return Promise.resolve(this.floors);
  }

  /*  Get Floor
      @type   public
      @param  id [number]
      @return Promise [any]
   */
  public getFloor (id: number): Promise<any> {
    return this.getFloors()
      .then(floors => floors.find(floor => floor.id === id));
  }

  /*  Get Reverse Floors
      @type   public
      @return array [Floor]
   */
  public getReverseFloors (): Floor[] {
    return this.floors.slice(0).reverse();
  }

  /*  Get Floors length
      @type   public
      @return number
   */
  public getFloorsLength (): number {
    return this.floors.length;
  }

  /*  Handle Error
      @type   private
      @param  error [any]
      @return Promise [any]
   */
  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
