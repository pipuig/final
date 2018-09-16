import { RouteConfig } from 'vue-router/types/router';

export const PereRoutes: RouteConfig[] = [
  {
    path:      '/peregrinacion',
    component: () => import(/* webpackChunkName: "components" */ './Pere/Pere.vue').then(m => m.default),
  },
];
