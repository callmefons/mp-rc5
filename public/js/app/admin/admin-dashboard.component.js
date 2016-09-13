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
var all_vendor_service_1 = require("../shared/api-service/vendor/all-vendor.service");
var product_service_1 = require("../shared/api-service/product/product.service");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(_allVendorService, _productService, _router) {
        this._allVendorService = _allVendorService;
        this._productService = _productService;
        this._router = _router;
        this.loading_product = true;
        this.loading_vendor = true;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getProductStatus();
        this.getVendors();
    };
    AdminDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub_product)
            this.sub_product.unsubscribe();
        if (this.sub_vendor)
            this.sub_vendor.unsubscribe();
    };
    AdminDashboardComponent.prototype.getProductStatus = function () {
        var _this = this;
        this.product$ = this._productService.getProductStatus('all');
        this.sub_product = this.product$.subscribe(function (product) {
            _this.product = product.data.slice(1, 5);
            _this.loading_product = false;
        });
    };
    AdminDashboardComponent.prototype.getVendors = function () {
        var _this = this;
        this.vendor$ = this._allVendorService.getAllDeveloper();
        this.sub_vendor = this.vendor$.subscribe(function (vendor) {
            _this.vendor = vendor;
        });
    };
    AdminDashboardComponent.prototype.goToListing = function () {
        this._router.navigate(["admin/listing"]);
    };
    AdminDashboardComponent.prototype.goToProductDetail = function (productId) {
        this._router.navigate([("admin/product/" + productId)]);
    };
    AdminDashboardComponent.prototype.goToVendorProfile = function (profileId) {
        this._router.navigate([("admin/vendor/" + profileId + "/view")]);
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-dashboard',
            templateUrl: 'templates/admin-dashboard.component.html',
            styleUrls: ['styles/admin-dashboard.component.css'],
        }), 
        __metadata('design:paramtypes', [all_vendor_service_1.AllVendorService, product_service_1.ProductService, router_1.Router])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUszRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxtQ0FBK0IsaURBQWlELENBQUMsQ0FBQTtBQUNqRixnQ0FBNkIsK0NBQStDLENBQUMsQ0FBQTtBQUc3RTs7R0FFRztBQVFIO0lBY0UsaUNBQ1UsaUJBQWtDLEVBQ2xDLGVBQThCLEVBQzlCLE9BQWM7UUFGZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFWeEIsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFLL0IsbUJBQWMsR0FBVyxJQUFJLENBQUM7SUFROUIsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBR08sa0RBQWdCLEdBQXhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVc7WUFDckQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNENBQVUsR0FBbEI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFVO1lBQ2xELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1EQUFpQixHQUFqQixVQUFrQixTQUFnQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFpQixTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1EQUFpQixHQUFqQixVQUFrQixTQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQWdCLFNBQVMsV0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBakVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7U0FDcEQsQ0FBQzs7K0JBQUE7SUE4REYsOEJBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLCtCQUF1QiwwQkE0RG5DLENBQUEiLCJmaWxlIjoiYWRtaW4vYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7QWxsVmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvYWxsLXZlbmRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFkbWluLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkRhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBlcnJvck1lc3NhZ2U6c3RyaW5nO1xuXG4gIHByb2R1Y3Q6YW55W107XG4gIHByb2R1Y3QkOk9ic2VydmFibGU8YW55PjtcbiAgc3ViX3Byb2R1Y3Q6U3Vic2NyaXB0aW9uO1xuICBsb2FkaW5nX3Byb2R1Y3Q6Ym9vbGVhbiA9IHRydWU7XG5cbiAgdmVuZG9yOmFueVtdO1xuICB2ZW5kb3IkOk9ic2VydmFibGU8YW55PjtcbiAgc3ViX3ZlbmRvcjpTdWJzY3JpcHRpb247XG4gIGxvYWRpbmdfdmVuZG9yOmJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FsbFZlbmRvclNlcnZpY2U6QWxsVmVuZG9yU2VydmljZSxcbiAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyXG4gICl7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRQcm9kdWN0U3RhdHVzKCk7XG4gICAgdGhpcy5nZXRWZW5kb3JzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3ViX3Byb2R1Y3QpdGhpcy5zdWJfcHJvZHVjdC51bnN1YnNjcmliZSgpO1xuICAgIGlmKHRoaXMuc3ViX3ZlbmRvcil0aGlzLnN1Yl92ZW5kb3IudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0U3RhdHVzKCkge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0U3RhdHVzKCdhbGwnKTtcbiAgICB0aGlzLnN1Yl9wcm9kdWN0ID0gdGhpcy5wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3Q6YW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3QuZGF0YS5zbGljZSgxLDUpO1xuICAgICAgdGhpcy5sb2FkaW5nX3Byb2R1Y3QgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVuZG9ycygpIHtcbiAgICB0aGlzLnZlbmRvciQgPSB0aGlzLl9hbGxWZW5kb3JTZXJ2aWNlLmdldEFsbERldmVsb3BlcigpO1xuICAgIHRoaXMuc3ViX3ZlbmRvciA9IHRoaXMudmVuZG9yJC5zdWJzY3JpYmUoKHZlbmRvcjphbnkpPT57XG4gICAgICB0aGlzLnZlbmRvciA9IHZlbmRvcjtcbiAgICB9KTtcbiAgfVxuXG4gIGdvVG9MaXN0aW5nKCl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vbGlzdGluZ2BdKTtcbiAgfVxuXG4gIGdvVG9Qcm9kdWN0RGV0YWlsKHByb2R1Y3RJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICB9XG5cbiAgZ29Ub1ZlbmRvclByb2ZpbGUocHJvZmlsZUlkOmFueSl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vdmVuZG9yLyR7cHJvZmlsZUlkfS92aWV3YF0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
