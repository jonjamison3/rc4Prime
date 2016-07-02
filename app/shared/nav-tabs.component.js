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
var NavTabComponent = (function () {
    function NavTabComponent() {
    }
    NavTabComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'charts', icon: 'fa-bar-chart' },
            { label: 'home', icon: 'fa-home' },
        ];
    };
    NavTabComponent = __decorate([
        core_1.Component({
            selector: 'nav-tabs',
            template: "\n\n    <p-menu [model]=\"items\"></p-menu>\n\n    ",
            directives: [primeng_1.Menu]
        }), 
        __metadata('design:paramtypes', [])
    ], NavTabComponent);
    return NavTabComponent;
}());
exports.NavTabComponent = NavTabComponent;
//# sourceMappingURL=nav-tabs.component.js.map