import { Task } from '../interfaces/task';
import { Shaft } from '../modules/shaft/interface';
import { Elevator } from '../modules/elevator/interface';

import {
  TASK_CALLED_LOADING,
  TASK_CALLED_COMPLETE,
  TASK_STOPS_LIMIT
} from '../constants/task';

// MOCKED
class TestShaftService {
  shafts: Shaft[] = [];

  constructor () {
    let shafts = [
      { id: 1, stories: 7 },
      { id: 2, stories: 7 },
      { id: 3, stories: 7 },
      { id: 4, stories: 10 },
      { id: 5, stories: 10 },
    ];

    let shaft: Shaft;

    for (let s of shafts) {
      shaft = new Shaft(s.id, s.stories);
      shaft.elevator = new Elevator();
      shaft.elevator.floor = 1;
      this.shafts.push(shaft);
    }
  }

  getCurrent() {
    return this.shafts;
  }

  findShaft (id: number): Shaft {
    return this.shafts.find(shaft => shaft.id === id);
  }
}

class TestTasksService {
  tasks: Task[] = [];

  constructor (private shaftService: TestShaftService) {}

  requestFromFloor (from: number, to: number): void {

    if (!this.isDuplicateRequest(from, to)) {

      // This may end up a pseudo task
      let task: Task = new Task(from, to);
      let mTasks: Task[] = this.mergeableTasks(task);

      if (mTasks.length) {

        task = this.mergeTasks(task, mTasks[0]);

      } else {

        let shaft: Shaft = this.shaftForTask(task);

        task.assignShaft(shaft);
        task = this.addTask(task);

      }

    }

  }

  isDuplicateRequest (from: number, to: number): boolean {
    let tasks: Task[] = this.tasks
      .filter(task => (task.status <= TASK_CALLED_COMPLETE))
      .filter(task => (task.floor === from && !!~task.stops.indexOf(to) || task.floor === to && !!~task.stops.indexOf(from)))
    ;
    return Boolean(tasks.length);
  }

  mergeTasks (src: Task, dest: Task): Task {
    dest.addStop(src.stops);
    return dest;
  }


  shaftsByTasksDistribution (shaft: Shaft): number {
    return this.tasks.filter(task => (task.shaft && task.shaft.id === shaft.id)).length;
  }


  mergeableTasks (T: Task): Task[] {
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

  addTask (task: Task): Task {
    this.tasks.push(task.activate());
    return task;
  }

  getTasks (): Task[] {
    return this.tasks;
  }

  reset (): void {
    if (this.tasks.length) {
      this.tasks = [];
    }
  }

  shaftForTask (task: Task): Shaft {
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

  taskForShaft (shaft: Shaft): boolean {
    return this.tasks.length ?
      this.tasks.find(task => (task.shaft.id === shaft.id && task.status <= TASK_CALLED_LOADING)) === undefined
      : true;
  }

}


// TESTS
describe('TasksService : ', () => {

  let shaftService: TestShaftService;
  let tasksService: TestTasksService;

  beforeEach (() => {
    shaftService = new TestShaftService();
    tasksService = new TestTasksService(shaftService);
  });

  it('Is Defined', () => {
    expect(tasksService).toBeDefined();
  });

  describe('Basic Functions ->', () => {

    it('taskForShaft(shaft) -> should return true on empty task queue', () => {
      let shaft: Shaft = shaftService.findShaft(1);
      let bool: boolean = tasksService.taskForShaft(shaft);
      expect(bool).toEqual(true);
    });

    it('taskForShaft(shaft) -> should return false on met Task Status criterion', () => {
      let task1: Task = new Task(1, 7);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);
      tasksService.addTask(task1);
      let bool: boolean = tasksService.taskForShaft(shaft1);
      expect(bool).toEqual(false);
    });

    it('taskForShaft(shaft) -> should return true on unmet Task Status criterion', () => {
      let task1: Task = new Task(1, 7);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);
      task1.status = TASK_CALLED_COMPLETE;
      tasksService.addTask(task1);
      let bool: boolean = tasksService.taskForShaft(shaft1);
      expect(bool).toEqual(true);
    });

    it('shaftForTask(task) -> should grab Shaft for Task', () => {
      let task: Task = new Task(1, 7);
      let shaft: Shaft = tasksService.shaftForTask(task);
      expect(shaft).toBeDefined();
      expect(shaft.id).toEqual(1);
    });

    it('shaftForTask(task) -> should grab next available Shaft for Task ', () => {
      let task1: Task = new Task(1, 7);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);
      tasksService.addTask(task1);
      task1.status = TASK_CALLED_COMPLETE;
      let task2: Task = new Task(2, 7);
      let shaft2: Shaft = tasksService.shaftForTask(task2);
      expect(shaft2).toBeDefined();
      expect(shaft2.id).toEqual(2);
    });

    it('shaftForTask(task) -> should grab next available Shaft for Task ', () => {
      let task1: Task = new Task(1, 7);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);
      tasksService.addTask(task1);
      task1.status = TASK_CALLED_COMPLETE;
      let task2: Task = new Task(2, 7);
      let shaft2: Shaft = tasksService.shaftForTask(task2);
      expect(shaft2).toBeDefined();
      expect(shaft2.id).toEqual(2);
    });

    it('shaftForTask(task) -> should return Shaft with nearest Elevator', () => {
      shaftService.findShaft(2).elevator.floor = 7;
      let task: Task = new Task(7, 1);
      let shaft: Shaft = tasksService.shaftForTask(task);
      expect(shaft).toBeDefined();
      expect(shaft.id).toEqual(2);
    });

    it('shaftForTask(task) -> should return Shaft with nearest Elevator that isn\'t Busy', () => {
      let shaft2: Shaft = shaftService.findShaft(2);
      shaft2.elevator.floor = 7;
      let shaft3: Shaft = shaftService.findShaft(3);
      shaft3.elevator.floor = 7;
      let task1: Task = new Task(7, 1);
      task1.assignShaft(shaft2);
      tasksService.addTask(task1);
      task1.status = TASK_CALLED_COMPLETE;
      let task: Task = new Task(1, 7);
      let shaft: Shaft = tasksService.shaftForTask(task);
      expect(shaft).toBeDefined();
      expect(shaft.id).toEqual(3);
    });

    it('mergeableTasks(task) -> should check for Mergeable Tasks', () => {

      let mTasks: Task[];
      let task1: Task = new Task(1, 6);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);

      /*  Because the Task Queue is empty,
          the return here should be zero length
       */
      mTasks = tasksService.mergeableTasks(task1);
      expect(mTasks.length).toEqual(0);

      task1 = tasksService.addTask(task1);
      let task2: Task = new Task(1, 5);
      mTasks = tasksService.mergeableTasks(task2);
      expect(mTasks.length).toEqual(1);

      task2 = tasksService.mergeTasks(task2, mTasks[0]);

      /*  Because TASK_STOPS_LIMIT = 2
          The third task generated after
          the second was merged with the
          first should put that queued task
          off limits for the mergeableTasks
          filter. Ergo the return here
          should be zero length
       */
      let task3: Task = new Task(1, 4);
      mTasks = tasksService.mergeableTasks(task3);
      expect(mTasks.length).toEqual(0);

      let shaft2: Shaft = shaftService.findShaft(2);
      task3.assignShaft(shaft2);
      task3 = tasksService.addTask(task3);

      /*  Because the queued Task is
          going up, this 4th Task generated
          is out of bounds for merging.
       */
      let task4: Task = new Task(6, 1);
      mTasks = tasksService.mergeableTasks(task4);
      expect(mTasks.length).toEqual(0);

      /*  Because the open queued Task has
          status = TASK_CALLED_COMPLETE,
          this 5th Task generated
          is out of bounds for merging.
       */
      tasksService.tasks[1].status = TASK_CALLED_COMPLETE;
      let task5: Task = new Task(1, 3);
      mTasks = tasksService.mergeableTasks(task5);
      expect(mTasks.length).toEqual(0);
    });

    it('mergeableTasks(task) -> should Merge Tasks, and sort Stops', () => {
      let task1: Task = new Task(1, 6);
      let shaft1: Shaft = shaftService.findShaft(1);
      task1.assignShaft(shaft1);
      task1 = tasksService.addTask(task1);
      let task2: Task = new Task(1, 5);
      let mTasks: Task[] = tasksService.mergeableTasks(task2);
      task2 = tasksService.mergeTasks(task2, mTasks[0]);
      let tasks: Task[] = tasksService.getTasks();
      expect(tasks.length).toEqual(1);
      expect(tasks[0].stops.length).toEqual(2);
      expect(tasks[0].stops[0]).toEqual(5);
      expect(tasks[0].stops[1]).toEqual(6);
    });
  });

  describe('requestFromFloor(from, to) : Adding Tasks & Shaft Assignment ->', () => {

    it('should assign a Request as new Task to queue', () => {
      tasksService.requestFromFloor(1, 6);
      expect(tasksService.getTasks().length).toEqual(1);
    });

    it('...and Add Shaft 1 to Task', () => {
      tasksService.requestFromFloor(1, 6);
      expect(tasksService.getTasks()[0].shaft.id).toEqual(1);
    });

    it('...with 1 Stop @ 6', () => {
      tasksService.requestFromFloor(1, 6);
      let tasks = tasksService.getTasks();
      expect(tasks[0].stops.length).toEqual(1);
      expect(tasks[0].stops[0]).toEqual(6);
    });

    it('...or Add Shaft 2 if Task Status is busy', () => {
      tasksService.requestFromFloor(1, 6);
      let tasks = tasksService.getTasks();
      tasks[0].status = TASK_CALLED_COMPLETE;
      tasksService.requestFromFloor(2, 6);
      tasks = tasksService.getTasks();
      expect(tasks[1].shaft.id).toEqual(2);
    });

    it('should merge two Requests in queue', () => {
      tasksService.requestFromFloor(1, 6);
      tasksService.requestFromFloor(1, 7);

      let tasks = tasksService.getTasks();

      expect(tasks.length).toEqual(1);
    });

    it('...with 2 Stops @ 6 & 7', () => {
      tasksService.requestFromFloor(1, 6);
      tasksService.requestFromFloor(1, 7);
      let tasks = tasksService.getTasks();
      expect(tasks[0].stops.length).toEqual(2);
      expect(tasks[0].stops[0]).toEqual(6);
      expect(tasks[0].stops[1]).toEqual(7);
    });

    it('should merge two Requests in queue and Add a Third', () => {
      tasksService.requestFromFloor(1, 6);
      tasksService.requestFromFloor(1, 7);
      tasksService.requestFromFloor(1, 5);
      let tasks = tasksService.getTasks();
      expect(tasks.length).toEqual(2);
      expect(tasks[0].shaft.id).toEqual(1);
      expect(tasks[1].shaft.id).toEqual(2);

    });

    it('...with 2 Stops @ 6 & 7 + 1 Stop @ 5', () => {
      tasksService.requestFromFloor(1, 6);
      tasksService.requestFromFloor(1, 7);
      tasksService.requestFromFloor(1, 5);
      let tasks = tasksService.getTasks();
      expect(tasks[0].stops.length).toEqual(2);
      expect(tasks[0].stops[0]).toEqual(6);
      expect(tasks[0].stops[1]).toEqual(7);
      expect(tasks[1].stops.length).toEqual(1);
      expect(tasks[1].stops[0]).toEqual(5);
    });

    it('Request for 8th Floor > Shaft 1', () => {
      tasksService.requestFromFloor(1, 8);
      expect(tasksService.getTasks().length).toEqual(1);
    });

    it('...and Add Shaft 4 to Task', () => {
      tasksService.requestFromFloor(1, 8);
      expect(tasksService.getTasks()[0].shaft.id).toEqual(4);
    });

    it('...with 1 Stop @ 8', () => {
      tasksService.requestFromFloor(1, 8);
      let tasks = tasksService.getTasks();
      expect(tasks[0].stops.length).toEqual(1);
      expect(tasks[0].stops[0]).toEqual(8);
    });

    it('should merge multiple Requests where Floor > Shaft 1', () => {
      tasksService.requestFromFloor(1, 8);
      tasksService.requestFromFloor(1, 9);
      tasksService.requestFromFloor(1, 10);
      let tasks = tasksService.getTasks();
      expect(tasks.length).toEqual(2);
      expect(tasks[0].shaft.id).toEqual(4);
      expect(tasks[0].stops.length).toEqual(2);
      expect(tasks[0].stops[0]).toEqual(8);
      expect(tasks[0].stops[1]).toEqual(9);
      expect(tasks[1].shaft.id).toEqual(5);
      expect(tasks[1].stops.length).toEqual(1);
      expect(tasks[1].stops[0]).toEqual(10);
    });

    it('should Assign Nearest Shaft to Task', () => {
      let tasks: Task[];
      let shaft2: Shaft = shaftService.findShaft(2);
      let shaft3: Shaft = shaftService.findShaft(3);
      shaft2.elevator.floor = 5;
      shaft3.elevator.floor = 5;
      tasksService.requestFromFloor(1, 6);
      tasks = tasksService.getTasks();
      expect(tasks[0].shaft.id).toEqual(2);
      tasksService.reset();
      tasksService.requestFromFloor(6, 2);
      tasks = tasksService.getTasks();
      expect(tasks[0].shaft.id).toEqual(2);
    });

    it('should Assign Nearest Shaft to Task from higher floors', () => {
      let tasks: Task[];
      let shaft4: Shaft = shaftService.findShaft(4);
      let shaft5: Shaft = shaftService.findShaft(5);
      shaft4.elevator.floor = 1;
      shaft5.elevator.floor = 5;
      tasksService.requestFromFloor(8, 1);
      tasks = tasksService.getTasks();
      expect(tasks[0].shaft.id).toEqual(5);
    });

    it('should Ignore Requests matching Scheduled Tasks', () => {
      let tasks: Task[];
      tasksService.requestFromFloor(1, 7);
      tasksService.requestFromFloor(1, 6);
      tasksService.requestFromFloor(1, 7);
      tasks = tasksService.getTasks();
      expect(tasks.length).toEqual(1);
      expect(tasks[0].stops.length).toEqual(2);
    });

    it('should Schedule Future Tasks', () => {

      let tick = 0;
      do {
        let task;
        tasksService.requestFromFloor(1, tick + 2);
        do {
          task = tasksService.getTasks()[tick];
        } while (!task);
        task.status = TASK_CALLED_COMPLETE;
        tick++;
      } while (tick < 6);

      expect(tasksService.getTasks().length).toEqual(6);
    });

  });

});
