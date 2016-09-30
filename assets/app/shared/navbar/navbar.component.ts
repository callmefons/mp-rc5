import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

import {AuthService} from "../api-service/auth/auth.service";
import {User} from '../models/user.model';
import {ProductTags} from '../models/product-tag.model';
import {storage} from '../helpers/storage';
import {ProductService} from "../api-service/product/product.service";
import {Router} from "@angular/router";
import {ValidationService} from "../validation/validation.service";


@Component({
    moduleId: module.id,
    selector: 'navbar-component',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

    // @ViewChild('myModalSignin') public myModalSignin: ModalDirective;
    // error: boolean = false;
    errorMessage: string;
    modal_signin_title: string = 'Sign in with Marketplace Account';

    //Set Username for navber
    username: string;

    sub: Subscription;
    $authService: Observable<any>;


    //Tags
    departmentsTag: ProductTags[] = [];
    industriesTag: ProductTags[] = [];
    categoriesTag: ProductTags[] = [];


    myForm: FormGroup;

    constructor(private _router: Router,
                private fb: FormBuilder,
                private _authService: AuthService,
                private _productService: ProductService) {

        this.myForm = fb.group({
            email: ['',Validators.compose([Validators.required,ValidationService.emailValidator])],
            password: ['',Validators.compose([Validators.required,ValidationService.passwordValidator])]
        });
    }

    ngOnInit() {
        if (this._authService.isLoggedIn()) {
            this.getNameToken();
        }
        this.getProductTags();
    }

    ngOnDestroy() {
        if (this.sub) this.sub.unsubscribe();
    }

    onRefresh() {

    }

    login = false;

    onSubmit(value: any) {
        const user = new User(null, this.myForm.value.email, this.myForm.value.password);

        this.$authService = this._authService.login(value);
        this.sub = this.$authService.subscribe(
            (res: any) => {
                if (res.status === 'success') {
                    storage.setAuthToken(res.data['token']);
                    storage.setRoleToken(res.data['role']);
                    storage.setNameToken(res.data['name']);
                    localStorage.setItem('id', res.data['id']);
                    this.login = true;

                    switch(res.data['role']) {
                        case 'admin':
                            this.onRouterNavigate('admin/dashboard');
                            break;
                        case 'vendor':
                            this.onRouterNavigate('vendor/dashboard');
                            break;
                    }

                }

            }, error => this.errorMessage = <any>error);
    }

    singIn() {

    }

    signOut() {
        this.login = false;
        this._authService.logout();
    }

    getNameToken() {
        this.username = storage.getNameToken();
    }

    checkRole() {
        return storage.getRoleToken();
    }

    private getProductTags() {
        this._productService.getProductTags().subscribe((product_tags: any)=> {
            this.departmentsTag = product_tags.departments;
            this.categoriesTag = product_tags.categories;
            this.industriesTag = product_tags.industries;
        });
    }

    goToProductList(productId: any) {
        this._router.navigate([`/product/${productId}`]);
    }

    goToBrowsePage(productId: any){
        this._router.navigate([`/product/browse-page/${productId}`]);
    }

    onRouterNavigate(path:string){
        this._router.navigate([`${path}`]);
    }

}
