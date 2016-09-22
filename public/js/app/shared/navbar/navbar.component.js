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
    NavbarComponent.prototype.goToCustomer = function () {
        this._router.navigate(["customer/dashboard"]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXRELDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELDJCQUFtQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTFDLHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBc0JJLHlCQUFvQixPQUFlLEVBQ2YsRUFBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBcEJuRCx1QkFBa0IsR0FBVyxrQ0FBa0MsQ0FBQztRQVNoRSxNQUFNO1FBQ04sbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUErQmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFyQlYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFD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QUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDRDQUFrQixHQUFsQjtRQUNJLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBR0QsNENBQWtCLEdBQWxCO1FBQ0kseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUF6SUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOzt1QkFBQTtJQXNJRixzQkFBQztBQUFELENBcElBLEFBb0lDLElBQUE7QUFwSVksdUJBQWUsa0JBb0kzQixDQUFBIiwiZmlsZSI6InNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge1Byb2R1Y3RUYWdzfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWwnO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduYXZiYXItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblxuICAgIC8vIEBWaWV3Q2hpbGQoJ215TW9kYWxTaWduaW4nKSBwdWJsaWMgbXlNb2RhbFNpZ25pbjogTW9kYWxEaXJlY3RpdmU7XG4gICAgLy8gZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBtb2RhbF9zaWduaW5fdGl0bGU6IHN0cmluZyA9ICdTaWduIGluIHdpdGggTWFya2V0cGxhY2UgQWNjb3VudCc7XG5cbiAgICAvL1NldCBVc2VybmFtZSBmb3IgbmF2YmVyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcblxuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgICRhdXRoU2VydmljZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cbiAgICAvL1RhZ3NcbiAgICBkZXBhcnRtZW50c1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuICAgIGluZHVzdHJpZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgICBjYXRlZ29yaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG5cblxuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJ10sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5nZXROYW1lVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YikgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG5cbiAgICB9XG5cbiAgICBsb2dpbiA9IGZhbHNlO1xuXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIobnVsbCwgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcblxuICAgICAgICB0aGlzLiRhdXRoU2VydmljZSA9IHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLiRhdXRoU2VydmljZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0QXV0aFRva2VuKHJlcy5kYXRhWyd0b2tlbiddKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRSb2xlVG9rZW4ocmVzLmRhdGFbJ3JvbGUnXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0TmFtZVRva2VuKHJlcy5kYXRhWyduYW1lJ10pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCByZXMuZGF0YVsnaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBzaW5nSW4oKSB7XG5cbiAgICB9XG5cbiAgICBzaWduT3V0KCkge1xuICAgICAgICB0aGlzLmxvZ2luID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGdldE5hbWVUb2tlbigpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKCkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRSb2xlVG9rZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BgXSk7XG4gICAgfVxuXG4gICAgZ29Ub1Byb2R1Y3RMaXN0KHByb2R1Y3RJZDogYW55KSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0LyR7cHJvZHVjdElkfWBdKTtcbiAgICB9XG5cbiAgICBnb1RvQnJvd3NlUGFnZShwcm9kdWN0SWQ6IGFueSl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0L2Jyb3dzZS1wYWdlLyR7cHJvZHVjdElkfWBdKTtcbiAgICB9XG5cbiAgICBnb1RvQ3VzdG9tZXIoKXtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgY3VzdG9tZXIvZGFzaGJvYXJkYF0pO1xuICAgIH1cblxuICAgIGdvVG9WZW5kb3IoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHZlbmRvci9kYXNoYm9hcmRgXSk7XG4gICAgfVxuXG4gICAgZ29Ub0FkbWluKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoKFtgYWRtaW4vZGFzaGJvYXJkYF0pKTtcbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgICAgIC8vIHRoaXMuaGlkZUNoaWxkTW9kYWwoKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9yZWdpc3RlcmBdKTtcbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXJWZW5kb3IoKSB7XG4gICAgICAgIC8vIHRoaXMuaGlkZUNoaWxkTW9kYWwoKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9yZWdpc3Rlci12ZW5kb3JgXSk7XG4gICAgfVxuXG5cbiAgICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIC8vIHRoaXMuaGlkZUNoaWxkTW9kYWwoKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYXV0aC9mb3Jnb3QtcGFzc3dvcmRgXSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
