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
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.product = [];
    }
    ProductService.prototype.getProductName = function () {
        return this._http.get(config.apiUrl + "product/name?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data;
            return data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductTags = function () {
        return this._http.get(config.apiUrl + "product/tags?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data;
            return data;
        })
            .catch(this.handleError);
    };
    //NOT REQUIRED PERMISSTION
    ProductService.prototype.getProduct = function () {
        return this._http.get(config.apiUrl + "product?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data;
            return data;
        })
            .catch(this.handleError);
    };
    //PRODUCT OF ONE DEVELOPER [REQUIRED PERMISSION]
    ProductService.prototype.getProductOfDeveloper = function () {
        return this._http.get(config.apiUrl + "product/developer?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json().data;
            return data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductId = function (id) {
        return this._http.get(config.apiUrl + "product/" + id + "?token=" + storage_1.storage.getAuthToken())
            .cache()
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        var body = JSON.stringify(product);
        return this._http.post(config.apiUrl + "product?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var body = JSON.stringify(product);
        return this._http.put(config.apiUrl + "product/" + id + "?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this._http.delete(config.apiUrl + "product/" + id + "?token=" + storage_1.storage.getAuthToken())
            .cache()
            .catch(this.handleError);
    };
    //Get Product Status For Admin
    ProductService.prototype.getProductStatus = function (status) {
        return this._http.get(config.apiUrl + "product/list/" + status)
            .cache()
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProductStatus = function (id, status, comment) {
        if (comment === void 0) { comment = ""; }
        var body = JSON.stringify(comment);
        return this._http.post(config.apiUrl + "product/" + id + "/" + status + "?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    //GetLogProducts
    ProductService.prototype.getLogProduct = function (id) {
        return this._http.get(config.apiUrl + "product/log/" + id)
            .cache()
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxJQUFPLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25ELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQztJQUlFLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZoQyxZQUFPLEdBQWMsRUFBRSxDQUFDO0lBR3hCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxD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SSxNQUFNLENBQUMsTUFBTSxvQkFBZSxFQUFJLENBQUM7YUFDdkQsS0FBSyxFQUFFO2FBQ1AsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNYLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR08sb0NBQVcsR0FBbkIsVUFBb0IsR0FBYTtRQUMvQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxvQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ2hELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBOUhIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUErSGIscUJBQUM7QUFBRCxDQTlIQSxBQThIQyxJQUFBO0FBOUhZLHNCQUFjLGlCQThIMUIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9hcGkuY29uZmlnJyk7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhY2hlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcblxuICBwcm9kdWN0OiBQcm9kdWN0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICB9XG5cbiAgZ2V0UHJvZHVjdE5hbWUoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0L25hbWU/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBnZXRQcm9kdWN0VGFncygpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvdGFncz90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL05PVCBSRVFVSVJFRCBQRVJNSVNTVElPTlxuICBnZXRQcm9kdWN0KCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdD90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL1BST0RVQ1QgT0YgT05FIERFVkVMT1BFUiBbUkVRVUlSRUQgUEVSTUlTU0lPTl1cbiAgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9kZXZlbG9wZXI/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdElkKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0LyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocHJvZHVjdCk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3Q/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0KGlkOmFueSwgcHJvZHVjdDogUHJvZHVjdCl7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC8ke2lkfT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIC8vR2V0IFByb2R1Y3QgU3RhdHVzIEZvciBBZG1pblxuICBnZXRQcm9kdWN0U3RhdHVzKHN0YXR1czphbnkpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvbGlzdC8ke3N0YXR1c31gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIHVwZGF0ZVByb2R1Y3RTdGF0dXMoaWQ6YW55LHN0YXR1czphbnksY29tbWVudDphbnkgPSBcIlwiKXtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29tbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0vJHtzdGF0dXN9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLy9HZXRMb2dQcm9kdWN0c1xuICBnZXRMb2dQcm9kdWN0KGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9sb2cvJHtpZH1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
