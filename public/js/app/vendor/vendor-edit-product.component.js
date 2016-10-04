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
var validation_service_1 = require("../shared/validation/validation.service");
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
        this.videoType = false;
        this.embedVideo = false;
        this.onYoutube = false;
        this.myUrl = '';
        this.thaiInput = false;
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
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
            pricing_model: [''],
            price_start: [''],
            price_end: [''],
            currency: [''],
            licensing_model: [''],
            thai_description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            thai_shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])]
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
                    _this.loading = false;
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
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myFormThaiFeatures);
        // console.log(product_thai);
        this.updated = false;
        this._productService.updateProduct(appId, product)
            .subscribe(function (res) {
            _this.updated = true;
            _this.onAlert('Successfully Updated', 'success');
        }, function (error) {
            _this.onAlert('Failed', 'danger');
            _this.errorMessage = error;
        });
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
    VendorEditProductComponent.prototype.onAlert = function (msg, type) {
        var _this = this;
        this.messageAlert = msg;
        this.typeAlert = type;
        this.alerted = true;
        setTimeout(function () {
            _this.alerted = false;
            _this.messageAlert = '';
        }, 3000);
    };
    VendorEditProductComponent.prototype.updateProductStatus = function (id, status) {
        var _this = this;
        this._productService.updateProductStatus(id, status).subscribe(function () {
            _this.onAlert('Updated Successfully', 'success');
            status == 'pending' ? _this.onCancle() : _this.onRefresh();
        }, function (error) {
            _this.errorMessage = error;
            _this.onAlert('Updated Failed', 'danger');
        });
        //location.reload();
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
    VendorEditProductComponent.prototype.deleteVideo = function () {
        this.videoType = false;
        this.embedVideo = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUErRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNGLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzdFLDhCQUFzQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBR3ZELG1DQUFnQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBVzFFO0lBdURJLG9DQUFvQixHQUFnQixFQUNoQixlQUErQixFQUMvQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsVUFBa0M7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBekRyRCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBUWhCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUU3QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFFN0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMz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QyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELHdEQUFtQixHQUFuQixVQUFvQixJQUFZO1FBRTVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztZQUNWLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUVMLENBQUM7SUFsMEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQzFELENBQUM7O2tDQUFBO0lBK3pCRixpQ0FBQztBQUFELENBN3pCQSxBQTZ6QkMsSUFBQTtBQTd6Qlksa0NBQTBCLDZCQTZ6QnRDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1lZGl0LXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JFZGl0UHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGVtcHR5OiBhbnkgPSAnJztcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGFwcHM6IGFueVtdO1xuICAgIGFwcHNfdGg6YW55W107XG5cblxuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgZXh0cmFzZXJ2aWNlc1RhZzogYW55W10gPSBbXTtcblxuICAgIHByaWNpbmdtb2RlbHNUYWc6IGFueVtdID0gW107XG5cbiAgICBteUZvcm1JbmR1c3RyaWVzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybUxhbmd1YWdlczogYW55W10gPSBbXTtcbiAgICBteUZvcm1EZXBhcnRtZW50czogYW55W10gPSBbXTtcbiAgICBteUZvcm1DYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybUV4dHJhc2VydmljZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnlbXSA9IFtdO1xuXG4gICAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtVGhhaUZlYXR1cmVzOmFueVtdID0gW107XG5cbiAgICBteUZvcm1Mb2dvOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIG15Rm9ybVNjcmVlbnNob3RzOiBhbnlbXSA9IFtdO1xuICAgIHNjcmVlbnNob3RzQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogNTAwXG4gICAgfTtcblxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBbJ1RIQicsICdTREcnLCAnVVNEJywgJ0FVRCddXG4gICAgfTtcblxuICAgIG15Rm9ybVVybDogJyc7XG4gICAgZW1iZWRVcmw6IFNhZmVSZXNvdXJjZVVybDtcblxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvL0NhbGxiYWNrIGFmdGVyIGFkZGVkIHByb2R1Y3RcbiAgICB1cGRhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHNlbGVjdGVkTGFuZzogc3RyaW5nID0gJ2VuJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgX3Nhbml0aXplcjogRG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldKV0sXG4gICAgICAgICAgICBsb2dvOiBbJyddLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0pXSxcbiAgICAgICAgICAgIHNob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldLFxuICAgICAgICAgICAgbWlucmVxdWlyZW1lbnQ6IFsnJyxWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICAgICAgICB0ZXJtc25jb25kOiBbJycsVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldLFxuICAgICAgICAgICAgeW91dHViZTogWycnXSxcbiAgICAgICAgICAgIGluZHVzdHJpZXM6IFsnJ10sXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50czogWycnXSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnJ10sXG4gICAgICAgICAgICBmZWF0dXJlczogWycnXSxcbiAgICAgICAgICAgIHNjcmVlbnNob3RzOiBbJyddLFxuICAgICAgICAgICAgcHVyY2hhc2VfbGluazogWycnXSxcbiAgICAgICAgICAgIHByaWNpbmdfbW9kZWw6IFsnJ10sXG4gICAgICAgICAgICBwcmljZV9zdGFydDogWycnXSxcbiAgICAgICAgICAgIHByaWNlX2VuZDogWycnXSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBbJyddLFxuICAgICAgICAgICAgbGljZW5zaW5nX21vZGVsOiBbJyddLFxuICAgICAgICAgICAgdGhhaV9kZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSldLFxuICAgICAgICAgICAgdGhhaV9zaG9ydGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTAwKV0pXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0SWQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0VGFncygpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3RhZ3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYXNlcnZpY2VzVGFnID0gcHJvZHVjdF90YWdzLmV4dHJhc2VydmljZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkVmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljaW5nbW9kZWxzVGFnID0gcHJvZHVjdF90YWdzLnByaWNpbmdtb2RlbHM7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG5cblxuICAgIH1cblxuICAgIGdldFByb2R1Y3RJZCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgICAgICAucGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0SWQoaWQpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYXBwcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcy5kYXRhWydlbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwc190aCA9IGFwcHMuZGF0YVsndGgnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyA9IGFwcHMuZGF0YVsnZW4nXS5sb2dvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWJlZFlvdXR1YmUoYXBwcy5kYXRhWydlbiddLnlvdXR1YmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLnByaWNpbmdtb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKGFwcHMuZGF0YVsnZW4nXS5wcmljaW5nbW9kZWxzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJpbmRpbmdQcmljaW5nTW9kZWwodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLnNjcmVlbnNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChhcHBzLmRhdGFbJ2VuJ10uc2NyZWVuc2hvdHNbaV0udXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YVsnZW4nXS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnB1c2goYXBwcy5kYXRhWydlbiddLmZlYXR1cmVzW2ldLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWyd0aCddLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnB1c2goYXBwcy5kYXRhWyd0aCddLmZlYXR1cmVzW2ldLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10uaW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMucHVzaChhcHBzLmRhdGFbJ2VuJ10uaW5kdXN0cmllc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2goYXBwcy5kYXRhWydlbiddLmNhdGVnb3JpZXNbaV0uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKGFwcHMuZGF0YVsnZW4nXS5sYW5ndWFnZXNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YVsnZW4nXS5kZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2goYXBwcy5kYXRhWydlbiddLmRlcGFydG1lbnRzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2goYXBwcy5kYXRhWydlbiddLmV4dHJhc2VydmljZXNbaV0uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgb25SZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RJZChpZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShhcHBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcHBJZDogYW55LCB2YWx1ZTogT2JqZWN0KSB7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ28sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnNob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5taW5yZXF1aXJlbWVudCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRlcm1zbmNvbmQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUucHVyY2hhc2VfbGluayxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGhhaV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdF90aGFpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVQcm9kdWN0KGFwcElkLCBwcm9kdWN0KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BbGVydCgnU3VjY2Vzc2Z1bGx5IFVwZGF0ZWQnLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ0ZhaWxlZCcsICdkYW5nZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrYm94SW5kdXN0cmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUluZHVzdHJpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hMYW5ndWFnZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUxhbmd1YWdlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RGVwYXJ0bWVudHModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94Q2F0ZWdvcmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5pbmRleE9mKHZhbHVlLmRiaWQpO1xuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja2VkSWQoaWQ6IG51bWJlciwgdHlwZTogYW55KSB7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NhdGVnb3JpZXMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybUNhdGVnb3JpZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdkZXBhcnRtZW50cycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1EZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybURlcGFydG1lbnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAnaW5kdXN0cmllcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1JbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtSW5kdXN0cmllc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2xhbmd1YWdlcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1MYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1MYW5ndWFnZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdleHRyYXNlcnZpY2VzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAncHJpY2luZ21vZGVscycpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXdGZWF0dXJlOnN0cmluZztcbiAgICBuZXdUaGFpRmVhdHVyZTpzdHJpbmc7XG4gICAgb25BZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdUaGFpRmVhdHVyZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICBpZiAobmV3RmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmVhdHVyZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGVGZWF0dXJlKGZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKXtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICBsZXQgaiA9IHRoaXMubXlGb3JtRmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkw7XG5cbiAgICAgICAgdGhpcy5maWxlQ2hvc2VuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlU2NyZWVuc2hvdHMoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkwpO1xuICAgICAgICB0aGlzLnNjcmVlbnNob3RzQ2hvc2VuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZVNjcmVlbnNob3Qoc3JjOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLmluZGV4T2Yoc3JjKTtcbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLy8vLy8vLy8vLy8vIEFsZXJ0IC8vLy8vLy8vLy8vLy9cbiAgICBhbGVydGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVzc2FnZUFsZXJ0OiBzdHJpbmcgPSAnJztcbiAgICB0eXBlQWxlcnQ6IHN0cmluZyA9ICdzdWNjZXNzJztcblxuICAgIG9uQWxlcnQobXNnOiBzdHJpbmcsIHR5cGU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMubWVzc2FnZUFsZXJ0ID0gbXNnO1xuICAgICAgICB0aGlzLnR5cGVBbGVydCA9IHR5cGU7XG4gICAgICAgIHRoaXMuYWxlcnRlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQWxlcnQgPSAnJztcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZHVjdFN0YXR1cyhpZDogYW55LCBzdGF0dXM6IGFueSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVQcm9kdWN0U3RhdHVzKGlkLCBzdGF0dXMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1VwZGF0ZWQgU3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgc3RhdHVzID09ICdwZW5kaW5nJyA/IHRoaXMub25DYW5jbGUoKTogdGhpcy5vblJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdVcGRhdGVkIEZhaWxlZCcsICdkYW5nZXInKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIH1cblxuXG4gICAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93WWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0xpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd090aGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlTW9udGhseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmljZXJhbmdlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGRheU1vZGVsOiBudW1iZXI7XG4gICAgb3RoZXJNb2RlbDogc3RyaW5nO1xuXG4gICAgcHJpY2VTdGFydE1vbnRobHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlU3RhcnRZZWFybHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlU3RhcnRMaWZldGltZU1vZGVsOiBudW1iZXI7XG5cbiAgICBwcmljZUVuZE1vbnRobHlNb2RlbDogbnVtYmVyO1xuICAgIHByaWNlRW5kWWVhcmx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZUVuZExpZmV0aW1lTW9kZWw6IG51bWJlcjtcblxuICAgIGN1cnJlbmN5TW9udGhseU1vZGVsOiBhbnk7XG4gICAgY3VycmVuY3lZZWFybHlNb2RlbDogYW55O1xuICAgIGN1cnJlbmN5TGlmZXRpbWVNb2RlbDogYW55O1xuXG4gICAgY2hlY2tlZFByaWNpbmdBbGw6Ym9vbGVhbjtcblxuICAgIG9uQ2hlY2tib3hQcmljaW5nTW9kZWxBbGwodmFsdWU6YW55LCBldmVudDphbnkpe1xuXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSB7XG4gICAgICAgICAgICBwcmljaW5nSWQ6IFtdLFxuICAgICAgICAgICAgZm9ybVByaWNpbmdJZDogW10sXG4gICAgICAgICAgICBwcmljaW5nTmFtZTogW10sXG4gICAgICAgICAgICBmb3JtUHJpY2luZ05hbWU6IFtdLFxuICAgICAgICAgICAgaWQ6W10sXG4gICAgICAgICAgICBtb2RlbDpbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFByaWNpbmdBbGwgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wcmljaW5nbW9kZWxzVGFnLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0ZW1wLnByaWNpbmdJZC5wdXNoKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5kYmlkKTtcbiAgICAgICAgICAgICAgICB0ZW1wLnByaWNpbmdOYW1lLnB1c2godGhpcy5wcmljaW5nbW9kZWxzVGFnW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLmZvcm1QcmljaW5nSWQucHVzaCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAuZm9ybVByaWNpbmdOYW1lLnB1c2godGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0ubW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcC5pZCA9IF8uZGlmZmVyZW5jZSh0ZW1wLnByaWNpbmdJZCx0ZW1wLmZvcm1QcmljaW5nSWQpO1xuICAgICAgICAgICAgdGVtcC5tb2RlbCA9IF8uZGlmZmVyZW5jZSh0ZW1wLnByaWNpbmdOYW1lLHRlbXAuZm9ybVByaWNpbmdOYW1lKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRlbXAuaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiB0ZW1wLmlkW2ldLFxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiB0ZW1wLm1vZGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFByaWNpbmdBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5wcmljaW5nbW9kZWxzVGFnLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwodGhpcy5wcmljaW5nbW9kZWxzVGFnW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwgPSBbXTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIG9uQ2hlY2tib3hQcmljaW5nTW9kZWwodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuXG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdPdGhlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgICAgICdpZCc6IHZhbHVlLmRiaWQsXG4gICAgICAgICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICBcInBsYW5cIjogJycsXG4gICAgICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25SZXNldEJpbmRpbmdNb2RlbCh2YWx1ZS5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmRiaWRdKTtcblxuICAgICAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcblxuICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwobmFtZSk7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcIlNpbmdsZSBQcmljZVwiOlxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUHJpY2UgcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIHdlIGFyZSBvdXQgb2YgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgICAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICAgICAgICBcInBsYW5cIjogdmFsdWUsXG4gICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6ICcnLFxuICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXRQcmljZShpZDogYW55LCBwcmljZV9zdGFydDogYW55LCBwcmljZV9lbmQ6IGFueSwgY3VycmVuY3k6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnB1dERheShpZDogYW55LCBkYXk6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6IGRheSxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JbnB1dE90aGVyTW9kZWwoaWQ6IGFueSwgb3RoZXJfbW9kZWw6IGFueSkge1xuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiBvdGhlcl9tb2RlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJpbmRpbmdQcmljaW5nTW9kZWwodmFsdWU6IGFueSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5TW9kZWwgPSB2YWx1ZS5kYXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeU1vbnRobHlNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRNb250aGx5TW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1llYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeVllYXJseU1vZGVsID0gdmFsdWUuY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdTaW5nbGUgUHJpY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kWWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbmN5TGlmZXRpbWVNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRMaWZldGltZU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnUHJpY2UgcmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX2VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJNb2RlbCA9IHZhbHVlLm90aGVyX21vZGVsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB3ZSBhcmUgb3V0IG9mIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2V0QmluZGluZ01vZGVsKHR5cGU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1llYXJseSBTdWJzY3JpcHRpb24nOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydFllYXJseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kWWVhcmx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTW9udGhseSBQcmljaW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTGlmZXRpbWUgTGljZW5zZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZExpZmV0aW1lTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRnJlZW1pdW0gVmVyc2lvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdPdGhlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlck1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgd2UgYXJlIG91dCBvZiBcIiArIHR5cGUgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHZpZGVvVHlwZTpib29sZWFuPWZhbHNlO1xuICAgIGVtYmVkVmlkZW86Ym9vbGVhbj1mYWxzZTtcbiAgICBvbllvdXR1YmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBteVVybCA6IHN0cmluZyA9ICcnO1xuXG4gICAgZW1iZWRZb3V0dWJlKHVybDogYW55KSB7XG5cbiAgICAgICAgdGhpcy5teVVybCA9ICcnO1xuICAgICAgICB0aGlzLmVtYmVkVmlkZW8gPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKFZhbGlkYXRpb25TZXJ2aWNlLnlvdXR1YmVQYXJzZXIodXJsKSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB1cmwuc3BsaXQoJz0nLCAyKVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVVybCA9IHVybDtcbiAgICAgICAgICAgICAgICB0aGlzLmVtYmVkVXJsID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uWW91dHViZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vbllvdXR1YmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LDMwMDApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBkZWxldGVWaWRlbygpIHtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWJlZFZpZGVvID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlGb3JtVXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1iZWRVcmwgPSBudWxsO1xuICAgIH1cblxuXG4gICAgb25DYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgdGhhaUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZztcblxuICAgICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
