import { NgModule } from '@angular/core';

import { componentRoutes } from './designer.routes';
import { ComponentOverviewModule } from '../../components/shared/component-overview/component-overview.module';

@NgModule({
  imports: [ComponentOverviewModule, componentRoutes],
})
export class ComponentsModule {}
