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
        this._router.navigate([("/product/" + (productId - 1))]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXRELDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELDJCQUFtQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTFDLHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBc0JJLHlCQUFvQixPQUFlLEVBQ2YsRUFBZSxFQUNmLFlBQXlCLEVBQ3pCLGVBQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBcEJuRCx1QkFBa0IsR0FBVyxrQ0FBa0MsQ0FBQztRQVNoRSxNQUFNO1FBQ04sbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUErQmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFyQlYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFD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QUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQTNITDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O3VCQUFBO0lBd0hGLHNCQUFDO0FBQUQsQ0F0SEEsQUFzSEMsSUFBQTtBQXRIWSx1QkFBZSxrQkFzSDNCLENBQUEiLCJmaWxlIjoic2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7UHJvZHVjdFRhZ3N9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0LXRhZy5tb2RlbCc7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25hdmJhci1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmF2YmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuXG4gICAgLy8gQFZpZXdDaGlsZCgnbXlNb2RhbFNpZ25pbicpIHB1YmxpYyBteU1vZGFsU2lnbmluOiBNb2RhbERpcmVjdGl2ZTtcbiAgICAvLyBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIG1vZGFsX3NpZ25pbl90aXRsZTogc3RyaW5nID0gJ1NpZ24gaW4gd2l0aCBNYXJrZXRwbGFjZSBBY2NvdW50JztcblxuICAgIC8vU2V0IFVzZXJuYW1lIGZvciBuYXZiZXJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuXG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgJGF1dGhTZXJ2aWNlOiBPYnNlcnZhYmxlPGFueT47XG5cblxuICAgIC8vVGFnc1xuICAgIGRlcGFydG1lbnRzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gICAgaW5kdXN0cmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuICAgIGNhdGVnb3JpZXNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcblxuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSBmYi5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWycnXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJyddXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5hbWVUb2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViKSB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG9uUmVmcmVzaCgpIHtcblxuICAgIH1cblxuICAgIGxvZ2luID0gZmFsc2U7XG5cbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihudWxsLCB0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQpO1xuXG4gICAgICAgIHRoaXMuJGF1dGhTZXJ2aWNlID0gdGhpcy5fYXV0aFNlcnZpY2UubG9naW4odmFsdWUpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuJGF1dGhTZXJ2aWNlLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRBdXRoVG9rZW4ocmVzLmRhdGFbJ3Rva2VuJ10pO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldFJvbGVUb2tlbihyZXMuZGF0YVsncm9sZSddKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXROYW1lVG9rZW4ocmVzLmRhdGFbJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlcy5kYXRhWydpZCddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICAgIH1cblxuICAgIHNpbmdJbigpIHtcblxuICAgIH1cblxuICAgIHNpZ25PdXQoKSB7XG4gICAgICAgIHRoaXMubG9naW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZVRva2VuKCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gc3RvcmFnZS5nZXROYW1lVG9rZW4oKTtcbiAgICB9XG5cbiAgICBjaGVja1JvbGUoKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldFJvbGVUb2tlbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKCkuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGBdKTtcbiAgICB9XG5cbiAgICBnb1RvUHJvZHVjdExpc3QocHJvZHVjdElkOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3QvJHtwcm9kdWN0SWQgLSAxfWBdKTtcbiAgICB9XG5cbiAgICBnb1RvVmVuZG9yKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvZGFzaGJvYXJkYF0pO1xuICAgIH1cblxuICAgIGdvVG9BZG1pbigpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKChbYGFkbWluL2Rhc2hib2FyZGBdKSk7XG4gICAgfVxuXG4gICAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgICAgICAvLyB0aGlzLmhpZGVDaGlsZE1vZGFsKCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGF1dGgvcmVnaXN0ZXJgXSk7XG4gICAgfVxuXG4gICAgZ29Ub0ZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICAvLyB0aGlzLmhpZGVDaGlsZE1vZGFsKCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGF1dGgvZm9yZ290LXBhc3N3b3JkYF0pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
