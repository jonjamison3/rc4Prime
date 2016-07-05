import { provideRouter, RouterConfig }  from '@angular/router';
import { CoolChartComponent } from './cool-chart.component';
import { HomeChartComponent } from './home-chart.component';

const routes: RouterConfig = [
  {
    path: '',
    component: CoolChartComponent
  },
  {
    path: 'charts',
    component: CoolChartComponent
  },
  {
    path: 'home',
    component: HomeChartComponent
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
