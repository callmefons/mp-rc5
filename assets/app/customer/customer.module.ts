import {NgModule} from '@angular/core';

import {CustomerComponent} from "./customer.component";
import {CustomerDashboardComponent} from "./customer-dashboard.component";
import {CUSTOMER_ROUTES} from "./customer.routing";

@NgModule({
    imports: [
        CUSTOMER_ROUTES,
    ],
    declarations: [
        CustomerComponent,
        CustomerDashboardComponent
    ],
    exports: [
        CustomerComponent,
        CustomerDashboardComponent
    ],
    providers: [

    ]
})
export class CustomerModule {

}
