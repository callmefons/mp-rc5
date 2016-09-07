import {ModuleWithProviders} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {AdminComponent}       from './admin.component';
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {AdminVendorsComponent} from "./admin-vendors.component";
import {AdminLisitingComponent} from "./admin-listing.component";
import {AdminProductComponent} from "./admin-product.component";
import {AuthGuard} from "../shared/api-service/auth/auth-guard.service";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'vendor/:id/:mode', component:AdminVendorsComponent},
      {path: 'listing', component:AdminLisitingComponent},
      {path: 'product/:id', component:AdminProductComponent},
    ]
  }
];