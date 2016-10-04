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
var AdminLisitingComponent = (function () {
    function AdminLisitingComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.loading = true;
        this.loading_product_new = true;
        this.loading_product_review = true;
    }
    AdminLisitingComponent.prototype.ngOnInit = function () {
        this.getAllProduct();
        this.getNewProduct();
        this.getReviewProduct();
    };
    AdminLisitingComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_product_new)
            this.sub_product_new.unsubscribe();
    };
    AdminLisitingComponent.prototype.goToDashboard = function () {
        this._router.navigate(["admin/dashboard"]);
    };
    AdminLisitingComponent.prototype.showLog = function (product_log) {
        this.logs = product_log;
    };
    AdminLisitingComponent.prototype.getNewProduct = function () {
        var _this = this;
        this.product_new$ = this._productService.getProductStatus('pending');
        this.sub_product_new = this.product_new$.subscribe(function (product) {
            _this.product_new = product.data;
            _this.product_new_length = product.data.length;
            _this.loading_product_new = false;
        });
    };
    AdminLisitingComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.product_all$ = this._productService.getProductStatus('all');
        this.sub = this.product_all$.subscribe(function (product) {
            _this.product_all = product.data;
            _this.product_all_length = product.data.length;
            _this.loading = false;
        });
    };
    AdminLisitingComponent.prototype.getReviewProduct = function () {
        var _this = this;
        this.product_review$ = this._productService.getProductStatus('review');
        this.sub_product_review = this.product_review$.subscribe(function (product) {
            _this.product_review = product.data;
            _this.product_review_length = product.data.length;
            _this.loading = false;
        });
    };
    AdminLisitingComponent.prototype.goToProductDetail = function (id) {
        this._router.navigate([("admin/product/" + id)]);
    };
    AdminLisitingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-dashboard',
            templateUrl: 'templates/admin-listing.component.html',
            styleUrls: ['styles/admin-listing.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], AdminLisitingComponent);
    return AdminLisitingComponent;
}());
exports.AdminLisitingComponent = AdminLisitingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFFN0U7O0dBRUc7QUFRSDtJQXlCRSxnQ0FDVSxPQUFjLEVBQ2QsZUFBOEI7UUFEOUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBakJ4QyxZQUFPLEdBQVcsSUFBSSxDQUFDO1FBT3ZCLHdCQUFtQixHQUFXLElBQUksQ0FBQztRQU1uQywyQkFBc0IsR0FBVyxJQUFJLENBQUM7SUFPdEMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUdELDhDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQU8sR0FBUCxVQUFRLFdBQWU7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUdPLDhDQUFhLEdBQXJCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVc7WUFDN0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFhLEdBQXJCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVc7WUFDakQsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxpREFBZ0IsR0FBeEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFXO1lBQ25FLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0RBQWlCLEdBQWpCLFVBQWtCLEVBQVM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBaUIsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUF6Rkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNsRCxDQUFDOzs4QkFBQTtJQXFGRiw2QkFBQztBQUFELENBbkZBLEFBbUZDLElBQUE7QUFuRlksOEJBQXNCLHlCQW1GbEMsQ0FBQSIsImZpbGUiOiJhZG1pbi9hZG1pbi1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hZG1pbi1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hZG1pbi1saXN0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hZG1pbi1saXN0aW5nLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkxpc2l0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGVycm9yTWVzc2FnZTpzdHJpbmc7XG5cbiAgcHJvZHVjdF9hbGw6YW55W107XG4gIHByb2R1Y3RfYWxsJDpPYnNlcnZhYmxlPGFueT47XG4gIHByb2R1Y3RfYWxsX2xlbmd0aDpudW1iZXI7XG4gIGxvZ3M6YW55W107XG5cbiAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgbG9hZGluZzpib29sZWFuID0gdHJ1ZTtcblxuXG4gIHByb2R1Y3RfbmV3OmFueVtdO1xuICBwcm9kdWN0X25ldyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBwcm9kdWN0X25ld19sZW5ndGg6bnVtYmVyO1xuICBzdWJfcHJvZHVjdF9uZXc6U3Vic2NyaXB0aW9uO1xuICBsb2FkaW5nX3Byb2R1Y3RfbmV3OmJvb2xlYW4gPSB0cnVlO1xuXG4gIHByb2R1Y3RfcmV2aWV3OmFueVtdO1xuICBwcm9kdWN0X3JldmlldyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBwcm9kdWN0X3Jldmlld19sZW5ndGg6bnVtYmVyO1xuICBzdWJfcHJvZHVjdF9yZXZpZXc6U3Vic2NyaXB0aW9uO1xuICBsb2FkaW5nX3Byb2R1Y3RfcmV2aWV3OmJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2VcbiAgKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldEFsbFByb2R1Y3QoKTtcbiAgICB0aGlzLmdldE5ld1Byb2R1Y3QoKTtcbiAgICB0aGlzLmdldFJldmlld1Byb2R1Y3QoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYodGhpcy5zdWJfcHJvZHVjdF9uZXcpdGhpcy5zdWJfcHJvZHVjdF9uZXcudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgZ29Ub0Rhc2hib2FyZCgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2Rhc2hib2FyZGBdKTtcbiAgfVxuXG4gIHNob3dMb2cocHJvZHVjdF9sb2c6YW55KXtcbiAgICB0aGlzLmxvZ3MgPSBwcm9kdWN0X2xvZztcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXROZXdQcm9kdWN0KCkge1xuICAgIHRoaXMucHJvZHVjdF9uZXckID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFN0YXR1cygncGVuZGluZycpO1xuICAgIHRoaXMuc3ViX3Byb2R1Y3RfbmV3ID0gdGhpcy5wcm9kdWN0X25ldyQuc3Vic2NyaWJlKChwcm9kdWN0OmFueSk9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RfbmV3ID0gcHJvZHVjdC5kYXRhO1xuICAgICAgdGhpcy5wcm9kdWN0X25ld19sZW5ndGggPSBwcm9kdWN0LmRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5sb2FkaW5nX3Byb2R1Y3RfbmV3ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbFByb2R1Y3QoKSB7XG4gICAgdGhpcy5wcm9kdWN0X2FsbCQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0U3RhdHVzKCdhbGwnKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucHJvZHVjdF9hbGwkLnN1YnNjcmliZSgocHJvZHVjdDphbnkpPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0X2FsbCA9IHByb2R1Y3QuZGF0YTtcbiAgICAgIHRoaXMucHJvZHVjdF9hbGxfbGVuZ3RoID0gcHJvZHVjdC5kYXRhLmxlbmd0aDtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdQcm9kdWN0KCkge1xuICAgIHRoaXMucHJvZHVjdF9yZXZpZXckID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFN0YXR1cygncmV2aWV3Jyk7XG4gICAgdGhpcy5zdWJfcHJvZHVjdF9yZXZpZXcgPSB0aGlzLnByb2R1Y3RfcmV2aWV3JC5zdWJzY3JpYmUoKHByb2R1Y3Q6YW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdF9yZXZpZXcgPSBwcm9kdWN0LmRhdGE7XG4gICAgICB0aGlzLnByb2R1Y3RfcmV2aWV3X2xlbmd0aCA9IHByb2R1Y3QuZGF0YS5sZW5ndGg7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdvVG9Qcm9kdWN0RGV0YWlsKGlkOm51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vcHJvZHVjdC8ke2lkfWBdKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
