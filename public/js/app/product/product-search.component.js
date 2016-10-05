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
        this.loading = true;
        this.noResult = false;
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.noResult = false;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.search_keyword = params['q'];
            _this._productService.searchProduct(_this.search_keyword)
                .subscribe(function (product) {
                if (product.data.length > 0) {
                    _this.products = product.data;
                    _this.loading = false;
                    _this.noResult = false;
                }
                else {
                    _this.loading = false;
                    _this.noResult = true;
                }
            });
        });
    };
    ProductSearchComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductSearchComponent.prototype.goToProductDetail = function (productId) {
        this._router.navigate([("product/" + productId + "/detail")]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFHMUQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFLN0U7O0dBRUc7QUFPSDtJQWFJLGdDQUFvQixLQUFxQixFQUNyQixPQUFlLEVBQ2YsZUFBK0I7UUFGL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUxuRCxZQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGFBQVEsR0FBUyxLQUFLLENBQUM7SUFNdkIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNoQixNQUFNO2FBQ04sU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ2xELFNBQVMsQ0FBQyxVQUFDLE9BQVc7Z0JBRXZCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO2dCQUFBLElBQUksQ0FBQSxDQUFDO29CQUNGLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztZQUdMLENBQUMsQ0FBQyxDQUFDO1FBRVgsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFpQixHQUFqQixVQUFrQixTQUFpQjtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQVcsU0FBUyxhQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUEzREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5Q0FBeUM7U0FDekQsQ0FBQzs7OEJBQUE7SUEwREYsNkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLDhCQUFzQix5QkF3RGxDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFRhZ3N9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsXCI7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1wcm9kdWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9kdWN0LXNlYXJjaC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLy8gcHVibGljIHN0YXR1czogT2JqZWN0ID0ge1xuICAgIC8vICAgICBpc0ZpcnN0T3BlbjogdHJ1ZSxcbiAgICAvLyAgICAgaXNGaXJzdERpc2FibGVkOiBmYWxzZSxcbiAgICAvLyAgICAgY2F0ZWdvcnk6IGZhbHNlXG4gICAgLy8gfTtcbiAgICBzZWFyY2hfa2V5d29yZDpzdHJpbmc7XG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJvZHVjdHM6YW55O1xuICAgIGxvYWRpbmc6Ym9vbGVhbiA9IHRydWU7XG4gICAgbm9SZXN1bHQ6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubm9SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX2tleXdvcmQgPSBwYXJhbXNbJ3EnXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5zZWFyY2hQcm9kdWN0KHRoaXMuc2VhcmNoX2tleXdvcmQpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6YW55KT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuZGF0YS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9SZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUHJvZHVjdERldGFpbChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2Bwcm9kdWN0LyR7cHJvZHVjdElkfS9kZXRhaWxgXSk7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
