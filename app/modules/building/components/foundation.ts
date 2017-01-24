import { Component } from '@angular/core';

import {
  TasksService
} from '../../../services/tasks.service';

import {
  DialogService
} from '../../dialog/service';

import {
  ShaftService
} from '../../shaft/service';

import {
  Number2AlphaPipe,
  DIALOG_WIZARD_SET_SHAFTS_HEADER,
  DIALOG_WIZARD_SET_SHAFTS_LABEL,
  DIALOG_WIZARD_SET_STORIES_HEADER,
  DIALOG_WIZARD_SET_STORIES_LABEL
} from '../index';

import {
  BUILDING_SHAFTS_MIN,
  BUILDING_SHAFTS_MAX,
  BUILDING_STORIES_MIN,
  BUILDING_STORIES_MAX
} from '../constants';

@Component({
  selector: 'foundation',
  template: `
    <label>
      <button
        type="button"
        (click)="start()"
        [disabled]="disabled()"
      ></button>
    </label>
  `
})

export class FoundationComponent {

  private PROCESSING: boolean = false;

  constructor(
    private dialogService: DialogService,
    private shaftService: ShaftService,
    private tasksService: TasksService
  ) {}

  /*  Disabled
      @type   public
      @return boolean
   */
  public disabled (): boolean {
    return this.PROCESSING;
  }

  /*  Start
      @type   public
      @return void
   */
  public start (): void {
    if (!this.PROCESSING) {
      this.PROCESSING = true;

      let shaftDialogDefinition = this.buildShaftDialogDefinition();

      this.dialogService.wizard(shaftDialogDefinition).promise()
        .then(model => {

          setTimeout(() => {

            let storiesDialogDefinition = this.buildStoriesDialogDefinition(model.shafts);

            this.dialogService.wizard(storiesDialogDefinition).promise()
              .then(result => {

                let config = Array.from({length : model.shafts}, (v, i) => {
                  let id = i + 1;
                  let stories = result[id];
                  return { id, stories };
                });

                this.tasksService.reset();

                this.shaftService.build(config)
                  .then(() => {
                    this.PROCESSING = false;
                    let length = this.shaftService.getLength();
                    let top = this.shaftService.getTopStory();
                    console.info(`Building Reconstructed`, `Shafts: *${length}*`, `Highest Floor: *${top}*`);
                  });
              })
              .catch(() => {
                this.PROCESSING = false;
              });
          });
        })
        .catch(() => {
          this.PROCESSING = false;
        });

    }
  }

  /*  Build Shaft Dialog Definition
      @type   private
      @return definition [array]
   */
  private buildShaftDialogDefinition (): any[] {
    return [
      DIALOG_WIZARD_SET_SHAFTS_HEADER,
      [
        {
          'type': 'input-range-content',
          'inputs': {
            'label': DIALOG_WIZARD_SET_SHAFTS_LABEL,
            'name' : 'shafts',
            'min': BUILDING_SHAFTS_MIN,
            'max': BUILDING_SHAFTS_MAX,
            'value': this.shaftService.getLength()
          }
        }
      ]
    ];
  }

  /*  Build Stories Dialog Definition
      @type   private
      @return definition [array]
   */
  private buildStoriesDialogDefinition (shafts: number): any[] {

    let content: any[] = [];
    let label: string = '';
    let name: string = '';
    let alpha: string = '';
    let pipe = new Number2AlphaPipe();

    for (let shaft = 1; shaft <= shafts; shaft++) {
      alpha = pipe.transform(shaft);
      label = DIALOG_WIZARD_SET_STORIES_LABEL.replace('{{ALPHA}}', alpha);
      name = String(shaft);
      content.push({
        'type': 'input-range-content',
        'inputs': {
          'label': label,
          'name': name,
          'min': BUILDING_STORIES_MIN,
          'max': BUILDING_STORIES_MAX,
          'value': this.shaftService.findShaft(shaft).stories
        }
      });
    }
    return [DIALOG_WIZARD_SET_STORIES_HEADER, content];
  }

}
