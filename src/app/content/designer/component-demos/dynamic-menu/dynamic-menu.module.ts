import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { setComponentRoutes } from '../../../../content/designer/designer';
import { DynamicMenuHeroSharedModule } from './demos/dynamic-menu-demo-basic/dynamic-menu-hero.shared';
import { DynamicMenuDemoBasicComponent } from './demos/dynamic-menu-demo-basic/dynamic-menu-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: DynamicMenuDemoBasicComponent,
  id: 'dynamic-menu',
});

@NgModule({
  imports: [
    DynamicMenuHeroSharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DynamicMenuDemoModule {}
