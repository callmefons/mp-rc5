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
var router_1 = require('@angular/router');
var product_service_1 = require("../shared/api-service/product/product.service");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var ProductListComponent = (function () {
    function ProductListComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
        this.oneAtATime = true;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false,
        };
        this.loading = true;
        this.readonly = true;
        /*variable for filter function*/
        this.options = [];
        this.temp_products = [];
        this.products_filter = [];
        this.all_tag = [];
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.checkedFirst = false;
        //Show Category Link
        this.enable = false;
        this.all_industry = false;
        this.all_category = false;
        this.all_language = false;
        this.all_department = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all_product$ = this._productService.getProduct();
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.service_id = +params['id'];
            _this.all_product$.subscribe(function (products) {
                _this.products = products;
                _this.loading = false;
                //Reset all_tag when user click link navbar
                _this.all_tag = [];
                _this.temp_products = [];
                _this.checkedFirst = false;
                _this.getProductTags();
            });
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductListComponent.prototype.getProductTags = function () {
        var _this = this;
        this.products_filter = this.products;
        this._productService.getProductTags()
            .subscribe(function (product_tags) {
            _this.languagesTag = product_tags.languages;
            _this.departmentsTag = product_tags.departments;
            _this.categoriesTag = product_tags.categories;
            _this.industriesTag = product_tags.industries;
            if (_this.languagesTag != [] && _this.departmentsTag != [] && _this.categoriesTag != [] && _this.industriesTag != []) {
                (_a = _this.all_tag).push.apply(_a, _this.industriesTag.concat(_this.categoriesTag, _this.languagesTag, _this.departmentsTag));
                _this.setFilter();
                _this.onAutoCheckboxFilterTag(_this.service_id);
            }
            //Service Id Plus 1 because service_id start index at 0 but alltag start 1
            for (var i = 0; i < _this.all_tag.length; i++) {
                if (_this.all_tag[i].id === _this.service_id) {
                    _this.status_type = _this.all_tag[i].type;
                    _this.title_category_name = _this.all_tag[i].name;
                }
            }
            var _a;
        }),
            function (error) { return _this.errorMessage = error; };
    };
    ProductListComponent.prototype.setFilter = function () {
        for (var i = 0; i < this.all_tag.length; i++) {
            this.options[i] = [];
            for (var j = 0; j < this.products.length; j++) {
                for (var k = 0; k < this.products[j].tag.length; k++) {
                    if (this.products[j].tag[k] == this.all_tag[i].name) {
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
    };
    ProductListComponent.prototype.onCheckAllIndustry = function (event) {
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_industry = true;
        }
        else {
            this.all_industry = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'industry') {
                this.onCheckboxFilterTag(this.all_tag[i].id, event);
            }
        }
    };
    ProductListComponent.prototype.onCheckAllCategory = function (event) {
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_category = true;
        }
        else {
            this.all_category = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'category') {
                this.onCheckboxFilterTag(this.all_tag[i].id, event);
            }
        }
    };
    ProductListComponent.prototype.onCheckAllLanguage = function (event) {
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_language = true;
        }
        else {
            this.all_language = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'language') {
                this.onCheckboxFilterTag(this.all_tag[i].id, event);
            }
        }
    };
    ProductListComponent.prototype.onCheckAllDepartment = function (event) {
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_department = true;
        }
        else {
            this.all_department = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'department') {
                this.onCheckboxFilterTag(this.all_tag[i].id, event);
            }
        }
    };
    ProductListComponent.prototype.onAutoCheckboxFilterTag = function (value) {
        this.checkedFirst = true;
        for (var i = 0; i < this.options.length; i++) {
            if ((value - 1) == i) {
                (_a = this.temp_products).push.apply(_a, this.options[i]);
            }
        }
        this.products_filter = _.uniqBy(this.temp_products, 'id');
        this.product_length = this.products_filter.length;
        var _a;
    };
    ProductListComponent.prototype.onCheckboxFilterTag = function (value, event) {
        if (event.currentTarget.checked == true) {
            for (var i = 0; i < this.options.length; i++) {
                if ((value - 1) == i) {
                    (_a = this.temp_products).push.apply(_a, this.options[i]);
                }
            }
            this.products_filter = _.uniqBy(this.temp_products, 'name');
        }
        if (event.currentTarget.checked == false) {
            this.temp_products = _.filter(this.temp_products, function (temp_products) {
                return temp_products.optionId !== (value - 1);
            });
            if (_.isEmpty(this.temp_products)) {
                this.products_filter = this.products;
            }
            else {
                this.products_filter = _.uniqBy(this.temp_products, 'name');
            }
        }
        this.product_length = this.products_filter.length;
        var _a;
    };
    ProductListComponent.prototype.getStyle = function (categoryId) {
        return (this.service_id == categoryId) ? '#e1e1e1' : '#f5f5f5';
    };
    ProductListComponent.prototype.goToProductList = function (productId) {
        this._router.navigate([("/product/" + productId)]);
    };
    ProductListComponent.prototype.goToProductDetail = function (productId) {
        this._router.navigate([("product/" + productId + "/detail")]);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-product',
            templateUrl: 'templates/product-list.component.html',
            styleUrls: ['styles/product-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRzFELGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBSzdFOztHQUVHO0FBUUg7SUE0Q0UsOEJBQW9CLEtBQXFCLEVBQ3JCLE9BQWMsRUFDZCxlQUErQjtRQUYvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBNUM1QyxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJELFdBQU0sR0FBVTtZQUNyQixXQUFXLEVBQUUsSUFBSTtZQUNqQixlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDO1FBUUYsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixhQUFRLEdBQWEsSUFBSSxDQUFDO1FBVTFCLGdDQUFnQztRQUNoQyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBRzFCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLG1CQUFjLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBRWxDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLG9CQUFvQjtRQUNwQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBc0Z4QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQW1COUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFvQjlCLGlCQUFZLEdBQVksS0FBSyxD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QUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5RCxDQUFDO1FBRUgsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O0lBQ3BELENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsVUFBaUI7UUFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUksU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFFRCw4Q0FBZSxHQUFmLFVBQWdCLFNBQWM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFZLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZ0RBQWlCLEdBQWpCLFVBQWtCLFNBQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBVyxTQUFTLGFBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXRRSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNqRCxDQUFDOzs0QkFBQTtJQWtRRiwyQkFBQztBQUFELENBaFFBLEFBZ1FDLElBQUE7QUFoUVksNEJBQW9CLHVCQWdRaEMsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFRhZ3N9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsXCI7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXByb2R1Y3QnLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGVzL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgb25lQXRBVGltZTpib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGl0ZW1zOkFycmF5PHN0cmluZz4gPSBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJ107XG5cbiAgcHVibGljIHN0YXR1czpPYmplY3QgPSB7XG4gICAgaXNGaXJzdE9wZW46IHRydWUsXG4gICAgaXNGaXJzdERpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0dXNfdHlwZTpzdHJpbmc7XG4gIC8vRm9yIHRpdGxlIHBhZ2VcbiAgdGl0bGVfY2F0ZWdvcnlfbmFtZTpzdHJpbmc7XG5cblxuICBlcnJvck1lc3NhZ2U6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHJlYWRvbmx5IDogYm9vbGVhbiA9IHRydWU7XG5cbiAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgYWxsX3Byb2R1Y3QkOiBPYnNlcnZhYmxlPGFueT47XG4gIHByb2R1Y3RzOiBhbnlbXTtcblxuICAvKkF1dG8gRmlsdGVyKi9cbiAgc2VydmljZV9pZDogbnVtYmVyO1xuXG4gIC8qdmFyaWFibGUgZm9yIGZpbHRlciBmdW5jdGlvbiovXG4gIG9wdGlvbnM6IGFueSA9IFtdO1xuICB0ZW1wX3Byb2R1Y3RzOiBhbnkgPSBbXTtcbiAgcHJvZHVjdHNfZmlsdGVyOiBhbnkgPSBbXTtcbiAgcHJvZHVjdF9sZW5ndGg6IG51bWJlcjtcblxuICBhbGxfdGFnOiBhbnlbXSA9IFtdO1xuICBsYW5ndWFnZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgZGVwYXJ0bWVudHNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuICBjYXRlZ29yaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG5cbiAgY2hlY2tlZEZpcnN0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9TaG93IENhdGVnb3J5IExpbmtcbiAgZW5hYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsbF9wcm9kdWN0JCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlX2lkID0gK3BhcmFtc1snaWQnXTtcblxuICAgICAgICAgIHRoaXMuYWxsX3Byb2R1Y3QkLnN1YnNjcmliZSgocHJvZHVjdHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vUmVzZXQgYWxsX3RhZyB3aGVuIHVzZXIgY2xpY2sgbGluayBuYXZiYXJcbiAgICAgICAgICAgIHRoaXMuYWxsX3RhZyA9IFtdO1xuICAgICAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzID0gW107XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRGaXJzdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldFByb2R1Y3RUYWdzKCkge1xuXG4gICAgdGhpcy5wcm9kdWN0c19maWx0ZXIgPSB0aGlzLnByb2R1Y3RzO1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHByb2R1Y3RfdGFncyA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlc1RhZyAhPSBbXSAmJiB0aGlzLmRlcGFydG1lbnRzVGFnICE9IFtdICYmIHRoaXMuY2F0ZWdvcmllc1RhZyAhPSBbXSAmJiB0aGlzLmluZHVzdHJpZXNUYWcgIT0gW10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF90YWcucHVzaCguLi50aGlzLmluZHVzdHJpZXNUYWcsIC4uLnRoaXMuY2F0ZWdvcmllc1RhZywgLi4udGhpcy5sYW5ndWFnZXNUYWcsIC4uLnRoaXMuZGVwYXJ0bWVudHNUYWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9DaGVja2JveEZpbHRlclRhZyh0aGlzLnNlcnZpY2VfaWQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy9TZXJ2aWNlIElkIFBsdXMgMSBiZWNhdXNlIHNlcnZpY2VfaWQgc3RhcnQgaW5kZXggYXQgMCBidXQgYWxsdGFnIHN0YXJ0IDFcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsX3RhZ1tpXS5pZCA9PT0gdGhpcy5zZXJ2aWNlX2lkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX3R5cGUgPSB0aGlzLmFsbF90YWdbaV0udHlwZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVfY2F0ZWdvcnlfbmFtZSA9IHRoaXMuYWxsX3RhZ1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICB9XG5cbiAgc2V0RmlsdGVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxfdGFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucHJvZHVjdHNbal0udGFnLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbal0udGFnW2tdID09IHRoaXMuYWxsX3RhZ1tpXS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0ucHVzaCh7XG4gICAgICAgICAgICAgIG9wdGlvbklkOiBpLFxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9kdWN0c1tqXS5pZCxcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0c1tqXS5uYW1lLFxuICAgICAgICAgICAgICBzaG9ydGRlc2NyaXB0aW9uOiB0aGlzLnByb2R1Y3RzW2pdLnNob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvZ286IHRoaXMucHJvZHVjdHNbal0ubG9nb1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsX2luZHVzdHJ5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbEluZHVzdHJ5KGV2ZW50OmFueSl7XG5cbiAgICB0aGlzLnNlcnZpY2VfaWQgPSBudWxsO1xuXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpe1xuICAgICAgdGhpcy5hbGxfaW5kdXN0cnkgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5hbGxfaW5kdXN0cnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdpbmR1c3RyeScpe1xuICAgICAgICB0aGlzLm9uQ2hlY2tib3hGaWx0ZXJUYWcodGhpcy5hbGxfdGFnW2ldLmlkLGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBhbGxfY2F0ZWdvcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkNoZWNrQWxsQ2F0ZWdvcnkoZXZlbnQ6YW55KXtcblxuICAgIHRoaXMuc2VydmljZV9pZCA9IG51bGw7XG5cbiAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbF9jYXRlZ29yeSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmFsbF9jYXRlZ29yeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLmFsbF90YWdbaV0udHlwZSA9PT0gJ2NhdGVnb3J5Jyl7XG4gICAgICAgIHRoaXMub25DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgYWxsX2xhbmd1YWdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbExhbmd1YWdlKGV2ZW50OmFueSl7XG5cbiAgICB0aGlzLnNlcnZpY2VfaWQgPSBudWxsO1xuXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpe1xuICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdsYW5ndWFnZScpe1xuICAgICAgICB0aGlzLm9uQ2hlY2tib3hGaWx0ZXJUYWcodGhpcy5hbGxfdGFnW2ldLmlkLGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGFsbF9kZXBhcnRtZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbERlcGFydG1lbnQoZXZlbnQ6YW55KXtcblxuICAgIHRoaXMuc2VydmljZV9pZCA9IG51bGw7XG5cbiAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbF9kZXBhcnRtZW50ID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuYWxsX2RlcGFydG1lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdkZXBhcnRtZW50Jyl7XG4gICAgICAgIHRoaXMub25DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25BdXRvQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZEZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSAtIDEpID09IGkpIHtcbiAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzLnB1c2goLi4udGhpcy5vcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9kdWN0c19maWx0ZXIgPSBfLnVuaXFCeSh0aGlzLnRlbXBfcHJvZHVjdHMsICdpZCcpO1xuICAgIHRoaXMucHJvZHVjdF9sZW5ndGggPSB0aGlzLnByb2R1Y3RzX2ZpbHRlci5sZW5ndGg7XG5cbiAgfVxuXG4gIG9uQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoKHZhbHVlIC0gMSkgPT0gaSkge1xuICAgICAgICAgIHRoaXMudGVtcF9wcm9kdWN0cy5wdXNoKC4uLnRoaXMub3B0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gXy51bmlxQnkodGhpcy50ZW1wX3Byb2R1Y3RzLCAnbmFtZScpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudGVtcF9wcm9kdWN0cyA9IF8uZmlsdGVyKHRoaXMudGVtcF9wcm9kdWN0cywgKHRlbXBfcHJvZHVjdHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGVtcF9wcm9kdWN0cy5vcHRpb25JZCAhPT0gKHZhbHVlIC0gMSlcbiAgICAgIH0pO1xuICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLnRlbXBfcHJvZHVjdHMpKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gdGhpcy5wcm9kdWN0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gXy51bmlxQnkodGhpcy50ZW1wX3Byb2R1Y3RzLCAnbmFtZScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5wcm9kdWN0X2xlbmd0aCA9IHRoaXMucHJvZHVjdHNfZmlsdGVyLmxlbmd0aDtcbiAgfVxuXG4gIGdldFN0eWxlKGNhdGVnb3J5SWQ6bnVtYmVyKXtcbiAgICAgcmV0dXJuICh0aGlzLnNlcnZpY2VfaWQgPT0gY2F0ZWdvcnlJZCkgPyAnI2UxZTFlMScgIDogJyNmNWY1ZjUnO1xuICB9XG5cbiAgZ29Ub1Byb2R1Y3RMaXN0KHByb2R1Y3RJZDogYW55KSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICB9XG5cbiAgZ29Ub1Byb2R1Y3REZXRhaWwocHJvZHVjdElkOm51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgcHJvZHVjdC8ke3Byb2R1Y3RJZH0vZGV0YWlsYF0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
