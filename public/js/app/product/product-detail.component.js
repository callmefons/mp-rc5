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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFFN0UsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFDcEUsK0JBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFHbkU7O0dBRUc7QUFRSDtJQStCRSxnQ0FBb0IsS0FBcUIsRUFDckIsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFqQ25ELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFFekIsZ0NBQWdDO1FBQ2hDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixX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UyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNuRCxDQUFDOzs4QkFBQTtJQTBLRiw2QkFBQztBQUFELENBeEtBLEFBd0tDLElBQUE7QUF4S1ksOEJBQXNCLHlCQXdLbEMsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSZXZpZXdTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Jldmlldy5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIENsaWNreUxvZzogRnVuY3Rpb247XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtcHJvZHVjdC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByb2R1Y3RzOiBhbnkgPSBbXTtcbiAgYXBwczogYW55ID0gW107XG4gIGxhbmd1YWdlc1RhZzogYW55ID0gW107XG5cbiAgY2F0ZWdvcmllc1RhZzogYW55ID0gW107XG4gIGRlcGFydG1lbnRzVGFnOiBhbnkgPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogYW55ID0gW107XG5cblxuICBmZWF0dXJlczogYW55ID0gW107XG4gIHNjcmVlbnNob3RzOiBhbnkgPSBbXTtcblxuICByZXZpZXdzOiBhbnkgPSBbXTtcbiAgdHJ1c3RlZFVybDogU2FmZVVybCA9IFtdO1xuXG4gIC8qU2V0IHRodW1ibmFpbCBhbmQgU2NyZWVuc2hvdCovXG4gIHRodW1ibmFpbDogYW55ID0gW107XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBtYXg6IG51bWJlciA9IDQ7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBzZWxlY3RlZDogYW55ID0gJyc7XG5cbiAgLy9EZXZlbG9wZXJcbiAgZGV2ZWxvcGVyX29yZ2FuaXphdGlvbjogYW55ID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmV2aWV3U2VydmljZTogUmV2aWV3U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXSk7XG5cbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKGlkKS5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgICB0aGlzLmFwcHMgPSBwcm9kdWN0cy5kYXRhO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmxhbmd1YWdlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5kZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZy5wdXNoKHRoaXMucHJvZHVjdHMuZGVwYXJ0bWVudHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5jYXRlZ29yaWVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmluZHVzdHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZy5wdXNoKHRoaXMucHJvZHVjdHMuaW5kdXN0cmllc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaCh0aGlzLnByb2R1Y3RzLmRhdGEuZmVhdHVyZXNbaV0pO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmRhdGEuc2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHMucHVzaCh0aGlzLnByb2R1Y3RzLmRhdGEuc2NyZWVuc2hvdHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFRodW1ibmFpbCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNjcmVlbnNob3RzWzBdLnVybDtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmdldFJldmlldyhpZCk7XG5cbiAgICAgIH0pO1xuICB9XG5cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgb25TZWxlY3QoX3NjcmVlbnNob3Q6IHN0cmluZywgaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gX3NjcmVlbnNob3Q7XG5cbiAgICBpZiAoaSAhPSAwKSB7XG4gICAgICB0aGlzLmluZGV4ID0gKChqICsgMSkgKyAoNCAqIGkpIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXggPSBqO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udHJvbChjb25kaXRpb246IHN0cmluZykge1xuXG4gICAgaWYgKGNvbmRpdGlvbiA9PSAncGx1cycpIHtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAodGhpcy5pbmRleCAhPSAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zY3JlZW5zaG90c1t0aGlzLmluZGV4XS51cmw7XG4gIH1cblxuXG4gIHNldFRodW1ibmFpbCgpIHtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgTWF0aC5jZWlsKCh0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCAvIDQpKTsgaSsrKSB7XG5cbiAgICAgIHRoaXMudGh1bWJuYWlsW2ldID0gW107XG5cbiAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPCB0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudGh1bWJuYWlsW2ldW2pdID0gdGhpcy5zY3JlZW5zaG90c1t0aGlzLmNvdW50XS51cmw7XG4gICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRSZXZpZXcoaWQ6IGFueSkge1xuXG4gICAgaWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLl9yZXZpZXdTZXJ2aWNlLmdldFJldmlld0J5SWQoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJldmlld3M6IGFueSkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3cy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJldmlld3MucHVzaChyZXZpZXdzLmRhdGFbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jldmlld1NlcnZpY2UuZ2V0UmV2aWV3QnlJZChpZClcbiAgICAgICAgLnN1YnNjcmliZSgocmV2aWV3czogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXZpZXdzLnB1c2gocmV2aWV3cy5kYXRhWzBdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGF1dGgvcmVnaXN0ZXJgXSk7XG4gIH1cblxuICAvL091dHB1dCBmb3JtIHJldmlldyBkaXJlY3RpdmVcbiAgb25TdWNjZXNzKHJlc3VsdHM6IGFueSkge1xuICAgIGlmKHJlc3VsdHMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuXG4gIHZpc2l0V2Vic2l0ZShuYW1lOiBzdHJpbmcpe1xuICAgIENsaWNreUxvZyhuYW1lKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
