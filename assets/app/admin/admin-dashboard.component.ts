import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";

import {AllVendorService} from "../shared/api-service/vendor/all-vendor.service";
import {ProductService} from "../shared/api-service/product/product.service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-admin-dashboard',
  templateUrl: 'templates/admin-dashboard.component.html',
  styleUrls: ['styles/admin-dashboard.component.css'],
})

export class AdminDashboardComponent implements OnInit, OnDestroy {

  errorMessage:string;

  product:any[];
  product$:Observable<any>;
  sub_product:Subscription;
  loading_product:boolean = true;

  vendor:any[];
  vendor$:Observable<any>;
  sub_vendor:Subscription;
  loading_vendor:boolean = true;

  constructor(
    private _allVendorService:AllVendorService,
    private _productService:ProductService,
    private _router:Router
  ){

  }

  ngOnInit(){
    this.getProductStatus();
    this.getVendors();
  }

  ngOnDestroy(){
    if(this.sub_product)this.sub_product.unsubscribe();
    if(this.sub_vendor)this.sub_vendor.unsubscribe();
  }


  private getProductStatus() {
    this.product$ = this._productService.getProductStatus('all');
    this.sub_product = this.product$.subscribe((product:any)=> {
      this.product = product.data.slice(1,5);
      this.loading_product = false;
    });
  }

  private getVendors() {
    this.vendor$ = this._allVendorService.getAllDeveloper();
    this.sub_vendor = this.vendor$.subscribe((vendor:any)=>{
      this.vendor = vendor;
    });
  }

  goToListing(){
    this._router.navigate([`admin/listing`]);
  }

  goToProductDetail(productId:number){
    this._router.navigate([`admin/product/${productId}`]);
  }

  goToVendorProfile(profileId:any){
    this._router.navigate([`admin/vendor/${profileId}/view`]);
  }

}
