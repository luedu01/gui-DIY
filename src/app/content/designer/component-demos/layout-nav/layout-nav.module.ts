import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/designer/designer';
import { LayoutNavDemoSharedModule } from './demos/layout-nav-demo-basic/layout-nav-demo.shared';
import { LayoutNavDemoBasicComponent } from './demos/layout-nav-demo-basic/layout-nav-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LayoutNavDemoBasicComponent,
  id: 'layout-nav',
});

@NgModule({
  imports: [
    LayoutNavDemoSharedModule,
    // Material
    MatIconModule,
    // Routes
    RouterModule.forChild(routes),
    ComponentDetailsModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutNavDemoModule {}
