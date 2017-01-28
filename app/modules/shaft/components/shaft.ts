import { Component, Input, Output, OnDestroy, DoCheck } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { TasksService } from '../../../services/tasks.service';

import { Task } from '../../../interfaces/index';

import { Shaft } from '../interface';

import { Elevator } from '../../elevator/interface';

@Component({
  selector: '[shaft]',
  template: `
    <div class="shaft" [attr.stories]="shaft.stories">
      <elevator [parent]="shaft"></elevator>
    </div>
  `
})

export class ShaftComponent implements OnDestroy, DoCheck {

  @Input() shaft: Shaft;
  @Output() parent: Shaft;

  oTaskSubscription: Subscription;

  constructor (
    private tasksService: TasksService
  ) {
    this.oTaskSubscription = tasksService.openTasksStream.subscribe(tasks => this.queryOpenTasks(tasks));
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
      console.info(`Task Floor: ${qualified.floor} -> ${qualified.stops[0]} picked up by Shaft ${qualified.shaft.id}`);
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
    if (this.shaft.elevator && this.shaft.elevator.ready()) {
      let task: Task | null = this.tasksService.taskForShaft(this.shaft);

      if (task) {
        this.tasksService.startElevatorOperations(task);
      }
    }
  }

  ngOnDestroy (): void {
    this.oTaskSubscription.unsubscribe();
  }
}

