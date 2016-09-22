import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";
import {ProductTags} from "../shared/models/product-tag.model";
import {ProductService} from "../shared/api-service/product/product.service";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {englishValidator, emailValidator} from "../shared/helpers/validators";


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

    tempArrCategory: any[] = [];
    tempArrDepartment: any[] = [];
    tempArrIndustry: any[] = [];
    tempAllTag:any [] =[];

    constructor(private _fb:FormBuilder,
                private _router: Router,
                private _productService: ProductService) {

    }

    ngOnInit() {
        this.getProductTags();
    }

    onRefresh(){
        this.getProductTags();
        this.languagesTag = [];
        this.departmentsTag  = [];
        this.industriesTag  = [];
        this.categoriesTag = [];
        this.tempArrCategory  = [];
        this.tempArrDepartment = [];
        this.tempArrIndustry = [];
        this.tempAllTag =[];
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
    valueCategory_th:string = '';

    onAddCategoryTag(valueCategory: any,valueCategory_th:any) {
        if (valueCategory.trim().length > 0 && valueCategory_th.trim().length > 0) {
            this.valueCategory = '';
            this.valueCategory_th = '';
            this.categoriesTag.push({
                'name': valueCategory,
                'name_th':valueCategory_th,
                'type':'category'
            });

        }
    }



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
    valueDepartment_th: string = '';

    onAddDepartmentTag(valueDepartment: any, valueDepartment_th:any) {
        if (valueDepartment.trim().length > 0 && valueDepartment_th.trim().length > 0) {
            this.valueDepartment = '';
            this.valueDepartment_th = '';

            this.departmentsTag.push({
                'name': valueDepartment,
                'name_th':valueDepartment_th,
                'type':'department'
            });

        }
    }


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
    valueIndustry_th: string = '';

    onAddIndustryTag(valueIndustry: any, valueIndustry_th:any) {
        if (valueIndustry.trim().length > 0 && valueIndustry_th.trim().length > 0) {

            this.valueIndustry = '';
            this.valueIndustry_th = '';

            this.industriesTag.push({
                'name': valueIndustry,
                'name_th': valueIndustry_th,
                'type': 'industry'
            });

        }
    }



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



    //Todo Re-Array
    onSave(){
        this.tempAllTag.push(
            this.categoriesTag,
            this.departmentsTag,
            this.industriesTag
        );

        this._productService.updateTagProducts(this.tempAllTag)
            .subscribe((res) => {
                this.onRefresh();
            });

    }

}
