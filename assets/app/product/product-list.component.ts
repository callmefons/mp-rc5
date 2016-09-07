import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router}    from '@angular/router';
import {Subscription, Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
import {ProductService} from "../shared/api-service/product/product.service";
import {ProductTags} from "../shared/models/product-tag.model";

declare var _: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-product',
  templateUrl: 'templates/product-list.component.html',
  styleUrls: ['styles/product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {

  errorMessage: any;
  loading: boolean = true;
  readonly : boolean = true;

  sub: Subscription;

  all_product$: Observable<any>;
  products: any[];

  /*Auto Filter*/
  service_id: number;

  /*variable for filter function*/
  options: any = [];
  temp_products: any = [];
  products_filter: any = [];
  product_length: number;

  all_tag: any[] = [];
  languagesTag: ProductTags[] = [];
  departmentsTag: ProductTags[] = [];
  industriesTag: ProductTags[] = [];
  categoriesTag: ProductTags[] = [];

  checkedFirst: boolean = false;

  //Show Category Link
  enable: boolean = false;

  constructor(private route: ActivatedRoute,
              private _router:Router,
              private _productService: ProductService) {

  }

  ngOnInit() {
    this.all_product$ = this._productService.getProduct();
    this.sub = this.route
      .params
      .subscribe(params => {
        this.service_id = +params['id'];

        this.all_product$.subscribe((products: any) => {
          this.products = products;
          this.loading = false;

          //Reset all_tag when user click link navbar
          this.all_tag = [];
          this.temp_products = [];
          this.checkedFirst = false;

          this.getProductTags();

        });

      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  getProductTags() {

    this.products_filter = this.products;
    this._productService.getProductTags()
      .subscribe(
        product_tags => {
          this.languagesTag = product_tags.languages;
          this.departmentsTag = product_tags.departments;
          this.categoriesTag = product_tags.categories;
          this.industriesTag = product_tags.industries;

          if (this.languagesTag != [] && this.departmentsTag != [] && this.categoriesTag != [] && this.industriesTag != []) {
            this.all_tag.push(...this.industriesTag, ...this.categoriesTag, ...this.languagesTag, ...this.departmentsTag);
            this.setFilter();
            this.onAutoCheckboxFilterTag(this.service_id);
          }

        }),
      (error: any) => this.errorMessage = <any>error
  }

  setFilter() {
    for (let i = 0; i < this.all_tag.length; i++) {
      this.options[i] = [];
      for (let j = 0; j < this.products.length; j++) {
        for (let k = 0; k < this.products[j].tag.length; k++) {
          if (this.products[j].tag[k] == this.all_tag[i].name) {
            this.options[i].push({
              optionId: i,
              id: this.products[j].id,
              name: this.products[j].name,
              shortdescription: this.products[j].shortdescription,
              logo: this.products[j].logo
            });
          }
        }
      }
    }
  }

  onAutoCheckboxFilterTag(value: any) {
    this.checkedFirst = true;
    for (let i = 0; i < this.options.length; i++) {
      if (value == i) {
        this.temp_products.push(...this.options[i]);
      }
    }
    this.products_filter = _.uniqBy(this.temp_products, 'id');
    this.product_length = this.products_filter.length;
  }

  onCheckboxFilterTag(value: any, event: any) {

    if (event.currentTarget.checked == true) {
      for (let i = 0; i < this.options.length; i++) {
        if (value == i) {
          this.temp_products.push(...this.options[i]);
        }
      }
      this.products_filter = _.uniqBy(this.temp_products, 'name');

    }

    if (event.currentTarget.checked == false) {
      this.temp_products = _.filter(this.temp_products, (temp_products: any) => {
        return temp_products.optionId !== value
      });
      if (_.isEmpty(this.temp_products)) {
        this.products_filter = this.products;
      } else {
        this.products_filter = _.uniqBy(this.temp_products, 'name');
      }

    }

    this.product_length = this.products_filter.length;
  }

  goToProductDetail(productId:number){
    this._router.navigate([`product/${productId}/detail`]);
  }

}
