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
var validators_1 = require("../shared/helpers/validators");
var account_management_service_1 = require("../shared/api-service/admin/account-management.service");
var AuthForgotPasswordComponent = (function () {
    function AuthForgotPasswordComponent(_fb, _router, _accountManagetment) {
        this._fb = _fb;
        this._router = _router;
        this._accountManagetment = _accountManagetment;
        this.disabled = true;
        this.success = false;
    }
    AuthForgotPasswordComponent.prototype.confirmModal = function () {
    };
    AuthForgotPasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.emailValidator])]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsMkJBQWdELDhCQUE4QixDQUFDLENBQUE7QUFDL0UsMkNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFVaEc7SUFPSSxxQ0FBb0IsR0FBZ0IsRUFDaEIsT0FBZSxFQUNmLG1CQUE2QztRQUY3QyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTBCO1FBUGpFLGFBQVEsR0FBWSxJQUFJLENBQUM7UUEyQnpCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFsQnpCLENBQUM7SUFFRCxrREFBWSxHQUFaO0lBRUEsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLDJCQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3pFLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxpREFBVyxHQUFYO0lBRUEsQ0FBQztJQUlELDhDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQXRCLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQS9DTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUMzRCxDQUFDOzttQ0FBQTtJQTRDRixrQ0FBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksbUNBQTJCLDhCQTBDdkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIHBhc3N3b3JkVmFsaWRhdG9yfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvdmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtBY2NvdW50TWFuYWdlbWVudFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtYWRtaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2F1dGgtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBkaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY2NvdW50TWFuYWdldG1lbnQ6IEFjY291bnRNYW5hZ2VtZW50U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsKCl7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgZW1haWxWYWxpZGF0b3JdKV1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KHZhbHVlOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FjY291bnRNYW5hZ2V0bWVudC5mb3Jnb3RQYXNzd29yZCh2YWx1ZSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Mb2dpbigpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
