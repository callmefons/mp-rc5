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
                confirm_modal_1.ConfirmModal
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
                confirm_modal_1.ConfirmModal
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;base64,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Q3ZCLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQixrQ0FBZTtnQkFDZiw2Q0FBb0I7Z0JBQ3BCLDBCQUFXO2dCQUNYLDBCQUFNO2dCQUNOLDhCQUFjO2dCQUNkLCtCQUFlO2dCQUNmLGtDQUFlO2dCQUNmLCtCQUFlO2dCQUNmLDBCQUFVO2dCQUNWLHVDQUFrQjtnQkFDbEIsOEJBQWE7Z0JBQ2IsNEJBQVk7YUFDZjtTQUNKLENBQUM7O29CQUFBO0lBc0JGLG1CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxvQkFBWSxlQXFCeEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEVsZW1lbnRSZWYsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSBcIi4uL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YUNvdW50cnlTZXJ2aWNlfSBmcm9tIFwiLi9uZzItc2VydmljZS9uZzItY291bnRyeS9jb3VudHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7UmV2aWV3U2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvcmV2aWV3LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VVcGxvYWR9IGZyb20gXCIuL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9zcmMvaW1hZ2UtdXBsb2FkXCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvdmVuZG9yL3ZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge05hdmJhclZlbmRvckNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyLXZlbmRvci9uYXZiYXItdmVuZG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbGxWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS92ZW5kb3IvYWxsLXZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjY291bnRNYW5hZ2VtZW50U2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U2VhcmNofSBmcm9tIFwiLi9waXBlcy9zZWFyY2hhY2NvdXQucGlwZVwiO1xuaW1wb3J0IHtOYXZiYXJBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2xpY2t5Q29tcG9uZW50fSBmcm9tIFwiLi9hbmFseXRpY3MvY2xpY2t5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9hbmFseXRpY3MvY2xpY2t5LnNlcnZpY2VcIjtcbmltcG9ydCB7QWxlcnRDb21wb25lbnQsIFJhdGluZ0NvbXBvbmVudCxBY2NvcmRpb25Nb2R1bGUsVGFic01vZHVsZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtSZXZpZXdDb21wb25lbnR9IGZyb20gXCIuL3Jldmlldy9yZXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jhc2VDaGFydENvbXBvbmVudH0gZnJvbSBcIm5nMi1jaGFydHMvbmcyLWNoYXJ0c1wiO1xuaW1wb3J0IHtDbGlja3lBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vYW5hbHl0aWNzL2NsaWNreS1hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcG9uZW50fSBmcm9tIFwiLi4vdHJhbnNsYXRlL3RyYW5sYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwiLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQge1RSQU5TTEFUSU9OX1BST1ZJREVSU30gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFuc2xhdGlvbnNcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtwcm92aWRlLCBQTEFURk9STV9QSVBFU30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF2YmFyQ3VzdG9tZXJDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci1jdXN0b21lci9uYXZiYXItY3VzdG9tZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbmZpcm1Nb2RhbH0gZnJvbSBcIi4vY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsXCI7XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxuICAgICAgICBUYWJzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoLFxuICAgICAgICBSZXZpZXdDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ3VzdG9tZXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhclZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQWRtaW5Db21wb25lbnQsXG4gICAgICAgIENsaWNreUNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5QWRtaW5Db21wb25lbnQsXG4gICAgICAgIEltYWdlVXBsb2FkLFxuICAgICAgICBBbGVydENvbXBvbmVudCxcbiAgICAgICAgUmF0aW5nQ29tcG9uZW50LFxuICAgICAgICBCYXNlQ2hhcnRDb21wb25lbnQsXG4gICAgICAgIFRyYW5zbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgQ29uZmlybU1vZGFsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDdXN0b21lckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyVmVuZG9yQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5Q29tcG9uZW50LFxuICAgICAgICBDbGlja3lBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VVcGxvYWQsXG4gICAgICAgIFNlYXJjaCxcbiAgICAgICAgQWxlcnRDb21wb25lbnQsXG4gICAgICAgIFJhdGluZ0NvbXBvbmVudCxcbiAgICAgICAgUmV2aWV3Q29tcG9uZW50LFxuICAgICAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFRhYnNNb2R1bGUsXG4gICAgICAgIFRyYW5zbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgQ29uZmlybU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBWZW5kb3JTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFJldmlld1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgRGF0YVN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBEYXRhQ291bnRyeVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQWxsVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBBY2NvdW50TWFuYWdlbWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQ2xpY2t5U2VydmljZSxcbiAgICAgICAgICAgICAgICBUUkFOU0xBVElPTl9QUk9WSURFUlMsXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcm92aWRlKFBMQVRGT1JNX1BJUEVTLCB7dXNlVmFsdWU6IFtUcmFuc2xhdGVQaXBlXSwgbXVsdGk6IHRydWV9KVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
