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
    VendorService.prototype.updateVendorCompany = function (vendor_company) {
        var body = JSON.stringify(vendor_company);
        return this._http.put(config.apiUrl + "developer/organization/profile?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0Msd0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsd0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsSUFBTyxNQUFNLFdBQVcseUJBQXlCLENBQUMsQ0FBQztBQUNuRCxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFLakM7SUFJSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQUd0QixDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdDQUEyQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ3JGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdDQUEyQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ3JGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLE1BQWM7UUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLE1BQU0sZ0NBQTJCLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ3JGLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7YUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLGNBQTZCO1FBQzdDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDZDQUF3QyxpQkFBTyxDQUFDLFlBQVksRUFBSSxFQUNsRyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUlELDRDQUFvQixHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDZCQUF3QixpQkFBTyxDQUFDLFlBQVksRUFBSSxFQUNsRixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdPLG1DQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDN0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDeEMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDaEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFyRUw7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQXNFYixvQkFBQztBQUFELENBckVBLEFBcUVDLElBQUE7QUFyRVkscUJBQWEsZ0JBcUV6QixDQUFBIiwiZmlsZSI6InNoYXJlZC9hcGktc2VydmljZS92ZW5kb3IvdmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gJy4uLy4uL2hlbHBlcnMvcmVxdWVzdCc7XG5pbXBvcnQgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL2FwaS5jb25maWcnKTtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2FjaGUnO1xuaW1wb3J0IHtWZW5kb3J9IGZyb20gXCIuLi8uLi9tb2RlbHMvdmVuZG9yLm1vZGVsXCI7XG5pbXBvcnQge1ZlbmRvckNvbXBhbnl9IGZyb20gXCIuLi8uLi9tb2RlbHMvdmVuZG9yLWNvbXBhbnkubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbmRvclNlcnZpY2Uge1xuXG4gICAgdmVuZG9yOiBWZW5kb3JbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldFZlbmRvclByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgICAgICAgLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YS5kZXZlbG9wZXJfcHJvZmlsZVswXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogVmVuZG9yW10gPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIGdldE9yZ2FuaXphdGlvblByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgICAgICAgLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YS5vcmdhbml6YXRpb25fcHJvZmlsZVswXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogVmVuZG9yW10gPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbmRvclByb2ZpbGUodmVuZG9yOiBWZW5kb3IpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHZlbmRvcik7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgICAgYm9keSwge2hlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKX0pLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWZW5kb3JDb21wYW55KHZlbmRvcl9jb21wYW55OiBWZW5kb3JDb21wYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh2ZW5kb3JfY29tcGFueSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfWRldmVsb3Blci9vcmdhbml6YXRpb24vcHJvZmlsZT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgICAgICAgIGJvZHksIHtoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCl9KS5jYWNoZSgpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG5cblxuICAgIHJlc2V0UGFzc3dvcmRBY2NvdW50KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KGAke2NvbmZpZy5hcGlVcmx9cGFzc3dvcmQvcmVzZXQ/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICAgICAgICBib2R5LCB7aGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpfSkuY2FjaGUoKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
