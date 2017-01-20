import { Component, Input, OnInit } from '@angular/core';

import { Button, Floor } from '../interfaces/index';

import { FloorService, TasksService } from '../services/index';

@Component({
  selector: 'li[floor]',
  template: `
    <section [ngClass]="{'active':isFloorActive()}">
      <nav>
        <button
          type="button"
          *ngFor="let button of buttons"
          (click)="callForElevator(button)"
          [disabled]="disabled(button)">
          {{button.id}}
        </button>
      </nav>
    </section>
  `
})

export class FloorComponent implements OnInit {

  @Input() floor: Floor;

  buttons: Button[];

  constructor (
    private floorService: FloorService,
    private tasksService: TasksService
  ) {
    tasksService.completeStopStream.subscribe((H) => this.completeStop(H));
  }

  /*  Call For Elevator
      @type   public
      @param  button [Button]
      @return void
   */
  public callForElevator (button: Button): void {
    button.activate();
    this.tasksService.requestFromFloor(this.floor.id, button.id);
  }

  /*  Destroy Task
      @type   private
      @return void
   */
  private completeStop (H: any): void {
    if (H.floor === this.floor.id) {
      for (let button of this.buttons) {
        if (H.stop === button.id) {
          button.deactivate();
        }
      }
    }
  }

  /*  Is Floor Active
      @type   public
      @return boolean
   */
  public isFloorActive (): boolean {
    return this.tasksService.isFloorTasked(this.floor);
  }

  /*  Disabled
      @type   public
      @param  button [Button]
      @return boolean
   */
  public disabled (button: Button): boolean {
    return this.floor.id === button.id || button.active;
  }

  /*  Build Buttons
      @type   private
      @return void
   */
  private buildButtons (): void {
    let buttons: Button[] = [];
    let length: number   = this.floorService.getFloorsLength();
    let id: number   = 1;
    for (id = 1; id <= length; id++) {
      buttons.push(new Button(this.floor, id));
    }
    this.buttons = buttons;
  }

  ngOnInit (): void {
    this.buildButtons();
  }
}

