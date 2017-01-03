import { Component, Input, OnInit, DoCheck } from '@angular/core';

import { Button, Event, Floor, Shaft, Task } from '../interfaces/index';
import { FloorService, ShaftService, TasksService } from '../services/index';

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

/*
TODO ^  [ngClass]="{'active':false}"
*/

export class FloorComponent implements OnInit {//, DoCheck {

  @Input() floor: Floor;

  buttons: Button[];

  constructor (
    private floorService: FloorService,
    private tasksService: TasksService
  ) {
    tasksService.completeStopStream.subscribe((H) => this.completeStop(H));
  }

  /*  Call For Elevator
      @type   private
      @param  button [Button]
      @return void
   */
  private callForElevator (button: Button): void {
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
      @type   private
      @return boolean
   */
  private isFloorActive (): boolean {
    return this.tasksService.isFloorTasked(this.floor);
  }

  /*  Disabled
      @type   private
      @param  button [Button]
      @return boolean
   */
  private disabled (button: Button): boolean {
    return this.floor.id === button.id || button.active;
  }

  /*  Build Buttons
      @type   private
      @return void
   */
  private buildButtons (): void {
    let buttons : Button[] = [];
    let length  : number   = this.floorService.getFloorsLength();
    let id      : number   = 1;
    for (id = 1; id <= length; id++) {
      buttons.push(new Button(this.floor, id));
    }
    this.buttons = buttons;
  }

  ngOnInit (): void {
    this.buildButtons();
  }

  /*
  ngDoCheck (): void {
    //console.log('FloorComponent::ngDoCheck', this.floor);
  }
  */
}


  /*  Events
      - handle streamed subject

    //tasksService.notifyStream.subscribe((event) => this.events(event));

  private events (event: Event): void {

    if (this.floor.id === event.floor) {
      if (event.status === 'deployed') {
        this.requests.splice(0, 1);
      }
    }

    if (this.floor.destination) {
      if (event.status === 'deployed') {
        this.floor.destination = false;
      }
    }

  }
   */
