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
var NavbarCustomerComponent = (function () {
    function NavbarCustomerComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.username = '';
        this.getNameToken();
    }
    NavbarCustomerComponent.prototype.ngOnInit = function () {
    };
    NavbarCustomerComponent.prototype.ngOnDestroy = function () {
    };
    NavbarCustomerComponent.prototype.signOut = function () {
        this._authService.logout();
    };
    NavbarCustomerComponent.prototype.getNameToken = function () {
        this.username = storage_1.storage.getNameToken();
    };
    NavbarCustomerComponent.prototype.checkRole = function () {
        return storage_1.storage.getRoleToken();
    };
    NavbarCustomerComponent.prototype.goToCustomerDashboard = function () {
        this._router.navigate(["customer/dashboard"]);
    };
    NavbarCustomerComponent.prototype.goToDirectory = function () {
        this._router.navigate([""]);
    };
    NavbarCustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-customer-component',
            templateUrl: 'navbar-customer.component.html',
            styleUrls: ['navbar-customer.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], NavbarCustomerComponent);
    return NavbarCustomerComponent;
}());
exports.NavbarCustomerComponent = NavbarCustomerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uYXZiYXItY3VzdG9tZXIvbmF2YmFyLWN1c3RvbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDZCQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBSUksaUNBQ1ksWUFBd0IsRUFDeEIsT0FBYztRQURkLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFKMUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQU1qQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELDBDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCx5Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsOENBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkNBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFHRCx1REFBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsK0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBN0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzs7K0JBQUE7SUF5Q0YsOEJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLCtCQUF1QiwwQkF1Q25DLENBQUEiLCJmaWxlIjoic2hhcmVkL25hdmJhci1jdXN0b21lci9uYXZiYXItY3VzdG9tZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25hdmJhci1jdXN0b21lci1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLWN1c3RvbWVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmF2YmFyLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDdXN0b21lckNvbXBvbmVudCB7XG5cbiAgICB1c2VybmFtZTpzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcil7XG5cbiAgICAgICAgdGhpcy5nZXROYW1lVG9rZW4oKTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgIH1cblxuICAgIHNpZ25PdXQoKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGdldE5hbWVUb2tlbigpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UuZ2V0TmFtZVRva2VuKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKCl7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldFJvbGVUb2tlbigpO1xuICAgIH1cblxuXG4gICAgZ29Ub0N1c3RvbWVyRGFzaGJvYXJkKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGN1c3RvbWVyL2Rhc2hib2FyZGBdKTtcbiAgICB9XG5cbiAgICBnb1RvRGlyZWN0b3J5KCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGBdKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
