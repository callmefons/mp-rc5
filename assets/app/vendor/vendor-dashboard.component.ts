import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";
import {CHART_DIRECTIVES} from "ng2-charts/ng2-charts";

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-vendor',
  templateUrl: 'templates/vendor-dashboard.component.html',
  styleUrls: ['styles/vendor-dashboard.component.css'],
})

export class VendorDashboardComponent implements OnInit, OnDestroy {

  errorMessage:any;
  loading:boolean=true;

  username:string = '';

  sub_vendorService:Subscription;
  vendor_organization$:Observable<any>;
  vendor_organization:Vendor;

  constructor(
    private _router:Router,
    private _authService:AuthService,
    private _vendorService:VendorService
  ){

  }

  ngOnInit(){
    this.getOrganizationProfile();
  }

  ngOnDestroy(){
    if(this.sub_vendorService)this.sub_vendorService.unsubscribe();
  }

  private getOrganizationProfile() {
    this.vendor_organization$ = this._vendorService.getOrganizationProfile();
    this.sub_vendorService = this.vendor_organization$.subscribe((vendor:any)=>{
      this.vendor_organization = vendor;
      this.loading = false;
    });
  }

  goToAddService(){
    this._router.navigate([`vendor/add`]);
  }

  goToViewAllListing(){
    this._router.navigate([`vendor/listing`]);
  }

  goToEditProfile(){
    this._router.navigate([`vendor/profile`]);
  }

}
