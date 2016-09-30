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
var validation_service_1 = require("../validation/validation.service");
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
    NavbarComponent.prototype.goToProductList = function (productId) {
        this._router.navigate([("/product/" + productId)]);
    };
    NavbarComponent.prototype.goToBrowsePage = function (productId) {
        this._router.navigate([("/product/browse-page/" + productId)]);
    };
    NavbarComponent.prototype.onRouterNavigate = function (path) {
        this._router.navigate([("" + path)]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBSWxFLDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELDJCQUFtQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTFDLHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLG1DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBVW5FO0lBc0JJLHlCQUFvQixPQUFlLEVBQ2YsRUFBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBcEJuRCx1QkFBa0IsR0FBVyxrQ0FBa0MsQ0FBQztRQVNoRSxNQUFNO1FBQ04sbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUErQmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFyQlYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFDLHNDQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsc0NBQWlCLENBQUMsaUJBQWlCLENB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WSxDQUFDLFVBQVUsQ0FBQztZQUM3QyxLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixTQUFjO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBWSxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxTQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsMkJBQXdCLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLElBQVc7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFHLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdkhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7dUJBQUE7SUFvSEYsc0JBQUM7QUFBRCxDQWxIQSxBQWtIQyxJQUFBO0FBbEhZLHVCQUFlLGtCQWtIM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QtdGFnLm1vZGVsJztcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduYXZiYXItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblxuICAgIC8vIEBWaWV3Q2hpbGQoJ215TW9kYWxTaWduaW4nKSBwdWJsaWMgbXlNb2RhbFNpZ25pbjogTW9kYWxEaXJlY3RpdmU7XG4gICAgLy8gZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBtb2RhbF9zaWduaW5fdGl0bGU6IHN0cmluZyA9ICdTaWduIGluIHdpdGggTWFya2V0cGxhY2UgQWNjb3VudCc7XG5cbiAgICAvL1NldCBVc2VybmFtZSBmb3IgbmF2YmVyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcblxuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgICRhdXRoU2VydmljZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cbiAgICAvL1RhZ3NcbiAgICBkZXBhcnRtZW50c1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuICAgIGluZHVzdHJpZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgICBjYXRlZ29yaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG5cblxuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdGlvblNlcnZpY2UuZW1haWxWYWxpZGF0b3JdKV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0aW9uU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcl0pXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5nZXROYW1lVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YikgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG5cbiAgICB9XG5cbiAgICBsb2dpbiA9IGZhbHNlO1xuXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIobnVsbCwgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcblxuICAgICAgICB0aGlzLiRhdXRoU2VydmljZSA9IHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLiRhdXRoU2VydmljZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0QXV0aFRva2VuKHJlcy5kYXRhWyd0b2tlbiddKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRSb2xlVG9rZW4ocmVzLmRhdGFbJ3JvbGUnXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0TmFtZVRva2VuKHJlcy5kYXRhWyduYW1lJ10pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCByZXMuZGF0YVsnaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChyZXMuZGF0YVsncm9sZSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhZG1pbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvdXRlck5hdmlnYXRlKCdhZG1pbi9kYXNoYm9hcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZlbmRvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvdXRlck5hdmlnYXRlKCd2ZW5kb3IvZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICB9XG5cbiAgICBzaW5nSW4oKSB7XG5cbiAgICB9XG5cbiAgICBzaWduT3V0KCkge1xuICAgICAgICB0aGlzLmxvZ2luID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGdldE5hbWVUb2tlbigpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKCkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRSb2xlVG9rZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3RUYWdzKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpLnN1YnNjcmliZSgocHJvZHVjdF90YWdzOiBhbnkpPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Qcm9kdWN0TGlzdChwcm9kdWN0SWQ6IGFueSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdC8ke3Byb2R1Y3RJZH1gXSk7XG4gICAgfVxuXG4gICAgZ29Ub0Jyb3dzZVBhZ2UocHJvZHVjdElkOiBhbnkpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdC9icm93c2UtcGFnZS8ke3Byb2R1Y3RJZH1gXSk7XG4gICAgfVxuXG4gICAgb25Sb3V0ZXJOYXZpZ2F0ZShwYXRoOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYCR7cGF0aH1gXSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
