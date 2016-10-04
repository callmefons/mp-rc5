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
        ///////////// Alert /////////////
        this.alerted = false;
        this.messageAlert = '';
        this.typeAlert = 'success';
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
    VendorProfileComponent.prototype.onAlert = function (msg, type) {
        var _this = this;
        this.messageAlert = msg;
        this.typeAlert = type;
        this.alerted = true;
        setTimeout(function () {
            _this.alerted = false;
            _this.messageAlert = '';
        }, 2000);
    };
    VendorProfileComponent.prototype.onSubmitCompanyProfile = function (value) {
        var _this = this;
        var vendor_company = new vendor_company_model_1.VendorCompany(this.myFormCompanyProfile.value.organization_type, this.myFormCompanyProfile.value.suite, this.myFormCompanyProfile.value.numberstreet, this.myFormCompanyProfile.value.city, this.myFormCompanyProfile.value.state, this.myFormCompanyProfile.value.country, this.myFormCompanyProfile.value.zip, this.myFormCompanyProfile.value.company_name, this.myFormCompanyProfile.value.url, this.myFormLogo, this.myFormCompanyProfile.value.year, this.myFormCompanyProfile.value.mission, this.myFormCompanyProfile.value.founded, this.myFormCompanyProfile.value.size, this.myFormCompanyProfile.value.affiliation, this.myFormCompanyProfile.value.companyphone, this.myFormCompanyProfile.value.taxid, this.myFormCompanyProfile.value.facebook, this.myFormCompanyProfile.value.twitter, this.myFormCompanyProfile.value.line);
        console.log(vendor_company);
        // this.onAlert('Update Vendor Company Successfully!', 'success');
        // this.Cancle();
        this._vendorService.updateVendorCompany(vendor_company)
            .subscribe(function (res) {
            console.log(res);
            console.log(vendor_company);
            _this.onAlert('Update Vendor Company Successfully!', 'success');
            _this.Cancle();
        }, function (error) {
            console.log(error);
            _this.onAlert('Update Vendor Company Failed!', 'danger');
            _this.Cancle();
        });
    };
    VendorProfileComponent.prototype.onSubmitVendorProfile = function (value) {
        var _this = this;
        var vendor = new vendor_model_1.Vendor(this.myFormVendorProfile.value.name, this.myFormVendorProfile.value.position, this.myFormVendorProfile.value.department, this.myFormVendorProfile.value.countrycode, this.myFormVendorProfile.value.phonenumber, this.myFormVendorProfile.value.linkedin);
        this.onAlert('Update Vendor Profile  Successfully', 'success');
        this.Cancle();
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
        //console.log(value);
        this.resetPassword = false;
        this.myPasswordForm.reset();
        this.onAlert('Reset Password Account Successfully', 'success');
        // this._vendorService.resetPasswordAccount(value)
        //     .subscribe((res) => {
        //             this.resetPassword = true;
        //             this.onAlert('Reset Password Account Successfully', 'success');
        //         },
        //         error => {
        //             this.errorMessage = <any>error;
        //             this.onAlert('Reset Password Account Failed', 'danger');
        //         });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRSxlQUFlLENBQUMsQ0FBQTtBQUNwRiw2QkFBcUIsK0JBQStCLENBQUMsQ0FBQTtBQUNyRCxxQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUdwRSwrQkFBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUMxRSxnQ0FBaUMsbURBQW1ELENBQUMsQ0FBQTtBQUNyRiw4QkFBK0IsaURBQWlELENBQUMsQ0FBQTtBQUdqRix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBcUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUV0RCw4QkFBOEIsNkJBRTlCLENBQUMsQ0FGMEQ7QUFhM0Q7SUFpREksZ0NBQW9CLE1BQWMsRUFDZCxHQUFnQixFQUNoQixjQUE2QixFQUM3QixlQUFtQyxFQUNuQyxhQUErQjtRQUovQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBekNuRCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFVdEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBa0I7WUFDM0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDdEIsQ0FBQztRQUVGLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFZLElBQUks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QUFxQjtRQUNyQiw4Q0FBOEM7UUFDOUMsdUVBQXVFO1FBQ3ZFLGNBQWM7SUFDbEIsQ0FBQztJQUtELHVDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNRLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRTlCLENBQUM7SUFHRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXBVTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztZQUNsRCxTQUFTLEVBQUUsQ0FBQywrQkFBZSxDQUFDO1NBQy9CLENBQUM7OzhCQUFBO0lBaVVGLDZCQUFDO0FBQUQsQ0EvVEEsQUErVEMsSUFBQTtBQS9UWSw4QkFBc0IseUJBK1RsQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7VmVuZG9yQ29tcGFueX0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLWNvbXBhbnkubW9kZWxcIjtcblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1ZlbmRvclNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvdmVuZG9yL3ZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFDb3VudHJ5U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnkuc2VydmljZSc7XG5pbXBvcnQge0RhdGFTdGF0ZVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItY291bnRyeS9zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7Q291bnRyeX0gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L2NvdW50cnknO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1jb3VudHJ5L3N0YXRlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtJbWFnZVVwbG9hZCwgSW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gJy4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItaW1hZ2V1cGxvYWQvaW5kZXgnO1xuaW1wb3J0IHtUYWJzZXRDb21wb25lbnR9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCdcblxuZGVjbGFyZSB2YXIgJDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW1RhYnNldENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgZGV2ZWxvcGVyOiBWZW5kb3JbXTtcbiAgICB2ZW5kb3JfcHJvZmlsZTogVmVuZG9yW107XG4gICAgdmVuZG9yX3Byb2ZpbGUkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICB2ZW5kb3Jfb3JnYW5pemF0aW9uOiBWZW5kb3JbXTtcbiAgICB2ZW5kb3Jfb3JnYW5pemF0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHN1Yl9vcmdhbml6YXRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGxvYWRpbmdfcHJvZmlsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgbG9hZGluZ19vcmdhbml6YXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuICAgIG15Rm9ybVZlbmRvclByb2ZpbGU6IEZvcm1Hcm91cDtcbiAgICBteUZvcm1Db21wYW55UHJvZmlsZTogRm9ybUdyb3VwO1xuXG4gICAgY291bnRyaWVzOiBDb3VudHJ5W107XG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xuICAgIGNpdHlzOiBTdGF0ZVtdO1xuXG4gICAgY291bnRyeVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY2l0eXR5cGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0ZXR5cGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBlbXB0eTogc3RyaW5nO1xuICAgIGRpc2FibGVkX2NvdW50cnkgOmJvb2xlYW4gPSB0cnVlO1xuICAgIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzcmM6IHN0cmluZyA9IFwiXCI7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiAxNjAsXG4gICAgICAgIHJlc2l6ZU1heFdpZHRoOiAxNjBcbiAgICB9O1xuXG4gICAgbXlGb3JtTG9nbzogc3RyaW5nID0gJyc7XG4gICAgZmlsZUNob3NlbjogYm9vbGVhbiA9IHRydWU7XG5cblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIG9yZ2FuaXphdGlvbnM6IFsnR292ZXJubWVudCcsICdTdGFydHVwJywgJ1VuaXZlcnNpdHknLCAnUmVnaXN0ZXJlZCBCdXNpbmVzcycsICdHcm91cCddLFxuICAgICAgICB5ZWFyX2ZvdW5kZWQ6IFtdXG4gICAgfTtcblxuICAgIHB1YmxpYyB0YWJzOiBBcnJheTxhbnk+ID0gW1xuICAgICAgICB7dGl0bGU6ICdBY2NvdW50JywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAxJywgYWN0aXZlOiB0cnVlLCBkaXNhYmxlZDogZmFsc2V9XG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3ZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY291bnRyeVNlcnZpY2U6IERhdGFDb3VudHJ5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdGF0ZVNlcnZpY2U6IERhdGFTdGF0ZVNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcG9zaXRpb246IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBbJyddLFxuICAgICAgICAgICAgY291bnRyeWNvZGU6IFsnJ10sXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmtlZGluOiBbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBvcmdhbml6YXRpb25fdHlwZTogWycnXSxcbiAgICAgICAgICAgIHN1aXRlOiBbJyddLFxuICAgICAgICAgICAgbnVtYmVyc3RyZWV0OiBbJyddLFxuICAgICAgICAgICAgY2l0eTogWycnXSxcbiAgICAgICAgICAgIHN0YXRlOiBbJyddLFxuICAgICAgICAgICAgY291bnRyeTogWycnXSxcbiAgICAgICAgICAgIHppcDogWycnXSxcbiAgICAgICAgICAgIGNvbXBhbnlfbmFtZTogWycnXSxcbiAgICAgICAgICAgIHVybDogWycnXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICB5ZWFyOiBbJyddLFxuICAgICAgICAgICAgbWlzc2lvbjogWycnXSxcbiAgICAgICAgICAgIGZvdW5kZWQ6IFsnJ10sXG4gICAgICAgICAgICBzaXplOiBbJyddLFxuICAgICAgICAgICAgYWZmaWxpYXRpb246IFsnJ10sXG4gICAgICAgICAgICBjb21wYW55cGhvbmU6IFsnJ10sXG4gICAgICAgICAgICB0YXhpZDogWycnXSxcbiAgICAgICAgICAgIGZhY2Vib29rOiBbJyddLFxuICAgICAgICAgICAgdHdpdHRlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmU6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcG9zaXRpb246IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBbJyddLFxuICAgICAgICAgICAgY291bnRyeWNvZGU6IFsnJ10sXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmtlZGluOiBbJyddLFxuICAgICAgICAgICAgb3JnYW5pemF0aW9uX3R5cGU6IFsnJ10sXG4gICAgICAgICAgICBzdWl0ZTogWycnXSxcbiAgICAgICAgICAgIG51bWJlcnN0cmVldDogWycnXSxcbiAgICAgICAgICAgIGNpdHk6IFsnJ10sXG4gICAgICAgICAgICBzdGF0ZTogWycnXSxcbiAgICAgICAgICAgIGNvdW50cnk6IFsnJ10sXG4gICAgICAgICAgICB6aXA6IFsnJ10sXG4gICAgICAgICAgICBjb21wYW55X25hbWU6IFsnJ10sXG4gICAgICAgICAgICB1cmw6IFsnJ10sXG4gICAgICAgICAgICBsb2dvOiBbJyddLFxuICAgICAgICAgICAgeWVhcjogWycnXSxcbiAgICAgICAgICAgIG1pc3Npb246IFsnJ10sXG4gICAgICAgICAgICBmb3VuZGVkOiBbJyddLFxuICAgICAgICAgICAgc2l6ZTogWycnXSxcbiAgICAgICAgICAgIGFmZmlsaWF0aW9uOiBbJyddLFxuICAgICAgICAgICAgY29tcGFueXBob25lOiBbJyddLFxuICAgICAgICAgICAgdGF4aWQ6IFsnJ10sXG4gICAgICAgICAgICBmYWNlYm9vazogWycnXSxcbiAgICAgICAgICAgIHR3aXR0ZXI6IFsnJ10sXG4gICAgICAgICAgICBsaW5lOiBbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubXlQYXNzd29yZEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBjdXJyZW50cGFzc3dvcmQ6IFsnJ10sXG4gICAgICAgICAgICBuZXdwYXNzd29yZDogWycnXSxcbiAgICAgICAgICAgIG5ld3Bhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuX2NvdW50cnlTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldERldmVsb3BlclByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWWVhcnMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLnN1Yl9vcmdhbml6YXRpb24pdGhpcy5zdWJfb3JnYW5pemF0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlWWVhcnMoKSB7XG4gICAgICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb3IgKGxldCBpID0geWVhcjsgaSA+PSAxOTUwOyBpLS0pIHRoaXMub3B0aW9uc1sneWVhcl9mb3VuZGVkJ10ucHVzaChpKTtcbiAgICB9XG5cblxuICAgIGdldERldmVsb3BlclByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMudmVuZG9yX3Byb2ZpbGUkID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRWZW5kb3JQcm9maWxlKCk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy52ZW5kb3JfcHJvZmlsZSRcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgdmVuZG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JfcHJvZmlsZSA9IHZlbmRvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX3Byb2ZpbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRPcmdhbml6YXRpb25Qcm9maWxlKCkge1xuICAgICAgICB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiA9IHZlbmRvcjtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSB2ZW5kb3JbMF0ubG9nbztcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Q291bnRyeSh2ZW5kb3IuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX29yZ2FuaXphdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q291bnRyeShjb3VudHJ5X25hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVGhhaWxhbmQnKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcihpdGVtPT4gaXRlbS5jb3VudHJ5X25hbWUgPT0gY291bnRyeV9uYW1lKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZXR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSAhPT0gJ1VuaXRlZCBTdGF0ZXMnICYmIGNvdW50cnlfbmFtZSAhPT0gJ1RoYWlsYW5kJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8gQWxlcnQgLy8vLy8vLy8vLy8vL1xuICAgIGFsZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtZXNzYWdlQWxlcnQ6IHN0cmluZyA9ICcnO1xuICAgIHR5cGVBbGVydDogc3RyaW5nID0gJ3N1Y2Nlc3MnO1xuXG4gICAgb25BbGVydChtc2c6IHN0cmluZywgdHlwZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlQWxlcnQgPSBtc2c7XG4gICAgICAgIHRoaXMudHlwZUFsZXJ0ID0gdHlwZTtcbiAgICAgICAgdGhpcy5hbGVydGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQWxlcnQgPSAnJztcbiAgICAgICAgfSwyMDAwKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdENvbXBhbnlQcm9maWxlKHZhbHVlOk9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdmVuZG9yX2NvbXBhbnkgPSBuZXcgVmVuZG9yQ29tcGFueShcblxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5vcmdhbml6YXRpb25fdHlwZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuc3VpdGUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLm51bWJlcnN0cmVldCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuY2l0eSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuc3RhdGUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmNvdW50cnksXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnppcCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuY29tcGFueV9uYW1lLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS51cmwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ28sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnllYXIsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLm1pc3Npb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmZvdW5kZWQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnNpemUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmFmZmlsaWF0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5jb21wYW55cGhvbmUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnRheGlkLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5mYWNlYm9vayxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUudHdpdHRlcixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUubGluZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZlbmRvcl9jb21wYW55KTtcbiAgICAgICAgLy8gdGhpcy5vbkFsZXJ0KCdVcGRhdGUgVmVuZG9yIENvbXBhbnkgU3VjY2Vzc2Z1bGx5IScsICdzdWNjZXNzJyk7XG4gICAgICAgIC8vIHRoaXMuQ2FuY2xlKCk7XG5cbiAgICAgICAgdGhpcy5fdmVuZG9yU2VydmljZS51cGRhdGVWZW5kb3JDb21wYW55KHZlbmRvcl9jb21wYW55KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmVuZG9yX2NvbXBhbnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1VwZGF0ZSBWZW5kb3IgQ29tcGFueSBTdWNjZXNzZnVsbHkhJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYW5jbGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1VwZGF0ZSBWZW5kb3IgQ29tcGFueSBGYWlsZWQhJywgJ2RhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhbmNsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICB9XG5cblxuICAgIG9uU3VibWl0VmVuZG9yUHJvZmlsZSh2YWx1ZTpPYmplY3Qpe1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBuZXcgVmVuZG9yKFxuICAgICAgICAgICAgdGhpcy5teUZvcm1WZW5kb3JQcm9maWxlLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUucG9zaXRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5jb3VudHJ5Y29kZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5waG9uZW51bWJlcixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5saW5rZWRpblxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25BbGVydCgnVXBkYXRlIFZlbmRvciBQcm9maWxlICBTdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLkNhbmNsZSgpO1xuXG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UudXBkYXRlVmVuZG9yUHJvZmlsZSh2ZW5kb3IpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkw7XG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9SZXNldCBQYXNzd29yZFxuICAgIG15UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVzZXRQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25TdWJtaXRQYXNzd29yZCh2YWx1ZTogT2JqZWN0KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teVBhc3N3b3JkRm9ybS5yZXNldCgpO1xuXG5cbiAgICAgICAgdGhpcy5vbkFsZXJ0KCdSZXNldCBQYXNzd29yZCBBY2NvdW50IFN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJyk7XG4gICAgICAgIC8vIHRoaXMuX3ZlbmRvclNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodmFsdWUpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdSZXNldCBQYXNzd29yZCBBY2NvdW50IFN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJyk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdSZXNldCBQYXNzd29yZCBBY2NvdW50IEZhaWxlZCcsICdkYW5nZXInKTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBDYW5jbGUoKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB9XG5cblxuICAgIGdvVG9FZGl0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92ZW5kb3IvcHJvZmlsZS9lZGl0J10pO1xuICAgIH1cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
