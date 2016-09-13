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
                clicky_service_1.ClickyService
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
            ],
            declarations: [
                searchaccout_pipe_1.Search,
                review_component_1.ReviewComponent,
                navbar_component_1.NavbarComponent,
                navbar_vendor_component_1.NavbarVendorComponent,
                navbar_admin_component_1.NavbarAdminComponent,
                clicky_component_1.ClickyComponent,
                clicky_admin_component_1.ClickyAdminComponent,
                image_upload_1.ImageUpload,
                ng2_bootstrap_1.AlertComponent,
                ng2_bootstrap_1.RatingComponent,
                ng2_charts_1.BaseChartComponent
            ],
            exports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule, forms_1.FormsModule,
                navbar_component_1.NavbarComponent,
                navbar_vendor_component_1.NavbarVendorComponent,
                navbar_admin_component_1.NavbarAdminComponent,
                clicky_component_1.ClickyComponent,
                clicky_admin_component_1.ClickyAdminComponent,
                image_upload_1.ImageUpload,
                searchaccout_pipe_1.Search,
                ng2_bootstrap_1.AlertComponent,
                ng2_bootstrap_1.RatingComponent,
                review_component_1.ReviewComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0YsZUFBZSxDQUFDLENBQUE7QUFDaEcsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsaUNBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFDbEUsNkJBQTBCLGlDQUFpQyxDQUFDLENBQUE7QUFDNUQsZ0NBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsOEJBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFDekUsZ0NBQWlDLDJDQUEyQyxDQUFDLENBQUE7QUFDN0UsK0JBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0QsNkJBQTBCLGdEQUFnRCxDQUFDLENBQUE7QUFDM0UsbUNBQXdCLHVDQUF1QyxDQUFDLENBQUE7QUFDaEUsK0JBQTRCLHFDQUFxQyxDQUFDLENBQUE7QUFDbEUsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsbUNBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFDekUsMkNBQXVDLGdEQUFnRCxDQUFDLENBQUE7QUFDeEYsa0NBQXFCLDJCQUEyQixDQUFDLENBQUE7QUFDakQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UsaUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsK0JBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsOEJBQTJELDZCQUE2QixDQUFDLENBQUE7QUFDekYsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsMkJBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFDekQsdUNBQW1DLG9DQUFvQyxDQUFDLENBQUE7QUFFeEU7O0dBRUc7QUFzQ0g7SUFBQTtJQWtCQSxDQUFDO0lBakJVLG9CQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1AsOEJBQVM7Z0JBQ1QsMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsZ0NBQWdCO2dCQUNoQixvQ0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIscURBQXdCO2dCQUN4Qiw4QkFBYTthQUNoQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBckRMO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsbUJBQVc7YUFDZDtZQUNELFlBQVksRUFBRTtnQkFDViwwQkFBTTtnQkFDTixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsa0NBQWU7Z0JBQ2YsNkNBQW9CO2dCQUNwQiwwQkFBVztnQkFDWCw4QkFBYztnQkFDZCwrQkFBZTtnQkFDZiwrQkFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osMkJBQW1CLEVBQUUsbUJBQVc7Z0JBQ2hDLGtDQUFlO2dCQUNmLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQixrQ0FBZTtnQkFDZiw2Q0FBb0I7Z0JBQ3BCLDBCQUFXO2dCQUNYLDBCQUFNO2dCQUNOLDhCQUFjO2dCQUNkLCtCQUFlO2dCQUNmLGtDQUFlO2FBQ2xCO1NBQ0osQ0FBQzs7b0JBQUE7SUFtQkYsbUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLG9CQUFZLGVBa0J4QixDQUFBIiwiZmlsZSI6InNoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgRWxlbWVudFJlZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tIFwiLi4vc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4vYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVN0YXRlU2VydmljZX0gZnJvbSBcIi4vbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnkuc2VydmljZVwiO1xuaW1wb3J0IHtSZXZpZXdTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS9yZXZpZXcuc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVVwbG9hZH0gZnJvbSBcIi4vbmcyLXNlcnZpY2UvbmcyLWltYWdldXBsb2FkL3NyYy9pbWFnZS11cGxvYWRcIjtcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi9hcGktc2VydmljZS9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7TmF2YmFyVmVuZG9yQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXItdmVuZG9yL25hdmJhci12ZW5kb3IuY29tcG9uZW50XCI7XG5pbXBvcnQge0FsbFZlbmRvclNlcnZpY2V9IGZyb20gXCIuL2FwaS1zZXJ2aWNlL3ZlbmRvci9hbGwtdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9hcGktc2VydmljZS9hZG1pbi9hY2NvdW50LW1hbmFnZW1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtTZWFyY2h9IGZyb20gXCIuL3BpcGVzL3NlYXJjaGFjY291dC5waXBlXCI7XG5pbXBvcnQge05hdmJhckFkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXItYWRtaW4vbmF2YmFyLWFkbWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDbGlja3lDb21wb25lbnR9IGZyb20gXCIuL2FuYWx5dGljcy9jbGlja3kuY29tcG9uZW50XCI7XG5pbXBvcnQge0NsaWNreVNlcnZpY2V9IGZyb20gXCIuL2FuYWx5dGljcy9jbGlja3kuc2VydmljZVwiO1xuaW1wb3J0IHtBbGVydENvbXBvbmVudCwgQWxlcnRNb2R1bGUsIFJhdGluZ0NvbXBvbmVudH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtSZXZpZXdDb21wb25lbnR9IGZyb20gXCIuL3Jldmlldy9yZXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jhc2VDaGFydENvbXBvbmVudH0gZnJvbSBcIm5nMi1jaGFydHMvbmcyLWNoYXJ0c1wiO1xuaW1wb3J0IHtDbGlja3lBZG1pbkNvbXBvbmVudH0gZnJvbSBcIi4vYW5hbHl0aWNzL2NsaWNreS1hZG1pbi5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlYXJjaCxcbiAgICAgICAgUmV2aWV3Q29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhclZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQWRtaW5Db21wb25lbnQsXG4gICAgICAgIENsaWNreUNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5QWRtaW5Db21wb25lbnQsXG4gICAgICAgIEltYWdlVXBsb2FkLFxuICAgICAgICBBbGVydENvbXBvbmVudCxcbiAgICAgICAgUmF0aW5nQ29tcG9uZW50LFxuICAgICAgICBCYXNlQ2hhcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhclZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQWRtaW5Db21wb25lbnQsXG4gICAgICAgIENsaWNreUNvbXBvbmVudCxcbiAgICAgICAgQ2xpY2t5QWRtaW5Db21wb25lbnQsXG4gICAgICAgIEltYWdlVXBsb2FkLFxuICAgICAgICBTZWFyY2gsXG4gICAgICAgIEFsZXJ0Q29tcG9uZW50LFxuICAgICAgICBSYXRpbmdDb21wb25lbnQsXG4gICAgICAgIFJldmlld0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIERhdGFTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEFsbFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIENsaWNreVNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
