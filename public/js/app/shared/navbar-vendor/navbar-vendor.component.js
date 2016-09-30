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
var auth_service_1 = require("../api-service/auth/auth.service");
var storage_1 = require('../helpers/storage');
var router_1 = require("@angular/router");
var NavbarVendorComponent = (function () {
    function NavbarVendorComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.username = '';
        this.getNameToken();
    }
    NavbarVendorComponent.prototype.ngOnInit = function () {
    };
    NavbarVendorComponent.prototype.ngOnDestroy = function () {
    };
    NavbarVendorComponent.prototype.signOut = function () {
        this._authService.logout();
    };
    NavbarVendorComponent.prototype.getNameToken = function () {
        this.username = storage_1.storage.getNameToken();
    };
    NavbarVendorComponent.prototype.checkRole = function () {
        return storage_1.storage.getRoleToken();
    };
    NavbarVendorComponent.prototype.goToVendorDashboard = function () {
        this._router.navigate(["vendor/dashboard"]);
    };
    NavbarVendorComponent.prototype.goToDirectory = function () {
        this._router.navigate([""]);
    };
    NavbarVendorComponent.prototype.goToEditCompanyProfile = function () {
        this._router.navigate(["vendor/profile"]);
    };
    NavbarVendorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-vendor-component',
            templateUrl: 'navbar-vendor.component.html',
            styleUrls: ['navbar-vendor.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], NavbarVendorComponent);
    return NavbarVendorComponent;
}());
exports.NavbarVendorComponent = NavbarVendorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXItdmVuZG9yL25hdmJhci12ZW5kb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsNkJBQTBCLGtDQUFrQyxDQUFDLENBQUE7QUFDN0Qsd0JBQXNCLG9CQUFvQixDQUFDLENBQUE7QUFDM0MsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFVdkM7SUFJSSwrQkFBb0IsWUFBeUIsRUFDekIsT0FBZTtRQURmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFIbkMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUtsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMkNBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtREFBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0RBQXNCLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTlDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7OzZCQUFBO0lBMENGLDRCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSw2QkFBcUIsd0JBd0NqQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9uYXZiYXItdmVuZG9yL25hdmJhci12ZW5kb3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25hdmJhci12ZW5kb3ItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci12ZW5kb3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduYXZiYXItdmVuZG9yLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJWZW5kb3JDb21wb25lbnQge1xuXG4gICAgdXNlcm5hbWU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgICAgICAgdGhpcy5nZXROYW1lVG9rZW4oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgIH1cblxuICAgIHNpZ25PdXQoKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGdldE5hbWVUb2tlbigpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKCkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRSb2xlVG9rZW4oKTtcbiAgICB9XG5cbiAgICBnb1RvVmVuZG9yRGFzaGJvYXJkKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvZGFzaGJvYXJkYF0pO1xuICAgIH1cblxuICAgIGdvVG9EaXJlY3RvcnkoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGBdKTtcbiAgICB9XG5cbiAgICBnb1RvRWRpdENvbXBhbnlQcm9maWxlKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvcHJvZmlsZWBdKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
