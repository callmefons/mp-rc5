"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var product_service_1 = require("../shared/api-service/product/product.service");
var forms_1 = require("@angular/forms");
var AdminSettingComponent = (function () {
    function AdminSettingComponent(_fb, _router, _productService) {
        this._fb = _fb;
        this._router = _router;
        this._productService = _productService;
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.tempArrCategory = [];
        this.tempArrDepartment = [];
        this.tempArrIndustry = [];
        this.tempAllTag = [];
        this.valueCategory = '';
        this.valueCategory_th = '';
        this.valueDepartment = '';
        this.valueDepartment_th = '';
        this.valueIndustry = '';
        this.valueIndustry_th = '';
    }
    AdminSettingComponent.prototype.ngOnInit = function () {
        this.getProductTags();
    };
    AdminSettingComponent.prototype.onRefresh = function () {
        this.getProductTags();
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.tempArrCategory = [];
        this.tempArrDepartment = [];
        this.tempArrIndustry = [];
        this.tempAllTag = [];
    };
    AdminSettingComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    AdminSettingComponent.prototype.goToDashboard = function () {
        this._router.navigate(['admin/dashboard']);
    };
    AdminSettingComponent.prototype.getProductTags = function () {
        var _this = this;
        this.all_tag$ = this._productService.getProductTags();
        this.sub = this.all_tag$.subscribe(function (product_tags) {
            _this.languagesTag = product_tags.languages;
            _this.departmentsTag = product_tags.departments;
            _this.categoriesTag = product_tags.categories;
            _this.industriesTag = product_tags.industries;
        });
    };
    AdminSettingComponent.prototype.onAddCategoryTag = function (valueCategory, valueCategory_th) {
        if (valueCategory.trim().length > 0 && valueCategory_th.trim().length > 0) {
            this.valueCategory = '';
            this.valueCategory_th = '';
            this.categoriesTag.push({
                'name': valueCategory,
                'name_th': valueCategory_th,
                'type': 'category'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedCategoryTag = function (item) {
        if (this.tempArrCategory.indexOf(item) == -1) {
            this.tempArrCategory.push(item);
        }
        else {
            var i = this.tempArrCategory.indexOf(item);
            this.tempArrCategory.splice(i, 1);
        }
        this.getStyle(item, 'category');
    };
    AdminSettingComponent.prototype.deleteCategoryTag = function () {
        for (var i = 0; i < this.tempArrCategory.length; i++) {
            this.categoriesTag.splice((_.findIndex(this.categoriesTag, ['name', this.tempArrCategory[i]])), 1);
        }
        this.tempArrCategory = [];
    };
    AdminSettingComponent.prototype.onAddDepartmentTag = function (valueDepartment, valueDepartment_th) {
        if (valueDepartment.trim().length > 0 && valueDepartment_th.trim().length > 0) {
            this.valueDepartment = '';
            this.valueDepartment_th = '';
            this.departmentsTag.push({
                'name': valueDepartment,
                'name_th': valueDepartment_th,
                'type': 'department'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedDepartmentTag = function (item) {
        if (this.tempArrDepartment.indexOf(item) == -1) {
            this.tempArrDepartment.push(item);
        }
        else {
            var i = this.tempArrDepartment.indexOf(item);
            this.tempArrDepartment.splice(i, 1);
        }
        this.getStyle(item, 'department');
    };
    AdminSettingComponent.prototype.deleteDepartmentTag = function () {
        for (var i = 0; i < this.tempArrDepartment.length; i++) {
            this.departmentsTag.splice((_.findIndex(this.departmentsTag, ['name', this.tempArrDepartment[i]])), 1);
        }
        this.tempArrDepartment = [];
    };
    AdminSettingComponent.prototype.onAddIndustryTag = function (valueIndustry, valueIndustry_th) {
        if (valueIndustry.trim().length > 0 && valueIndustry_th.trim().length > 0) {
            this.valueIndustry = '';
            this.valueIndustry_th = '';
            this.industriesTag.push({
                'name': valueIndustry,
                'name_th': valueIndustry_th,
                'type': 'industry'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedIndustryTag = function (item) {
        if (this.tempArrIndustry.indexOf(item) == -1) {
            this.tempArrIndustry.push(item);
        }
        else {
            var i = this.tempArrIndustry.indexOf(item);
            this.tempArrIndustry.splice(i, 1);
        }
        this.getStyle(item, 'industry');
    };
    AdminSettingComponent.prototype.deleteIndustryTag = function () {
        for (var i = 0; i < this.tempArrIndustry.length; i++) {
            this.industriesTag.splice((_.findIndex(this.industriesTag, ['name', this.tempArrIndustry[i]])), 1);
        }
        this.tempArrIndustry = [];
    };
    AdminSettingComponent.prototype.getStyle = function (item, type) {
        switch (type) {
            case 'category':
                for (var i = 0; i < this.tempArrCategory.length; i++) {
                    if (this.tempArrCategory[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
            case 'department':
                for (var i = 0; i < this.tempArrDepartment.length; i++) {
                    if (this.tempArrDepartment[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
            case 'industry':
                for (var i = 0; i < this.tempArrIndustry.length; i++) {
                    if (this.tempArrIndustry[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
        }
    };
    //Todo Re-Array
    AdminSettingComponent.prototype.onSave = function () {
        var _this = this;
        this.tempAllTag.push(this.categoriesTag, this.departmentsTag, this.industriesTag);
        this._productService.updateTagProducts(this.tempAllTag)
            .subscribe(function (res) {
            _this.onRefresh();
        });
    };
    AdminSettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-dashboard',
            templateUrl: 'templates/admin-setting.component.html',
            styleUrls: ['styles/admin-setting.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, product_service_1.ProductService])
    ], AdminSettingComponent);
    return AdminSettingComponent;
}());
exports.AdminSettingComponent = AdminSettingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLXNldHRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFHM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0Usc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFhbEU7SUFrQkksK0JBQW9CLEdBQWUsRUFDZixPQUFlLEVBQ2YsZUFBK0I7UUFGL0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFabkQsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFFMUIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQVUsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBUyxFQUFFLENBQUM7UUEyQ3RCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQXFDN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBb0NoQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFqSDlCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUksRUFBRSxD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QUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BELENBQUM7OzZCQUFBO0lBMk5GLDRCQUFDO0FBQUQsQ0F6TkEsQUF5TkMsSUFBQTtBQXpOWSw2QkFBcUIsd0JBeU5qQyxDQUFBIiwiZmlsZSI6ImFkbWluL2FkbWluLXNldHRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UHJvZHVjdFRhZ3N9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtlbmdsaXNoVmFsaWRhdG9yLCBlbWFpbFZhbGlkYXRvcn0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnNcIjtcblxuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hZG1pbi1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FkbWluLXNldHRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvYWRtaW4tc2V0dGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5TZXR0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBhbGxfdGFnJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cbiAgICBsYW5ndWFnZXNUYWc6IGFueVtdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IGFueVtdID0gW107XG4gICAgaW5kdXN0cmllc1RhZzogYW55W10gPSBbXTtcbiAgICBjYXRlZ29yaWVzVGFnOiBhbnlbXSA9IFtdO1xuXG4gICAgdGVtcEFyckNhdGVnb3J5OiBhbnlbXSA9IFtdO1xuICAgIHRlbXBBcnJEZXBhcnRtZW50OiBhbnlbXSA9IFtdO1xuICAgIHRlbXBBcnJJbmR1c3RyeTogYW55W10gPSBbXTtcbiAgICB0ZW1wQWxsVGFnOmFueSBbXSA9W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgfVxuXG4gICAgb25SZWZyZXNoKCl7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBbXTtcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyAgPSBbXTtcbiAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnICA9IFtdO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wQXJyQ2F0ZWdvcnkgID0gW107XG4gICAgICAgIHRoaXMudGVtcEFyckRlcGFydG1lbnQgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wQXJySW5kdXN0cnkgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wQWxsVGFnID1bXTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViKSB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdvVG9EYXNoYm9hcmQoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL2Rhc2hib2FyZCddKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgICAgIHRoaXMuYWxsX3RhZyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuYWxsX3RhZyQuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZyA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXM7XG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWVDYXRlZ29yeTogc3RyaW5nID0gJyc7XG4gICAgdmFsdWVDYXRlZ29yeV90aDpzdHJpbmcgPSAnJztcblxuICAgIG9uQWRkQ2F0ZWdvcnlUYWcodmFsdWVDYXRlZ29yeTogYW55LHZhbHVlQ2F0ZWdvcnlfdGg6YW55KSB7XG4gICAgICAgIGlmICh2YWx1ZUNhdGVnb3J5LnRyaW0oKS5sZW5ndGggPiAwICYmIHZhbHVlQ2F0ZWdvcnlfdGgudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNhdGVnb3J5X3RoID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcucHVzaCh7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiB2YWx1ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICduYW1lX3RoJzp2YWx1ZUNhdGVnb3J5X3RoLFxuICAgICAgICAgICAgICAgICd0eXBlJzonY2F0ZWdvcnknXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIG9uU2VsZWN0ZWRDYXRlZ29yeVRhZyhpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcEFyckNhdGVnb3J5LmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcEFyckNhdGVnb3J5LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMudGVtcEFyckNhdGVnb3J5LmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnRlbXBBcnJDYXRlZ29yeS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRTdHlsZShpdGVtLCdjYXRlZ29yeScpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNhdGVnb3J5VGFnKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckNhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcuc3BsaWNlKChfLmZpbmRJbmRleCh0aGlzLmNhdGVnb3JpZXNUYWcsIFsnbmFtZScsIHRoaXMudGVtcEFyckNhdGVnb3J5W2ldXSkpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBBcnJDYXRlZ29yeSA9IFtdO1xuICAgIH1cblxuXG5cbiAgICB2YWx1ZURlcGFydG1lbnQ6IHN0cmluZyA9ICcnO1xuICAgIHZhbHVlRGVwYXJ0bWVudF90aDogc3RyaW5nID0gJyc7XG5cbiAgICBvbkFkZERlcGFydG1lbnRUYWcodmFsdWVEZXBhcnRtZW50OiBhbnksIHZhbHVlRGVwYXJ0bWVudF90aDphbnkpIHtcbiAgICAgICAgaWYgKHZhbHVlRGVwYXJ0bWVudC50cmltKCkubGVuZ3RoID4gMCAmJiB2YWx1ZURlcGFydG1lbnRfdGgudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVEZXBhcnRtZW50ID0gJyc7XG4gICAgICAgICAgICB0aGlzLnZhbHVlRGVwYXJ0bWVudF90aCA9ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnB1c2goe1xuICAgICAgICAgICAgICAgICduYW1lJzogdmFsdWVEZXBhcnRtZW50LFxuICAgICAgICAgICAgICAgICduYW1lX3RoJzp2YWx1ZURlcGFydG1lbnRfdGgsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOidkZXBhcnRtZW50J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25TZWxlY3RlZERlcGFydG1lbnRUYWcoaXRlbTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBBcnJEZXBhcnRtZW50LmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcEFyckRlcGFydG1lbnQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRTdHlsZShpdGVtLCdkZXBhcnRtZW50Jyk7XG4gICAgfVxuXG4gICAgZGVsZXRlRGVwYXJ0bWVudFRhZygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJEZXBhcnRtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnNwbGljZSgoXy5maW5kSW5kZXgodGhpcy5kZXBhcnRtZW50c1RhZywgWyduYW1lJywgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudFtpXV0pKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudCA9IFtdO1xuICAgIH1cblxuXG4gICAgdmFsdWVJbmR1c3RyeTogc3RyaW5nID0gJyc7XG4gICAgdmFsdWVJbmR1c3RyeV90aDogc3RyaW5nID0gJyc7XG5cbiAgICBvbkFkZEluZHVzdHJ5VGFnKHZhbHVlSW5kdXN0cnk6IGFueSwgdmFsdWVJbmR1c3RyeV90aDphbnkpIHtcbiAgICAgICAgaWYgKHZhbHVlSW5kdXN0cnkudHJpbSgpLmxlbmd0aCA+IDAgJiYgdmFsdWVJbmR1c3RyeV90aC50cmltKCkubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICB0aGlzLnZhbHVlSW5kdXN0cnkgPSAnJztcbiAgICAgICAgICAgIHRoaXMudmFsdWVJbmR1c3RyeV90aCA9ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcucHVzaCh7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiB2YWx1ZUluZHVzdHJ5LFxuICAgICAgICAgICAgICAgICduYW1lX3RoJzogdmFsdWVJbmR1c3RyeV90aCxcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdpbmR1c3RyeSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgb25TZWxlY3RlZEluZHVzdHJ5VGFnKGl0ZW06IGFueSkge1xuICAgICAgICBpZiAodGhpcy50ZW1wQXJySW5kdXN0cnkuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wQXJySW5kdXN0cnkucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy50ZW1wQXJySW5kdXN0cnkuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgIHRoaXMudGVtcEFyckluZHVzdHJ5LnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFN0eWxlKGl0ZW0sJ2luZHVzdHJ5Jyk7XG4gICAgfVxuXG4gICAgZGVsZXRlSW5kdXN0cnlUYWcoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJySW5kdXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZy5zcGxpY2UoKF8uZmluZEluZGV4KHRoaXMuaW5kdXN0cmllc1RhZywgWyduYW1lJywgdGhpcy50ZW1wQXJySW5kdXN0cnlbaV1dKSksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVtcEFyckluZHVzdHJ5ID0gW107XG4gICAgfVxuXG4gICAgZ2V0U3R5bGUoaXRlbTogYW55LHR5cGU6c3RyaW5nKSB7XG5cbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3J5JzpcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJyQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wQXJyQ2F0ZWdvcnlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcgI2UxZTFlMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZXBhcnRtZW50JzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckRlcGFydG1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVtcEFyckRlcGFydG1lbnRbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnICNlMWUxZTEnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5kdXN0cnknOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJySW5kdXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVtcEFyckluZHVzdHJ5W2ldID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyAjZTFlMWUxJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vVG9kbyBSZS1BcnJheVxuICAgIG9uU2F2ZSgpe1xuICAgICAgICB0aGlzLnRlbXBBbGxUYWcucHVzaChcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyxcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcsXG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS51cGRhdGVUYWdQcm9kdWN0cyh0aGlzLnRlbXBBbGxUYWcpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
