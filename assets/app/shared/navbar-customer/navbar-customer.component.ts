import {Component} from '@angular/core';

import {AuthService} from "../api-service/auth/auth.service";
import {storage} from '../helpers/storage';
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'navbar-customer-component',
    templateUrl: 'navbar-customer.component.html',
    styleUrls: ['navbar-customer.component.css'],
})

export class NavbarCustomerComponent {

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


    goToCustomerDashboard(){
        this._router.navigate([`customer/dashboard`]);
    }

    goToDirectory(){
        this._router.navigate([``]);
    }
}
