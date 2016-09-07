import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VENDOR_ROUTES} from './vendor.routing';
import {VendorComponent} from './vendor.component';
import {VendorProfileComponent} from "./vendor-profile.component";
import {VendorDashboardComponent} from "./vendor-dashboard.component";
import {VendorListingComponent} from "./vendor-listing.component";
import {VendorEditProductComponent} from "./vendor-edit-product.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VendorAddProductComponent} from "./vendor-add-product.component";

@NgModule({
    imports: [
        VENDOR_ROUTES,
    ],
    declarations: [VendorComponent,
        VendorProfileComponent,
        VendorDashboardComponent,
        VendorListingComponent,
        VendorAddProductComponent,
        VendorEditProductComponent,
    ],

    exports: [
        VendorComponent,
        VendorProfileComponent,
        VendorDashboardComponent,
        VendorListingComponent,
        VendorAddProductComponent,
        VendorEditProductComponent,
    ]

})
export class VendorModule {

}
