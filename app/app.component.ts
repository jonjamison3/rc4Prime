import {Component, OnInit } from '@angular/core';
import {CoolChartComponent} from './cool-chart.component';
import {NavTabComponent} from './shared/nav-tabs.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
	selector: 'my-app',
	template: `
		<h1 class="ui-widget-header">Jon Codes</h1>
		<nav-tabs></nav-tabs>
		<router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES, CoolChartComponent, NavTabComponent ]
})
export class AppComponent{

}
