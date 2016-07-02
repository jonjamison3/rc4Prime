"use strict";
var router_1 = require('@angular/router');
var cool_chart_component_1 = require('./cool-chart.component');
var routes = [
    {
        path: '',
        component: cool_chart_component_1.CoolChartComponent
    },
    {
        path: 'charts',
        component: cool_chart_component_1.CoolChartComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map