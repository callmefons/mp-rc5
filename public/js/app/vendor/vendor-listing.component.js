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
var VendorListingComponent = (function () {
    function VendorListingComponent(_router, route, _productService) {
        this._router = _router;
        this.route = route;
        this._productService = _productService;
        this.loading = true;
        this.updated = false;
    }
    VendorListingComponent.prototype.ngOnInit = function () {
        this.updated = true;
        this.getProductOfDeveloper();
    };
    VendorListingComponent.prototype.onRefresh = function () {
        this.getProductOfDeveloper();
    };
    VendorListingComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    VendorListingComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.updated = false;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this._productService.getProductOfDeveloper()
                .subscribe(function (apps) {
                if (apps != null) {
                    _this.apps = apps,
                        _this.loading = false;
                    _this.updated = true;
                }
            });
        });
    };
    VendorListingComponent.prototype.goToEditProduct = function (appId) {
        this._router.navigate([("vendor/edit/" + appId)]);
    };
    VendorListingComponent.prototype.goToVendorDashboard = function () {
        this._router.navigate(["vendor/dashboard"]);
    };
    VendorListingComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this._productService.deleteProduct(id).subscribe(function (res) {
            _this.onRefresh();
        });
    };
    VendorListingComponent.prototype.checkAppId = function (appId) {
        this.app_id = appId;
    };
    VendorListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            templateUrl: 'templates/vendor-listing.component.html',
            styleUrls: ['styles/vendor-listing.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, product_service_1.ProductService])
    ], VendorListingComponent);
    return VendorListingComponent;
}());
exports.VendorListingComponent = VendorListingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQU0zRCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsK0NBQStDLENBQUMsQ0FBQTtBQUc3RTs7R0FFRztBQVFIO0lBRUUsZ0NBQ1UsT0FBYyxFQUNkLEtBQW9CLEVBQ3BCLGVBQThCO1FBRjlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBU3hDLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFFdkIsWUFBTyxHQUFXLEtBQUssQ0FBQztJQVJ4QixDQUFDO0lBVUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0RBQXFCLEdBQXJCO1FBQUEsaUJBa0JDO1FBaEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDbEIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFO2lCQUN6QyxTQUFTLENBQ1IsVUFBQyxJQUFJO2dCQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7d0JBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLEtBQVM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBZSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG9EQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsRUFBTTtRQUFwQixpQkFLQztRQUhDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDbkQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFVLEdBQVYsVUFBVyxLQUFZO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUEzRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzs7OEJBQUE7SUF3RUYsNkJBQUM7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBdEVZLDhCQUFzQix5QkFzRWxDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC12ZW5kb3InLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckxpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOlByb2R1Y3RTZXJ2aWNlXG4gICl7XG5cbiAgfVxuICBhcHBfaWQ6bnVtYmVyO1xuXG4gIGFwcHM6UHJvZHVjdFtdO1xuXG4gIHN1YjpTdWJzY3JpcHRpb247XG4gIGxvYWRpbmc6Ym9vbGVhbiA9IHRydWU7XG5cbiAgdXBkYXRlZDpib29sZWFuID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICB9XG5cbiAgb25SZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCkge1xuXG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgIC5wYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKClcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGFwcHMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFwcHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwcyA9IGFwcHMsXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ29Ub0VkaXRQcm9kdWN0KGFwcElkOmFueSkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHZlbmRvci9lZGl0LyR7YXBwSWR9YF0pO1xuICB9XG5cbiAgZ29Ub1ZlbmRvckRhc2hib2FyZCgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHZlbmRvci9kYXNoYm9hcmRgXSk7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KGlkOmFueSkge1xuXG4gICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZGVsZXRlUHJvZHVjdChpZCkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0FwcElkKGFwcElkOm51bWJlcikge1xuICAgIHRoaXMuYXBwX2lkID0gYXBwSWQ7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
