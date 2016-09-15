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
var vendor_service_1 = require("../shared/api-service/vendor/vendor.service");
var country_service_1 = require('../shared/ng2-service/ng2-country/country.service');
var state_service_1 = require('../shared/ng2-service/ng2-country/state.service');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
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
        this.disabled = true;
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
        this.resetPassword = false;
        this.editMode = false;
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
    VendorProfileComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var vendor = new vendor_model_1.Vendor(this.myForm.value.name, this.myForm.value.position, this.myForm.value.department, this.myForm.value.countrycode, this.myForm.value.phonenumber, this.myForm.value.linkedin, this.myForm.value.organization_type, this.myForm.value.suite, this.myForm.value.numberstreet, this.myForm.value.city, this.myForm.value.state, this.myForm.value.country, this.myForm.value.zip, this.myForm.value.company_name, this.myForm.value.url, this.myFormLogo, this.myForm.value.year, this.myForm.value.mission, this.myForm.value.founded, this.myForm.value.size, this.myForm.value.affiliation, this.myForm.value.companyphone, this.myForm.value.taxid, this.myForm.value.facebook, this.myForm.value.twitter, this.myForm.value.line);
        this._vendorService.updateVendorProfile(vendor)
            .subscribe(function (res) {
            _this.editMode = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    };
    VendorProfileComponent.prototype.onSubmitPassword = function (value) {
        var _this = this;
        this.resetPassword = false;
        this._vendorService.resetPasswordAccount(value)
            .subscribe(function (res) {
            _this.resetPassword = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.onEdit = function () {
        this.editMode = true;
    };
    VendorProfileComponent.prototype.Cancle = function () {
        this.editMode = false;
    };
    VendorProfileComponent.prototype.goToEdit = function () {
        this.router.navigate(['/vendor/profile/edit']);
    };
    VendorProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            templateUrl: 'templates/vendor-profile.component.html',
            styleUrls: ['styles/vendor-profile.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, vendor_service_1.VendorService, country_service_1.DataCountryService, state_service_1.DataStateService])
    ], VendorProfileComponent);
    return VendorProfileComponent;
}());
exports.VendorProfileComponent = VendorProfileComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCw2QkFBcUIsK0JBQStCLENBQUMsQ0FBQTtBQUVyRCwrQkFBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUMxRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQUdqRix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBcUMsZ0JBQWdCLENBQUMsQ0FBQTtBQVd0RDtJQTBDSSxnQ0FBb0IsTUFBYyxFQUNkLEdBQWdCLEVBQ2hCLGNBQTZCLEVBQzdCLGVBQW1DLEVBQ25DLGFBQStCO1FBSi9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFsQ25ELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQVF0QyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3RCLENBQUM7UUFFRixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFHbkIsWUFBTyxHQUFRO1lBQ2xCLGFBQWEsRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLE9BQU8s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L05ZLDhCQUFzQix5QkErTmxDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YUNvdW50cnlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeS5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVN0YXRlU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtDb3VudHJ5fSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvY291bnRyeSc7XG5pbXBvcnQge1N0YXRlfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWNvdW50cnkvc3RhdGUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBkZXZlbG9wZXI6IFZlbmRvcltdO1xuICAgIHZlbmRvcl9wcm9maWxlOiBWZW5kb3JbXTtcbiAgICB2ZW5kb3JfcHJvZmlsZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHZlbmRvcl9vcmdhbml6YXRpb246IFZlbmRvcltdO1xuICAgIHZlbmRvcl9vcmdhbml6YXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc3ViX29yZ2FuaXphdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbG9hZGluZ19wcm9maWxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsb2FkaW5nX29yZ2FuaXphdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgICBzdGF0ZXM6IFN0YXRlW107XG4gICAgY2l0eXM6IFN0YXRlW107XG5cbiAgICBjb3VudHJ5U2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5dHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRldHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVtcHR5OiBzdHJpbmc7XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgc3JjOiBzdHJpbmcgPSBcIlwiO1xuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogMTYwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogMTYwXG4gICAgfTtcblxuICAgIG15Rm9ybUxvZ286c3RyaW5nID0gJyc7XG4gICAgZmlsZUNob3Nlbjpib29sZWFuID0gdHJ1ZTtcblxuXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgb3JnYW5pemF0aW9uczogWydHb3Zlcm5tZW50JywgJ1N0YXJ0dXAnLCAnVW5pdmVyc2l0eScsICdSZWdpc3RlcmVkIEJ1c2luZXNzJywgJ0dyb3VwJ10sXG4gICAgICAgIHllYXJfZm91bmRlZDogW11cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb3VudHJ5U2VydmljZTogRGF0YUNvdW50cnlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTogRGF0YVN0YXRlU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbJyddLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogWycnXSxcbiAgICAgICAgICAgIGNvdW50cnljb2RlOiBbJyddLFxuICAgICAgICAgICAgcGhvbmVudW1iZXI6IFsnJ10sXG4gICAgICAgICAgICBsaW5rZWRpbjogWycnXSxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbl90eXBlOiBbJyddLFxuICAgICAgICAgICAgc3VpdGU6IFsnJ10sXG4gICAgICAgICAgICBudW1iZXJzdHJlZXQ6IFsnJ10sXG4gICAgICAgICAgICBjaXR5OiBbJyddLFxuICAgICAgICAgICAgc3RhdGU6IFsnJ10sXG4gICAgICAgICAgICBjb3VudHJ5OiBbJyddLFxuICAgICAgICAgICAgemlwOiBbJyddLFxuICAgICAgICAgICAgY29tcGFueV9uYW1lOiBbJyddLFxuICAgICAgICAgICAgdXJsOiBbJyddLFxuICAgICAgICAgICAgbG9nbzogWycnXSxcbiAgICAgICAgICAgIHllYXI6IFsnJ10sXG4gICAgICAgICAgICBtaXNzaW9uOiBbJyddLFxuICAgICAgICAgICAgZm91bmRlZDogWycnXSxcbiAgICAgICAgICAgIHNpemU6IFsnJ10sXG4gICAgICAgICAgICBhZmZpbGlhdGlvbjogWycnXSxcbiAgICAgICAgICAgIGNvbXBhbnlwaG9uZTogWycnXSxcbiAgICAgICAgICAgIHRheGlkOiBbJyddLFxuICAgICAgICAgICAgZmFjZWJvb2s6IFsnJ10sXG4gICAgICAgICAgICB0d2l0dGVyOiBbJyddLFxuICAgICAgICAgICAgbGluZTogWycnXVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMubXlQYXNzd29yZEZvcm09IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIGN1cnJlbnRwYXNzd29yZDpbJyddLFxuICAgICAgICAgICAgbmV3cGFzc3dvcmQ6WycnXSxcbiAgICAgICAgICAgIG5ld3Bhc3N3b3JkX2NvbmZpcm1hdGlvbjpbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXREZXZlbG9wZXJQcm9maWxlKCk7XG4gICAgICAgIHRoaXMuZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVllYXJzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAodGhpcy5zdWJfb3JnYW5pemF0aW9uKXRoaXMuc3ViX29yZ2FuaXphdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVllYXJzKCkge1xuICAgICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHllYXI7IGkgPj0gMTk1MDsgaS0tKSB0aGlzLm9wdGlvbnNbJ3llYXJfZm91bmRlZCddLnB1c2goaSk7XG4gICAgfVxuXG5cbiAgICBnZXREZXZlbG9wZXJQcm9maWxlKCkge1xuICAgICAgICB0aGlzLnZlbmRvcl9wcm9maWxlJCA9IHRoaXMuX3ZlbmRvclNlcnZpY2UuZ2V0VmVuZG9yUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMudmVuZG9yX3Byb2ZpbGUkXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHZlbmRvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yX3Byb2ZpbGUgPSB2ZW5kb3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ19wcm9maWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uJCA9IHRoaXMuX3ZlbmRvclNlcnZpY2UuZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdmVuZG9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24gPSB2ZW5kb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gdmVuZG9yWzBdLmxvZ287XG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdENvdW50cnkodmVuZG9yLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ19vcmdhbml6YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENvdW50cnkoY291bnRyeV9uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1RoYWlsYW5kJykge1xuICAgICAgICAgICAgdGhpcy5jaXR5cyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoaXRlbT0+IGl0ZW0uY291bnRyeV9uYW1lID09IGNvdW50cnlfbmFtZSlcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRyeV9uYW1lID09ICdVbml0ZWQgU3RhdGVzJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLl9zdGF0ZVNlcnZpY2UuZ2V0U3RhdGVzKCkuZmlsdGVyKGl0ZW09PiBpdGVtLmNvdW50cnlfbmFtZSA9PSBjb3VudHJ5X25hbWUpXG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNpdHl0eXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSAhPT0gJ1VuaXRlZCBTdGF0ZXMnICYmIGNvdW50cnlfbmFtZSAhPT0gJ1RoYWlsYW5kJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIG9uU3VibWl0KHZhbHVlOiBPYmplY3QpIHtcbiAgICAgICAgY29uc3QgdmVuZG9yID0gbmV3IFZlbmRvcihcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5jb3VudHJ5Y29kZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnBob25lbnVtYmVyLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubGlua2VkaW4sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5vcmdhbml6YXRpb25fdHlwZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnN1aXRlLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubnVtYmVyc3RyZWV0LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuY2l0eSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnN0YXRlLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuY291bnRyeSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnppcCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnllYXIsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5taXNzaW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZm91bmRlZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnNpemUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5hZmZpbGlhdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNvbXBhbnlwaG9uZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRheGlkLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZmFjZWJvb2ssXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50d2l0dGVyLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubGluZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UudXBkYXRlVmVuZG9yUHJvZmlsZSh2ZW5kb3IpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgICAgICB0aGlzLmZpbGVDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vUmVzZXQgUGFzc3dvcmRcbiAgICBteVBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xuICAgIHJlc2V0UGFzc3dvcmQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIG9uU3VibWl0UGFzc3dvcmQodmFsdWU6IE9iamVjdCkge1xuXG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodmFsdWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBlZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25FZGl0KCkge1xuICAgICAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBDYW5jbGUoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIGdvVG9FZGl0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92ZW5kb3IvcHJvZmlsZS9lZGl0J10pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
