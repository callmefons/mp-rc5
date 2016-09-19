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
                _this.languagesTag = [];
                _this.departmentsTag = [];
                _this.categoriesTag = [];
                _this.industriesTag = [];
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
        return (this.service_id == categoryId) ? '#f5f5f5' : '#ffffff';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRzFELGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBSzdFOztHQUVHO0FBUUg7SUE0Q0UsOEJBQW9CLEtBQXFCLEVBQ3JCLE9BQWMsRUFDZCxlQUErQjtRQUYvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBNUM1QyxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJELFdBQU0sR0FBVTtZQUNyQixXQUFXLEVBQUUsSUFBSTtZQUNqQixlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDO1FBUUYsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixhQUFRLEdBQWEsSUFBSSxDQUFDO1FBVTFCLGdDQUFnQztRQUNoQyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBRzFCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLG1CQUFjLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBRWxDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLG9CQUFvQjtRQUNwQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBMEZ4QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQW1COUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFvQjlCLGlCQUFZLEdBQVksS0FBSyxD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akQsQ0FBQzs7NEJBQUE7SUFzUUYsMkJBQUM7QUFBRCxDQXBRQSxBQW9RQyxJQUFBO0FBcFFZLDRCQUFvQix1QkFvUWhDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RUYWdzfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0LXRhZy5tb2RlbFwiO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1wcm9kdWN0JyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIG9uZUF0QVRpbWU6Ym9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpdGVtczpBcnJheTxzdHJpbmc+ID0gWydJdGVtIDEnLCAnSXRlbSAyJywgJ0l0ZW0gMyddO1xuXG4gIHB1YmxpYyBzdGF0dXM6T2JqZWN0ID0ge1xuICAgIGlzRmlyc3RPcGVuOiB0cnVlLFxuICAgIGlzRmlyc3REaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdHVzX3R5cGU6c3RyaW5nO1xuICAvL0ZvciB0aXRsZSBwYWdlXG4gIHRpdGxlX2NhdGVnb3J5X25hbWU6c3RyaW5nO1xuXG5cbiAgZXJyb3JNZXNzYWdlOiBhbnk7XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICByZWFkb25seSA6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGFsbF9wcm9kdWN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcm9kdWN0czogYW55W107XG5cbiAgLypBdXRvIEZpbHRlciovXG4gIHNlcnZpY2VfaWQ6IG51bWJlcjtcblxuICAvKnZhcmlhYmxlIGZvciBmaWx0ZXIgZnVuY3Rpb24qL1xuICBvcHRpb25zOiBhbnkgPSBbXTtcbiAgdGVtcF9wcm9kdWN0czogYW55ID0gW107XG4gIHByb2R1Y3RzX2ZpbHRlcjogYW55ID0gW107XG4gIHByb2R1Y3RfbGVuZ3RoOiBudW1iZXI7XG5cbiAgYWxsX3RhZzogYW55W10gPSBbXTtcbiAgbGFuZ3VhZ2VzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gIGRlcGFydG1lbnRzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gIGluZHVzdHJpZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgY2F0ZWdvcmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuXG4gIGNoZWNrZWRGaXJzdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vU2hvdyBDYXRlZ29yeSBMaW5rXG4gIGVuYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGxfcHJvZHVjdCQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgIC5wYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2VydmljZV9pZCA9ICtwYXJhbXNbJ2lkJ107XG5cbiAgICAgICAgICB0aGlzLmFsbF9wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvL1Jlc2V0IGFsbF90YWcgd2hlbiB1c2VyIGNsaWNrIGxpbmsgbmF2YmFyXG4gICAgICAgICAgICB0aGlzLmFsbF90YWcgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudGVtcF9wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gW107XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRGaXJzdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldFByb2R1Y3RUYWdzKCkge1xuXG4gICAgdGhpcy5wcm9kdWN0c19maWx0ZXIgPSB0aGlzLnByb2R1Y3RzO1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHByb2R1Y3RfdGFncyA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlc1RhZyAhPSBbXSAmJiB0aGlzLmRlcGFydG1lbnRzVGFnICE9IFtdICYmIHRoaXMuY2F0ZWdvcmllc1RhZyAhPSBbXSAmJiB0aGlzLmluZHVzdHJpZXNUYWcgIT0gW10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF90YWcucHVzaCguLi50aGlzLmluZHVzdHJpZXNUYWcsIC4uLnRoaXMuY2F0ZWdvcmllc1RhZywgLi4udGhpcy5sYW5ndWFnZXNUYWcsIC4uLnRoaXMuZGVwYXJ0bWVudHNUYWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9DaGVja2JveEZpbHRlclRhZyh0aGlzLnNlcnZpY2VfaWQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy9TZXJ2aWNlIElkIFBsdXMgMSBiZWNhdXNlIHNlcnZpY2VfaWQgc3RhcnQgaW5kZXggYXQgMCBidXQgYWxsdGFnIHN0YXJ0IDFcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsX3RhZ1tpXS5pZCA9PT0gdGhpcy5zZXJ2aWNlX2lkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX3R5cGUgPSB0aGlzLmFsbF90YWdbaV0udHlwZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVfY2F0ZWdvcnlfbmFtZSA9IHRoaXMuYWxsX3RhZ1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICB9XG5cbiAgc2V0RmlsdGVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxfdGFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucHJvZHVjdHNbal0udGFnLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbal0udGFnW2tdID09IHRoaXMuYWxsX3RhZ1tpXS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0ucHVzaCh7XG4gICAgICAgICAgICAgIG9wdGlvbklkOiBpLFxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9kdWN0c1tqXS5pZCxcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0c1tqXS5uYW1lLFxuICAgICAgICAgICAgICBzaG9ydGRlc2NyaXB0aW9uOiB0aGlzLnByb2R1Y3RzW2pdLnNob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvZ286IHRoaXMucHJvZHVjdHNbal0ubG9nb1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsX2luZHVzdHJ5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbEluZHVzdHJ5KGV2ZW50OmFueSl7XG5cbiAgICB0aGlzLnNlcnZpY2VfaWQgPSBudWxsO1xuXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpe1xuICAgICAgdGhpcy5hbGxfaW5kdXN0cnkgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5hbGxfaW5kdXN0cnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdpbmR1c3RyeScpe1xuICAgICAgICB0aGlzLm9uQ2hlY2tib3hGaWx0ZXJUYWcodGhpcy5hbGxfdGFnW2ldLmlkLGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBhbGxfY2F0ZWdvcnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkNoZWNrQWxsQ2F0ZWdvcnkoZXZlbnQ6YW55KXtcblxuICAgIHRoaXMuc2VydmljZV9pZCA9IG51bGw7XG5cbiAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbF9jYXRlZ29yeSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmFsbF9jYXRlZ29yeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLmFsbF90YWdbaV0udHlwZSA9PT0gJ2NhdGVnb3J5Jyl7XG4gICAgICAgIHRoaXMub25DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgYWxsX2xhbmd1YWdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbExhbmd1YWdlKGV2ZW50OmFueSl7XG5cbiAgICB0aGlzLnNlcnZpY2VfaWQgPSBudWxsO1xuXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpe1xuICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdsYW5ndWFnZScpe1xuICAgICAgICB0aGlzLm9uQ2hlY2tib3hGaWx0ZXJUYWcodGhpcy5hbGxfdGFnW2ldLmlkLGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGFsbF9kZXBhcnRtZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVja0FsbERlcGFydG1lbnQoZXZlbnQ6YW55KXtcblxuICAgIHRoaXMuc2VydmljZV9pZCA9IG51bGw7XG5cbiAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbF9kZXBhcnRtZW50ID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuYWxsX2RlcGFydG1lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmFsbF90YWcubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdkZXBhcnRtZW50Jyl7XG4gICAgICAgIHRoaXMub25DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25BdXRvQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZEZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSAtIDEpID09IGkpIHtcbiAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzLnB1c2goLi4udGhpcy5vcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9kdWN0c19maWx0ZXIgPSBfLnVuaXFCeSh0aGlzLnRlbXBfcHJvZHVjdHMsICdpZCcpO1xuICAgIHRoaXMucHJvZHVjdF9sZW5ndGggPSB0aGlzLnByb2R1Y3RzX2ZpbHRlci5sZW5ndGg7XG5cbiAgfVxuXG4gIG9uQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoKHZhbHVlIC0gMSkgPT0gaSkge1xuICAgICAgICAgIHRoaXMudGVtcF9wcm9kdWN0cy5wdXNoKC4uLnRoaXMub3B0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gXy51bmlxQnkodGhpcy50ZW1wX3Byb2R1Y3RzLCAnbmFtZScpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudGVtcF9wcm9kdWN0cyA9IF8uZmlsdGVyKHRoaXMudGVtcF9wcm9kdWN0cywgKHRlbXBfcHJvZHVjdHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGVtcF9wcm9kdWN0cy5vcHRpb25JZCAhPT0gKHZhbHVlIC0gMSlcbiAgICAgIH0pO1xuICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLnRlbXBfcHJvZHVjdHMpKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gdGhpcy5wcm9kdWN0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gXy51bmlxQnkodGhpcy50ZW1wX3Byb2R1Y3RzLCAnbmFtZScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5wcm9kdWN0X2xlbmd0aCA9IHRoaXMucHJvZHVjdHNfZmlsdGVyLmxlbmd0aDtcbiAgfVxuXG4gIGdldFN0eWxlKGNhdGVnb3J5SWQ6bnVtYmVyKXtcbiAgICAgcmV0dXJuICh0aGlzLnNlcnZpY2VfaWQgPT0gY2F0ZWdvcnlJZCkgPyAnI2Y1ZjVmNScgIDogJyNmZmZmZmYnO1xuICB9XG5cbiAgZ29Ub1Byb2R1Y3RMaXN0KHByb2R1Y3RJZDogYW55KSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICB9XG5cbiAgZ29Ub1Byb2R1Y3REZXRhaWwocHJvZHVjdElkOm51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgcHJvZHVjdC8ke3Byb2R1Y3RJZH0vZGV0YWlsYF0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
