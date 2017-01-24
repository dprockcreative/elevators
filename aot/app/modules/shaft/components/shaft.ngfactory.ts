/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/modules/shaft/components/shaft';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../../../app/services/tasks.service';
import * as import10 from '../../../../../app/modules/elevator/components/elevator';
import * as import11 from '../../elevator/components/elevator.ngfactory';
import * as import12 from '@angular/core/src/zone/ng_zone';
export class Wrapper_ShaftComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ShaftComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ShaftComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_shaft(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.shaft = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) {
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
      this.context.ngDoCheck();
    }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.elevator.subscribe(_eventHandler.bind(view,'elevator'))); }
  }
}
var renderType_ShaftComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ShaftComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ShaftComponent>;
  _ShaftComponent_0_3:Wrapper_ShaftComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ShaftComponent_Host0,renderType_ShaftComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'div',new import3.InlineArray2(2,'shaft',''),rootSelector,(null as any));
    this.compView_0 = new View_ShaftComponent0(this.viewUtils,this,0,this._el_0);
    this._ShaftComponent_0_3 = new Wrapper_ShaftComponent(this.injectorGet(import9.TasksService,this.parentIndex));
    this.compView_0.create(this._ShaftComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ShaftComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ShaftComponent) && (0 === requestNodeIndex))) { return this._ShaftComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = '';
    this._ShaftComponent_0_3.check_shaft(currVal_0_0_0,throwOnChange,false);
    this._ShaftComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ShaftComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ShaftComponentNgFactory:import8.ComponentFactory<import0.ShaftComponent> = new import8.ComponentFactory<import0.ShaftComponent>('[shaft]',View_ShaftComponent_Host0,import0.ShaftComponent);
const styles_ShaftComponent:any[] = ([] as any[]);
var renderType_ShaftComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_ShaftComponent,{});
export class View_ShaftComponent0 extends import2.AppView<import0.ShaftComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import2.AppView<import10.ElevatorComponent>;
  _ElevatorComponent_3_3:import11.Wrapper_ElevatorComponent;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ShaftComponent0,renderType_ShaftComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','shaft'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'elevator',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import11.View_ElevatorComponent0(this.viewUtils,this,3,this._el_3);
    this._ElevatorComponent_3_3 = new import11.Wrapper_ElevatorComponent(this.parentView.injectorGet(import12.NgZone,this.parentIndex),this.parentView.injectorGet(import9.TasksService,this.parentIndex));
    this.compView_3.create(this._ElevatorComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.ElevatorComponent) && (3 === requestNodeIndex))) { return this._ElevatorComponent_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.elevator;
    this._ElevatorComponent_3_3.check_elevator(currVal_3_0_0,throwOnChange,false);
    this._ElevatorComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    const currVal_8:any = this.context.shaft.stories;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_1,'stories',((currVal_8 == null)? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    this.compView_3.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
  }
}