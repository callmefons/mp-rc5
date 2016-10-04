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
        //Modal
        this.regisStatus = false;
        this.showModal = false;
        this.modalTitle = '';
        this.modalBody = '';
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
            //console.log(res);
            _this.modalTitle = res.status;
            $("#modalSignup").modal();
            if (res.status == 'success') {
                _this.regisStatus = true;
                _this.modalBody = 'Please check your email for a link to complete your registration, and join our marketplace';
            }
            else {
                _this.modalBody = res.errormessage;
            }
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
        this.regisStatus == true ? this._router.navigate(['']) : this._router.navigate(['/auth/register-vendor']);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFDcEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFJbEUsZ0NBQWlDLG1EQUFtRCxDQUFDLENBQUE7QUFDckYsOEJBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFDakYsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFXMUU7SUF5QkkscUNBQW9CLEdBQWUsRUFDZixlQUFrQyxFQUNsQyxhQUE4QixFQUM5QixZQUF3QixFQUN4QixPQUFjO1FBSmQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQXhCbEMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUt4QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUs5QixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFFMUIsT0FBTztRQUNQLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBUXZCLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFF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b250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDb3VudHJ5fSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnlcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5kZWNsYXJlICB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtYWRtaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2F1dGgtcmVnaXN0ZXItdmVuZG9yLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhSZWdpc3RlclZlbmRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHN1YjpTdWJzY3JpcHRpb247XG4gICAgYXV0aCQ6T2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgZGlzYWJsZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBlcnJvck1lc3NhZ2U6c3RyaW5nO1xuICAgIG15Rm9ybTpGb3JtR3JvdXA7XG4gICAgdXNlcjpVc2VyO1xuICAgIGZDYXB0Y2hhUGFzc2VkOmJvb2xlYW4gPSBudWxsO1xuICAgIGNvdW50cmllczpDb3VudHJ5W107XG4gICAgc3RhdGVzOlN0YXRlW107XG4gICAgY2l0eXM6U3RhdGVbXTtcblxuICAgIGNvdW50cnlTZWxlY3RlZDpib29sZWFuID0gZmFsc2U7XG4gICAgY2l0eXR5cGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRldHlwZTpib29sZWFuID0gZmFsc2U7XG5cbiAgICAvL01vZGFsXG4gICAgcmVnaXNTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93TW9kYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBtb2RhbEJvZHk6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY291bnRyeVNlcnZpY2U6RGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTpEYXRhU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldENvdW50cnkoKTtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBwZXJzb25hbF9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdKV0sXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLnBhc3N3b3JkVmFsaWRhdG9yXSldLFxuICAgICAgICAgICAgY29tcGFueV9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgY291bnRyeTogW3RoaXMuY291bnRyaWVzWzBdLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgc3RhdGU6IFsnJ10sXG4gICAgICAgICAgICBjaXR5OiBbJyddLFxuICAgICAgICAgICAgcm9sZTogWyd2ZW5kb3InXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldENvdW50cnkoKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQodmFsdWU6T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuYXV0aCQgPSB0aGlzLl9hdXRoU2VydmljZS5zaWdudXAodmFsdWUpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuYXV0aCQuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9IHJlcy5zdGF0dXM7XG4gICAgICAgICAgICAkKFwiI21vZGFsU2lnbnVwXCIpLm1vZGFsKCk7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSAnUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluayB0byBjb21wbGV0ZSB5b3VyIHJlZ2lzdHJhdGlvbiwgYW5kIGpvaW4gb3VyIG1hcmtldHBsYWNlJztcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQm9keSA9IHJlcy5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb3VudHJ5KGNvdW50cnlfbmFtZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1RoYWlsYW5kJykge1xuICAgICAgICAgICAgdGhpcy5jaXR5cyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNpdHl0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnb1RvTG9naW4oKSB7XG4gICAgICAgIHRoaXMucmVnaXNTdGF0dXMgPT0gdHJ1ZSA/IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJyddKTogdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvcmVnaXN0ZXItdmVuZG9yJ10pO1xuICAgIH1cblxuXG4gICAgaGFuZGxlQ29ycmVjdENhcHRjaGEoZXZlbnQ6YW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZDYXB0Y2hhUGFzc2VkID0gdHJ1ZTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
