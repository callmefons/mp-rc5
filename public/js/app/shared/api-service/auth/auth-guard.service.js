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
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = false;
    }
    AuthGuard.prototype.canActivate = function (
        // Not using but worth knowing about
        next, state) {
        this.isLoggedIn();
        if (this.login) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AuthGuard.prototype.isLoggedIn = function () {
        this.login = this.authService.isLoggedIn();
        // console.log(`Login ${this.login}`);
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHVCQUdnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDZCQUF1QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBR3hEO0lBQ0UsbUJBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEUsVUFBSyxHQUFXLEtBQUssQ0FBQztJQURpRCxDQUFDO0lBRXhFLCtCQUFXLEdBQVg7UUFDRSxvQ0FBb0M7UUFDcEMsSUFBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxzQ0FBc0M7SUFDeEMsQ0FBQztJQWxCSDtRQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0lBb0JiLGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxpQkFBUyxZQW1CckIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSxcbiAgUm91dGVyLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG4gIGxvZ2luOmJvb2xlYW4gPSBmYWxzZTtcbiAgY2FuQWN0aXZhdGUoXG4gICAgLy8gTm90IHVzaW5nIGJ1dCB3b3J0aCBrbm93aW5nIGFib3V0XG4gICAgbmV4dDogIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKSB7XG4gICAgdGhpcy5pc0xvZ2dlZEluKCk7XG4gICAgaWYgKHRoaXMubG9naW4pIHsgcmV0dXJuIHRydWU7IH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0xvZ2dlZEluKCkge1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgTG9naW4gJHt0aGlzLmxvZ2lufWApO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
