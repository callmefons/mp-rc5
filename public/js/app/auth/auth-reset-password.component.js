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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var account_management_service_1 = require("../shared/api-service/admin/account-management.service");
var validators_1 = require("../shared/helpers/validators");
var AuthResetPasswordComponent = (function () {
    function AuthResetPasswordComponent(_fb, _router, _accountManagetment) {
        this._fb = _fb;
        this._router = _router;
        this._accountManagetment = _accountManagetment;
        this.disabled = true;
    }
    AuthResetPasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.passwordValidator])],
            password_confirmation: ['', forms_1.Validators.required],
        });
    };
    AuthResetPasswordComponent.prototype.ngOnDestroy = function () {
    };
    AuthResetPasswordComponent.prototype.onSubmit = function (value) {
        this._accountManagetment.newPassword(value).
            subscribe(function (res) {
        });
    };
    AuthResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin',
            templateUrl: 'templates/auth-reset-password.component.html',
            styleUrls: ['styles/auth-reset-password.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, account_management_service_1.AccountManagementService])
    ], AuthResetPasswordComponent);
    return AuthResetPasswordComponent;
}());
exports.AuthResetPasswordComponent = AuthResetPasswordComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSwyQ0FBdUMsd0RBQXdELENBQUMsQ0FBQTtBQUNoRywyQkFBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVUvRDtJQU9FLG9DQUFvQixHQUFlLEVBQ2YsT0FBYyxFQUNkLG1CQUE0QztRQUY1QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBeUI7UUFQaEUsYUFBUSxHQUFXLElBQUksQ0FBQztJQVN4QixDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsOEJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzVFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxnREFBVyxHQUFYO0lBRUEsQ0FBQztJQUVELDZDQUFRLEdBQVIsVUFBUyxLQUFZO1FBR25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzNDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUF4Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDeEQsQ0FBQzs7a0NBQUE7SUFxQ0YsaUNBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLGtDQUEwQiw2QkFtQ3RDLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge3Bhc3N3b3JkVmFsaWRhdG9yfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvdmFsaWRhdG9yc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFkbWluJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXV0aC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvYXV0aC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgZGlzYWJsZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgZXJyb3JNZXNzYWdlOnN0cmluZztcbiAgbXlGb3JtOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWNjb3VudE1hbmFnZXRtZW50OkFjY291bnRNYW5hZ2VtZW50U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKXtcblxuICB9XG5cbiAgb25TdWJtaXQodmFsdWU6T2JqZWN0KSB7XG5cblxuICAgIHRoaXMuX2FjY291bnRNYW5hZ2V0bWVudC5uZXdQYXNzd29yZCh2YWx1ZSkuXG4gICAgc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
