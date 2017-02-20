import { Component, Input, Output, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ShaftService } from '../service';

import { TasksService } from '../../../services/tasks.service';

import { Task } from '../../../interfaces/index';

import { Shaft } from '../interface';

@Component({
  selector: '[shaft]',
  template: `
    <div class="shaft" [attr.stories]="shaft.stories">
      <elevator [parent]="shaft"></elevator>
    </div>
  `
})

export class ShaftComponent implements OnDestroy {

  @Input() shaft: Shaft;
  @Output() parent: Shaft;

  oTaskSubscription: Subscription;
  sShaftSubscription: Subscription;

  constructor (
    private tasksService: TasksService,
    private shaftService: ShaftService
  ) {
    this.oTaskSubscription = tasksService.openTasksStream.subscribe(tasks => this.queryOpenTasks(tasks));
    this.sShaftSubscription = shaftService.stationShaftSource.subscribe(shaft => this.setShaftStation(shaft));
  }

  private setShaftStation (shaft: Shaft): void {
    console.log('ShaftComponent::setShaftStation', shaft, this.shaft);
  }

  /*  Query Open Tasks - Event Stream listener
      @type   private
      @param  tasks [Task Array]
      @return void
      - Starts Elevator Ops on Open Task for this Shaft.
   */
  private queryOpenTasks (tasks: Task[]): void {

    let task: Task | undefined = tasks.find(task => (task.shaft.id === this.shaft.id));

    if (task) {
      this.tasksService.startElevatorOperations(task);
    }

  }

  ngOnDestroy (): void {
    this.oTaskSubscription.unsubscribe();
    this.sShaftSubscription.unsubscribe();
  }
}

