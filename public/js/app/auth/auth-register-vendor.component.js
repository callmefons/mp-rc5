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
var validators_1 = require("../shared/helpers/validators");
var country_service_1 = require("../shared/ng2-service/ng2-country/country.service");
var state_service_1 = require("../shared/ng2-service/ng2-country/state.service");
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
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.passwordValidator])],
            password_confirmation: ['', forms_1.Validators.required],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFFcEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFHbEUsMkJBQWdELDhCQUE4QixDQUFDLENBQUE7QUFFL0UsZ0NBQWlDLG1EQUFtRCxDQUFDLENBQUE7QUFDckYsOEJBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFVakY7SUFtQkkscUNBQW9CLEdBQWUsRUFDZixlQUFrQyxFQUNsQyxhQUE4QixFQUM5QixZQUF3QixFQUN4QixPQUFjO1FBSmQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQWxCbEMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUt4QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUs5QixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBVyxLQUFLLENBQUM7SUFRMUIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsMkJBQWMsQ0FBQyxDQUFD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SUFBSSxDQUFDO0lBQ3RDLENBQUM7SUEzRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwrQ0FBK0M7WUFDNUQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDcEQsQ0FBQzs7bUNBQUE7SUF3RkYsa0NBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBO0FBdEZZLG1DQUEyQiw4QkFzRnZDLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoLXJlZ2lzdGVyLXZlbmRvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q291bnRyeX0gZnJvbSBcIi4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9jb3VudHJ5XCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlXCI7XG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBwYXNzd29yZFZhbGlkYXRvcn0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnNcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hZG1pbicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXV0aC1yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aFJlZ2lzdGVyVmVuZG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgICBhdXRoJDpPYnNlcnZhYmxlPGFueT47XG5cbiAgICBkaXNhYmxlZDpib29sZWFuID0gdHJ1ZTtcblxuICAgIGVycm9yTWVzc2FnZTpzdHJpbmc7XG4gICAgbXlGb3JtOkZvcm1Hcm91cDtcbiAgICB1c2VyOlVzZXI7XG4gICAgZkNhcHRjaGFQYXNzZWQ6Ym9vbGVhbiA9IG51bGw7XG4gICAgY291bnRyaWVzOkNvdW50cnlbXTtcbiAgICBzdGF0ZXM6U3RhdGVbXTtcbiAgICBjaXR5czpTdGF0ZVtdO1xuXG4gICAgY291bnRyeVNlbGVjdGVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5dHlwZTpib29sZWFuID0gZmFsc2U7XG4gICAgc3RhdGV0eXBlOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvdW50cnlTZXJ2aWNlOkRhdGFDb3VudHJ5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdGF0ZVNlcnZpY2U6RGF0YVN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb3VudHJ5KCk7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgcGVyc29uYWxfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgZW1haWxWYWxpZGF0b3JdKV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHBhc3N3b3JkVmFsaWRhdG9yXSldLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgY29tcGFueV9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgY291bnRyeTogW3RoaXMuY291bnRyaWVzWzBdLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgc3RhdGU6IFsnJ10sXG4gICAgICAgICAgICBjaXR5OiBbJyddLFxuICAgICAgICAgICAgcm9sZTogWyd2ZW5kb3InXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldENvdW50cnkoKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQodmFsdWU6T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgkID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoJC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENvdW50cnkoY291bnRyeV9uYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1VuaXRlZCBTdGF0ZXMnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnb1RvTG9naW4oKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZUNvcnJlY3RDYXB0Y2hhKGV2ZW50OmFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mQ2FwdGNoYVBhc3NlZCA9IHRydWU7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
