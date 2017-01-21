export class Floor {
  id: number;
  constructor (id: number) {
    this.id = id;
  }
}

interface ButtonI {
  floor: Floor;
  id: number;
  active: boolean;
  activate (): void;
  deactivate (): void;
}

export class Button implements ButtonI {
  floor: Floor;
  id: number;
  active: boolean = false;

  constructor (floor: Floor, id: number) {
    this.floor = floor;
    this.id = id;
  }

  /*  Activate Button
      @type   public
      @return void
   */
  public activate (): void {
    this.active = true;
  }

  /*  Deactivate Button
      @type   public
      @return void
   */
  public deactivate (): void {
    this.active = false;
  }
}
