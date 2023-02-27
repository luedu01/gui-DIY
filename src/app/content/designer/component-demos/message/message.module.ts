import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentHighlightModule } from '@covalent/highlight';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/designer/designer';
import { MessageDemoBasicSharedModule } from './demos/message-demo-basic/message-demo-basic-shared';
import { MessageDemoBasicComponent } from './demos/message-demo-basic/message-demo-basic.component';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { CovalentDialogsModule } from '@covalent/core/dialogs';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: MessageDemoBasicComponent,
  id: 'source',
});

@NgModule({
  imports: [
    MessageDemoBasicSharedModule,
    CommonModule,
    DocumentationToolsModule,
    // Material
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    ComponentDetailsModule,
    // Covalent
    CovalentDialogsModule,
    CovalentMessageModule,
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class MessageDemoModule {}
