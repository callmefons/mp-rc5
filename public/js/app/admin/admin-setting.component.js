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
var AdminSettingComponent = (function () {
    function AdminSettingComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.valueCategory = '';
        this.tempArrCategory = [];
        this.valueDepartment = '';
        this.tempArrDepartment = [];
        this.valueIndustry = '';
        this.tempArrIndustry = [];
    }
    AdminSettingComponent.prototype.ngOnInit = function () {
        this.getProductTags();
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
    AdminSettingComponent.prototype.onAddCategoryTag = function (item) {
        if (item.trim().length > 0) {
            this.valueCategory = '';
            this.categoriesTag.push({
                'name': item
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
    AdminSettingComponent.prototype.onAddDepartmentTag = function (item) {
        if (item.trim().length > 0) {
            this.valueDepartment = '';
            this.departmentsTag.push({
                'name': item
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
    AdminSettingComponent.prototype.onAddIndustryTag = function (item) {
        if (item.trim().length > 0) {
            this.valueIndustry = '';
            this.industriesTag.push({
                'name': item
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
    AdminSettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-dashboard',
            templateUrl: 'templates/admin-setting.component.html',
            styleUrls: ['styles/admin-setting.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], AdminSettingComponent);
    return AdminSettingComponent;
}());
exports.AdminSettingComponent = AdminSettingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLXNldHRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFHM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFZN0U7SUFZSSwrQkFBb0IsT0FBZSxFQUNmLGVBQStCO1FBRC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFObkQsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE2QjFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBWTNCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBc0I1QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQVk3QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFxQjlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBWTNCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO0lBeEc1QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw2Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdPLDhDQUFjLEdBQXRCO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEQs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QyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNWLEtBQUssVUFBVTtnQkFDWCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELEtBQUssQ0FBQztRQUVkLENBQUM7SUFFTCxDQUFDO0lBNUtMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDcEQsQ0FBQzs7NkJBQUE7SUF3S0YsNEJBQUM7QUFBRCxDQXRLQSxBQXNLQyxJQUFBO0FBdEtZLDZCQUFxQix3QkFzS2pDLENBQUEiLCJmaWxlIjoiYWRtaW4vYWRtaW4tc2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVycy9zdG9yYWdlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWxcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hZG1pbi1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FkbWluLXNldHRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvYWRtaW4tc2V0dGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5TZXR0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBhbGxfdGFnJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgbGFuZ3VhZ2VzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGRlcGFydG1lbnRzVGFnOiBhbnlbXSA9IFtdO1xuICAgIGluZHVzdHJpZXNUYWc6IGFueVtdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YikgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBnb1RvRGFzaGJvYXJkKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydhZG1pbi9kYXNoYm9hcmQnXSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLmFsbF90YWckID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLmFsbF90YWckLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBwcm9kdWN0X3RhZ3MubGFuZ3VhZ2VzO1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbHVlQ2F0ZWdvcnk6IHN0cmluZyA9ICcnO1xuXG4gICAgb25BZGRDYXRlZ29yeVRhZyhpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnLnB1c2goe1xuICAgICAgICAgICAgICAgICduYW1lJzogaXRlbVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlbXBBcnJDYXRlZ29yeTogYW55W10gPSBbXTtcblxuICAgIG9uU2VsZWN0ZWRDYXRlZ29yeVRhZyhpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcEFyckNhdGVnb3J5LmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcEFyckNhdGVnb3J5LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMudGVtcEFyckNhdGVnb3J5LmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnRlbXBBcnJDYXRlZ29yeS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRTdHlsZShpdGVtLCdjYXRlZ29yeScpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNhdGVnb3J5VGFnKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckNhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcuc3BsaWNlKChfLmZpbmRJbmRleCh0aGlzLmNhdGVnb3JpZXNUYWcsIFsnbmFtZScsIHRoaXMudGVtcEFyckNhdGVnb3J5W2ldXSkpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBBcnJDYXRlZ29yeSA9IFtdO1xuICAgIH1cblxuXG5cbiAgICB2YWx1ZURlcGFydG1lbnQ6IHN0cmluZyA9ICcnO1xuXG4gICAgb25BZGREZXBhcnRtZW50VGFnKGl0ZW06IGFueSkge1xuICAgICAgICBpZiAoaXRlbS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZURlcGFydG1lbnQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcucHVzaCh7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBpdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVtcEFyckRlcGFydG1lbnQ6IGFueVtdID0gW107XG5cbiAgICBvblNlbGVjdGVkRGVwYXJ0bWVudFRhZyhpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcEFyckRlcGFydG1lbnQuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLnRlbXBBcnJEZXBhcnRtZW50LmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnRlbXBBcnJEZXBhcnRtZW50LnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFN0eWxlKGl0ZW0sJ2RlcGFydG1lbnQnKTtcbiAgICB9XG5cbiAgICBkZWxldGVEZXBhcnRtZW50VGFnKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckRlcGFydG1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcuc3BsaWNlKChfLmZpbmRJbmRleCh0aGlzLmRlcGFydG1lbnRzVGFnLCBbJ25hbWUnLCB0aGlzLnRlbXBBcnJEZXBhcnRtZW50W2ldXSkpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBBcnJEZXBhcnRtZW50ID0gW107XG4gICAgfVxuXG5cbiAgICB2YWx1ZUluZHVzdHJ5OiBzdHJpbmcgPSAnJztcblxuICAgIG9uQWRkSW5kdXN0cnlUYWcoaXRlbTogYW55KSB7XG4gICAgICAgIGlmIChpdGVtLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlSW5kdXN0cnkgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZW1wQXJySW5kdXN0cnk6IGFueVtdID0gW107XG5cbiAgICBvblNlbGVjdGVkSW5kdXN0cnlUYWcoaXRlbTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBBcnJJbmR1c3RyeS5pbmRleE9mKGl0ZW0pID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBBcnJJbmR1c3RyeS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLnRlbXBBcnJJbmR1c3RyeS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy50ZW1wQXJySW5kdXN0cnkuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUoaXRlbSwnaW5kdXN0cnknKTtcbiAgICB9XG5cbiAgICBkZWxldGVJbmR1c3RyeVRhZygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJJbmR1c3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnLnNwbGljZSgoXy5maW5kSW5kZXgodGhpcy5pbmR1c3RyaWVzVGFnLCBbJ25hbWUnLCB0aGlzLnRlbXBBcnJJbmR1c3RyeVtpXV0pKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wQXJySW5kdXN0cnkgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRTdHlsZShpdGVtOiBhbnksdHlwZTpzdHJpbmcpIHtcblxuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcnknOlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBBcnJDYXRlZ29yeVtpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyAjZTFlMWUxJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlcGFydG1lbnQnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wQXJyRGVwYXJ0bWVudFtpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcgI2UxZTFlMSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmR1c3RyeSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJJbmR1c3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wQXJySW5kdXN0cnlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnICNlMWUxZTEnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
