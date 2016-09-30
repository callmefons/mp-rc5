import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DomSanitizationService, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/api-service/product/product.service";
import {Product} from "../shared/models/product.model";
import {Subscription, Observable} from "rxjs";
import {ImageUpload, ImageResult, ResizeOptions} from '../shared/ng2-service/ng2-imageupload/index';
import {ValidationService} from '../shared/validation/validation.service';

declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'sd-vendor-add-product',
    templateUrl: 'templates/vendor-add-product.component.html',
    styleUrls: ['styles/vendor-add-product.component.css'],
})

export class VendorAddProductComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    loading: boolean = true;

    myForm: FormGroup;

    errorMessage: string;
    apps: any[];

    industriesTag: any[] = [];
    categoriesTag: any[] = [];
    languagesTag: any[] = [];
    departmentsTag: any[] = [];
    extraservicesTag: any[] = [];
    tags$: Observable<any>;

    product: Product[];

    myFormIndustries: any[] = [];
    myFormLanguages: any[] = [];
    myFormDepartments: any[] = [];
    myFormCategories: any[] = [];
    myFormExtraservices: any[] = [];

    myFormFeatures: any[] = [];
    myFormThaiFeatures: any[] = [];


    myFormLogo: any;
    fileChosen: boolean = false;

    myFormScreenshots: any[] = [];
    screenshotsChosen: boolean = false;

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 500,
        resizeMaxWidth: 500
    };

    other: boolean = false;
    myFormPricingModel: any = [];

    public options: any = {
        currency: ['THB', 'SDG', 'USD', 'AUD'],
        pricing_model: [
            {'id': 1, 'name': 'Freemium Version'},
            {'id': 2, 'name': 'Monthly Subscription'},
            {'id': 3, 'name': 'Yearly Subscription'},
            {'id': 4, 'name': 'Lifetime License'},
            {'id': 5, 'name': 'Other'}
        ]
    };

    myFormUrl: string = '';
    embedUrl: SafeResourceUrl


    //Callback after added product
    added: boolean = false;

    selectedLang: string = 'en';

    constructor(private _fb: FormBuilder,
                private _productService: ProductService,
                private router: Router,
                private _sanitizer: DomSanitizationService) {

        this.myForm = this._fb.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
            logo: [''],
            description: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
            shortdescription: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
            minrequirement: ['', Validators.maxLength(1000)],
            termsncond: ['', Validators.maxLength(1000)],
            youtube: [''],
            industries: [''],
            languages: [''],
            departments: [''],
            categories: [''],
            features: [''],
            screenshots: [''],
            purchase_link: [''],
            thai_description: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
            thai_shortdescription: ['', Validators.compose([Validators.required, Validators.maxLength(500)])]
        });
    }

    ngOnInit() {
        this.added = false;
        this.getProductTags();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProductTags() {
        this.tags$ = this._productService.getProductTags();
        this.sub = this.tags$.subscribe((product_tags: any)=> {
            this.industriesTag = product_tags.industries,
                this.categoriesTag = product_tags.categories,
                this.languagesTag = product_tags.languages,
                this.departmentsTag = product_tags.departments;
            this.extraservicesTag = product_tags.extraservices;
            this.loading = false;
        }),
            (error: any) => this.errorMessage = <any>error
    }

    onSubmit(value: any) {

        //Selected type file only
        this.changeToTypeFile(this.myFormLogo, 'single');
        this.changeToTypeFile(this.myFormScreenshots, 'multiple');

        const product = new Product(
            null,
            this.myForm.value.name,
            this.myFormLogoResult,
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
            this.myFormScreenshotsResult,
            this.myForm.value.purchase_link,
            this.myFormPricingModel,
            this.myFormExtraservices
        );

        const product_thai = new Product(
            null,
            null,
            null,
            this.myForm.value.thai_description,
            this.myForm.value.thai_shortdescription,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            this.myFormThaiFeatures,
            null,
            null,
            null,
            null
        );


        let tempProduct: any[] = [];
        tempProduct.push(product, product_thai);

        this._productService.addProduct(tempProduct)
            .subscribe((res: any) => {
                    this.added = true;
                    this.myForm.reset();
                },
                error => this.errorMessage = <any>error);

    }

    onCheckboxIndustries(value: any, event: any) {

        if (event.currentTarget.checked == true) {
            this.myFormIndustries.push(value.id);
        }
        if (event.currentTarget.checked == false) {
            let i = this.myFormIndustries.indexOf(value.id);
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

    newFeature: string;
    newThaiFeature: string;

    MAX_SIZE_FEATURE: number = 5;

    onAddNewFeature(newFeature: string, lang: string) {

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
    }

    onDeleteFeature(feature: string, lang: string) {

        switch (lang) {
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

    screenshotsRender: any[] = [];

    fileChangeScreenshots(imageResult: ImageResult) {

        this.myFormScreenshots.push(imageResult);

        for (let i = 0; i < this.myFormScreenshots.length; i++) {
            this.screenshotsRender[i] = this.myFormScreenshots[i].dataURL;
        }

        this.screenshotsChosen = true;
        // console.log(this.screenshotsRender)
        // console.log(this.myFormScreenshots)
    }


    onDeleteScreenshot(src: any) {
        let j = _.findIndex(this.myFormScreenshots, {'dataURL': src});
        let i = this.myFormScreenshots.indexOf(src);

        if (j != -1) {
            this.myFormScreenshots.splice(j, 1);
            this.screenshotsRender.splice(j, 1);
        } else {
            this.screenshotsChosen = false;
        }

        // console.log(this.screenshotsRender);
        // console.log(this.myFormScreenshots);
    }

    fileChangeLogo(imageResult: ImageResult) {
        this.myFormLogo = imageResult;
        this.myFormLogoRender = this.myFormLogo.dataURL;
        this.fileChosen = true;
    }

    myFormLogoRender:any;
    myFormLogoResult: any;
    myFormScreenshotsResult: any [] = [];

    private changeToTypeFile(data: any, type: string) {

        switch (type) {
            case 'single':
                this.myFormLogoResult = data.file;
                break;
            case'multiple':
                for (let i = 0; i < data.length; i++) {
                    this.myFormScreenshotsResult[i] = data[i].file;
                }
                break;
        }

    }

    //Pricing model

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

    allId: any;
    allModel: any;

    checkAll: boolean = false;


    onCheckboxPricingModel(value: any, event: any) {

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


                for (let i = 0; i < this.allId.length; i++) {
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

            } else {

                if (value.name === 'Yearly Subscription') {
                    this.showYearly = true
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
                this.showYearly = false
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
            } else {
                if (value.name === 'Yearly Subscription') {
                    this.showYearly = false
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

                let i = _.findIndex(this.myFormPricingModel, ['id', value.id]);

                if (i != -1) {
                    this.myFormPricingModel.splice(i, 1);
                }

            }

        }

    }

    onSelectPricingPlan(value: any, id: any, name: any) {

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

        let i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "plan": value,
            "price_start": '',
            "price_end": '',
            "currency": this.options.currency[0],
            "day": '',
            "other_model": ''
        });
        // console.log(this.myFormPricingModel);
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
        // console.log(this.myFormPricingModel);
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
        // console.log(this.myFormPricingModel);
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
        // console.log(this.myFormPricingModel);
    }


    videoType: boolean = false;
    embedVideo: boolean = false;
    onYoutube: boolean = false;
    myUrl: string = '';

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
                }, 3000)
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
