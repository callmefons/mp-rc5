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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var storage_1 = require('../../helpers/storage');
var config = require('../../config/api.config');
require('rxjs/add/operator/cache');
var AllVendorService = (function () {
    function AllVendorService(_http) {
        this._http = _http;
    }
    AllVendorService.prototype.getAllDeveloper = function () {
        return this._http.get(config.apiUrl + "developers?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data;
            return data;
        })
            .catch(this.handleError);
    };
    AllVendorService.prototype.getAllDeveloperId = function (id) {
        return this._http.get(config.apiUrl + "developer/profile/" + id + "?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    AllVendorService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AllVendorService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AllVendorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AllVendorService);
    return AllVendorService;
}());
exports.AllVendorService = AllVendorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvYWxsLXZlbmRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHdCQUF3Qix1QkFBdUIsQ0FBQyxDQUFBO0FBRWhELElBQU8sTUFBTSxXQUFXLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBR2pDO0lBR0UsMEJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQ2hDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLHlCQUFvQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2hGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsRUFBbUI7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDBCQUFxQixFQUFFLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUM3RixLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQXFCLEtBQVU7UUFDN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDaEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFwQ0g7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQXFDYix1QkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksd0JBQWdCLG1CQW9DNUIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvdmVuZG9yL2FsbC12ZW5kb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcbmltcG9ydCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcvYXBpLmNvbmZpZycpO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYWNoZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGxWZW5kb3JTZXJ2aWNlIHtcblxuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gIH1cblxuICBnZXRBbGxEZXZlbG9wZXIoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1kZXZlbG9wZXJzP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldEFsbERldmVsb3BlcklkKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1kZXZlbG9wZXIvcHJvZmlsZS8ke2lkfT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG4gICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
