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
var customer_component_1 = require("./customer.component");
var customer_dashboard_component_1 = require("./customer-dashboard.component");
var customer_routing_1 = require("./customer.routing");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        core_1.NgModule({
            imports: [
                customer_routing_1.CUSTOMER_ROUTES,
            ],
            declarations: [
                customer_component_1.CustomerComponent,
                customer_dashboard_component_1.CustomerDashboardComponent
            ],
            exports: [
                customer_component_1.CustomerComponent,
                customer_dashboard_component_1.CustomerDashboardComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyL2N1c3RvbWVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBRXZDLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3ZELDZDQUF5QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzFFLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBa0JuRDtJQUFBO0lBRUEsQ0FBQztJQWxCRDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxrQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLHlEQUEwQjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxzQ0FBaUI7Z0JBQ2pCLHlEQUEwQjthQUM3QjtZQUNELFNBQVMsRUFBRSxFQUVWO1NBQ0osQ0FBQzs7c0JBQUE7SUFHRixxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJmaWxlIjoiY3VzdG9tZXIvY3VzdG9tZXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q3VzdG9tZXJDb21wb25lbnR9IGZyb20gXCIuL2N1c3RvbWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDdXN0b21lckRhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vY3VzdG9tZXItZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDVVNUT01FUl9ST1VURVN9IGZyb20gXCIuL2N1c3RvbWVyLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENVU1RPTUVSX1JPVVRFUyxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDdXN0b21lckNvbXBvbmVudCxcbiAgICAgICAgQ3VzdG9tZXJEYXNoYm9hcmRDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ3VzdG9tZXJDb21wb25lbnQsXG4gICAgICAgIEN1c3RvbWVyRGFzaGJvYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcblxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJNb2R1bGUge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
