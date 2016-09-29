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
var auth_routing_1 = require('./auth.routing');
var forms_1 = require('@angular/forms');
var auth_component_1 = require("./auth.component");
var auth_register_component_1 = require("./auth-register.component");
var country_service_1 = require("../shared/ng2-service/ng2-country/country.service");
var state_service_1 = require("../shared/ng2-service/ng2-country/state.service");
var auth_forgot_password_component_1 = require("./auth-forgot-password.component");
var account_management_service_1 = require("../shared/api-service/admin/account-management.service");
var auth_reset_password_component_1 = require("./auth-reset-password.component");
var shared_module_1 = require("../shared/shared.module");
var auth_service_1 = require("../shared/api-service/auth/auth.service");
var auth_guard_service_1 = require("../shared/api-service/auth/auth-guard.service");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, common_1.CommonModule, auth_routing_1.AUTH_ROUTES, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                auth_component_1.AuthComponent,
                auth_register_component_1.AuthRegisterComponent,
                auth_forgot_password_component_1.AuthForgotPasswordComponent,
                auth_reset_password_component_1.AuthResetPasswordComponent
            ],
            exports: [
                auth_component_1.AuthComponent,
                auth_register_component_1.AuthRegisterComponent,
                auth_forgot_password_component_1.AuthForgotPasswordComponent,
                auth_reset_password_component_1.AuthResetPasswordComponent
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_service_1.AuthGuard,
                country_service_1.DataCountryService,
                state_service_1.DataStateService,
                account_management_service_1.AccountManagementService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3Qyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxzQkFBK0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRSwrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyx3Q0FBb0MsMkJBQTJCLENBQUMsQ0FBQTtBQUNoRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQUNqRiwrQ0FBMEMsa0NBQWtDLENBQUMsQ0FBQTtBQUM3RSwyQ0FBdUMsd0RBQXdELENBQUMsQ0FBQTtBQUNoRyw4Q0FBeUMsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRSw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIseUNBQXlDLENBQUMsQ0FBQTtBQUNwRSxtQ0FBd0IsK0NBQStDLENBQUMsQ0FBQTtBQXlCeEU7SUFBQTtJQUVBLENBQUM7SUF6QkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHFCQUFZLEVBQUUsMEJBQVcsRUFBRSxtQkFBVyxFQUFDLDJCQUFtQixDQUFDO1lBQ25GLFlBQVksRUFBRTtnQkFDWiw4QkFBYTtnQkFDYiwrQ0FBcUI7Z0JBQ3JCLDREQUEyQjtnQkFDM0IsMERBQTBCO2FBQzNCO1lBRUQsT0FBTyxFQUFFO2dCQUNQLDhCQUFhO2dCQUNiLCtDQUFxQjtnQkFDckIsNERBQTJCO2dCQUMzQiwwREFBMEI7YUFDN0I7WUFDQyxTQUFTLEVBQUU7Z0JBQ1QsMEJBQVc7Z0JBQ1gsOEJBQVM7Z0JBQ1Qsb0NBQWtCO2dCQUNsQixnQ0FBZ0I7Z0JBQ2hCLHFEQUF3QjthQUN6QjtTQUNGLENBQUM7O2tCQUFBO0lBR0YsaUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGtCQUFVLGFBRXRCLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7QVVUSF9ST1VURVN9IGZyb20gJy4vYXV0aC5yb3V0aW5nJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QXV0aENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoRm9yZ290UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBY2NvdW50TWFuYWdlbWVudFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFJlc2V0UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBDb21tb25Nb2R1bGUsIEFVVEhfUk9VVEVTICxGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXV0aENvbXBvbmVudCxcbiAgICBBdXRoUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgQXV0aEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIEF1dGhSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgQXV0aFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIEF1dGhGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcbiAgICBBdXRoUmVzZXRQYXNzd29yZENvbXBvbmVudFxuXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgQXV0aEd1YXJkLFxuICAgIERhdGFDb3VudHJ5U2VydmljZSxcbiAgICBEYXRhU3RhdGVTZXJ2aWNlLFxuICAgIEFjY291bnRNYW5hZ2VtZW50U2VydmljZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
