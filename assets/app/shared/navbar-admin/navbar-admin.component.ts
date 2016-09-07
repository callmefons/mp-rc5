import {Component} from '@angular/core';

import {AuthService} from "../api-service/auth/auth.service";
import {storage} from '../helpers/storage';
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'navbar-admin-component',
    templateUrl: 'navbar-admin.component.html',
    styleUrls: ['navbar-admin.component.css'],
})

export class NavbarAdminComponent {

    username:string = '';

    constructor(
        private _authService:AuthService,
        private _router:Router){

        this.getNameToken();
    }


    ngOnInit(){

    }

    ngOnDestroy(){
    }

    signOut() {
        this._authService.logout();
    }

    getNameToken() {
        this.username = storage.getNameToken();
    }

    checkRole(){
        return storage.getRoleToken();
    }

    goToAdminDashboard(){
        this._router.navigate([`admin/dashboard`]);
    }

    goToVendorDashboard(){
        this._router.navigate([`admin/vendor/1/index`]);
    }

    goToDirectory(){
        this._router.navigate([``]);
    }
}