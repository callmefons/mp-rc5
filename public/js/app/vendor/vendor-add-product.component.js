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
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(10)])],
            logo: [''],
            description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100)])],
            shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            minrequirement: ['', forms_1.Validators.maxLength(100)],
            termsncond: ['', forms_1.Validators.maxLength(100)],
            youtube: [''],
            industries: [''],
            languages: [''],
            departments: [''],
            categories: [''],
            features: [''],
            screenshots: [''],
            purchase_link: [''],
            thai_description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100)])],
            thai_shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])]
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
        console.log(tempProduct);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQStELDJCQUEyQixDQUFDLENBQUE7QUFDM0Ysc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFHdkQsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFXMUU7SUErREksbUNBQW9CLEdBQWdCLEVBQ2hCLGVBQStCLEVBQy9CLE1BQWMsRUFDZCxVQUFrQztRQUhsQyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUEvRHRELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFPeEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBSzdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFVLEVBQUUsQ0FBQztRQUVoQyxtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFJL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQVks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QVk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBRUwsQ0FBQztJQWxtQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLDZDQUE2QztZQUMxRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDOztpQ0FBQTtJQStsQkYsZ0NBQUM7QUFBRCxDQTdsQkEsQUE2bEJDLElBQUE7QUE3bEJZLGlDQUF5Qiw0QkE2bEJyQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC12ZW5kb3ItYWRkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckFkZFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBhcHBzOiBhbnlbXTtcblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcbiAgICB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvZHVjdDogUHJvZHVjdFtdO1xuXG4gICAgbXlGb3JtSW5kdXN0cmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gICAgbXlGb3JtQ2F0ZWdvcmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG5cbiAgICBteUZvcm1Mb2dvOiBhbnk7XG4gICAgZmlsZUNob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtU2NyZWVuc2hvdHM6IGFueVtdID0gW107XG4gICAgc2NyZWVuc2hvdHNDaG9zZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogNTAwXG4gICAgfTtcblxuICAgIG90aGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnkgPSBbXTtcblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbJ1RIQicsICdTREcnLCAnVVNEJywgJ0FVRCddLFxuICAgICAgICBwcmljaW5nX21vZGVsOiBbXG4gICAgICAgICAgICB7J2lkJzogMSwgJ25hbWUnOiAnRnJlZW1pdW0gVmVyc2lvbid9LFxuICAgICAgICAgICAgeydpZCc6IDIsICduYW1lJzogJ01vbnRobHkgU3Vic2NyaXB0aW9uJ30sXG4gICAgICAgICAgICB7J2lkJzogMywgJ25hbWUnOiAnWWVhcmx5IFN1YnNjcmlwdGlvbid9LFxuICAgICAgICAgICAgeydpZCc6IDQsICduYW1lJzogJ0xpZmV0aW1lIExpY2Vuc2UnfSxcbiAgICAgICAgICAgIHsnaWQnOiA1LCAnbmFtZSc6ICdPdGhlcid9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgbXlGb3JtVXJsOiBzdHJpbmcgPSAnJztcbiAgICBlbWJlZFVybDogU2FmZVJlc291cmNlVXJsXG5cblxuICAgIC8vQ2FsbGJhY2sgYWZ0ZXIgYWRkZWQgcHJvZHVjdFxuICAgIGFkZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzZWxlY3RlZExhbmc6IHN0cmluZyA9ICdlbic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApXSldLFxuICAgICAgICAgICAgbG9nbzogWycnXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV0pXSxcbiAgICAgICAgICAgIHNob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldKV0sXG4gICAgICAgICAgICBtaW5yZXF1aXJlbWVudDogWycnLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDApXSxcbiAgICAgICAgICAgIHRlcm1zbmNvbmQ6IFsnJywgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV0sXG4gICAgICAgICAgICB5b3V0dWJlOiBbJyddLFxuICAgICAgICAgICAgaW5kdXN0cmllczogWycnXSxcbiAgICAgICAgICAgIGxhbmd1YWdlczogWycnXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRzOiBbJyddLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogWycnXSxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbJyddLFxuICAgICAgICAgICAgc2NyZWVuc2hvdHM6IFsnJ10sXG4gICAgICAgICAgICBwdXJjaGFzZV9saW5rOiBbJyddLFxuICAgICAgICAgICAgdGhhaV9kZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMCldKV0sXG4gICAgICAgICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldKV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgICAgIHRoaXMudGFncyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMudGFncyQuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZyA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuZXh0cmFzZXJ2aWNlc1RhZyA9IHByb2R1Y3RfdGFncy5leHRyYXNlcnZpY2VzO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgIH1cblxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcblxuICAgICAgICAvL1NlbGVjdGVkIHR5cGUgZmlsZSBvbmx5XG4gICAgICAgIHRoaXMuY2hhbmdlVG9UeXBlRmlsZSh0aGlzLm15Rm9ybUxvZ28sICdzaW5nbGUnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUb1R5cGVGaWxlKHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsICdtdWx0aXBsZScpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvUmVzdWx0LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5zaG9ydGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubWlucmVxdWlyZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50ZXJtc25jb25kLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1VcmwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90c1Jlc3VsdCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnB1cmNoYXNlX2xpbmssXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RfdGhhaSA9IG5ldyBQcm9kdWN0KFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGhhaV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcblxuXG4gICAgICAgIGxldCB0ZW1wUHJvZHVjdDogYW55W10gPSBbXTtcbiAgICAgICAgdGVtcFByb2R1Y3QucHVzaChwcm9kdWN0LCBwcm9kdWN0X3RoYWkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wUHJvZHVjdCk7XG5cbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuYWRkUHJvZHVjdCh0ZW1wUHJvZHVjdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hJbmR1c3RyaWVzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcy5wdXNoKHZhbHVlLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtSW5kdXN0cmllcy5pbmRleE9mKHZhbHVlLmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hMYW5ndWFnZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2godmFsdWUuZGJpZCk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtTGFuZ3VhZ2VzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hEZXBhcnRtZW50cyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1EZXBhcnRtZW50cy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hDYXRlZ29yaWVzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveEV4dHJhc2VydmljZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5ld0ZlYXR1cmU6IHN0cmluZztcbiAgICBuZXdUaGFpRmVhdHVyZTogc3RyaW5nO1xuXG4gICAgTUFYX1NJWkVfRkVBVFVSRTogbnVtYmVyID0gNTtcblxuICAgIG9uQWRkTmV3RmVhdHVyZShuZXdGZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIGlmIChuZXdGZWF0dXJlICYmIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLmxlbmd0aCA8IHRoaXMuTUFYX1NJWkVfRkVBVFVSRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1RoYWlGZWF0dXJlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIGlmIChuZXdGZWF0dXJlICYmIHRoaXMubXlGb3JtRmVhdHVyZXMubGVuZ3RoIDwgdGhpcy5NQVhfU0laRV9GRUFUVVJFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGZWF0dXJlID0gJyc7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVsZXRlRmVhdHVyZShmZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIGxldCBqID0gdGhpcy5teUZvcm1GZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChqICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcmVlbnNob3RzUmVuZGVyOiBhbnlbXSA9IFtdO1xuXG4gICAgZmlsZUNoYW5nZVNjcmVlbnNob3RzKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChpbWFnZVJlc3VsdCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNob3RzUmVuZGVyW2ldID0gdGhpcy5teUZvcm1TY3JlZW5zaG90c1tpXS5kYXRhVVJMO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NyZWVuc2hvdHNSZW5kZXIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtU2NyZWVuc2hvdHMpXG4gICAgfVxuXG5cbiAgICBvbkRlbGV0ZVNjcmVlbnNob3Qoc3JjOiBhbnkpIHtcbiAgICAgICAgbGV0IGogPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVNjcmVlbnNob3RzLCB7J2RhdGFVUkwnOiBzcmN9KTtcbiAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLmluZGV4T2Yoc3JjKTtcblxuICAgICAgICBpZiAoaiAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNob3RzUmVuZGVyLnNwbGljZShqLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NyZWVuc2hvdHNSZW5kZXIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybVNjcmVlbnNob3RzKTtcbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQ7XG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbXlGb3JtTG9nb1Jlc3VsdDogYW55O1xuICAgIG15Rm9ybVNjcmVlbnNob3RzUmVzdWx0OiBhbnkgW10gPSBbXTtcblxuICAgIHByaXZhdGUgY2hhbmdlVG9UeXBlRmlsZShkYXRhOiBhbnksIHR5cGU6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ29SZXN1bHQgPSBkYXRhLmZpbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlJ211bHRpcGxlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90c1Jlc3VsdFtpXSA9IGRhdGFbaV0uZmlsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vUHJpY2luZyBtb2RlbFxuXG4gICAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93WWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0xpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd090aGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbGxJZDogYW55O1xuICAgIGFsbE1vZGVsOiBhbnk7XG5cbiAgICBjaGVja0FsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJZCA9IF8ubWFwKHRoaXMub3B0aW9ucy5wcmljaW5nX21vZGVsLCAnaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxJZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHRoaXMuYWxsSWRbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB0aGlzLmFsbE1vZGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsSWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1vZGVsID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmlkXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTW9udGhseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICdQcmljZSByYW5nZScgJiYgbmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInBsYW5cIjogdmFsdWUsXG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IHRoaXMub3B0aW9ucy5jdXJyZW5jeVswXSxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRQcmljZShpZDogYW55LCBwcmljZV9zdGFydDogYW55LCBwcmljZV9lbmQ6IGFueSwgY3VycmVuY3k6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cbiAgICBvbklucHV0RGF5KGlkOiBhbnksIGRheTogYW55KSB7XG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgXCJkYXlcIjogZGF5LFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogb3RoZXJfbW9kZWxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgICB9XG5cblxuICAgIHZpZGVvVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVtYmVkVmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbllvdXR1YmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBteVVybDogc3RyaW5nID0gJyc7XG5cbiAgICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcblxuICAgICAgICB0aGlzLm15VXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1iZWRWaWRlbyA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW9UeXBlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoVmFsaWRhdGlvblNlcnZpY2UueW91dHViZVBhcnNlcih1cmwpICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1R5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1iZWRVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub25Zb3V0dWJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbllvdXR1YmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVWaWRlbygpIHtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWJlZFZpZGVvID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgdGhhaUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZyA9IGxhbmc7XG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
