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

//# sourceMappingURL=data:application/json;base64,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LE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWiwyQkFBbUIsRUFBRSxtQkFBVztnQkFDaEMsa0NBQWU7Z0JBQ2YsbURBQXVCO2dCQUN2QiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsa0NBQWU7Z0JBQ2YsNkNBQW9CO2dCQUNwQiwwQkFBVztnQkFDWCwwQkFBTTtnQkFDTiw4QkFBYztnQkFDZCwrQkFBZTtnQkFDZixrQ0FBZTtnQkFDZiwrQkFBZTtnQkFDZiwwQkFBVTtnQkFDVix1Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLG9EQUF3QjthQUMzQjtTQUNKLENBQUM7O29CQUFBO0lBdUJGLG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxvQkFBWSxlQXNCeEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEVsZW1lbnRSZWYsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSBcIi4uL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YUNvdW50cnlTZXJ2aWNlfSBmcm9tIFwiLi9uZzItc2VydmljZS9uZzItY291bnRyeS9jb3VudHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7UmV2aWV3U2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvcmV2aWV3LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VVcGxvYWR9IGZyb20gXCIuL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9zcmMvaW1hZ2UtdXBsb2FkXCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvdmVuZG9yL3ZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge05hdmJhclZlbmRvckNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyLXZlbmRvci9uYXZiYXItdmVuZG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbGxWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS92ZW5kb3IvYWxsLXZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjY291bnRNYW5hZ2VtZW50U2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U2VhcmNofSBmcm9tIFwiLi9waXBlcy9zZWFyY2hhY2NvdXQucGlwZVwiO1xuaW1wb3J0IHtOYXZiYXJBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2xpY2t5Q29tcG9uZW50fSBmcm9tIFwiLi9hbmFseXRpY3MvY2xpY2t5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9hbmFseXRpY3MvY2xpY2t5LnNlcnZpY2VcIjtcbmltcG9ydCB7QWxlcnRDb21wb25lbnQsIFJhdGluZ0NvbXBvbmVudCxBY2NvcmRpb25Nb2R1bGUsVGFic01vZHVsZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtSZXZpZXdDb21wb25lbnR9IGZyb20gXCIuL3Jldmlldy9yZXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jhc2VDaGFydENvbXBvbmVudH0gZnJvbSBcIm5nMi1jaGFydHMvbmcyLWNoYXJ0c1wiO1xuaW1wb3J0IHtDbGlja3lBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vYW5hbHl0aWNzL2NsaWNreS1hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcG9uZW50fSBmcm9tIFwiLi4vdHJhbnNsYXRlL3RyYW5sYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwiLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQge1RSQU5TTEFUSU9OX1BST1ZJREVSU30gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFuc2xhdGlvbnNcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtwcm92aWRlLCBQTEFURk9STV9QSVBFU30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF2YmFyQ3VzdG9tZXJDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci1jdXN0b21lci9uYXZiYXItY3VzdG9tZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbmZpcm1Nb2RhbH0gZnJvbSBcIi4vY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsXCI7XG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSBcIi4vdmFsaWRhdGlvbi9jb250cm9sLW1lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgVGFic01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlYXJjaCxcbiAgICAgICAgUmV2aWV3Q29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckN1c3RvbWVyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJWZW5kb3JDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckFkbWluQ29tcG9uZW50LFxuICAgICAgICBDbGlja3lDb21wb25lbnQsXG4gICAgICAgIENsaWNreUFkbWluQ29tcG9uZW50LFxuICAgICAgICBJbWFnZVVwbG9hZCxcbiAgICAgICAgQWxlcnRDb21wb25lbnQsXG4gICAgICAgIFJhdGluZ0NvbXBvbmVudCxcbiAgICAgICAgQmFzZUNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBUcmFuc2xhdGVDb21wb25lbnQsXG4gICAgICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgICAgIENvbmZpcm1Nb2RhbCxcbiAgICAgICAgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDdXN0b21lckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyVmVuZG9yQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5Q29tcG9uZW50LFxuICAgICAgICBDbGlja3lBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VVcGxvYWQsXG4gICAgICAgIFNlYXJjaCxcbiAgICAgICAgQWxlcnRDb21wb25lbnQsXG4gICAgICAgIFJhdGluZ0NvbXBvbmVudCxcbiAgICAgICAgUmV2aWV3Q29tcG9uZW50LFxuICAgICAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFRhYnNNb2R1bGUsXG4gICAgICAgIFRyYW5zbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgQ29uZmlybU1vZGFsLFxuICAgICAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICAgICAgICAgIEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgUmV2aWV3U2VydmljZSxcbiAgICAgICAgICAgICAgICBEYXRhU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIERhdGFDb3VudHJ5U2VydmljZSxcbiAgICAgICAgICAgICAgICBBbGxWZW5kb3JTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEFjY291bnRNYW5hZ2VtZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBDbGlja3lTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFRSQU5TTEFUSU9OX1BST1ZJREVSUyxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByb3ZpZGUoUExBVEZPUk1fUElQRVMsIHt1c2VWYWx1ZTogW1RyYW5zbGF0ZVBpcGVdLCBtdWx0aTogdHJ1ZX0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
