import {Component, OnInit } from '@angular/core';
import {UIChart} from 'primeng/primeng';


@Component({
	selector: 'cool-chart',
	template: `

    <p-chart type="pie" [data]="data" class="ui-widget-content"></p-chart>

    `,
    directives: [ UIChart ]
})
export class HomeChartComponent{

  data: any;

    constructor() {
        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Schooling', 'Coding', 'Driving'],
            datasets: [
                {
                    label: 'My Free time',
                    backgroundColor:  'rgba(62, 80, 215, 0.6)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,.4)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,.7)',
                    data: [32, 59, 80, 59, 65, 55, 40]
                },
                {
                    label: 'My Work time',
                    backgroundColor: 'rgba(255,99,132,0.6)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132, .5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(62, 80, 215, 0.4)',
                    data: [40, 30, 15, 59, 85, 50, 40]
                }
            ]
        };
    }

}
