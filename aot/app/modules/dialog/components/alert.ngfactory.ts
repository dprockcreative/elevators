/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/modules/dialog/components/alert';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/dialog/service';
import * as import9 from '@angular/core/src/change_detection/change_detection_util';
import * as import10 from '@angular/core/src/security';
export class Wrapper_DialogAlert {
  /*private*/ _eventHandler:Function;
  context:import0.DialogAlert;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.DialogAlert(p0);
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
var renderType_DialogAlert_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_DialogAlert_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.DialogAlert>;
  _DialogAlert_0_3:Wrapper_DialogAlert;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogAlert_Host0,renderType_DialogAlert_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'alert',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DialogAlert0(this.viewUtils,this,0,this._el_0);
    this._DialogAlert_0_3 = new Wrapper_DialogAlert(this.injectorGet(import8.DialogService,this.parentIndex));
    this.compView_0.create(this._DialogAlert_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._DialogAlert_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DialogAlert) && (0 === requestNodeIndex))) { return this._DialogAlert_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DialogAlert_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { this._DialogAlert_0_3.context.ngAfterContentChecked(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DialogAlertNgFactory:import7.ComponentFactory<import0.DialogAlert> = new import7.ComponentFactory<import0.DialogAlert>('alert',View_DialogAlert_Host0,import0.DialogAlert);
const styles_DialogAlert:any[] = ([] as any[]);
var renderType_DialogAlert:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_DialogAlert,{});
export class View_DialogAlert0 extends import1.AppView<import0.DialogAlert> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogAlert0,renderType_DialogAlert,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_11 = import9.UNINITIALIZED;
    this._expr_12 = import9.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'footer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n       ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'input',new import3.InlineArray2(2,'type','submit'),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
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
      this._text_9,
      this._text_10
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_11:any = this.context.content();
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementProperty(this._el_1,'innerHTML',this.viewUtils.sanitizer.sanitize(import10.SecurityContext.HTML,currVal_11));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this.context.label('yes');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementProperty(this._el_7,'value',currVal_12);
      this._expr_12 = currVal_12;
    }
  }
}