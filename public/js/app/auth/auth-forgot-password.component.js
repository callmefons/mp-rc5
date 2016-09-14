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
var AuthForgotPasswordComponent = (function () {
    function AuthForgotPasswordComponent(_fb, _router, _accountManagetment) {
        this._fb = _fb;
        this._router = _router;
        this._accountManagetment = _accountManagetment;
        this.disabled = true;
        this.success = false;
    }
    AuthForgotPasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['']
        });
    };
    AuthForgotPasswordComponent.prototype.ngOnDestroy = function () {
    };
    AuthForgotPasswordComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.success = false;
        this._accountManagetment.forgotPassword(value).subscribe(function (res) {
            _this.success = true;
        });
    };
    AuthForgotPasswordComponent.prototype.goToLogin = function () {
        this._router.navigate(['']);
    };
    AuthForgotPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin',
            templateUrl: 'templates/auth-forgot-password.component.html',
            styleUrls: ['styles/auth-forgot-password.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, account_management_service_1.AccountManagementService])
    ], AuthForgotPasswordComponent);
    return AuthForgotPasswordComponent;
}());
exports.AuthForgotPasswordComponent = AuthForgotPasswordComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsc0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFDdEQsMkNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFVaEc7SUFPSSxxQ0FBb0IsR0FBZ0IsRUFDaEIsT0FBZSxFQUNmLG1CQUE2QztRQUY3QyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTBCO1FBUGpFLGFBQVEsR0FBWSxJQUFJLENBQUM7UUF1QnpCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFkekIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxpREFBVyxHQUFYO0lBRUEsQ0FBQztJQUlELDhDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQXRCLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQTNDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUMzRCxDQUFDOzttQ0FBQTtJQXdDRixrQ0FBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksbUNBQTJCLDhCQXNDdkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWFkbWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoLWZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hdXRoLWZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWNjb3VudE1hbmFnZXRtZW50OiBBY2NvdW50TWFuYWdlbWVudFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KHZhbHVlOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FjY291bnRNYW5hZ2V0bWVudC5mb3Jnb3RQYXNzd29yZCh2YWx1ZSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Mb2dpbigpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
