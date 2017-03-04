import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  ElevatorComponent
} from './elevator';

import {
  Shaft,
  ShaftService
} from '../../shaft/index';

import {
  TasksService
} from '../../../services/tasks.service';

// TESTS
describe('ElevatorComponent : ', () => {

  let comp: ElevatorComponent;
  let fixture: ComponentFixture<ElevatorComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        TasksService,
        ShaftService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      declarations: [ ElevatorComponent ],
    });

    fixture = TestBed.createComponent(ElevatorComponent);

    comp = fixture.componentInstance;

    comp.parent = new Shaft(1, 7);

    comp.ngOnInit();

    de = fixture.debugElement.query(By.css('div.elevator'));
    el = de.nativeElement;
  }));


  it('Is Defined', () => {

    //console.debug('comp', comp);

    expect(comp).toBeDefined();
  });

});
