import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppRoutes } from './services/app-routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppRoutes
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
