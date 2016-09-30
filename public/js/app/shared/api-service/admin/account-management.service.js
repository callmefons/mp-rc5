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
require('rxjs/add/operator/cache');
var AccountManagementService = (function () {
    function AccountManagementService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    AccountManagementService.prototype.archiveAccount = function (userId, status) {
        return this._http.post("" + config.apiUrl + status + "/user/" + userId + "?token=" + storage_1.storage.getAuthToken(), { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountManagementService.prototype.resetPasswordAccount = function (userId) {
        return this._http.post(config.apiUrl + "password/reset/user/" + userId + "?token=" + storage_1.storage.getAuthToken(), { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    //For user forgot password
    AccountManagementService.prototype.forgotPassword = function (email) {
        var body = JSON.stringify(email);
        return this._http.post(config.apiUrl + "password/email", body, { headers: request_1.request.getJsonHeaders() })
            .cache()
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AccountManagementService.prototype.newPassword = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(config.apiUrl + "password/reset/forgot", body, { headers: request_1.request.getJsonHeaders() })
            .cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountManagementService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AccountManagementService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AccountManagementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AccountManagementService);
    return AccountManagementService;
}());
exports.AccountManagementService = AccountManagementService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9hZG1pbi9hY2NvdW50LW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxJQUFPLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25ELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQztJQUdFLGtDQUFxQixLQUFXLEVBQVUsT0FBZTtRQUFwQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFHN0QsaURBQWMsR0FBZCxVQUFlLE1BQVUsRUFBRSxNQUFVO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxjQUFTLE1BQU0sZUFBVSxpQkFBTyxDQUFDLFlBQVksRUFBSSxFQUM3RixFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7YUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdURBQW9CLEdBQXBCLFVBQXFCLE1BQVU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLE1BQU0sQ0FBQyxNQUFNLDRCQUF1QixNQUFNLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDbEcsRUFBRSxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDBCQUEwQjtJQUMxQixpREFBYyxHQUFkLFVBQWUsS0FBUztRQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFNLENBQUMsTUFBTSxtQkFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2FBQ2xHLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLEtBQVM7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLE1BQU0sMEJBQXVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQzthQUN6RyxLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHTyw4Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDhDQUFXLEdBQW5CLFVBQXFCLEtBQVU7UUFDN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFqREg7UUFBQyxpQkFBVSxFQUFFOztnQ0FBQTtJQWtEYiwrQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksZ0NBQXdCLDJCQWlEcEMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvcmVxdWVzdCc7XG5pbXBvcnQgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL2FwaS5jb25maWcnKTtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2FjaGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlIHtcblxuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cbiAgcmVzcG9uc2U6YW55O1xuXG4gIGFyY2hpdmVBY2NvdW50KHVzZXJJZDphbnksIHN0YXR1czphbnkpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9JHtzdGF0dXN9L3VzZXIvJHt1c2VySWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gXG4gICAgICAsIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pLmNhY2hlKClcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmRBY2NvdW50KHVzZXJJZDphbnkpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29uZmlnLmFwaVVybH1wYXNzd29yZC9yZXNldC91c2VyLyR7dXNlcklkfT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YFxuICAgICAgLCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL0ZvciB1c2VyIGZvcmdvdCBwYXNzd29yZFxuICBmb3Jnb3RQYXNzd29yZChlbWFpbDphbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbWFpbCk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfXBhc3N3b3JkL2VtYWlsYCwgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG5ld1Bhc3N3b3JkKHZhbHVlOmFueSl7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9cGFzc3dvcmQvcmVzZXQvZm9yZ290YCwgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
