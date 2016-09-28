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
var NavbarAdminComponent = (function () {
    function NavbarAdminComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.username = '';
        this.getNameToken();
    }
    NavbarAdminComponent.prototype.ngOnInit = function () {
    };
    NavbarAdminComponent.prototype.ngOnDestroy = function () {
    };
    NavbarAdminComponent.prototype.signOut = function () {
        this._authService.logout();
    };
    NavbarAdminComponent.prototype.getNameToken = function () {
        this.username = storage_1.storage.getNameToken();
    };
    NavbarAdminComponent.prototype.checkRole = function () {
        return storage_1.storage.getRoleToken();
    };
    NavbarAdminComponent.prototype.goToAdminDashboard = function () {
        this._router.navigate(["admin/dashboard"]);
    };
    NavbarAdminComponent.prototype.goToVendorDashboard = function () {
        this._router.navigate(["admin/vendor/1/index"]);
    };
    NavbarAdminComponent.prototype.goToAdminSettings = function () {
        this._router.navigate(["admin/settings"]);
    };
    NavbarAdminComponent.prototype.goToDirectory = function () {
        this._router.navigate([""]);
    };
    NavbarAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-admin-component',
            templateUrl: 'navbar-admin.component.html',
            styleUrls: ['navbar-admin.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());
exports.NavbarAdminComponent = NavbarAdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXItYWRtaW4vbmF2YmFyLWFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBSUksOEJBQ1ksWUFBd0IsRUFDeEIsT0FBYztRQURkLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFKMUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQU1qQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMENBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpREFBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFwREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDOzs0QkFBQTtJQWdERiwyQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksNEJBQW9CLHVCQThDaEMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbmF2YmFyLWFkbWluLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXItYWRtaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduYXZiYXItYWRtaW4uY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIE5hdmJhckFkbWluQ29tcG9uZW50IHtcblxuICAgIHVzZXJuYW1lOnN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXtcblxuICAgICAgICB0aGlzLmdldE5hbWVUb2tlbigpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgfVxuXG4gICAgc2lnbk91dCgpIHtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZVRva2VuKCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gc3RvcmFnZS5nZXROYW1lVG9rZW4oKTtcbiAgICB9XG5cbiAgICBjaGVja1JvbGUoKXtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0Um9sZVRva2VuKCk7XG4gICAgfVxuXG4gICAgZ29Ub0FkbWluRGFzaGJvYXJkKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2Rhc2hib2FyZGBdKTtcbiAgICB9XG5cbiAgICBnb1RvVmVuZG9yRGFzaGJvYXJkKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3ZlbmRvci8xL2luZGV4YF0pO1xuICAgIH1cblxuICAgIGdvVG9BZG1pblNldHRpbmdzKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3NldHRpbmdzYF0pO1xuICAgIH1cblxuICAgIGdvVG9EaXJlY3RvcnkoKXtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYF0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
