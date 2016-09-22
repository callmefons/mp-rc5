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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLXZlbmRvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsbUNBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFDakYsMkNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFTaEc7SUFHSSwrQkFBb0IsZUFBK0IsRUFDL0IsVUFBNEIsRUFDNUIsZUFBeUMsRUFDekMsT0FBYyxFQUNkLEtBQXFCO1FBSnJCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSXpDLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBdUQvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxzQkFBaUIsR0FBVyxLQUFLLENBQUM7UUF5QmxDLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBdEYvQixDQUFDO0lBaUJELHdDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFuQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzthQUN2QixNQUFNO2FBQ04sU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2pE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UyxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFqSEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDOzs2QkFBQTtJQTZHRiw0QkFBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUEzR1ksNkJBQXFCLHdCQTJHakMsQ0FBQSIsImZpbGUiOiJhZG1pbi9hZG1pbi12ZW5kb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtBbGxWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci9hbGwtdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hZG1pbi12ZW5kb3JzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hZG1pbi12ZW5kb3JzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2FkbWluLXZlbmRvcnMuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluVmVuZG9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FsbFZlbmRvcjogQWxsVmVuZG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY2NvdW50U2VydmljZTogQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuICAgIH1cblxuICAgIGxvYWRpbmdfZGV0YWlsOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsb2FkaW5nX3ZlbmRvcjogYm9vbGVhbiA9IHRydWU7XG4gICAgc3ViX2RldGFpbDogU3Vic2NyaXB0aW9uO1xuXG4gICAgdmVuZG9yJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHZlbmRvcjogYW55W107XG5cbiAgICBkZXRhaWw6IGFueVtdO1xuICAgIGRldGFpbCQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBkZXRhaWxfdmVuZG9yOiBhbnk7XG4gICAgYXBwczogYW55IFtdO1xuXG4gICAgc3ViX2FyY2hpdmU6IFN1YnNjcmlwdGlvbjtcbiAgICBhcmNoaXZlX2FjY291bnQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnN1Yl9kZXRhaWwgPSB0aGlzLnJvdXRlXG4gICAgICAgICAgICAucGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQocGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9kZSA9IHBhcmFtc1snbW9kZSddO1xuXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3IkID0gdGhpcy5fYWxsVmVuZG9yLmdldEFsbERldmVsb3BlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yJC5zdWJzY3JpYmUoKGRldmVsb3BlcjogYW55KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3IgPSBkZXZlbG9wZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ192ZW5kb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT0gJ3ZpZXcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1Byb2ZpbGUoaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViX2FyY2hpdmUpdGhpcy5zdWJfYXJjaGl2ZS51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAodGhpcy5zdWJfZGV0YWlsKXRoaXMuc3ViX2RldGFpbC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB2aWV3UHJvZmlsZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGV0YWlsJCA9IHRoaXMuX2FsbFZlbmRvci5nZXRBbGxEZXZlbG9wZXJJZChpZCk7XG4gICAgICAgIHRoaXMuc3ViX2RldGFpbCA9IHRoaXMuZGV0YWlsJC5zdWJzY3JpYmUoKGRldGFpbDogYW55KT0+IHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRldGFpbF92ZW5kb3IgPSBkZXRhaWwuZGF0YS5kZXZlbG9wZXI7XG4gICAgICAgICAgICB0aGlzLmFwcHMgPSBkZXRhaWwuYXBwcztcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nX2RldGFpbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFyY2hpdmVfYWNjb3VudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYXJjaGl2ZV9zdWNjZXNzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICB1bmFyY2hpdmVfc3VjY2Vzczpib29sZWFuID0gZmFsc2U7XG4gICAgZXJyb3JTdGF0dXM6Ym9vbGVhbjtcbiAgICBlcnJvclRleHQ6c3RyaW5nO1xuICAgIHVzZXJJZDpudW1iZXI7XG4gICAgc3RhdHVzOnN0cmluZztcblxuICAgIGNvbmZpcm1BcmNoaXZlQWNjb3VudCh1c2VySWQ6IGFueSwgc3RhdHVzOmFueSl7XG4gICAgICAgIHRoaXMuYXJjaGl2ZV9zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5hcmNoaXZlX3N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIGFyY2hpdmVBY2NvdW50KHVzZXJJZDogYW55LCBzdGF0dXM6YW55KSB7XG4gICAgICAgIHRoaXMuYXJjaGl2ZV9hY2NvdW50JCA9IHRoaXMuX2FjY291bnRTZXJ2aWNlLmFyY2hpdmVBY2NvdW50KHVzZXJJZCwgc3RhdHVzKTtcbiAgICAgICAgdGhpcy5zdWJfYXJjaGl2ZSA9IHRoaXMuYXJjaGl2ZV9hY2NvdW50JC5zdWJzY3JpYmUoKHJlczogYW55KT0+IHtcbiAgICAgICAgICAgIHRoaXMudmlld1Byb2ZpbGUodGhpcy5kZXRhaWxfdmVuZG9yLmlkKTtcblxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgIHRoaXMuYXJjaGl2ZV9zdWNjZXNzID0gdHJ1ZSA/IChzdGF0dXMgPT09ICdhcmNoaXZlJykgOiB0aGlzLnVuYXJjaGl2ZV9zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICByZXNldFBhc3N3b3JkQWNjb3VudCh1c2VySWQ6IGFueSkge1xuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWNjb3VudFNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodXNlcklkKS5zdWJzY3JpYmUoKHJlczogYW55KT0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9EZXRhaWwocHJvZHVjdElkOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
