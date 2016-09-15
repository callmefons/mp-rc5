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
var VendorEditProductComponent = (function () {
    function VendorEditProductComponent(_fb, _productService, route, router, _sanitizer) {
        this._fb = _fb;
        this._productService = _productService;
        this.route = route;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.empty = '';
        this.industriesTag = [];
        this.categoriesTag = [];
        this.languagesTag = [];
        this.departmentsTag = [];
        this.extraservicesTag = [];
        this.pricingmodelsTag = [];
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormPricingModel = [];
        this.myFormFeatures = [];
        this.myFormLogo = '';
        this.fileChosen = true;
        this.myFormScreenshots = [];
        this.screenshotsChosen = true;
        this.resizeOptions = {
            resizeMaxHeight: 500,
            resizeMaxWidth: 500
        };
        this.options = {
            currency: ['THB', 'SDG', 'USD', 'AUD']
        };
        this.loading = true;
        //Callback after added product
        this.updated = false;
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
        this.video = false;
        this.myForm = this._fb.group({
            name: [''],
            logo: [''],
            description: [''],
            shortdescription: [''],
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
            pricing_model: [''],
            price_start: [''],
            price_end: [''],
            currency: [''],
            licensing_model: ['']
        });
    }
    VendorEditProductComponent.prototype.ngOnInit = function () {
        this.getProductId();
        this.updated = false;
    };
    VendorEditProductComponent.prototype.getProductTags = function () {
        var _this = this;
        this._productService.getProductTags()
            .subscribe(function (product_tags) {
            _this.industriesTag = product_tags.industries;
            _this.categoriesTag = product_tags.categories;
            _this.languagesTag = product_tags.languages;
            _this.departmentsTag = product_tags.departments;
            _this.extraservicesTag = product_tags.extraservices;
            //noinspection TypeScriptUnresolvedVariable
            _this.pricingmodelsTag = product_tags.pricingmodels;
        }),
            function (error) { return _this.errorMessage = error; };
    };
    VendorEditProductComponent.prototype.getProductId = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = +params['id'];
            _this._productService.getProductId(id)
                .subscribe(function (apps) {
                if (apps) {
                    _this.apps = apps.data;
                    _this.myFormLogo = apps.data.logo;
                    _this.embedYoutube(apps.data.youtube);
                    //noinspection TypeScriptUnresolvedVariable
                    for (var i = 0; i < apps.pricingmodels.length; i++) {
                        //noinspection TypeScriptUnresolvedVariable
                        _this.myFormPricingModel.push(apps.pricingmodels[i]);
                        _this.onBindingPricingModel(_this.myFormPricingModel[i]);
                    }
                    for (var i = 0; i < apps.data.screenshots.length; i++) {
                        _this.myFormScreenshots.push(apps.data.screenshots[i].url);
                    }
                    for (var i = 0; i < apps.data.features.length; i++) {
                        _this.myFormFeatures.push(apps.data.features[i].text);
                    }
                    for (var i = 0; i < apps.industries.length; i++) {
                        _this.myFormIndustries.push(apps.industries[i].id);
                    }
                    for (var i = 0; i < apps.categories.length; i++) {
                        _this.myFormCategories.push(apps.categories[i].id);
                    }
                    for (var i = 0; i < apps.languages.length; i++) {
                        _this.myFormLanguages.push(apps.languages[i].id);
                    }
                    for (var i = 0; i < apps.departments.length; i++) {
                        _this.myFormDepartments.push(apps.departments[i].id);
                    }
                    for (var i = 0; i < apps.extraservices.length; i++) {
                        _this.myFormExtraservices.push(apps.extraservices[i].id);
                    }
                    _this.loading = false;
                    _this.getProductTags();
                }
            });
        });
    };
    VendorEditProductComponent.prototype.onRefresh = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = +params['id'];
            _this._productService.getProductId(id)
                .subscribe(function (apps) {
                if (apps) {
                    _this.apps = apps.data;
                }
            });
        });
    };
    VendorEditProductComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    VendorEditProductComponent.prototype.onSubmit = function (appId, value) {
        var _this = this;
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        this.updated = false;
        console.log(product);
        this._productService.updateProduct(appId, product)
            .subscribe(function (res) {
            _this.updated = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorEditProductComponent.prototype.onCheckboxIndustries = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormIndustries.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormIndustries.indexOf(value.dbid);
            if (i != -1) {
                this.myFormIndustries.splice(i, 1);
            }
        }
    };
    VendorEditProductComponent.prototype.onCheckboxLanguages = function (value, event) {
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
    VendorEditProductComponent.prototype.onCheckboxDepartments = function (value, event) {
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
    VendorEditProductComponent.prototype.onCheckboxCategories = function (value, event) {
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
    VendorEditProductComponent.prototype.onCheckboxExtraservices = function (value, event) {
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
    VendorEditProductComponent.prototype.checkedId = function (id, type) {
        if (type == 'categories') {
            for (var i = 0; i < this.myFormCategories.length; i++) {
                if (id == this.myFormCategories[i])
                    return true;
            }
        }
        if (type == 'departments') {
            for (var i = 0; i < this.myFormDepartments.length; i++) {
                if (id == this.myFormDepartments[i])
                    return true;
            }
        }
        if (type == 'industries') {
            for (var i = 0; i < this.myFormIndustries.length; i++) {
                if (id == this.myFormIndustries[i])
                    return true;
            }
        }
        if (type == 'languages') {
            for (var i = 0; i < this.myFormLanguages.length; i++) {
                if (id == this.myFormLanguages[i])
                    return true;
            }
        }
        if (type == 'extraservices') {
            for (var i = 0; i < this.myFormExtraservices.length; i++) {
                if (id == this.myFormExtraservices[i])
                    return true;
            }
        }
        if (type == 'pricingmodels') {
            for (var i = 0; i < this.myFormPricingModel.length; i++) {
                if (id == this.myFormPricingModel[i].id) {
                    return true;
                }
            }
        }
    };
    VendorEditProductComponent.prototype.onAddNewFeature = function (newFeature) {
        if (newFeature) {
            this.myFormFeatures.push(newFeature);
        }
    };
    VendorEditProductComponent.prototype.onDeleteFeature = function (feature) {
        var i = this.myFormFeatures.indexOf(feature);
        if (i != -1) {
            this.myFormFeatures.splice(i, 1);
        }
    };
    VendorEditProductComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    };
    VendorEditProductComponent.prototype.fileChangeScreenshots = function (imageResult) {
        this.myFormScreenshots.push(imageResult.resized.dataURL);
        this.screenshotsChosen = true;
    };
    VendorEditProductComponent.prototype.onDeleteScreenshot = function (src) {
        var i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
    };
    VendorEditProductComponent.prototype.updateProductStatus = function (id, status) {
        var _this = this;
        if (status === 'pending') {
            this._productService.updateProductStatus(id, status).subscribe(function () {
                _this.onCancle();
            });
        }
        this._productService.updateProductStatus(id, status).subscribe(function () {
            _this.onRefresh();
        });
    };
    VendorEditProductComponent.prototype.onCheckboxPricingModelAll = function (value, event) {
        var temp = {
            pricingId: [],
            formPricingId: [],
            pricingName: [],
            formPricingName: [],
            id: [],
            model: []
        };
        if (event.currentTarget.checked == true) {
            this.checkedPricingAll = true;
            for (var i = 0; i < this.pricingmodelsTag.length; i++) {
                temp.pricingId.push(this.pricingmodelsTag[i].dbid);
                temp.pricingName.push(this.pricingmodelsTag[i].name);
            }
            for (var i = 0; i < this.myFormPricingModel.length; i++) {
                if (this.myFormPricingModel !== undefined) {
                    temp.formPricingId.push(this.myFormPricingModel[i].id);
                    temp.formPricingName.push(this.myFormPricingModel[i].model);
                }
            }
            temp.id = _.difference(temp.pricingId, temp.formPricingId);
            temp.model = _.difference(temp.pricingName, temp.formPricingName);
            for (var i = 0; i < temp.id.length; i++) {
                this.myFormPricingModel.push({
                    'id': temp.id[i],
                    'model': temp.model[i],
                    "plan": '',
                    "price_start": '',
                    "price_end": '',
                    "currency": '',
                    "day": '',
                    "other_model": ''
                });
            }
            this.showMonthly = true;
            this.showYearly = true;
            this.showLifetime = true;
            this.showFreeService = true;
            this.showOther = true;
        }
        if (event.currentTarget.checked == false) {
            this.checkedPricingAll = false;
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
            for (var i = 0; i < this.pricingmodelsTag.length; i++) {
                this.onResetBindingModel(this.pricingmodelsTag[i].name);
            }
            this.myFormPricingModel = [];
        }
    };
    VendorEditProductComponent.prototype.onCheckboxPricingModel = function (value, event) {
        if (event.currentTarget.checked == true) {
            if (value.name === 'Yearly Subscription') {
                this.showYearly = true;
            }
            if (value.name === 'Monthly Pricing') {
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
                'id': value.dbid,
                'model': value.name,
                "plan": '',
                "price_start": '',
                "price_end": '',
                "currency": '',
                "day": '',
                "other_model": ''
            });
        }
        if (event.currentTarget.checked == false) {
            this.onResetBindingModel(value.name);
            if (value.name === 'Yearly Subscription') {
                this.showYearly = false;
                this.singlepriceYearly = false;
                this.pricerangeYearly = false;
            }
            if (value.name === 'Monthly Pricing') {
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
            var i = _.findIndex(this.myFormPricingModel, ['id', value.dbid]);
            if (i != -1) {
                this.myFormPricingModel.splice(i, 1);
            }
        }
    };
    VendorEditProductComponent.prototype.onSelectPricingPlan = function (value, id, name) {
        this.onResetBindingModel(name);
        switch (value) {
            case "Single Price":
                if (name === 'Monthly Pricing') {
                    this.singlepriceMonthly = true;
                    this.pricerangeMonthly = false;
                }
                if (name === 'Yearly Subscription') {
                    this.singlepriceYearly = true;
                    this.pricerangeYearly = false;
                }
                if (name === 'Lifetime License') {
                    this.singlepriceLifetime = true;
                    this.pricerangeLifetime = false;
                }
                break;
            case "Price range":
                if (name === 'Monthly Pricing') {
                    this.singlepriceMonthly = false;
                    this.pricerangeMonthly = true;
                }
                if (name === 'Yearly Subscription') {
                    this.singlepriceYearly = false;
                    this.pricerangeYearly = true;
                }
                if (name === 'Lifetime License') {
                    this.singlepriceLifetime = false;
                    this.pricerangeLifetime = true;
                }
                break;
            default:
                console.log("Sorry, we are out of " + value + ".");
        }
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "plan": value,
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": ''
        });
    };
    VendorEditProductComponent.prototype.onInputPrice = function (id, price_start, price_end, currency) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": price_start,
            "price_end": price_end,
            "currency": currency,
            "day": '',
            "other_model": ''
        });
    };
    VendorEditProductComponent.prototype.onInputDay = function (id, day) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": day,
            "other_model": ''
        });
    };
    VendorEditProductComponent.prototype.onInputOtherModel = function (id, other_model) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": other_model
        });
    };
    VendorEditProductComponent.prototype.onBindingPricingModel = function (value) {
        switch (value.id) {
            case 1:
                this.showFreeService = true;
                this.dayModel = value.day;
                break;
            case 2:
                this.showMonthly = true;
                this.currencyMonthlyModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceMonthly = true;
                    this.priceStartMonthlyModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeMonthly = true;
                    this.priceStartMonthlyModel = value.price_start;
                    this.priceEndMonthlyModel = value.price_end;
                }
                break;
            case 3:
                this.showYearly = true;
                this.currencyYearlyModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceYearly = true;
                    this.priceStartYearlyModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeYearly = true;
                    this.priceStartYearlyModel = value.price_start;
                    this.priceEndYearlyModel = value.price_end;
                }
                break;
            case 4:
                this.showLifetime = true;
                this.currencyLifetimeModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceLifetime = true;
                    this.priceStartLifetimeModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeLifetime = true;
                    this.priceStartLifetimeModel = value.price_start;
                    this.priceEndLifetimeModel = value.price_end;
                }
                break;
            case 5:
                this.showOther = true;
                this.otherModel = value.other_model;
                break;
            default:
                console.log("Sorry, we are out of " + value + ".");
        }
    };
    VendorEditProductComponent.prototype.onResetBindingModel = function (type) {
        switch (type) {
            case 'Yearly Subscription':
                this.priceStartYearlyModel = null;
                this.priceEndYearlyModel = null;
                break;
            case 'Monthly Pricing':
                this.priceStartMonthlyModel = null;
                this.priceEndMonthlyModel = null;
                break;
            case 'Lifetime License':
                this.priceStartLifetimeModel = null;
                this.priceEndLifetimeModel = null;
                break;
            case 'Freemium Version':
                this.dayModel = null;
                break;
            case 'Other':
                this.otherModel = null;
                break;
            default:
                console.log("Sorry, we are out of " + type + ".");
        }
    };
    VendorEditProductComponent.prototype.embedYoutube = function (url) {
        if (url !== null) {
            this.video = true;
            var id = url.split('=', 2)[1];
            this.myFormUrl = url;
            this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + id);
        }
    };
    VendorEditProductComponent.prototype.deleteVideo = function () {
        this.video = false;
        this.myFormUrl = '';
        this.embedUrl = null;
    };
    VendorEditProductComponent.prototype.onCancle = function () {
        this.router.navigate(["/vendor/dashboard"]);
    };
    VendorEditProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            templateUrl: 'templates/vendor-edit-product.component.html',
            styleUrls: ['styles/vendor-edit-product.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router, platform_browser_1.DomSanitizationService])
    ], VendorEditProductComponent);
    return VendorEditProductComponent;
}());
exports.VendorEditProductComponent = VendorEditProductComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUErRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNGLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RELGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzdFLDhCQUFzQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBY3ZEO0lBa0RJLG9DQUFvQixHQUFnQixFQUNoQixlQUErQixFQUMvQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsVUFBa0M7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBcERyRCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBT2hCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUU3QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFFN0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUUzQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVB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RyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxtQ0FBaUMsRUFBSSxDQUFDLENBQUM7UUFFMUcsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUdELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBcHRCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztTQUMxRCxDQUFDOztrQ0FBQTtJQWl0QkYsaUNBQUM7QUFBRCxDQS9zQkEsQUErc0JDLElBQUE7QUEvc0JZLGtDQUEwQiw2QkErc0J0QyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7RG9tU2FuaXRpemF0aW9uU2VydmljZSwgU2FmZVJlc291cmNlVXJsLCBTYWZlVXJsfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJbWFnZVVwbG9hZCwgSW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gJy4uL3NoYXJlZC9uZzItc2VydmljZS9uZzItaW1hZ2V1cGxvYWQvaW5kZXgnO1xuXG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JFZGl0UHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGVtcHR5OiBhbnkgPSAnJztcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGFwcHM6IGFueVtdO1xuXG5cbiAgICBpbmR1c3RyaWVzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGNhdGVnb3JpZXNUYWc6IGFueVtdID0gW107XG4gICAgbGFuZ3VhZ2VzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGRlcGFydG1lbnRzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGV4dHJhc2VydmljZXNUYWc6IGFueVtdID0gW107XG5cbiAgICBwcmljaW5nbW9kZWxzVGFnOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtSW5kdXN0cmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gICAgbXlGb3JtQ2F0ZWdvcmllczogYW55W10gPSBbXTtcbiAgICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybVByaWNpbmdNb2RlbDogYW55W10gPSBbXTtcblxuICAgIG15Rm9ybUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtTG9nbzogc3RyaW5nID0gJyc7XG4gICAgZmlsZUNob3NlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBteUZvcm1TY3JlZW5zaG90czogYW55W10gPSBbXTtcbiAgICBzY3JlZW5zaG90c0Nob3NlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgICByZXNpemVNYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDUwMFxuICAgIH07XG5cbiAgICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBjdXJyZW5jeTogWydUSEInLCAnU0RHJywgJ1VTRCcsICdBVUQnXVxuICAgIH07XG5cbiAgICBteUZvcm1Vcmw6ICcnO1xuICAgIGVtYmVkVXJsOiBTYWZlUmVzb3VyY2VVcmw7XG5cbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy9DYWxsYmFjayBhZnRlciBhZGRlZCBwcm9kdWN0XG4gICAgdXBkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBfc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnXSxcbiAgICAgICAgICAgIHNob3J0ZGVzY3JpcHRpb246IFsnJ10sXG4gICAgICAgICAgICBtaW5yZXF1aXJlbWVudDogWycnXSxcbiAgICAgICAgICAgIHRlcm1zbmNvbmQ6IFsnJ10sXG4gICAgICAgICAgICB5b3V0dWJlOiBbJyddLFxuICAgICAgICAgICAgaW5kdXN0cmllczogWycnXSxcbiAgICAgICAgICAgIGxhbmd1YWdlczogWycnXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRzOiBbJyddLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogWycnXSxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbJyddLFxuICAgICAgICAgICAgc2NyZWVuc2hvdHM6IFsnJ10sXG4gICAgICAgICAgICBwdXJjaGFzZV9saW5rOiBbJyddLFxuICAgICAgICAgICAgcHJpY2luZ19tb2RlbDogWycnXSxcbiAgICAgICAgICAgIHByaWNlX3N0YXJ0OiBbJyddLFxuICAgICAgICAgICAgcHJpY2VfZW5kOiBbJyddLFxuICAgICAgICAgICAgY3VycmVuY3k6IFsnJ10sXG4gICAgICAgICAgICBsaWNlbnNpbmdfbW9kZWw6IFsnJ11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdElkKCk7XG4gICAgICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcHJvZHVjdF90YWdzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZyA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcgPSBwcm9kdWN0X3RhZ3MuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFzZXJ2aWNlc1RhZyA9IHByb2R1Y3RfdGFncy5leHRyYXNlcnZpY2VzO1xuICAgICAgICAgICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2luZ21vZGVsc1RhZyA9IHByb2R1Y3RfdGFncy5wcmljaW5nbW9kZWxzO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuXG5cbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0SWQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKGlkKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFwcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcHMgPSBhcHBzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gYXBwcy5kYXRhLmxvZ287XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYmVkWW91dHViZShhcHBzLmRhdGEueW91dHViZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLnByaWNpbmdtb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKGFwcHMucHJpY2luZ21vZGVsc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CaW5kaW5nUHJpY2luZ01vZGVsKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YS5zY3JlZW5zaG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnB1c2goYXBwcy5kYXRhLnNjcmVlbnNob3RzW2ldLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMucHVzaChhcHBzLmRhdGEuZmVhdHVyZXNbaV0udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5pbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcy5wdXNoKGFwcHMuaW5kdXN0cmllc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5wdXNoKGFwcHMuY2F0ZWdvcmllc1tpXS5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKGFwcHMubGFuZ3VhZ2VzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRlcGFydG1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaChhcHBzLmRlcGFydG1lbnRzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5leHRyYXNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5wdXNoKGFwcHMuZXh0cmFzZXJ2aWNlc1tpXS5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKGlkKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFwcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcHMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwcyA9IGFwcHMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoYXBwSWQ6IGFueSwgdmFsdWU6IE9iamVjdCkge1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5zaG9ydGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubWlucmVxdWlyZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50ZXJtc25jb25kLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1VcmwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnB1cmNoYXNlX2xpbmssXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdChhcHBJZCwgcHJvZHVjdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrYm94SW5kdXN0cmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUluZHVzdHJpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hMYW5ndWFnZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUxhbmd1YWdlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RGVwYXJ0bWVudHModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94Q2F0ZWdvcmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja2VkSWQoaWQ6IG51bWJlciwgdHlwZTogYW55KSB7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NhdGVnb3JpZXMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybUNhdGVnb3JpZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdkZXBhcnRtZW50cycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybURlcGFydG1lbnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAnaW5kdXN0cmllcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1JbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtSW5kdXN0cmllc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2xhbmd1YWdlcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1MYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1MYW5ndWFnZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdleHRyYXNlcnZpY2VzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAncHJpY2luZ21vZGVscycpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkFkZE5ld0ZlYXR1cmUobmV3RmVhdHVyZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuZXdGZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlbGV0ZUZlYXR1cmUoZmVhdHVyZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1GZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgICAgICB0aGlzLmZpbGVDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGZpbGVDaGFuZ2VTY3JlZW5zaG90cyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTCk7XG4gICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRGVsZXRlU2NyZWVuc2hvdChzcmM6IGFueSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuaW5kZXhPZihzcmMpO1xuICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNob3RzQ2hvc2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0U3RhdHVzKGlkOiBhbnksIHN0YXR1czogYW55KSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdFN0YXR1cyhpZCwgc3RhdHVzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25DYW5jbGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdFN0YXR1cyhpZCwgc3RhdHVzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93WWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0xpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd090aGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGRheU1vZGVsOiBudW1iZXI7XG4gICAgb3RoZXJNb2RlbDogc3RyaW5nO1xuXG4gICAgcHJpY2VTdGFydE1vbnRobHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlU3RhcnRZZWFybHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlU3RhcnRMaWZldGltZU1vZGVsOiBudW1iZXI7XG5cbiAgICBwcmljZUVuZE1vbnRobHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlRW5kWWVhcmx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZUVuZExpZmV0aW1lTW9kZWw6IG51bWJlcjtcblxuICAgIGN1cnJlbmN5TW9udGhseU1vZGVsOiBhbnk7XG4gICAgY3VycmVuY3lZZWFybHlNb2RlbDogYW55O1xuICAgIGN1cnJlbmN5TGlmZXRpbWVNb2RlbDogYW55O1xuXG4gICAgY2hlY2tlZFByaWNpbmdBbGw6Ym9vbGVhbjtcblxuICAgIG9uQ2hlY2tib3hQcmljaW5nTW9kZWxBbGwodmFsdWU6YW55LCBldmVudDphbnkpe1xuXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSB7XG4gICAgICAgICAgICBwcmljaW5nSWQ6IFtdLFxuICAgICAgICAgICAgZm9ybVByaWNpbmdJZDogW10sXG4gICAgICAgICAgICBwcmljaW5nTmFtZTogW10sXG4gICAgICAgICAgICBmb3JtUHJpY2luZ05hbWU6IFtdLFxuICAgICAgICAgICAgaWQ6W10sXG4gICAgICAgICAgICBtb2RlbDpbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFByaWNpbmdBbGwgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wcmljaW5nbW9kZWxzVGFnLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0ZW1wLnByaWNpbmdJZC5wdXNoKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5kYmlkKTtcbiAgICAgICAgICAgICAgICB0ZW1wLnByaWNpbmdOYW1lLnB1c2godGhpcy5wcmljaW5nbW9kZWxzVGFnW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLmZvcm1QcmljaW5nSWQucHVzaCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAuZm9ybVByaWNpbmdOYW1lLnB1c2godGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0ubW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcC5pZCA9IF8uZGlmZmVyZW5jZSh0ZW1wLnByaWNpbmdJZCx0ZW1wLmZvcm1QcmljaW5nSWQpO1xuICAgICAgICAgICAgdGVtcC5tb2RlbCA9IF8uZGlmZmVyZW5jZSh0ZW1wLnByaWNpbmdOYW1lLHRlbXAuZm9ybVByaWNpbmdOYW1lKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRlbXAuaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiB0ZW1wLmlkW2ldLFxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB0ZW1wLm1vZGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFByaWNpbmdBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5wcmljaW5nbW9kZWxzVGFnLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwodGhpcy5wcmljaW5nbW9kZWxzVGFnW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwgPSBbXTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIG9uQ2hlY2tib3hQcmljaW5nTW9kZWwodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuXG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICdpZCc6IHZhbHVlLmRiaWQsXG4gICAgICAgICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25SZXNldEJpbmRpbmdNb2RlbCh2YWx1ZS5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmRiaWRdKTtcblxuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcblxuICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwobmFtZSk7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcIlNpbmdsZSBQcmljZVwiOlxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUHJpY2UgcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIHdlIGFyZSBvdXQgb2YgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInBsYW5cIjogdmFsdWUsXG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXRQcmljZShpZDogYW55LCBwcmljZV9zdGFydDogYW55LCBwcmljZV9lbmQ6IGFueSwgY3VycmVuY3k6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnB1dERheShpZDogYW55LCBkYXk6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6IGRheSxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnB1dE90aGVyTW9kZWwoaWQ6IGFueSwgb3RoZXJfbW9kZWw6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiBvdGhlcl9tb2RlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJpbmRpbmdQcmljaW5nTW9kZWwodmFsdWU6IGFueSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5TW9kZWwgPSB2YWx1ZS5kYXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeU1vbnRobHlNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRNb250aGx5TW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeVllYXJseU1vZGVsID0gdmFsdWUuY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdTaW5nbGUgUHJpY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kWWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbmN5TGlmZXRpbWVNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRMaWZldGltZU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnUHJpY2UgcmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX2VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJNb2RlbCA9IHZhbHVlLm90aGVyX21vZGVsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB3ZSBhcmUgb3V0IG9mIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2V0QmluZGluZ01vZGVsKHR5cGU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1llYXJseSBTdWJzY3JpcHRpb24nOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydFllYXJseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kWWVhcmx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTW9udGhseSBQcmljaW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTGlmZXRpbWUgTGljZW5zZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZExpZmV0aW1lTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRnJlZW1pdW0gVmVyc2lvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdPdGhlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlck1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgd2UgYXJlIG91dCBvZiBcIiArIHR5cGUgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHZpZGVvOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcblxuICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgICAgICAgdGhpcy5teUZvcm1VcmwgPSB1cmw7XG4gICAgICAgICAgICB0aGlzLmVtYmVkVXJsID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtpZH1gKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlVmlkZW8oKSB7XG4gICAgICAgIHRoaXMudmlkZW8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFVybCA9IG51bGw7XG4gICAgfVxuXG5cbiAgICBvbkNhbmNsZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdmVuZG9yL2Rhc2hib2FyZGBdKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
