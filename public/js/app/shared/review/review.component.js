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
var common_1 = require('@angular/common');
var review_model_1 = require('../../shared/models/review.model');
var product_service_1 = require("../api-service/product/product.service");
var forms_1 = require("@angular/forms");
var review_service_1 = require("../api-service/review.service");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var ReviewComponent = (function () {
    function ReviewComponent(_location, _fb, _reviewService, _productService, _router, route) {
        this._location = _location;
        this._fb = _fb;
        this._reviewService = _reviewService;
        this._productService = _productService;
        this._router = _router;
        this.route = route;
        this.success = new core_1.EventEmitter();
        this.title = 'Review a Service';
        this.review = [];
        this.products = [];
        this.loading = true;
        this.rating = 1;
        this.disabled = true;
        this.count = 0;
        this.reset = false;
        this.myForm = this._fb.group({
            reviewcomment: [''],
            reviewscore: [''],
            productid: ['']
        });
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ReviewComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_review)
            this.sub_review.unsubscribe();
    };
    ReviewComponent.prototype.getProducts = function () {
        var _this = this;
        this.products$ = this._productService.getProduct();
        this.sub = this.products$.subscribe(function (products) {
            _this.products = products;
            _this.loading = false;
        });
    };
    ReviewComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.count += 1;
        var review = new review_model_1.Review(this.myForm.value.reviewcomment, this.rating, this.productId);
        if (this.count == 1) {
            this.review$ = this._reviewService.onReview(review);
            this.sub_review = this.review$.subscribe(function (res) {
                _this.success.emit('success');
                _this.myForm.reset();
                _this.reset = true;
                if (_this.reset) {
                    _this.count = 0;
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], ReviewComponent.prototype, "productId", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewComponent.prototype, "success", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-review-service',
            templateUrl: 'templates/review.component.html',
            styleUrls: ['styles/review.component.css'],
        }), 
        __metadata('design:paramtypes', [common_1.Location, forms_1.FormBuilder, review_service_1.ReviewService, product_service_1.ProductService, router_1.Router, router_1.ActivatedRoute])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBRTlELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUFxQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hELGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBRXRFLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQVU1QztJQThCSSx5QkFBb0IsU0FBbUIsRUFDbkIsR0FBZ0IsRUFDakIsY0FBNkIsRUFDN0IsZUFBK0IsRUFDOUIsT0FBZSxFQUNmLEtBQXFCO1FBTHJCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBM0J6QyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWhELFVBQUssR0FBVyxrQkFBa0IsQ0FBQztRQUVuQyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsWUFBTyxHQUFHLElBQUksQ0FBQztRQVFmLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBUSxHQUFZLElBQUksQ0FBQztRQXNDekIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBM0JuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNuQixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUlELHFDQUFXLEdBQVg7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUM5QyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCxrQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUF0QixpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBTSxDQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQy9CLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNiLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQztJQW5GRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFHUjtRQUFDLGFBQU0sRUFBRTs7b0RBQUE7SUFmYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBRTdDLENBQUM7O3VCQUFBO0lBMkZGLHNCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGWSx1QkFBZSxrQkF5RjNCLENBQUEiLCJmaWxlIjoic2hhcmVkL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtSZXZpZXd9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvcmV2aWV3Lm1vZGVsJztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1Jldmlld1NlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9yZXZpZXcuc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0lucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdjdXN0b21lci1yZXZpZXctc2VydmljZScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3Jldmlldy5jb21wb25lbnQuY3NzJ10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICAvL0lucHV0IEZvcm0gUHJvZHVjdCBEZXRhaWxcbiAgICBASW5wdXQoKVxuICAgIHByb2R1Y3RJZDogYW55O1xuXG4gICAgQE91dHB1dCgpXG4gICAgc3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICB0aXRsZTogc3RyaW5nID0gJ1JldmlldyBhIFNlcnZpY2UnO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHJldmlldzogUmV2aWV3W10gPSBbXTtcblxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwcm9kdWN0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHByb2R1Y3Q6IHN0cmluZztcblxuXG4gICAgc3ViX3JldmlldzogU3Vic2NyaXB0aW9uO1xuICAgIHJldmlldyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICByYXRpbmc6IG51bWJlciA9IDE7XG5cbiAgICBkaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHVibGljIF9yZXZpZXdTZXJ2aWNlOiBSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cblxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIHJldmlld2NvbW1lbnQ6IFsnJ10sXG4gICAgICAgICAgICByZXZpZXdzY29yZTogWycnXSxcbiAgICAgICAgICAgIHByb2R1Y3RpZDogWycnXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ViX3Jldmlldyl0aGlzLnN1Yl9yZXZpZXcudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZDogYW55O1xuXG4gICAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucHJvZHVjdHMkLnN1YnNjcmliZSgocHJvZHVjdHM6IGFueSk9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY291bnQ6IG51bWJlciA9IDA7XG4gICAgcmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KHZhbHVlOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUucmV2aWV3Y29tbWVudCxcbiAgICAgICAgICAgIHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5jb3VudCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnJldmlldyQgPSB0aGlzLl9yZXZpZXdTZXJ2aWNlLm9uUmV2aWV3KHJldmlldyk7XG4gICAgICAgICAgICB0aGlzLnN1Yl9yZXZpZXcgPSB0aGlzLnJldmlldyQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdCgnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
