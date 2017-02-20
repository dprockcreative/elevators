import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Task } from '../interfaces/index';
import { Floor, Button, Shaft } from '../modules/index';
import { ShaftService } from '../modules/shaft/service';
import { Number2AlphaPipe } from '../pipes/index';

import {
  TASK_PENDING,
  TASK_CALLED_LOADING,
  TASK_CALLED_COMPLETE,
  TASK_STOPS_LIMIT,
  TASKS_BROADCAST_INTERVAL
} from '../constants/index';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];
  private INT: any = 0;
  private LENGTH: number = 0;
  private PIPE = new Number2AlphaPipe();

  // Observable sources
  public openTasksSource = new Subject<Task[]>();
  public destroyTaskSource = new Subject<Task>();
  public elevatorTaskSource = new Subject<Task>();
  public completeStopSource = new Subject<{[key: string]: number}>();

  // Observable streams
  openTasksStream = this.openTasksSource.asObservable();
  destroyTaskStream = this.destroyTaskSource.asObservable();
  elevatorTaskStream = this.elevatorTaskSource.asObservable();
  completeStopStream = this.completeStopSource.asObservable();

  constructor (
    private shaftService: ShaftService
  ) {
    this.waitForDistribute();
  }

  /*  Wait For Distribute
      @type   public
      @return void
      - After a timeout, elevators will station
        themselves at strategic locations.
   */
  private waitForDistribute (): void {
    //
    console.debug('waitForDistribute');
  }

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
      @param  button [Button]
      @return boolean
   */
  public isFloorButtonTasked (button: Button): boolean {
    for (let task of this.tasks) {
      if (!!~task.stops.indexOf(button.id)) {
        return true;
      }
    }
    return false;
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

  /*  Receive request from Floor
      @type   public
      @param  from [number: Floor]
      @param  to [number: Floor]
      @return void
      - Generates Task/s for Broadcast.
   */
  public requestFromFloor (from: number, to: number): void {

    if (this.isDuplicateRequest(from, to)) {

      console.info(`Duplicate Request from Floor: *${from}* to Floor: *${to}* Ignored.`);

    } else {

      let log: any[] = [`Request from Floor: *${from}* to Floor: *${to}*`];
      let alpha;

      // This may end up a pseudo task
      let task: Task = new Task(from, to);
      let mTasks: Task[] = this.mergeableTasks(task);

      if (mTasks.length) {

        task = this.mergeTasks(task, mTasks[0]);

        alpha = this.PIPE.transform(task.shaft.id);

        log.push(`Merged with existing Task using *Shaft ${alpha}*`, `Task ID: ${task.id}`);

      } else {

        let shaft: Shaft = this.shaftForTask(task);

        task.assignShaft(shaft);
        task = this.addTask(task);

        alpha = this.PIPE.transform(task.shaft.id);

        log.push(`Generated Task using *Shaft ${alpha}*`, `Task ID: ${task.id}`);

      }

      console.info.apply(null, log);

    }

    this.watchTasks();
  }

  /*  Task For Shaft
      @type   private
      @param  shafts [Shaft[]]
      @return boolean
   */
  private taskForShaft (shaft: Shaft): boolean {
    return this.tasks.length ? (
      this.tasks.find(task => (task.shaft.id === shaft.id && task.status <= TASK_CALLED_LOADING)
    ) === undefined) : true;
  }

  /*  Shaft for Task - Immediate
      @type   private
      @param  T [Task]
      @return shaft [Shaft Array[0]]
   */
  private shaftForTask (task: Task): Shaft {
    let shafts: Shaft[] = this.shaftService.getCurrent();
    let tshafts: Shaft[];

    shafts  = shafts.filter(shaft => task.canUse(shaft));
    tshafts = shafts.filter(shaft => this.taskForShaft(shaft));

    if (tshafts.length) {
      shafts = tshafts;
    }

    return shafts.sort((sa, sb) => {
      let a = sa.elevator.floor;
      let b = sb.elevator.floor;
      return b > a ? 1 : (a > b ? -1 : (() => {
        let aa = this.shaftsByTasksDistribution(sa);
        let bb = this.shaftsByTasksDistribution(sb);
        return aa > bb ? 1 : ( bb > aa ? -1 : 0 );
      })());
    })[0];
  }

  /*  Is Duplicate Request
      @type   private
      @param  from [number]
      @param  to [number]
      @return boolean [tasks.length]
   */
  private isDuplicateRequest (from: number, to: number): boolean {
    let tasks: Task[] = this.tasks
      .filter(task => (task.status <= TASK_CALLED_COMPLETE))
      .filter(task => (task.floor === from && !!~task.stops.indexOf(to) || task.floor === to && !!~task.stops.indexOf(from)))
    ;
    return Boolean(tasks.length);
  }

  /*  Shaft By Task Distribution
      @type   private
      @param  shaft [Shaft]
      @return number [tasks.length]
   */
  private shaftsByTasksDistribution (shaft: Shaft): number {
    return this.tasks.filter(task => (task.shaft && task.shaft.id === shaft.id)).length;
  }

  /*  Merge-able Tasks
      @type   private
      @param  T [Task]
      @return array [Task Array]
      - Looks for Viable Open Tasks that allow compared Task<T> as added stop.
   */
  private mergeableTasks (T: Task): Task[] {
    return this.tasks.filter(task => {

      if (!task.shaft) {
        return false;
      }

      if (
        task.up !== T.up ||
        task.status >= TASK_CALLED_COMPLETE ||
        task.stops.length >= TASK_STOPS_LIMIT
      ) {
        return false;
      }

      let floormatch = task.floor === T.floor;

      if (!floormatch && !(task.stops[0] === T.stops[0])) {
        return false;
      }

      if (floormatch && (
        task.up ?
          task.shaft.elevator.floor < T.floor
        : task.shaft.elevator.floor > T.floor
      )) {
        return false;
      }

      return true;
    });
  }

  /*  Broadcast Open Tasks
      @type   private
      @return void
   */
  private broadcastOpenTasks (): void {
    let tasks: Task[] = this.tasks.filter(task => (task.status === TASK_PENDING));

    if (tasks.length) {
      this.openTasksSource.next(tasks);
    }
  }

  /*  Watch Tasks - Event Stream Emitter
      @type   private
      @return void
   */
  private watchTasks (): void {
    if (this.tasks.length) {
      this.broadcastOpenTasks();
    }

    if (!this.INT) {
      this.INT = setInterval(() => {

        if (this.tasks.length !== this.LENGTH) {
          this.LENGTH = this.tasks.length;
          if (this.LENGTH !== 1) {
            console.info(`${this.LENGTH} Tasks remain in Queue`);
          } else {
            console.info(`${this.LENGTH} Task remains in Queue`);
          }
        }

        if (this.tasks.length === 0) {
          this.waitForDistribute();
          clearInterval(this.INT);
          this.INT = 0;
        } else {
          this.broadcastOpenTasks();
        }
      }, TASKS_BROADCAST_INTERVAL);
    }
  }

  /*  Merge Tasks
      @type   private
      @param  src [Task]
      @param  dest [Task]
      @return void
      - Adds stop to existing Task
   */
  private mergeTasks (src: Task, dest: Task): Task {
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
