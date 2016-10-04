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
var core_2 = require("@angular/core");
var forms_1 = require('@angular/forms');
var auth_service_1 = require("../api-service/auth/auth.service");
var user_model_1 = require('../models/user.model');
var storage_1 = require('../helpers/storage');
var product_service_1 = require("../api-service/product/product.service");
var router_1 = require("@angular/router");
var validation_service_1 = require("../validation/validation.service");
var NavbarComponent = (function () {
    function NavbarComponent(_router, fb, _authService, _productService) {
        this._router = _router;
        this.fb = fb;
        this._authService = _authService;
        this._productService = _productService;
        this.search = new core_1.EventEmitter();
        this.modal_signin_title = 'Sign in with Marketplace Account';
        //Tags
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.login = false;
        this.myForm = fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])]
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
                switch (res.data['role']) {
                    case 'admin':
                        _this.onRouterNavigate('admin/dashboard');
                        break;
                    case 'vendor':
                        _this.onRouterNavigate('vendor/dashboard');
                        break;
                }
            }
        }, function (error) { return _this.errorMessage = error; });
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
    //Search Product
    NavbarComponent.prototype.onSearch = function (value) {
        this._router.navigate([("/product/search/" + value)]);
    };
    NavbarComponent.prototype.goToProductList = function (productId) {
        this._router.navigate([("/product/" + productId)]);
    };
    NavbarComponent.prototype.goToBrowsePage = function (productId) {
        this._router.navigate([("/product/browse-page/" + productId)]);
    };
    NavbarComponent.prototype.onRouterNavigate = function (path) {
        this._router.navigate([("" + path)]);
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavbarComponent.prototype, "search", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1QyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUlsRSw2QkFBMEIsa0NBQWtDLENBQUMsQ0FBQTtBQUM3RCwyQkFBbUIsc0JBQXNCLENBQUMsQ0FBQTtBQUUxQyx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUMzQyxnQ0FBNkIsd0NBQXdDLENBQUMsQ0FBQTtBQUN0RSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxtQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQVVuRTtJQXlCSSx5QkFBb0IsT0FBZSxFQUNmLEVBQWUsRUFDZixZQUF5QixFQUN6QixlQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQXpCbkQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUsvQyx1QkFBa0IsR0FBVyxrQ0FBa0MsQ0FBQztRQVNoRSxNQUFNO1FBQ04sbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUErQmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFyQlYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFDLHNDQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDLGtC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LFdBQVcsQ0FBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7WUFDN0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELGdCQUFnQjtJQUNoQixrQ0FBUSxHQUFSLFVBQVMsS0FBUztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQW1CLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixTQUFjO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBWSxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxTQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsMkJBQXdCLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLElBQVc7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFHLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBcEhEO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQVRiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7dUJBQUE7SUEwSEYsc0JBQUM7QUFBRCxDQXhIQSxBQXdIQyxJQUFBO0FBeEhZLHVCQUFlLGtCQXdIM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsJztcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduYXZiYXItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvLyBAVmlld0NoaWxkKCdteU1vZGFsU2lnbmluJykgcHVibGljIG15TW9kYWxTaWduaW46IE1vZGFsRGlyZWN0aXZlO1xuICAgIC8vIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbW9kYWxfc2lnbmluX3RpdGxlOiBzdHJpbmcgPSAnU2lnbiBpbiB3aXRoIE1hcmtldHBsYWNlIEFjY291bnQnO1xuXG4gICAgLy9TZXQgVXNlcm5hbWUgZm9yIG5hdmJlclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICAkYXV0aFNlcnZpY2U6IE9ic2VydmFibGU8YW55PjtcblxuXG4gICAgLy9UYWdzXG4gICAgZGVwYXJ0bWVudHNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgICBpbmR1c3RyaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuXG5cbiAgICBteUZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdKV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TmFtZVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgb25SZWZyZXNoKCkge1xuXG4gICAgfVxuXG4gICAgbG9naW4gPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKG51bGwsIHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCk7XG5cbiAgICAgICAgdGhpcy4kYXV0aFNlcnZpY2UgPSB0aGlzLl9hdXRoU2VydmljZS5sb2dpbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy4kYXV0aFNlcnZpY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEF1dGhUb2tlbihyZXMuZGF0YVsndG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0Um9sZVRva2VuKHJlcy5kYXRhWydyb2xlJ10pO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldE5hbWVUb2tlbihyZXMuZGF0YVsnbmFtZSddKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzLmRhdGFbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocmVzLmRhdGFbJ3JvbGUnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWRtaW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3V0ZXJOYXZpZ2F0ZSgnYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd2ZW5kb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3V0ZXJOYXZpZ2F0ZSgndmVuZG9yL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBzaWduT3V0KCkge1xuICAgICAgICB0aGlzLmxvZ2luID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGdldE5hbWVUb2tlbigpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKCkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRSb2xlVG9rZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9TZWFyY2ggUHJvZHVjdFxuICAgIG9uU2VhcmNoKHZhbHVlOmFueSl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0L3NlYXJjaC8ke3ZhbHVlfWBdKTtcbiAgICB9XG5cbiAgICBnb1RvUHJvZHVjdExpc3QocHJvZHVjdElkOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICAgIH1cblxuICAgIGdvVG9Ccm93c2VQYWdlKHByb2R1Y3RJZDogYW55KXtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvYnJvd3NlLXBhZ2UvJHtwcm9kdWN0SWR9YF0pO1xuICAgIH1cblxuICAgIG9uUm91dGVyTmF2aWdhdGUocGF0aDpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2Ake3BhdGh9YF0pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
