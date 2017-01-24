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
import * as import0 from '../../../../../app/modules/building/components/floors';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/shaft/service';
import * as import9 from '../../../../../app/modules/floor/service';
import * as import10 from '../../../../../app/modules/floor/components/floor';
import * as import11 from '../../floor/components/floor.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '../../../../../app/services/tasks.service';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
export var Wrapper_FloorsComponent = (function () {
    function Wrapper_FloorsComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.FloorsComponent(p0, p1);
    }
    Wrapper_FloorsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FloorsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_FloorsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_FloorsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FloorsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FloorsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FloorsComponent;
}());
var renderType_FloorsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_FloorsComponent_Host0 = (function (_super) {
    __extends(View_FloorsComponent_Host0, _super);
    function View_FloorsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FloorsComponent_Host0, renderType_FloorsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_FloorsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'floors', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_FloorsComponent0(this.viewUtils, this, 0, this._el_0);
        this._FloorsComponent_0_3 = new Wrapper_FloorsComponent(this.injectorGet(import8.ShaftService, this.parentIndex), this.injectorGet(import9.FloorService, this.parentIndex));
        this.compView_0.create(this._FloorsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._FloorsComponent_0_3.context);
    };
    View_FloorsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FloorsComponent) && (0 === requestNodeIndex))) {
            return this._FloorsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FloorsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FloorsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FloorsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FloorsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FloorsComponent_Host0;
}(import1.AppView));
export var FloorsComponentNgFactory = new import7.ComponentFactory('floors', View_FloorsComponent_Host0, import0.FloorsComponent);
var styles_FloorsComponent = [];
var View_FloorsComponent1 = (function (_super) {
    __extends(View_FloorsComponent1, _super);
    function View_FloorsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_FloorsComponent1, renderType_FloorsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_3 = import13.UNINITIALIZED;
    }
    View_FloorsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import11.View_FloorComponent0(this.viewUtils, this, 0, this._el_0);
        this._FloorComponent_0_3 = new import11.Wrapper_FloorComponent(this.parentView.parentView.injectorGet(import9.FloorService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import14.TasksService, this.parentView.parentIndex));
        this.compView_0.create(this._FloorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_FloorsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.FloorComponent) && (0 === requestNodeIndex))) {
            return this._FloorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FloorsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._FloorComponent_0_3.check_floor(currVal_0_0_0, throwOnChange, false);
        this._FloorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_3 = this.context.$implicit.id;
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_0, 'value', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FloorsComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FloorsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FloorsComponent1;
}(import1.AppView));
var renderType_FloorsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_FloorsComponent, {});
export var View_FloorsComponent0 = (function (_super) {
    __extends(View_FloorsComponent0, _super);
    function View_FloorsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FloorsComponent0, renderType_FloorsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_FloorsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'ol', new import3.InlineArray2(2, 'reversed', 'true'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import12.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import16.TemplateRef_(this, 3, this._anchor_3);
        this._NgFor_3_6 = new import15.Wrapper_NgFor(this._vc_3.vcRef, this._TemplateRef_3_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
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
    View_FloorsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import18.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6.context;
        }
        return notFoundResult;
    };
    View_FloorsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.floors;
        this._NgFor_3_6.check_ngForOf(currVal_3_0_0, throwOnChange, false);
        this._NgFor_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
    };
    View_FloorsComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
    };
    View_FloorsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_FloorsComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_FloorsComponent0;
}(import1.AppView));
//# sourceMappingURL=floors.ngfactory.js.map