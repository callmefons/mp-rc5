import {
    Routes,
} from '@angular/router';

import {AuthGuard} from "../shared/api-service/auth/auth-guard.service";
import {CustomerComponent} from "./customer.component";
import {CustomerDashboardComponent} from "./customer-dashboard.component";

export const CUSTOMER_ROUTES: Routes = [
    {
        path: '',
        component: CustomerComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: CustomerDashboardComponent}
            ]
    }
];
