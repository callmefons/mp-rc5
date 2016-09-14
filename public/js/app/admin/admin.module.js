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
var admin_routing_1 = require('./admin.routing');
var admin_component_1 = require('./admin.component');
var forms_1 = require('@angular/forms');
var admin_dashboard_component_1 = require("./admin-dashboard.component");
var admin_vendors_component_1 = require("./admin-vendors.component");
var admin_listing_component_1 = require("./admin-listing.component");
var admin_product_component_1 = require("./admin-product.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                admin_routing_1.ADMIN_ROUTES,
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_vendors_component_1.AdminVendorsComponent,
                admin_listing_component_1.AdminLisitingComponent,
                admin_product_component_1.AdminProductComponent
            ],
            exports: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_vendors_component_1.AdminVendorsComponent,
                admin_listing_component_1.AdminLisitingComponent,
                admin_product_component_1.AdminProductComponent,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBRXZDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLDBDQUFzQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3BFLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pFLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBNEJoRTtJQUFBO0lBRUEsQ0FBQztJQTVCRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw0QkFBWTthQUViO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2dCQUNkLG1EQUF1QjtnQkFDdkIsK0NBQXFCO2dCQUNyQixnREFBc0I7Z0JBQ3RCLCtDQUFxQjthQUN0QjtZQUVELE9BQU8sRUFBRTtnQkFDUCxnQ0FBYztnQkFDZCxtREFBdUI7Z0JBQ3ZCLCtDQUFxQjtnQkFDckIsZ0RBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLG1CQUFXO2dCQUNYLDJCQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRSxFQUVWO1NBQ0YsQ0FBQzs7bUJBQUE7SUFHRixrQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksbUJBQVcsY0FFdkIsQ0FBQSIsImZpbGUiOiJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBRE1JTl9ST1VURVN9IGZyb20gJy4vYWRtaW4ucm91dGluZyc7XG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0FkbWluRGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluVmVuZG9yc0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tdmVuZG9ycy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5MaXNpdGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tbGlzdGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5Qcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi1wcm9kdWN0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQURNSU5fUk9VVEVTLFxuICAgIC8vIEFsZXJ0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEFkbWluVmVuZG9yc0NvbXBvbmVudCxcbiAgICBBZG1pbkxpc2l0aW5nQ29tcG9uZW50LFxuICAgIEFkbWluUHJvZHVjdENvbXBvbmVudFxuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICBBZG1pbkNvbXBvbmVudCxcbiAgICBBZG1pbkRhc2hib2FyZENvbXBvbmVudCxcbiAgICBBZG1pblZlbmRvcnNDb21wb25lbnQsXG4gICAgQWRtaW5MaXNpdGluZ0NvbXBvbmVudCxcbiAgICBBZG1pblByb2R1Y3RDb21wb25lbnQsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluTW9kdWxlIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
