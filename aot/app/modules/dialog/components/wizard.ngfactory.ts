/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/modules/dialog/components/wizard';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/dialog/service';
import * as import9 from '../../../../../app/modules/dialog/factories';
import * as import10 from '../factories.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/change_detection/change_detection_util';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
export class Wrapper_DialogWizard {
  /*private*/ _eventHandler:Function;
  context:import0.DialogWizard;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.DialogWizard(p0);
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
var renderType_DialogWizard_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_DialogWizard_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.DialogWizard>;
  _DialogWizard_0_3:Wrapper_DialogWizard;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogWizard_Host0,renderType_DialogWizard_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'wizard',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DialogWizard0(this.viewUtils,this,0,this._el_0);
    this._DialogWizard_0_3 = new Wrapper_DialogWizard(this.injectorGet(import8.DialogService,this.parentIndex));
    this.compView_0.create(this._DialogWizard_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._DialogWizard_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DialogWizard) && (0 === requestNodeIndex))) { return this._DialogWizard_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DialogWizard_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { this._DialogWizard_0_3.context.ngAfterContentChecked(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DialogWizardNgFactory:import7.ComponentFactory<import0.DialogWizard> = new import7.ComponentFactory<import0.DialogWizard>('wizard',View_DialogWizard_Host0,import0.DialogWizard);
const styles_DialogWizard:any[] = ([] as any[]);
class View_DialogWizard2 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import9.ContentComponent>;
  _ComponentFactoryResolver_0_3:any;
  _ContentComponent_0_4:import10.Wrapper_ContentComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_DialogWizard2,renderType_DialogWizard,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'content-component',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_ContentComponent0(this.viewUtils,this,0,this._el_0);
    this._ComponentFactoryResolver_0_3 = new import12.CodegenComponentFactoryResolver([
      import10.GenericContentComponentNgFactory,
      import10.InputTextContentComponentNgFactory,
      import10.InputRangeContentComponentNgFactory
    ]
    ,this.parentView.injectorGet(import12.ComponentFactoryResolver,this.parentIndex));
    this._ContentComponent_0_4 = new import10.Wrapper_ContentComponent(this._ComponentFactoryResolver_0_3);
    this.compView_0.create(this._ContentComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.ComponentFactoryResolver) && (0 === requestNodeIndex))) { return this._ComponentFactoryResolver_0_3; }
    if (((token === import9.ContentComponent) && (0 === requestNodeIndex))) { return this._ContentComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.$implicit;
    this._ContentComponent_0_4.check_dcd(currVal_0_0_0,throwOnChange,false);
    this._ContentComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DialogWizard1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import11.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_DialogWizard1,renderType_DialogWizard,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import11.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import13.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = (this.context.index == this.parentView.context.dialog.index);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_DialogWizard2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
var renderType_DialogWizard:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_DialogWizard,{});
export class View_DialogWizard0 extends import1.AppView<import0.DialogWizard> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import11.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import16.Wrapper_NgFor;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogWizard0,renderType_DialogWizard,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_19 = import17.UNINITIALIZED;
    this._expr_20 = import17.UNINITIALIZED;
    this._expr_21 = import17.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import11.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import16.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'footer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n       ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'input',new import3.InlineArray2(2,'type','button'),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_3,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n       ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'input',new import3.InlineArray2(2,'type','submit'),(null as any));
    this._text_13 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._text_14 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import19.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.dcds;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    const currVal_19:any = this.context.label('no','start');
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementProperty(this._el_7,'value',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this.context.label('yes','end');
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementProperty(this._el_12,'value',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context.disabled();
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementProperty(this._el_12,'disabled',currVal_21);
      this._expr_21 = currVal_21;
    }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 1)) { return new View_DialogWizard1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.reset()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}