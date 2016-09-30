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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var navbar_component_1 = require("../shared/navbar/navbar.component");
var auth_service_1 = require("./api-service/auth/auth.service");
var product_service_1 = require("./api-service/product/product.service");
var state_service_1 = require("./ng2-service/ng2-country/state.service");
var country_service_1 = require("./ng2-service/ng2-country/country.service");
var review_service_1 = require("./api-service/review.service");
var image_upload_1 = require("./ng2-service/ng2-imageupload/src/image-upload");
var auth_guard_service_1 = require("./api-service/auth/auth-guard.service");
var vendor_service_1 = require("./api-service/vendor/vendor.service");
var navbar_vendor_component_1 = require("./navbar-vendor/navbar-vendor.component");
var all_vendor_service_1 = require("./api-service/vendor/all-vendor.service");
var account_management_service_1 = require("./api-service/admin/account-management.service");
var searchaccout_pipe_1 = require("./pipes/searchaccout.pipe");
var navbar_admin_component_1 = require("./navbar-admin/navbar-admin.component");
var clicky_component_1 = require("./analytics/clicky.component");
var clicky_service_1 = require("./analytics/clicky.service");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var review_component_1 = require("./review/review.component");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var clicky_admin_component_1 = require("./analytics/clicky-admin.component");
var tranlate_component_1 = require("../translate/tranlate.component");
var translate_pipe_1 = require("../translate/translate.pipe");
var translations_1 = require("../translate/translations");
var translate_service_1 = require("../translate/translate.service");
var core_2 = require("@angular/core");
var navbar_customer_component_1 = require("./navbar-customer/navbar-customer.component");
var confirm_modal_1 = require("./confirm-modal/confirm-modal");
var control_message_component_1 = require("./validation/control-message.component");
var validation_service_1 = require("./validation/validation.service");
// import { CustomFormsModule } from 'ng2-validation'
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                auth_guard_service_1.AuthGuard,
                auth_service_1.AuthService,
                product_service_1.ProductService,
                vendor_service_1.VendorService,
                review_service_1.ReviewService,
                state_service_1.DataStateService,
                country_service_1.DataCountryService,
                all_vendor_service_1.AllVendorService,
                account_management_service_1.AccountManagementService,
                clicky_service_1.ClickyService,
                validation_service_1.ValidationService,
                translations_1.TRANSLATION_PROVIDERS,
                translate_service_1.TranslateService,
                core_2.provide(core_2.PLATFORM_PIPES, { useValue: [translate_pipe_1.TranslatePipe], multi: true })
            ]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.AccordionModule,
                ng2_bootstrap_1.TabsModule
            ],
            declarations: [
                searchaccout_pipe_1.Search,
                review_component_1.ReviewComponent,
                navbar_component_1.NavbarComponent,
                navbar_customer_component_1.NavbarCustomerComponent,
                navbar_vendor_component_1.NavbarVendorComponent,
                navbar_admin_component_1.NavbarAdminComponent,
                clicky_component_1.ClickyComponent,
                clicky_admin_component_1.ClickyAdminComponent,
                image_upload_1.ImageUpload,
                ng2_bootstrap_1.AlertComponent,
                ng2_bootstrap_1.RatingComponent,
                ng2_charts_1.BaseChartComponent,
                tranlate_component_1.TranslateComponent,
                translate_pipe_1.TranslatePipe,
                confirm_modal_1.ConfirmModal,
                control_message_component_1.ControlMessagesComponent
            ],
            exports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule, forms_1.FormsModule,
                navbar_component_1.NavbarComponent,
                navbar_customer_component_1.NavbarCustomerComponent,
                navbar_vendor_component_1.NavbarVendorComponent,
                navbar_admin_component_1.NavbarAdminComponent,
                clicky_component_1.ClickyComponent,
                clicky_admin_component_1.ClickyAdminComponent,
                image_upload_1.ImageUpload,
                searchaccout_pipe_1.Search,
                ng2_bootstrap_1.AlertComponent,
                ng2_bootstrap_1.RatingComponent,
                review_component_1.ReviewComponent,
                ng2_bootstrap_1.AccordionModule,
                ng2_bootstrap_1.TabsModule,
                tranlate_component_1.TranslateComponent,
                translate_pipe_1.TranslatePipe,
                confirm_modal_1.ConfirmModal,
                control_message_component_1.ControlMessagesComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;base64,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d0I7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osMkJBQW1CLEVBQUUsbUJBQVc7Z0JBQ2hDLGtDQUFlO2dCQUNmLG1EQUF1QjtnQkFDdkIsK0NBQXFCO2dCQUNyQiw2Q0FBb0I7Z0JBQ3BCLGtDQUFlO2dCQUNmLDZDQUFvQjtnQkFDcEIsMEJBQVc7Z0JBQ1gsMEJBQU07Z0JBQ04sOEJBQWM7Z0JBQ2QsK0JBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsK0JBQWU7Z0JBQ2YsMEJBQVU7Z0JBQ1YsdUNBQWtCO2dCQUNsQiw4QkFBYTtnQkFDYiw0QkFBWTtnQkFDWixvREFBd0I7YUFDM0I7U0FDSixDQUFDOztvQkFBQTtJQXVCRixtQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksb0JBQVksZUFzQnhCLENBQUEiLCJmaWxlIjoic2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBFbGVtZW50UmVmLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuLi9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU3RhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uZzItc2VydmljZS9uZzItY291bnRyeS9zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFDb3VudHJ5U2VydmljZX0gZnJvbSBcIi4vbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jldmlld1NlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL3Jldmlldy5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkfSBmcm9tIFwiLi9uZzItc2VydmljZS9uZzItaW1hZ2V1cGxvYWQvc3JjL2ltYWdlLXVwbG9hZFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZlbmRvclNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL3ZlbmRvci92ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtOYXZiYXJWZW5kb3JDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci12ZW5kb3IvbmF2YmFyLXZlbmRvci5jb21wb25lbnRcIjtcbmltcG9ydCB7QWxsVmVuZG9yU2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvdmVuZG9yL2FsbC12ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtBY2NvdW50TWFuYWdlbWVudFNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaH0gZnJvbSBcIi4vcGlwZXMvc2VhcmNoYWNjb3V0LnBpcGVcIjtcbmltcG9ydCB7TmF2YmFyQWRtaW5Db21wb25lbnR9IGZyb20gXCIuL25hdmJhci1hZG1pbi9uYXZiYXItYWRtaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0NsaWNreUNvbXBvbmVudH0gZnJvbSBcIi4vYW5hbHl0aWNzL2NsaWNreS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2xpY2t5U2VydmljZX0gZnJvbSBcIi4vYW5hbHl0aWNzL2NsaWNreS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FsZXJ0Q29tcG9uZW50LCBSYXRpbmdDb21wb25lbnQsQWNjb3JkaW9uTW9kdWxlLFRhYnNNb2R1bGV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcbmltcG9ydCB7UmV2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCYXNlQ2hhcnRDb21wb25lbnR9IGZyb20gXCJuZzItY2hhcnRzL25nMi1jaGFydHNcIjtcbmltcG9ydCB7Q2xpY2t5QWRtaW5Db21wb25lbnR9IGZyb20gXCIuL2FuYWx5dGljcy9jbGlja3ktYWRtaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1RyYW5zbGF0ZUNvbXBvbmVudH0gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFubGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHtUUkFOU0xBVElPTl9QUk9WSURFUlN9IGZyb20gXCIuLi90cmFuc2xhdGUvdHJhbnNsYXRpb25zXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gXCIuLi90cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7cHJvdmlkZSwgUExBVEZPUk1fUElQRVN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdmJhckN1c3RvbWVyQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXItY3VzdG9tZXIvbmF2YmFyLWN1c3RvbWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb25maXJtTW9kYWx9IGZyb20gXCIuL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbFwiO1xuaW1wb3J0IHtDb250cm9sTWVzc2FnZXNDb21wb25lbnR9IGZyb20gXCIuL3ZhbGlkYXRpb24vY29udHJvbC1tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7IEN1c3RvbUZvcm1zTW9kdWxlIH0gZnJvbSAnbmcyLXZhbGlkYXRpb24nXG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxuICAgICAgICBUYWJzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoLFxuICAgICAgICBSZXZpZXdDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ3VzdG9tZXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhclZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQWRtaW5Db21wb25lbnQsXG4gICAgICAgIENsaWNreUNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5QWRtaW5Db21wb25lbnQsXG4gICAgICAgIEltYWdlVXBsb2FkLFxuICAgICAgICBBbGVydENvbXBvbmVudCxcbiAgICAgICAgUmF0aW5nQ29tcG9uZW50LFxuICAgICAgICBCYXNlQ2hhcnRDb21wb25lbnQsXG4gICAgICAgIFRyYW5zbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgQ29uZmlybU1vZGFsLFxuICAgICAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckN1c3RvbWVyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJWZW5kb3JDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckFkbWluQ29tcG9uZW50LFxuICAgICAgICBDbGlja3lDb21wb25lbnQsXG4gICAgICAgIENsaWNreUFkbWluQ29tcG9uZW50LFxuICAgICAgICBJbWFnZVVwbG9hZCxcbiAgICAgICAgU2VhcmNoLFxuICAgICAgICBBbGVydENvbXBvbmVudCxcbiAgICAgICAgUmF0aW5nQ29tcG9uZW50LFxuICAgICAgICBSZXZpZXdDb21wb25lbnQsXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgVGFic01vZHVsZSxcbiAgICAgICAgVHJhbnNsYXRlQ29tcG9uZW50LFxuICAgICAgICBUcmFuc2xhdGVQaXBlLFxuICAgICAgICBDb25maXJtTW9kYWwsXG4gICAgICAgIENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIERhdGFTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEFsbFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIENsaWNreVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgVFJBTlNMQVRJT05fUFJPVklERVJTLFxuICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJvdmlkZShQTEFURk9STV9QSVBFUywge3VzZVZhbHVlOiBbVHJhbnNsYXRlUGlwZV0sIG11bHRpOiB0cnVlfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
