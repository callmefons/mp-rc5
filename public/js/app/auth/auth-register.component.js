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
    }
    AuthRegisterComponent.prototype.ngOnInit = function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIseUNBQXlDLENBQUMsQ0FBQTtBQUVwRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUdsRSwyQkFBZ0QsOEJBQThCLENBQUMsQ0FBQTtBQUUvRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQVVqRjtJQW1CRSwrQkFBb0IsR0FBZSxFQUNmLGVBQWtDLEVBQ2xDLGFBQThCLEVBQzlCLFlBQXdCLEVBQ3hCLE9BQWM7UUFKZCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBbEJsQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBS3hCLG1CQUFjLEdBQVcsSUFBSSxDQUFDO1FBSzlCLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFXLEtBQUssQ0FBQztJQVExQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzNCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSwyQkFBYyxDQUFDLENBQUMsQ0FBQztZ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QUM7SUFDcEMsQ0FBQztJQTNGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNsRCxDQUFDOzs2QkFBQTtJQXdGRiw0QkFBQztBQUFELENBdEZBLEFBc0ZDLElBQUE7QUF0RlksNkJBQXFCLHdCQXNGakMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0NvdW50cnl9IGZyb20gXCIuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeVwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9zdGF0ZVwiO1xuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgcGFzc3dvcmRWYWxpZGF0b3J9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVycy92YWxpZGF0b3JzXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7RGF0YUNvdW50cnlTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnkuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU3RhdGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hZG1pbicsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGVzL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBzdWI6U3Vic2NyaXB0aW9uO1xuICBhdXRoJDpPYnNlcnZhYmxlPGFueT47XG5cbiAgZGlzYWJsZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgZXJyb3JNZXNzYWdlOnN0cmluZztcbiAgbXlGb3JtOkZvcm1Hcm91cDtcbiAgdXNlcjpVc2VyO1xuICBmQ2FwdGNoYVBhc3NlZDpib29sZWFuID0gbnVsbDtcbiAgY291bnRyaWVzOkNvdW50cnlbXTtcbiAgc3RhdGVzOlN0YXRlW107XG4gIGNpdHlzOlN0YXRlW107XG5cbiAgY291bnRyeVNlbGVjdGVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgY2l0eXR5cGU6Ym9vbGVhbiA9IGZhbHNlO1xuICBzdGF0ZXR5cGU6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb3VudHJ5U2VydmljZTpEYXRhQ291bnRyeVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTpEYXRhU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldENvdW50cnkoKTtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIHBlcnNvbmFsX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGVtYWlsVmFsaWRhdG9yXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbXBhbnlfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvdW50cnk6IFt0aGlzLmNvdW50cmllc1swXS5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXRlOiBbJyddLFxuICAgICAgY2l0eTogWycnXSxcbiAgICAgIHJvbGU6WydjdXN0b21lciddXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRDb3VudHJ5KCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gIH1cblxuICBvblN1Ym1pdCh2YWx1ZTpPYmplY3QpIHtcbiAgICB0aGlzLmF1dGgkID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHZhbHVlKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMuYXV0aCQuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q291bnRyeShjb3VudHJ5X25hbWU6c3RyaW5nKSB7XG4gICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVGhhaWxhbmQnKSB7XG4gICAgICB0aGlzLmNpdHlzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY291bnRyeV9uYW1lID09ICdVbml0ZWQgU3RhdGVzJykge1xuICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLl9zdGF0ZVNlcnZpY2UuZ2V0U3RhdGVzKCkuZmlsdGVyKGl0ZW09PiBpdGVtLmNvdW50cnlfbmFtZSA9PSBjb3VudHJ5X25hbWUpXG4gICAgICB0aGlzLnN0YXRldHlwZSA9IHRydWU7XG4gICAgICB0aGlzLmNpdHl0eXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5X25hbWUgIT09ICdVbml0ZWQgU3RhdGVzJyAmJiBjb3VudHJ5X25hbWUgIT09ICdUaGFpbGFuZCcpIHtcbiAgICAgIHRoaXMuc3RhdGV0eXBlID0gZmFsc2U7XG4gICAgICB0aGlzLmNpdHl0eXBlID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICB9XG5cblxuICBoYW5kbGVDb3JyZWN0Q2FwdGNoYShldmVudDphbnkpIHtcbiAgICByZXR1cm4gdGhpcy5mQ2FwdGNoYVBhc3NlZCA9IHRydWU7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
