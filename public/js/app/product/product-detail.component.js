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
var auth_service_1 = require("../shared/api-service/auth/auth.service");
var review_service_1 = require("../shared/api-service/review.service");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, _reviewService, _router, _authService, _productService) {
        this.route = route;
        this._reviewService = _reviewService;
        this._router = _router;
        this._authService = _authService;
        this._productService = _productService;
        this.loading = true;
        this.products = [];
        this.apps = [];
        this.languagesTag = [];
        this.categoriesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.features = [];
        this.screenshots = [];
        this.reviews = [];
        this.trustedUrl = [];
        /*Set thumbnail and Screenshot*/
        this.thumbnail = [];
        this.count = 0;
        this.max = 4;
        this.index = 0;
        this.selected = '';
        //Developer
        this.developer_organization = [];
        this.lang = 'en';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.onRefresh();
    };
    ProductDetailComponent.prototype.SwitthischLang = function (lang) {
        this.lang = lang;
        this.onRefresh();
    };
    ProductDetailComponent.prototype.onRefresh = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = parseInt(_this.route.snapshot.params['id']);
            _this._productService.getProductId(id).subscribe(function (products) {
                //console.log(products);
                _this.products = products.data[_this.lang];
                _this.apps = products.data[_this.lang];
                for (var i = 0; i < _this.products.languages.length; i++) {
                    _this.languagesTag.push(_this.products.languages[i]);
                }
                for (var i = 0; i < _this.products.departments.length; i++) {
                    _this.departmentsTag.push(_this.products.departments[i]);
                }
                for (var i = 0; i < _this.products.categories.length; i++) {
                    _this.categoriesTag.push(_this.products.categories[i]);
                }
                for (var i = 0; i < _this.products.industries.length; i++) {
                    _this.industriesTag.push(_this.products.industries[i]);
                }
                for (var i = 0; i < _this.products.features.length; i++) {
                    _this.features.push(_this.products.features[i]);
                }
                for (var i = 0; i < _this.products.screenshots.length; i++) {
                    _this.screenshots.push(_this.products.screenshots[i]);
                }
                _this.setThumbnail();
                _this.selected = _this.screenshots[0].url;
                _this.loading = false;
            });
            _this.getReview(id);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.onSelect = function (_screenshot, i, j) {
        this.selected = _screenshot;
        if (i != 0) {
            this.index = ((j + 1) + (4 * i) - 1);
        }
        else {
            this.index = j;
        }
    };
    ProductDetailComponent.prototype.onControl = function (condition) {
        if (condition == 'plus') {
            if (this.index < this.screenshots.length - 1) {
                this.index++;
            }
            else {
                this.index = 0;
            }
        }
        else {
            if (this.index != 0) {
                this.index--;
            }
            else {
                this.index = this.screenshots.length - 1;
            }
        }
        this.selected = this.screenshots[this.index].url;
    };
    ProductDetailComponent.prototype.setThumbnail = function () {
        for (var i = 0; i < Math.ceil((this.screenshots.length / 4)); i++) {
            this.thumbnail[i] = [];
            for (var j = 0; j < 4; j++) {
                if (this.count < this.screenshots.length) {
                    this.thumbnail[i][j] = this.screenshots[this.count].url;
                    this.count++;
                }
            }
        }
    };
    ProductDetailComponent.prototype.getReview = function (id) {
        var _this = this;
        if (this._authService.isLoggedIn() == true) {
            this._reviewService.getReviewById(id)
                .subscribe(function (reviews) {
                for (var i = 0; i < reviews.data.length; i++) {
                    _this.reviews.push(reviews.data[i]);
                }
            });
        }
        else {
            this._reviewService.getReviewById(id)
                .subscribe(function (reviews) {
                _this.reviews.push(reviews.data[0]);
            });
        }
    };
    ProductDetailComponent.prototype.goToRegister = function () {
        this._router.navigate(["auth/register"]);
    };
    //Output form review directive
    ProductDetailComponent.prototype.onSuccess = function (results) {
        if (results == 'success') {
            this.ngOnInit();
        }
    };
    ProductDetailComponent.prototype.visitWebsite = function (name) {
        ClickyLog(name);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-product-detail',
            templateUrl: 'templates/product-detail.component.html',
            styleUrls: ['styles/product-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, review_service_1.ReviewService, router_1.Router, auth_service_1.AuthService, product_service_1.ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFFN0UsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFDcEUsK0JBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFHbkU7O0dBRUc7QUFRSDtJQStCRSxnQ0FBb0IsS0FBcUIsRUFDckIsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFqQ25ELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFFekIsZ0NBQWdDO1FBQ2hDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixX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LDhCQUE4QjtJQUM5QiwwQ0FBUyxHQUFULFVBQVUsT0FBWTtRQUNwQixFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFHRCw2Q0FBWSxHQUFaLFVBQWEsSUFBUztRQUNwQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQTFMSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ25ELENBQUM7OzhCQUFBO0lBc0xGLDZCQUFDO0FBQUQsQ0FwTEEsQUFvTEMsSUFBQTtBQXBMWSw4QkFBc0IseUJBb0xsQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NhZmVSZXNvdXJjZVVybCwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jldmlld1NlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcmV2aWV3LnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgQ2xpY2t5TG9nOiBGdW5jdGlvbjtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1wcm9kdWN0LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJvZHVjdHM6IGFueSA9IFtdO1xuICBhcHBzOiBhbnkgPSBbXTtcbiAgbGFuZ3VhZ2VzVGFnOiBhbnkgPSBbXTtcblxuICBjYXRlZ29yaWVzVGFnOiBhbnkgPSBbXTtcbiAgZGVwYXJ0bWVudHNUYWc6IGFueSA9IFtdO1xuICBpbmR1c3RyaWVzVGFnOiBhbnkgPSBbXTtcblxuXG4gIGZlYXR1cmVzOiBhbnkgPSBbXTtcbiAgc2NyZWVuc2hvdHM6IGFueSA9IFtdO1xuXG4gIHJldmlld3M6IGFueSA9IFtdO1xuICB0cnVzdGVkVXJsOiBTYWZlVXJsID0gW107XG5cbiAgLypTZXQgdGh1bWJuYWlsIGFuZCBTY3JlZW5zaG90Ki9cbiAgdGh1bWJuYWlsOiBhbnkgPSBbXTtcbiAgY291bnQ6IG51bWJlciA9IDA7XG4gIG1heDogbnVtYmVyID0gNDtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG4gIHNlbGVjdGVkOiBhbnkgPSAnJztcblxuICAvL0RldmVsb3BlclxuICBkZXZlbG9wZXJfb3JnYW5pemF0aW9uOiBhbnkgPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZXZpZXdTZXJ2aWNlOiBSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgbGFuZzogc3RyaW5nID0gJ2VuJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uUmVmcmVzaCgpO1xuICB9XG5cbiAgU3dpdHRoaXNjaExhbmcobGFuZzogc3RyaW5nKXtcbiAgICB0aGlzLmxhbmcgPSBsYW5nO1xuICAgIHRoaXMub25SZWZyZXNoKCk7XG4gIH1cblxuICBvblJlZnJlc2goKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ10pO1xuXG4gICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKGlkKS5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9kdWN0cyk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHMuZGF0YVt0aGlzLmxhbmddO1xuICAgICAgICAgICAgdGhpcy5hcHBzID0gcHJvZHVjdHMuZGF0YVt0aGlzLmxhbmddO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5sYW5ndWFnZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmRlcGFydG1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmRlcGFydG1lbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZy5wdXNoKHRoaXMucHJvZHVjdHMuY2F0ZWdvcmllc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuaW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmluZHVzdHJpZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKHRoaXMucHJvZHVjdHMuZmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5zY3JlZW5zaG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLnNjcmVlbnNob3RzLnB1c2godGhpcy5wcm9kdWN0cy5zY3JlZW5zaG90c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFRodW1ibmFpbCgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2NyZWVuc2hvdHNbMF0udXJsO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIHRoaXMuZ2V0UmV2aWV3KGlkKTtcblxuICAgICAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG4gIG9uU2VsZWN0KF9zY3JlZW5zaG90OiBzdHJpbmcsIGk6IG51bWJlciwgajogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IF9zY3JlZW5zaG90O1xuXG4gICAgaWYgKGkgIT0gMCkge1xuICAgICAgdGhpcy5pbmRleCA9ICgoaiArIDEpICsgKDQgKiBpKSAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV4ID0gajtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRyb2woY29uZGl0aW9uOiBzdHJpbmcpIHtcblxuICAgIGlmIChjb25kaXRpb24gPT0gJ3BsdXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2NyZWVuc2hvdHNbdGhpcy5pbmRleF0udXJsO1xuICB9XG5cblxuICBzZXRUaHVtYm5haWwoKSB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IE1hdGguY2VpbCgodGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLyA0KSk7IGkrKykge1xuXG4gICAgICB0aGlzLnRodW1ibmFpbFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50IDwgdGhpcy5zY3JlZW5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRodW1ibmFpbFtpXVtqXSA9IHRoaXMuc2NyZWVuc2hvdHNbdGhpcy5jb3VudF0udXJsO1xuICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2V0UmV2aWV3KGlkOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fcmV2aWV3U2VydmljZS5nZXRSZXZpZXdCeUlkKGlkKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXZpZXdzOiBhbnkpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld3MuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXZpZXdzLnB1c2gocmV2aWV3cy5kYXRhW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXZpZXdTZXJ2aWNlLmdldFJldmlld0J5SWQoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJldmlld3M6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMucmV2aWV3cy5wdXNoKHJldmlld3MuZGF0YVswXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdvVG9SZWdpc3RlcigpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BhdXRoL3JlZ2lzdGVyYF0pO1xuICB9XG5cbiAgLy9PdXRwdXQgZm9ybSByZXZpZXcgZGlyZWN0aXZlXG4gIG9uU3VjY2VzcyhyZXN1bHRzOiBhbnkpIHtcbiAgICBpZihyZXN1bHRzID09ICdzdWNjZXNzJyl7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICB9XG5cblxuICB2aXNpdFdlYnNpdGUobmFtZTogYW55KXtcbiAgICBDbGlja3lMb2cobmFtZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
