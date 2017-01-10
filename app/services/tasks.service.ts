import { Injectable, NgZone } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Floor, Shaft, Task } from '../interfaces/index';

import { ShaftService } from '../services/index';

import {
  TASK_CALLED,
  TASK_CALLED_COMPLETE,
  TASK_STOPS_LIMIT,
  TASKS_BROADCAST_INTERVAL
} from '../constants/index';

@Injectable()
export class TasksService {

  private tasks : Task[]  = [];
  private INT   : any     = 0;
  private LENGTH: number  = 0;

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

  constructor (
    private ngZone: NgZone, 
    private shaftService: ShaftService
  ) {}

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

  /*  Receive request from Floor
      @type   public
      @param  from [number: Floor]
      @param  to [number: Floor]
      @return void
      - Generates Task/s for Broadcast.
   */
  public requestFromFloor (from: number, to: number): void {

    let task  : Task  = new Task(from, to);
    let shaft : Shaft = this.shaftForTask(task);

    let log = [`Request from Floor: *${from}* to Floor: *${to}*`];

    let mTasks = this.mergableTasks(task);

    // nothing to merge
    if (!mTasks.length) {

      let t = this.addTask(task);

      if (shaft) {

        t.assignShaft(shaft)

        log.push(`Generated new Task using Shaft ${t.shaft.id}`, `Task ID: ${t.id}`);

      } else {

        log.push(`Generated new Task for async pickup`, `Task ID: ${t.id}`);

      }

    }
    // merge
    else {

      let t = this.mergeTasks(task, mTasks[0]);

      log.push(`Merged with existing Task using Shaft ${t.shaft.id}`, `Task ID: ${t.id}`);

    }

    console.info.apply(null, log);

    this.watchTasks();
  }

  /*  Reset
      @type   public
      @return void
   */
  public reset (): void {
    if (this.tasks.length) {
      this.tasks = [];
      console.info(`Tasks Queue reset`);
    }
  }

  /*  Shafts for Task
      @type   private
      @param  T [Task]
      @return array [Task Array]
   */
  private shaftForTask (task: Task): Shaft {
    return this.shaftService.getCurrent()
      .filter(shaft => task.canUse(shaft))
      .filter(shaft => (this.taskForShaft(shaft) === null))
      .sort((sa,sb) => {
        let a = sa.elevator.floor;
        let b = sb.elevator.floor;
        return b>a?1:(a>b?-1:0);
      })[0];
  }

  /*  Consolidate Open Tasks - Event Stream Emitter
      @type   private
      @return boolean
   */
  private consolidateOpenTasks (): boolean {
    if (this.tasks.length) {
      let task = this.tasks.find(task => (!task.shaft));
      if (task) {
        let mTasks = this.mergableTasks(task);
        if (mTasks.length) {
          this.mergeTasks(task, mTasks[0]);
          this.removeTask(task);
        }
      }

      this.openTasksSource.next(this.tasks);
      return true;
    }
    return false;
  }

  /*  Watch Tasks - Event Stream Emitter
      @type   private
      @return void
   */
  private watchTasks (): void {

    this.openTasksSource.next(this.tasks);

    if (!this.INT) {

      this.ngZone.runOutsideAngular(() => {
        this.INT = setInterval(() => {

          if (this.tasks.length !== this.LENGTH) {
            this.LENGTH = this.tasks.length;
            if (this.LENGTH !== 1) {
            	console.info(`${this.LENGTH} Tasks remain in Queue`);
            } else {
            	console.info(`${this.LENGTH} Task remains in Queue`);
            }
          }

          if (!this.consolidateOpenTasks()) {
            clearInterval(this.INT);
            this.INT = 0;
          }
        }, TASKS_BROADCAST_INTERVAL);
      });
    }
  }

  /*  Merge-able Tasks
      @type   private
      @param  T [Task]
      @return array [Task Array]
      - Looks for Viable Open Tasks that allow compared Task<T> as added stop.
   */
  private mergableTasks (T: Task): Task[] {
    return this.tasks.filter(task => {
      return task.shaft && (
        task.floor === T.floor &&
        task.up === T.up &&
        task.status < TASK_CALLED_COMPLETE &&
        task.stops.length < TASK_STOPS_LIMIT && 
        (task.up ? task.shaft.elevator.floor > T.floor : task.shaft.elevator.floor < T.floor)
      ) || false;
    });
  }

  /*  Merge Tasks
      @type   private
      @param  src [Task]
      @param  dest [Task]
      @return void
      - Adds stop to existing Task
   */
  private mergeTasks(src: Task, dest: Task): Task {
    dest.addStop(src.stops);
    return dest;
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
