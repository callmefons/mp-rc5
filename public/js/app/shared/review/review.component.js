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
        var review = new review_model_1.Review(this.myForm.value.reviewcomment, this.rating, this.productId);
        this.review$ = this._reviewService.onReview(review);
        this.sub_review = this.review$.subscribe(function (res) {
            _this.success.emit('success');
        }, function (error) { return _this.errorMessage = error; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBRTdELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUFxQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hELGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBRXRFLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQVUzQztJQThCRSx5QkFBb0IsU0FBa0IsRUFDbEIsR0FBZSxFQUNoQixjQUE0QixFQUM1QixlQUE4QixFQUM3QixPQUFjLEVBQ2hCLEtBQXFCO1FBTG5CLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBM0J2QyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWhELFVBQUssR0FBVSxrQkFBa0IsQ0FBQztRQUVsQyxXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQVFmLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFXLElBQUksQ0FBQztRQVl0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzNCLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNuQixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUdELHFDQUFXLEdBQVg7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBWTtZQUMvQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxrQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUFyQixpQkFZQztRQVhDLElBQU0sTUFBTSxHQUFHLElBQUkscUJBQU0sQ0FDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUMvQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQU87WUFDL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBeEVEO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUdSO1FBQUMsYUFBTSxFQUFFOztvREFBQTtJQWZYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FFM0MsQ0FBQzs7dUJBQUE7SUFnRkYsc0JBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBO0FBOUVZLHVCQUFlLGtCQThFM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7UmV2aWV3fSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3Jldmlldy5tb2RlbCc7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSZXZpZXdTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvcmV2aWV3LnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtJbnB1dCxPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2N1c3RvbWVyLXJldmlldy1zZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9yZXZpZXcuY29tcG9uZW50LmNzcyddLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgUmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vSW5wdXQgRm9ybSBQcm9kdWN0IERldGFpbFxuICBASW5wdXQoKVxuICBwcm9kdWN0SWQ6IGFueTtcblxuICBAT3V0cHV0KClcbiAgc3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGl0bGU6c3RyaW5nID0gJ1JldmlldyBhIFNlcnZpY2UnO1xuICBlcnJvck1lc3NhZ2U6c3RyaW5nO1xuICByZXZpZXc6UmV2aWV3W10gPSBbXTtcblxuICBwcm9kdWN0czpQcm9kdWN0W10gPSBbXTtcbiAgcHJvZHVjdHMkOk9ic2VydmFibGU8YW55PjtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHN1YjpTdWJzY3JpcHRpb247XG5cbiAgcHJvZHVjdDpzdHJpbmc7XG5cblxuICBzdWJfcmV2aWV3IDogU3Vic2NyaXB0aW9uO1xuICByZXZpZXckOk9ic2VydmFibGU8YW55PjtcbiAgcmF0aW5nOm51bWJlciA9IDE7XG5cbiAgZGlzYWJsZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgbXlGb3JtOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhdGlvbjpMb2NhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBfcmV2aWV3U2VydmljZTpSZXZpZXdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgX3Byb2R1Y3RTZXJ2aWNlOlByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuXG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICByZXZpZXdjb21tZW50OiBbJyddLFxuICAgICAgcmV2aWV3c2NvcmU6IFsnJ10sXG4gICAgICBwcm9kdWN0aWQ6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5zdWJfcmV2aWV3KXRoaXMuc3ViX3Jldmlldy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaWQ6YW55O1xuICBnZXRQcm9kdWN0cygpIHtcbiAgICB0aGlzLnByb2R1Y3RzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucHJvZHVjdHMkLnN1YnNjcmliZSgocHJvZHVjdHM6YW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBvblN1Ym1pdCh2YWx1ZTpPYmplY3QpIHtcbiAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUucmV2aWV3Y29tbWVudCxcbiAgICAgIHRoaXMucmF0aW5nLFxuICAgICAgdGhpcy5wcm9kdWN0SWRcbiAgICApO1xuXG4gICAgdGhpcy5yZXZpZXckID0gdGhpcy5fcmV2aWV3U2VydmljZS5vblJldmlldyhyZXZpZXcpO1xuICAgICAgdGhpcy5zdWJfcmV2aWV3ID0gdGhpcy5yZXZpZXckLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdCgnc3VjY2VzcycpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
