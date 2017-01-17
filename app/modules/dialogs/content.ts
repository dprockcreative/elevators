import {
  Component, 
  Input, 
  Injector, 
  ViewContainerRef, 
  ViewChild, 
  ReflectiveInjector, 
  ComponentFactoryResolver
} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Dialog } from '../../interfaces/index';


/*  Generic Content Component
 */
@Component({selector: 'generic-content', template: `<p>{{label}}</p>`})
class GenericContentComponent {
  label: string = '';
  constructor (
    private injector: Injector
  ) {
    this.label = this.injector.get('label');
  }
}

/*  Input Text Content Component
        <input type="number" name="shaft_{{row.id}}" min="3" max="10" step="1" (ngModelChange)="setShaftsStories($event, row)" [(ngModel)]="row.stories" tabindex="{{row.id + 1}}"/>
 */
@Component({
  selector: 'input-text-content', 
  template: `
    <label title="{{label}}" [formGroup]="form">
      <input type="text" formControlName="{{name}}" />
    </label>
  `
})
class InputTextContentComponent {

  form: FormGroup;

  label : string = '';
  name  : string = '';

  constructor (
    private injector: Injector
  ) {
    this.label = this.injector.get('label');
    this.name  = this.injector.get('name');
    this.form  = this.injector.get('form');
  }

  onChange (evt: any): void {
    console.log('InputTextContentComponent::onChange', 'simple change', evt);
  }
}

const CONTENT_COMPONENTS = [
  GenericContentComponent, 
  InputTextContentComponent
];



/*  Content Component
 */
@Component({
  selector: 'content-component',
  entryComponents: CONTENT_COMPONENTS,
  template: `<span #dcc></span>`
})

class ContentComponent {

  component = null;

  @ViewChild('dcc', { read : ViewContainerRef }) dcc: ViewContainerRef;

  @Input() set dcd(data: { 'component': any, 'inputs': any }) {

    if (data) {
      let ips       = Object.keys(data.inputs).map(input => ({ 'provide' : input, 'useValue': data.inputs[input] }));
      let rips      = ReflectiveInjector.resolve(ips);
      let injector  = ReflectiveInjector.fromResolvedProviders(rips, this.dcc.parentInjector);
      let factory   = this.cfr.resolveComponentFactory(data.component);
      let comp      = factory.create(injector);

      this.dcc.insert(comp.hostView);

      if (this.component) {
        this.component.destroy();
      }

      this.component = comp;
    }
  }

  constructor(
    private cfr: ComponentFactoryResolver
  ) {}

}


export const DYNAMIC_COMPONENTS = [ContentComponent, CONTENT_COMPONENTS];

export const DYNAMIC_COMPONENTS_MAP = {
  'generic-content'   : GenericContentComponent,
  'input-text-content': InputTextContentComponent,
};
