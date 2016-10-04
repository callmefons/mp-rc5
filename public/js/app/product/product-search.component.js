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
var ProductSearchComponent = (function () {
    function ProductSearchComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var name = params['q'];
            _this._productService.searchProduct(name)
                .subscribe(function (res) {
                console.log(res);
            });
            // console.log(name);
        });
    };
    ProductSearchComponent.prototype.ngOnDestroy = function () {
        // if (this.sub) {
        //     this.sub.unsubscribe();
        // }
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-product',
            templateUrl: 'templates/product-search.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFHMUQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFLN0U7O0dBRUc7QUFPSDtJQVFJLGdDQUFvQixLQUFxQixFQUNyQixPQUFlLEVBQ2YsZUFBK0I7UUFGL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUVuRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNoQixNQUFNO2FBQ04sU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7aUJBQ25DLFNBQVMsQ0FBQyxVQUFDLEdBQU87Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztZQUVQLHFCQUFxQjtRQUV6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJO0lBQ1IsQ0FBQztJQXZDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlDQUF5QztTQUN6RCxDQUFDOzs4QkFBQTtJQXNDRiw2QkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksOEJBQXNCLHlCQW9DbEMsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3Qtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWxcIjtcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Byb2R1Y3Qtc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyBwdWJsaWMgc3RhdHVzOiBPYmplY3QgPSB7XG4gICAgLy8gICAgIGlzRmlyc3RPcGVuOiB0cnVlLFxuICAgIC8vICAgICBpc0ZpcnN0RGlzYWJsZWQ6IGZhbHNlLFxuICAgIC8vICAgICBjYXRlZ29yeTogZmFsc2VcbiAgICAvLyB9O1xuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gcGFyYW1zWydxJ107XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2Uuc2VhcmNoUHJvZHVjdChuYW1lKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAvLyAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
