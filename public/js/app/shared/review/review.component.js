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
        this.title = 'Review a Service';
        this.review = [];
        this.products = [];
        this.loading = true;
        this.rating = 1;
        this.disabled = true;
        this.myForm = this._fb.group({
            reviewcomment: [''],
            reviewscore: [''],
            productid: []
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
        var review = new review_model_1.Review(this.myForm.value.reviewcomment, this.rating, this.myForm.value.productid);
        this.review$ = this._reviewService.onReview(review);
        this.sub_review = this.review$.subscribe(function (res) {
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], ReviewComponent.prototype, "productId", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUFxQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hELGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBRXRFLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHFCQUFvQixlQUFlLENBQUMsQ0FBQTtBQVVwQztJQTJCRSx5QkFBb0IsU0FBa0IsRUFDbEIsR0FBZSxFQUNoQixjQUE0QixFQUM1QixlQUE4QixFQUM3QixPQUFjLEVBQ2hCLEtBQXFCO1FBTG5CLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBekJ2QyxVQUFLLEdBQVUsa0JBQWtCLENBQUM7UUFFbEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFRZixXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBRWxCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFZdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMzQixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBR0QscUNBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFZO1lBQy9DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQXJCLGlCQVdDO1FBVkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBTSxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQy9CLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUM1QixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBTztRQUMvQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFwRUQ7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBWlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUUzQyxDQUFDOzt1QkFBQTtJQTRFRixzQkFBQztBQUFELENBMUVBLEFBMEVDLElBQUE7QUExRVksdUJBQWUsa0JBMEUzQixDQUFBIiwiZmlsZSI6InNoYXJlZC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1Jldmlld30gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9yZXZpZXcubW9kZWwnO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UmV2aWV3U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Jldmlldy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7SW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2N1c3RvbWVyLXJldmlldy1zZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9yZXZpZXcuY29tcG9uZW50LmNzcyddLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgUmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vSW5wdXQgRm9ybSBQcm9kdWN0IERldGFpbFxuICBASW5wdXQoKVxuICBwcm9kdWN0SWQ6IGFueTtcblxuICB0aXRsZTpzdHJpbmcgPSAnUmV2aWV3IGEgU2VydmljZSc7XG4gIGVycm9yTWVzc2FnZTpzdHJpbmc7XG4gIHJldmlldzpSZXZpZXdbXSA9IFtdO1xuXG4gIHByb2R1Y3RzOlByb2R1Y3RbXSA9IFtdO1xuICBwcm9kdWN0cyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgc3ViOlN1YnNjcmlwdGlvbjtcblxuICBwcm9kdWN0OnN0cmluZztcblxuXG4gIHN1Yl9yZXZpZXcgOiBTdWJzY3JpcHRpb247XG4gIHJldmlldyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICByYXRpbmc6bnVtYmVyID0gMTtcblxuICBkaXNhYmxlZDpib29sZWFuID0gdHJ1ZTtcblxuICBteUZvcm06Rm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2F0aW9uOkxvY2F0aW9uLFxuICAgICAgICAgICAgICBwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHVibGljIF9yZXZpZXdTZXJ2aWNlOlJldmlld1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBfcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG5cbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIHJldmlld2NvbW1lbnQ6IFsnJ10sXG4gICAgICByZXZpZXdzY29yZTogWycnXSxcbiAgICAgIHByb2R1Y3RpZDogW11cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5zdWJfcmV2aWV3KXRoaXMuc3ViX3Jldmlldy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaWQ6YW55O1xuICBnZXRQcm9kdWN0cygpIHtcbiAgICB0aGlzLnByb2R1Y3RzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucHJvZHVjdHMkLnN1YnNjcmliZSgocHJvZHVjdHM6YW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBvblN1Ym1pdCh2YWx1ZTpPYmplY3QpIHtcbiAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUucmV2aWV3Y29tbWVudCxcbiAgICAgIHRoaXMucmF0aW5nLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUucHJvZHVjdGlkXG4gICAgKTtcblxuICAgIHRoaXMucmV2aWV3JCA9IHRoaXMuX3Jldmlld1NlcnZpY2Uub25SZXZpZXcocmV2aWV3KTtcbiAgICAgIHRoaXMuc3ViX3JldmlldyA9IHRoaXMucmV2aWV3JC5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
