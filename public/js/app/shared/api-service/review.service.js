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
var storage_1 = require('../helpers/storage');
var request_1 = require('../helpers/request');
var config = require('../config/api.config');
require('rxjs/add/operator/cache');
var ReviewService = (function () {
    function ReviewService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    ReviewService.prototype.onReview = function (review) {
        var body = JSON.stringify(review);
        return this._http.post(config.apiUrl + "product/review?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReviewService.prototype.getReviewById = function (id) {
        return this._http.get(config.apiUrl + "product/" + id + "/review?token=" + storage_1.storage.getAuthToken()).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReviewService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ReviewService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9yZXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3Qyx3QkFBd0Isb0JBQW9CLENBQUMsQ0FBQTtBQUM3Qyx3QkFBd0Isb0JBQW9CLENBQUMsQ0FBQTtBQUM3QyxJQUFPLE1BQU0sV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2hELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUlqQztJQUVFLHVCQUFxQixLQUFXLEVBQVUsT0FBZTtRQUFwQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFHN0QsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLE1BQU0sNkJBQXdCLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ3JGLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7YUFDbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLEVBQWtCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxNQUFNLENBQUMsTUFBTSxnQkFBVyxFQUFFLHNCQUFpQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ2xHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDL0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBcUIsS0FBVTtRQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztZQUMxQyxLQUFLLENBQUMsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtRQUNoRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTlCSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBZ0NiLG9CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxxQkFBYSxnQkErQnpCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaS1zZXJ2aWNlL3Jldmlldy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9hcGkuY29uZmlnJyk7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhY2hlJztcbmltcG9ydCB7UmV2aWV3fSBmcm9tIFwiLi4vbW9kZWxzL3Jldmlldy5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV2aWV3U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuICByZXM6YW55W107XG5cbiAgb25SZXZpZXcocmV2aWV3OiBSZXZpZXcpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocmV2aWV3KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9yZXZpZXc/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRSZXZpZXdCeUlkKGlkOm51bWJlciB8IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC8ke2lkfS9yZXZpZXc/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApLmNhY2hlKClcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
