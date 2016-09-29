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
        this.getVendorProfile();
    };
    VendorDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub_vendor_organization)
            this.sub_vendor_organization.unsubscribe();
        if (this.sub_vendor_profile)
            this.sub_vendor_profile.unsubscribe();
    };
    VendorDashboardComponent.prototype.getOrganizationProfile = function () {
        var _this = this;
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub_vendor_organization = this.vendor_organization$.subscribe(function (vendor) {
            _this.vendor_organization = vendor;
            _this.loading = false;
        });
    };
    VendorDashboardComponent.prototype.goToEditProfile = function () {
        this._router.navigate(["vendor/profile"]);
    };
    VendorDashboardComponent.prototype.getVendorProfile = function () {
        var _this = this;
        this.vendor_profile$ = this._vendorService.getVendorProfile();
        this.sub_vendor_profile = this.vendor_profile$.subscribe(function (vendor) {
            _this.vendor_profile = vendor;
            //this.loading = false;
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRzNELCtCQUE0Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzFFLDZCQUEwQix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXBFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBR3ZDOztHQUVHO0FBU0g7SUFjRSxrQ0FDVSxPQUFjLEVBQ2QsWUFBd0IsRUFDeEIsY0FBNEI7UUFGNUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBZHRDLFlBQU8sR0FBUyxJQUFJLENBQUM7UUFFckIsYUFBUSxHQUFVLEVBQUUsQ0FBQztJQWVyQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQUEsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRU8seURBQXNCLEdBQTlCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUM1RSxLQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sbURBQWdCLEdBQXhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFVO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBQzdCLHVCQUF1QjtRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDckQsQ0FBQzs7Z0NBQUE7SUFxREYsK0JBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLGdDQUF3QiwyQkFtRHBDLENBQUEiLCJmaWxlIjoidmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci92ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1jaGFydHMvbmcyLWNoYXJ0c1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC12ZW5kb3InLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgZXJyb3JNZXNzYWdlOmFueTtcbiAgbG9hZGluZzpib29sZWFuPXRydWU7XG5cbiAgdXNlcm5hbWU6c3RyaW5nID0gJyc7XG5cbiAgc3ViX3ZlbmRvcl9vcmdhbml6YXRpb246U3Vic2NyaXB0aW9uO1xuICBzdWJfdmVuZG9yX3Byb2ZpbGU6U3Vic2NyaXB0aW9uO1xuICB2ZW5kb3Jfb3JnYW5pemF0aW9uJDpPYnNlcnZhYmxlPGFueT47XG4gIHZlbmRvcl9vcmdhbml6YXRpb246VmVuZG9yO1xuICB2ZW5kb3JfcHJvZmlsZSQ6T2JzZXJ2YWJsZTxhbnk+O1xuICB2ZW5kb3JfcHJvZmlsZTpWZW5kb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcixcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIF92ZW5kb3JTZXJ2aWNlOlZlbmRvclNlcnZpY2VcbiAgKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldE9yZ2FuaXphdGlvblByb2ZpbGUoKTtcbiAgICB0aGlzLmdldFZlbmRvclByb2ZpbGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJfdmVuZG9yX29yZ2FuaXphdGlvbil0aGlzLnN1Yl92ZW5kb3Jfb3JnYW5pemF0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5zdWJfdmVuZG9yX3Byb2ZpbGUpdGhpcy5zdWJfdmVuZG9yX3Byb2ZpbGUudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpIHtcbiAgICB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kID0gdGhpcy5fdmVuZG9yU2VydmljZS5nZXRPcmdhbml6YXRpb25Qcm9maWxlKCk7XG4gICAgdGhpcy5zdWJfdmVuZG9yX29yZ2FuaXphdGlvbiA9IHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiQuc3Vic2NyaWJlKCh2ZW5kb3I6YW55KT0+e1xuICAgICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uID0gdmVuZG9yO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBnb1RvRWRpdFByb2ZpbGUoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvcHJvZmlsZWBdKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVuZG9yUHJvZmlsZSgpIHtcbiAgICB0aGlzLnZlbmRvcl9wcm9maWxlJCA9IHRoaXMuX3ZlbmRvclNlcnZpY2UuZ2V0VmVuZG9yUHJvZmlsZSgpO1xuICAgIHRoaXMuc3ViX3ZlbmRvcl9wcm9maWxlID0gdGhpcy52ZW5kb3JfcHJvZmlsZSQuc3Vic2NyaWJlKCh2ZW5kb3I6YW55KT0+e1xuICAgICAgdGhpcy52ZW5kb3JfcHJvZmlsZSA9IHZlbmRvcjtcbiAgICAgIC8vdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
