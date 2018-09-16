import { RouteConfig } from 'vue-router/types/router';

export const ComponentsRoutes: RouteConfig[] = [
  {
    path:      '/componentes',
    component: () => import(/* webpackChunkName: "components" */ './Components/Components.vue').then(m => m.default),
  },
];
