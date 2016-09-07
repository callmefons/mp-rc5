import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router, ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";
import {AllVendorService} from "../shared/api-service/vendor/all-vendor.service";
import {AccountManagementService} from "../shared/api-service/admin/account-management.service";


@Component({
    moduleId: module.id,
    selector: 'sd-admin-vendors',
    templateUrl: 'templates/admin-vendors.component.html',
    styleUrls: ['styles/admin-vendors.component.css'],
})

export class AdminVendorsComponent implements OnInit, OnDestroy {


    constructor(private _productService: ProductService,
                private _allVendor: AllVendorService,
                private _accountService: AccountManagementService,
                private _router:Router,
                private route: ActivatedRoute) {

    }

    loading_detail: boolean = true;
    loading_vendor: boolean = true;
    sub_detail: Subscription;

    vendor$: Observable<any>;
    vendor: any[];

    detail: any[];
    detail$: Observable<any>;
    detail_vendor: any;
    apps: any [];

    sub_archive: Subscription;
    archive_account$: Observable<any>;

    ngOnInit() {

        this.sub_detail = this.route
            .params
            .subscribe(params => {
                let id = parseInt(params['id']);
                let mode = params['mode'];

                this.vendor$ = this._allVendor.getAllDeveloper();
                this.vendor$.subscribe((developer: any)=> {
                    this.vendor = developer;
                    this.loading_vendor = false;
                });


                if (mode == 'view') {
                    this.viewProfile(id);
                }

            });
    }

    ngOnDestroy() {
        if (this.sub_archive)this.sub_archive.unsubscribe();
        if (this.sub_detail)this.sub_detail.unsubscribe();
    }


    private viewProfile(id: number) {
        this.detail$ = this._allVendor.getAllDeveloperId(id);
        this.sub_detail = this.detail$.subscribe((detail: any)=> {
            this.detail = detail.data;
            this.detail_vendor = detail.data.developer;
            this.apps = detail.apps;

            this.loading_detail = false;
        });
    }


    archive_account: boolean = false;

    archiveAccount(userId: any) {
        this.archive_account$ = this._accountService.archiveAccount(userId);
        this.sub_archive = this.archive_account$.subscribe((res: any)=> {
            this.viewProfile(this.detail_vendor.id);
            this.archive_account = true;
        });
    }

    resetPassword: boolean = false;

    resetPasswordAccount(userId: any) {
        this.resetPassword = false;
        this._accountService.resetPasswordAccount(userId).subscribe((res: any)=> {
            this.resetPassword = true;
        });
    }

    goToDetail(productId:number){
        this._router.navigate([`admin/product/${productId}`]);
    }
}
