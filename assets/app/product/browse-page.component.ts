import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router}    from '@angular/router';
import {Subscription, Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
import {ProductService} from "../shared/api-service/product/product.service";
import {ProductTags} from "../shared/models/product-tag.model";

declare var _: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-product',
    templateUrl: 'templates/browse-page.component.html',
    styleUrls: ['styles/product-list.component.css'],
})

export class BrowsePageComponent implements OnInit, OnDestroy {



    errorMessage: any;
    loading: boolean = true;
    readonly: boolean = true;

    sub: Subscription;

    all_product$: Observable<any>;
    products: any[];

    /*Auto Filter*/
    service_id: number;//new id
    status_type: string;
    status_id:number; //dbid

    /*variable for filter function*/
    options: any = [];
    temp_products: any = [];
    products_filter: any = [];
    product_length: number;

    all_tag: any[] = [];
    languagesTag: ProductTags[] = [];
    departmentsTag: ProductTags[] = [];
    industriesTag: ProductTags[] = [];
    categoriesTag: ProductTags[] = [];

    //Show Category Link
    enable: boolean = false;

    constructor(private route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {

    }

    ngOnInit() {
        this.all_product$ = this._productService.getProduct();
        this.sub = this.route
            .params
            .subscribe(params => {
                this.service_id = +params['id'];

                this.all_product$.subscribe((products: any) => {
                    this.products = products;
                    this.loading = false;

                    //Reset all_tag when user click link navbar
                    this.all_tag = [];
                    this.temp_products = [];

                    this.getProductTags();

                });

            });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }


    getProductTags() {

        this.products_filter = this.products;
        this._productService.getProductTags()
            .subscribe(
                product_tags => {

                    this.languagesTag = product_tags.languages;
                    this.departmentsTag = product_tags.departments;
                    this.categoriesTag = product_tags.categories;
                    this.industriesTag = product_tags.industries;

                    if (this.languagesTag != [] && this.departmentsTag != [] && this.categoriesTag != [] && this.industriesTag != []) {
                        this.all_tag.push(...this.industriesTag, ...this.categoriesTag, ...this.languagesTag, ...this.departmentsTag);
                    }

                    for (let i = 0; i < this.all_tag.length; i++) {
                        if (this.all_tag[i].id === this.service_id) {
                            this.onAutoCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type);
                            this.status_type = this.all_tag[i].type;
                            this.status_id = this.all_tag[i].dbid;
                        }
                    }

                }),
            (error: any) => this.errorMessage = <any>error
    }

    all_industry: boolean = false;

    onCheckAllIndustry(event: any) {

        this.tempIndustry = [];

        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_industry = true;
        } else {
            this.all_industry = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'industry') {
                this.onCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type, event);
            }
        }

    }

    all_category: boolean = false;

    onCheckAllCategory(event: any) {

        this.tempCategory = [];

        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_category = true;
        } else {
            this.all_category = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'category') {
                this.onCheckboxFilterTag(this.all_tag[i].id,this.all_tag[i].type, event);
            }
        }

    }

    all_language: boolean = false;

    onCheckAllLanguage(event: any) {

        this.tempLanguage = [];

        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_language = true;
        } else {
            this.all_language = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'language') {
                this.onCheckboxFilterTag(this.all_tag[i].id,this.all_tag[i].type, event);
            }
        }

    }

    all_department: boolean = false;

    onCheckAllDepartment(event: any) {

        this.tempDepartment = [];

        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_department = true;
        } else {
            this.all_department = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'department') {
                this.onCheckboxFilterTag(this.all_tag[i].id,this.all_tag[i].type, event);
            }
        }

    }

    onAutoCheckboxFilterTag(value: any,type:string) {

        switch (type) {
            case 'department':
                this.tempDepartment.push(value);
                break;
            case 'industry':
                this.tempIndustry.push(value);
                break;
            case 'language':
                this.tempLanguage.push(value);
                break;
        }

        this.sendFilter();

    }

    onCheckboxFilterTag(value: any,type:string, event: any) {

        this.tempAllTag  = [];

        if (event.currentTarget.checked == true) {

            switch (type) {
                case 'department':
                    this.tempDepartment.push(value);
                    break;
                case 'industry':
                    this.tempIndustry.push(value);
                    break;
                case 'language':
                    this.tempLanguage.push(value);
                    break;
                case 'category':
                    this.tempCategory.push(value);
                    break;
            }

            this.sendFilter();

        }

        if (event.currentTarget.checked == false) {

            switch (type) {
                case 'department':
                    let i = _.findIndex(this.tempDepartment, (value));
                    this.tempDepartment.splice(i, 1);
                    break;
                case 'industry':
                    let j = _.findIndex(this.tempIndustry, (value));
                    this.tempIndustry.splice(j, 1);
                    break;
                case 'language':
                    let k = _.findIndex(this.tempLanguage, (value));
                    this.tempLanguage.splice(k, 1);
                    break;
            }

            this.sendFilter();

        }

        this.product_length = this.products_filter.length;
    }

    goToProductDetail(productId: number) {
        this._router.navigate([`product/${productId}/detail`]);
    }

    tempAllTag : any = [];
    tempDepartment: any = [];
    tempIndustry: any = [];
    tempLanguage: any = [];
    tempCategory:any = [];

    private sendFilter() {
        this.tempAllTag = [];
        this.tempAllTag.push(
            {
                'filter_by':'all',
                'value':this.status_id
            },
            {
                'type': 'department',
                'value': this.tempDepartment
            },
            {
                'type': 'industry',
                'value': this.tempIndustry
            },
            {
                'type': 'language',
                'value': this.tempLanguage
            },
            {
                'type':'category',
                'value':this.tempCategory
            }

            );
        //console.log(this.tempAllTag);
    }

}
