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
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = parseInt(_this.route.snapshot.params['id']);
            _this._productService.getProductId(id).subscribe(function (products) {
                _this.products = products;
                _this.apps = products.data;
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
                for (var i = 0; i < _this.products.data.features.length; i++) {
                    _this.features.push(_this.products.data.features[i]);
                }
                for (var i = 0; i < _this.products.data.screenshots.length; i++) {
                    _this.screenshots.push(_this.products.data.screenshots[i]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFFN0UsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFDcEUsK0JBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFHbkU7O0dBRUc7QUFRSDtJQStCRSxnQ0FBb0IsS0FBcUIsRUFDckIsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFqQ25ELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFFekIsZ0NBQWdDO1FBQ2hDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixX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QUFDO0FBQUQsQ0FoS0EsQUFnS0MsSUFBQTtBQWhLWSw4QkFBc0IseUJBZ0tsQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NhZmVSZXNvdXJjZVVybCwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jldmlld1NlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcmV2aWV3LnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgQ2xpY2t5TG9nOiBGdW5jdGlvbjtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1wcm9kdWN0LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJvZHVjdHM6IGFueSA9IFtdO1xuICBhcHBzOiBhbnkgPSBbXTtcbiAgbGFuZ3VhZ2VzVGFnOiBhbnkgPSBbXTtcblxuICBjYXRlZ29yaWVzVGFnOiBhbnkgPSBbXTtcbiAgZGVwYXJ0bWVudHNUYWc6IGFueSA9IFtdO1xuICBpbmR1c3RyaWVzVGFnOiBhbnkgPSBbXTtcblxuXG4gIGZlYXR1cmVzOiBhbnkgPSBbXTtcbiAgc2NyZWVuc2hvdHM6IGFueSA9IFtdO1xuXG4gIHJldmlld3M6IGFueSA9IFtdO1xuICB0cnVzdGVkVXJsOiBTYWZlVXJsID0gW107XG5cbiAgLypTZXQgdGh1bWJuYWlsIGFuZCBTY3JlZW5zaG90Ki9cbiAgdGh1bWJuYWlsOiBhbnkgPSBbXTtcbiAgY291bnQ6IG51bWJlciA9IDA7XG4gIG1heDogbnVtYmVyID0gNDtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG4gIHNlbGVjdGVkOiBhbnkgPSAnJztcblxuICAvL0RldmVsb3BlclxuICBkZXZlbG9wZXJfb3JnYW5pemF0aW9uOiBhbnkgPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZXZpZXdTZXJ2aWNlOiBSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddKTtcblxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0SWQoaWQpLnN1YnNjcmliZSgocHJvZHVjdHM6IGFueSk9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgICAgIHRoaXMuYXBwcyA9IHByb2R1Y3RzLmRhdGE7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZy5wdXNoKHRoaXMucHJvZHVjdHMubGFuZ3VhZ2VzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmRlcGFydG1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5kZXBhcnRtZW50c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmNhdGVnb3JpZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuaW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5pbmR1c3RyaWVzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuZGF0YS5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKHRoaXMucHJvZHVjdHMuZGF0YS5mZWF0dXJlc1tpXSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuZGF0YS5zY3JlZW5zaG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5zaG90cy5wdXNoKHRoaXMucHJvZHVjdHMuZGF0YS5zY3JlZW5zaG90c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0VGh1bWJuYWlsKCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2NyZWVuc2hvdHNbMF0udXJsO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZ2V0UmV2aWV3KGlkKTtcblxuICAgICAgfSk7XG4gIH1cblxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cblxuICBvblNlbGVjdChfc2NyZWVuc2hvdDogc3RyaW5nLCBpOiBudW1iZXIsIGo6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBfc2NyZWVuc2hvdDtcblxuICAgIGlmIChpICE9IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSAoKGogKyAxKSArICg0ICogaSkgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleCA9IGo7XG4gICAgfVxuICB9XG5cbiAgb25Db250cm9sKGNvbmRpdGlvbjogc3RyaW5nKSB7XG5cbiAgICBpZiAoY29uZGl0aW9uID09ICdwbHVzJykge1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4ICE9IDApIHtcbiAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNjcmVlbnNob3RzW3RoaXMuaW5kZXhdLnVybDtcbiAgfVxuXG5cbiAgc2V0VGh1bWJuYWlsKCkge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC8gNCkpOyBpKyspIHtcblxuICAgICAgdGhpcy50aHVtYm5haWxbaV0gPSBbXTtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAodGhpcy5jb3VudCA8IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy50aHVtYm5haWxbaV1bal0gPSB0aGlzLnNjcmVlbnNob3RzW3RoaXMuY291bnRdLnVybDtcbiAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFJldmlldyhpZDogYW55KSB7XG5cbiAgICBpZiAodGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpID09IHRydWUpIHtcbiAgICAgIHRoaXMuX3Jldmlld1NlcnZpY2UuZ2V0UmV2aWV3QnlJZChpZClcbiAgICAgICAgLnN1YnNjcmliZSgocmV2aWV3czogYW55KSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmV2aWV3cy5wdXNoKHJldmlld3MuZGF0YVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmV2aWV3U2VydmljZS5nZXRSZXZpZXdCeUlkKGlkKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXZpZXdzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnJldmlld3MucHVzaChyZXZpZXdzLmRhdGFbMF0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9yZWdpc3RlcmBdKTtcbiAgfVxuXG4gIHZpc2l0V2Vic2l0ZShuYW1lOiBzdHJpbmcpe1xuICAgIENsaWNreUxvZyhuYW1lKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
