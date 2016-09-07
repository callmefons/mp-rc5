import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-admin-dashboard',
  templateUrl: 'templates/admin-listing.component.html',
  styleUrls: ['styles/admin-listing.component.css'],
})

export class AdminLisitingComponent implements OnInit, OnDestroy {

  errorMessage:string;

  product_all:any[];
  product_all$:Observable<any>;
  product_all_length:number;
  logs:any[];

  sub:Subscription;
  loading:boolean = true;


  product_new:any[];
  product_new$:Observable<any>;
  product_new_length:number;
  sub_product_new:Subscription;
  loading_product_new:boolean = true;

  product_review:any[];
  product_review$:Observable<any>;
  product_review_length:number;
  sub_product_review:Subscription;
  loading_product_review:boolean = true;

  constructor(
    private _router:Router,
    private _productService:ProductService
  ){

  }

  ngOnInit(){
    this.getAllProduct();
    this.getNewProduct();
    this.getReviewProduct();
  }

  ngOnDestroy(){
      if(this.sub)this.sub.unsubscribe();
      if(this.sub_product_new)this.sub_product_new.unsubscribe();
  }


  goToDashboard(){
    this._router.navigate([`admin/dashboard`]);
  }

  showLog(product_log:any){
    this.logs = product_log;
  }


  private getNewProduct() {
    this.product_new$ = this._productService.getProductStatus('pending');
    this.sub_product_new = this.product_new$.subscribe((product:any)=> {
      this.product_new = product.data;
      this.product_new_length = product.data.length;
      this.loading_product_new = false;
    });
  }

  private getAllProduct() {
    this.product_all$ = this._productService.getProductStatus('all');
    this.sub = this.product_all$.subscribe((product:any)=> {
      this.product_all = product.data;
      this.product_all_length = product.data.length;
      this.loading = false;
    });
  }

  private getReviewProduct() {
    this.product_review$ = this._productService.getProductStatus('review');
    this.sub_product_review = this.product_review$.subscribe((product:any)=> {
      this.product_review = product.data;
      this.product_review_length = product.data.length;
      this.loading = false;
    });
  }

  goToProductDetail(id:number){
    this._router.navigate([`admin/product/${id}`]);
  }
}
