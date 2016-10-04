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
var product_search_component_1 = require('./product/product-search.component');
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
var customer_component_1 = require("./customer/customer.component");
var customer_dashboard_component_1 = require("./customer/customer-dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                error_component_1.ErrorComponent,
                auth_component_1.AuthComponent,
                auth_forgot_password_component_1.AuthForgotPasswordComponent,
                auth_register_component_1.AuthRegisterComponent,
                auth_reset_password_component_1.AuthResetPasswordComponent,
                auth_register_vendor_component_1.AuthRegisterVendorComponent,
                product_component_1.ProductComponent,
                product_detail_component_1.ProductDetailComponent,
                product_list_component_1.ProductListComponent,
                product_search_component_1.ProductSearchComponent,
                browse_page_component_1.BrowsePageComponent,
                customer_component_1.CustomerComponent,
                customer_dashboard_component_1.CustomerDashboardComponent,
                vendor_component_1.VendorComponent,
                vendor_listing_component_1.VendorListingComponent,
                vendor_add_product_component_1.VendorAddProductComponent,
                vendor_edit_product_component_1.VendorEditProductComponent,
                vendor_profile_component_1.VendorProfileComponent,
                vendor_dashboard_component_1.VendorDashboardComponent,
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_listing_component_1.AdminLisitingComponent,
                admin_product_component_1.AdminProductComponent,
                admin_vendors_component_1.AdminVendorsComponent,
                admin_setting_component_1.AdminSettingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, app_routing_1.ROUTING, router_1.RouterModule.forRoot(app_routing_1.APP_ROUTES),
                forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
                shared_module_1.SharedModule.forRoot(),
                home_module_1.HomeModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                error_service_1.ErrorService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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QUE7QUFGWSxpQkFBUyxZQUVyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtST1VUSU5HLCBBUFBfUk9VVEVTfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVNb2R1bGV9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aC1yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFJlc2V0UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aC1yZXNldC1wYXNzd29yZC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvZHVjdENvbXBvbmVudH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3RTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtWZW5kb3JDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci92ZW5kb3IuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckxpc3RpbmdDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci92ZW5kb3ItbGlzdGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7VmVuZG9yQWRkUHJvZHVjdENvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmVuZG9yRWRpdFByb2R1Y3RDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWZW5kb3JQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3IvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckRhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5EYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5MaXNpdGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYWRtaW4tbGlzdGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5Qcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi1wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblZlbmRvcnNDb21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLXZlbmRvcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jyb3dzZVBhZ2VDb21wb25lbnR9IGZyb20gXCIuL3Byb2R1Y3QvYnJvd3NlLXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluU2V0dGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYWRtaW4tc2V0dGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFJlZ2lzdGVyVmVuZG9yQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGgtcmVnaXN0ZXItdmVuZG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDdXN0b21lck1vZHVsZX0gZnJvbSBcIi4vY3VzdG9tZXIvY3VzdG9tZXIubW9kdWxlXCI7XG5pbXBvcnQge0N1c3RvbWVyQ29tcG9uZW50fSBmcm9tIFwiLi9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q3VzdG9tZXJEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2N1c3RvbWVyL2N1c3RvbWVyLWRhc2hib2FyZC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgQXV0aENvbXBvbmVudCxcbiAgICAgICAgQXV0aEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICBBdXRoUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIEF1dGhSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICBBdXRoUmVnaXN0ZXJWZW5kb3JDb21wb25lbnQsXG5cbiAgICAgICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIEJyb3dzZVBhZ2VDb21wb25lbnQsXG5cbiAgICAgICAgQ3VzdG9tZXJDb21wb25lbnQsXG4gICAgICAgIEN1c3RvbWVyRGFzaGJvYXJkQ29tcG9uZW50LFxuXG4gICAgICAgIFZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yQWRkUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yRWRpdFByb2R1Y3RDb21wb25lbnQsXG4gICAgICAgIFZlbmRvclByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIFZlbmRvckRhc2hib2FyZENvbXBvbmVudCxcblxuICAgICAgICBBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgQWRtaW5EYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEFkbWluTGlzaXRpbmdDb21wb25lbnQsXG4gICAgICAgIEFkbWluUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgQWRtaW5WZW5kb3JzQ29tcG9uZW50LFxuICAgICAgICBBZG1pblNldHRpbmdDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgUk9VVElORywgUm91dGVyTW9kdWxlLmZvclJvb3QoQVBQX1JPVVRFUyksXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBIb21lTW9kdWxlXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFcnJvclNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
