import { Component, Input, Output, OnInit, DoCheck } from '@angular/core';
import { Elevator, Shaft, Task } from '../interfaces/index';
import { TasksService } from '../services/index';

@Component({
  selector: '[shaft]',
  template: `
    <div class="shaft" [attr.stories]="shaft.stories">
      <elevator [elevator]="elevator"></elevator>
    </div>
  `
})

export class ShaftComponent implements OnInit, DoCheck {

  @Input() shaft: Shaft;
  @Output() elevator: Elevator;

  constructor (
    private tasksService: TasksService
  ) {
    tasksService.openTasksStream.subscribe(tasks => this.queryOpenTasks(tasks));
  }

  /*  Query Open Tasks - Event Stream listener
      @type   private
      @param  tasks [Task Array]
      @return void
      - Assigns Shaft to Qualified Task.
   */
  private queryOpenTasks (tasks: Task[]): void {
    let qualified = this.qualified(tasks);

    if (qualified) {
      qualified.assignShaft(this.shaft);
    }
  }

  /*  Qualified
      @type   private
      @param  tasks [Task Array]
      @return null | Task
      - Loops through open tasks.
      - rejects tasks assigned a shaft since broadcast.
      - returns first open task that allows delivery.
   */
  private qualified (tasks: Task[]): null | Task {
    for (let task of tasks) {
      if (task.shaft) {
        if (task.shaft.id === this.shaft.id) {
          return null;
        }
      } else if (task.canUse(this.shaft)) {
        return task;
      }
    }
    return null;
  }

  /*  Do Check
      @type   public [LifeCycle Hook]
      @return void
      - Reduces iteration by checking for valid elevator property
      - Looks for Shaft reference in Assigned Tasks
      - Initiates Elevator Operations
   */
  ngDoCheck (): void {
    if (this.elevator.ready()) {

      let task = this.tasksService.taskForShaft(this.shaft);

      if (task) {
        this.tasksService.startElevatorOperations(task);
      }
    }
  }

  ngOnInit (): void {
    this.elevator = this.shaft.elevator;
  }
}

