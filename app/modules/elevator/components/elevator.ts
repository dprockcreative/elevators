import { Component, Input, OnInit } from '@angular/core';

import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../interfaces/index';

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
}from '../../../constants/index';

import {
  Elevator,
  ELEVATOR_CHECK_INTERVAL,
  ELEVATOR_DOOR_DELAY,
  ELEVATOR_LOAD_DELAY
} from '../index';

@Component({
  selector: 'elevator',
  template: `
    <div class="elevator" [attr.current]="elevator.current" [attr.next]="elevator.next" [ngClass]="{'open':(elevator.open === true)}">
      <span class="cube"></span>
    </div>
  `
})

export class ElevatorComponent implements OnInit {

  @Input() elevator: Elevator;

  TASK: null | Task = null;

  constructor (
    private tasksService: TasksService
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

        console.log('queryTask->no task', task.shaft.id, this.elevator.shaft.id);

        this.TASK = task;
        this.runTask();

      } else {

        //  ...but allows for async update to properties
        //  ; avoiding the need for dirty checking later.

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

    console.info(`Elevator ${this.elevator.shaft.id} starting on Task to Floor ${floor}`, this.TASK.id);

    console.debug('runTask');

    this.callProcedure(floor)
      .then(() => this.cycleStops())
      .then(() => this.completeTask())
      .catch(err => {
        console.warn(`ElevatorComponent::runTask [rejected: ${err}] `);
      });
  }

  /*  Call Procedure
      @type   private
      @param  stop [number]
      @return void
   */
  private callProcedure (floor: number): Promise<any> {
    return new Promise((resolve, reject) => {

      console.info(`Elevator ${this.elevator.shaft.id} starting call procedure ${this.TASK.floor}`);

      console.debug('callProcedure');

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

      console.info(`Elevator ${this.elevator.shaft.id} cycling stops ${this.TASK.floor}`);

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

        if (!this.TASK) {

          clearInterval(I);
          console.log('task jettison -> cycleStops');
          // reject('task jettison -> cycleStops');

        } else {

          stops = this.TASK.stops;

          if (tick === stops.length) {

            this.setTaskStatus(TASK_COMPLETE);
            clearInterval(I);
            resolve();

          } else {
            ask();
          }

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
    console.info(`Elevator ${this.elevator.shaft.id} marking Task complete`, `Task ID: ${this.TASK.id}`);

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

      let I = setInterval(() => {

        if (!this.TASK) {

          clearInterval(I);
          console.log('task jettison -> arrived');
          // reject('task jettison -> arrived');
        } else {

          if (this.elevator.floor === floor) {

            console.info(`Elevator ${this.elevator.shaft.id} Arrived Floor ${this.elevator.floor}`);

            this.setTaskStatus(status);
            clearInterval(I);
            resolve(true);
          }
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
      let T = setTimeout(() => {

        if (!this.TASK) {
          clearTimeout(T);
          console.log('task jettison -> loadUnload');
          // reject('task jettison -> loadUnload');
        } else {

          console.info(`Elevator ${this.elevator.shaft.id} Loading/Unloading`);

          this.setTaskStatus(status);
          clearTimeout(T);
          resolve(true);
        }
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

      this.elevator.open = true;

      let T = setTimeout(() => {

        if (!this.TASK) {
          clearTimeout(T);
          console.log('task jettison -> openDoors');
          // reject('task jettison -> openDoors');
        } else {
          console.info(`Elevator ${this.elevator.shaft.id} Opening Doors`);

          this.setTaskStatus(status);
          clearTimeout(T);
          resolve(true);
        }
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

      this.elevator.open = false;

      let T = setTimeout(() => {

        console.info(`Elevator ${this.elevator.shaft.id} Closing Doors`);

        this.setTaskStatus(status);
        clearTimeout(T);
        resolve(true);
      }, ELEVATOR_DOOR_DELAY);
    });
  };


  ngOnInit (): void {
    //console.log('ElevatorComponent::ngOnInit', this.elevator, this.TASK);
  }
}
