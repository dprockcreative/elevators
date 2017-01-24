/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '../../../../../app/modules/elevator/directives/elevator';
export var Wrapper_ElevatorDirective = (function () {
    function Wrapper_ElevatorDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.ElevatorDirective(p0, p1);
    }
    Wrapper_ElevatorDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ElevatorDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_ElevatorDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ElevatorDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ElevatorDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ElevatorDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ElevatorDirective;
}());
//# sourceMappingURL=elevator.ngfactory.js.map