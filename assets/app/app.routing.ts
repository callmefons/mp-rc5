import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthService, AuthGuard, CanDeactivateGuard} from "./shared/api-service/auth/index";
import {AuthComponent} from "./auth/auth.component";
import {AUTH_ROUTES} from "./auth/auth.routing";
import {PRODUCT_ROUTE} from "./product/product.routing";
import {ProductComponent} from "./product/product.component";
import {VENDOR_ROUTES} from "./vendor/vendor.routing";
import {VendorComponent} from "./vendor/vendor.component";
import {AdminComponent} from "./admin/admin.component";
import {ADMIN_ROUTES} from "./admin/admin.routing";

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {
        path: 'auth', component: AuthComponent,
        children: [...AUTH_ROUTES]
    },
    {
        path: 'product', component: ProductComponent,
        children: [...PRODUCT_ROUTE]
    },
    {
        path: 'vendor',
        component: VendorComponent,
        children: [...VENDOR_ROUTES]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [...ADMIN_ROUTES]
    }
];

export const authProviders = [
    AuthGuard,
    AuthService
];

export const appRoutingProviders: any[] = [
    authProviders,
    CanDeactivateGuard
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);