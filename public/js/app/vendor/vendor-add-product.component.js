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
var validation_service_1 = require('../shared/validation/validation.service');
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
        this.MAX_SIZE_FEATURE = 5;
        this.screenshotsRender = [];
        this.myFormScreenshotsResult = [];
        //Pricing model
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
        this.videoType = false;
        this.embedVideo = false;
        this.onYoutube = false;
        this.myUrl = '';
        this.thaiInput = false;
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100)])],
            logo: [''],
            description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])],
            minrequirement: ['', forms_1.Validators.maxLength(1000)],
            termsncond: ['', forms_1.Validators.maxLength(1000)],
            youtube: [''],
            industries: [''],
            languages: [''],
            departments: [''],
            categories: [''],
            features: [''],
            screenshots: [''],
            purchase_link: [''],
            thai_description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            thai_shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])]
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
        //Selected type file only
        this.changeToTypeFile(this.myFormLogo, 'single');
        this.changeToTypeFile(this.myFormScreenshots, 'multiple');
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogoResult, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshotsResult, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        var product_thai = new product_model_1.Product(null, null, null, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, null, null, null, null, null, null, null, this.myFormThaiFeatures, null, null, null, null);
        var tempProduct = [];
        tempProduct.push(product, product_thai);
        //console.log(tempProduct);
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
                if (newFeature && this.myFormThaiFeatures.length < this.MAX_SIZE_FEATURE) {
                    this.myFormThaiFeatures.push(newFeature);
                    this.newThaiFeature = '';
                }
                break;
            case 'en':
                if (newFeature && this.myFormFeatures.length < this.MAX_SIZE_FEATURE) {
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
        this.myFormScreenshots.push(imageResult);
        for (var i = 0; i < this.myFormScreenshots.length; i++) {
            this.screenshotsRender[i] = this.myFormScreenshots[i].dataURL;
        }
        this.screenshotsChosen = true;
        // console.log(this.screenshotsRender)
        // console.log(this.myFormScreenshots)
    };
    VendorAddProductComponent.prototype.onDeleteScreenshot = function (src) {
        var j = _.findIndex(this.myFormScreenshots, { 'dataURL': src });
        var i = this.myFormScreenshots.indexOf(src);
        if (j != -1) {
            this.myFormScreenshots.splice(j, 1);
            this.screenshotsRender.splice(j, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
        // console.log(this.screenshotsRender);
        // console.log(this.myFormScreenshots);
    };
    VendorAddProductComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult;
        this.myFormLogoRender = this.myFormLogo.dataURL;
        this.fileChosen = true;
    };
    VendorAddProductComponent.prototype.changeToTypeFile = function (data, type) {
        switch (type) {
            case 'single':
                this.myFormLogoResult = data.file;
                break;
            case 'multiple':
                for (var i = 0; i < data.length; i++) {
                    this.myFormScreenshotsResult[i] = data[i].file;
                }
                break;
        }
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
        var _this = this;
        this.myUrl = '';
        this.embedVideo = true;
        this.videoType = true;
        if (url !== null) {
            if (validation_service_1.ValidationService.youtubeParser(url) != false) {
                this.videoType = true;
                var id = url.split('=', 2)[1];
                this.myFormUrl = url;
                this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
            }
            else {
                this.videoType = false;
                this.onYoutube = true;
                setTimeout(function () {
                    _this.onYoutube = false;
                }, 3000);
            }
        }
    };
    VendorAddProductComponent.prototype.deleteVideo = function () {
        this.videoType = false;
        this.embedVideo = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQStELDJCQUEyQixDQUFDLENBQUE7QUFDM0Ysc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFHdkQsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFXMUU7SUErREksbUNBQW9CLEdBQWdCLEVBQ2hCLGVBQStCLEVBQy9CLE1BQWMsRUFDZCxVQUFrQztRQUhsQyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUEvRHRELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFPeEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBSzdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFVLEVBQUUsQ0FBQztRQUVoQyxtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFJL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQVks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QUFDO0lBSUQsdURBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBRUwsQ0FBQztJQXJtQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLDZDQUE2QztZQUMxRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDOztpQ0FBQTtJQWttQkYsZ0NBQUM7QUFBRCxDQWhtQkEsQUFnbUJDLElBQUE7QUFobUJZLGlDQUF5Qiw0QkFnbUJyQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC12ZW5kb3ItYWRkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckFkZFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBhcHBzOiBhbnlbXTtcblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcbiAgICB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvZHVjdDogUHJvZHVjdFtdO1xuXG4gICAgbXlGb3JtSW5kdXN0cmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gICAgbXlGb3JtQ2F0ZWdvcmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG5cbiAgICBteUZvcm1Mb2dvOiBhbnk7XG4gICAgZmlsZUNob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtU2NyZWVuc2hvdHM6IGFueVtdID0gW107XG4gICAgc2NyZWVuc2hvdHNDaG9zZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogNTAwXG4gICAgfTtcblxuICAgIG90aGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnkgPSBbXTtcblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbJ1RIQicsICdTREcnLCAnVVNEJywgJ0FVRCddLFxuICAgICAgICBwcmljaW5nX21vZGVsOiBbXG4gICAgICAgICAgICB7J2lkJzogMSwgJ25hbWUnOiAnRnJlZW1pdW0gVmVyc2lvbid9LFxuICAgICAgICAgICAgeydpZCc6IDIsICduYW1lJzogJ01vbnRobHkgU3Vic2NyaXB0aW9uJ30sXG4gICAgICAgICAgICB7J2lkJzogMywgJ25hbWUnOiAnWWVhcmx5IFN1YnNjcmlwdGlvbid9LFxuICAgICAgICAgICAgeydpZCc6IDQsICduYW1lJzogJ0xpZmV0aW1lIExpY2Vuc2UnfSxcbiAgICAgICAgICAgIHsnaWQnOiA1LCAnbmFtZSc6ICdPdGhlcid9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgbXlGb3JtVXJsOiBzdHJpbmcgPSAnJztcbiAgICBlbWJlZFVybDogU2FmZVJlc291cmNlVXJsXG5cblxuICAgIC8vQ2FsbGJhY2sgYWZ0ZXIgYWRkZWQgcHJvZHVjdFxuICAgIGFkZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzZWxlY3RlZExhbmc6IHN0cmluZyA9ICdlbic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV0pXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSldLFxuICAgICAgICAgICAgc2hvcnRkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMCldKV0sXG4gICAgICAgICAgICBtaW5yZXF1aXJlbWVudDogWycnLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICAgICAgICB0ZXJtc25jb25kOiBbJycsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSxcbiAgICAgICAgICAgIHlvdXR1YmU6IFsnJ10sXG4gICAgICAgICAgICBpbmR1c3RyaWVzOiBbJyddLFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbJyddLFxuICAgICAgICAgICAgZGVwYXJ0bWVudHM6IFsnJ10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbJyddLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFsnJ10sXG4gICAgICAgICAgICBzY3JlZW5zaG90czogWycnXSxcbiAgICAgICAgICAgIHB1cmNoYXNlX2xpbms6IFsnJ10sXG4gICAgICAgICAgICB0aGFpX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldKV0sXG4gICAgICAgICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFkZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLnRhZ3MkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnRhZ3MkLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBwcm9kdWN0X3RhZ3MubGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcgPSBwcm9kdWN0X3RhZ3MuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgICB0aGlzLmV4dHJhc2VydmljZXNUYWcgPSBwcm9kdWN0X3RhZ3MuZXh0cmFzZXJ2aWNlcztcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XG5cbiAgICAgICAgLy9TZWxlY3RlZCB0eXBlIGZpbGUgb25seVxuICAgICAgICB0aGlzLmNoYW5nZVRvVHlwZUZpbGUodGhpcy5teUZvcm1Mb2dvLCAnc2luZ2xlJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlVG9UeXBlRmlsZSh0aGlzLm15Rm9ybVNjcmVlbnNob3RzLCAnbXVsdGlwbGUnKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nb1Jlc3VsdCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHNSZXN1bHQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0X3RoYWkgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX3Nob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICk7XG5cblxuICAgICAgICBsZXQgdGVtcFByb2R1Y3Q6IGFueVtdID0gW107XG4gICAgICAgIHRlbXBQcm9kdWN0LnB1c2gocHJvZHVjdCwgcHJvZHVjdF90aGFpKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRlbXBQcm9kdWN0KTtcblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5hZGRQcm9kdWN0KHRlbXBQcm9kdWN0KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXG4gICAgfVxuXG4gICAgb25DaGVja2JveEluZHVzdHJpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveExhbmd1YWdlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMucHVzaCh2YWx1ZS5kYmlkKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveENhdGVnb3JpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmV3RmVhdHVyZTogc3RyaW5nO1xuICAgIG5ld1RoYWlGZWF0dXJlOiBzdHJpbmc7XG5cbiAgICBNQVhfU0laRV9GRUFUVVJFOiBudW1iZXIgPSA1O1xuXG4gICAgb25BZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUgJiYgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMubGVuZ3RoIDwgdGhpcy5NQVhfU0laRV9GRUFUVVJFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGhhaUZlYXR1cmUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUgJiYgdGhpcy5teUZvcm1GZWF0dXJlcy5sZW5ndGggPCB0aGlzLk1BWF9TSVpFX0ZFQVRVUkUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZlYXR1cmUgPSAnJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGVGZWF0dXJlKGZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgbGV0IGogPSB0aGlzLm15Rm9ybUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGogIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2NyZWVuc2hvdHNSZW5kZXI6IGFueVtdID0gW107XG5cbiAgICBmaWxlQ2hhbmdlU2NyZWVuc2hvdHMoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGltYWdlUmVzdWx0KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtU2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHNSZW5kZXJbaV0gPSB0aGlzLm15Rm9ybVNjcmVlbnNob3RzW2ldLmRhdGFVUkw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcmVlbnNob3RzQ2hvc2VuID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY3JlZW5zaG90c1JlbmRlcilcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1TY3JlZW5zaG90cylcbiAgICB9XG5cblxuICAgIG9uRGVsZXRlU2NyZWVuc2hvdChzcmM6IGFueSkge1xuICAgICAgICBsZXQgaiA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsIHsnZGF0YVVSTCc6IHNyY30pO1xuICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuaW5kZXhPZihzcmMpO1xuXG4gICAgICAgIGlmIChqICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHNSZW5kZXIuc3BsaWNlKGosIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY3JlZW5zaG90c1JlbmRlcik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtU2NyZWVuc2hvdHMpO1xuICAgIH1cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBpbWFnZVJlc3VsdDtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvUmVuZGVyID0gdGhpcy5teUZvcm1Mb2dvLmRhdGFVUkw7XG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbXlGb3JtTG9nb1JlbmRlcjphbnk7XG4gICAgbXlGb3JtTG9nb1Jlc3VsdDogYW55O1xuICAgIG15Rm9ybVNjcmVlbnNob3RzUmVzdWx0OiBhbnkgW10gPSBbXTtcblxuICAgIHByaXZhdGUgY2hhbmdlVG9UeXBlRmlsZShkYXRhOiBhbnksIHR5cGU6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ29SZXN1bHQgPSBkYXRhLmZpbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlJ211bHRpcGxlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90c1Jlc3VsdFtpXSA9IGRhdGFbaV0uZmlsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vUHJpY2luZyBtb2RlbFxuXG4gICAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93WWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0xpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd090aGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbGxJZDogYW55O1xuICAgIGFsbE1vZGVsOiBhbnk7XG5cbiAgICBjaGVja0FsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJZCA9IF8ubWFwKHRoaXMub3B0aW9ucy5wcmljaW5nX21vZGVsLCAnaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxJZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHRoaXMuYWxsSWRbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB0aGlzLmFsbE1vZGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsSWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmlkXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdQcmljZSByYW5nZScgJiYgbmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInBsYW5cIjogdmFsdWUsXG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IHRoaXMub3B0aW9ucy5jdXJyZW5jeVswXSxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRQcmljZShpZDogYW55LCBwcmljZV9zdGFydDogYW55LCBwcmljZV9lbmQ6IGFueSwgY3VycmVuY3k6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cbiAgICBvbklucHV0RGF5KGlkOiBhbnksIGRheTogYW55KSB7XG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgXCJkYXlcIjogZGF5LFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogb3RoZXJfbW9kZWxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cblxuICAgIHZpZGVvVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVtYmVkVmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbllvdXR1YmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBteVVybDogc3RyaW5nID0gJyc7XG5cbiAgICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcblxuICAgICAgICB0aGlzLm15VXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1iZWRWaWRlbyA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW9UeXBlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoVmFsaWRhdGlvblNlcnZpY2UueW91dHViZVBhcnNlcih1cmwpICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1R5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1iZWRVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub25Zb3V0dWJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbllvdXR1YmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVWaWRlbygpIHtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWJlZFZpZGVvID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgdGhhaUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZyA9IGxhbmc7XG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
