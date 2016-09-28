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
var vendor_model_1 = require("../shared/models/vendor.model");
var vendor_company_model_1 = require("../shared/models/vendor-company.model");
var vendor_service_1 = require("../shared/api-service/vendor/vendor.service");
var country_service_1 = require('../shared/ng2-service/ng2-country/country.service');
var state_service_1 = require('../shared/ng2-service/ng2-country/state.service');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var VendorProfileComponent = (function () {
    function VendorProfileComponent(router, _fb, _vendorService, _countryService, _stateService) {
        this.router = router;
        this._fb = _fb;
        this._vendorService = _vendorService;
        this._countryService = _countryService;
        this._stateService = _stateService;
        this.loading_profile = true;
        this.loading_organization = false;
        this.countrySelected = false;
        this.citytype = false;
        this.statetype = false;
        this.disabled_country = true;
        this.disabled = false;
        this.src = "";
        this.resizeOptions = {
            resizeMaxHeight: 160,
            resizeMaxWidth: 160
        };
        this.myFormLogo = '';
        this.fileChosen = true;
        this.options = {
            organizations: ['Government', 'Startup', 'University', 'Registered Business', 'Group'],
            year_founded: []
        };
        this.tabs = [
            { title: 'Account', content: 'Dynamic content 1', active: true, disabled: false }
        ];
        this.resetPassword = false;
        this.editMode = false;
        this.myFormVendorProfile = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: ['']
        });
        this.myFormCompanyProfile = this._fb.group({
            organization_type: [''],
            suite: [''],
            numberstreet: [''],
            city: [''],
            state: [''],
            country: [''],
            zip: [''],
            company_name: [''],
            url: [''],
            logo: [''],
            year: [''],
            mission: [''],
            founded: [''],
            size: [''],
            affiliation: [''],
            companyphone: [''],
            taxid: [''],
            facebook: [''],
            twitter: [''],
            line: ['']
        });
        this.myForm = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: [''],
            organization_type: [''],
            suite: [''],
            numberstreet: [''],
            city: [''],
            state: [''],
            country: [''],
            zip: [''],
            company_name: [''],
            url: [''],
            logo: [''],
            year: [''],
            mission: [''],
            founded: [''],
            size: [''],
            affiliation: [''],
            companyphone: [''],
            taxid: [''],
            facebook: [''],
            twitter: [''],
            line: ['']
        });
        this.myPasswordForm = this._fb.group({
            currentpassword: [''],
            newpassword: [''],
            newpassword_confirmation: ['']
        });
        this.countries = this._countryService.getCountries();
    }
    VendorProfileComponent.prototype.ngOnInit = function () {
        this.getDeveloperProfile();
        this.getOrganizationProfile();
        this.createYears();
    };
    VendorProfileComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_organization)
            this.sub_organization.unsubscribe();
    };
    VendorProfileComponent.prototype.createYears = function () {
        var year = new Date().getFullYear();
        for (var i = year; i >= 1950; i--)
            this.options['year_founded'].push(i);
    };
    VendorProfileComponent.prototype.getDeveloperProfile = function () {
        var _this = this;
        this.vendor_profile$ = this._vendorService.getVendorProfile();
        this.sub = this.vendor_profile$
            .subscribe(function (vendor) {
            _this.vendor_profile = vendor;
            _this.loading_profile = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.getOrganizationProfile = function () {
        var _this = this;
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub = this.vendor_organization$.subscribe(function (vendor) {
            _this.vendor_organization = vendor;
            _this.myFormLogo = vendor[0].logo;
            _this.onSelectCountry(vendor.country);
            _this.loading_organization = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.onSelectCountry = function (country_name) {
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
    VendorProfileComponent.prototype.onSubmitCompanyProfile = function (value) {
        var _this = this;
        var vendor_company = new vendor_company_model_1.VendorCompany(this.myFormCompanyProfile.value.organization_type, this.myFormCompanyProfile.value.suite, this.myFormCompanyProfile.value.numberstreet, this.myFormCompanyProfile.value.city, this.myFormCompanyProfile.value.state, this.myFormCompanyProfile.value.country, this.myFormCompanyProfile.value.zip, this.myFormCompanyProfile.value.company_name, this.myFormCompanyProfile.value.url, this.myFormLogo, this.myFormCompanyProfile.value.year, this.myFormCompanyProfile.value.mission, this.myFormCompanyProfile.value.founded, this.myFormCompanyProfile.value.size, this.myFormCompanyProfile.value.affiliation, this.myFormCompanyProfile.value.companyphone, this.myFormCompanyProfile.value.taxid, this.myFormCompanyProfile.value.facebook, this.myFormCompanyProfile.value.twitter, this.myFormCompanyProfile.value.line);
        console.log(vendor_company);
        this._vendorService.updateVendorCompany(vendor_company)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.onSubmitVendorProfile = function (value) {
        var _this = this;
        var vendor = new vendor_model_1.Vendor(this.myFormVendorProfile.value.name, this.myFormVendorProfile.value.position, this.myFormVendorProfile.value.department, this.myFormVendorProfile.value.countrycode, this.myFormVendorProfile.value.phonenumber, this.myFormVendorProfile.value.linkedin);
        this._vendorService.updateVendorProfile(vendor)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    };
    VendorProfileComponent.prototype.onSubmitPassword = function (value) {
        var _this = this;
        console.log(value);
        this.resetPassword = false;
        this.myPasswordForm.reset();
        this._vendorService.resetPasswordAccount(value)
            .subscribe(function (res) {
            console.log(res);
            _this.resetPassword = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.onEdit = function () {
        this.editMode = true;
        this.disabled = true;
    };
    VendorProfileComponent.prototype.Cancle = function () {
        this.editMode = false;
        this.disabled = false;
    };
    VendorProfileComponent.prototype.goToEdit = function () {
        this.router.navigate(['/vendor/profile/edit']);
    };
    VendorProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'templates/vendor-profile.component.html',
            styleUrls: ['styles/vendor-profile.component.css'],
            providers: [ng2_bootstrap_1.TabsetComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, vendor_service_1.VendorService, country_service_1.DataCountryService, state_service_1.DataStateService])
    ], VendorProfileComponent);
    return VendorProfileComponent;
}());
exports.VendorProfileComponent = VendorProfileComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRSxlQUFlLENBQUMsQ0FBQTtBQUNwRiw2QkFBcUIsK0JBQStCLENBQUMsQ0FBQTtBQUNyRCxxQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUdwRSwrQkFBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUMxRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQUdqRix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBcUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUV0RCw4QkFBOEIsNkJBRTlCLENBQUMsQ0FGMEQ7QUFXM0Q7SUFpREksZ0NBQW9CLE1BQWMsRUFDZCxHQUFnQixFQUNoQixjQUE2QixFQUM3QixlQUFtQyxFQUNuQyxhQUErQjtRQUovQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBekNuRCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFVdEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBa0I7WUFDM0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDdEIsQ0FBQztRQUVGLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFZLElBQUks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QUFzQix5QkE4UmxDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWZW5kb3J9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3ZlbmRvci5tb2RlbFwiO1xuaW1wb3J0IHtWZW5kb3JDb21wYW55fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3ItY29tcGFueS5tb2RlbFwiO1xuXG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YUNvdW50cnlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVN0YXRlU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtDb3VudHJ5fSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeSc7XG5pbXBvcnQge1N0YXRlfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5pbXBvcnQge1RhYnNldENvbXBvbmVudH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtdmVuZG9yJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbVGFic2V0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBkZXZlbG9wZXI6IFZlbmRvcltdO1xuICAgIHZlbmRvcl9wcm9maWxlOiBWZW5kb3JbXTtcbiAgICB2ZW5kb3JfcHJvZmlsZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHZlbmRvcl9vcmdhbml6YXRpb246IFZlbmRvcltdO1xuICAgIHZlbmRvcl9vcmdhbml6YXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc3ViX29yZ2FuaXphdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbG9hZGluZ19wcm9maWxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsb2FkaW5nX29yZ2FuaXphdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG4gICAgbXlGb3JtVmVuZG9yUHJvZmlsZTogRm9ybUdyb3VwO1xuICAgIG15Rm9ybUNvbXBhbnlQcm9maWxlOiBGb3JtR3JvdXA7XG5cbiAgICBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgICBzdGF0ZXM6IFN0YXRlW107XG4gICAgY2l0eXM6IFN0YXRlW107XG5cbiAgICBjb3VudHJ5U2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5dHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRldHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVtcHR5OiBzdHJpbmc7XG4gICAgZGlzYWJsZWRfY291bnRyeSA6Ym9vbGVhbiA9IHRydWU7XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNyYzogc3RyaW5nID0gXCJcIjtcbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgICByZXNpemVNYXhIZWlnaHQ6IDE2MCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDE2MFxuICAgIH07XG5cbiAgICBteUZvcm1Mb2dvOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgb3JnYW5pemF0aW9uczogWydHb3Zlcm5tZW50JywgJ1N0YXJ0dXAnLCAnVW5pdmVyc2l0eScsICdSZWdpc3RlcmVkIEJ1c2luZXNzJywgJ0dyb3VwJ10sXG4gICAgICAgIHllYXJfZm91bmRlZDogW11cbiAgICB9O1xuXG4gICAgcHVibGljIHRhYnM6IEFycmF5PGFueT4gPSBbXG4gICAgICAgIHt0aXRsZTogJ0FjY291bnQnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDEnLCBhY3RpdmU6IHRydWUsIGRpc2FibGVkOiBmYWxzZX1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb3VudHJ5U2VydmljZTogRGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTogRGF0YVN0YXRlU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJ10sXG4gICAgICAgICAgICBwb3NpdGlvbjogWycnXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IFsnJ10sXG4gICAgICAgICAgICBjb3VudHJ5Y29kZTogWycnXSxcbiAgICAgICAgICAgIHBob25lbnVtYmVyOiBbJyddLFxuICAgICAgICAgICAgbGlua2VkaW46IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbl90eXBlOiBbJyddLFxuICAgICAgICAgICAgc3VpdGU6IFsnJ10sXG4gICAgICAgICAgICBudW1iZXJzdHJlZXQ6IFsnJ10sXG4gICAgICAgICAgICBjaXR5OiBbJyddLFxuICAgICAgICAgICAgc3RhdGU6IFsnJ10sXG4gICAgICAgICAgICBjb3VudHJ5OiBbJyddLFxuICAgICAgICAgICAgemlwOiBbJyddLFxuICAgICAgICAgICAgY29tcGFueV9uYW1lOiBbJyddLFxuICAgICAgICAgICAgdXJsOiBbJyddLFxuICAgICAgICAgICAgbG9nbzogWycnXSxcbiAgICAgICAgICAgIHllYXI6IFsnJ10sXG4gICAgICAgICAgICBtaXNzaW9uOiBbJyddLFxuICAgICAgICAgICAgZm91bmRlZDogWycnXSxcbiAgICAgICAgICAgIHNpemU6IFsnJ10sXG4gICAgICAgICAgICBhZmZpbGlhdGlvbjogWycnXSxcbiAgICAgICAgICAgIGNvbXBhbnlwaG9uZTogWycnXSxcbiAgICAgICAgICAgIHRheGlkOiBbJyddLFxuICAgICAgICAgICAgZmFjZWJvb2s6IFsnJ10sXG4gICAgICAgICAgICB0d2l0dGVyOiBbJyddLFxuICAgICAgICAgICAgbGluZTogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJ10sXG4gICAgICAgICAgICBwb3NpdGlvbjogWycnXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IFsnJ10sXG4gICAgICAgICAgICBjb3VudHJ5Y29kZTogWycnXSxcbiAgICAgICAgICAgIHBob25lbnVtYmVyOiBbJyddLFxuICAgICAgICAgICAgbGlua2VkaW46IFsnJ10sXG4gICAgICAgICAgICBvcmdhbml6YXRpb25fdHlwZTogWycnXSxcbiAgICAgICAgICAgIHN1aXRlOiBbJyddLFxuICAgICAgICAgICAgbnVtYmVyc3RyZWV0OiBbJyddLFxuICAgICAgICAgICAgY2l0eTogWycnXSxcbiAgICAgICAgICAgIHN0YXRlOiBbJyddLFxuICAgICAgICAgICAgY291bnRyeTogWycnXSxcbiAgICAgICAgICAgIHppcDogWycnXSxcbiAgICAgICAgICAgIGNvbXBhbnlfbmFtZTogWycnXSxcbiAgICAgICAgICAgIHVybDogWycnXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICB5ZWFyOiBbJyddLFxuICAgICAgICAgICAgbWlzc2lvbjogWycnXSxcbiAgICAgICAgICAgIGZvdW5kZWQ6IFsnJ10sXG4gICAgICAgICAgICBzaXplOiBbJyddLFxuICAgICAgICAgICAgYWZmaWxpYXRpb246IFsnJ10sXG4gICAgICAgICAgICBjb21wYW55cGhvbmU6IFsnJ10sXG4gICAgICAgICAgICB0YXhpZDogWycnXSxcbiAgICAgICAgICAgIGZhY2Vib29rOiBbJyddLFxuICAgICAgICAgICAgdHdpdHRlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmU6IFsnJ11cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLm15UGFzc3dvcmRGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgY3VycmVudHBhc3N3b3JkOiBbJyddLFxuICAgICAgICAgICAgbmV3cGFzc3dvcmQ6IFsnJ10sXG4gICAgICAgICAgICBuZXdwYXNzd29yZF9jb25maXJtYXRpb246IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLl9jb3VudHJ5U2VydmljZS5nZXRDb3VudHJpZXMoKTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldERldmVsb3BlclByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWWVhcnMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLnN1Yl9vcmdhbml6YXRpb24pdGhpcy5zdWJfb3JnYW5pemF0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlWWVhcnMoKSB7XG4gICAgICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb3IgKGxldCBpID0geWVhcjsgaSA+PSAxOTUwOyBpLS0pIHRoaXMub3B0aW9uc1sneWVhcl9mb3VuZGVkJ10ucHVzaChpKTtcbiAgICB9XG5cblxuICAgIGdldERldmVsb3BlclByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMudmVuZG9yX3Byb2ZpbGUkID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRWZW5kb3JQcm9maWxlKCk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy52ZW5kb3JfcHJvZmlsZSRcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgdmVuZG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JfcHJvZmlsZSA9IHZlbmRvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX3Byb2ZpbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRPcmdhbml6YXRpb25Qcm9maWxlKCkge1xuICAgICAgICB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiA9IHZlbmRvcjtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSB2ZW5kb3JbMF0ubG9nbztcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Q291bnRyeSh2ZW5kb3IuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX29yZ2FuaXphdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q291bnRyeShjb3VudHJ5X25hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1VuaXRlZCBTdGF0ZXMnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRyeV9uYW1lICE9PSAnVW5pdGVkIFN0YXRlcycgJiYgY291bnRyeV9uYW1lICE9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU3VibWl0Q29tcGFueVByb2ZpbGUodmFsdWU6T2JqZWN0KXtcblxuICAgICAgICBjb25zdCB2ZW5kb3JfY29tcGFueSA9IG5ldyBWZW5kb3JDb21wYW55KFxuXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLm9yZ2FuaXphdGlvbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5zdWl0ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUubnVtYmVyc3RyZWV0LFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5jaXR5LFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5zdGF0ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuY291bnRyeSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuemlwLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5jb21wYW55X25hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUueWVhcixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUubWlzc2lvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuZm91bmRlZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuc2l6ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuYWZmaWxpYXRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmNvbXBhbnlwaG9uZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUudGF4aWQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmZhY2Vib29rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS50d2l0dGVyLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5saW5lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2codmVuZG9yX2NvbXBhbnkpO1xuXG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UudXBkYXRlVmVuZG9yQ29tcGFueSh2ZW5kb3JfY29tcGFueSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG5cblxuICAgIH1cblxuICAgIG9uU3VibWl0VmVuZG9yUHJvZmlsZSh2YWx1ZTpPYmplY3Qpe1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBuZXcgVmVuZG9yKFxuICAgICAgICAgICAgdGhpcy5teUZvcm1WZW5kb3JQcm9maWxlLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUucG9zaXRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5jb3VudHJ5Y29kZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5waG9uZW51bWJlcixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5saW5rZWRpblxuICAgICAgICApO1xuICAgICAgICB0aGlzLl92ZW5kb3JTZXJ2aWNlLnVwZGF0ZVZlbmRvclByb2ZpbGUodmVuZG9yKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgICAgICB0aGlzLmZpbGVDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vUmVzZXQgUGFzc3dvcmRcbiAgICBteVBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xuICAgIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0UGFzc3dvcmQodmFsdWU6IE9iamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlQYXNzd29yZEZvcm0ucmVzZXQoKTtcblxuICAgICAgICB0aGlzLl92ZW5kb3JTZXJ2aWNlLnJlc2V0UGFzc3dvcmRBY2NvdW50KHZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cblxuICAgIGVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBDYW5jbGUoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgfVxuXG5cbiAgICBnb1RvRWRpdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmVuZG9yL3Byb2ZpbGUvZWRpdCddKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
