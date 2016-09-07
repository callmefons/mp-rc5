import {ModuleWithProviders} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {VendorComponent}       from './vendor.component';
import {VendorProfileComponent} from "./vendor-profile.component";
import {VendorDashboardComponent} from "./vendor-dashboard.component";
import {VendorListingComponent} from "./vendor-listing.component";
import {VendorEditProductComponent} from "./vendor-edit-product.component";
import {VendorAddProductComponent} from "./vendor-add-product.component";
import {AuthGuard} from "../shared/api-service/auth/auth-guard.service";

export const VENDOR_ROUTES:  Routes = [
  {
    path: '',
    component: VendorComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: VendorDashboardComponent},
      {path: 'profile', component: VendorProfileComponent},
      {path: 'listing', component: VendorListingComponent},
      {path: 'add', component: VendorAddProductComponent},
      {path: 'edit/:id', component: VendorEditProductComponent}
    ]
  }
];