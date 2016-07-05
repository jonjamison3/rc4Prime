import { provideRouter, RouterConfig }  from '@angular/router';
import { CoolChartComponent } from './cool-chart.component';
import { HomeChartComponent } from './home-chart.component';

const routes: RouterConfig = [
  {
    path: '',
    component: CoolChartComponent,
    name: ''
  },
  {
    path: 'charts',
    component: CoolChartComponent,
    name: 'charts'
  },
  {
    path: 'home',
    component: HomeChartComponent,
    name: 'home'
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
