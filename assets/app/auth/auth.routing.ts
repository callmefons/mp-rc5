import {
  Routes,
} from '@angular/router';

import {AuthComponent}       from './auth.component';
import {AuthRegisterComponent} from "./auth-register.component";
import {AuthForgotPasswordComponent} from "./auth-forgot-password.component";
import {AuthResetPasswordComponent} from "./auth-reset-password.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'register', pathMatch: 'full'},
      {path: 'register', component: AuthRegisterComponent},
      {path: 'forgot-password', component: AuthForgotPasswordComponent},
      {path: 'reset-password', component: AuthResetPasswordComponent}
    ]
  }
];