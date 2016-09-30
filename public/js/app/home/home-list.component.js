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
        this._router.navigate([("/product/" + productId)]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUE2QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBRzdFOztHQUVHO0FBUUg7SUFTRSwyQkFDVSxPQUFjLEVBQ2QsZUFBK0I7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUp6QyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUEwQjNCLGVBQVUsR0FBVSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQXZCNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxFQUFFO0lBQ0YsdUNBQVcsR0FBWDtRQUNHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDckQsVUFBQyxZQUFpQjtZQUNoQixLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDL0MsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBUU0sb0NBQVEsR0FBZjtRQUNFLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZiw4Q0FBOEM7WUFDOUMsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxJQUFJLEVBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsZ0JBQ3RFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHO1NBQ25FLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixTQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBWSxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTlESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOzt5QkFBQTtJQTJERix3QkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFkseUJBQWlCLG9CQXlEN0IsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWxcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgc3ViX3Byb2R1Y3RTZXJpdmNlOiBTdWJzY3JpcHRpb247XG4gIGNhdGVnb3JpZXNUYWckOiBPYnNlcnZhYmxlPGFueT47XG4gIGNhdGVnb3JpZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZFNsaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgIHRoaXMuZ2V0Q2F0ZWdvdGllcygpO1xuICB9XG4gIC8vXG4gIG5nT25EZXN0cm95KCkge1xuICAgICBpZiAodGhpcy5zdWJfcHJvZHVjdFNlcml2Y2UpIHRoaXMuc3ViX3Byb2R1Y3RTZXJpdmNlLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRDYXRlZ290aWVzKCkge1xuICAgIHRoaXMuY2F0ZWdvcmllc1RhZyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpO1xuICAgIHRoaXMuc3ViX3Byb2R1Y3RTZXJpdmNlID0gdGhpcy5jYXRlZ29yaWVzVGFnJC5zdWJzY3JpYmUoXG4gICAgICAocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcztcbiAgICAgIH0sIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IpO1xuICB9XG5cbiAgcHVibGljIG15SW50ZXJ2YWw6bnVtYmVyID0gNTAwMDtcbiAgcHVibGljIG5vV3JhcFNsaWRlczpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzbGlkZXM6QXJyYXk8YW55PiA9IFtdO1xuXG5cblxuICBwdWJsaWMgYWRkU2xpZGUoKTp2b2lkIHtcbiAgICBsZXQgbmV3V2lkdGggPSA2MDAgKyB0aGlzLnNsaWRlcy5sZW5ndGggKyAxO1xuICAgIHRoaXMuc2xpZGVzLnB1c2goe1xuICAgICAgLy8gaW1hZ2U6IGAvL3BsYWNla2l0dGVuLmNvbS8ke25ld1dpZHRofS8zMDBgLFxuICAgICAgaW1hZ2U6IGAvL3BsYWNla2l0dGVuLmNvbS8xMjQwLzMwMGAsXG4gICAgICB0ZXh0OiBgJHtbJ01vcmUnLCAnRXh0cmEnLCAnTG90cyBvZicsICdTdXJwbHVzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19XG4gICAgICAke1snQ2F0cycsICdLaXR0eXMnLCAnRmVsaW5lcycsICdDdXRlcyddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfWBcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVTbGlkZShpbmRleDpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnb1RvUHJvZHVjdExpc3QocHJvZHVjdElkOmFueSkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0LyR7cHJvZHVjdElkfWBdKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
