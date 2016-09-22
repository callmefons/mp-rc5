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
var admin_setting_component_1 = require("./admin-setting.component");
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
                admin_product_component_1.AdminProductComponent,
                admin_setting_component_1.AdminSettingComponent
            ],
            exports: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_vendors_component_1.AdminVendorsComponent,
                admin_listing_component_1.AdminLisitingComponent,
                admin_product_component_1.AdminProductComponent,
                admin_setting_component_1.AdminSettingComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBRXZDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLDBDQUFzQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3BFLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pFLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBK0JoRTtJQUFBO0lBRUEsQ0FBQztJQS9CRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw0QkFBWTthQUViO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2dCQUNkLG1EQUF1QjtnQkFDdkIsK0NBQXFCO2dCQUNyQixnREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsK0NBQXFCO2FBQ3RCO1lBRUQsT0FBTyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkLG1EQUF1QjtnQkFDdkIsK0NBQXFCO2dCQUNyQixnREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsK0NBQXFCO2dCQUVyQixtQkFBVztnQkFDWCwyQkFBbUI7YUFDcEI7WUFDRCxTQUFTLEVBQUUsRUFFVjtTQUNGLENBQUM7O21CQUFBO0lBR0Ysa0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG1CQUFXLGNBRXZCLENBQUEiLCJmaWxlIjoiYWRtaW4vYWRtaW4ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QURNSU5fUk9VVEVTfSBmcm9tICcuL2FkbWluLnJvdXRpbmcnO1xuaW1wb3J0IHtBZG1pbkNvbXBvbmVudH0gZnJvbSAnLi9hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtBZG1pbkRhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblZlbmRvcnNDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLXZlbmRvcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluTGlzaXRpbmdDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLWxpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluUHJvZHVjdENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5TZXR0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi1zZXR0aW5nLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQURNSU5fUk9VVEVTLFxuICAgIC8vIEFsZXJ0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEFkbWluVmVuZG9yc0NvbXBvbmVudCxcbiAgICBBZG1pbkxpc2l0aW5nQ29tcG9uZW50LFxuICAgIEFkbWluUHJvZHVjdENvbXBvbmVudCxcbiAgICBBZG1pblNldHRpbmdDb21wb25lbnRcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgQWRtaW5Db21wb25lbnQsXG4gICAgQWRtaW5EYXNoYm9hcmRDb21wb25lbnQsXG4gICAgQWRtaW5WZW5kb3JzQ29tcG9uZW50LFxuICAgIEFkbWluTGlzaXRpbmdDb21wb25lbnQsXG4gICAgQWRtaW5Qcm9kdWN0Q29tcG9uZW50LFxuICAgIEFkbWluU2V0dGluZ0NvbXBvbmVudCxcblxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
