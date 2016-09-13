import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";
import {ProductTags} from "../shared/models/product-tag.model";
import {ProductService} from "../shared/api-service/product/product.service";


declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'sd-admin-dashboard',
    templateUrl: 'templates/admin-setting.component.html',
    styleUrls: ['styles/admin-setting.component.css'],
})

export class AdminSettingComponent implements OnInit, OnDestroy {

    errorMessage: string;

    sub: Subscription;
    all_tag$: Observable<any>;

    languagesTag: any[] = [];
    departmentsTag: any[] = [];
    industriesTag: any[] = [];
    categoriesTag: any[] = [];

    constructor(private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit() {
        this.getProductTags();
    }

    ngOnDestroy() {
        if (this.sub) this.sub.unsubscribe();
    }

    goToDashboard() {
        this._router.navigate(['admin/dashboard']);
    }


    private getProductTags() {
        this.all_tag$ = this._productService.getProductTags();
        this.sub = this.all_tag$.subscribe((product_tags: any)=> {
            this.languagesTag = product_tags.languages;
            this.departmentsTag = product_tags.departments;
            this.categoriesTag = product_tags.categories;
            this.industriesTag = product_tags.industries;
        });
    }

    valueCategory: string = '';

    onAddCategoryTag(item: any) {
        if (item.trim().length > 0) {
            this.valueCategory = '';
            this.categoriesTag.push({
                'name': item
            });

        }
    }

    tempArrCategory: any[] = [];

    onSelectedCategoryTag(item: any) {
        if (this.tempArrCategory.indexOf(item) == -1) {
            this.tempArrCategory.push(item);
        }
        else {
            let i = this.tempArrCategory.indexOf(item);
            this.tempArrCategory.splice(i, 1);
        }
        this.getStyle(item,'category');
    }

    deleteCategoryTag() {
        for (let i = 0; i < this.tempArrCategory.length; i++) {
            this.categoriesTag.splice((_.findIndex(this.categoriesTag, ['name', this.tempArrCategory[i]])), 1);
        }
        this.tempArrCategory = [];
    }



    valueDepartment: string = '';

    onAddDepartmentTag(item: any) {
        if (item.trim().length > 0) {
            this.valueDepartment = '';
            this.departmentsTag.push({
                'name': item
            });

        }
    }

    tempArrDepartment: any[] = [];

    onSelectedDepartmentTag(item: any) {
        if (this.tempArrDepartment.indexOf(item) == -1) {
            this.tempArrDepartment.push(item);
        }
        else {
            let i = this.tempArrDepartment.indexOf(item);
            this.tempArrDepartment.splice(i, 1);
        }
        this.getStyle(item,'department');
    }

    deleteDepartmentTag() {
        for (let i = 0; i < this.tempArrDepartment.length; i++) {
            this.departmentsTag.splice((_.findIndex(this.departmentsTag, ['name', this.tempArrDepartment[i]])), 1);
        }
        this.tempArrDepartment = [];
    }


    valueIndustry: string = '';

    onAddIndustryTag(item: any) {
        if (item.trim().length > 0) {
            this.valueIndustry = '';
            this.industriesTag.push({
                'name': item
            });

        }
    }

    tempArrIndustry: any[] = [];

    onSelectedIndustryTag(item: any) {
        if (this.tempArrIndustry.indexOf(item) == -1) {
            this.tempArrIndustry.push(item);
        }
        else {
            let i = this.tempArrIndustry.indexOf(item);
            this.tempArrIndustry.splice(i, 1);
        }
        this.getStyle(item,'industry');
    }

    deleteIndustryTag() {
        for (let i = 0; i < this.tempArrIndustry.length; i++) {
            this.industriesTag.splice((_.findIndex(this.industriesTag, ['name', this.tempArrIndustry[i]])), 1);
        }
        this.tempArrIndustry = [];
    }

    getStyle(item: any,type:string) {

        switch(type) {
            case 'category':
            for (let i = 0; i < this.tempArrCategory.length; i++) {
                if (this.tempArrCategory[i] === item) {
                    return ' #e1e1e1';
                }
            }
            break;
            case 'department':
                for (let i = 0; i < this.tempArrDepartment.length; i++) {
                    if (this.tempArrDepartment[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
            case 'industry':
                for (let i = 0; i < this.tempArrIndustry.length; i++) {
                    if (this.tempArrIndustry[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;

        }

    }
}
