import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CovalentDialogsModule } from '@covalent/core/dialogs';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/designer/designer';
import { DialogsDemoBasicComponent } from './demos/dialogs-demo-basic/dialogs-demo-basic.component';
import { DialogsDemoBasicSharedModule } from './demos/dialogs-demo-basic/dialogs-demo-basic-shared';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: DialogsDemoBasicComponent,
  id: 'dialogs',
});

@NgModule({
  imports: [
    DialogsDemoBasicSharedModule,
    CommonModule,
    // Material
    ComponentDetailsModule,
    // Covalent
    CovalentDialogsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DialogsDemoModule {}
