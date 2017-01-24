/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '../../app/modules/elevator/module';
import * as import6 from '../../app/modules/shaft/module';
import * as import7 from '../../app/modules/floor/module';
import * as import8 from '../../app/modules/building/module';
import * as import9 from '@angular/forms/src/directives';
import * as import10 from '@angular/forms/src/form_providers';
import * as import11 from '../../app/modules/dialog/module';
import * as import12 from '@angular/http/src/http_module';
import * as import13 from 'angular-in-memory-web-api/in-memory-web-api.module';
import * as import14 from '@angular/common/src/localization';
import * as import15 from '@angular/core/src/application_init';
import * as import16 from '@angular/core/src/testability/testability';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/compiler';
import * as import19 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import20 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import21 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import22 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import23 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import24 from '@angular/core/src/animation/animation_queue';
import * as import25 from '@angular/core/src/linker/view_utils';
import * as import26 from '@angular/platform-browser/src/browser/title';
import * as import27 from '../../app/modules/floor/service';
import * as import28 from '../../app/services/in-memory-data.service';
import * as import29 from '@angular/http/src/base_request_options';
import * as import30 from '../../app/modules/shaft/service';
import * as import31 from '../../app/modules/dialog/service';
import * as import32 from '../../app/services/session.service';
import * as import33 from '../../app/services/tasks.service';
import * as import34 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import35 from '@angular/forms/src/form_builder';
import * as import36 from '@angular/http/src/backends/browser_xhr';
import * as import37 from '@angular/http/src/base_response_options';
import * as import38 from '../../app/services/log.service';
import * as import39 from '@angular/core/src/di/injector';
import * as import40 from './components/app.component.ngfactory';
import * as import41 from '@angular/core/src/i18n/tokens';
import * as import42 from '@angular/core/src/application_tokens';
import * as import43 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import44 from '@angular/platform-browser/src/dom/events/key_events';
import * as import45 from '@angular/core/src/zone/ng_zone';
import * as import46 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import47 from '@angular/core/src/console';
import * as import48 from '@angular/core/src/error_handler';
import * as import49 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import50 from '@angular/platform-browser/src/dom/animation_driver';
import * as import51 from '@angular/core/src/render/api';
import * as import52 from '@angular/core/src/security';
import * as import53 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import54 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import55 from 'angular-in-memory-web-api/in-memory-backend.service';
import * as import56 from '@angular/http/src/backends/xhr_backend';
import * as import57 from '@angular/http/src/http';
import * as import58 from '@angular/http/src/interfaces';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ElevatorModule_3:import5.ElevatorModule;
  _ShaftModule_4:import6.ShaftModule;
  _FloorModule_5:import7.FloorModule;
  _BuildingModule_6:import8.BuildingModule;
  _InternalFormsSharedModule_7:import9.InternalFormsSharedModule;
  _FormsModule_8:import10.FormsModule;
  _ReactiveFormsModule_9:import10.ReactiveFormsModule;
  _DialogModule_10:import11.DialogModule;
  _HttpModule_11:import12.HttpModule;
  _InMemoryWebApiModule_12:import13.InMemoryWebApiModule;
  _AppModule_13:import1.AppModule;
  __LOCALE_ID_14:any;
  __NgLocalization_15:import14.NgLocaleLocalization;
  _ErrorHandler_16:any;
  _ApplicationInitStatus_17:import15.ApplicationInitStatus;
  _Testability_18:import16.Testability;
  _ApplicationRef__19:import17.ApplicationRef_;
  __ApplicationRef_20:any;
  __Compiler_21:import18.Compiler;
  __APP_ID_22:any;
  __DOCUMENT_23:any;
  __HAMMER_GESTURE_CONFIG_24:import19.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_25:any[];
  __EventManager_26:import20.EventManager;
  __DomSharedStylesHost_27:import21.DomSharedStylesHost;
  __AnimationDriver_28:any;
  __DomRootRenderer_29:import22.DomRootRenderer_;
  __RootRenderer_30:any;
  __DomSanitizer_31:import23.DomSanitizerImpl;
  __Sanitizer_32:any;
  __AnimationQueue_33:import24.AnimationQueue;
  __ViewUtils_34:import25.ViewUtils;
  __IterableDiffers_35:any;
  __KeyValueDiffers_36:any;
  __SharedStylesHost_37:any;
  __Title_38:import26.Title;
  __FloorService_39:import27.FloorService;
  __InMemoryDbService_40:import28.InMemoryDataService;
  __InMemoryBackendConfig_41:any;
  __XHRBackend_42:any;
  __RequestOptions_43:import29.BaseRequestOptions;
  __Http_44:any;
  __ShaftService_45:import30.ShaftService;
  __DialogService_46:import31.DialogService;
  __SessionService_47:import32.SessionService;
  __TasksService_48:import33.TasksService;
  __RadioControlRegistry_49:import34.RadioControlRegistry;
  __FormBuilder_50:import35.FormBuilder;
  __BrowserXhr_51:import36.BrowserXhr;
  __ResponseOptions_52:import37.BaseResponseOptions;
  __XSRFStrategy_53:any;
  __LogService_54:import38.LogService;
  constructor(parent:import39.Injector) {
    super(parent,[import40.AppComponentNgFactory],[import40.AppComponentNgFactory]);
  }
  get _LOCALE_ID_14():any {
    if ((this.__LOCALE_ID_14 == null)) { (this.__LOCALE_ID_14 = import3._localeFactory(this.parent.get(import41.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_14;
  }
  get _NgLocalization_15():import14.NgLocaleLocalization {
    if ((this.__NgLocalization_15 == null)) { (this.__NgLocalization_15 = new import14.NgLocaleLocalization(this._LOCALE_ID_14)); }
    return this.__NgLocalization_15;
  }
  get _ApplicationRef_20():any {
    if ((this.__ApplicationRef_20 == null)) { (this.__ApplicationRef_20 = this._ApplicationRef__19); }
    return this.__ApplicationRef_20;
  }
  get _Compiler_21():import18.Compiler {
    if ((this.__Compiler_21 == null)) { (this.__Compiler_21 = new import18.Compiler()); }
    return this.__Compiler_21;
  }
  get _APP_ID_22():any {
    if ((this.__APP_ID_22 == null)) { (this.__APP_ID_22 = import42._appIdRandomProviderFactory()); }
    return this.__APP_ID_22;
  }
  get _DOCUMENT_23():any {
    if ((this.__DOCUMENT_23 == null)) { (this.__DOCUMENT_23 = import4._document()); }
    return this.__DOCUMENT_23;
  }
  get _HAMMER_GESTURE_CONFIG_24():import19.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_24 == null)) { (this.__HAMMER_GESTURE_CONFIG_24 = new import19.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_24;
  }
  get _EVENT_MANAGER_PLUGINS_25():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_25 == null)) { (this.__EVENT_MANAGER_PLUGINS_25 = [
      new import43.DomEventsPlugin(),
      new import44.KeyEventsPlugin(),
      new import19.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_24)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_25;
  }
  get _EventManager_26():import20.EventManager {
    if ((this.__EventManager_26 == null)) { (this.__EventManager_26 = new import20.EventManager(this._EVENT_MANAGER_PLUGINS_25,this.parent.get(import45.NgZone))); }
    return this.__EventManager_26;
  }
  get _DomSharedStylesHost_27():import21.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_27 == null)) { (this.__DomSharedStylesHost_27 = new import21.DomSharedStylesHost(this._DOCUMENT_23)); }
    return this.__DomSharedStylesHost_27;
  }
  get _AnimationDriver_28():any {
    if ((this.__AnimationDriver_28 == null)) { (this.__AnimationDriver_28 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_28;
  }
  get _DomRootRenderer_29():import22.DomRootRenderer_ {
    if ((this.__DomRootRenderer_29 == null)) { (this.__DomRootRenderer_29 = new import22.DomRootRenderer_(this._DOCUMENT_23,this._EventManager_26,this._DomSharedStylesHost_27,this._AnimationDriver_28,this._APP_ID_22)); }
    return this.__DomRootRenderer_29;
  }
  get _RootRenderer_30():any {
    if ((this.__RootRenderer_30 == null)) { (this.__RootRenderer_30 = import46._createConditionalRootRenderer(this._DomRootRenderer_29,this.parent.get(import46.NgProbeToken,(null as any)),this.parent.get(import17.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_30;
  }
  get _DomSanitizer_31():import23.DomSanitizerImpl {
    if ((this.__DomSanitizer_31 == null)) { (this.__DomSanitizer_31 = new import23.DomSanitizerImpl()); }
    return this.__DomSanitizer_31;
  }
  get _Sanitizer_32():any {
    if ((this.__Sanitizer_32 == null)) { (this.__Sanitizer_32 = this._DomSanitizer_31); }
    return this.__Sanitizer_32;
  }
  get _AnimationQueue_33():import24.AnimationQueue {
    if ((this.__AnimationQueue_33 == null)) { (this.__AnimationQueue_33 = new import24.AnimationQueue(this.parent.get(import45.NgZone))); }
    return this.__AnimationQueue_33;
  }
  get _ViewUtils_34():import25.ViewUtils {
    if ((this.__ViewUtils_34 == null)) { (this.__ViewUtils_34 = new import25.ViewUtils(this._RootRenderer_30,this._Sanitizer_32,this._AnimationQueue_33)); }
    return this.__ViewUtils_34;
  }
  get _IterableDiffers_35():any {
    if ((this.__IterableDiffers_35 == null)) { (this.__IterableDiffers_35 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_35;
  }
  get _KeyValueDiffers_36():any {
    if ((this.__KeyValueDiffers_36 == null)) { (this.__KeyValueDiffers_36 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_36;
  }
  get _SharedStylesHost_37():any {
    if ((this.__SharedStylesHost_37 == null)) { (this.__SharedStylesHost_37 = this._DomSharedStylesHost_27); }
    return this.__SharedStylesHost_37;
  }
  get _Title_38():import26.Title {
    if ((this.__Title_38 == null)) { (this.__Title_38 = new import26.Title()); }
    return this.__Title_38;
  }
  get _FloorService_39():import27.FloorService {
    if ((this.__FloorService_39 == null)) { (this.__FloorService_39 = new import27.FloorService()); }
    return this.__FloorService_39;
  }
  get _InMemoryDbService_40():import28.InMemoryDataService {
    if ((this.__InMemoryDbService_40 == null)) { (this.__InMemoryDbService_40 = new import28.InMemoryDataService()); }
    return this.__InMemoryDbService_40;
  }
  get _InMemoryBackendConfig_41():any {
    if ((this.__InMemoryBackendConfig_41 == null)) { (this.__InMemoryBackendConfig_41 = {delay: 0}); }
    return this.__InMemoryBackendConfig_41;
  }
  get _XHRBackend_42():any {
    if ((this.__XHRBackend_42 == null)) { (this.__XHRBackend_42 = import13.inMemoryBackendServiceFactory(this,this._InMemoryDbService_40,this._InMemoryBackendConfig_41)); }
    return this.__XHRBackend_42;
  }
  get _RequestOptions_43():import29.BaseRequestOptions {
    if ((this.__RequestOptions_43 == null)) { (this.__RequestOptions_43 = new import29.BaseRequestOptions()); }
    return this.__RequestOptions_43;
  }
  get _Http_44():any {
    if ((this.__Http_44 == null)) { (this.__Http_44 = import12.httpFactory(this._XHRBackend_42,this._RequestOptions_43)); }
    return this.__Http_44;
  }
  get _ShaftService_45():import30.ShaftService {
    if ((this.__ShaftService_45 == null)) { (this.__ShaftService_45 = new import30.ShaftService(this._Http_44)); }
    return this.__ShaftService_45;
  }
  get _DialogService_46():import31.DialogService {
    if ((this.__DialogService_46 == null)) { (this.__DialogService_46 = new import31.DialogService()); }
    return this.__DialogService_46;
  }
  get _SessionService_47():import32.SessionService {
    if ((this.__SessionService_47 == null)) { (this.__SessionService_47 = new import32.SessionService(this.parent.get(import45.NgZone),this._DialogService_46)); }
    return this.__SessionService_47;
  }
  get _TasksService_48():import33.TasksService {
    if ((this.__TasksService_48 == null)) { (this.__TasksService_48 = new import33.TasksService(this.parent.get(import45.NgZone),this._ShaftService_45)); }
    return this.__TasksService_48;
  }
  get _RadioControlRegistry_49():import34.RadioControlRegistry {
    if ((this.__RadioControlRegistry_49 == null)) { (this.__RadioControlRegistry_49 = new import34.RadioControlRegistry()); }
    return this.__RadioControlRegistry_49;
  }
  get _FormBuilder_50():import35.FormBuilder {
    if ((this.__FormBuilder_50 == null)) { (this.__FormBuilder_50 = new import35.FormBuilder()); }
    return this.__FormBuilder_50;
  }
  get _BrowserXhr_51():import36.BrowserXhr {
    if ((this.__BrowserXhr_51 == null)) { (this.__BrowserXhr_51 = new import36.BrowserXhr()); }
    return this.__BrowserXhr_51;
  }
  get _ResponseOptions_52():import37.BaseResponseOptions {
    if ((this.__ResponseOptions_52 == null)) { (this.__ResponseOptions_52 = new import37.BaseResponseOptions()); }
    return this.__ResponseOptions_52;
  }
  get _XSRFStrategy_53():any {
    if ((this.__XSRFStrategy_53 == null)) { (this.__XSRFStrategy_53 = import12._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_53;
  }
  get _LogService_54():import38.LogService {
    if ((this.__LogService_54 == null)) { (this.__LogService_54 = new import38.LogService()); }
    return this.__LogService_54;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ElevatorModule_3 = new import5.ElevatorModule();
    this._ShaftModule_4 = new import6.ShaftModule();
    this._FloorModule_5 = new import7.FloorModule();
    this._BuildingModule_6 = new import8.BuildingModule();
    this._InternalFormsSharedModule_7 = new import9.InternalFormsSharedModule();
    this._FormsModule_8 = new import10.FormsModule();
    this._ReactiveFormsModule_9 = new import10.ReactiveFormsModule();
    this._DialogModule_10 = new import11.DialogModule();
    this._HttpModule_11 = new import12.HttpModule();
    this._InMemoryWebApiModule_12 = new import13.InMemoryWebApiModule();
    this._AppModule_13 = new import1.AppModule();
    this._ErrorHandler_16 = import4.errorHandler();
    this._ApplicationInitStatus_17 = new import15.ApplicationInitStatus(this.parent.get(import15.APP_INITIALIZER,(null as any)));
    this._Testability_18 = new import16.Testability(this.parent.get(import45.NgZone));
    this._ApplicationRef__19 = new import17.ApplicationRef_(this.parent.get(import45.NgZone),this.parent.get(import47.Console),this,this._ErrorHandler_16,this,this._ApplicationInitStatus_17,this.parent.get(import16.TestabilityRegistry,(null as any)),this._Testability_18);
    return this._AppModule_13;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ElevatorModule)) { return this._ElevatorModule_3; }
    if ((token === import6.ShaftModule)) { return this._ShaftModule_4; }
    if ((token === import7.FloorModule)) { return this._FloorModule_5; }
    if ((token === import8.BuildingModule)) { return this._BuildingModule_6; }
    if ((token === import9.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_7; }
    if ((token === import10.FormsModule)) { return this._FormsModule_8; }
    if ((token === import10.ReactiveFormsModule)) { return this._ReactiveFormsModule_9; }
    if ((token === import11.DialogModule)) { return this._DialogModule_10; }
    if ((token === import12.HttpModule)) { return this._HttpModule_11; }
    if ((token === import13.InMemoryWebApiModule)) { return this._InMemoryWebApiModule_12; }
    if ((token === import1.AppModule)) { return this._AppModule_13; }
    if ((token === import41.LOCALE_ID)) { return this._LOCALE_ID_14; }
    if ((token === import14.NgLocalization)) { return this._NgLocalization_15; }
    if ((token === import48.ErrorHandler)) { return this._ErrorHandler_16; }
    if ((token === import15.ApplicationInitStatus)) { return this._ApplicationInitStatus_17; }
    if ((token === import16.Testability)) { return this._Testability_18; }
    if ((token === import17.ApplicationRef_)) { return this._ApplicationRef__19; }
    if ((token === import17.ApplicationRef)) { return this._ApplicationRef_20; }
    if ((token === import18.Compiler)) { return this._Compiler_21; }
    if ((token === import42.APP_ID)) { return this._APP_ID_22; }
    if ((token === import49.DOCUMENT)) { return this._DOCUMENT_23; }
    if ((token === import19.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_24; }
    if ((token === import20.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_25; }
    if ((token === import20.EventManager)) { return this._EventManager_26; }
    if ((token === import21.DomSharedStylesHost)) { return this._DomSharedStylesHost_27; }
    if ((token === import50.AnimationDriver)) { return this._AnimationDriver_28; }
    if ((token === import22.DomRootRenderer)) { return this._DomRootRenderer_29; }
    if ((token === import51.RootRenderer)) { return this._RootRenderer_30; }
    if ((token === import23.DomSanitizer)) { return this._DomSanitizer_31; }
    if ((token === import52.Sanitizer)) { return this._Sanitizer_32; }
    if ((token === import24.AnimationQueue)) { return this._AnimationQueue_33; }
    if ((token === import25.ViewUtils)) { return this._ViewUtils_34; }
    if ((token === import53.IterableDiffers)) { return this._IterableDiffers_35; }
    if ((token === import54.KeyValueDiffers)) { return this._KeyValueDiffers_36; }
    if ((token === import21.SharedStylesHost)) { return this._SharedStylesHost_37; }
    if ((token === import26.Title)) { return this._Title_38; }
    if ((token === import27.FloorService)) { return this._FloorService_39; }
    if ((token === import55.InMemoryDbService)) { return this._InMemoryDbService_40; }
    if ((token === import55.InMemoryBackendConfig)) { return this._InMemoryBackendConfig_41; }
    if ((token === import56.XHRBackend)) { return this._XHRBackend_42; }
    if ((token === import29.RequestOptions)) { return this._RequestOptions_43; }
    if ((token === import57.Http)) { return this._Http_44; }
    if ((token === import30.ShaftService)) { return this._ShaftService_45; }
    if ((token === import31.DialogService)) { return this._DialogService_46; }
    if ((token === import32.SessionService)) { return this._SessionService_47; }
    if ((token === import33.TasksService)) { return this._TasksService_48; }
    if ((token === import34.RadioControlRegistry)) { return this._RadioControlRegistry_49; }
    if ((token === import35.FormBuilder)) { return this._FormBuilder_50; }
    if ((token === import36.BrowserXhr)) { return this._BrowserXhr_51; }
    if ((token === import37.ResponseOptions)) { return this._ResponseOptions_52; }
    if ((token === import58.XSRFStrategy)) { return this._XSRFStrategy_53; }
    if ((token === import38.LogService)) { return this._LogService_54; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__19.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);