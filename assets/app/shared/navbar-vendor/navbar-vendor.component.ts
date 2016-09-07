import {Component} from '@angular/core';

import {AuthService} from "../api-service/auth/auth.service";
import {storage} from '../helpers/storage';
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'navbar-vendor-component',
    templateUrl: 'navbar-vendor.component.html',
    styleUrls: ['navbar-vendor.component.css'],
})

export class NavbarVendorComponent {

    username: string = '';

    constructor(private _authService: AuthService,
                private _router: Router) {

        this.getNameToken();
    }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    signOut() {
        this._authService.logout();
    }

    getNameToken() {
        this.username = storage.getNameToken();
    }

    checkRole() {
        return storage.getRoleToken();
    }

    goToVendorDashboard() {
        this._router.navigate([`vendor/dashboard`]);
    }

    goToDirectory() {
        this._router.navigate([``]);
    }

    goToEditCompanyProfile() {
        this._router.navigate([`vendor/profile`]);
    }
}