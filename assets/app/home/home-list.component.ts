import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";
import {ProductTags} from "../shared/models/product-tag.model";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home-list',
  templateUrl: 'home-list.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeListComponent implements OnInit, OnDestroy {


  errorMessage: string;

  sub_productSerivce: Subscription;
  categoriesTag$: Observable<any>;
  categoriesTag: ProductTags[] = [];

  constructor(
    private _router:Router,
    private _productService: ProductService) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
     this.getCategoties();
  }
  //
  ngOnDestroy() {
     if (this.sub_productSerivce) this.sub_productSerivce.unsubscribe();
  }

  getCategoties() {
    this.categoriesTag$ = this._productService.getProductTags();
    this.sub_productSerivce = this.categoriesTag$.subscribe(
      (product_tags: any)=> {
        this.categoriesTag = product_tags.categories;
      }, error => this.errorMessage = error);
  }

  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];



  public addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      // image: `//placekitten.com/${newWidth}/300`,
      image: `//placekitten.com/1240/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }

  goToProductList(productId:any) {
    this._router.navigate([`/product/${productId}`]);
  }

}
