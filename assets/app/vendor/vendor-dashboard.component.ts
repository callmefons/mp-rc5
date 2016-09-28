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

  sub_vendor_organization:Subscription;
  sub_vendor_profile:Subscription;
  vendor_organization$:Observable<any>;
  vendor_organization:Vendor;
  vendor_profile$:Observable<any>;
  vendor_profile:Vendor;

  constructor(
    private _router:Router,
    private _authService:AuthService,
    private _vendorService:VendorService
  ){

  }

  ngOnInit(){
    this.getOrganizationProfile();
    this.getVendorProfile();
  }

  ngOnDestroy(){
    if(this.sub_vendor_organization)this.sub_vendor_organization.unsubscribe();
    if(this.sub_vendor_profile)this.sub_vendor_profile.unsubscribe();
  }

  private getOrganizationProfile() {
    this.vendor_organization$ = this._vendorService.getOrganizationProfile();
    this.sub_vendor_organization = this.vendor_organization$.subscribe((vendor:any)=>{
      this.vendor_organization = vendor;
      this.loading = false;
    });
  }

  goToEditProfile(){
    this._router.navigate([`vendor/profile`]);
  }

  private getVendorProfile() {
    this.vendor_profile$ = this._vendorService.getVendorProfile();
    this.sub_vendor_profile = this.vendor_profile$.subscribe((vendor:any)=>{
      this.vendor_profile = vendor;
      //this.loading = false;
    });
  }
}
