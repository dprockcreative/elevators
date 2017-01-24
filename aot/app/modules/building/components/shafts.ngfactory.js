/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../app/modules/building/components/shafts';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/shaft/service';
import * as import9 from '../../../../../app/modules/shaft/components/shaft';
import * as import10 from '../../shaft/components/shaft.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '../../../../../app/services/tasks.service';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '../../../../../app/pipes/number2alpha.pipe';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
export var Wrapper_ShaftsComponent = (function () {
    function Wrapper_ShaftsComponent(p0) {
        this._changed = false;
        this.context = new import0.ShaftsComponent(p0);
    }
    Wrapper_ShaftsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ShaftsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ShaftsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ShaftsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ShaftsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ShaftsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ShaftsComponent;
}());
var renderType_ShaftsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ShaftsComponent_Host0 = (function (_super) {
    __extends(View_ShaftsComponent_Host0, _super);
    function View_ShaftsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ShaftsComponent_Host0, renderType_ShaftsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ShaftsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'shafts', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ShaftsComponent0(this.viewUtils, this, 0, this._el_0);
        this._ShaftsComponent_0_3 = new Wrapper_ShaftsComponent(this.injectorGet(import8.ShaftService, this.parentIndex));
        this.compView_0.create(this._ShaftsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ShaftsComponent_0_3.context);
    };
    View_ShaftsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ShaftsComponent) && (0 === requestNodeIndex))) {
            return this._ShaftsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ShaftsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ShaftsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ShaftsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ShaftsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ShaftsComponent_Host0;
}(import1.AppView));
export var ShaftsComponentNgFactory = new import7.ComponentFactory('shafts', View_ShaftsComponent_Host0, import0.ShaftsComponent);
var styles_ShaftsComponent = [];
var View_ShaftsComponent1 = (function (_super) {
    __extends(View_ShaftsComponent1, _super);
    function View_ShaftsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ShaftsComponent1, renderType_ShaftsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_3 = import12.UNINITIALIZED;
    }
    View_ShaftsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import10.View_ShaftComponent0(this.viewUtils, this, 0, this._el_0);
        this._ShaftComponent_0_3 = new import10.Wrapper_ShaftComponent(this.parentView.parentView.injectorGet(import13.TasksService, this.parentView.parentIndex));
        this.compView_0.create(this._ShaftComponent_0_3.context);
        this._pipe_number2alpha_0_0 = import3.pureProxy1(this.parentView._pipe_number2alpha_0.transform.bind(this.parentView._pipe_number2alpha_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ShaftsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.ShaftComponent) && (0 === requestNodeIndex))) {
            return this._ShaftComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ShaftsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import12.ValueUnwrapper();
        var currVal_0_0_0 = this.context.$implicit;
        this._ShaftComponent_0_3.check_shaft(currVal_0_0_0, throwOnChange, false);
        this._ShaftComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        valUnwrapper.reset();
        var currVal_3 = valUnwrapper.unwrap(import3.castByValue(this._pipe_number2alpha_0_0, this.parentView._pipe_number2alpha_0.transform)(this.context.$implicit.id));
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_3, currVal_3))) {
            this.renderer.setElementAttribute(this._el_0, 'shaft', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ShaftsComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._ShaftComponent_0_3.ngOnDestroy();
    };
    View_ShaftsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ShaftsComponent1;
}(import1.AppView));
var renderType_ShaftsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ShaftsComponent, {});
export var View_ShaftsComponent0 = (function (_super) {
    __extends(View_ShaftsComponent0, _super);
    function View_ShaftsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ShaftsComponent0, renderType_ShaftsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ShaftsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import11.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import16.TemplateRef_(this, 3, this._anchor_3);
        this._NgFor_3_6 = new import14.Wrapper_NgFor(this._vc_3.vcRef, this._TemplateRef_3_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._pipe_number2alpha_0 = new import15.Number2AlphaPipe();
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5
        ]), null);
        return null;
    };
    View_ShaftsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import18.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6.context;
        }
        return notFoundResult;
    };
    View_ShaftsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.shafts;
        this._NgFor_3_6.check_ngForOf(currVal_3_0_0, throwOnChange, false);
        this._NgFor_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
    };
    View_ShaftsComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
    };
    View_ShaftsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_ShaftsComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_ShaftsComponent0;
}(import1.AppView));
//# sourceMappingURL=shafts.ngfactory.js.map