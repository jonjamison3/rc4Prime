import {Component, OnInit } from '@angular/core';
import {CoolChartComponent} from './cool-chart.component';
import {NavTabComponent} from './shared/nav-tabs.component';


@Component({
	selector: 'my-app',
	template: `
		<h1 class="ui-widget-header">Jon Likes Primeng</h1>
		<nav-tabs></nav-tabs>
    <cool-chart></cool-chart>
		<router-outlet></router-outlet>
    `,
    directives: [ CoolChartComponent, NavTabComponent ]
})
export class AppComponent{

}
