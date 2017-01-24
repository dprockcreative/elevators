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
import * as import0 from '../../../../../app/modules/dialog/components/confirm';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/modules/dialog/service';
import * as import9 from '@angular/core/src/change_detection/change_detection_util';
import * as import10 from '@angular/core/src/security';
export var Wrapper_DialogConfirm = (function () {
    function Wrapper_DialogConfirm(p0) {
        this._changed = false;
        this.context = new import0.DialogConfirm(p0);
    }
    Wrapper_DialogConfirm.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DialogConfirm.prototype.ngOnDestroy = function () {
    };
    Wrapper_DialogConfirm.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DialogConfirm.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DialogConfirm.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DialogConfirm.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DialogConfirm;
}());
var renderType_DialogConfirm_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DialogConfirm_Host0 = (function (_super) {
    __extends(View_DialogConfirm_Host0, _super);
    function View_DialogConfirm_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DialogConfirm_Host0, renderType_DialogConfirm_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DialogConfirm_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'confirm', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DialogConfirm0(this.viewUtils, this, 0, this._el_0);
        this._DialogConfirm_0_3 = new Wrapper_DialogConfirm(this.injectorGet(import8.DialogService, this.parentIndex));
        this.compView_0.create(this._DialogConfirm_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DialogConfirm_0_3.context);
    };
    View_DialogConfirm_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DialogConfirm) && (0 === requestNodeIndex))) {
            return this._DialogConfirm_0_3.context;
        }
        return notFoundResult;
    };
    View_DialogConfirm_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DialogConfirm_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            this._DialogConfirm_0_3.context.ngAfterContentChecked();
        }
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DialogConfirm_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DialogConfirm_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DialogConfirm_Host0;
}(import1.AppView));
export var DialogConfirmNgFactory = new import7.ComponentFactory('confirm', View_DialogConfirm_Host0, import0.DialogConfirm);
var styles_DialogConfirm = [];
var renderType_DialogConfirm = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DialogConfirm, {});
export var View_DialogConfirm0 = (function (_super) {
    __extends(View_DialogConfirm0, _super);
    function View_DialogConfirm0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DialogConfirm0, renderType_DialogConfirm, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_16 = import9.UNINITIALIZED;
        this._expr_17 = import9.UNINITIALIZED;
        this._expr_18 = import9.UNINITIALIZED;
    }
    View_DialogConfirm0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'footer', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n       ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'input', new import3.InlineArray2(2, 'type', 'reset'), null);
        this._text_8 = this.renderer.createText(this._el_5, '\n      ', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n      ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_3, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n       ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'input', new import3.InlineArray2(2, 'type', 'submit'), null);
        this._text_13 = this.renderer.createText(this._el_10, '\n      ', null);
        this._text_14 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), [disposable_0]);
        return null;
    };
    View_DialogConfirm0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16 = this.context.content();
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementProperty(this._el_1, 'innerHTML', this.viewUtils.sanitizer.sanitize(import10.SecurityContext.HTML, currVal_16));
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this.context.label('no');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementProperty(this._el_7, 'value', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this.context.label('yes');
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementProperty(this._el_12, 'value', currVal_18);
            this._expr_18 = currVal_18;
        }
    };
    View_DialogConfirm0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.reset() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DialogConfirm0;
}(import1.AppView));
//# sourceMappingURL=confirm.ngfactory.js.map