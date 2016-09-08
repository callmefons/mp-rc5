import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder} from "@angular/forms";
import {AccountManagementService} from "../shared/api-service/admin/account-management.service";


@Component({
    moduleId: module.id,
    selector: 'sd-admin',
    templateUrl: 'templates/auth-forgot-password.component.html',
    styleUrls: ['styles/auth-forgot-password.component.css'],
})

export class AuthForgotPasswordComponent implements OnInit, OnDestroy {

    disabled: boolean = true;

    errorMessage: string;
    myForm: FormGroup;

    constructor(private _fb: FormBuilder,
                private _router: Router,
                private _accountManagetment: AccountManagementService) {

    }

    ngOnInit() {

        this.myForm = this._fb.group({
            email: ['']
        });

    }

    ngOnDestroy() {

    }

    success: boolean = false;

    onSubmit(value: Object) {
        this.success = false;
        this._accountManagetment.forgotPassword(value).subscribe((res) => {
            this.success = true;
        });
    }

    goToLogin(){
        this._router.navigate(['']);
    }

}


