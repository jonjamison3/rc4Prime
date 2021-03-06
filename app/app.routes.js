"use strict";
var router_1 = require('@angular/router');
var cool_chart_component_1 = require('./cool-chart.component');
var home_chart_component_1 = require('./home-chart.component');
var routes = [
    {
        path: '',
        component: cool_chart_component_1.CoolChartComponent
    },
    {
        path: 'charts',
        component: cool_chart_component_1.CoolChartComponent
    },
    {
        path: 'home',
        component: home_chart_component_1.HomeChartComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map