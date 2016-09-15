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
var vendor_service_1 = require("../shared/api-service/vendor/vendor.service");
var auth_service_1 = require("../shared/api-service/auth/auth.service");
var router_1 = require("@angular/router");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var VendorDashboardComponent = (function () {
    function VendorDashboardComponent(_router, _authService, _vendorService) {
        this._router = _router;
        this._authService = _authService;
        this._vendorService = _vendorService;
        this.loading = true;
        this.username = '';
    }
    VendorDashboardComponent.prototype.ngOnInit = function () {
        this.getOrganizationProfile();
    };
    VendorDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub_vendorService)
            this.sub_vendorService.unsubscribe();
    };
    VendorDashboardComponent.prototype.getOrganizationProfile = function () {
        var _this = this;
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub_vendorService = this.vendor_organization$.subscribe(function (vendor) {
            _this.vendor_organization = vendor;
            _this.loading = false;
        });
    };
    VendorDashboardComponent.prototype.goToAddService = function () {
        this._router.navigate(["vendor/add"]);
    };
    VendorDashboardComponent.prototype.goToViewAllListing = function () {
        this._router.navigate(["vendor/listing"]);
    };
    VendorDashboardComponent.prototype.goToEditProfile = function () {
        this._router.navigate(["vendor/profile"]);
    };
    VendorDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            templateUrl: 'templates/vendor-dashboard.component.html',
            styleUrls: ['styles/vendor-dashboard.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, vendor_service_1.VendorService])
    ], VendorDashboardComponent);
    return VendorDashboardComponent;
}());
exports.VendorDashboardComponent = VendorDashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRzNELCtCQUE0Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzFFLDZCQUEwQix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXBFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBR3ZDOztHQUVHO0FBU0g7SUFXRSxrQ0FDVSxPQUFjLEVBQ2QsWUFBd0IsRUFDeEIsY0FBNEI7UUFGNUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBWHRDLFlBQU8sR0FBUyxJQUFJLENBQUM7UUFFckIsYUFBUSxHQUFVLEVBQUUsQ0FBQztJQVlyQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTyx5REFBc0IsR0FBOUI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFVO1lBQ3RFLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7WUFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBcERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMkNBQTJDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3JELENBQUM7O2dDQUFBO0lBaURGLCtCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSxnQ0FBd0IsMkJBK0NwQyxDQUFBIiwiZmlsZSI6InZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gXCJuZzItY2hhcnRzL25nMi1jaGFydHNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdmVuZG9yJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvdmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgVmVuZG9yRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGVycm9yTWVzc2FnZTphbnk7XG4gIGxvYWRpbmc6Ym9vbGVhbj10cnVlO1xuXG4gIHVzZXJuYW1lOnN0cmluZyA9ICcnO1xuXG4gIHN1Yl92ZW5kb3JTZXJ2aWNlOlN1YnNjcmlwdGlvbjtcbiAgdmVuZG9yX29yZ2FuaXphdGlvbiQ6T2JzZXJ2YWJsZTxhbnk+O1xuICB2ZW5kb3Jfb3JnYW5pemF0aW9uOlZlbmRvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3ZlbmRvclNlcnZpY2U6VmVuZG9yU2VydmljZVxuICApe1xuXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1Yl92ZW5kb3JTZXJ2aWNlKXRoaXMuc3ViX3ZlbmRvclNlcnZpY2UudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpIHtcbiAgICB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgdGhpcy5zdWJfdmVuZG9yU2VydmljZSA9IHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiQuc3Vic2NyaWJlKCh2ZW5kb3I6YW55KT0+e1xuICAgICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uID0gdmVuZG9yO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBnb1RvQWRkU2VydmljZSgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHZlbmRvci9hZGRgXSk7XG4gIH1cblxuICBnb1RvVmlld0FsbExpc3RpbmcoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvbGlzdGluZ2BdKTtcbiAgfVxuXG4gIGdvVG9FZGl0UHJvZmlsZSgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHZlbmRvci9wcm9maWxlYF0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
