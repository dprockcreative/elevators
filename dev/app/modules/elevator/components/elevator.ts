import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { TasksService } from '../../../services/tasks.service';

import { Task } from '../../../interfaces/index';

import { Number2AlphaPipe } from '../../../pipes/index';

import { WaitsFor } from '../../../extensions/waits-for';

import {
  TASK_CALLED,
  TASK_CALLED_ARRIVED,
  TASK_CALLED_LOADING,
  TASK_CALLED_COMPLETE,
  TASK_DELIVERED,
  TASK_DELIVERED_ARRIVED,
  TASK_DELIVERED_UNLOADING,
  TASK_DELIVERED_COMPLETE,
  TASK_COMPLETE
} from '../../barrel';

import {
  Shaft
} from '../../shaft/interface';

import {
  Elevator,
  ELEVATOR_DOOR_DELAY,
  ELEVATOR_LOAD_DELAY
} from '../index';

@Component({
  selector: 'elevator',
  template: `
    <div
      class="elevator"
      (click)="stats()"
      [attr.current]="parent.elevator.current"
      [attr.next]="parent.elevator.next"
      [ngClass]="{'open':(parent.elevator.open === true)}">
      <span class="cube"></span>
    </div>
  `
})

export class ElevatorComponent implements OnInit, OnDestroy {

  @Input() parent: Shaft;

  TASK: Task | null = null;

  pipe: Number2AlphaPipe = new Number2AlphaPipe();

  eTaskSubscription: Subscription;
  dTaskSubscription: Subscription;

  constructor (
    private tasksService: TasksService
  ) {
    this.eTaskSubscription = tasksService.elevatorTaskStream.subscribe(task => this.queryTask(task));
    this.dTaskSubscription = tasksService.destroyTaskStream.subscribe(task => this.destroyTask(task));
  }

  /*  Stats - On Click
      @type   private
      @return void
   */
  public stats (): void {
    //console.debug('Elevator stats');console.dir(this.parent);
  }

  /*  Query Task - Event Listener
      @type   private
      @param  task [Task]
      @return void
   */
  private queryTask (task: Task): void {
    if (this.parent.id === task.shaft.id) {

      //  Blocking Action
      //  prevents duplicate requests from executing...
      if (!this.TASK) {

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

    console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* starting on Task to *Floor ${floor}*`, this.TASK.id);

    this.setTaskStatus(TASK_CALLED);
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

      console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* starting call procedure ${this.TASK.floor}`);

      this.parent.elevator.goTo(floor);
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

      console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* cycling stop on *Floor ${this.TASK.floor}*`);

      let tick = 0;
      let stop;
      let stops;
      let I;
      let SP;
      const ask = () => {
        if (!SP) {
          stop = stops[tick];
          this.parent.elevator.goTo(stop);
          this.setTaskStatus(TASK_DELIVERED);
          SP = this.stopProcedure(stop);
          SP.then(() => (tick++, SP = undefined, true));
        }
      };
      const success = () => {
        stops = this.TASK.stops;
        return (tick === stops.length) || (ask(), false);
      };
      const fail = () => {
        return this.TASK ? false : true;
      };

      WaitsFor(success, fail).then(() => {
        this.setTaskStatus(TASK_COMPLETE);
        resolve();
      }).catch(() => {
        reject('task jettison -> cycleStops');
      });
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
    console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* marking Task complete`, `Task ID: ${this.TASK.id}`);
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
      WaitsFor(
        () => (this.parent.elevator.floor === floor),
        () => (!this.TASK)
      ).then(() => {

        console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* Arrived *Floor ${this.parent.elevator.floor}*`);

        this.setTaskStatus(status);
        resolve(true);

      }).catch(() => {

        reject('task jettison -> arrived');

      });
    });
  };

  /*  Load Unload
      @type   private
      @param  status [!optional number]
      @return Promise [any]
   */
  private loadUnload (status?: number): Promise<any> {
    return new Promise(resolve => {
      let T = setTimeout(() => {

        console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* Loading/Unloading`);

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
    return new Promise(resolve => {

      this.parent.elevator.open = true;

      let T = setTimeout(() => {
        console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* Opening Doors`);

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
    return new Promise(resolve => {

      this.parent.elevator.open = false;

      let T = setTimeout(() => {

        console.info(`*Elevator ${this.pipe.transform(this.parent.id)}* Closing Doors`);

        this.setTaskStatus(status);
        clearTimeout(T);
        resolve(true);
      }, ELEVATOR_DOOR_DELAY);
    });
  };

  ngOnInit (): void {
    this.parent.elevator = new Elevator();
  }

  ngOnDestroy (): void {
    this.eTaskSubscription.unsubscribe();
    this.dTaskSubscription.unsubscribe();
  }
}
