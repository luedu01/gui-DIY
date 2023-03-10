import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDemoBasicComponent } from './layout-demo-basic.component';
import { CovalentLayoutModule } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutDemoBasicComponent],
  imports: [CommonModule, CovalentLayoutModule],
  exports: [LayoutDemoBasicComponent],
})
export class LayoutDemoSharedModule {}
