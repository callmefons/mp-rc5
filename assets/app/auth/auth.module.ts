import {NgModule, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AUTH_ROUTES} from './auth.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from "./auth.component";
import {AuthRegisterComponent} from "./auth-register.component";
import {DataCountryService} from "../shared/ng2-service/ng2-country/country.service";
import {DataStateService} from "../shared/ng2-service/ng2-country/state.service";
import {AuthForgotPasswordComponent} from "./auth-forgot-password.component";
import {AccountManagementService} from "../shared/api-service/admin/account-management.service";
import {AuthResetPasswordComponent} from "./auth-reset-password.component";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {AuthGuard} from "../shared/api-service/auth/auth-guard.service";

@NgModule({
  imports: [SharedModule, CommonModule, AUTH_ROUTES ,FormsModule,ReactiveFormsModule],
  declarations: [
    AuthComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
    AuthResetPasswordComponent
  ],

  exports: [
    AuthComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
    AuthResetPasswordComponent
],
  providers: [
    AuthService,
    AuthGuard,
    DataCountryService,
    DataStateService,
    AccountManagementService,
  ]
})
export class AuthModule {

}
