"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var primeng_1 = require('primeng/primeng');
var CoolChartComponent = (function () {
    function CoolChartComponent() {
        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Schooling', 'Coding', 'Driving'],
            datasets: [
                {
                    label: 'My Free time',
                    backgroundColor: 'rgba(62, 80, 215, 0.6)',
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
    CoolChartComponent = __decorate([
        core_1.Component({
            selector: 'cool-chart',
            template: "\n\n    <p-chart type=\"radar\" [data]=\"data\" class=\"ui-widget-content\"></p-chart>\n\n    ",
            directives: [primeng_1.UIChart]
        }), 
        __metadata('design:paramtypes', [])
    ], CoolChartComponent);
    return CoolChartComponent;
}());
exports.CoolChartComponent = CoolChartComponent;
//# sourceMappingURL=cool-chart.component.js.map