import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router, ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/api-service/product/product.service";
import {FormGroup, FormBuilder, Validator} from "@angular/forms";
import {StatusLog} from "../shared/models/status-log.model";
import {DomSanitizationService, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-admin-product',
    templateUrl: 'templates/admin-product.component.html',
    styleUrls: ['styles/admin-product.component.css'],
})

export class AdminProductComponent implements OnInit, OnDestroy {

    id: any;
    loading = true;
    sub: Subscription;

    errorMessage: string;

    products: any = [];
    apps: any = [];
    languagesTag: any = [];
    categoriesTag: any = [];
    departmentsTag: any = [];
    industriesTag: any = [];

    features: any = [];


    myFormAdminReview: FormGroup;
    sub_updateStatus: Subscription;
    updateStatus$: Observable<any>;
    updated: boolean = true;
    reviewed: boolean = false;

    /*Set thumbnail and Screenshot*/
    screenshots: any = [];
    thumbnail: any = [];
    count: number = 0;
    max: number = 4;
    index: number = 0;
    selected: any = '';


    /*Log Service*/
    logs$: Observable<any>;
    sub_logs: Subscription;
    logs: any = [];


    //Media
    embedUrl: SafeResourceUrl;

    constructor(private _fb: FormBuilder,
                private route: ActivatedRoute,
                private _router: Router,
                public _sanitizer: DomSanitizationService,
                private _productService: ProductService) {
        this.myFormAdminReview = this._fb.group({
            id: [''],
            status: [''],
            comment: [''],
        });
    }

    ngOnInit() {
        this.getProductId();
    }

    onRefresh() {
        this.getProductId();
    }

    ngOnDestroy() {
        if (this.sub_updateStatus){this.sub_updateStatus.unsubscribe();}
        if (this.sub){this.sub.unsubscribe();}
        if (this.sub_delete){this.sub_delete.unsubscribe();}
    }

    getProductId() {
        this.sub = this.route.params.subscribe((params: any) => {
            this.id = +params['id'];
            this._productService.getProductId(this.id)
                .subscribe((products: any) => {

                    this.products = products;
                    this.apps = products.data;

                    this.embedYoutube(this.apps.youtube);

                    for (let i = 0; i < this.products.languages.length; i++) {
                        this.languagesTag.push(this.products.languages[i]);
                    }
                    for (let i = 0; i < this.products.departments.length; i++) {
                        this.departmentsTag.push(this.products.departments[i]);
                    }
                    for (let i = 0; i < this.products.categories.length; i++) {
                        this.categoriesTag.push(this.products.categories[i]);
                    }
                    for (let i = 0; i < this.products.industries.length; i++) {
                        this.industriesTag.push(this.products.industries[i]);
                    }


                    for (let i = 0; i < this.products.data.features.length; i++) {
                        this.features.push(this.products.data.features[i]);
                    }
                    for (let i = 0; i < this.products.data.screenshots.length; i++) {
                        this.screenshots.push(this.products.data.screenshots[i]);
                    }
                    this.setThumbnail();
                    this.selected = this.screenshots[0].url;

                    this.loading = false;
                });

            //After get param Id
            this.getLogProduct();

        });
    }

    //For Needs Review
    onSubmit(value: Object) {
        this.updated = false;
        this.reviewed = false;

        const statusLog = new StatusLog(
            this.myFormAdminReview.value.comment
        );

        this.updateStatus$ = this._productService.updateProductStatus(
            this.id,
            'deny',
            statusLog
        );

        this.sub_updateStatus = this.updateStatus$.subscribe((res) => {
            this.updated = true;
            this.reviewed = true;
            this.onRefresh();
            this.myFormAdminReview.reset();
        }, error => this.errorMessage = <any>error);

    }

    updateProductStatus(id: any, status: any) {
        this.updated = false;
        this.updateStatus$ = this._productService.updateProductStatus(id, status);
        this.sub_updateStatus = this.updateStatus$.subscribe(() => {
            this.updated = true;
            this.onRefresh();

        }, error => this.errorMessage = <any>error);
    }


    /*Screenshot*/
    onSelect(_screenshot: string, i: number, j: number) {
        this.selected = _screenshot;

        if (i != 0) {
            this.index = ((j + 1) + (4 * i) - 1);
        } else {
            this.index = j;
        }
    }

    onControl(condition: string) {

        if (condition == 'plus') {

            if (this.index < this.screenshots.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }

        } else {

            if (this.index != 0) {
                this.index--;
            } else {
                this.index = this.screenshots.length - 1;
            }

        }

        this.selected = this.screenshots[this.index].url;
    }


    setThumbnail() {
        for (let i: number = 0; i < Math.ceil((this.screenshots.length / 4)); i++) {

            this.thumbnail[i] = [];

            for (let j: number = 0; j < 4; j++) {
                if (this.count < this.screenshots.length) {
                    this.thumbnail[i][j] = this.screenshots[this.count].url;
                    this.count++;
                }
            }
        }

    }

    video: boolean = false;

    embedYoutube(url: any) {

        if (url !== '') {
            this.video = true;
            let id = url.split('=', 2)[1];
            this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);

        }
    }


    goToListing() {
        this._router.navigate([`admin/listing`]);
    }


    private getLogProduct() {
        this.logs$ = this._productService.getLogProduct(this.id);
        this.sub_logs = this.logs$.subscribe((logs: any) => {
            this.logs = logs.data;
            this.loading = false;
        }), (err: any) => this.errorMessage = err;
    }

    sub_delete: Subscription;
    deleteProduct$: Observable<any>;

    deleteProduct(id: any) {
        this.deleteProduct$ = this._productService.deleteProduct(id);
        this.sub_delete = this.deleteProduct$.subscribe(() => {
            this._router.navigate([`admin/listing`]);
        });
    }
}

