import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DomSanitizationService, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../shared/api-service/product/product.service";
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";
import {ImageUpload, ImageResult, ResizeOptions} from '../shared/ng2-service/ng2-imageupload/index';


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

  myFormLogo:string = '';
  fileChosen:boolean = true;

  myFormScreenshots:any[] = [];
  screenshotsChosen:boolean = true;

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

  constructor(private _fb: FormBuilder,
              private _productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              public _sanitizer: DomSanitizationService) {
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
              this.apps = apps.data;
              this.myFormLogo = apps.data.logo;

              this.embedYoutube(apps.data.youtube);

              //noinspection TypeScriptUnresolvedVariable
              for (let i = 0; i < apps.pricingmodels.length; i++) {
                //noinspection TypeScriptUnresolvedVariable
                this.myFormPricingModel.push(apps.pricingmodels[i]);
                this.onBindingPricingModel(this.myFormPricingModel[i]);
              }

              for (let i = 0; i < apps.data.screenshots.length; i++) {
                this.myFormScreenshots.push(apps.data.screenshots[i].url);
              }
              for (let i = 0; i < apps.data.features.length; i++) {
                this.myFormFeatures.push(apps.data.features[i].text);
              }
              for (let i = 0; i < apps.industries.length; i++) {
                this.myFormIndustries.push(apps.industries[i].id);
              }
              for (let i = 0; i < apps.categories.length; i++) {
                this.myFormCategories.push(apps.categories[i].id);

              }
              for (let i = 0; i < apps.languages.length; i++) {
                this.myFormLanguages.push(apps.languages[i].id);
              }
              for (let i = 0; i < apps.departments.length; i++) {
                this.myFormDepartments.push(apps.departments[i].id);
              }


              for (let i = 0; i < apps.extraservices.length; i++) {
                this.myFormExtraservices.push(apps.extraservices[i].id);

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

    this.updated = false;

    this._productService.updateProduct(appId, product)
      .subscribe((res) => {
          this.updated = true;
        },
        error => this.errorMessage = <any>error);
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

  checkedId(id: number, type: any){
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

  onAddNewFeature(newFeature: string) {
    if (newFeature) {
      this.myFormFeatures.push(newFeature);
    }
  }

  onDeleteFeature(feature: string) {
    let i = this.myFormFeatures.indexOf(feature);
    if (i != -1) {
      this.myFormFeatures.splice(i, 1);
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
    }else{
      this.screenshotsChosen = false;
    }
  }

  updateProductStatus(id: any, status: any) {
    if (status === 'pending') {
      this._productService.updateProductStatus(id, status).subscribe(() => {
        this.onCancle();
      });
    }

    this._productService.updateProductStatus(id, status).subscribe(() => {
      this.onRefresh();
    });
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


  video: boolean = false;

  embedYoutube(url: any) {

    if (url !== null) {
      this.video = true;
      let id = url.split('=', 2)[1];
      this.myFormUrl = url;
      this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);

    }
  }

  deleteVideo() {
    this.video = false;
    this.myFormUrl = '';
    this.embedUrl = null;
  }


  onCancle() {
    this.router.navigate([`/vendor/dashboard`]);
  }

}
