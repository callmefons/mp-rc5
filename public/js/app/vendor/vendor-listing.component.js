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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQU0zRCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsK0NBQStDLENBQUMsQ0FBQTtBQUc3RTs7R0FFRztBQVFIO0lBRUUsZ0NBQ1UsT0FBYyxFQUNkLEtBQW9CLEVBQ3BCLGVBQThCO1FBRjlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBU3hDLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFFdkIsWUFBTyxHQUFXLEtBQUssQ0FBQztJQVJ4QixDQUFDO0lBVUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0RBQXFCLEdBQXJCO1FBQUEsaUJBa0JDO1FBaEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDbEIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFO2lCQUN6QyxTQUFTLENBQ1IsVUFBQyxJQUFJO2dCQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7d0JBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLEtBQVM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBZSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxFQUFNO1FBQXBCLGlCQUtDO1FBSEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNuRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLEtBQVk7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQXZFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNuRCxDQUFDOzs4QkFBQTtJQW9FRiw2QkFBQztBQUFELENBbEVBLEFBa0VDLElBQUE7QUFsRVksOEJBQXNCLHlCQWtFbEMsQ0FBQSIsImZpbGUiOiJ2ZW5kb3IvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci92ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXZlbmRvcicsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2VcbiAgKXtcblxuICB9XG4gIGFwcF9pZDpudW1iZXI7XG5cbiAgYXBwczpQcm9kdWN0W107XG5cbiAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgbG9hZGluZzpib29sZWFuID0gdHJ1ZTtcblxuICB1cGRhdGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCk7XG4gIH1cblxuICBvblJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoYXBwcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXBwcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcyxcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvRWRpdFByb2R1Y3QoYXBwSWQ6YW55KSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgdmVuZG9yL2VkaXQvJHthcHBJZH1gXSk7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KGlkOmFueSkge1xuXG4gICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZGVsZXRlUHJvZHVjdChpZCkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0FwcElkKGFwcElkOm51bWJlcikge1xuICAgIHRoaXMuYXBwX2lkID0gYXBwSWQ7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
