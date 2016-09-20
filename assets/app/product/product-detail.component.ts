import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";
import {SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {AuthService} from "../shared/api-service/auth/auth.service";
import {ReviewService} from "../shared/api-service/review.service";

declare var ClickyLog: Function;
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-product-detail',
  templateUrl: 'templates/product-detail.component.html',
  styleUrls: ['styles/product-detail.component.css'],
})

export class ProductDetailComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  sub: Subscription;

  products: any = [];
  apps: any = [];
  languagesTag: any = [];

  categoriesTag: any = [];
  departmentsTag: any = [];
  industriesTag: any = [];


  features: any = [];
  screenshots: any = [];

  reviews: any = [];
  trustedUrl: SafeUrl = [];

  /*Set thumbnail and Screenshot*/
  thumbnail: any = [];
  count: number = 0;
  max: number = 4;
  index: number = 0;
  selected: any = '';

  //Developer
  developer_organization: any = [];


  constructor(private route: ActivatedRoute,
              private _reviewService: ReviewService,
              private _router: Router,
              private _authService: AuthService,
              private _productService: ProductService) {

  }

  lang: string = 'en';

  ngOnInit() {
    this.onRefresh();
  }

  SwitchLang(lang: string){
    this.lang = lang;
    this.onRefresh();
  }

  onRefresh(){
    this.sub = this.route
        .params
        .subscribe(params => {
          let id = parseInt(this.route.snapshot.params['id']);

          this._productService.getProductId(id).subscribe((products: any)=> {
            console.log(products);
            this.products = products.data[this.lang];
            this.apps = products.data[this.lang];

            for (let i = 0; i < this.products.languages.length; i++) {
              this.languagesTag.push(this.products.languages[i]);
            }
            for (let i = 0; i < this.products.departments.length; i++) {
              this.departmentsTag.push(this.products.departments[i]);
            }
            for (let i = 0; i < this.products.categories.length; i++) {
              this.categoriesTag.push(this.products.categories[i]);
            }
            for (let i = 0; i < this.products.industries.length; i++) {
              this.industriesTag.push(this.products.industries[i]);
            }

            for (let i = 0; i < this.products.features.length; i++) {
              this.features.push(this.products.features[i]);
            }


            for (let i = 0; i < this.products.screenshots.length; i++) {
              this.screenshots.push(this.products.screenshots[i]);
            }
            this.setThumbnail();
            this.selected = this.screenshots[0].url;
            this.loading = false;
          });


          this.getReview(id);

        });
  }


  ngOnDestroy() {
    if (this.sub)this.sub.unsubscribe();
  }


  onSelect(_screenshot: string, i: number, j: number) {
    this.selected = _screenshot;

    if (i != 0) {
      this.index = ((j + 1) + (4 * i) - 1);
    } else {
      this.index = j;
    }
  }

  onControl(condition: string) {

    if (condition == 'plus') {

      if (this.index < this.screenshots.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }

    } else {

      if (this.index != 0) {
        this.index--;
      } else {
        this.index = this.screenshots.length - 1;
      }

    }

    this.selected = this.screenshots[this.index].url;
  }


  setThumbnail() {
    for (let i: number = 0; i < Math.ceil((this.screenshots.length / 4)); i++) {

      this.thumbnail[i] = [];

      for (let j: number = 0; j < 4; j++) {
        if (this.count < this.screenshots.length) {
          this.thumbnail[i][j] = this.screenshots[this.count].url;
          this.count++;
        }
      }
    }

  }

  getReview(id: any) {

    if (this._authService.isLoggedIn() == true) {
      this._reviewService.getReviewById(id)
        .subscribe((reviews: any) => {
          for (let i = 0; i < reviews.data.length; i++) {
            this.reviews.push(reviews.data[i]);
          }
        });
    } else {
      this._reviewService.getReviewById(id)
        .subscribe((reviews: any) => {
          this.reviews.push(reviews.data[0]);
        });
    }
  }

  goToRegister() {
    this._router.navigate([`auth/register`]);
  }

  //Output form review directive
  onSuccess(results: any) {
    if(results == 'success'){
      this.ngOnInit();
    }
  }


  visitWebsite(name: string){
    ClickyLog(name);
  }
}
