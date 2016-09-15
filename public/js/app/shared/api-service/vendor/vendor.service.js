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
var request_1 = require('../../helpers/request');
var config = require('../../config/api.config');
require('rxjs/add/operator/cache');
var VendorService = (function () {
    function VendorService(_http) {
        this._http = _http;
        this.vendor = [];
    }
    VendorService.prototype.getVendorProfile = function () {
        return this._http.get(config.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data.developer_profile[0];
            var objs = [];
            objs.push(data);
            return objs;
        })
            .catch(this.handleError);
    };
    VendorService.prototype.getOrganizationProfile = function () {
        return this._http.get(config.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data.organization_profile[0];
            var objs = [];
            objs.push(data);
            return objs;
        })
            .catch(this.handleError);
    };
    VendorService.prototype.updateVendorProfile = function (vendor) {
        var body = JSON.stringify(vendor);
        return this._http.put(config.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    VendorService.prototype.resetPasswordAccount = function (value) {
        var body = JSON.stringify(value);
        return this._http.put(config.apiUrl + "password/reset?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    VendorService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    VendorService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    VendorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0Msd0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsd0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsSUFBTyxNQUFNLFdBQVcseUJBQXlCLENBQUMsQ0FBQztBQUNuRCxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFJakM7SUFJSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQUd0QixDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdDQUEyQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ3JGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdDQUEyQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ3JGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLE1BQWM7UUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLE1BQU0sZ0NBQTJCLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ3JGLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7YUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCLFVBQXFCLEtBQVU7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLE1BQU0sNkJBQXdCLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ2xGLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7YUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBR08sbUNBQVcsR0FBbkIsVUFBb0IsR0FBYTtRQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztZQUN4QyxLQUFLLENBQUMsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDNUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtRQUNoRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTNETDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBNERiLG9CQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSxxQkFBYSxnQkEyRHpCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaS1zZXJ2aWNlL3ZlbmRvci92ZW5kb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcbmltcG9ydCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcvYXBpLmNvbmZpZycpO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYWNoZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uLy4uL21vZGVscy92ZW5kb3IubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbmRvclNlcnZpY2Uge1xuXG4gICAgdmVuZG9yOiBWZW5kb3JbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldFZlbmRvclByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgICAgICAgLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YS5kZXZlbG9wZXJfcHJvZmlsZVswXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogVmVuZG9yW10gPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIGdldE9yZ2FuaXphdGlvblByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgICAgICAgLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YS5vcmdhbml6YXRpb25fcHJvZmlsZVswXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogVmVuZG9yW10gPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbmRvclByb2ZpbGUodmVuZG9yOiBWZW5kb3IpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHZlbmRvcik7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgICAgYm9keSwge2hlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKX0pLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkQWNjb3VudCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfXBhc3N3b3JkL3Jlc2V0P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgICAgYm9keSwge2hlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKX0pLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICAgICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
