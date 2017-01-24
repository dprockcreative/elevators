/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/modules/building/components/building';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/shaft/service';
import * as import9 from '../../../../../app/modules/building/components/shafts';
import * as import10 from './shafts.ngfactory';
import * as import11 from '../../../../../app/modules/building/components/floors';
import * as import12 from './floors.ngfactory';
import * as import13 from '../../../../../app/modules/building/components/foundation';
import * as import14 from './foundation.ngfactory';
import * as import15 from '../../../../../app/modules/floor/service';
import * as import16 from '../../../../../app/modules/dialog/service';
import * as import17 from '../../../../../app/services/tasks.service';
export class Wrapper_BuildingComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BuildingComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.BuildingComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_BuildingComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BuildingComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BuildingComponent>;
  _BuildingComponent_0_3:Wrapper_BuildingComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BuildingComponent_Host0,renderType_BuildingComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'section',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BuildingComponent0(this.viewUtils,this,0,this._el_0);
    this._BuildingComponent_0_3 = new Wrapper_BuildingComponent(this.injectorGet(import8.ShaftService,this.parentIndex));
    this.compView_0.create(this._BuildingComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BuildingComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BuildingComponent) && (0 === requestNodeIndex))) { return this._BuildingComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BuildingComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BuildingComponentNgFactory:import7.ComponentFactory<import0.BuildingComponent> = new import7.ComponentFactory<import0.BuildingComponent>('section',View_BuildingComponent_Host0,import0.BuildingComponent);
const styles_BuildingComponent:any[] = ([] as any[]);
var renderType_BuildingComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BuildingComponent,{});
export class View_BuildingComponent0 extends import1.AppView<import0.BuildingComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import9.ShaftsComponent>;
  _ShaftsComponent_3_3:import10.Wrapper_ShaftsComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import11.FloorsComponent>;
  _FloorsComponent_5_3:import12.Wrapper_FloorsComponent;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import13.FoundationComponent>;
  _FoundationComponent_7_3:import14.Wrapper_FoundationComponent;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BuildingComponent0,renderType_BuildingComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'article',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'shafts',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import10.View_ShaftsComponent0(this.viewUtils,this,3,this._el_3);
    this._ShaftsComponent_3_3 = new import10.Wrapper_ShaftsComponent(this.parentView.injectorGet(import8.ShaftService,this.parentIndex));
    this.compView_3.create(this._ShaftsComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,'floors',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_5 = new import12.View_FloorsComponent0(this.viewUtils,this,5,this._el_5);
    this._FloorsComponent_5_3 = new import12.Wrapper_FloorsComponent(this.parentView.injectorGet(import8.ShaftService,this.parentIndex),this.parentView.injectorGet(import15.FloorService,this.parentIndex));
    this.compView_5.create(this._FloorsComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_1,'foundation',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_7 = new import14.View_FoundationComponent0(this.viewUtils,this,7,this._el_7);
    this._FoundationComponent_7_3 = new import14.Wrapper_FoundationComponent(this.parentView.injectorGet(import16.DialogService,this.parentIndex),this.parentView.injectorGet(import8.ShaftService,this.parentIndex),this.parentView.injectorGet(import17.TasksService,this.parentIndex));
    this.compView_7.create(this._FoundationComponent_7_3.context);
    this._text_8 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.ShaftsComponent) && (3 === requestNodeIndex))) { return this._ShaftsComponent_3_3.context; }
    if (((token === import11.FloorsComponent) && (5 === requestNodeIndex))) { return this._FloorsComponent_5_3.context; }
    if (((token === import13.FoundationComponent) && (7 === requestNodeIndex))) { return this._FoundationComponent_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ShaftsComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._FloorsComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._FoundationComponent_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
    this.compView_5.destroy();
    this.compView_7.destroy();
  }
}