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
var auth_service_1 = require("../shared/api-service/auth/auth.service");
var storage_1 = require("../shared/helpers/storage");
var router_1 = require("@angular/router");
var AuthComponent = (function () {
    function AuthComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.username = '';
        this.getNameToken();
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.ngOnDestroy = function () {
    };
    AuthComponent.prototype.signOut = function () {
        this._authService.logout();
    };
    AuthComponent.prototype.getNameToken = function () {
        this.username = storage_1.storage.getNameToken();
    };
    AuthComponent.prototype.checkRole = function () {
        return storage_1.storage.getRoleToken();
    };
    AuthComponent.prototype.goToAdminDashboard = function () {
        this._router.navigate(["admin/dashboard"]);
    };
    AuthComponent.prototype.goToVendorDashboard = function () {
        this._router.navigate(["admin/vendor/1/index"]);
    };
    AuthComponent.prototype.goToDirectory = function () {
        this._router.navigate([""]);
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin',
            templateUrl: 'templates/auth.component.html',
            styleUrls: ['styles/auth.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSw2QkFBMEIseUNBQXlDLENBQUMsQ0FBQTtBQUNwRSx3QkFBc0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNsRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVV2QztJQUtFLHVCQUNVLFlBQXdCLEVBQ3hCLE9BQWM7UUFEZCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBSnhCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFLbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFoREg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7cUJBQUE7SUE2Q0Ysb0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLHFCQUFhLGdCQTJDekIsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hdXRoLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cbiAgdXNlcm5hbWU6c3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcil7XG4gICAgdGhpcy5nZXROYW1lVG9rZW4oKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKXtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgfVxuXG4gIHNpZ25PdXQoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cblxuICBnZXROYW1lVG9rZW4oKSB7XG4gICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gIH1cblxuICBjaGVja1JvbGUoKXtcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRSb2xlVG9rZW4oKTtcbiAgfVxuXG4gIGdvVG9BZG1pbkRhc2hib2FyZCgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2Rhc2hib2FyZGBdKTtcbiAgfVxuXG4gIGdvVG9WZW5kb3JEYXNoYm9hcmQoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BhZG1pbi92ZW5kb3IvMS9pbmRleGBdKTtcbiAgfVxuXG4gIGdvVG9EaXJlY3RvcnkoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BgXSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
