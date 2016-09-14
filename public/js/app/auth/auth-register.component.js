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
var AuthRegisterComponent = (function () {
    function AuthRegisterComponent(_fb, _countryService, _stateService, _authService, _router) {
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
        this.myForm = this._fb.group({
            personal_name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.passwordValidator])],
            password_confirmation: ['', forms_1.Validators.required],
            company_name: ['', forms_1.Validators.required],
            country: ['', forms_1.Validators.required],
            state: [''],
            city: ['']
        });
    }
    AuthRegisterComponent.prototype.ngOnInit = function () {
        this.getCountry();
        // {validator: matchingPasswords('password', 'password_confirmation')});
    };
    AuthRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    AuthRegisterComponent.prototype.getCountry = function () {
        this.countries = this._countryService.getCountries();
    };
    AuthRegisterComponent.prototype.onSubmit = function (value) {
        // const user = new User(this.myForm.value.name, this.myForm.value.email,
        //   this.myForm.value.password, this.myForm.value.password_confirmation,
        //   this.myForm.value.company_name, this.myForm.value.country,
        //   this.myForm.value.state, this.myForm.value.city);
        var _this = this;
        this.auth$ = this._authService.signup(value);
        this.sub = this.auth$.subscribe(function (res) {
        }, function (error) { return _this.errorMessage = error; });
    };
    AuthRegisterComponent.prototype.onSelectCountry = function (country_name) {
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
    AuthRegisterComponent.prototype.goToLogin = function () {
        this._router.navigate(['']);
    };
    AuthRegisterComponent.prototype.handleCorrectCaptcha = function (event) {
        return this.fCaptchaPassed = true;
    };
    AuthRegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin',
            templateUrl: 'templates/auth-register.component.html',
            styleUrls: ['styles/auth-register.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, country_service_1.DataCountryService, state_service_1.DataStateService, auth_service_1.AuthService, router_1.Router])
    ], AuthRegisterComponent);
    return AuthRegisterComponent;
}());
exports.AuthRegisterComponent = AuthRegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIseUNBQXlDLENBQUMsQ0FBQTtBQUVwRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUdsRSwyQkFBZ0QsOEJBQThCLENBQUMsQ0FBQTtBQUUvRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQVVqRjtJQW1CRSwrQkFBb0IsR0FBZSxFQUNmLGVBQWtDLEVBQ2xDLGFBQThCLEVBQzlCLFlBQXdCLEVBQ3hCLE9BQWM7UUFKZCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBbEJsQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBS3hCLG1CQUFjLEdBQVcsSUFBSSxDQUFDO1FBSzlCLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQVF4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzNCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSwyQkFBYyxDQUFDLENBQUMsQ0FBQztZQUN0RSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxr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QztJQUNwQyxDQUFDO0lBaEdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ2xELENBQUM7OzZCQUFBO0lBNkZGLDRCQUFDO0FBQUQsQ0EzRkEsQUEyRkMsSUFBQTtBQTNGWSw2QkFBcUIsd0JBMkZqQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q291bnRyeX0gZnJvbSBcIi4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9jb3VudHJ5XCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlXCI7XG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBwYXNzd29yZFZhbGlkYXRvcn0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnNcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFkbWluJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHN1YjpTdWJzY3JpcHRpb247XG4gIGF1dGgkOk9ic2VydmFibGU8YW55PjtcblxuICBkaXNhYmxlZDpib29sZWFuID0gdHJ1ZTtcblxuICBlcnJvck1lc3NhZ2U6c3RyaW5nO1xuICBteUZvcm06Rm9ybUdyb3VwO1xuICB1c2VyOlVzZXI7XG4gIGZDYXB0Y2hhUGFzc2VkOmJvb2xlYW4gPSBudWxsO1xuICBjb3VudHJpZXM6Q291bnRyeVtdO1xuICBzdGF0ZXM6U3RhdGVbXTtcbiAgY2l0eXM6U3RhdGVbXTtcblxuICBjb3VudHJ5U2VsZWN0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBjaXR5dHlwZTpib29sZWFuID0gZmFsc2U7XG4gIHN0YXRldHlwZTpib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvdW50cnlTZXJ2aWNlOkRhdGFDb3VudHJ5U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RhdGVTZXJ2aWNlOkRhdGFTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XG5cbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIHBlcnNvbmFsX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGVtYWlsVmFsaWRhdG9yXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbXBhbnlfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvdW50cnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0ZTogWycnXSxcbiAgICAgIGNpdHk6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0Q291bnRyeSgpO1xuICAgICAgLy8ge3ZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRDb3VudHJ5KCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gIH1cblxuICBvblN1Ym1pdCh2YWx1ZTpPYmplY3QpIHtcbiAgICAvLyBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5teUZvcm0udmFsdWUubmFtZSwgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsXG4gICAgLy8gICB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgIC8vICAgdGhpcy5teUZvcm0udmFsdWUuY29tcGFueV9uYW1lLCB0aGlzLm15Rm9ybS52YWx1ZS5jb3VudHJ5LFxuICAgIC8vICAgdGhpcy5teUZvcm0udmFsdWUuc3RhdGUsIHRoaXMubXlGb3JtLnZhbHVlLmNpdHkpO1xuXG4gICAgdGhpcy5hdXRoJCA9IHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh2YWx1ZSk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLmF1dGgkLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuICBvblNlbGVjdENvdW50cnkoY291bnRyeV9uYW1lOnN0cmluZykge1xuICAgIHRoaXMuY291bnRyeVNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1RoYWlsYW5kJykge1xuICAgICAgdGhpcy5jaXR5cyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgIHRoaXMuY2l0eXR5cGUgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZXR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgdGhpcy5zdGF0ZXR5cGUgPSB0cnVlO1xuICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZ29Ub0xvZ2luKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgfVxuXG5cbiAgaGFuZGxlQ29ycmVjdENhcHRjaGEoZXZlbnQ6YW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZkNhcHRjaGFQYXNzZWQgPSB0cnVlO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
