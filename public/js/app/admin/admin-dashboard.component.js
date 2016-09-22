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
        this.listing = 'Moderate New Listings';
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
        this.product$ = this._productService.getProductStatus('pending');
        this.sub_product = this.product$.subscribe(function (product) {
            _this.product = product.data.slice(1, 5);
            _this.checkProduct();
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
    AdminDashboardComponent.prototype.checkProduct = function () {
        this.product.length > 0 ? this.listing = 'Moderate New Listings' : this.listing = 'No New Listings';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUszRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxtQ0FBK0IsaURBQWlELENBQUMsQ0FBQTtBQUNqRixnQ0FBNkIsK0NBQStDLENBQUMsQ0FBQTtBQUc3RTs7R0FFRztBQVFIO0lBY0UsaUNBQ1UsaUJBQWtDLEVBQ2xDLGVBQThCLEVBQzlCLE9BQWM7UUFGZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFWeEIsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFLL0IsbUJBQWMsR0FBVyxJQUFJLENBQUM7UUFxQzlCLFlBQU8sR0FBVyx1QkFBdUIsQ0FBQztJQTdCMUMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBR08sa0RBQWdCLEdBQXhCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVc7WUFDckQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRDQUFVLEdBQWxCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUNsRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCw4Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLEdBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztJQUN4RyxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbURBQWlCLEdBQWpCLFVBQWtCLFNBQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQWlCLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbURBQWlCLEdBQWpCLFVBQWtCLFNBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBZ0IsU0FBUyxXQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUF4RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNwRCxDQUFDOzsrQkFBQTtJQXFFRiw4QkFBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksK0JBQXVCLDBCQW1FbkMsQ0FBQSIsImZpbGUiOiJhZG1pbi9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtBbGxWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci9hbGwtdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWRtaW4tZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGVycm9yTWVzc2FnZTpzdHJpbmc7XG5cbiAgcHJvZHVjdDphbnlbXTtcbiAgcHJvZHVjdCQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBzdWJfcHJvZHVjdDpTdWJzY3JpcHRpb247XG4gIGxvYWRpbmdfcHJvZHVjdDpib29sZWFuID0gdHJ1ZTtcblxuICB2ZW5kb3I6YW55W107XG4gIHZlbmRvciQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBzdWJfdmVuZG9yOlN1YnNjcmlwdGlvbjtcbiAgbG9hZGluZ192ZW5kb3I6Ym9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYWxsVmVuZG9yU2VydmljZTpBbGxWZW5kb3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOlByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXJcbiAgKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldFByb2R1Y3RTdGF0dXMoKTtcbiAgICB0aGlzLmdldFZlbmRvcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJfcHJvZHVjdCl0aGlzLnN1Yl9wcm9kdWN0LnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5zdWJfdmVuZG9yKXRoaXMuc3ViX3ZlbmRvci51bnN1YnNjcmliZSgpO1xuICB9XG5cblxuICBwcml2YXRlIGdldFByb2R1Y3RTdGF0dXMoKSB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RTdGF0dXMoJ3BlbmRpbmcnKTtcbiAgICB0aGlzLnN1Yl9wcm9kdWN0ID0gdGhpcy5wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3Q6YW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3QuZGF0YS5zbGljZSgxLDUpO1xuICAgICAgdGhpcy5jaGVja1Byb2R1Y3QoKTtcbiAgICAgIHRoaXMubG9hZGluZ19wcm9kdWN0ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZlbmRvcnMoKSB7XG4gICAgdGhpcy52ZW5kb3IkID0gdGhpcy5fYWxsVmVuZG9yU2VydmljZS5nZXRBbGxEZXZlbG9wZXIoKTtcbiAgICB0aGlzLnN1Yl92ZW5kb3IgPSB0aGlzLnZlbmRvciQuc3Vic2NyaWJlKCh2ZW5kb3I6YW55KT0+e1xuICAgICAgdGhpcy52ZW5kb3IgPSB2ZW5kb3I7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0aW5nOiBzdHJpbmcgPSAnTW9kZXJhdGUgTmV3IExpc3RpbmdzJztcblxuICBjaGVja1Byb2R1Y3QoKXtcbiAgICB0aGlzLnByb2R1Y3QubGVuZ3RoID4gMCA/ICB0aGlzLmxpc3RpbmcgPSAnTW9kZXJhdGUgTmV3IExpc3RpbmdzJyA6ICB0aGlzLmxpc3RpbmcgPSAnTm8gTmV3IExpc3RpbmdzJztcbiAgfVxuXG4gIGdvVG9MaXN0aW5nKCl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vbGlzdGluZ2BdKTtcbiAgfVxuXG4gIGdvVG9Qcm9kdWN0RGV0YWlsKHByb2R1Y3RJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICB9XG5cbiAgZ29Ub1ZlbmRvclByb2ZpbGUocHJvZmlsZUlkOmFueSl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vdmVuZG9yLyR7cHJvZmlsZUlkfS92aWV3YF0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
