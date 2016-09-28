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
    templateUrl: 'templates/product-list.component.html',
    styleUrls: ['styles/product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

    // public status: Object = {
    //     isFirstOpen: true,
    //     isFirstDisabled: false,
    //     category: false
    // };


    status_type: string;
    title_category_name: string;

    errorMessage: any;
    loading: boolean = true;
    readonly: boolean = true;

    sub: Subscription;

    all_product$: Observable<any>;
    products: any[] = [];

    /*Auto Filter*/
    service_id: number;

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

    checkedFirst: boolean = false;

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

                    this.loading = false;

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
                        this.setFilter();
                        this.onAutoCheckboxFilterTag(this.service_id);
                    }


                    //Service Id Plus 1 because service_id start index at 0 but alltag start 1
                    for (let i = 0; i < this.all_tag.length; i++) {
                        if (this.all_tag[i].id === this.service_id) {
                            this.status_type = this.all_tag[i].type;
                            this.title_category_name = this.all_tag[i].name;

                            this.sendFilter();
                        }
                    }

                }),
            (error: any) => this.errorMessage = <any>error
    }

    setFilter() {
        for (let i = 0; i < this.all_tag.length; i++) {
            this.options[i] = [];
            for (let j = 0; j < this.products.length; j++) {
                for (let k = 0; k < this.products[j].tag.length; k++) {
                    if (this.products[j].tag[k].name == this.all_tag[i].name) {
                        this.options[i].push({
                            optionId: i,
                            id: this.products[j].id,
                            name: this.products[j].name,
                            shortdescription: this.products[j].shortdescription,
                            logo: this.products[j].logo
                        });
                    }
                }
            }
        }
    }

    all_industry: boolean = false;

    onCheckAllIndustry(event: any) {

        this.tempIndustry;
        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_industry = true;
        } else {
            this.all_industry = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'industry') {
                this.onCheckboxFilterTag(this.all_tag[i].dbid, this.all_tag[i].type, event);
            }
        }

    }

    all_category: boolean = false;

    onCheckAllCategory(event: any) {


        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_category = true;
        } else {
            this.all_category = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'category') {
                this.onCheckboxFilterTag(this.all_tag[i].dbid, this.all_tag[i].type, event);
            }
        }

    }

    all_language: boolean = false;

    onCheckAllLanguage(event: any) {

        this.tempLanguage;

        this.service_id = null;

        if (event.currentTarget.checked == true) {
            this.all_language = true;
        } else {
            this.all_language = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'language') {
                this.onCheckboxFilterTag(this.all_tag[i].dbid, this.all_tag[i].type, event);
            }
        }

    }

    all_department: boolean = false;

    onCheckAllDepartment(event: any) {

        this.service_id = null;
        this.tempDepartment;

        if (event.currentTarget.checked == true) {
            this.all_department = true;
        } else {
            this.all_department = false;
        }

        for (let i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'department') {
                this.onCheckboxFilterTag(this.all_tag[i].dbid, this.all_tag[i].type, event);
            }
        }

    }

    onAutoCheckboxFilterTag(value: any) {
        this.checkedFirst = true;
        for (let i = 0; i < this.options.length; i++) {
            if ((value - 1) == i) {
                this.temp_products.push(...this.options[i]);
            }
        }
        this.products_filter = _.uniqBy(this.temp_products, 'id');

        this.product_length = this.products_filter.length;

    }

    tempAllTag : any = [];
    tempDepartment: any = [];
    tempIndustry: any = [];
    tempLanguage: any = [];

    onCheckboxFilterTag(value: any, type: string, event: any) {

        this.tempAllTag = [];

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

    getStyle(categoryId: number) {
        return (this.service_id == categoryId) ? '#f5f5f5' : '#ffffff';
    }


    goToProductList(categoryId: any) {
        if (this.service_id != categoryId) {
            this._router.navigate([`/product/${categoryId}`]);
            //Reset all_tag when user click link navbar
            this.products = [];
            this.all_tag = [];
            this.temp_products = [];
            this.checkedFirst = false;
        }
    }

    goToProductDetail(productId: number) {
        this._router.navigate([`product/${productId}/detail`]);
    }

    private sendFilter() {
        this.tempAllTag = [];
        let category = this.title_category_name;
        this.tempAllTag.push(
            category,
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
            });
        // console.log(this.tempAllTag);
    }
}
