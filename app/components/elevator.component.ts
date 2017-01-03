import { Component, Input } from '@angular/core';

import { Elevator, Task } from '../interfaces/index';

import { TasksService } from '../services/index';

import {
  TASK_CALLED,
  TASK_CALLED_ARRIVED,
  TASK_CALLED_LOADING,
  TASK_CALLED_COMPLETE,
  TASK_DELIVERED,
  TASK_DELIVERED_ARRIVED,
  TASK_DELIVERED_UNLOADING,
  TASK_DELIVERED_COMPLETE,
  TASK_COMPLETE,
  TASK_STOPS_INTERVAL
} from '../constants/index';

import {
  ELEVATOR_CHECK_INTERVAL,
  ELEVATOR_DOOR_DELAY,
  ELEVATOR_LOAD_DELAY
} from '../constants/index';

@Component({
  selector: 'elevator',
  template: `
    <div class="elevator" [attr.current]="elevator.current" [attr.next]="elevator.next" [ngClass]="{'open':(elevator.open === true)}">
      <span class="cube"></span>
    </div>
  `
})

export class ElevatorComponent {

  @Input() elevator: Elevator;

  TASK: null | Task = null;

  constructor (
    public tasksService: TasksService
  ) {
    tasksService.elevatorTaskStream.subscribe(task => this.queryTask(task));
    tasksService.destroyTaskStream.subscribe(task => this.destroyTask(task));
  }

  /*  Query Task - Event Listener
      @type   private
      @param  task [Task]
      @return void
   */
  private queryTask (task: Task): void {
    if (this.elevator.shaft.id === task.shaft.id) {
      //  Blocking Action

      //  prevents duplicate requests from executing...
      if (!this.TASK) {
        this.TASK = task;
        this.runTask();
      }
      //  ...but allows for async update to properties
      //  ; avoiding the need for dirty checking later.
      else {
        if (this.TASK.id === task.id) {
          Object.assign(this.TASK, task);
        }
      }
    }
  }

  /*  Run Task
      @type   private
      @return void
   */
  private runTask (): void {

    let floor: number = this.TASK.floor;

    this.callProcedure(floor)
      .then(() => this.cycleStops())
      .then(() => this.completeTask())
  }

  /*  Call Procedure
      @type   private
      @param  stop [number]
      @return void
   */
  private callProcedure (floor: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.elevator.goTo(floor);
      this.setTaskStatus(TASK_CALLED);
      this.arrived(floor, TASK_CALLED_ARRIVED)
        .then(() => this.openDoors(TASK_CALLED_LOADING))
        .then(() => this.loadUnload(TASK_CALLED_COMPLETE))
        .then(() => this.closeDoors())
        .then(() => resolve());
    });
  }

  /*  Stop Procedure
      @type   private
      @param  stop [number]
      @return void
   */
  private stopProcedure (stop: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.arrived(stop, TASK_DELIVERED_ARRIVED)
        .then(() => this.taskStopComplete(stop))
        .then(() => this.openDoors(TASK_DELIVERED_UNLOADING))
        .then(() => this.loadUnload(TASK_DELIVERED_COMPLETE))
        .then(() => this.closeDoors())
        .then(() => resolve());
    });
  }

  /*  Cycle Stops
      @type   private
      @return Promise [any]
      - A tricky little number designed to ensure that
        each set of Promises resolve asynchronously
        before moving on to the next set.
   */
  private cycleStops (): Promise<any> {
    return new Promise((resolve, reject) => {
      let tick = 0;
      let stop;
      let stops;
      let I;
      let SP;
      let ask = () => {
        if (!SP) {
          stop = stops[tick];
          this.elevator.goTo(stop);
          this.setTaskStatus(TASK_DELIVERED);
          SP = this.stopProcedure(stop);
          SP.then(() => (tick++, SP = undefined));
        }
      };

      I = setInterval(() => {
        stops = this.TASK.stops;
        if (tick === stops.length) {
          this.setTaskStatus(TASK_COMPLETE)
          clearInterval(I);
          resolve();
        } else {
          ask();
        }
      }, TASK_STOPS_INTERVAL);
    });
  }

  /*  Set Task Status
      @type   private
      @param  status [number]
      @return void
   */
  private setTaskStatus (status?: number): void {
    if (typeof status === 'number') {
      this.tasksService.setTaskStatus(this.TASK, status);
    }
  }

  /*  Signal Task Stop
      @type   private
      @return void
   */
  private taskStopComplete (stop: number): void {
    this.tasksService.taskStopComplete(this.TASK, stop);
  }

  /*  Complete Task
      @type   private
      @return void
   */
  private completeTask (): void {
    this.tasksService.destroyTask(this.TASK);
  }

  /*  Destroy Task
      @type   private
      @param  task [Task]
      @return void
   */
  private destroyTask (task: Task): void {
    if (this.TASK && this.TASK.id === task.id) {
      this.TASK = null;
    }
  }

  /*  Arrived
      @type   private
      @param  floor [number]
      @param  status [!optional number]
      @return Promise [any]
   */
  private arrived (floor: number, status?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let I;
      I = setInterval(() => {
        if (this.elevator.floor === floor) {
          //console.debug('ElevatorComponent::arrived', floor);
          this.setTaskStatus(status);
          clearInterval(I);
          resolve(true);
        }
      }, ELEVATOR_CHECK_INTERVAL);
    });
  };

  /*  Load Unload
      @type   private
      @param  status [!optional number]
      @return Promise [any]
   */
  private loadUnload (status?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let T;
      T = setTimeout(() => {
        //console.debug('ElevatorComponent::loadUnload', 'resolve');
        this.setTaskStatus(status);
        clearTimeout(T);
        resolve(true);
      }, ELEVATOR_LOAD_DELAY);
    });
  };

  /*  Open Doors
      @type   private
      @param  status [!optional number]
      @return Promise [any]
   */
  private openDoors (status?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let T;
      this.elevator.open = true;
      T = setTimeout(() => {
        //console.debug('ElevatorComponent::openDoors', 'resolve');
        this.setTaskStatus(status);
        clearTimeout(T);
        resolve(true);
      }, ELEVATOR_DOOR_DELAY);
    });
  };

  /*  Close Doors
      @type   private
      @param  status [!optional number]
      @return Promise [any]
   */
  private closeDoors (status?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let T;
      this.elevator.open = false;
      T = setTimeout(() => {
        //console.debug('ElevatorComponent::closeDoors', 'resolve');
        this.setTaskStatus(status);
        clearTimeout(T);
        resolve(true);
      }, ELEVATOR_DOOR_DELAY);
    });
  };

}
