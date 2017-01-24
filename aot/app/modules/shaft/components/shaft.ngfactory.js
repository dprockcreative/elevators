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
import * as import0 from '../../../../../app/modules/shaft/components/shaft';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../../../app/services/tasks.service';
import * as import10 from '../../../../../app/modules/elevator/components/elevator';
import * as import11 from '../../elevator/components/elevator.ngfactory';
import * as import12 from '@angular/core/src/zone/ng_zone';
export var Wrapper_ShaftComponent = (function () {
    function Wrapper_ShaftComponent(p0) {
        this._changed = false;
        this.context = new import0.ShaftComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ShaftComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ShaftComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_ShaftComponent.prototype.check_shaft = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.shaft = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ShaftComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_ShaftComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ShaftComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ShaftComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.elevator.subscribe(_eventHandler.bind(view, 'elevator')));
        }
    };
    return Wrapper_ShaftComponent;
}());
var renderType_ShaftComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ShaftComponent_Host0 = (function (_super) {
    __extends(View_ShaftComponent_Host0, _super);
    function View_ShaftComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ShaftComponent_Host0, renderType_ShaftComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_ShaftComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'div', new import3.InlineArray2(2, 'shaft', ''), rootSelector, null);
        this.compView_0 = new View_ShaftComponent0(this.viewUtils, this, 0, this._el_0);
        this._ShaftComponent_0_3 = new Wrapper_ShaftComponent(this.injectorGet(import9.TasksService, this.parentIndex));
        this.compView_0.create(this._ShaftComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._ShaftComponent_0_3.context);
    };
    View_ShaftComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ShaftComponent) && (0 === requestNodeIndex))) {
            return this._ShaftComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ShaftComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = '';
        this._ShaftComponent_0_3.check_shaft(currVal_0_0_0, throwOnChange, false);
        this._ShaftComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ShaftComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._ShaftComponent_0_3.ngOnDestroy();
    };
    View_ShaftComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ShaftComponent_Host0;
}(import2.AppView));
export var ShaftComponentNgFactory = new import8.ComponentFactory('[shaft]', View_ShaftComponent_Host0, import0.ShaftComponent);
var styles_ShaftComponent = [];
var renderType_ShaftComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_ShaftComponent, {});
export var View_ShaftComponent0 = (function (_super) {
    __extends(View_ShaftComponent0, _super);
    function View_ShaftComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ShaftComponent0, renderType_ShaftComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import1.UNINITIALIZED;
    }
    View_ShaftComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'shaft'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'elevator', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import11.View_ElevatorComponent0(this.viewUtils, this, 3, this._el_3);
        this._ElevatorComponent_3_3 = new import11.Wrapper_ElevatorComponent(this.parentView.injectorGet(import12.NgZone, this.parentIndex), this.parentView.injectorGet(import9.TasksService, this.parentIndex));
        this.compView_3.create(this._ElevatorComponent_3_3.context);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5
        ]), null);
        return null;
    };
    View_ShaftComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.ElevatorComponent) && (3 === requestNodeIndex))) {
            return this._ElevatorComponent_3_3.context;
        }
        return notFoundResult;
    };
    View_ShaftComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.elevator;
        this._ElevatorComponent_3_3.check_elevator(currVal_3_0_0, throwOnChange, false);
        this._ElevatorComponent_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_8 = this.context.shaft.stories;
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_1, 'stories', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        this.compView_3.internalDetectChanges(throwOnChange);
    };
    View_ShaftComponent0.prototype.destroyInternal = function () {
        this.compView_3.destroy();
    };
    return View_ShaftComponent0;
}(import2.AppView));
//# sourceMappingURL=shaft.ngfactory.js.map