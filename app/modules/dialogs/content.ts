import {
  Component, 
  Input, 
  Injector, 
  ViewContainerRef, 
  ViewChild, 
  ReflectiveInjector, 
  ComponentFactoryResolver
} from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Dialog } from '../../interfaces/index';

/*  Generic Content Component
 */
@Component({
  selector: 'generic-content', 
  template: `<div [innerHTML]="template"></div>`
})
class GenericContentComponent {
  template: SafeHtml = '';
  constructor (
    private injector: Injector,
    private sanitizer: DomSanitizer
  ) {
    this.template = this.sanitizer.bypassSecurityTrustHtml(this.injector.get('template'));
  }
}

/*  Input Text Content Component
 */
@Component({
  selector: 'input-text-content', 
  template: `
    <label title="{{label}}" [formGroup]="form">
      <input type="text" [formControlName]="name" />
    </label>
  `
})
class InputTextContentComponent {

  form  : FormControl;
  label : string = '';
  name  : string = '';

  constructor (
    private injector: Injector
  ) {
    this.form  = this.injector.get('form');
    this.label = this.injector.get('label');
    this.name  = this.injector.get('name');
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
  'generic-content': {
    'component' : GenericContentComponent,
    'inputs': { 'template' : null }
  },
  'input-text-content': {
    'component' : InputTextContentComponent,
    'inputs': { 'label' : null, 'name' : null }
  },
};
