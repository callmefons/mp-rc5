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
    ProductListComponent.prototype.onAutoCheckboxFilterTag = function (value) {
        this.checkedFirst = true;
        for (var i = 0; i < this.options.length; i++) {
            if (value == i) {
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
                if (value == i) {
                    (_a = this.temp_products).push.apply(_a, this.options[i]);
                }
            }
            this.products_filter = _.uniqBy(this.temp_products, 'name');
        }
        if (event.currentTarget.checked == false) {
            this.temp_products = _.filter(this.temp_products, function (temp_products) {
                return temp_products.optionId !== value;
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
    ProductListComponent.prototype.goToProductDetail = function (productId) {
        this._router.navigate([("product/" + productId + "/detail")]);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-product',
            templateUrl: 'templates/product-list.component.html',
            styleUrls: ['styles/product-list.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRzFELGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBSzdFOztHQUVHO0FBUUg7SUErQkUsOEJBQW9CLEtBQXFCLEVBQ3JCLE9BQWMsRUFDZCxlQUErQjtRQUYvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBOUJuRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBYSxJQUFJLENBQUM7UUFVMUIsZ0NBQWdDO1FBQ2hDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFHMUIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFFbEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsb0JBQW9CO1FBQ3BCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFNeEIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDbEIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFD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QUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O0lBQ3BELENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsU0FBZ0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFXLFNBQVMsYUFBUyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBMUpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2pELENBQUM7OzRCQUFBO0lBdUpGLDJCQUFDO0FBQUQsQ0FySkEsQUFxSkMsSUFBQTtBQXJKWSw0QkFBb0IsdUJBcUpoQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWxcIjtcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtcHJvZHVjdCcsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBlcnJvck1lc3NhZ2U6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHJlYWRvbmx5IDogYm9vbGVhbiA9IHRydWU7XG5cbiAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgYWxsX3Byb2R1Y3QkOiBPYnNlcnZhYmxlPGFueT47XG4gIHByb2R1Y3RzOiBhbnlbXTtcblxuICAvKkF1dG8gRmlsdGVyKi9cbiAgc2VydmljZV9pZDogbnVtYmVyO1xuXG4gIC8qdmFyaWFibGUgZm9yIGZpbHRlciBmdW5jdGlvbiovXG4gIG9wdGlvbnM6IGFueSA9IFtdO1xuICB0ZW1wX3Byb2R1Y3RzOiBhbnkgPSBbXTtcbiAgcHJvZHVjdHNfZmlsdGVyOiBhbnkgPSBbXTtcbiAgcHJvZHVjdF9sZW5ndGg6IG51bWJlcjtcblxuICBhbGxfdGFnOiBhbnlbXSA9IFtdO1xuICBsYW5ndWFnZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgZGVwYXJ0bWVudHNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuICBjYXRlZ29yaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG5cbiAgY2hlY2tlZEZpcnN0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9TaG93IENhdGVnb3J5IExpbmtcbiAgZW5hYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsbF9wcm9kdWN0JCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgIC5wYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlX2lkID0gK3BhcmFtc1snaWQnXTtcblxuICAgICAgICB0aGlzLmFsbF9wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAvL1Jlc2V0IGFsbF90YWcgd2hlbiB1c2VyIGNsaWNrIGxpbmsgbmF2YmFyXG4gICAgICAgICAgdGhpcy5hbGxfdGFnID0gW107XG4gICAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzID0gW107XG4gICAgICAgICAgdGhpcy5jaGVja2VkRmlyc3QgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cblxuICBnZXRQcm9kdWN0VGFncygpIHtcblxuICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gdGhpcy5wcm9kdWN0cztcbiAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBwcm9kdWN0X3RhZ3MgPT4ge1xuICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuXG4gICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzVGFnICE9IFtdICYmIHRoaXMuZGVwYXJ0bWVudHNUYWcgIT0gW10gJiYgdGhpcy5jYXRlZ29yaWVzVGFnICE9IFtdICYmIHRoaXMuaW5kdXN0cmllc1RhZyAhPSBbXSkge1xuICAgICAgICAgICAgdGhpcy5hbGxfdGFnLnB1c2goLi4udGhpcy5pbmR1c3RyaWVzVGFnLCAuLi50aGlzLmNhdGVnb3JpZXNUYWcsIC4uLnRoaXMubGFuZ3VhZ2VzVGFnLCAuLi50aGlzLmRlcGFydG1lbnRzVGFnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXV0b0NoZWNrYm94RmlsdGVyVGFnKHRoaXMuc2VydmljZV9pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pLFxuICAgICAgKGVycm9yOiBhbnkpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICB9XG5cbiAgc2V0RmlsdGVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxfdGFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucHJvZHVjdHNbal0udGFnLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbal0udGFnW2tdID09IHRoaXMuYWxsX3RhZ1tpXS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0ucHVzaCh7XG4gICAgICAgICAgICAgIG9wdGlvbklkOiBpLFxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9kdWN0c1tqXS5pZCxcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0c1tqXS5uYW1lLFxuICAgICAgICAgICAgICBzaG9ydGRlc2NyaXB0aW9uOiB0aGlzLnByb2R1Y3RzW2pdLnNob3J0ZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvZ286IHRoaXMucHJvZHVjdHNbal0ubG9nb1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25BdXRvQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZEZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlID09IGkpIHtcbiAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzLnB1c2goLi4udGhpcy5vcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9kdWN0c19maWx0ZXIgPSBfLnVuaXFCeSh0aGlzLnRlbXBfcHJvZHVjdHMsICdpZCcpO1xuICAgIHRoaXMucHJvZHVjdF9sZW5ndGggPSB0aGlzLnByb2R1Y3RzX2ZpbHRlci5sZW5ndGg7XG4gIH1cblxuICBvbkNoZWNrYm94RmlsdGVyVGFnKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlID09IGkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBfcHJvZHVjdHMucHVzaCguLi50aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnByb2R1Y3RzX2ZpbHRlciA9IF8udW5pcUJ5KHRoaXMudGVtcF9wcm9kdWN0cywgJ25hbWUnKTtcblxuICAgIH1cblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudGVtcF9wcm9kdWN0cyA9IF8uZmlsdGVyKHRoaXMudGVtcF9wcm9kdWN0cywgKHRlbXBfcHJvZHVjdHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGVtcF9wcm9kdWN0cy5vcHRpb25JZCAhPT0gdmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLnRlbXBfcHJvZHVjdHMpKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gdGhpcy5wcm9kdWN0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gXy51bmlxQnkodGhpcy50ZW1wX3Byb2R1Y3RzLCAnbmFtZScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5wcm9kdWN0X2xlbmd0aCA9IHRoaXMucHJvZHVjdHNfZmlsdGVyLmxlbmd0aDtcbiAgfVxuXG4gIGdvVG9Qcm9kdWN0RGV0YWlsKHByb2R1Y3RJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHByb2R1Y3QvJHtwcm9kdWN0SWR9L2RldGFpbGBdKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
