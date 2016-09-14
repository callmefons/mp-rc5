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
/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeListComponent = (function () {
    function HomeListComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.categoriesTag = [];
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeListComponent.prototype.ngOnInit = function () {
        this.getCategoties();
    };
    //
    HomeListComponent.prototype.ngOnDestroy = function () {
        if (this.sub_productSerivce)
            this.sub_productSerivce.unsubscribe();
    };
    HomeListComponent.prototype.getCategoties = function () {
        var _this = this;
        this.categoriesTag$ = this._productService.getProductTags();
        this.sub_productSerivce = this.categoriesTag$.subscribe(function (product_tags) {
            _this.categoriesTag = product_tags.categories;
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeListComponent.prototype.addSlide = function () {
        var newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            // image: `//placekitten.com/${newWidth}/300`,
            image: "//placekitten.com/1240/300",
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n      " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    HomeListComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    HomeListComponent.prototype.goToProductList = function (productId) {
        this._router.navigate([("/product/" + (productId - 1))]);
    };
    HomeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home-list',
            templateUrl: 'home-list.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], HomeListComponent);
    return HomeListComponent;
}());
exports.HomeListComponent = HomeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBRzdFOztHQUVHO0FBUUg7SUFTRSwyQkFDVSxPQUFjLEVBQ2QsZUFBK0I7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUp6QyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUEwQjNCLGVBQVUsR0FBVSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQXZCNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxFQUFFO0lBQ0YsdUNBQVcsR0FBWDtRQUNHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDckQsVUFBQyxZQUFpQjtZQUNoQixLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDL0MsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBUU0sb0NBQVEsR0FBZjtRQUNFLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZiw4Q0FBOEM7WUFDOUMsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxJQUFJLEVBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsZ0JBQ3RFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHO1NBQ25FLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixTQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQVksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBOURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7O3lCQUFBO0lBMkRGLHdCQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQXpEWSx5QkFBaUIsb0JBeUQ3QixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RUYWdzfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0LXRhZy5tb2RlbFwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICBzdWJfcHJvZHVjdFNlcml2Y2U6IFN1YnNjcmlwdGlvbjtcbiAgY2F0ZWdvcmllc1RhZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgY2F0ZWdvcmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHRoaXMuYWRkU2xpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgdGhpcy5nZXRDYXRlZ290aWVzKCk7XG4gIH1cbiAgLy9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgIGlmICh0aGlzLnN1Yl9wcm9kdWN0U2VyaXZjZSkgdGhpcy5zdWJfcHJvZHVjdFNlcml2Y2UudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldENhdGVnb3RpZXMoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzVGFnJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgdGhpcy5zdWJfcHJvZHVjdFNlcml2Y2UgPSB0aGlzLmNhdGVnb3JpZXNUYWckLnN1YnNjcmliZShcbiAgICAgIChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgfSwgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcik7XG4gIH1cblxuICBwdWJsaWMgbXlJbnRlcnZhbDpudW1iZXIgPSA1MDAwO1xuICBwdWJsaWMgbm9XcmFwU2xpZGVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNsaWRlczpBcnJheTxhbnk+ID0gW107XG5cblxuXG4gIHB1YmxpYyBhZGRTbGlkZSgpOnZvaWQge1xuICAgIGxldCBuZXdXaWR0aCA9IDYwMCArIHRoaXMuc2xpZGVzLmxlbmd0aCArIDE7XG4gICAgdGhpcy5zbGlkZXMucHVzaCh7XG4gICAgICAvLyBpbWFnZTogYC8vcGxhY2VraXR0ZW4uY29tLyR7bmV3V2lkdGh9LzMwMGAsXG4gICAgICBpbWFnZTogYC8vcGxhY2VraXR0ZW4uY29tLzEyNDAvMzAwYCxcbiAgICAgIHRleHQ6IGAke1snTW9yZScsICdFeHRyYScsICdMb3RzIG9mJywgJ1N1cnBsdXMnXVt0aGlzLnNsaWRlcy5sZW5ndGggJSA0XX1cbiAgICAgICR7WydDYXRzJywgJ0tpdHR5cycsICdGZWxpbmVzJywgJ0N1dGVzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19YFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNsaWRlKGluZGV4Om51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zbGlkZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdvVG9Qcm9kdWN0TGlzdChwcm9kdWN0SWQ6YW55KSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvJHtwcm9kdWN0SWQgLSAxfWBdKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
