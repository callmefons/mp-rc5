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
var validation_service_1 = require('../shared/validation/validation.service');
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
        //Modal
        this.regisStatus = false;
        this.showModal = false;
        this.modalTitle = '';
        this.modalBody = '';
    }
    AuthRegisterComponent.prototype.ngOnInit = function () {
        // let password = new FormControl('');
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
            role: ['customer']
        });
    };
    AuthRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    AuthRegisterComponent.prototype.getCountry = function () {
        this.countries = this._countryService.getCountries();
    };
    AuthRegisterComponent.prototype.onSubmit = function (value) {
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
        this.regisStatus == true ? this._router.navigate(['']) : this._router.navigate(['/auth/register']);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIseUNBQXlDLENBQUMsQ0FBQTtBQUNwRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxzQkFBNkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUk5RSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQUNqRixtQ0FBZ0MseUNBQXlDLENBQUMsQ0FBQTtBQVcxRTtJQTBCRSwrQkFBb0IsR0FBZSxFQUNmLGVBQWtDLEVBQ2xDLGFBQThCLEVBQzlCLFlBQXdCLEVBQ3hCLE9BQWM7UUFKZCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBekJsQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBS3hCLG1CQUFjLEdBQVcsSUFBSSxDQUFDO1FBSzlCLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUUxQixPQUFPO1FBQ1AsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFTdkIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFFRSxzQ0FBc0M7UUFFdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsYUFBYSxFQUFFLENBQUMsRUFB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b250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDb3VudHJ5fSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnlcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtEYXRhQ291bnRyeVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlJztcblxuZGVjbGFyZSAgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgYXV0aCQ6T2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGRpc2FibGVkOmJvb2xlYW4gPSB0cnVlO1xuXG4gIGVycm9yTWVzc2FnZTpzdHJpbmc7XG4gIG15Rm9ybTpGb3JtR3JvdXA7XG4gIHVzZXI6VXNlcjtcbiAgZkNhcHRjaGFQYXNzZWQ6Ym9vbGVhbiA9IG51bGw7XG4gIGNvdW50cmllczpDb3VudHJ5W107XG4gIHN0YXRlczpTdGF0ZVtdO1xuICBjaXR5czpTdGF0ZVtdO1xuXG4gIGNvdW50cnlTZWxlY3RlZDpib29sZWFuID0gZmFsc2U7XG4gIGNpdHl0eXBlOmJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGV0eXBlOmJvb2xlYW4gPSBmYWxzZTtcblxuICAvL01vZGFsXG4gIHJlZ2lzU3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dNb2RhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcbiAgbW9kYWxCb2R5OiBzdHJpbmcgPSAnJztcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb3VudHJ5U2VydmljZTpEYXRhQ291bnRyeVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTpEYXRhU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIGxldCBwYXNzd29yZCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgICB0aGlzLmdldENvdW50cnkoKTtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIHBlcnNvbmFsX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdKV0sXG4gICAgICBjb21wYW55X25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb3VudHJ5OiBbdGhpcy5jb3VudHJpZXNbMF0ubmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0ZTogWycnXSxcbiAgICAgIGNpdHk6IFsnJ10sXG4gICAgICByb2xlOlsnY3VzdG9tZXInXVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0Q291bnRyeSgpIHtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuX2NvdW50cnlTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICB9XG5cbiAgICBvblN1Ym1pdCh2YWx1ZTpPYmplY3QpIHtcbiAgICB0aGlzLmF1dGgkID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHZhbHVlKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMuYXV0aCQuc3Vic2NyaWJlKChyZXMpID0+IHtcblxuICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgJChcIiNtb2RhbFNpZ251cFwiKS5tb2RhbCgpO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXNTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCb2R5ID0gJ1BsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBhIGxpbmsgdG8gY29tcGxldGUgeW91ciByZWdpc3RyYXRpb24sIGFuZCBqb2luIG91ciBtYXJrZXRwbGFjZSc7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSByZXMuZXJyb3JtZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuICBvblNlbGVjdENvdW50cnkoY291bnRyeV9uYW1lOnN0cmluZykge1xuICAgIHRoaXMuY291bnRyeVNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1RoYWlsYW5kJykge1xuICAgICAgdGhpcy5jaXR5cyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgIHRoaXMuY2l0eXR5cGUgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZXR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgdGhpcy5zdGF0ZXR5cGUgPSB0cnVlO1xuICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZ29Ub0xvZ2luKCkge1xuICAgICAgdGhpcy5yZWdpc1N0YXR1cyA9PSB0cnVlID8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnJ10pOiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9yZWdpc3RlciddKTtcbiAgfVxuXG5cbiAgaGFuZGxlQ29ycmVjdENhcHRjaGEoZXZlbnQ6YW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZkNhcHRjaGFQYXNzZWQgPSB0cnVlO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
