import {Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from 'primeng/primeng';


@Component({
	selector: 'nav-tabs',
	template: `

    <p-menu [model]="items"></p-menu>

    `,
    directives: [  Menu ]
})
export class NavTabComponent{

  private items: MenuItem[];

     ngOnInit() {
         this.items = [
             {label: 'charts', icon: 'fa-bar-chart'},
             {label: 'home', icon: 'fa-home'},
            //  {label: 'Documentation', icon: 'fa-book'},
            //  {label: 'Support', icon: 'fa-support'},
            //  {label: 'Social', icon: 'fa-twitter'}
         ];
     }

}
