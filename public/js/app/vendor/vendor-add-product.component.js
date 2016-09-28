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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var product_service_1 = require("../shared/api-service/product/product.service");
var product_model_1 = require("../shared/models/product.model");
var VendorAddProductComponent = (function () {
    function VendorAddProductComponent(_fb, _productService, router, _sanitizer) {
        this._fb = _fb;
        this._productService = _productService;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.loading = true;
        this.industriesTag = [];
        this.categoriesTag = [];
        this.languagesTag = [];
        this.departmentsTag = [];
        this.extraservicesTag = [];
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormFeatures = [];
        this.myFormThaiFeatures = [];
        this.myFormLogo = '';
        this.fileChosen = false;
        this.myFormScreenshots = [];
        this.screenshotsChosen = false;
        this.resizeOptions = {
            resizeMaxHeight: 500,
            resizeMaxWidth: 500
        };
        this.other = false;
        this.myFormPricingModel = [];
        this.options = {
            currency: ['THB', 'SDG', 'USD', 'AUD'],
            pricing_model: [
                { 'id': 1, 'name': 'Freemium Version' },
                { 'id': 2, 'name': 'Monthly Subscription' },
                { 'id': 3, 'name': 'Yearly Subscription' },
                { 'id': 4, 'name': 'Lifetime License' },
                { 'id': 5, 'name': 'Other' }
            ]
        };
        this.myFormUrl = '';
        //Callback after added product
        this.added = false;
        this.selectedLang = 'en';
        this.showMonthly = false;
        this.showYearly = false;
        this.showLifetime = false;
        this.showFreeService = false;
        this.showOther = false;
        this.singlepriceMonthly = false;
        this.pricerangeMonthly = false;
        this.singlepriceYearly = false;
        this.pricerangeYearly = false;
        this.singlepriceLifetime = false;
        this.pricerangeLifetime = false;
        this.checkAll = false;
        this.video = false;
        this.thaiInput = false;
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.required],
            logo: [''],
            description: ['', forms_1.Validators.required],
            shortdescription: ['', forms_1.Validators.required],
            minrequirement: [''],
            termsncond: [''],
            youtube: [''],
            industries: [''],
            languages: [''],
            departments: [''],
            categories: [''],
            features: [''],
            screenshots: [''],
            purchase_link: [''],
            thai_description: ['', forms_1.Validators.required],
            thai_shortdescription: ['', forms_1.Validators.required]
        });
    }
    VendorAddProductComponent.prototype.ngOnInit = function () {
        this.added = false;
        this.getProductTags();
    };
    VendorAddProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VendorAddProductComponent.prototype.getProductTags = function () {
        var _this = this;
        this.tags$ = this._productService.getProductTags();
        this.sub = this.tags$.subscribe(function (product_tags) {
            _this.industriesTag = product_tags.industries,
                _this.categoriesTag = product_tags.categories,
                _this.languagesTag = product_tags.languages,
                _this.departmentsTag = product_tags.departments;
            _this.extraservicesTag = product_tags.extraservices;
            _this.loading = false;
        }),
            function (error) { return _this.errorMessage = error; };
    };
    VendorAddProductComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        var product_thai = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormThaiFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        var tempProduct = [];
        tempProduct.push(product, product_thai);
        this._productService.addProduct(tempProduct)
            .subscribe(function (res) {
            _this.added = true;
            _this.myForm.reset();
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorAddProductComponent.prototype.onCheckboxIndustries = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormIndustries.push(value.id);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormIndustries.indexOf(value.id);
            if (i != -1) {
                this.myFormIndustries.splice(i, 1);
            }
        }
    };
    VendorAddProductComponent.prototype.onCheckboxLanguages = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormLanguages.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormLanguages.indexOf(value.dbid);
            if (i != -1) {
                this.myFormLanguages.splice(i, 1);
            }
        }
    };
    VendorAddProductComponent.prototype.onCheckboxDepartments = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormDepartments.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormDepartments.indexOf(value.dbid);
            if (i != -1) {
                this.myFormDepartments.splice(i, 1);
            }
        }
    };
    VendorAddProductComponent.prototype.onCheckboxCategories = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormCategories.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormCategories.indexOf(value.dbid);
            if (i != -1) {
                this.myFormCategories.splice(i, 1);
            }
        }
    };
    VendorAddProductComponent.prototype.onCheckboxExtraservices = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormExtraservices.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormExtraservices.indexOf(value.dbid);
            if (i != -1) {
                this.myFormExtraservices.splice(i, 1);
            }
        }
    };
    VendorAddProductComponent.prototype.onAddNewFeature = function (newFeature, lang) {
        switch (lang) {
            case 'th':
                if (newFeature) {
                    this.myFormThaiFeatures.push(newFeature);
                    this.newThaiFeature = '';
                }
                break;
            case 'en':
                if (newFeature) {
                    this.myFormFeatures.push(newFeature);
                    this.newFeature = '';
                }
                break;
        }
    };
    VendorAddProductComponent.prototype.onDeleteFeature = function (feature, lang) {
        switch (lang) {
            case 'th':
                var i = this.myFormThaiFeatures.indexOf(feature);
                if (i != -1) {
                    this.myFormThaiFeatures.splice(i, 1);
                }
                break;
            case 'en':
                var j = this.myFormFeatures.indexOf(feature);
                if (j != -1) {
                    this.myFormFeatures.splice(j, 1);
                }
                break;
        }
    };
    VendorAddProductComponent.prototype.fileChangeScreenshots = function (imageResult) {
        this.myFormScreenshots.push(imageResult.resized.dataURL);
        this.screenshotsChosen = true;
    };
    VendorAddProductComponent.prototype.onDeleteScreenshot = function (src) {
        var i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
    };
    VendorAddProductComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    };
    VendorAddProductComponent.prototype.onCheckboxPricingModel = function (value, event) {
        if (event.currentTarget.checked == true) {
            if (value == 0) {
                this.showMonthly = true;
                this.showYearly = true;
                this.showLifetime = true;
                this.showFreeService = true;
                this.showOther = true;
                this.allId = _.map(this.options.pricing_model, 'id');
                this.allModel = _.map(this.options.pricing_model, 'name');
                this.checkAll = true;
                for (var i = 0; i < this.allId.length; i++) {
                    this.myFormPricingModel.push({
                        'id': this.allId[i],
                        'model': this.allModel[i],
                        "plan": '',
                        "price_start": '',
                        "price_end": '',
                        "currency": '',
                        "day": '',
                        "other_model": ''
                    });
                }
            }
            else {
                if (value.name === 'Yearly Subscription') {
                    this.showYearly = true;
                }
                if (value.name === 'Monthly Subscription') {
                    this.showMonthly = true;
                }
                if (value.name === 'Lifetime License') {
                    this.showLifetime = true;
                }
                if (value.name === 'Freemium Version') {
                    this.showFreeService = true;
                }
                if (value.name === 'Other') {
                    this.showOther = true;
                }
                this.myFormPricingModel.push({
                    'id': value.id,
                    'model': value.name,
                    "plan": '',
                    "price_start": '',
                    "price_end": '',
                    "currency": '',
                    "day": '',
                    "other_model": ''
                });
            }
        }
        if (event.currentTarget.checked == false) {
            if (value == 0) {
                this.myFormPricingModel = [];
                this.allId = [];
                this.allModel = [];
                this.checkAll = false;
                this.showYearly = false;
                this.singlepriceYearly = false;
                this.pricerangeYearly = false;
                this.showMonthly = false;
                this.singlepriceMonthly = false;
                this.pricerangeMonthly = false;
                this.showLifetime = false;
                this.singlepriceLifetime = false;
                this.pricerangeLifetime = false;
                this.showFreeService = false;
                this.showOther = false;
            }
            else {
                if (value.name === 'Yearly Subscription') {
                    this.showYearly = false;
                    this.singlepriceYearly = false;
                    this.pricerangeYearly = false;
                }
                if (value.name === 'Monthly Subscription') {
                    this.showMonthly = false;
                    this.singlepriceMonthly = false;
                    this.pricerangeMonthly = false;
                }
                if (value.name === 'Lifetime License') {
                    this.showLifetime = false;
                    this.singlepriceLifetime = false;
                    this.pricerangeLifetime = false;
                }
                if (value.name === 'Freemium Version') {
                    this.showFreeService = false;
                }
                if (value.name === 'Other') {
                    this.showOther = false;
                }
                var i = _.findIndex(this.myFormPricingModel, ['id', value.id]);
                if (i != -1) {
                    this.myFormPricingModel.splice(i, 1);
                }
            }
        }
    };
    VendorAddProductComponent.prototype.onSelectPricingPlan = function (value, id, name) {
        if (value === 'Single Price' && name === 'Monthly Subscription') {
            this.singlepriceMonthly = true;
            this.pricerangeMonthly = false;
        }
        if (value === 'Price range' && name === 'Monthly Subscription') {
            this.singlepriceMonthly = false;
            this.pricerangeMonthly = true;
        }
        if (value === 'Single Price' && name === 'Yearly Subscription') {
            this.singlepriceYearly = true;
            this.pricerangeYearly = false;
        }
        if (value === 'Price range' && name === 'Yearly Subscription') {
            this.singlepriceYearly = false;
            this.pricerangeYearly = true;
        }
        if (value === 'Single Price' && name === 'Lifetime License') {
            this.singlepriceLifetime = true;
            this.pricerangeLifetime = false;
        }
        if (value === 'Price range' && name === 'Lifetime License') {
            this.singlepriceLifetime = false;
            this.pricerangeLifetime = true;
        }
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "plan": value,
            "price_start": '',
            "price_end": '',
            "currency": this.options.currency[0],
            "day": '',
            "other_model": ''
        });
        // console.log(this.myFormPricingModel);
    };
    VendorAddProductComponent.prototype.onInputPrice = function (id, price_start, price_end, currency) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": price_start,
            "price_end": price_end,
            "currency": currency,
            "day": '',
            "other_model": ''
        });
        // console.log(this.myFormPricingModel);
    };
    VendorAddProductComponent.prototype.onInputDay = function (id, day) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": day,
            "other_model": ''
        });
        // console.log(this.myFormPricingModel);
    };
    VendorAddProductComponent.prototype.onInputOtherModel = function (id, other_model) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": other_model
        });
        // console.log(this.myFormPricingModel);
    };
    VendorAddProductComponent.prototype.embedYoutube = function (url) {
        this.video = true;
        var id = url.split('=', 2)[1];
        this.myFormUrl = url;
        this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
    };
    VendorAddProductComponent.prototype.deleteVideo = function () {
        this.video = false;
        this.myFormUrl = '';
        this.embedUrl = null;
    };
    VendorAddProductComponent.prototype.onCancle = function () {
        this.router.navigate(["/vendor/dashboard"]);
    };
    VendorAddProductComponent.prototype.onChangeLanguaeFrom = function (lang) {
        this.selectedLang = lang;
        switch (lang) {
            case 'th':
                this.thaiInput = true;
                break;
            case 'en':
                this.thaiInput = false;
                break;
            default:
                this.thaiInput = false;
        }
    };
    VendorAddProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor-add-product',
            templateUrl: 'templates/vendor-add-product.component.html',
            styleUrls: ['styles/vendor-add-product.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService, router_1.Router, platform_browser_1.DomSanitizationService])
    ], VendorAddProductComponent);
    return VendorAddProductComponent;
}());
exports.VendorAddProductComponent = VendorAddProductComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQStELDJCQUEyQixDQUFDLENBQUE7QUFDM0Ysc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFjdkQ7SUErREksbUNBQW9CLEdBQWdCLEVBQ2hCLGVBQStCLEVBQy9CLE1BQWMsRUFDZCxVQUFrQztRQUhsQyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUEvRHRELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFPeEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBSzdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFVLEVBQUUsQ0FBQztRQUVoQyxtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFHL0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixzQkFBaUIsR0FBWSxLQUFL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WUFDVixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQztZQUNWO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFFTCxDQUFDO0lBbGlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsNkNBQTZDO1lBQzFELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1NBQ3pELENBQUM7O2lDQUFBO0lBZ2lCRixnQ0FBQztBQUFELENBOWhCQSxBQThoQkMsSUFBQTtBQTloQlksaUNBQXlCLDRCQThoQnJDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RvbVNhbml0aXphdGlvblNlcnZpY2UsIFNhZmVSZXNvdXJjZVVybCwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SW1hZ2VVcGxvYWQsIEltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWltYWdldXBsb2FkL2luZGV4JztcblxuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC12ZW5kb3ItYWRkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckFkZFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBhcHBzOiBhbnlbXTtcblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcbiAgICB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvZHVjdDogUHJvZHVjdFtdO1xuXG4gICAgbXlGb3JtSW5kdXN0cmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gICAgbXlGb3JtQ2F0ZWdvcmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG5cbiAgICBteUZvcm1Mb2dvOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlQ2hvc2VuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBteUZvcm1TY3JlZW5zaG90czogYW55W10gPSBbXTtcbiAgICBzY3JlZW5zaG90c0Nob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIHJlc2l6ZU1heFdpZHRoOiA1MDBcbiAgICB9O1xuXG4gICAgb3RoZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBteUZvcm1QcmljaW5nTW9kZWw6IGFueSA9IFtdO1xuXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ10sXG4gICAgICAgIHByaWNpbmdfbW9kZWw6IFtcbiAgICAgICAgICAgIHsnaWQnOiAxLCAnbmFtZSc6ICdGcmVlbWl1bSBWZXJzaW9uJ30sXG4gICAgICAgICAgICB7J2lkJzogMiwgJ25hbWUnOiAnTW9udGhseSBTdWJzY3JpcHRpb24nfSxcbiAgICAgICAgICAgIHsnaWQnOiAzLCAnbmFtZSc6ICdZZWFybHkgU3Vic2NyaXB0aW9uJ30sXG4gICAgICAgICAgICB7J2lkJzogNCwgJ25hbWUnOiAnTGlmZXRpbWUgTGljZW5zZSd9LFxuICAgICAgICAgICAgeydpZCc6IDUsICduYW1lJzogJ090aGVyJ31cbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBteUZvcm1Vcmw6IHN0cmluZyA9ICcnO1xuICAgIGVtYmVkVXJsOiBTYWZlUmVzb3VyY2VVcmxcblxuXG4gICAgLy9DYWxsYmFjayBhZnRlciBhZGRlZCBwcm9kdWN0XG4gICAgYWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNlbGVjdGVkTGFuZzogc3RyaW5nID0gJ2VuJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBsb2dvOiBbJyddLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBzaG9ydGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbWlucmVxdWlyZW1lbnQ6IFsnJ10sXG4gICAgICAgICAgICB0ZXJtc25jb25kOiBbJyddLFxuICAgICAgICAgICAgeW91dHViZTogWycnXSxcbiAgICAgICAgICAgIGluZHVzdHJpZXM6IFsnJ10sXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50czogWycnXSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnJ10sXG4gICAgICAgICAgICBmZWF0dXJlczogWycnXSxcbiAgICAgICAgICAgIHNjcmVlbnNob3RzOiBbJyddLFxuICAgICAgICAgICAgcHVyY2hhc2VfbGluazogWycnXSxcbiAgICAgICAgICAgIHRoYWlfZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgICAgIHRoaXMudGFncyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMudGFncyQuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZyA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuZXh0cmFzZXJ2aWNlc1RhZyA9IHByb2R1Y3RfdGFncy5leHRyYXNlcnZpY2VzO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgIH1cblxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0X3RoYWkgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGhhaV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUucHVyY2hhc2VfbGluayxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzXG4gICAgICAgICk7XG5cblxuICAgICAgICBsZXQgdGVtcFByb2R1Y3Q6IGFueVtdID0gW107XG4gICAgICAgIHRlbXBQcm9kdWN0LnB1c2gocHJvZHVjdCwgcHJvZHVjdF90aGFpKTtcblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5hZGRQcm9kdWN0KHRlbXBQcm9kdWN0KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXG4gICAgfVxuXG4gICAgb25DaGVja2JveEluZHVzdHJpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveExhbmd1YWdlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMucHVzaCh2YWx1ZS5kYmlkKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveENhdGVnb3JpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmV3RmVhdHVyZTogc3RyaW5nO1xuICAgIG5ld1RoYWlGZWF0dXJlOiBzdHJpbmc7XG5cbiAgICBvbkFkZE5ld0ZlYXR1cmUobmV3RmVhdHVyZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpIHtcblxuICAgICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICBpZiAobmV3RmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1RoYWlGZWF0dXJlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIGlmIChuZXdGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGZWF0dXJlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlbGV0ZUZlYXR1cmUoZmVhdHVyZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpIHtcblxuICAgICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICBsZXQgaiA9IHRoaXMubXlGb3JtRmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZpbGVDaGFuZ2VTY3JlZW5zaG90cyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTCk7XG4gICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuXG4gICAgb25EZWxldGVTY3JlZW5zaG90KHNyYzogYW55KSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1TY3JlZW5zaG90cy5pbmRleE9mKHNyYyk7XG4gICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkw7XG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93WWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0xpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd090aGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbGxJZDogYW55O1xuICAgIGFsbE1vZGVsOiBhbnk7XG5cbiAgICBjaGVja0FsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJZCA9IF8ubWFwKHRoaXMub3B0aW9ucy5wcmljaW5nX21vZGVsLCAnaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxJZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHRoaXMuYWxsSWRbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB0aGlzLmFsbE1vZGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsSWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmlkXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdQcmljZSByYW5nZScgJiYgbmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInBsYW5cIjogdmFsdWUsXG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IHRoaXMub3B0aW9ucy5jdXJyZW5jeVswXSxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRQcmljZShpZDogYW55LCBwcmljZV9zdGFydDogYW55LCBwcmljZV9lbmQ6IGFueSwgY3VycmVuY3k6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cbiAgICBvbklucHV0RGF5KGlkOiBhbnksIGRheTogYW55KSB7XG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgXCJkYXlcIjogZGF5LFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogb3RoZXJfbW9kZWxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cblxuICAgIHZpZGVvOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcbiAgICAgICAgdGhpcy52aWRlbyA9IHRydWU7XG4gICAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgICB0aGlzLm15Rm9ybVVybCA9IHVybDtcbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCk7XG4gICAgfVxuXG4gICAgZGVsZXRlVmlkZW8oKSB7XG4gICAgICAgIHRoaXMudmlkZW8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgdGhhaUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZyA9IGxhbmc7XG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
