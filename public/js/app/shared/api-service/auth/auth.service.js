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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var storage_1 = require('../../helpers/storage');
var request_1 = require('../../helpers/request');
var config = require('../../config/api.config');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var translate_service_1 = require("../../../translate/translate.service");
var AuthService = (function () {
    function AuthService(_http, _router, translateService) {
        this._http = _http;
        this._router = _router;
        this.translateService = translateService;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        return this._http.post(config.apiUrl + "register", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        return this._http.post(config.apiUrl + "login", body, { headers: request_1.request.getJsonHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!storage_1.storage.getAuthToken();
    };
    AuthService.prototype.logout = function () {
        storage_1.storage.removeAuthToken();
        this.translateService.use('en');
        this._router.navigate(['/']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, translate_service_1.TranslateService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxJQUFPLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBRW5ELFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsa0NBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFHdEU7SUFFRSxxQkFBcUIsS0FBVyxFQUFVLE9BQWUsRUFBVSxnQkFBa0M7UUFBaEYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUd6Ryw0QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFNLENBQUMsTUFBTSxhQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQzthQUM1RixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLE1BQU0sVUFBTyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDekYsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsR0FBYTtRQUMvQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ2hELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLGlCQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXhDSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBeUNiLGtCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSxtQkFBVyxjQXdDdkIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9hcGkuY29uZmlnJyk7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG4gIHJlczphbnlbXTtcblxuICBzaWdudXAodXNlcjogT2JqZWN0KSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29uZmlnLmFwaVVybH1yZWdpc3RlcmAsIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfWxvZ2luYCwgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG5cbiAgaXNMb2dnZWRJbigpIHtcbiAgICByZXR1cm4gISFzdG9yYWdlLmdldEF1dGhUb2tlbigpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHN0b3JhZ2UucmVtb3ZlQXV0aFRva2VuKCk7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZSgnZW4nKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
