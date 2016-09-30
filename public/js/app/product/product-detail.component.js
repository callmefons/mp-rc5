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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFFN0UsNkJBQTBCLHlDQUF5QyxDQUFDLENBQUE7QUFDcEUsK0JBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFHbkU7O0dBRUc7QUFRSDtJQStCRSxnQ0FBb0IsS0FBcUIsRUFDckIsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFqQ25ELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFHeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFFekIsZ0NBQWdDO1FBQ2hDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixX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RCw4QkFBOEI7SUFDOUIsMENBQVMsR0FBVCxVQUFVLE9BQVk7UUFDcEIsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBR0QsNkNBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUE1TEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNuRCxDQUFDOzs4QkFBQTtJQXdMRiw2QkFBQztBQUFELENBdExBLEFBc0xDLElBQUE7QUF0TFksOEJBQXNCLHlCQXNMbEMsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtTYWZlUmVzb3VyY2VVcmwsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSZXZpZXdTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Jldmlldy5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIENsaWNreUxvZzogRnVuY3Rpb247XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtcHJvZHVjdC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByb2R1Y3RzOiBhbnkgPSBbXTtcbiAgYXBwczogYW55ID0gW107XG4gIGxhbmd1YWdlc1RhZzogYW55ID0gW107XG5cbiAgY2F0ZWdvcmllc1RhZzogYW55ID0gW107XG4gIGRlcGFydG1lbnRzVGFnOiBhbnkgPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogYW55ID0gW107XG5cblxuICBmZWF0dXJlczogYW55ID0gW107XG4gIHNjcmVlbnNob3RzOiBhbnkgPSBbXTtcblxuICByZXZpZXdzOiBhbnkgPSBbXTtcbiAgdHJ1c3RlZFVybDogU2FmZVVybCA9IFtdO1xuXG4gIC8qU2V0IHRodW1ibmFpbCBhbmQgU2NyZWVuc2hvdCovXG4gIHRodW1ibmFpbDogYW55ID0gW107XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBtYXg6IG51bWJlciA9IDQ7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBzZWxlY3RlZDogYW55ID0gJyc7XG5cbiAgLy9EZXZlbG9wZXJcbiAgZGV2ZWxvcGVyX29yZ2FuaXphdGlvbjogYW55ID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmV2aWV3U2VydmljZTogUmV2aWV3U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIGxhbmc6IHN0cmluZyA9ICdlbic7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vblJlZnJlc2goKTtcbiAgfVxuXG4gIFN3aXR0aGlzY2hMYW5nKGxhbmc6IHN0cmluZyl7XG4gICAgdGhpcy5sYW5nID0gbGFuZztcbiAgICB0aGlzLm9uUmVmcmVzaCgpO1xuICB9XG5cbiAgb25SZWZyZXNoKCl7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgIC5wYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddKTtcblxuICAgICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RJZChpZCkuc3Vic2NyaWJlKChwcm9kdWN0czogYW55KT0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzLmRhdGFbdGhpcy5sYW5nXTtcbiAgICAgICAgICAgIHRoaXMuYXBwcyA9IHByb2R1Y3RzLmRhdGFbdGhpcy5sYW5nXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc1RhZy5wdXNoKHRoaXMucHJvZHVjdHMubGFuZ3VhZ2VzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5kZXBhcnRtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5kZXBhcnRtZW50c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmNhdGVnb3JpZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmluZHVzdHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5pbmR1c3RyaWVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaCh0aGlzLnByb2R1Y3RzLmZlYXR1cmVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuc2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5zY3JlZW5zaG90cy5wdXNoKHRoaXMucHJvZHVjdHMuc2NyZWVuc2hvdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYm5haWwoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNjcmVlbnNob3RzWzBdLnVybDtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICB0aGlzLmdldFJldmlldyhpZCk7XG5cbiAgICAgICAgfSk7XG4gIH1cblxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cblxuICBvblNlbGVjdChfc2NyZWVuc2hvdDogc3RyaW5nLCBpOiBudW1iZXIsIGo6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBfc2NyZWVuc2hvdDtcblxuICAgIGlmIChpICE9IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSAoKGogKyAxKSArICg0ICogaSkgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleCA9IGo7XG4gICAgfVxuICB9XG5cbiAgb25Db250cm9sKGNvbmRpdGlvbjogc3RyaW5nKSB7XG5cbiAgICBpZiAoY29uZGl0aW9uID09ICdwbHVzJykge1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4ICE9IDApIHtcbiAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNjcmVlbnNob3RzW3RoaXMuaW5kZXhdLnVybDtcbiAgfVxuXG5cbiAgc2V0VGh1bWJuYWlsKCkge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoIC8gNCkpOyBpKyspIHtcblxuICAgICAgdGhpcy50aHVtYm5haWxbaV0gPSBbXTtcblxuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAodGhpcy5jb3VudCA8IHRoaXMuc2NyZWVuc2hvdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy50aHVtYm5haWxbaV1bal0gPSB0aGlzLnNjcmVlbnNob3RzW3RoaXMuY291bnRdLnVybDtcbiAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFJldmlldyhpZDogYW55KSB7XG5cbiAgICBpZiAodGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpID09IHRydWUpIHtcbiAgICAgIHRoaXMuX3Jldmlld1NlcnZpY2UuZ2V0UmV2aWV3QnlJZChpZClcbiAgICAgICAgLnN1YnNjcmliZSgocmV2aWV3czogYW55KSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmV2aWV3cy5wdXNoKHJldmlld3MuZGF0YVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jldmlld1NlcnZpY2UuZ2V0UmV2aWV3QnlJZChpZClcbiAgICAgICAgLnN1YnNjcmliZSgocmV2aWV3czogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXZpZXdzLnB1c2gocmV2aWV3cy5kYXRhWzBdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9yZWdpc3RlcmBdKTtcbiAgfVxuXG4gIC8vT3V0cHV0IGZvcm0gcmV2aWV3IGRpcmVjdGl2ZVxuICBvblN1Y2Nlc3MocmVzdWx0czogYW55KSB7XG4gICAgaWYocmVzdWx0cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxuXG5cbiAgdmlzaXRXZWJzaXRlKG5hbWU6IGFueSl7XG4gICAgQ2xpY2t5TG9nKG5hbWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
