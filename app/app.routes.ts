import { provideRouter, RouterConfig }  from '@angular/router';
import { CoolChartComponent } from './cool-chart.component';

const routes: RouterConfig = [
  {
    path: '',
    component: CoolChartComponent
  },
  {
    path: 'charts',
    component: CoolChartComponent
  },

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
