import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AccountManagementService} from "../shared/api-service/admin/account-management.service";
import {passwordValidator} from "../shared/helpers/validators";


@Component({
  moduleId: module.id,
  selector: 'sd-admin',
  templateUrl: 'templates/auth-reset-password.component.html',
  styleUrls: ['styles/auth-reset-password.component.css'],
})

export class AuthResetPasswordComponent implements OnInit, OnDestroy {

  disabled:boolean = true;

  errorMessage:string;
  myForm:FormGroup;

  constructor(private _fb:FormBuilder,
              private _router:Router,
              private _accountManagetment:AccountManagementService) {

  }

  ngOnInit() {

    this.myForm = this._fb.group({
      password: ['', Validators.compose([Validators.required, passwordValidator])],
      password_confirmation: ['', Validators.required],
    });
  }


  ngOnDestroy(){

  }

  onSubmit(value:Object) {


    this._accountManagetment.newPassword(value).
    subscribe((res) => {
    });

  }

}


