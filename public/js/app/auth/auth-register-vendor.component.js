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
var auth_service_1 = require("../shared/api-service/auth/auth.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var country_service_1 = require("../shared/ng2-service/ng2-country/country.service");
var state_service_1 = require("../shared/ng2-service/ng2-country/state.service");
var validation_service_1 = require("../shared/validation/validation.service");
var AuthRegisterVendorComponent = (function () {
    function AuthRegisterVendorComponent(_fb, _countryService, _stateService, _authService, _router) {
        this._fb = _fb;
        this._countryService = _countryService;
        this._stateService = _stateService;
        this._authService = _authService;
        this._router = _router;
        this.disabled = true;
        this.fCaptchaPassed = null;
        this.countrySelected = false;
        this.citytype = false;
        this.statetype = false;
    }
    AuthRegisterVendorComponent.prototype.ngOnInit = function () {
        this.getCountry();
        this.myForm = this._fb.group({
            personal_name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            password_confirmation: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            company_name: ['', forms_1.Validators.required],
            country: [this.countries[0].name, forms_1.Validators.required],
            state: [''],
            city: [''],
            role: ['vendor']
        });
    };
    AuthRegisterVendorComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    AuthRegisterVendorComponent.prototype.getCountry = function () {
        this.countries = this._countryService.getCountries();
    };
    AuthRegisterVendorComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.auth$ = this._authService.signup(value);
        this.sub = this.auth$.subscribe(function (res) {
        }, function (error) { return _this.errorMessage = error; });
    };
    AuthRegisterVendorComponent.prototype.onSelectCountry = function (country_name) {
        this.countrySelected = true;
        if (country_name == 'Thailand') {
            this.citys = this._stateService.getStates().filter(function (item) { return item.country_name == country_name; });
            this.citytype = true;
            this.statetype = false;
        }
        if (country_name == 'United States') {
            this.states = this._stateService.getStates().filter(function (item) { return item.country_name == country_name; });
            this.statetype = true;
            this.citytype = false;
        }
        if (country_name !== 'United States' && country_name !== 'Thailand') {
            this.statetype = false;
            this.citytype = false;
        }
    };
    AuthRegisterVendorComponent.prototype.goToLogin = function () {
        this._router.navigate(['']);
    };
    AuthRegisterVendorComponent.prototype.handleCorrectCaptcha = function (event) {
        return this.fCaptchaPassed = true;
    };
    AuthRegisterVendorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin',
            templateUrl: 'templates/auth-register-vendor.component.html',
            styleUrls: ['styles/auth-register.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, country_service_1.DataCountryService, state_service_1.DataStateService, auth_service_1.AuthService, router_1.Router])
    ], AuthRegisterVendorComponent);
    return AuthRegisterVendorComponent;
}());
exports.AuthRegisterVendorComponent = AuthRegisterVendorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFFcEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFLbEUsZ0NBQWlDLG1EQUFtRCxDQUFDLENBQUE7QUFDckYsOEJBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFDakYsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFVMUU7SUFtQkkscUNBQW9CLEdBQWUsRUFDZixlQUFrQyxFQUNsQyxhQUE4QixFQUM5QixZQUF3QixFQUN4QixPQUFjO1FBSmQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQWxCbEMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUt4QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUs5QixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBVyxLQUFLLENBQUM7SUFRMUIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsc0NBQWlCLENBQUMsY0FB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QyxDQUFDO0lBQ2hDLENBQUM7SUFHRCwwREFBb0IsR0FBcEIsVUFBcUIsS0FBUztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQTNGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDOzttQ0FBQTtJQXdGRixrQ0FBQztBQUFELENBdEZBLEFBc0ZDLElBQUE7QUF0RlksbUNBQTJCLDhCQXNGdkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGgtcmVnaXN0ZXItdmVuZG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVycy9zdG9yYWdlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDb3VudHJ5fSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnlcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGVcIjtcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIHBhc3N3b3JkVmFsaWRhdG9yfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvdmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0RhdGFDb3VudHJ5U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9jb3VudHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVN0YXRlU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWFkbWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoLXJlZ2lzdGVyLXZlbmRvci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoUmVnaXN0ZXJWZW5kb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBzdWI6U3Vic2NyaXB0aW9uO1xuICAgIGF1dGgkOk9ic2VydmFibGU8YW55PjtcblxuICAgIGRpc2FibGVkOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZXJyb3JNZXNzYWdlOnN0cmluZztcbiAgICBteUZvcm06Rm9ybUdyb3VwO1xuICAgIHVzZXI6VXNlcjtcbiAgICBmQ2FwdGNoYVBhc3NlZDpib29sZWFuID0gbnVsbDtcbiAgICBjb3VudHJpZXM6Q291bnRyeVtdO1xuICAgIHN0YXRlczpTdGF0ZVtdO1xuICAgIGNpdHlzOlN0YXRlW107XG5cbiAgICBjb3VudHJ5U2VsZWN0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGNpdHl0eXBlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0ZXR5cGU6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY291bnRyeVNlcnZpY2U6RGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTpEYXRhU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldENvdW50cnkoKTtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBwZXJzb25hbF9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdKV0sXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLnBhc3N3b3JkVmFsaWRhdG9yXSldLFxuICAgICAgICAgICAgY29tcGFueV9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgY291bnRyeTogW3RoaXMuY291bnRyaWVzWzBdLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgc3RhdGU6IFsnJ10sXG4gICAgICAgICAgICBjaXR5OiBbJyddLFxuICAgICAgICAgICAgcm9sZTogWyd2ZW5kb3InXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldENvdW50cnkoKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQodmFsdWU6T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgkID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoJC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENvdW50cnkoY291bnRyeV9uYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1VuaXRlZCBTdGF0ZXMnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnb1RvTG9naW4oKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZUNvcnJlY3RDYXB0Y2hhKGV2ZW50OmFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mQ2FwdGNoYVBhc3NlZCA9IHRydWU7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
