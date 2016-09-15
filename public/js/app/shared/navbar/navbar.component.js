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
var forms_1 = require('@angular/forms');
var auth_service_1 = require("../api-service/auth/auth.service");
var user_model_1 = require('../models/user.model');
var storage_1 = require('../helpers/storage');
var product_service_1 = require("../api-service/product/product.service");
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(_router, fb, _authService, _productService) {
        this._router = _router;
        this.fb = fb;
        this._authService = _authService;
        this._productService = _productService;
        this.modal_signin_title = 'Sign in with Marketplace Account';
        //Tags
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.login = false;
        this.myForm = fb.group({
            email: [''],
            password: ['']
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this._authService.isLoggedIn()) {
            this.getNameToken();
        }
        this.getProductTags();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    NavbarComponent.prototype.onRefresh = function () {
    };
    NavbarComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var user = new user_model_1.User(null, this.myForm.value.email, this.myForm.value.password);
        this.$authService = this._authService.login(value);
        this.sub = this.$authService.subscribe(function (res) {
            if (res.status === 'success') {
                storage_1.storage.setAuthToken(res.data['token']);
                storage_1.storage.setRoleToken(res.data['role']);
                storage_1.storage.setNameToken(res.data['name']);
                localStorage.setItem('id', res.data['id']);
                _this.login = true;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    NavbarComponent.prototype.singIn = function () {
    };
    NavbarComponent.prototype.signOut = function () {
        this.login = false;
        this._authService.logout();
    };
    NavbarComponent.prototype.getNameToken = function () {
        this.username = storage_1.storage.getNameToken();
    };
    NavbarComponent.prototype.checkRole = function () {
        return storage_1.storage.getRoleToken();
    };
    NavbarComponent.prototype.getProductTags = function () {
        var _this = this;
        this._productService.getProductTags().subscribe(function (product_tags) {
            _this.departmentsTag = product_tags.departments;
            _this.categoriesTag = product_tags.categories;
            _this.industriesTag = product_tags.industries;
        });
    };
    NavbarComponent.prototype.goToHome = function () {
        this._router.navigate([""]);
    };
    NavbarComponent.prototype.goToProductList = function (productId) {
        this._router.navigate([("/product/" + productId)]);
    };
    NavbarComponent.prototype.goToBrowsePage = function (productId) {
        this._router.navigate([("/product/browse-page/" + productId)]);
    };
    NavbarComponent.prototype.goToVendor = function () {
        this._router.navigate(["vendor/dashboard"]);
    };
    NavbarComponent.prototype.goToAdmin = function () {
        this._router.navigate((["admin/dashboard"]));
    };
    NavbarComponent.prototype.goToRegister = function () {
        // this.hideChildModal();
        this._router.navigate(["auth/register"]);
    };
    NavbarComponent.prototype.goToRegisterVendor = function () {
        // this.hideChildModal();
        this._router.navigate(["auth/register-vendor"]);
    };
    NavbarComponent.prototype.goToForgotPassword = function () {
        // this.hideChildModal();
        this._router.navigate(["auth/forgot-password"]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-component',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, auth_service_1.AuthService, product_service_1.ProductService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXRELDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELDJCQUFtQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTFDLHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBc0JJLHlCQUFvQixPQUFlLEVBQ2YsRUFBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBcEJuRCx1QkFBa0IsR0FBVyxrQ0FBa0MsQ0FBQztRQVNoRSxNQUFNO1FBQ04sbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUErQmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFyQlYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFD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QUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRDQUFrQixHQUFsQjtRQUNJLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBcElMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7dUJBQUE7SUFpSUYsc0JBQUM7QUFBRCxDQS9IQSxBQStIQyxJQUFBO0FBL0hZLHVCQUFlLGtCQStIM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsJztcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbmF2YmFyLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduYXZiYXIuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XG5cbiAgICAvLyBAVmlld0NoaWxkKCdteU1vZGFsU2lnbmluJykgcHVibGljIG15TW9kYWxTaWduaW46IE1vZGFsRGlyZWN0aXZlO1xuICAgIC8vIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbW9kYWxfc2lnbmluX3RpdGxlOiBzdHJpbmcgPSAnU2lnbiBpbiB3aXRoIE1hcmtldHBsYWNlIEFjY291bnQnO1xuXG4gICAgLy9TZXQgVXNlcm5hbWUgZm9yIG5hdmJlclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICAkYXV0aFNlcnZpY2U6IE9ic2VydmFibGU8YW55PjtcblxuXG4gICAgLy9UYWdzXG4gICAgZGVwYXJ0bWVudHNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgICBpbmR1c3RyaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuXG5cbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJyddLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJ11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TmFtZVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgb25SZWZyZXNoKCkge1xuXG4gICAgfVxuXG4gICAgbG9naW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKG51bGwsIHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCk7XG5cbiAgICAgICAgdGhpcy4kYXV0aFNlcnZpY2UgPSB0aGlzLl9hdXRoU2VydmljZS5sb2dpbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy4kYXV0aFNlcnZpY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEF1dGhUb2tlbihyZXMuZGF0YVsndG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0Um9sZVRva2VuKHJlcy5kYXRhWydyb2xlJ10pO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldE5hbWVUb2tlbihyZXMuZGF0YVsnbmFtZSddKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzLmRhdGFbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG4gICAgc2luZ0luKCkge1xuXG4gICAgfVxuXG4gICAgc2lnbk91dCgpIHtcbiAgICAgICAgdGhpcy5sb2dpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICBnZXROYW1lVG9rZW4oKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBzdG9yYWdlLmdldE5hbWVUb2tlbigpO1xuICAgIH1cblxuICAgIGNoZWNrUm9sZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0Um9sZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0VGFncygpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKS5zdWJzY3JpYmUoKHByb2R1Y3RfdGFnczogYW55KT0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcgPSBwcm9kdWN0X3RhZ3MuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuY2F0ZWdvcmllcztcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYF0pO1xuICAgIH1cblxuICAgIGdvVG9Qcm9kdWN0TGlzdChwcm9kdWN0SWQ6IGFueSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdC8ke3Byb2R1Y3RJZH1gXSk7XG4gICAgfVxuXG4gICAgZ29Ub0Jyb3dzZVBhZ2UocHJvZHVjdElkOiBhbnkpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdC9icm93c2UtcGFnZS8ke3Byb2R1Y3RJZH1gXSk7XG4gICAgfVxuXG4gICAgZ29Ub1ZlbmRvcigpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgdmVuZG9yL2Rhc2hib2FyZGBdKTtcbiAgICB9XG5cbiAgICBnb1RvQWRtaW4oKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSgoW2BhZG1pbi9kYXNoYm9hcmRgXSkpO1xuICAgIH1cblxuICAgIGdvVG9SZWdpc3RlcigpIHtcbiAgICAgICAgLy8gdGhpcy5oaWRlQ2hpbGRNb2RhbCgpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BhdXRoL3JlZ2lzdGVyYF0pO1xuICAgIH1cblxuICAgIGdvVG9SZWdpc3RlclZlbmRvcigpIHtcbiAgICAgICAgLy8gdGhpcy5oaWRlQ2hpbGRNb2RhbCgpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BhdXRoL3JlZ2lzdGVyLXZlbmRvcmBdKTtcbiAgICB9XG5cbiAgICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIC8vIHRoaXMuaGlkZUNoaWxkTW9kYWwoKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9mb3Jnb3QtcGFzc3dvcmRgXSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
