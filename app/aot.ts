/**
 * Elevators
 * https://github.com/dprockcreative/elevators
 * License: ISC
 * © 2017 David Prock
 */
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch(console.error);
