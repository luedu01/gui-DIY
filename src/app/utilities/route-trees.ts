import {
  componentDetails,
  componentRouteCategories,
} from '../content/designer/designer';

import {
  utilitiesRouteCategories,
  utilitiesContentDetails,
} from '../content/utilities/utilities-content';
import {
  echartsRoutesCategories,
  echartsContentDetails,
} from '../content/echarts/echarts-content';
import { docsRouteCategories, docsContentDetails } from '../content/docs/docs';


import {
  createRouteGroup,
  IRouteGroup,
  ICombinedRouteGroup,
} from './route-group';

export enum rootRoutes {
  Monitor = '/docs',
  Designer = '/designer',
  ECharts = '/echarts',
  Utilities = '/utilities',
}

enum descriptions {
  Docs = 'some description',
  Components = 'Create views quickly with tested components that conform to Material Design',
  ECharts = 'Visualize your data easily. ECharts is an extensive "tried and true" charting library brought to Angular as Covalent Echarts',
  Utilities = 'Tools to help create, request, format, and animate',
}

export const docsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: docsRouteCategories,
  hasOverview: false,
  components: docsContentDetails,
  rootRoute: rootRoutes.Monitor,
});

export const echartsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: echartsRoutesCategories,
  hasOverview: true,
  components: echartsContentDetails,
  rootRoute: rootRoutes.ECharts,
});

export const componentRoutesGroup: IRouteGroup[] = createRouteGroup({
  categories: componentRouteCategories,
  hasOverview: true,
  components: componentDetails,
  rootRoute: rootRoutes.Designer,
});

export const utilitiesRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: utilitiesRouteCategories,
  hasOverview: true,
  components: utilitiesContentDetails,
  rootRoute: rootRoutes.Utilities,
});

export const routeGroups: ICombinedRouteGroup[] = [
  {
    name: 'Monitor',
    description: descriptions.Docs,
    routeGroups: docsRouteGroup,
    rootRoute: rootRoutes.Monitor,
  },
  {
    name: 'Designer',
    description: descriptions.Components,
    routeGroups: componentRoutesGroup,
    rootRoute: rootRoutes.Designer,
  },
  /*{
    name: 'ECharts',
    description: descriptions.ECharts,
    routeGroups: echartsRouteGroup,
    rootRoute: rootRoutes.ECharts,
  },
  {
    name: 'Utilities',
    description: descriptions.Utilities,
    routeGroups: utilitiesRouteGroup,
    rootRoute: rootRoutes.Utilities,
  },*/
];
