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
    AdminVendorsComponent.prototype.archiveAccount = function (userId) {
        var _this = this;
        this.archive_account$ = this._accountService.archiveAccount(userId);
        this.sub_archive = this.archive_account$.subscribe(function (res) {
            _this.viewProfile(_this.detail_vendor.id);
            _this.archive_account = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLXZlbmRvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFNM0QsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsbUNBQStCLGlEQUFpRCxDQUFDLENBQUE7QUFDakYsMkNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFVaEc7SUFHSSwrQkFBb0IsZUFBK0IsRUFDL0IsVUFBNEIsRUFDNUIsZUFBeUMsRUFDekMsT0FBYyxFQUNkLEtBQXFCO1FBSnJCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSXpDLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBc0QvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQVVqQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQW5FL0IsQ0FBQztJQWlCRCx3Q0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbEJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDdkIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFNBQWM7Z0JBQ2xDLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN4QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztZQUdILEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUdPLDJDQUFXLEdBQW5CLFVBQW9CLEVBQVU7UUFBOUIsaUJBU0M7UUFSRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDakQsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0MsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRXhCLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtELDhDQUFjLEdBQWQsVUFBZSxNQUFXO1FBQTFCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFDeEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlELG9EQUFvQixHQUFwQixVQUFxQixNQUFXO1FBQWhDLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2pFLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxTQUFnQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFpQixTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTlGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BELENBQUM7OzZCQUFBO0lBMEZGLDRCQUFDO0FBQUQsQ0F4RkEsQUF3RkMsSUFBQTtBQXhGWSw2QkFBcUIsd0JBd0ZqQyxDQUFBIiwiZmlsZSI6ImFkbWluL2FkbWluLXZlbmRvcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci92ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FsbFZlbmRvclNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvdmVuZG9yL2FsbC12ZW5kb3Iuc2VydmljZVwiO1xuaW1wb3J0IHtBY2NvdW50TWFuYWdlbWVudFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtYWRtaW4tdmVuZG9ycycsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWRtaW4tdmVuZG9ycy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hZG1pbi12ZW5kb3JzLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pblZlbmRvcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hbGxWZW5kb3I6IEFsbFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWNjb3VudFNlcnZpY2U6IEFjY291bnRNYW5hZ2VtZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cbiAgICB9XG5cbiAgICBsb2FkaW5nX2RldGFpbDogYm9vbGVhbiA9IHRydWU7XG4gICAgbG9hZGluZ192ZW5kb3I6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN1Yl9kZXRhaWw6IFN1YnNjcmlwdGlvbjtcblxuICAgIHZlbmRvciQ6IE9ic2VydmFibGU8YW55PjtcbiAgICB2ZW5kb3I6IGFueVtdO1xuXG4gICAgZGV0YWlsOiBhbnlbXTtcbiAgICBkZXRhaWwkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZGV0YWlsX3ZlbmRvcjogYW55O1xuICAgIGFwcHM6IGFueSBbXTtcblxuICAgIHN1Yl9hcmNoaXZlOiBTdWJzY3JpcHRpb247XG4gICAgYXJjaGl2ZV9hY2NvdW50JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5zdWJfZGV0YWlsID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICAgICAgbGV0IG1vZGUgPSBwYXJhbXNbJ21vZGUnXTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yJCA9IHRoaXMuX2FsbFZlbmRvci5nZXRBbGxEZXZlbG9wZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvciQuc3Vic2NyaWJlKChkZXZlbG9wZXI6IGFueSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVuZG9yID0gZGV2ZWxvcGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdfdmVuZG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09ICd2aWV3Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQcm9maWxlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJfYXJjaGl2ZSl0aGlzLnN1Yl9hcmNoaXZlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLnN1Yl9kZXRhaWwpdGhpcy5zdWJfZGV0YWlsLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHZpZXdQcm9maWxlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kZXRhaWwkID0gdGhpcy5fYWxsVmVuZG9yLmdldEFsbERldmVsb3BlcklkKGlkKTtcbiAgICAgICAgdGhpcy5zdWJfZGV0YWlsID0gdGhpcy5kZXRhaWwkLnN1YnNjcmliZSgoZGV0YWlsOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWwuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsX3ZlbmRvciA9IGRldGFpbC5kYXRhLmRldmVsb3BlcjtcbiAgICAgICAgICAgIHRoaXMuYXBwcyA9IGRldGFpbC5hcHBzO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdfZGV0YWlsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXJjaGl2ZV9hY2NvdW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhcmNoaXZlQWNjb3VudCh1c2VySWQ6IGFueSkge1xuICAgICAgICB0aGlzLmFyY2hpdmVfYWNjb3VudCQgPSB0aGlzLl9hY2NvdW50U2VydmljZS5hcmNoaXZlQWNjb3VudCh1c2VySWQpO1xuICAgICAgICB0aGlzLnN1Yl9hcmNoaXZlID0gdGhpcy5hcmNoaXZlX2FjY291bnQkLnN1YnNjcmliZSgocmVzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3UHJvZmlsZSh0aGlzLmRldGFpbF92ZW5kb3IuaWQpO1xuICAgICAgICAgICAgdGhpcy5hcmNoaXZlX2FjY291bnQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICByZXNldFBhc3N3b3JkQWNjb3VudCh1c2VySWQ6IGFueSkge1xuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWNjb3VudFNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodXNlcklkKS5zdWJzY3JpYmUoKHJlczogYW55KT0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9EZXRhaWwocHJvZHVjdElkOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
