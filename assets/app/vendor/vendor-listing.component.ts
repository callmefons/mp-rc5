import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router, ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";
import {Product} from "../shared/models/product.model";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-vendor',
  templateUrl: 'templates/vendor-listing.component.html',
  styleUrls: ['styles/vendor-listing.component.css'],
})

export class VendorListingComponent implements OnInit, OnDestroy {

  constructor(
    private _router:Router,
    private route:ActivatedRoute,
    private _productService:ProductService
  ){

  }
  app_id:number;

  apps:Product[];

  sub:Subscription;
  loading:boolean = true;

  updated:boolean = false;

  ngOnInit() {
    this.updated = true;
    this.getProductOfDeveloper();
  }

  onRefresh() {
    this.getProductOfDeveloper();
  }

  ngOnDestroy() {
    if(this.sub)this.sub.unsubscribe();
  }

  getProductOfDeveloper() {

    this.updated = false;

    this.sub = this.route
      .params
      .subscribe(params => {
        this._productService.getProductOfDeveloper()
          .subscribe(
            (apps) => {
              if (apps != null) {
                this.apps = apps,
                  this.loading = false;
                this.updated = true;
              }
            }
          );
      });
  }

  goToEditProduct(appId:any) {
    this._router.navigate([`vendor/edit/${appId}`]);
  }

  goToVendorDashboard(){
    this._router.navigate([`vendor/dashboard`]);
  }

  deleteProduct(id:any) {

    this._productService.deleteProduct(id).subscribe((res) => {
      this.onRefresh();
    });
  }

  checkAppId(appId:number) {
    this.app_id = appId;
  }

}
