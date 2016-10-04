import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FORM_DIRECTIVES} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ROUTING, APP_ROUTES} from "./app.routing";

import {AppComponent} from "./app.component";
import {ErrorService} from "./errors/error.service";
import {ErrorComponent} from "./errors/error.component";
import {HomeModule} from './home/home.module';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {AuthComponent} from "./auth/auth.component";
import {AuthForgotPasswordComponent} from "./auth/auth-forgot-password.component";
import {AuthRegisterComponent} from "./auth/auth-register.component";
import {AuthResetPasswordComponent} from "./auth/auth-reset-password.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductListComponent} from "./product/product-list.component";
import {ProductSearchComponent} from './product/product-search.component';
import {VendorComponent} from "./vendor/vendor.component";
import {VendorListingComponent} from "./vendor/vendor-listing.component";
import {VendorAddProductComponent} from "./vendor/vendor-add-product.component";
import {VendorEditProductComponent} from "./vendor/vendor-edit-product.component";
import {VendorProfileComponent} from "./vendor/vendor-profile.component";
import {VendorDashboardComponent} from "./vendor/vendor-dashboard.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard.component";
import {AdminLisitingComponent} from "./admin/admin-listing.component";
import {AdminProductComponent} from "./admin/admin-product.component";
import {AdminVendorsComponent} from "./admin/admin-vendors.component";
import {BrowsePageComponent} from "./product/browse-page.component";
import {AdminSettingComponent} from "./admin/admin-setting.component";
import {AuthRegisterVendorComponent} from "./auth/auth-register-vendor.component";
import {CustomerModule} from "./customer/customer.module";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerDashboardComponent} from "./customer/customer-dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        AuthComponent,
        AuthForgotPasswordComponent,
        AuthRegisterComponent,
        AuthResetPasswordComponent,
        AuthRegisterVendorComponent,

        ProductComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductSearchComponent,
        BrowsePageComponent,

        CustomerComponent,
        CustomerDashboardComponent,

        VendorComponent,
        VendorListingComponent,
        VendorAddProductComponent,
        VendorEditProductComponent,
        VendorProfileComponent,
        VendorDashboardComponent,

        AdminComponent,
        AdminDashboardComponent,
        AdminLisitingComponent,
        AdminProductComponent,
        AdminVendorsComponent,
        AdminSettingComponent
    ],
    imports: [
        BrowserModule, ROUTING, RouterModule.forRoot(APP_ROUTES),
        FormsModule, ReactiveFormsModule, HttpModule,
        SharedModule.forRoot(),
        HomeModule
    ],
    bootstrap: [AppComponent],
    providers: [
        ErrorService
    ]
})
export class AppModule {

}
