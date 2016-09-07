import {NgModule, ModuleWithProviders, ElementRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule, FORM_DIRECTIVES} from "@angular/forms";
import {NavbarComponent} from "../shared/navbar/navbar.component";
import {AuthService} from "./api-service/auth/auth.service";
import {ProductService} from "./api-service/product/product.service";
import {DataStateService} from "./ng2-service/ng2-country/state.service";
import {DataCountryService} from "./ng2-service/ng2-country/country.service";
import {ReviewService} from "./api-service/review.service";
import {ImageUpload} from "./ng2-service/ng2-imageupload/src/image-upload";
import {AuthGuard} from "./api-service/auth/auth-guard.service";
import {VendorService} from "./api-service/vendor/vendor.service";
import {NavbarVendorComponent} from "./navbar-vendor/navbar-vendor.component";
import {AllVendorService} from "./api-service/vendor/all-vendor.service";
import {AccountManagementService} from "./api-service/admin/account-management.service";
import {Search} from "./pipes/searchaccout.pipe";
import {NavbarAdminComponent} from "./navbar-admin/navbar-admin.component";
import {ClickyComponent} from "./analytics/clicky.component";
import {ClickyService} from "./analytics/clicky.service";
import {AlertComponent, AlertModule, RatingComponent} from "ng2-bootstrap/ng2-bootstrap";
import {ReviewComponent} from "./review/review.component";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        Search,
        ReviewComponent,
        NavbarComponent,
        NavbarVendorComponent,
        NavbarAdminComponent,
        ClickyComponent,
        ImageUpload,
        AlertComponent,
        RatingComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule, FormsModule,
        NavbarComponent,
        NavbarVendorComponent,
        NavbarAdminComponent,
        ClickyComponent,
        ImageUpload,
        Search,
        AlertComponent,
        RatingComponent,
        ReviewComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthGuard,
                AuthService,
                ProductService,
                VendorService,
                ReviewService,
                DataStateService,
                DataCountryService,
                AllVendorService,
                AccountManagementService,
                ClickyService
            ]
        };
    }
}