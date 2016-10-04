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
        // myFormLogoRender:any;
        // myFormLogoResult: any;
        // myFormScreenshotsResult: any [] = [];
        // private changeToTypeFile(data: any, type: string) {
        //
        //     switch (type) {
        //         case 'single':
        //             this.myFormLogoResult = data.file;
        //             break;
        //         case'multiple':
        //             for (let i = 0; i < data.length; i++) {
        //                 this.myFormScreenshotsResult[i] = data[i].file;
        //             }
        //             break;
        //     }
        //
        // }
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
        //console.log(this.myFormFeatures);
        //Selected type file only
        //this.changeToTypeFile(this.myFormLogo, 'single');
        //this.changeToTypeFile(this.myFormScreenshots, 'multiple');
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myFormThaiFeatures);
        console.log(product);
        this._productService.addProduct(product)
            .subscribe(function (res) {
            console.log(res);
            switch (res.status) {
                case '413':
                    console.log('Max Size');
                    break;
                default:
                    console.log('Server Error');
                    break;
            }
        });
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
        this.myFormScreenshots.push(imageResult.resized.dataURL);
        // for (let i = 0; i < this.myFormScreenshots.length; i++) {
        //     this.screenshotsRender[i] = this.myFormScreenshots[i].dataURL;
        // }
        this.screenshotsChosen = true;
    };
    VendorAddProductComponent.prototype.onDeleteScreenshot = function (src) {
        // let j = _.findIndex(this.myFormScreenshots, {'dataURL': src});
        var i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
    };
    VendorAddProductComponent.prototype.fileChangeLogo = function (imageResult) {
        console.log(imageResult.resized.dataURL);
        this.myFormLogo = imageResult.resized.dataURL;
        //this.myFormLogoRender = this.myFormLogo.dataURL;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQStELDJCQUEyQixDQUFDLENBQUE7QUFDM0Ysc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFHdkQsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFXMUU7SUErREksbUNBQW9CLEdBQWdCLEVBQ2hCLGVBQStCLEVBQy9CLE1BQWMsRUFDZCxVQUFrQztRQUhsQyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUEvRHRELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFPeEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBSzdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFVLEVBQUUsQ0FBQztRQUVoQyxtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFJL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQVks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SSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsdURBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBRUwsQ0FBQztJQXpsQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLDZDQUE2QztZQUMxRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDOztpQ0FBQTtJQXNsQkYsZ0NBQUM7QUFBRCxDQXBsQkEsQUFvbEJDLElBQUE7QUFwbEJZLGlDQUF5Qiw0QkFvbEJyQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC12ZW5kb3ItYWRkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckFkZFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBhcHBzOiBhbnlbXTtcblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcbiAgICB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvZHVjdDogUHJvZHVjdFtdO1xuXG4gICAgbXlGb3JtSW5kdXN0cmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gICAgbXlGb3JtQ2F0ZWdvcmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG5cbiAgICBteUZvcm1Mb2dvOiBhbnk7XG4gICAgZmlsZUNob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtU2NyZWVuc2hvdHM6IGFueVtdID0gW107XG4gICAgc2NyZWVuc2hvdHNDaG9zZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogNTAwXG4gICAgfTtcblxuICAgIG90aGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnkgPSBbXTtcblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbJ1RIQicsICdTREcnLCAnVVNEJywgJ0FVRCddLFxuICAgICAgICBwcmljaW5nX21vZGVsOiBbXG4gICAgICAgICAgICB7J2lkJzogMSwgJ25hbWUnOiAnRnJlZW1pdW0gVmVyc2lvbid9LFxuICAgICAgICAgICAgeydpZCc6IDIsICduYW1lJzogJ01vbnRobHkgU3Vic2NyaXB0aW9uJ30sXG4gICAgICAgICAgICB7J2lkJzogMywgJ25hbWUnOiAnWWVhcmx5IFN1YnNjcmlwdGlvbid9LFxuICAgICAgICAgICAgeydpZCc6IDQsICduYW1lJzogJ0xpZmV0aW1lIExpY2Vuc2UnfSxcbiAgICAgICAgICAgIHsnaWQnOiA1LCAnbmFtZSc6ICdPdGhlcid9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgbXlGb3JtVXJsOiBzdHJpbmcgPSAnJztcbiAgICBlbWJlZFVybDogU2FmZVJlc291cmNlVXJsXG5cblxuICAgIC8vQ2FsbGJhY2sgYWZ0ZXIgYWRkZWQgcHJvZHVjdFxuICAgIGFkZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzZWxlY3RlZExhbmc6IHN0cmluZyA9ICdlbic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV0pXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSldLFxuICAgICAgICAgICAgc2hvcnRkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMCldKV0sXG4gICAgICAgICAgICBtaW5yZXF1aXJlbWVudDogWycnLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICAgICAgICB0ZXJtc25jb25kOiBbJycsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSxcbiAgICAgICAgICAgIHlvdXR1YmU6IFsnJ10sXG4gICAgICAgICAgICBpbmR1c3RyaWVzOiBbJyddLFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbJyddLFxuICAgICAgICAgICAgZGVwYXJ0bWVudHM6IFsnJ10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbJyddLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFsnJ10sXG4gICAgICAgICAgICBzY3JlZW5zaG90czogWycnXSxcbiAgICAgICAgICAgIHB1cmNoYXNlX2xpbms6IFsnJ10sXG4gICAgICAgICAgICB0aGFpX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldKV0sXG4gICAgICAgICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFkZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLnRhZ3MkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnRhZ3MkLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBwcm9kdWN0X3RhZ3MubGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcgPSBwcm9kdWN0X3RhZ3MuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgICB0aGlzLmV4dHJhc2VydmljZXNUYWcgPSBwcm9kdWN0X3RhZ3MuZXh0cmFzZXJ2aWNlcztcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm15Rm9ybUZlYXR1cmVzKTtcblxuICAgICAgICAvL1NlbGVjdGVkIHR5cGUgZmlsZSBvbmx5XG4gICAgICAgIC8vdGhpcy5jaGFuZ2VUb1R5cGVGaWxlKHRoaXMubXlGb3JtTG9nbywgJ3NpbmdsZScpO1xuICAgICAgICAvL3RoaXMuY2hhbmdlVG9UeXBlRmlsZSh0aGlzLm15Rm9ybVNjcmVlbnNob3RzLCAnbXVsdGlwbGUnKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGhhaV9zaG9ydGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuXG4gICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmFkZFByb2R1Y3QocHJvZHVjdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnNDEzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXggU2l6ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyIEVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgb25DaGVja2JveEluZHVzdHJpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveExhbmd1YWdlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMucHVzaCh2YWx1ZS5kYmlkKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveENhdGVnb3JpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmV3RmVhdHVyZTogc3RyaW5nO1xuICAgIG5ld1RoYWlGZWF0dXJlOiBzdHJpbmc7XG5cbiAgICBNQVhfU0laRV9GRUFUVVJFOiBudW1iZXIgPSA1O1xuXG4gICAgb25BZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUgJiYgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMubGVuZ3RoIDwgdGhpcy5NQVhfU0laRV9GRUFUVVJFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGhhaUZlYXR1cmUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUgJiYgdGhpcy5teUZvcm1GZWF0dXJlcy5sZW5ndGggPCB0aGlzLk1BWF9TSVpFX0ZFQVRVUkUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZlYXR1cmUgPSAnJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGVGZWF0dXJlKGZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgbGV0IGogPSB0aGlzLm15Rm9ybUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGogIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2NyZWVuc2hvdHNSZW5kZXI6IGFueVtdID0gW107XG5cbiAgICBmaWxlQ2hhbmdlU2NyZWVuc2hvdHMoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTCk7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNjcmVlbnNob3RzUmVuZGVyW2ldID0gdGhpcy5teUZvcm1TY3JlZW5zaG90c1tpXS5kYXRhVVJMO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IHRydWU7XG5cbiAgICB9XG5cblxuICAgIG9uRGVsZXRlU2NyZWVuc2hvdChzcmM6IGFueSkge1xuICAgICAgICAvLyBsZXQgaiA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsIHsnZGF0YVVSTCc6IHNyY30pO1xuICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuaW5kZXhPZihzcmMpO1xuXG4gICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2NyZWVuc2hvdHNSZW5kZXIuc3BsaWNlKGosIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkwpXG4gICAgICAgIHRoaXMubXlGb3JtTG9nbyA9IGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTDtcbiAgICAgICAgLy90aGlzLm15Rm9ybUxvZ29SZW5kZXIgPSB0aGlzLm15Rm9ybUxvZ28uZGF0YVVSTDtcbiAgICAgICAgdGhpcy5maWxlQ2hvc2VuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBteUZvcm1Mb2dvUmVuZGVyOmFueTtcbiAgICAvLyBteUZvcm1Mb2dvUmVzdWx0OiBhbnk7XG4gICAgLy8gbXlGb3JtU2NyZWVuc2hvdHNSZXN1bHQ6IGFueSBbXSA9IFtdO1xuXG4gICAgLy8gcHJpdmF0ZSBjaGFuZ2VUb1R5cGVGaWxlKGRhdGE6IGFueSwgdHlwZTogc3RyaW5nKSB7XG4gICAgLy9cbiAgICAvLyAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgLy8gICAgICAgICBjYXNlICdzaW5nbGUnOlxuICAgIC8vICAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nb1Jlc3VsdCA9IGRhdGEuZmlsZTtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIGNhc2UnbXVsdGlwbGUnOlxuICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzUmVzdWx0W2ldID0gZGF0YVtpXS5maWxlO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gfVxuXG4gICAgLy9QcmljaW5nIG1vZGVsXG5cbiAgICBzaG93TW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93TGlmZXRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RnJlZVNlcnZpY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93T3RoZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNpbmdsZXByaWNlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaWNlcmFuZ2VNb250aGx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZVllYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaWNlcmFuZ2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNpbmdsZXByaWNlTGlmZXRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTGlmZXRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFsbElkOiBhbnk7XG4gICAgYWxsTW9kZWw6IGFueTtcblxuICAgIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIG9uQ2hlY2tib3hQcmljaW5nTW9kZWwodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsbElkID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICdpZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsTW9kZWwgPSBfLm1hcCh0aGlzLm9wdGlvbnMucHJpY2luZ19tb2RlbCwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWxsID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbElkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGhpcy5hbGxJZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtb2RlbCc6IHRoaXMuYWxsTW9kZWxbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnRnJlZW1pdW0gVmVyc2lvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ090aGVyJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB2YWx1ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJZCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsTW9kZWwgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnRnJlZW1pdW0gVmVyc2lvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgdmFsdWUuaWRdKTtcblxuICAgICAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvblNlbGVjdFByaWNpbmdQbGFuKHZhbHVlOiBhbnksIGlkOiBhbnksIG5hbWU6IGFueSkge1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1NpbmdsZSBQcmljZScgJiYgbmFtZSA9PT0gJ01vbnRobHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnUHJpY2UgcmFuZ2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1NpbmdsZSBQcmljZScgJiYgbmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnUHJpY2UgcmFuZ2UnICYmIG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1NpbmdsZSBQcmljZScgJiYgbmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicGxhblwiOiB2YWx1ZSxcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogdGhpcy5vcHRpb25zLmN1cnJlbmN5WzBdLFxuICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCk7XG4gICAgfVxuXG4gICAgb25JbnB1dFByaWNlKGlkOiBhbnksIHByaWNlX3N0YXJ0OiBhbnksIHByaWNlX2VuZDogYW55LCBjdXJyZW5jeTogYW55KSB7XG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6IHByaWNlX3N0YXJ0LFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogcHJpY2VfZW5kLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBjdXJyZW5jeSxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuICAgIG9uSW5wdXREYXkoaWQ6IGFueSwgZGF5OiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiBkYXksXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCk7XG4gICAgfVxuXG4gICAgb25JbnB1dE90aGVyTW9kZWwoaWQ6IGFueSwgb3RoZXJfbW9kZWw6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiBvdGhlcl9tb2RlbFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm1QcmljaW5nTW9kZWwpO1xuICAgIH1cblxuXG4gICAgdmlkZW9UeXBlOiBib29sZWFuID0gZmFsc2U7XG4gICAgZW1iZWRWaWRlbzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG9uWW91dHViZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG15VXJsOiBzdHJpbmcgPSAnJztcblxuICAgIGVtYmVkWW91dHViZSh1cmw6IGFueSkge1xuXG4gICAgICAgIHRoaXMubXlVcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFZpZGVvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSB0cnVlO1xuXG4gICAgICAgIGlmICh1cmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChWYWxpZGF0aW9uU2VydmljZS55b3V0dWJlUGFyc2VyKHVybCkgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdXJsLnNwbGl0KCc9JywgMilbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1VcmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UeXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vbllvdXR1YmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uWW91dHViZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVZpZGVvKCkge1xuICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtYmVkVmlkZW8gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm15Rm9ybVVybCA9ICcnO1xuICAgICAgICB0aGlzLmVtYmVkVXJsID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNhbmNsZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdmVuZG9yL2Rhc2hib2FyZGBdKTtcbiAgICB9XG5cbiAgICB0aGFpSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uQ2hhbmdlTGFuZ3VhZUZyb20obGFuZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZztcbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
