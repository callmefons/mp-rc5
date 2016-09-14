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
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.required],
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
            purchase_link: ['']
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
        this._productService.addProduct(product)
            .subscribe(function (res) {
            _this.added = true;
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
    VendorAddProductComponent.prototype.onAddNewFeature = function (newFeature) {
        if (newFeature) {
            this.myFormFeatures.push(newFeature);
        }
    };
    VendorAddProductComponent.prototype.onDeleteFeature = function (feature) {
        var i = this.myFormFeatures.indexOf(feature);
        if (i != -1) {
            this.myFormFeatures.splice(i, 1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQStELDJCQUEyQixDQUFDLENBQUE7QUFDM0Ysc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFjdkQ7SUE0REUsbUNBQW9CLEdBQWUsRUFDZixlQUE4QixFQUM5QixNQUFhLEVBQ2IsVUFBaUM7UUFIakMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQTVEckQsWUFBTyxHQUFXLElBQUksQ0FBQztRQU92QixrQkFBYSxHQUFTLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFTLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFTLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFTLEVBQUUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBUyxFQUFFLENBQUM7UUFLNUIscUJBQWdCLEdBQVMsRUFBRSxDQUFDO1FBQzVCLG9CQUFlLEdBQVMsRUFBRSxDQUFDO1FBQzNCLHNCQUFpQixHQUFTLEVBQUUsQ0FBQztRQUM3QixxQkFBZ0IsR0FBUyxFQUFFLENBQUM7UUFDNUIsd0JBQW1CLEdBQVMsRUFBRSxDQUFDO1FBRS9CLG1CQUFjLEdBQVMsRUFBRSxDQUFDO1FBRTFCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUUzQixzQkFBaUIsR0FBUyxFQUFFLENBQUM7UUFDN0Isc0JBQWlCLEdBQVcsS0FBSyxDQUFDO1FBRWxDLGtCQUFhLEdBQWlCO1lBQzVCLGVB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SUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXhkSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsNkNBQTZDO1lBQzFELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1NBQ3ZELENBQUM7O2lDQUFBO0lBc2RGLGdDQUFDO0FBQUQsQ0FwZEEsQUFvZEMsSUFBQTtBQXBkWSxpQ0FBeUIsNEJBb2RyQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0ltYWdlVXBsb2FkLCBJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSAnLi4vc2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9pbmRleCc7XG5cblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC12ZW5kb3ItYWRkLXByb2R1Y3QnLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGVzL3ZlbmRvci1hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgVmVuZG9yQWRkUHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHN1YjpTdWJzY3JpcHRpb247XG4gIGxvYWRpbmc6Ym9vbGVhbiA9IHRydWU7XG5cbiAgbXlGb3JtOkZvcm1Hcm91cDtcblxuICBlcnJvck1lc3NhZ2U6c3RyaW5nO1xuICBhcHBzOmFueVtdO1xuXG4gIGluZHVzdHJpZXNUYWc6YW55W10gPSBbXTtcbiAgY2F0ZWdvcmllc1RhZzphbnlbXSA9IFtdO1xuICBsYW5ndWFnZXNUYWc6YW55W10gPSBbXTtcbiAgZGVwYXJ0bWVudHNUYWc6YW55W10gPSBbXTtcbiAgZXh0cmFzZXJ2aWNlc1RhZzphbnlbXSA9IFtdO1xuICB0YWdzJDpPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJvZHVjdDpQcm9kdWN0W107XG5cbiAgbXlGb3JtSW5kdXN0cmllczphbnlbXSA9IFtdO1xuICBteUZvcm1MYW5ndWFnZXM6YW55W10gPSBbXTtcbiAgbXlGb3JtRGVwYXJ0bWVudHM6YW55W10gPSBbXTtcbiAgbXlGb3JtQ2F0ZWdvcmllczphbnlbXSA9IFtdO1xuICBteUZvcm1FeHRyYXNlcnZpY2VzOmFueVtdID0gW107XG5cbiAgbXlGb3JtRmVhdHVyZXM6YW55W10gPSBbXTtcblxuICBteUZvcm1Mb2dvOnN0cmluZyA9ICcnO1xuICBmaWxlQ2hvc2VuOmJvb2xlYW4gPSBmYWxzZTtcblxuICBteUZvcm1TY3JlZW5zaG90czphbnlbXSA9IFtdO1xuICBzY3JlZW5zaG90c0Nob3Nlbjpib29sZWFuID0gZmFsc2U7XG5cbiAgcmVzaXplT3B0aW9uczpSZXNpemVPcHRpb25zID0ge1xuICAgIHJlc2l6ZU1heEhlaWdodDogNTAwLFxuICAgIHJlc2l6ZU1heFdpZHRoOiA1MDBcbiAgfTtcblxuICBvdGhlcjpib29sZWFuID0gZmFsc2U7XG4gIG15Rm9ybVByaWNpbmdNb2RlbDphbnkgPSBbXTtcblxuICBwdWJsaWMgb3B0aW9uczphbnkgPSB7XG4gICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ10sXG4gICAgcHJpY2luZ19tb2RlbDogW1xuICAgICAgeydpZCc6IDEsICduYW1lJzogJ0ZyZWVtaXVtIFZlcnNpb24nfSxcbiAgICAgIHsnaWQnOiAyLCAnbmFtZSc6ICdNb250aGx5IFN1YnNjcmlwdGlvbid9LFxuICAgICAgeydpZCc6IDMsICduYW1lJzogJ1llYXJseSBTdWJzY3JpcHRpb24nfSxcbiAgICAgIHsnaWQnOiA0LCAnbmFtZSc6ICdMaWZldGltZSBMaWNlbnNlJ30sXG4gICAgICB7J2lkJzogNSwgJ25hbWUnOiAnT3RoZXInfVxuICAgIF1cbiAgfTtcblxuICBteUZvcm1Vcmw6c3RyaW5nID0gJyc7XG4gIGVtYmVkVXJsOlNhZmVSZXNvdXJjZVVybFxuXG5cbiAgLy9DYWxsYmFjayBhZnRlciBhZGRlZCBwcm9kdWN0XG4gIGFkZGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zYW5pdGl6ZXI6RG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xuXG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbG9nbzogWycnXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgc2hvcnRkZXNjcmlwdGlvbjogWycnXSxcbiAgICAgIG1pbnJlcXVpcmVtZW50OiBbJyddLFxuICAgICAgdGVybXNuY29uZDogWycnXSxcbiAgICAgIHlvdXR1YmU6IFsnJ10sXG4gICAgICBpbmR1c3RyaWVzOiBbJyddLFxuICAgICAgbGFuZ3VhZ2VzOiBbJyddLFxuICAgICAgZGVwYXJ0bWVudHM6IFsnJ10sXG4gICAgICBjYXRlZ29yaWVzOiBbJyddLFxuICAgICAgZmVhdHVyZXM6IFsnJ10sXG4gICAgICBzY3JlZW5zaG90czogWycnXSxcbiAgICAgIHB1cmNoYXNlX2xpbms6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRQcm9kdWN0VGFncygpIHtcbiAgICB0aGlzLnRhZ3MkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMudGFncyQuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6YW55KT0+IHtcbiAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzLFxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcyxcbiAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBwcm9kdWN0X3RhZ3MubGFuZ3VhZ2VzLFxuICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgdGhpcy5leHRyYXNlcnZpY2VzVGFnID0gcHJvZHVjdF90YWdzLmV4dHJhc2VydmljZXM7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KSxcbiAgICAgIChlcnJvcjphbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICB9XG5cbiAgb25TdWJtaXQodmFsdWU6YW55KSB7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXNcbiAgICApO1xuXG4gICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuYWRkUHJvZHVjdChwcm9kdWN0KVxuICAgICAgLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXG4gIH1cblxuICBvbkNoZWNrYm94SW5kdXN0cmllcyh2YWx1ZTphbnksIGV2ZW50OmFueSkge1xuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMucHVzaCh2YWx1ZS5pZCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoZWNrYm94TGFuZ3VhZ2VzKHZhbHVlOmFueSwgZXZlbnQ6YW55KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKHZhbHVlLmRiaWQpO1xuXG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoZWNrYm94RGVwYXJ0bWVudHModmFsdWU6YW55LCBldmVudDphbnkpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoZWNrYm94Q2F0ZWdvcmllcyh2YWx1ZTphbnksIGV2ZW50OmFueSkge1xuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlOmFueSwgZXZlbnQ6YW55KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBvbkFkZE5ld0ZlYXR1cmUobmV3RmVhdHVyZTpzdHJpbmcpIHtcbiAgICBpZiAobmV3RmVhdHVyZSkge1xuICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlRmVhdHVyZShmZWF0dXJlOnN0cmluZykge1xuICAgIGxldCBpID0gdGhpcy5teUZvcm1GZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgIGlmIChpICE9IC0xKSB7XG4gICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuXG4gIGZpbGVDaGFuZ2VTY3JlZW5zaG90cyhpbWFnZVJlc3VsdDpJbWFnZVJlc3VsdCkge1xuICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkwpO1xuICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSB0cnVlO1xuICB9XG5cblxuICBvbkRlbGV0ZVNjcmVlbnNob3Qoc3JjOmFueSkge1xuICAgIGxldCBpID0gdGhpcy5teUZvcm1TY3JlZW5zaG90cy5pbmRleE9mKHNyYyk7XG4gICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMuc3BsaWNlKGksIDEpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OkltYWdlUmVzdWx0KSB7XG4gICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gIH1cblxuICBzaG93TW9udGhseSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1llYXJseTpib29sZWFuID0gZmFsc2U7XG4gIHNob3dMaWZldGltZTpib29sZWFuID0gZmFsc2U7XG4gIHNob3dGcmVlU2VydmljZTpib29sZWFuID0gZmFsc2U7XG4gIHNob3dPdGhlcjpib29sZWFuID0gZmFsc2U7XG5cbiAgc2luZ2xlcHJpY2VNb250aGx5IDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcmljZXJhbmdlTW9udGhseSA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzaW5nbGVwcmljZVllYXJseSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpY2VyYW5nZVllYXJseSA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzaW5nbGVwcmljZUxpZmV0aW1lOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpY2VyYW5nZUxpZmV0aW1lOmJvb2xlYW4gPSBmYWxzZTtcblxuICBhbGxJZDphbnk7XG4gIGFsbE1vZGVsOmFueTtcblxuICBjaGVja0FsbDpib29sZWFuID0gZmFsc2U7XG5cblxuICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOmFueSwgZXZlbnQ6YW55KSB7XG5cbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcblxuICAgICAgaWYgKHZhbHVlID09IDApe1xuICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd090aGVyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFsbElkID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICdpZCcpO1xuICAgICAgICB0aGlzLmFsbE1vZGVsID0gXy5tYXAodGhpcy5vcHRpb25zLnByaWNpbmdfbW9kZWwsICduYW1lJyk7XG4gICAgICAgIHRoaXMuY2hlY2tBbGwgPSB0cnVlO1xuXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsSWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2goe1xuICAgICAgICAgICAgJ2lkJzogdGhpcy5hbGxJZFtpXSxcbiAgICAgICAgICAgICdtb2RlbCc6IHRoaXMuYWxsTW9kZWxbaV0sXG4gICAgICAgICAgICBcInBsYW5cIjonJyxcbiAgICAgICAgICAgIFwicHJpY2Vfc3RhcnRcIjonJyxcbiAgICAgICAgICAgIFwicHJpY2VfZW5kXCI6JycsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6JycsXG4gICAgICAgICAgICBcImRheVwiOicnLFxuICAgICAgICAgICAgXCJvdGhlcl9tb2RlbFwiOicnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKXtcbiAgICAgICAgICB0aGlzLnNob3dZZWFybHkgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgU3Vic2NyaXB0aW9uJyl7XG4gICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKXtcbiAgICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKXtcbiAgICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ090aGVyJyl7XG4gICAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwucHVzaCh7XG4gICAgICAgICAgJ2lkJzogdmFsdWUuaWQsXG4gICAgICAgICAgJ21vZGVsJzogdmFsdWUubmFtZSxcbiAgICAgICAgICBcInBsYW5cIjonJyxcbiAgICAgICAgICBcInByaWNlX3N0YXJ0XCI6JycsXG4gICAgICAgICAgXCJwcmljZV9lbmRcIjonJyxcbiAgICAgICAgICBcImN1cnJlbmN5XCI6JycsXG4gICAgICAgICAgXCJkYXlcIjonJyxcbiAgICAgICAgICBcIm90aGVyX21vZGVsXCI6JydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuXG4gICAgICBpZih2YWx1ZSA9PSAwKXtcbiAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxJZCA9IFtdO1xuICAgICAgICB0aGlzLmFsbE1vZGVsID0gW107XG4gICAgICAgIHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpbmdsZXByaWNlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaWNlcmFuZ2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dGcmVlU2VydmljZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKHZhbHVlLm5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJyl7XG4gICAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUubmFtZSA9PT0gJ01vbnRobHkgU3Vic2NyaXB0aW9uJyl7XG4gICAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbHVlLm5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJyl7XG4gICAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbHVlLm5hbWUgPT09ICdGcmVlbWl1bSBWZXJzaW9uJyl7XG4gICAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZih2YWx1ZS5uYW1lID09PSAnT3RoZXInKXtcbiAgICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIHZhbHVlLmlkXSk7XG5cbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBvblNlbGVjdFByaWNpbmdQbGFuKHZhbHVlOmFueSxpZDphbnksbmFtZTphbnkpe1xuXG4gICAgaWYodmFsdWUgPT09ICdTaW5nbGUgUHJpY2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpe1xuICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHZhbHVlID09PSAnUHJpY2UgcmFuZ2UnICYmIG5hbWUgPT09ICdNb250aGx5IFN1YnNjcmlwdGlvbicpe1xuICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHZhbHVlID09PSAnU2luZ2xlIFByaWNlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpe1xuICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IHRydWU7XG4gICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZih2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpe1xuICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgdGhpcy5wcmljZXJhbmdlWWVhcmx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih2YWx1ZSA9PT0gJ1NpbmdsZSBQcmljZScgJiYgbmFtZSA9PT0gJ0xpZmV0aW1lIExpY2Vuc2UnKXtcbiAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IHRydWU7XG4gICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHZhbHVlID09PSAnUHJpY2UgcmFuZ2UnICYmIG5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJyl7XG4gICAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICBcInBsYW5cIjp2YWx1ZSxcbiAgICAgIFwicHJpY2Vfc3RhcnRcIjonJyxcbiAgICAgIFwicHJpY2VfZW5kXCI6JycsXG4gICAgICBcImN1cnJlbmN5XCI6dGhpcy5vcHRpb25zLmN1cnJlbmN5WzBdLFxuICAgICAgXCJkYXlcIjonJyxcbiAgICAgIFwib3RoZXJfbW9kZWxcIjonJ1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgfVxuXG4gIG9uSW5wdXRQcmljZShpZDphbnkscHJpY2Vfc3RhcnQ6YW55LHByaWNlX2VuZDphbnksY3VycmVuY3k6YW55KXtcbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICBcInByaWNlX3N0YXJ0XCI6cHJpY2Vfc3RhcnQsXG4gICAgICBcInByaWNlX2VuZFwiOnByaWNlX2VuZCxcbiAgICAgIFwiY3VycmVuY3lcIjpjdXJyZW5jeSxcbiAgICAgIFwiZGF5XCI6JycsXG4gICAgICBcIm90aGVyX21vZGVsXCI6JydcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCk7XG4gIH1cblxuICBvbklucHV0RGF5KGlkOmFueSxkYXk6YW55KXtcbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICBcInByaWNlX3N0YXJ0XCI6JycsXG4gICAgICBcInByaWNlX2VuZFwiOicnLFxuICAgICAgXCJjdXJyZW5jeVwiOicnLFxuICAgICAgXCJkYXlcIjpkYXksXG4gICAgICBcIm90aGVyX21vZGVsXCI6JydcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCk7XG4gIH1cblxuICBvbklucHV0T3RoZXJNb2RlbChpZDphbnksb3RoZXJfbW9kZWw6YW55KXtcbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgaWRdKTtcbiAgICBfLm1lcmdlKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsW2ldLCB7XG4gICAgICBcInByaWNlX3N0YXJ0XCI6JycsXG4gICAgICBcInByaWNlX2VuZFwiOicnLFxuICAgICAgXCJjdXJyZW5jeVwiOicnLFxuICAgICAgXCJkYXlcIjonJyxcbiAgICAgIFwib3RoZXJfbW9kZWxcIjpvdGhlcl9tb2RlbFxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtUHJpY2luZ01vZGVsKTtcbiAgfVxuXG5cbiAgdmlkZW86Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIGVtYmVkWW91dHViZSh1cmw6YW55KSB7XG4gICAgdGhpcy52aWRlbyA9IHRydWU7XG4gICAgbGV0IGlkID0gdXJsLnNwbGl0KCc9JywgMilbMV07XG4gICAgdGhpcy5teUZvcm1VcmwgPSB1cmw7XG4gICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCk7XG4gIH1cblxuICBkZWxldGVWaWRlbygpIHtcbiAgICB0aGlzLnZpZGVvID0gZmFsc2U7XG4gICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICB0aGlzLmVtYmVkVXJsID0gbnVsbDtcbiAgfVxuXG4gIG9uQ2FuY2xlKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3ZlbmRvci9kYXNoYm9hcmRgXSk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
