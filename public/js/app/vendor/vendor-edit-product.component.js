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
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        var product_thai = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormThaiFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices);
        // console.log(product_thai);
        this.updated = false;
        var tempProduct = [];
        tempProduct.push(product, product_thai);
        this._productService.updateProduct(appId, tempProduct)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUErRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNGLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzdFLDhCQUFzQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBR3ZELG1DQUFnQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBVzFFO0lBdURJLG9DQUFvQixHQUFnQixFQUNoQixlQUErQixFQUMvQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsVUFBa0M7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBekRyRCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBUWhCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUU3QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFFN0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMz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Q3JCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDMUQsQ0FBQzs7a0NBQUE7SUFtMUJGLGlDQUFDO0FBQUQsQ0FqMUJBLEFBaTFCQyxJQUFBO0FBajFCWSxrQ0FBMEIsNkJBaTFCdEMsQ0FBQSIsImZpbGUiOiJ2ZW5kb3IvdmVuZG9yLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RvbVNhbml0aXphdGlvblNlcnZpY2UsIFNhZmVSZXNvdXJjZVVybCwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SW1hZ2VVcGxvYWQsIEltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tICcuLi9zaGFyZWQvbmcyLXNlcnZpY2UvbmcyLWltYWdldXBsb2FkL2luZGV4JztcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtdmVuZG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3ZlbmRvci1lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckVkaXRQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZW1wdHk6IGFueSA9ICcnO1xuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgYXBwczogYW55W107XG4gICAgYXBwc190aDphbnlbXTtcblxuXG4gICAgaW5kdXN0cmllc1RhZzogYW55W10gPSBbXTtcbiAgICBjYXRlZ29yaWVzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGxhbmd1YWdlc1RhZzogYW55W10gPSBbXTtcbiAgICBkZXBhcnRtZW50c1RhZzogYW55W10gPSBbXTtcbiAgICBleHRyYXNlcnZpY2VzVGFnOiBhbnlbXSA9IFtdO1xuXG4gICAgcHJpY2luZ21vZGVsc1RhZzogYW55W10gPSBbXTtcblxuICAgIG15Rm9ybUluZHVzdHJpZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtTGFuZ3VhZ2VzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybURlcGFydG1lbnRzOiBhbnlbXSA9IFtdO1xuICAgIG15Rm9ybUNhdGVnb3JpZXM6IGFueVtdID0gW107XG4gICAgbXlGb3JtRXh0cmFzZXJ2aWNlczogYW55W10gPSBbXTtcbiAgICBteUZvcm1QcmljaW5nTW9kZWw6IGFueVtdID0gW107XG5cbiAgICBteUZvcm1GZWF0dXJlczogYW55W10gPSBbXTtcbiAgICBteUZvcm1UaGFpRmVhdHVyZXM6YW55W10gPSBbXTtcblxuICAgIG15Rm9ybUxvZ286IHN0cmluZyA9ICcnO1xuICAgIGZpbGVDaG9zZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbXlGb3JtU2NyZWVuc2hvdHM6IGFueVtdID0gW107XG4gICAgc2NyZWVuc2hvdHNDaG9zZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIHJlc2l6ZU1heFdpZHRoOiA1MDBcbiAgICB9O1xuXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ11cbiAgICB9O1xuXG4gICAgbXlGb3JtVXJsOiAnJztcbiAgICBlbWJlZFVybDogU2FmZVJlc291cmNlVXJsO1xuXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8vQ2FsbGJhY2sgYWZ0ZXIgYWRkZWQgcHJvZHVjdFxuICAgIHVwZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgc2VsZWN0ZWRMYW5nOiBzdHJpbmcgPSAnZW4nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBfc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV0pXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSldLFxuICAgICAgICAgICAgc2hvcnRkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMCldKV0sXG4gICAgICAgICAgICBtaW5yZXF1aXJlbWVudDogWycnLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSxcbiAgICAgICAgICAgIHRlcm1zbmNvbmQ6IFsnJyxWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICAgICAgICB5b3V0dWJlOiBbJyddLFxuICAgICAgICAgICAgaW5kdXN0cmllczogWycnXSxcbiAgICAgICAgICAgIGxhbmd1YWdlczogWycnXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRzOiBbJyddLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogWycnXSxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbJyddLFxuICAgICAgICAgICAgc2NyZWVuc2hvdHM6IFsnJ10sXG4gICAgICAgICAgICBwdXJjaGFzZV9saW5rOiBbJyddLFxuICAgICAgICAgICAgcHJpY2luZ19tb2RlbDogWycnXSxcbiAgICAgICAgICAgIHByaWNlX3N0YXJ0OiBbJyddLFxuICAgICAgICAgICAgcHJpY2VfZW5kOiBbJyddLFxuICAgICAgICAgICAgY3VycmVuY3k6IFsnJ10sXG4gICAgICAgICAgICBsaWNlbnNpbmdfbW9kZWw6IFsnJ10sXG4gICAgICAgICAgICB0aGFpX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldKV0sXG4gICAgICAgICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RJZCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfdGFncyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBwcm9kdWN0X3RhZ3MubGFuZ3VhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhc2VydmljZXNUYWcgPSBwcm9kdWN0X3RhZ3MuZXh0cmFzZXJ2aWNlcztcbiAgICAgICAgICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNpbmdtb2RlbHNUYWcgPSBwcm9kdWN0X3RhZ3MucHJpY2luZ21vZGVscztcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcblxuXG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdElkKCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RJZChpZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShhcHBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHBzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcHMgPSBhcHBzLmRhdGFbJ2VuJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBzX3RoID0gYXBwcy5kYXRhWyd0aCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gYXBwcy5kYXRhWydlbiddLmxvZ287XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYmVkWW91dHViZShhcHBzLmRhdGFbJ2VuJ10ueW91dHViZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10ucHJpY2luZ21vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goYXBwcy5kYXRhWydlbiddLnByaWNpbmdtb2RlbHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmluZGluZ1ByaWNpbmdNb2RlbCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10uc2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5wdXNoKGFwcHMuZGF0YVsnZW4nXS5zY3JlZW5zaG90c1tpXS51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMucHVzaChhcHBzLmRhdGFbJ2VuJ10uZmVhdHVyZXNbaV0udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ3RoJ10uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMucHVzaChhcHBzLmRhdGFbJ3RoJ10uZmVhdHVyZXNbaV0udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHMuZGF0YVsnZW4nXS5pbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcy5wdXNoKGFwcHMuZGF0YVsnZW4nXS5pbmR1c3RyaWVzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10uY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMucHVzaChhcHBzLmRhdGFbJ2VuJ10uY2F0ZWdvcmllc1tpXS5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10ubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2goYXBwcy5kYXRhWydlbiddLmxhbmd1YWdlc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcy5kYXRhWydlbiddLmRlcGFydG1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaChhcHBzLmRhdGFbJ2VuJ10uZGVwYXJ0bWVudHNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzLmRhdGFbJ2VuJ10uZXh0cmFzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaChhcHBzLmRhdGFbJ2VuJ10uZXh0cmFzZXJ2aWNlc1tpXS5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKGlkKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFwcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcHMgPSBhcHBzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGFwcElkOiBhbnksIHZhbHVlOiBPYmplY3QpIHtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdF90aGFpID0gbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX3Nob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5taW5yZXF1aXJlbWVudCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRlcm1zbmNvbmQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnB1cmNoYXNlX2xpbmssXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RfdGhhaSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRlbXBQcm9kdWN0OiBhbnlbXSA9IFtdO1xuICAgICAgICB0ZW1wUHJvZHVjdC5wdXNoKHByb2R1Y3QsIHByb2R1Y3RfdGhhaSk7XG5cblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVQcm9kdWN0KGFwcElkLCB0ZW1wUHJvZHVjdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1N1Y2Nlc3NmdWxseSBVcGRhdGVkJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdGYWlsZWQnLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DaGVja2JveEluZHVzdHJpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94TGFuZ3VhZ2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja2JveENhdGVnb3JpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5wdXNoKHZhbHVlLmRiaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY2hlY2tlZElkKGlkOiBudW1iZXIsIHR5cGU6IGFueSkge1xuXG4gICAgICAgIGlmICh0eXBlID09ICdjYXRlZ29yaWVzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybUNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1DYXRlZ29yaWVzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAnZGVwYXJ0bWVudHMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtRGVwYXJ0bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1EZXBhcnRtZW50c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2luZHVzdHJpZXMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtSW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybUluZHVzdHJpZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdsYW5ndWFnZXMnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtTGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtTGFuZ3VhZ2VzW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAnZXh0cmFzZXJ2aWNlcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3ByaWNpbmdtb2RlbHMnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmV3RmVhdHVyZTpzdHJpbmc7XG4gICAgbmV3VGhhaUZlYXR1cmU6c3RyaW5nO1xuICAgIG9uQWRkTmV3RmVhdHVyZShuZXdGZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICAgICAgY2FzZSAndGgnOlxuICAgICAgICAgICAgICAgIGlmIChuZXdGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnB1c2gobmV3RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VGhhaUZlYXR1cmUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZlYXR1cmUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVsZXRlRmVhdHVyZShmZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAobGFuZyl7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgbGV0IGogPSB0aGlzLm15Rm9ybUZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGogIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuXG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZmlsZUNoYW5nZVNjcmVlbnNob3RzKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnB1c2goaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMKTtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25EZWxldGVTY3JlZW5zaG90KHNyYzogYW55KSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1TY3JlZW5zaG90cy5pbmRleE9mKHNyYyk7XG4gICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8vLy8vLy8vLy8vLyBBbGVydCAvLy8vLy8vLy8vLy8vXG4gICAgYWxlcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG1lc3NhZ2VBbGVydDogc3RyaW5nID0gJyc7XG4gICAgdHlwZUFsZXJ0OiBzdHJpbmcgPSAnc3VjY2Vzcyc7XG5cbiAgICBvbkFsZXJ0KG1zZzogc3RyaW5nLCB0eXBlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLm1lc3NhZ2VBbGVydCA9IG1zZztcbiAgICAgICAgdGhpcy50eXBlQWxlcnQgPSB0eXBlO1xuICAgICAgICB0aGlzLmFsZXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUFsZXJ0ID0gJyc7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2R1Y3RTdGF0dXMoaWQ6IGFueSwgc3RhdHVzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdFN0YXR1cyhpZCwgc3RhdHVzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdVcGRhdGVkIFN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcbiAgICAgICAgICAgIHN0YXR1cyA9PSAncGVuZGluZycgPyB0aGlzLm9uQ2FuY2xlKCk6IHRoaXMub25SZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgIHRoaXMub25BbGVydCgnVXBkYXRlZCBGYWlsZWQnLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICB9XG5cblxuICAgIHNob3dNb250aGx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1llYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dGcmVlU2VydmljZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dPdGhlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VNb250aGx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNpbmdsZXByaWNlWWVhcmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpY2VyYW5nZVllYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2luZ2xlcHJpY2VMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaWNlcmFuZ2VMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBkYXlNb2RlbDogbnVtYmVyO1xuICAgIG90aGVyTW9kZWw6IHN0cmluZztcblxuICAgIHByaWNlU3RhcnRNb250aGx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZVN0YXJ0WWVhcmx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZVN0YXJ0TGlmZXRpbWVNb2RlbDogbnVtYmVyO1xuXG4gICAgcHJpY2VFbmRNb250aGx5TW9kZWw6IG51bWJlcjtcbiAgICBwcmljZUVuZFllYXJseU1vZGVsOiBudW1iZXI7XG4gICAgcHJpY2VFbmRMaWZldGltZU1vZGVsOiBudW1iZXI7XG5cbiAgICBjdXJyZW5jeU1vbnRobHlNb2RlbDogYW55O1xuICAgIGN1cnJlbmN5WWVhcmx5TW9kZWw6IGFueTtcbiAgICBjdXJyZW5jeUxpZmV0aW1lTW9kZWw6IGFueTtcblxuICAgIGNoZWNrZWRQcmljaW5nQWxsOmJvb2xlYW47XG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsQWxsKHZhbHVlOmFueSwgZXZlbnQ6YW55KXtcblxuICAgICAgICBsZXQgdGVtcDogYW55ID0ge1xuICAgICAgICAgICAgcHJpY2luZ0lkOiBbXSxcbiAgICAgICAgICAgIGZvcm1QcmljaW5nSWQ6IFtdLFxuICAgICAgICAgICAgcHJpY2luZ05hbWU6IFtdLFxuICAgICAgICAgICAgZm9ybVByaWNpbmdOYW1lOiBbXSxcbiAgICAgICAgICAgIGlkOltdLFxuICAgICAgICAgICAgbW9kZWw6W11cbiAgICAgICAgfTtcblxuICAgICAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQcmljaW5nQWxsID0gdHJ1ZTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJpY2luZ21vZGVsc1RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGVtcC5wcmljaW5nSWQucHVzaCh0aGlzLnByaWNpbmdtb2RlbHNUYWdbaV0uZGJpZCk7XG4gICAgICAgICAgICAgICAgdGVtcC5wcmljaW5nTmFtZS5wdXNoKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5mb3JtUHJpY2luZ0lkLnB1c2godGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLmZvcm1QcmljaW5nTmFtZS5wdXNoKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLm1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXAuaWQgPSBfLmRpZmZlcmVuY2UodGVtcC5wcmljaW5nSWQsdGVtcC5mb3JtUHJpY2luZ0lkKTtcbiAgICAgICAgICAgIHRlbXAubW9kZWwgPSBfLmRpZmZlcmVuY2UodGVtcC5wcmljaW5nTmFtZSx0ZW1wLmZvcm1QcmljaW5nTmFtZSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0ZW1wLmlkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGVtcC5pZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogdGVtcC5tb2RlbFtpXSxcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQcmljaW5nQWxsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMucHJpY2luZ21vZGVsc1RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKHRoaXMucHJpY2luZ21vZGVsc1RhZ1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsID0gW107XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuXG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFByaWNpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdGcmVlbWl1bSBWZXJzaW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAnaWQnOiB2YWx1ZS5kYmlkLFxuICAgICAgICAgICAgICAgICdtb2RlbCc6IHZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgXCJwbGFuXCI6ICcnLFxuICAgICAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzZXRCaW5kaW5nTW9kZWwodmFsdWUubmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdGcmVlbWl1bSBWZXJzaW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ090aGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCB2YWx1ZS5kYmlkXSk7XG5cbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU2VsZWN0UHJpY2luZ1BsYW4odmFsdWU6IGFueSwgaWQ6IGFueSwgbmFtZTogYW55KSB7XG5cbiAgICAgICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKG5hbWUpO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJTaW5nbGUgUHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ01vbnRobHkgUHJpY2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByaWNlIHJhbmdlXCI6XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdNb250aGx5IFByaWNpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB3ZSBhcmUgb3V0IG9mIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICAgICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgICAgICAgXCJwbGFuXCI6IHZhbHVlLFxuICAgICAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbklucHV0UHJpY2UoaWQ6IGFueSwgcHJpY2Vfc3RhcnQ6IGFueSwgcHJpY2VfZW5kOiBhbnksIGN1cnJlbmN5OiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogcHJpY2Vfc3RhcnQsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiBwcmljZV9lbmQsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IGN1cnJlbmN5LFxuICAgICAgICAgICAgXCJkYXlcIjogJycsXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXREYXkoaWQ6IGFueSwgZGF5OiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiBkYXksXG4gICAgICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICAgICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgICAgICBcImRheVwiOiAnJyxcbiAgICAgICAgICAgIFwib3RoZXJfbW9kZWxcIjogb3RoZXJfbW9kZWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CaW5kaW5nUHJpY2luZ01vZGVsKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRheU1vZGVsID0gdmFsdWUuZGF5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3lNb250aGx5TW9kZWwgPSB2YWx1ZS5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1NpbmdsZSBQcmljZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRNb250aGx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdQcmljZSByYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTW9udGhseU1vZGVsID0gdmFsdWUucHJpY2VfZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3lZZWFybHlNb2RlbCA9IHZhbHVlLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0WWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdQcmljZSByYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0WWVhcmx5TW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZFllYXJseU1vZGVsID0gdmFsdWUucHJpY2VfZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeUxpZmV0aW1lTW9kZWwgPSB2YWx1ZS5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1NpbmdsZSBQcmljZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUucGxhbiA9PT0gJ1ByaWNlIHJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZExpZmV0aW1lTW9kZWwgPSB2YWx1ZS5wcmljZV9lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd090aGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm90aGVyTW9kZWwgPSB2YWx1ZS5vdGhlcl9tb2RlbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgd2UgYXJlIG91dCBvZiBcIiArIHZhbHVlICsgXCIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNldEJpbmRpbmdNb2RlbCh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdZZWFybHkgU3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUVuZFllYXJseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01vbnRobHkgUHJpY2luZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlRW5kTW9udGhseU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0xpZmV0aW1lIExpY2Vuc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VFbmRMaWZldGltZU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWVtaXVtIFZlcnNpb24nOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF5TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnT3RoZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIHdlIGFyZSBvdXQgb2YgXCIgKyB0eXBlICsgXCIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB2aWRlb1R5cGU6Ym9vbGVhbj1mYWxzZTtcbiAgICBlbWJlZFZpZGVvOmJvb2xlYW49ZmFsc2U7XG4gICAgb25Zb3V0dWJlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbXlVcmwgOiBzdHJpbmcgPSAnJztcblxuICAgIGVtYmVkWW91dHViZSh1cmw6IGFueSkge1xuXG4gICAgICAgIHRoaXMubXlVcmwgPSAnJztcbiAgICAgICAgdGhpcy5lbWJlZFZpZGVvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSB0cnVlO1xuXG4gICAgICAgIGlmICh1cmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChWYWxpZGF0aW9uU2VydmljZS55b3V0dWJlUGFyc2VyKHVybCkgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdXJsLnNwbGl0KCc9JywgMilbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5teUZvcm1VcmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UeXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vbllvdXR1YmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMub25Zb3V0dWJlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwzMDAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgZGVsZXRlVmlkZW8oKSB7XG4gICAgICAgIHRoaXMudmlkZW9UeXBlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1iZWRWaWRlbyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15Rm9ybVVybCA9ICcnO1xuICAgICAgICB0aGlzLmVtYmVkVXJsID0gbnVsbDtcbiAgICB9XG5cblxuICAgIG9uQ2FuY2xlKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvZGFzaGJvYXJkYF0pO1xuICAgIH1cblxuICAgIHRoYWlJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25DaGFuZ2VMYW5ndWFlRnJvbShsYW5nOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZyA9IGxhbmc7XG5cbiAgICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgICAgICBjYXNlICd0aCc6XG4gICAgICAgICAgICAgICAgdGhpcy50aGFpSW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
