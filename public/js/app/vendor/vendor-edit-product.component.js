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
        this.myFormThaiFeatures = [];
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
        this.selectedLang = 'en';
        ///////////// Alert /////////////
        this.alerted = false;
        this.messageAlert = '';
        this.typeAlert = 'success';
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
            pricing_model: [''],
            price_start: [''],
            price_end: [''],
            currency: [''],
            licensing_model: [''],
            thai_description: ['', forms_1.Validators.required],
            thai_shortdescription: ['', forms_1.Validators.required]
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
                    _this.apps = apps.data['en'];
                    _this.apps_th = apps.data['th'];
                    _this.myFormLogo = apps.data['en'].logo;
                    _this.embedYoutube(apps.data['en'].youtube);
                    //noinspection TypeScriptUnresolvedVariable
                    for (var i = 0; i < apps.data['en'].pricingmodels.length; i++) {
                        //noinspection TypeScriptUnresolvedVariable
                        _this.myFormPricingModel.push(apps.data['en'].pricingmodels[i]);
                        _this.onBindingPricingModel(_this.myFormPricingModel[i]);
                    }
                    for (var i = 0; i < apps.data['en'].screenshots.length; i++) {
                        _this.myFormScreenshots.push(apps.data['en'].screenshots[i].url);
                    }
                    for (var i = 0; i < apps.data['en'].features.length; i++) {
                        _this.myFormFeatures.push(apps.data['en'].features[i].text);
                    }
                    for (var i = 0; i < apps.data['th'].features.length; i++) {
                        _this.myFormThaiFeatures.push(apps.data['th'].features[i].text);
                    }
                    for (var i = 0; i < apps.data['en'].industries.length; i++) {
                        _this.myFormIndustries.push(apps.data['en'].industries[i].id);
                    }
                    for (var i = 0; i < apps.data['en'].categories.length; i++) {
                        _this.myFormCategories.push(apps.data['en'].categories[i].id);
                    }
                    for (var i = 0; i < apps.data['en'].languages.length; i++) {
                        _this.myFormLanguages.push(apps.data['en'].languages[i].id);
                    }
                    for (var i = 0; i < apps.data['en'].departments.length; i++) {
                        _this.myFormDepartments.push(apps.data['en'].departments[i].id);
                    }
                    for (var i = 0; i < apps.data['en'].extraservices.length; i++) {
                        _this.myFormExtraservices.push(apps.data['en'].extraservices[i].id);
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
        var product_thai = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormThaiFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        // console.log(product_thai);
        this.updated = false;
        var tempProduct = [];
        tempProduct.push(product, product_thai);
        this._productService.updateProduct(appId, tempProduct)
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
    VendorEditProductComponent.prototype.onAddNewFeature = function (newFeature, lang) {
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
    VendorEditProductComponent.prototype.onDeleteFeature = function (feature, lang) {
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
    VendorEditProductComponent.prototype.onAlert = function (msg) {
        var _this = this;
        this.messageAlert = msg;
        this.alerted = true;
        setTimeout(function () {
            _this.alerted = false;
            _this.messageAlert = '';
        }, 3000);
    };
    VendorEditProductComponent.prototype.updateProductStatus = function (id, status) {
        var _this = this;
        this.onAlert(status);
        setTimeout(function () {
            if (status === 'pending') {
                _this._productService.updateProductStatus(id, status).subscribe(function () {
                    _this.onCancle();
                });
            }
            _this._productService.updateProductStatus(id, status).subscribe(function () {
                _this.onRefresh();
            });
        }, 3000);
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
    VendorEditProductComponent.prototype.onChangeLanguaeFrom = function (lang) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUErRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNGLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzdFLDhCQUFzQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBZXZEO0lBdURJLG9DQUFvQixHQUFnQixFQUNoQixlQUErQixFQUMvQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsVUFBa0M7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBekRyRCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBUWhCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUU3QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFFN0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBUyxFQUFFLENBQUM7UUFFOUIs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LEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxtQ0FBaUMsRUFBSSxDQUFDLENBQUM7UUFFMUcsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUdELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsd0RBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFFNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBRUwsQ0FBQztJQTl6Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDMUQsQ0FBQzs7a0NBQUE7SUEyekJGLGlDQUFDO0FBQUQsQ0F6ekJBLEFBeXpCQyxJQUFBO0FBenpCWSxrQ0FBMEIsNkJBeXpCdEMsQ0FBQSIsImZpbGUiOiJ2ZW5kb3IvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RvbVNhbml0aXphdGlvblNlcnZpY2UsIFNhZmVSZXNvdXJjZVVybCwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SW1hZ2VVcGxvYWQsIEltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWltYWdldXBsb2FkL2luZGV4JztcblxuXG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JFZGl0UHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGVtcHR5OiBhbnkgPSAnJztcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGFwcHM6IGFueVtdO1xuICAgIGFwcHNfdGg6YW55W107XG5cblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcblxuICAgIHByaWNpbmdtb2RlbHNUYWc6IGFueVtdID0gW107XG5cbiAgICBteUZvcm1JbmR1c3RyaWVzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybUxhbmd1YWdlczogYW55W10gPSBbXTtcbiAgICBteUZvcm1EZXBhcnRtZW50czogYW55W10gPSBbXTtcbiAgICBteUZvcm1DYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybUV4dHJhc2VydmljZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOmFueVtdID0gW107XG5cbiAgICBteUZvcm1Mb2dvOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIG15Rm9ybVNjcmVlbnNob3RzOiBhbnlbXSA9IFtdO1xuICAgIHNjcmVlbnNob3RzQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogNTAwXG4gICAgfTtcblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbJ1RIQicsICdTREcnLCAnVVNEJywgJ0FVRCddXG4gICAgfTtcblxuICAgIG15Rm9ybVVybDogJyc7XG4gICAgZW1iZWRVcmw6IFNhZmVSZXNvdXJjZVVybDtcblxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvL0NhbGxiYWNrIGFmdGVyIGFkZGVkIHByb2R1Y3RcbiAgICB1cGRhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHNlbGVjdGVkTGFuZzogc3RyaW5nID0gJ2VuJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgX3Nhbml0aXplcjogRG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBsb2dvOiBbJyddLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBzaG9ydGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbWlucmVxdWlyZW1lbnQ6IFsnJ10sXG4gICAgICAgICAgICB0ZXJtc25jb25kOiBbJyddLFxuICAgICAgICAgICAgeW91dHViZTogWycnXSxcbiAgICAgICAgICAgIGluZHVzdHJpZXM6IFsnJ10sXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50czogWycnXSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnJ10sXG4gICAgICAgICAgICBmZWF0dXJlczogWycnXSxcbiAgICAgICAgICAgIHNjcmVlbnNob3RzOiBbJyddLFxuICAgICAgICAgICAgcHVyY2hhc2VfbGluazogWycnXSxcbiAgICAgICAgICAgIHByaWNpbmdfbW9kZWw6IFsnJ10sXG4gICAgICAgICAgICBwcmljZV9zdGFydDogWycnXSxcbiAgICAgICAgICAgIHByaWNlX2VuZDogWycnXSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBbJyddLFxuICAgICAgICAgICAgbGljZW5zaW5nX21vZGVsOiBbJyddLFxuICAgICAgICAgICAgdGhhaV9kZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHRoYWlfc2hvcnRkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0SWQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0VGFncygpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3RhZ3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYXNlcnZpY2VzVGFnID0gcHJvZHVjdF90YWdzLmV4dHJhc2VydmljZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkVmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljaW5nbW9kZWxzVGFnID0gcHJvZHVjdF90YWdzLnByaWNpbmdtb2RlbHM7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG5cblxuICAgIH1cblxuICAgIGdldFByb2R1Y3RJZCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgICAgICAucGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0SWQoaWQpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYXBwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcy5kYXRhWydlbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwc190aCA9IGFwcHMuZGF0YVsndGgnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyA9IGFwcHMuZGF0YVsnZW4nXS5sb2dvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWJlZFlvdXR1YmUoYXBwcy5kYXRhWydlbiddLnlvdXR1YmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLnByaWNpbmdtb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKGFwcHMuZGF0YVsnZW4nXS5wcmljaW5nbW9kZWxzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJpbmRpbmdQcmljaW5nTW9kZWwodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLnNjcmVlbnNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChhcHBzLmRhdGFbJ2VuJ10uc2NyZWVuc2hvdHNbaV0udXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YVsnZW4nXS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnB1c2goYXBwcy5kYXRhWydlbiddLmZlYXR1cmVzW2ldLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWyd0aCddLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnB1c2goYXBwcy5kYXRhWyd0aCddLmZlYXR1cmVzW2ldLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10uaW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMucHVzaChhcHBzLmRhdGFbJ2VuJ10uaW5kdXN0cmllc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2goYXBwcy5kYXRhWydlbiddLmNhdGVnb3JpZXNbaV0uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKGFwcHMuZGF0YVsnZW4nXS5sYW5ndWFnZXNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YVsnZW4nXS5kZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2goYXBwcy5kYXRhWydlbiddLmRlcGFydG1lbnRzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2goYXBwcy5kYXRhWydlbiddLmV4dHJhc2VydmljZXNbaV0uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgb25SZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RJZChpZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShhcHBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHBzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcHMgPSBhcHBzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGFwcElkOiBhbnksIHZhbHVlOiBPYmplY3QpIHtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdF90aGFpID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX3Nob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5taW5yZXF1aXJlbWVudCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRlcm1zbmNvbmQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnB1cmNoYXNlX2xpbmssXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RfdGhhaSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRlbXBQcm9kdWN0OiBhbnlbXSA9IFtdO1xuICAgICAgICB0ZW1wUHJvZHVjdC5wdXNoKHByb2R1Y3QsIHByb2R1Y3RfdGhhaSk7XG5cblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVQcm9kdWN0KGFwcElkLCB0ZW1wUHJvZHVjdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrYm94SW5kdXN0cmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUluZHVzdHJpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hMYW5ndWFnZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUxhbmd1YWdlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RGVwYXJ0bWVudHModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94Q2F0ZWdvcmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja2VkSWQoaWQ6IG51bWJlciwgdHlwZTogYW55KSB7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NhdGVnb3JpZXMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybUNhdGVnb3JpZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdkZXBhcnRtZW50cycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybURlcGFydG1lbnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAnaW5kdXN0cmllcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1JbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtSW5kdXN0cmllc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2xhbmd1YWdlcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1MYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1MYW5ndWFnZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdleHRyYXNlcnZpY2VzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAncHJpY2luZ21vZGVscycpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXdGZWF0dXJlOnN0cmluZztcbiAgICBuZXdUaGFpRmVhdHVyZTpzdHJpbmc7XG4gICAgb25BZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaGFpRmVhdHVyZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICBpZiAobmV3RmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmVhdHVyZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGVGZWF0dXJlKGZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKXtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICBsZXQgaiA9IHRoaXMubXlGb3JtRmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgICAgICB0aGlzLmZpbGVDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGZpbGVDaGFuZ2VTY3JlZW5zaG90cyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTCk7XG4gICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRGVsZXRlU2NyZWVuc2hvdChzcmM6IGFueSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuaW5kZXhPZihzcmMpO1xuICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbnNob3RzQ2hvc2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vLy8vLy8vLy8vLy8gQWxlcnQgLy8vLy8vLy8vLy8vL1xuICAgIGFsZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtZXNzYWdlQWxlcnQ6IHN0cmluZyA9ICcnO1xuICAgIHR5cGVBbGVydDogc3RyaW5nID0gJ3N1Y2Nlc3MnO1xuXG4gICAgb25BbGVydChtc2c6IHN0cmluZyl7XG4gICAgICAgIHRoaXMubWVzc2FnZUFsZXJ0ID0gbXNnO1xuICAgICAgICB0aGlzLmFsZXJ0ZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGVydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VBbGVydCA9ICcnO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0U3RhdHVzKGlkOiBhbnksIHN0YXR1czogYW55KSB7XG5cbiAgICAgICAgdGhpcy5vbkFsZXJ0KHN0YXR1cyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVQcm9kdWN0U3RhdHVzKGlkLCBzdGF0dXMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DYW5jbGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdFN0YXR1cyhpZCwgc3RhdHVzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMzAwMCk7XG5cblxuICAgIH1cblxuICAgIHNob3dNb250aGx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1llYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dGcmVlU2VydmljZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dPdGhlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VNb250aGx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNpbmdsZXByaWNlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZVllYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaWNlcmFuZ2VMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBkYXlNb2RlbDogbnVtYmVyO1xuICAgIG90aGVyTW9kZWw6IHN0cmluZztcblxuICAgIHByaWNlU3RhcnRNb250aGx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZVN0YXJ0WWVhcmx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZVN0YXJ0TGlmZXRpbWVNb2RlbDogbnVtYmVyO1xuXG4gICAgcHJpY2VFbmRNb250aGx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZUVuZFllYXJseU1vZGVsOiBudW1iZXI7XG4gICAgcHJpY2VFbmRMaWZldGltZU1vZGVsOiBudW1iZXI7XG5cbiAgICBjdXJyZW5jeU1vbnRobHlNb2RlbDogYW55O1xuICAgIGN1cnJlbmN5WWVhcmx5TW9kZWw6IGFueTtcbiAgICBjdXJyZW5jeUxpZmV0aW1lTW9kZWw6IGFueTtcblxuICAgIGNoZWNrZWRQcmljaW5nQWxsOmJvb2xlYW47XG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsQWxsKHZhbHVlOmFueSwgZXZlbnQ6YW55KXtcblxuICAgICAgICBsZXQgdGVtcDogYW55ID0ge1xuICAgICAgICAgICAgcHJpY2luZ0lkOiBbXSxcbiAgICAgICAgICAgIGZvcm1QcmljaW5nSWQ6IFtdLFxuICAgICAgICAgICAgcHJpY2luZ05hbWU6IFtdLFxuICAgICAgICAgICAgZm9ybVByaWNpbmdOYW1lOiBbXSxcbiAgICAgICAgICAgIGlkOltdLFxuICAgICAgICAgICAgbW9kZWw6W11cbiAgICAgICAgfTtcblxuICAgICAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQcmljaW5nQWxsID0gdHJ1ZTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJpY2luZ21vZGVsc1RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGVtcC5wcmljaW5nSWQucHVzaCh0aGlzLnByaWNpbmdtb2RlbHNUYWdbaV0uZGJpZCk7XG4gICAgICAgICAgICAgICAgdGVtcC5wcmljaW5nTmFtZS5wdXNoKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5mb3JtUHJpY2luZ0lkLnB1c2godGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLmZvcm1QcmljaW5nTmFtZS5wdXNoKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLm1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXAuaWQgPSBfLmRpZmZlcmVuY2UodGVtcC5wcmljaW5nSWQsdGVtcC5mb3JtUHJpY2luZ0lkKTtcbiAgICAgICAgICAgIHRlbXAubW9kZWwgPSBfLmRpZmZlcmVuY2UodGVtcC5wcmljaW5nTmFtZSx0ZW1wLmZvcm1QcmljaW5nTmFtZSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0ZW1wLmlkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGVtcC5pZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogdGVtcC5tb2RlbFtpXSxcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQcmljaW5nQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMucHJpY2luZ21vZGVsc1RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsID0gW107XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuXG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFByaWNpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdGcmVlbWl1bSBWZXJzaW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAnaWQnOiB2YWx1ZS5kYmlkLFxuICAgICAgICAgICAgICAgICdtb2RlbCc6IHZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwodmFsdWUubmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdGcmVlbWl1bSBWZXJzaW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ090aGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCB2YWx1ZS5kYmlkXSk7XG5cbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU2VsZWN0UHJpY2luZ1BsYW4odmFsdWU6IGFueSwgaWQ6IGFueSwgbmFtZTogYW55KSB7XG5cbiAgICAgICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKG5hbWUpO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJTaW5nbGUgUHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByaWNlIHJhbmdlXCI6XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdNb250aGx5IFByaWNpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB3ZSBhcmUgb3V0IG9mIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwbGFuXCI6IHZhbHVlLFxuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbklucHV0UHJpY2UoaWQ6IGFueSwgcHJpY2Vfc3RhcnQ6IGFueSwgcHJpY2VfZW5kOiBhbnksIGN1cnJlbmN5OiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogcHJpY2Vfc3RhcnQsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiBwcmljZV9lbmQsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IGN1cnJlbmN5LFxuICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXREYXkoaWQ6IGFueSwgZGF5OiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiBkYXksXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogb3RoZXJfbW9kZWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CaW5kaW5nUHJpY2luZ01vZGVsKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRheU1vZGVsID0gdmFsdWUuZGF5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3lNb250aGx5TW9kZWwgPSB2YWx1ZS5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1NpbmdsZSBQcmljZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRNb250aGx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdQcmljZSByYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTW9udGhseU1vZGVsID0gdmFsdWUucHJpY2VfZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3lZZWFybHlNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0WWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdQcmljZSByYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0WWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZFllYXJseU1vZGVsID0gdmFsdWUucHJpY2VfZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeUxpZmV0aW1lTW9kZWwgPSB2YWx1ZS5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1NpbmdsZSBQcmljZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZExpZmV0aW1lTW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm90aGVyTW9kZWwgPSB2YWx1ZS5vdGhlcl9tb2RlbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgd2UgYXJlIG91dCBvZiBcIiArIHZhbHVlICsgXCIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNldEJpbmRpbmdNb2RlbCh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdZZWFybHkgU3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZFllYXJseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01vbnRobHkgUHJpY2luZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTW9udGhseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0xpZmV0aW1lIExpY2Vuc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRMaWZldGltZU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWVtaXVtIFZlcnNpb24nOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnT3RoZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIHdlIGFyZSBvdXQgb2YgXCIgKyB0eXBlICsgXCIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB2aWRlbzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZW1iZWRZb3V0dWJlKHVybDogYW55KSB7XG5cbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52aWRlbyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaWQgPSB1cmwuc3BsaXQoJz0nLCAyKVsxXTtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsID0gdXJsO1xuICAgICAgICAgICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWR9YCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVZpZGVvKCkge1xuICAgICAgICB0aGlzLnZpZGVvID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlGb3JtVXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1iZWRVcmwgPSBudWxsO1xuICAgIH1cblxuXG4gICAgb25DYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgdGhhaUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZztcblxuICAgICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
