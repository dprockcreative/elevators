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
import * as import0 from '../../../app/components/log.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/log.service';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '@angular/core/src/security';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '../../../app/pipes/markdown.pipe';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import21 from '@angular/common/src/directives/ng_for';
export var Wrapper_LogComponent = (function () {
    function Wrapper_LogComponent(p0) {
        this._changed = false;
        this.context = new import0.LogComponent(p0);
    }
    Wrapper_LogComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LogComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LogComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_LogComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LogComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LogComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LogComponent;
}());
var renderType_LogComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LogComponent_Host0 = (function (_super) {
    __extends(View_LogComponent_Host0, _super);
    function View_LogComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_LogComponent_Host0, renderType_LogComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_LogComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'aside', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LogComponent0(this.viewUtils, this, 0, this._el_0);
        this._LogComponent_0_3 = new Wrapper_LogComponent(this.injectorGet(import8.LogService, this.parentIndex));
        this.compView_0.create(this._LogComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._LogComponent_0_3.context);
    };
    View_LogComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LogComponent) && (0 === requestNodeIndex))) {
            return this._LogComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_LogComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LogComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LogComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LogComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LogComponent_Host0;
}(import1.AppView));
export var LogComponentNgFactory = new import7.ComponentFactory('aside', View_LogComponent_Host0, import0.LogComponent);
var styles_LogComponent = [];
var View_LogComponent1 = (function (_super) {
    __extends(View_LogComponent1, _super);
    function View_LogComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_LogComponent1, renderType_LogComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import11.UNINITIALIZED;
        this._map_4 = import3.pureProxy1(function (p0) {
            return { expired: p0 };
        });
    }
    View_LogComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import9.Wrapper_NgClass(this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.KeyValueDiffers, this.parentView.parentIndex), new import14.ElementRef(this._el_0), this.renderer);
        this._pipe_markdown_0_0 = import3.pureProxy1(this.parentView._pipe_markdown_0.transform.bind(this.parentView._pipe_markdown_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_LogComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.NgClass) && (0 === requestNodeIndex))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_LogComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import11.ValueUnwrapper();
        var currVal_0_0_0 = this._map_4(this.context.$implicit.expired);
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        valUnwrapper.reset();
        var currVal_2 = valUnwrapper.unwrap(import3.castByValue(this._pipe_markdown_0_0, this.parentView._pipe_markdown_0.transform)(this.context.$implicit.message));
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_2, currVal_2))) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import16.SecurityContext.HTML, currVal_2));
            this._expr_2 = currVal_2;
        }
    };
    View_LogComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LogComponent1;
}(import1.AppView));
var renderType_LogComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LogComponent, {});
export var View_LogComponent0 = (function (_super) {
    __extends(View_LogComponent0, _super);
    function View_LogComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_LogComponent0, renderType_LogComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._map_10 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
    }
    View_LogComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_1_3 = new import9.Wrapper_NgClass(this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import13.KeyValueDiffers, this.parentIndex), new import14.ElementRef(this._el_1), this.renderer);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import10.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import19.TemplateRef_(this, 3, this._anchor_3);
        this._NgFor_3_6 = new import17.Wrapper_NgFor(this._vc_3.vcRef, this._TemplateRef_3_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._pipe_markdown_0 = new import18.MarkdownPipe(this.parentView.injectorGet(import20.DomSanitizer, this.parentIndex));
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
    View_LogComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import21.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6.context;
        }
        if (((token === import15.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_1_3.context;
        }
        return notFoundResult;
    };
    View_LogComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this._map_10(this.context.active());
        this._NgClass_1_3.check_ngClass(currVal_1_0_0, throwOnChange, false);
        this._NgClass_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_3_0_0 = this.context.collection;
        this._NgFor_3_6.check_ngForOf(currVal_3_0_0, throwOnChange, false);
        this._NgFor_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
    };
    View_LogComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
    };
    View_LogComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_LogComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_LogComponent0;
}(import1.AppView));
//# sourceMappingURL=log.component.ngfactory.js.map