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
import {AlertComponent, RatingComponent,AccordionModule,TabsModule} from "ng2-bootstrap/ng2-bootstrap";
import {ReviewComponent} from "./review/review.component";
import {BaseChartComponent} from "ng2-charts/ng2-charts";
import {ClickyAdminComponent} from "./analytics/clicky-admin.component";
import {TranslateComponent} from "../translate/tranlate.component";
import {TranslatePipe} from "../translate/translate.pipe";
import {TRANSLATION_PROVIDERS} from "../translate/translations";
import {TranslateService} from "../translate/translate.service";
import {provide, PLATFORM_PIPES} from "@angular/core";
import {NavbarCustomerComponent} from "./navbar-customer/navbar-customer.component";
import {ConfirmModal} from "./confirm-modal/confirm-modal";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AccordionModule,
        TabsModule
    ],
    declarations: [
        Search,
        ReviewComponent,
        NavbarComponent,
        NavbarCustomerComponent,
        NavbarVendorComponent,
        NavbarAdminComponent,
        ClickyComponent,
        ClickyAdminComponent,
        ImageUpload,
        AlertComponent,
        RatingComponent,
        BaseChartComponent,
        TranslateComponent,
        TranslatePipe,
        ConfirmModal
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule, FormsModule,
        NavbarComponent,
        NavbarCustomerComponent,
        NavbarVendorComponent,
        NavbarAdminComponent,
        ClickyComponent,
        ClickyAdminComponent,
        ImageUpload,
        Search,
        AlertComponent,
        RatingComponent,
        ReviewComponent,
        AccordionModule,
        TabsModule,
        TranslateComponent,
        TranslatePipe,
        ConfirmModal
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
                ClickyService,
                TRANSLATION_PROVIDERS,
                TranslateService,
                provide(PLATFORM_PIPES, {useValue: [TranslatePipe], multi: true})
            ]
        };
    }
}
