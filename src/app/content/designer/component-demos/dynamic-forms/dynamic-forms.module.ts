import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/designer/designer';
import { DynamicFormsDemoComponent } from './dynamic-forms.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: DynamicFormsDemoComponent,
  id: 'dynamic-forms',
});

@NgModule({
  declarations: [DynamicFormsDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CovalentDynamicFormsModule,
    ComponentDetailsModule,
    // Covalent
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DynamicFormsDemoModule {}
