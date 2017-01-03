import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

//Event,
import { Floor, Shaft, Task } from '../interfaces/index';

import {
  TASK_CALLED,
  TASK_CALLED_ARRIVED,
  TASK_CALLED_LOADING,
  TASK_CALLED_COMPLETE,
  TASK_DELIVERED,
  TASK_DELIVERED_ARRIVED,
  TASK_DELIVERED_UNLOADING,
  TASK_DELIVERED_COMPLETE,
  TASK_STOPS_LIMIT
} from '../constants/index';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  // Observable sources
  private openTasksSource     = new Subject<Task[]>();
  private destroyTaskSource   = new Subject<Task>();
  private elevatorTaskSource  = new Subject<Task>();
  private completeStopSource  = new Subject<{[key: string]: number}>();


  // Observable streams
  openTasksStream     = this.openTasksSource.asObservable();
  destroyTaskStream   = this.destroyTaskSource.asObservable();
  elevatorTaskStream  = this.elevatorTaskSource.asObservable();
  completeStopStream  = this.completeStopSource.asObservable();

  /*  Start Elevator Operations - Event Stream Emitter
      @type   public
      @param  task [Task]
      @return void
      - Generates Task/s for Broadcast.
   */
  public startElevatorOperations (task: Task): void {
    this.elevatorTaskSource.next(task);
  }

  /*  Complete Stop - Event Stream Emitter
      @type   public
      @param  task [Task]
      @return void
   */
  public taskStopComplete (task: Task, stop: number): void {
    this.completeStopSource.next({
      'floor': task.floor,
      'stop': stop
    });
  }

  /*  Receive request from Floor - Event Stream Emitter
      @type   public
      @param  from [number: Floor]
      @param  to [number: Floor]
      @return void
      - Generates Task/s for Broadcast.
   */
  public requestFromFloor (from: number, to: number): void {

    let task  = new Task(from, to);
    let tasks = this.getTasks();

    // nothing to compare or merge
    if (!tasks.length) {
      this.addTask(task);
    }
    // look for mergeable tasks
    else {

      let mTasks = this.mergableTasks(task);

      // nothing to compare or merge
      if (!mTasks.length) {
        this.addTask(task);
      }
      // merge
      else {
        this.mergeTasks(task, mTasks[0]);
      }

    }

    this.broadcastTasks();
  }

  /*  Get Tasks
      @type   public
      @return array [Task Array]
   */
  public getTasks (): Task[] {
    return this.tasks;
  }

  /*  Task By Id
      @type   public
      @param  id [string uuid]
      @return Task
   */
  public taskById (id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  /*  Task For Shaft
      @type   public
      @param  shaft [Shaft]
      @return Task
   */
  public taskForShaft (shaft: Shaft): null | Task {
    return this.tasks.find(task => task.shaft && task.shaft.id === shaft.id) || null;
  }

  /*  Set Task Status
      @type   public
      @param  task [Task]
      @param  status [number]
      @return void
   */
  public setTaskStatus (task: Task, status: number): void {
    this.taskById(task.id).status = status;
  }

  /*  Destroy Task
      @type   public
      @param  task [Task]
      @return void
   */
  public destroyTask (task: Task): void {
    this.destroyTaskSource.next(task);
    this.removeTask(task);
  }

  /*  Floor Is Tasked
      @type   public
      @param  floor [Floor]
      @return boolean
   */
  public isFloorTasked (floor: Floor): boolean {
    for (let task of this.tasks) {
      if (task.floor === floor.id) {
        return true;
      }
    }
    return false;
  }

  /*  Floor Button Is Tasked
      @type   public
      @param  button [Floor]
      @return boolean
   */
  public isFloorButtonTasked (button: Floor): boolean {
    for (let task of this.tasks) {
      if (!!~task.stops.indexOf(button.id)) {
        return true;
      }
    }
    return false;
  }


  /*  Broadcast Open Tasks
      @type   private
      @return void
      - passes tasks queue to Stream.
   */
  private broadcastTasks (): void {
    this.openTasksSource.next(this.tasks);
  }

  /*  Merge-able Tasks
      @type   private
      @param  T [Task]
      @return array [Task Array]
      - Looks for Viable Open Tasks that allow compared Task<T> as added stop.
   */
  private mergableTasks (T: Task): Task[] {
    return this.tasks.filter((task) => {
      return (
        task.floor === T.floor &&
        task.up === T.up &&
        task.status < TASK_CALLED_COMPLETE &&
        task.stops.length < TASK_STOPS_LIMIT
      );
    });
  }

  /*  Merge Tasks
      @type   private
      @param  src [Task]
      @param  dest [Task]
      @return void
      - Adds stop to existing Task
   */
  private mergeTasks(src: Task, dest: Task): void {
    dest.addStop(src.stops);
  }

  /*  Add Task
      @type   private
      @param  task [Task]
      @return Task
      - Adds task to queue
   */
  private addTask (task: Task): Task {
    this.tasks.push(task.activate());
    return task;
  }

  /*  Remove Task
      @type   private
      @param  task [Task]
      @return void
      - Removes task from queue
   */
  private removeTask (task: Task): void {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
