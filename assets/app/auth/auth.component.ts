import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'sd-admin',
  templateUrl: 'templates/auth.component.html',
  styleUrls: ['styles/auth.component.css'],
})

export class AuthComponent implements OnInit, OnDestroy {


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
