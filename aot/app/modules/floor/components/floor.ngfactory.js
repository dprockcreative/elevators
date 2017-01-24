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
import * as import0 from '../../../../../app/modules/floor/components/floor';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../../../app/modules/floor/service';
import * as import10 from '../../../../../app/services/tasks.service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '@angular/common/src/directives/ng_class';
export var Wrapper_FloorComponent = (function () {
    function Wrapper_FloorComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.FloorComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_FloorComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FloorComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_FloorComponent.prototype.check_floor = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.floor = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_FloorComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_FloorComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FloorComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FloorComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FloorComponent;
}());
var renderType_FloorComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_FloorComponent_Host0 = (function (_super) {
    __extends(View_FloorComponent_Host0, _super);
    function View_FloorComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FloorComponent_Host0, renderType_FloorComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_FloorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'li', new import3.InlineArray2(2, 'floor', ''), rootSelector, null);
        this.compView_0 = new View_FloorComponent0(this.viewUtils, this, 0, this._el_0);
        this._FloorComponent_0_3 = new Wrapper_FloorComponent(this.injectorGet(import9.FloorService, this.parentIndex), this.injectorGet(import10.TasksService, this.parentIndex));
        this.compView_0.create(this._FloorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._FloorComponent_0_3.context);
    };
    View_FloorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FloorComponent) && (0 === requestNodeIndex))) {
            return this._FloorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FloorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = '';
        this._FloorComponent_0_3.check_floor(currVal_0_0_0, throwOnChange, false);
        this._FloorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FloorComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FloorComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FloorComponent_Host0;
}(import2.AppView));
export var FloorComponentNgFactory = new import8.ComponentFactory('li[floor]', View_FloorComponent_Host0, import0.FloorComponent);
var styles_FloorComponent = [];
var View_FloorComponent1 = (function (_super) {
    __extends(View_FloorComponent1, _super);
    function View_FloorComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_FloorComponent1, renderType_FloorComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
    }
    View_FloorComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray2(2, 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_FloorComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.parentView.context.disabled(this.context.$implicit);
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'disabled', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import3.inlineInterpolate(1, '\n          ', this.context.$implicit.id, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_FloorComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FloorComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.callForElevator(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_FloorComponent1;
}(import2.AppView));
var renderType_FloorComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_FloorComponent, {});
export var View_FloorComponent0 = (function (_super) {
    __extends(View_FloorComponent0, _super);
    function View_FloorComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FloorComponent0, renderType_FloorComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._map_13 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
    }
    View_FloorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'section', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_1_3 = new import12.Wrapper_NgClass(this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import15.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_1), this.renderer);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'nav', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_5 = new import11.ViewContainer(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import17.TemplateRef_(this, 5, this._anchor_5);
        this._NgFor_5_6 = new import13.Wrapper_NgFor(this._vc_5.vcRef, this._TemplateRef_5_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n      ', null);
        this._text_7 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_FloorComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import18.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        if (((token === import19.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._NgClass_1_3.context;
        }
        return notFoundResult;
    };
    View_FloorComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this._map_13(this.context.isFloorActive());
        this._NgClass_1_3.check_ngClass(currVal_1_0_0, throwOnChange, false);
        this._NgClass_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_5_0_0 = this.context.buttons;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
    };
    View_FloorComponent0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
    };
    View_FloorComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_FloorComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    };
    return View_FloorComponent0;
}(import2.AppView));
//# sourceMappingURL=floor.ngfactory.js.map