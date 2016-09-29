import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DomSanitizationService, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/api-service/product/product.service";
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";
import {ImageUpload, ImageResult, ResizeOptions} from '../shared/ng2-service/ng2-imageupload/index';
import {ValidationService} from "../shared/validation/validation.service";

declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'sd-vendor',
    templateUrl: 'templates/vendor-edit-product.component.html',
    styleUrls: ['styles/vendor-edit-product.component.css'],
})

export class VendorEditProductComponent implements OnInit, OnDestroy {

    empty: any = '';
    myForm: FormGroup;

    errorMessage: string;
    apps: any[];
    apps_th:any[];


    industriesTag: any[] = [];
    categoriesTag: any[] = [];
    languagesTag: any[] = [];
    departmentsTag: any[] = [];
    extraservicesTag: any[] = [];

    pricingmodelsTag: any[] = [];

    myFormIndustries: any[] = [];
    myFormLanguages: any[] = [];
    myFormDepartments: any[] = [];
    myFormCategories: any[] = [];
    myFormExtraservices: any[] = [];
    myFormPricingModel: any[] = [];

    myFormFeatures: any[] = [];
    myFormThaiFeatures:any[] = [];

    myFormLogo: string = '';
    fileChosen: boolean = true;

    myFormScreenshots: any[] = [];
    screenshotsChosen: boolean = true;

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 500,
        resizeMaxWidth: 500
    };

    public options: any = {
        currency: ['THB', 'SDG', 'USD', 'AUD']
    };

    myFormUrl: '';
    embedUrl: SafeResourceUrl;

    private sub: Subscription;
    loading: boolean = true;

    //Callback after added product
    updated: boolean = false;


    selectedLang: string = 'en';

    constructor(private _fb: FormBuilder,
                private _productService: ProductService,
                private route: ActivatedRoute,
                private router: Router,
                public _sanitizer: DomSanitizationService) {
        this.myForm = this._fb.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
            logo: [''],
            description: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
            shortdescription: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
            minrequirement: ['',Validators.maxLength(100)],
            termsncond: ['',Validators.maxLength(100)],
            youtube: ['',Validators.required],
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
            thai_description: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
            thai_shortdescription: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
        });
    }

    ngOnInit() {
        this.getProductId();
        this.updated = false;

    }

    getProductTags() {
        this._productService.getProductTags()
            .subscribe(
                product_tags => {
                    this.industriesTag = product_tags.industries;
                    this.categoriesTag = product_tags.categories;
                    this.languagesTag = product_tags.languages;
                    this.departmentsTag = product_tags.departments;
                    this.extraservicesTag = product_tags.extraservices;
                    //noinspection TypeScriptUnresolvedVariable
                    this.pricingmodelsTag = product_tags.pricingmodels;
                }),
            (error: any) => this.errorMessage = <any>error


    }

    getProductId() {
        this.sub = this.route
            .params
            .subscribe(params => {
                let id = +params['id'];
                this._productService.getProductId(id)
                    .subscribe(apps => {
                        if (apps) {

                            this.apps = apps.data['en'];
                            this.apps_th = apps.data['th'];

                            this.myFormLogo = apps.data['en'].logo;

                            this.embedYoutube(apps.data['en'].youtube);

                            //noinspection TypeScriptUnresolvedVariable
                            for (let i = 0; i < apps.data['en'].pricingmodels.length; i++) {
                                //noinspection TypeScriptUnresolvedVariable
                                this.myFormPricingModel.push(apps.data['en'].pricingmodels[i]);
                                this.onBindingPricingModel(this.myFormPricingModel[i]);
                            }

                            for (let i = 0; i < apps.data['en'].screenshots.length; i++) {
                                this.myFormScreenshots.push(apps.data['en'].screenshots[i].url);
                            }

                            for (let i = 0; i < apps.data['en'].features.length; i++) {
                                this.myFormFeatures.push(apps.data['en'].features[i].text);
                            }

                            for (let i = 0; i < apps.data['th'].features.length; i++) {
                                this.myFormThaiFeatures.push(apps.data['th'].features[i].text);
                            }


                            for (let i = 0; i < apps.data['en'].industries.length; i++) {
                                this.myFormIndustries.push(apps.data['en'].industries[i].id);
                            }
                            for (let i = 0; i < apps.data['en'].categories.length; i++) {
                                this.myFormCategories.push(apps.data['en'].categories[i].id);

                            }
                            for (let i = 0; i < apps.data['en'].languages.length; i++) {
                                this.myFormLanguages.push(apps.data['en'].languages[i].id);
                            }
                            for (let i = 0; i < apps.data['en'].departments.length; i++) {
                                this.myFormDepartments.push(apps.data['en'].departments[i].id);
                            }


                            for (let i = 0; i < apps.data['en'].extraservices.length; i++) {
                                this.myFormExtraservices.push(apps.data['en'].extraservices[i].id);

                            }
                            this.loading = false;
                            this.getProductTags();
                        }
                    })
            });

    }

    onRefresh() {
        this.sub = this.route
            .params
            .subscribe(params => {
                let id = +params['id'];
                this._productService.getProductId(id)
                    .subscribe(apps => {
                        if (apps) {
                            this.loading = false;
                            this.apps = apps.data;
                        }
                    });
            });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    onSubmit(appId: any, value: Object) {

        const product = new Product(
            null,
            this.myForm.value.name,
            this.myFormLogo,
            this.myForm.value.description,
            this.myForm.value.shortdescription,
            this.myForm.value.minrequirement,
            this.myForm.value.termsncond,
            this.myFormUrl,
            this.myFormIndustries,
            this.myFormLanguages,
            this.myFormDepartments,
            this.myFormCategories,
            this.myFormFeatures,
            this.myFormScreenshots,
            this.myForm.value.purchase_link,
            this.myFormPricingModel,
            this.myFormExtraservices
        );
        const product_thai = new Product(
            null,
            this.myForm.value.name,
            this.myFormLogo,
            this.myForm.value.thai_description,
            this.myForm.value.thai_shortdescription,
            this.myForm.value.minrequirement,
            this.myForm.value.termsncond,
            this.myFormUrl,
            this.myFormIndustries,
            this.myFormLanguages,
            this.myFormDepartments,
            this.myFormCategories,
            this.myFormThaiFeatures,
            this.myFormScreenshots,
            this.myForm.value.purchase_link,
            this.myFormPricingModel,
            this.myFormExtraservices
        );

        // console.log(product_thai);

        this.updated = false;

        let tempProduct: any[] = [];
        tempProduct.push(product, product_thai);


        this._productService.updateProduct(appId, tempProduct)
            .subscribe((res) => {
                    this.updated = true;
                    this.onAlert('Successfully Updated', 'success');
                },
                error => {
                    this.onAlert('Successfully Failed', 'danger');
                    this.errorMessage = <any>error;

                }
            );
    }

    onCheckboxIndustries(value: any, event: any) {
        if (event.currentTarget.checked == true) {
            this.myFormIndustries.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormIndustries.indexOf(value.dbid);
            if (i != -1) {
                this.myFormIndustries.splice(i, 1);
            }
        }
    }

    onCheckboxLanguages(value: any, event: any) {
        if (event.currentTarget.checked == true) {
            this.myFormLanguages.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormLanguages.indexOf(value.dbid);
            if (i != -1) {
                this.myFormLanguages.splice(i, 1);
            }
        }
    }

    onCheckboxDepartments(value: any, event: any) {
        if (event.currentTarget.checked == true) {
            this.myFormDepartments.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormDepartments.indexOf(value.dbid);
            if (i != -1) {
                this.myFormDepartments.splice(i, 1);
            }
        }
    }

    onCheckboxCategories(value: any, event: any) {
        if (event.currentTarget.checked == true) {
            this.myFormCategories.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormCategories.indexOf(value.dbid);
            if (i != -1) {
                this.myFormCategories.splice(i, 1);
            }
        }
    }

    onCheckboxExtraservices(value: any, event: any) {
        if (event.currentTarget.checked == true) {
            this.myFormExtraservices.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormExtraservices.indexOf(value.dbid);
            if (i != -1) {
                this.myFormExtraservices.splice(i, 1);
            }
        }

    }

    checkedId(id: number, type: any) {

        if (type == 'categories') {
            for (let i = 0; i < this.myFormCategories.length; i++) {
                if (id == this.myFormCategories[i])
                    return true;
            }
        }
        if (type == 'departments') {
            for (let i = 0; i < this.myFormDepartments.length; i++) {
                if (id == this.myFormDepartments[i])
                    return true;
            }
        }
        if (type == 'industries') {
            for (let i = 0; i < this.myFormIndustries.length; i++) {
                if (id == this.myFormIndustries[i])
                    return true;
            }
        }
        if (type == 'languages') {
            for (let i = 0; i < this.myFormLanguages.length; i++) {
                if (id == this.myFormLanguages[i])
                    return true;
            }
        }
        if (type == 'extraservices') {
            for (let i = 0; i < this.myFormExtraservices.length; i++) {
                if (id == this.myFormExtraservices[i])
                    return true;
            }
        }
        if (type == 'pricingmodels') {

            for (let i = 0; i < this.myFormPricingModel.length; i++) {

                if (id == this.myFormPricingModel[i].id) {
                    return true;
                }

            }
        }

    }

    newFeature:string;
    newThaiFeature:string;
    onAddNewFeature(newFeature: string, lang: string) {

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
    }

    onDeleteFeature(feature: string, lang: string) {

        switch (lang){
            case 'th':
                let i = this.myFormThaiFeatures.indexOf(feature);
                if (i != -1) {
                    this.myFormThaiFeatures.splice(i, 1);
                }
                break;
            case 'en':
                let j = this.myFormFeatures.indexOf(feature);
                if (j != -1) {
                    this.myFormFeatures.splice(j, 1);
                }
                break;
        }
    }

    fileChangeLogo(imageResult: ImageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    }

    fileChangeScreenshots(imageResult: ImageResult) {
        this.myFormScreenshots.push(imageResult.resized.dataURL);
        this.screenshotsChosen = true;
    }

    onDeleteScreenshot(src: any) {
        let i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        } else {
            this.screenshotsChosen = false;
        }
    }


    ///////////// Alert /////////////
    alerted: boolean = false;
    messageAlert: string = '';
    typeAlert: string = 'success';

    onAlert(msg: string, type: string){
        this.messageAlert = msg;
        this.typeAlert = type;
        this.alerted = true;

        setTimeout(()=> {
            this.alerted = false;
            this.messageAlert = '';
        }, 3000);
    }

    updateProductStatus(id: any, status: any) {
        this._productService.updateProductStatus(id, status).subscribe(() => {
            this.onAlert('Updated Successfully', 'success')
            status == 'pending' ? this.onCancle(): this.onRefresh();
        },
        error => {
            this.errorMessage = <any>error;
            this.onAlert('Updated Failed', 'danger');
        });

        //location.reload();

    }


    showMonthly: boolean = false;
    showYearly: boolean = false;
    showLifetime: boolean = false;
    showFreeService: boolean = false;
    showOther: boolean = false;

    singlepriceMonthly: boolean = false;
    pricerangeMonthly: boolean = false;

    singlepriceYearly: boolean = false;
    pricerangeYearly: boolean = false;

    singlepriceLifetime: boolean = false;
    pricerangeLifetime: boolean = false;


    dayModel: number;
    otherModel: string;

    priceStartMonthlyModel: number;
    priceStartYearlyModel: number;
    priceStartLifetimeModel: number;

    priceEndMonthlyModel: number;
    priceEndYearlyModel: number;
    priceEndLifetimeModel: number;

    currencyMonthlyModel: any;
    currencyYearlyModel: any;
    currencyLifetimeModel: any;

    checkedPricingAll:boolean;

    onCheckboxPricingModelAll(value:any, event:any){

        let temp: any = {
            pricingId: [],
            formPricingId: [],
            pricingName: [],
            formPricingName: [],
            id:[],
            model:[]
        };

        if(event.currentTarget.checked == true){
            this.checkedPricingAll = true;

            for(let i = 0; i < this.pricingmodelsTag.length; i++){
                temp.pricingId.push(this.pricingmodelsTag[i].dbid);
                temp.pricingName.push(this.pricingmodelsTag[i].name);
            }

            for(let i = 0; i < this.myFormPricingModel.length; i++){
                if(this.myFormPricingModel !== undefined){
                    temp.formPricingId.push(this.myFormPricingModel[i].id);
                    temp.formPricingName.push(this.myFormPricingModel[i].model);
                }
            }

            temp.id = _.difference(temp.pricingId,temp.formPricingId);
            temp.model = _.difference(temp.pricingName,temp.formPricingName);

            for(let i = 0; i < temp.id.length; i++){
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
        if(event.currentTarget.checked == false){
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
            for(let i =0; i < this.pricingmodelsTag.length; i++){
                this.onResetBindingModel(this.pricingmodelsTag[i].name);
            }
            this.myFormPricingModel = [];

        }

    }


    onCheckboxPricingModel(value: any, event: any) {

        if (event.currentTarget.checked == true) {


            if (value.name === 'Yearly Subscription') {
                this.showYearly = true
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

            let i = _.findIndex(this.myFormPricingModel, ['id', value.dbid]);

            if (i != -1) {
                this.myFormPricingModel.splice(i, 1);
            }

        }

    }

    onSelectPricingPlan(value: any, id: any, name: any) {

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

        let i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "plan": value,
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": ''
        });
    }

    onInputPrice(id: any, price_start: any, price_end: any, currency: any) {
        let i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": price_start,
            "price_end": price_end,
            "currency": currency,
            "day": '',
            "other_model": ''
        });
    }

    onInputDay(id: any, day: any) {
        let i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": day,
            "other_model": ''
        });
    }

    onInputOtherModel(id: any, other_model: any) {
        let i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": other_model
        });
    }

    onBindingPricingModel(value: any) {
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
    }

    onResetBindingModel(type: string) {
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
    }


    videoType:boolean=false;
    embedVideo:boolean=false;
    onYoutube: boolean = false;
    myUrl : string = '';

    embedYoutube(url: any) {

        this.myUrl = '';
        this.embedVideo = true;
        this.videoType = true;

        if (url !== null) {
            if (ValidationService.youtubeParser(url) != false) {
                this.videoType = true;
                let id = url.split('=', 2)[1];
                this.myFormUrl = url;
                this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
            } else {
                this.videoType = false;
                this.onYoutube = true;
                setTimeout(() => {
                   this.onYoutube = false;
                },3000)
            }

        }

    }


    deleteVideo() {
        this.videoType = false;
        this.embedVideo = false;
        this.myFormUrl = '';
        this.embedUrl = null;
    }


    onCancle() {
        this.router.navigate([`/vendor/dashboard`]);
    }

    thaiInput: boolean = false;

    onChangeLanguaeFrom(lang: string) {

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

    }

}
