import {NgModule} from '@angular/core';

import {ADMIN_ROUTES} from './admin.routing';
import {AdminComponent} from './admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {AdminVendorsComponent} from "./admin-vendors.component";
import {AdminLisitingComponent} from "./admin-listing.component";
import {AdminProductComponent} from "./admin-product.component";

@NgModule({
  imports: [
    ADMIN_ROUTES,
    // AlertModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminVendorsComponent,
    AdminLisitingComponent,
    AdminProductComponent
  ],

  exports: [
    AdminComponent,
    AdminDashboardComponent,
    AdminVendorsComponent,
    AdminLisitingComponent,
    AdminProductComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class AdminModule {

}
