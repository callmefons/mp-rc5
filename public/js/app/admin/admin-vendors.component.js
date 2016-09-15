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
var all_vendor_service_1 = require("../shared/api-service/vendor/all-vendor.service");
var account_management_service_1 = require("../shared/api-service/admin/account-management.service");
var AdminVendorsComponent = (function () {
    function AdminVendorsComponent(_productService, _allVendor, _accountService, _router, route) {
        this._productService = _productService;
        this._allVendor = _allVendor;
        this._accountService = _accountService;
        this._router = _router;
        this.route = route;
        this.loading_detail = true;
        this.loading_vendor = true;
        this.archive_account = false;
        this.archive_success = false;
        this.unarchive_success = false;
        this.resetPassword = false;
    }
    AdminVendorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub_detail = this.route
            .params
            .subscribe(function (params) {
            var id = parseInt(params['id']);
            var mode = params['mode'];
            _this.vendor$ = _this._allVendor.getAllDeveloper();
            _this.vendor$.subscribe(function (developer) {
                _this.vendor = developer;
                _this.loading_vendor = false;
            });
            if (mode == 'view') {
                _this.viewProfile(id);
            }
        });
    };
    AdminVendorsComponent.prototype.ngOnDestroy = function () {
        if (this.sub_archive)
            this.sub_archive.unsubscribe();
        if (this.sub_detail)
            this.sub_detail.unsubscribe();
    };
    AdminVendorsComponent.prototype.viewProfile = function (id) {
        var _this = this;
        this.detail$ = this._allVendor.getAllDeveloperId(id);
        this.sub_detail = this.detail$.subscribe(function (detail) {
            _this.detail = detail.data;
            _this.detail_vendor = detail.data.developer;
            _this.apps = detail.apps;
            _this.loading_detail = false;
        });
    };
    AdminVendorsComponent.prototype.confirmArchiveAccount = function (userId, status) {
        this.archive_success = false;
        this.unarchive_success = false;
        this.userId = userId;
        this.status = status;
    };
    AdminVendorsComponent.prototype.archiveAccount = function (userId, status) {
        var _this = this;
        this.archive_account$ = this._accountService.archiveAccount(userId, status);
        this.sub_archive = this.archive_account$.subscribe(function (res) {
            _this.viewProfile(_this.detail_vendor.id);
            if (res.status == 'success') {
                _this.archive_success = true ? (status === 'archive') : _this.unarchive_success = true;
            }
        });
    };
    AdminVendorsComponent.prototype.resetPasswordAccount = function (userId) {
        var _this = this;
        this.resetPassword = false;
        this._accountService.resetPasswordAccount(userId).subscribe(function (res) {
            _this.resetPassword = true;
        });
    };
    AdminVendorsComponent.prototype.goToDetail = function (productId) {
        this._router.navigate([("admin/product/" + productId)]);
    };
    AdminVendorsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-vendors',
            templateUrl: 'templates/admin-vendors.component.html',
            styleUrls: ['styles/admin-vendors.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, all_vendor_service_1.AllVendorService, account_management_service_1.AccountManagementService, router_1.Router, router_1.ActivatedRoute])
    ], AdminVendorsComponent);
    return AdminVendorsComponent;
}());
exports.AdminVendorsComponent = AdminVendorsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLXZlbmRvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFNM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsbUNBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFDakYsMkNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFZaEc7SUFHSSwrQkFBb0IsZUFBK0IsRUFDL0IsVUFBNEIsRUFDNUIsZUFBeUMsRUFDekMsT0FBYyxFQUNkLEtBQXFCO1FBSnJCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSXpDLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBdUQvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxzQkFBaUIsR0FBVyxLQUFLLENBQUM7UUF5QmxDLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBdEYvQixDQUFDO0lBaUJELHdDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFuQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzthQUN2QixNQUFNO2FBQ04sU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2pE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UyxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFqSEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDOzs2QkFBQTtJQTZHRiw0QkFBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUEzR1ksNkJBQXFCLHdCQTJHakMsQ0FBQSIsImZpbGUiOiJhZG1pbi9hZG1pbi12ZW5kb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtBbGxWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci9hbGwtdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0lucHV0fSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9jb3JlL2VzbS9zcmMvbWV0YWRhdGFcIjtcbmltcG9ydCB7c3RhdH0gZnJvbSBcImZzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWFkbWluLXZlbmRvcnMnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FkbWluLXZlbmRvcnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvYWRtaW4tdmVuZG9ycy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5WZW5kb3JzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWxsVmVuZG9yOiBBbGxWZW5kb3JTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FjY291bnRTZXJ2aWNlOiBBY2NvdW50TWFuYWdlbWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG4gICAgfVxuXG4gICAgbG9hZGluZ19kZXRhaWw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGxvYWRpbmdfdmVuZG9yOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzdWJfZGV0YWlsOiBTdWJzY3JpcHRpb247XG5cbiAgICB2ZW5kb3IkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgdmVuZG9yOiBhbnlbXTtcblxuICAgIGRldGFpbDogYW55W107XG4gICAgZGV0YWlsJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGRldGFpbF92ZW5kb3I6IGFueTtcbiAgICBhcHBzOiBhbnkgW107XG5cbiAgICBzdWJfYXJjaGl2ZTogU3Vic2NyaXB0aW9uO1xuICAgIGFyY2hpdmVfYWNjb3VudCQ6IE9ic2VydmFibGU8YW55PjtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuc3ViX2RldGFpbCA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBwYXJzZUludChwYXJhbXNbJ2lkJ10pO1xuICAgICAgICAgICAgICAgIGxldCBtb2RlID0gcGFyYW1zWydtb2RlJ107XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvciQgPSB0aGlzLl9hbGxWZW5kb3IuZ2V0QWxsRGV2ZWxvcGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3IkLnN1YnNjcmliZSgoZGV2ZWxvcGVyOiBhbnkpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvciA9IGRldmVsb3BlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX3ZlbmRvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PSAndmlldycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UHJvZmlsZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJfYXJjaGl2ZSl0aGlzLnN1Yl9hcmNoaXZlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLnN1Yl9kZXRhaWwpdGhpcy5zdWJfZGV0YWlsLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHZpZXdQcm9maWxlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kZXRhaWwkID0gdGhpcy5fYWxsVmVuZG9yLmdldEFsbERldmVsb3BlcklkKGlkKTtcbiAgICAgICAgdGhpcy5zdWJfZGV0YWlsID0gdGhpcy5kZXRhaWwkLnN1YnNjcmliZSgoZGV0YWlsOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWwuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsX3ZlbmRvciA9IGRldGFpbC5kYXRhLmRldmVsb3BlcjtcbiAgICAgICAgICAgIHRoaXMuYXBwcyA9IGRldGFpbC5hcHBzO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdfZGV0YWlsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXJjaGl2ZV9hY2NvdW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhcmNoaXZlX3N1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHVuYXJjaGl2ZV9zdWNjZXNzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBlcnJvclN0YXR1czpib29sZWFuO1xuICAgIGVycm9yVGV4dDpzdHJpbmc7XG4gICAgdXNlcklkOm51bWJlcjtcbiAgICBzdGF0dXM6c3RyaW5nO1xuXG4gICAgY29uZmlybUFyY2hpdmVBY2NvdW50KHVzZXJJZDogYW55LCBzdGF0dXM6YW55KXtcbiAgICAgICAgdGhpcy5hcmNoaXZlX3N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmFyY2hpdmVfc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgYXJjaGl2ZUFjY291bnQodXNlcklkOiBhbnksIHN0YXR1czphbnkpIHtcbiAgICAgICAgdGhpcy5hcmNoaXZlX2FjY291bnQkID0gdGhpcy5fYWNjb3VudFNlcnZpY2UuYXJjaGl2ZUFjY291bnQodXNlcklkLCBzdGF0dXMpO1xuICAgICAgICB0aGlzLnN1Yl9hcmNoaXZlID0gdGhpcy5hcmNoaXZlX2FjY291bnQkLnN1YnNjcmliZSgocmVzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3UHJvZmlsZSh0aGlzLmRldGFpbF92ZW5kb3IuaWQpO1xuXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmNoaXZlX3N1Y2Nlc3MgPSB0cnVlID8gKHN0YXR1cyA9PT0gJ2FyY2hpdmUnKSA6IHRoaXMudW5hcmNoaXZlX3N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJlc2V0UGFzc3dvcmRBY2NvdW50KHVzZXJJZDogYW55KSB7XG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hY2NvdW50U2VydmljZS5yZXNldFBhc3N3b3JkQWNjb3VudCh1c2VySWQpLnN1YnNjcmliZSgocmVzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0RldGFpbChwcm9kdWN0SWQ6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW4vcHJvZHVjdC8ke3Byb2R1Y3RJZH1gXSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
