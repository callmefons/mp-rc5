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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var error_service_1 = require("./errors/error.service");
var error_component_1 = require("./errors/error.component");
var home_module_1 = require('./home/home.module');
var router_1 = require("@angular/router");
var shared_module_1 = require("./shared/shared.module");
var auth_component_1 = require("./auth/auth.component");
var auth_forgot_password_component_1 = require("./auth/auth-forgot-password.component");
var auth_register_component_1 = require("./auth/auth-register.component");
var auth_reset_password_component_1 = require("./auth/auth-reset-password.component");
var product_component_1 = require("./product/product.component");
var product_detail_component_1 = require("./product/product-detail.component");
var product_list_component_1 = require("./product/product-list.component");
var vendor_component_1 = require("./vendor/vendor.component");
var vendor_listing_component_1 = require("./vendor/vendor-listing.component");
var vendor_add_product_component_1 = require("./vendor/vendor-add-product.component");
var vendor_edit_product_component_1 = require("./vendor/vendor-edit-product.component");
var vendor_profile_component_1 = require("./vendor/vendor-profile.component");
var vendor_dashboard_component_1 = require("./vendor/vendor-dashboard.component");
var admin_component_1 = require("./admin/admin.component");
var admin_dashboard_component_1 = require("./admin/admin-dashboard.component");
var admin_listing_component_1 = require("./admin/admin-listing.component");
var admin_product_component_1 = require("./admin/admin-product.component");
var admin_vendors_component_1 = require("./admin/admin-vendors.component");
var browse_page_component_1 = require("./product/browse-page.component");
var admin_setting_component_1 = require("./admin/admin-setting.component");
var auth_register_vendor_component_1 = require("./auth/auth-register-vendor.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                error_component_1.ErrorComponent,
                auth_component_1.AuthComponent, auth_forgot_password_component_1.AuthForgotPasswordComponent, auth_register_component_1.AuthRegisterComponent,
                auth_reset_password_component_1.AuthResetPasswordComponent, auth_register_vendor_component_1.AuthRegisterVendorComponent,
                product_component_1.ProductComponent, product_detail_component_1.ProductDetailComponent, product_list_component_1.ProductListComponent, browse_page_component_1.BrowsePageComponent,
                vendor_component_1.VendorComponent, vendor_listing_component_1.VendorListingComponent, vendor_add_product_component_1.VendorAddProductComponent, vendor_edit_product_component_1.VendorEditProductComponent,
                vendor_profile_component_1.VendorProfileComponent, vendor_dashboard_component_1.VendorDashboardComponent,
                admin_component_1.AdminComponent, admin_dashboard_component_1.AdminDashboardComponent, admin_listing_component_1.AdminLisitingComponent,
                admin_product_component_1.AdminProductComponent, admin_vendors_component_1.AdminVendorsComponent, admin_setting_component_1.AdminSettingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, app_routing_1.ROUTING, router_1.RouterModule.forRoot(app_routing_1.APP_ROUTES),
                forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
                shared_module_1.SharedModule.forRoot(),
                home_module_1.HomeModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [error_service_1.ErrorService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxpQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRixxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNEJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELCtCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELCtDQUEwQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ2xGLHdDQUFvQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3JFLDhDQUF5QyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQ2hGLGtDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHlDQUFxQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQzFFLHVDQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3RFLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHlDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLDZDQUF3Qyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ2hGLDhDQUF5Qyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ2xGLHlDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLDJDQUF1QyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzdFLGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDBDQUFzQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzFFLHdDQUFxQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3ZFLHdDQUFvQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3RFLHdDQUFvQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3RFLHNDQUFrQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3BFLHdDQUFvQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3RFLCtDQUEwQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBd0JsRjtJQUFBO0lBRUEsQ0FBQztJQXhCRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCw4QkFBYSxFQUFDLDREQUEyQixFQUFDLCtDQUFxQjtnQkFDL0QsMERBQTBCLEVBQUMsNERBQTJCO2dCQUN0RCxvQ0FBZ0IsRUFBQyxpREFBc0IsRUFBQyw2Q0FBb0IsRUFBQywyQ0FBbUI7Z0JBQ2hGLGtDQUFlLEVBQUMsaURBQXNCLEVBQUMsd0RBQXlCLEVBQUMsMERBQTBCO2dCQUMzRixpREFBc0IsRUFBQyxxREFBd0I7Z0JBQy9DLGdDQUFjLEVBQUMsbURBQXVCLEVBQUMsZ0RBQXNCO2dCQUM3RCwrQ0FBcUIsRUFBQywrQ0FBcUIsRUFBQywrQ0FBcUI7YUFDcEU7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWEsRUFBRSxxQkFBTyxFQUFFLHFCQUFZLENBQUMsT0FBTyxDQUFDLHdCQUFVLENBQUM7Z0JBQ3hELG1CQUFXLEVBQUUsMkJBQW1CLEVBQUUsaUJBQVU7Z0JBQzVDLDRCQUFZLENBQUMsT0FBTyxFQUFFO2dCQUN0Qix3QkFBVTthQUNiO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixTQUFTLEVBQUUsQ0FBQyw0QkFBWTthQUN2QjtTQUNKLENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGlCQUFTLFlBRXJCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1JPVVRJTkcsIEFQUF9ST1VURVN9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbmltcG9ydCB7RXJyb3JDb21wb25lbnR9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZU1vZHVsZX0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7QXV0aENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoRm9yZ290UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aC1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoUmVzZXRQYXNzd29yZENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3REZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3RMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmVuZG9yQ29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3IvdmVuZG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWZW5kb3JMaXN0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3IvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckFkZFByb2R1Y3RDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckVkaXRQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3IvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmVuZG9yUHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yL3ZlbmRvci1wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWZW5kb3JEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYWRtaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluRGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluTGlzaXRpbmdDb21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLWxpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluUHJvZHVjdENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYWRtaW4tcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5WZW5kb3JzQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi12ZW5kb3JzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCcm93c2VQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0L2Jyb3dzZS1wYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblNldHRpbmdDb21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLXNldHRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhSZWdpc3RlclZlbmRvckNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoLXJlZ2lzdGVyLXZlbmRvci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgQXV0aENvbXBvbmVudCxBdXRoRm9yZ290UGFzc3dvcmRDb21wb25lbnQsQXV0aFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBBdXRoUmVzZXRQYXNzd29yZENvbXBvbmVudCxBdXRoUmVnaXN0ZXJWZW5kb3JDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RDb21wb25lbnQsUHJvZHVjdERldGFpbENvbXBvbmVudCxQcm9kdWN0TGlzdENvbXBvbmVudCxCcm93c2VQYWdlQ29tcG9uZW50LFxuICAgICAgICBWZW5kb3JDb21wb25lbnQsVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxWZW5kb3JBZGRQcm9kdWN0Q29tcG9uZW50LFZlbmRvckVkaXRQcm9kdWN0Q29tcG9uZW50LFxuICAgICAgICBWZW5kb3JQcm9maWxlQ29tcG9uZW50LFZlbmRvckRhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgQWRtaW5Db21wb25lbnQsQWRtaW5EYXNoYm9hcmRDb21wb25lbnQsQWRtaW5MaXNpdGluZ0NvbXBvbmVudCxcbiAgICAgICAgQWRtaW5Qcm9kdWN0Q29tcG9uZW50LEFkbWluVmVuZG9yc0NvbXBvbmVudCxBZG1pblNldHRpbmdDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgUk9VVElORywgUm91dGVyTW9kdWxlLmZvclJvb3QoQVBQX1JPVVRFUyksXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBIb21lTW9kdWxlXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0Vycm9yU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
