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
        // let xhr: XMLHttpRequest = new XMLHttpRequest();
        // xhr.open('POST', `${config.apiUrl}product?token=${storage.getAuthToken()}`, true);
        // let formData: FormData = new FormData();
        //
        // let formData: FormData = new FormData();
        // formData.append("logo", product.logo);
        // formData.append("name", product.name);
        // formData.append("description", product.description);
        // formData.append("shortdescription", product.shortdescription);
        // formData.append("minrequirement", product.minrequirement);
        // formData.append("termsncond", product.termsncond);
        // formData.append("youtube", product.youtube);
        // formData.append("purchase_link", product.purchase_link);
        // formData.append("description_th", product.description_th);
        // formData.append("shortdescription_th", product.shortdescription_th);
        //
        // for(let i =0; i < product.industries.length; i++){
        //     formData.append(`industries[${i}]`, product.industries[i]);
        // }
        // for(let i =0; i < product.languages.length; i++){
        //     formData.append(`languages[${i}]`, product.languages[i]);
        // }
        // for(let i =0; i < product.departments.length; i++){
        //     formData.append(`departments[${i}]`, product.departments[i]);
        // }
        // for(let i =0; i < product.categories.length; i++){
        //     formData.append(`categories[${i}]`, product.categories[i]);
        // }
        // for(let i =0; i < product.features.length; i++){
        //     formData.append(`features[${i}]`, product.features[i]);
        // }
        // for(let i =0; i < product.screenshots.length; i++){
        //     formData.append(`screenshots[${i}]`, product.screenshots[i]);
        // }
        // for(let i =0; i < product.pricing_model.length; i++) {
        //     formData.append(`pricing_model[${i}]`, JSON.stringify(product.pricing_model[i]));
        // }
        // for(let i =0; i < product.extraservices.length; i++){
        //     formData.append(`extraservices[${i}]`, product.extraservices[i]);
        // }
        // for(let i =0; i < product.features_th.length; i++){
        //     formData.append(`features_th[${i}]`, product.features_th[i]);
        // }
        //
        // xhr.send(formData);
        // console.log(xhr.response);
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
    //UpdateTagProduct
    ProductService.prototype.updateTagProducts = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(config.apiUrl + "tag?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.searchProduct = function (value) {
        return this._http.get(config.apiUrl + "product/search?query=" + value)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxJQUFPLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25ELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUtqQztJQUlFLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZoQyxZQUFPLEdBQWMsRUFBRSxDQUFDO0lBR3hCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxD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O0lBak1IO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFrTWIscUJBQUM7QUFBRCxDQWpNQSxBQWlNQyxJQUFBO0FBak1ZLHNCQUFjLGlCQWlNMUIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9hcGkuY29uZmlnJyk7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhY2hlJztcblxuXG5kZWNsYXJlIHZhciBfIDphbnk7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuXG4gIHByb2R1Y3Q6IFByb2R1Y3RbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gIH1cblxuICBnZXRQcm9kdWN0TmFtZSgpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvbmFtZT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIGdldFByb2R1Y3RUYWdzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC90YWdzP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8vTk9UIFJFUVVJUkVEIFBFUk1JU1NUSU9OXG4gIGdldFByb2R1Y3QoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8vUFJPRFVDVCBPRiBPTkUgREVWRUxPUEVSIFtSRVFVSVJFRCBQRVJNSVNTSU9OXVxuICBnZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0L2RldmVsb3Blcj90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRQcm9kdWN0SWQoaWQ6IG51bWJlciB8IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGFkZFByb2R1Y3QocHJvZHVjdDogYW55KSB7XG5cbiAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwcm9kdWN0KTtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pLmNhY2hlKClcbiAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXG4gICAgICAvLyBsZXQgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgLy8geGhyLm9wZW4oJ1BPU1QnLCBgJHtjb25maWcuYXBpVXJsfXByb2R1Y3Q/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsIHRydWUpO1xuICAgICAgLy8gbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy9cbiAgICAgIC8vIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImxvZ29cIiwgcHJvZHVjdC5sb2dvKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgcHJvZHVjdC5uYW1lKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIHByb2R1Y3QuZGVzY3JpcHRpb24pO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwic2hvcnRkZXNjcmlwdGlvblwiLCBwcm9kdWN0LnNob3J0ZGVzY3JpcHRpb24pO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwibWlucmVxdWlyZW1lbnRcIiwgcHJvZHVjdC5taW5yZXF1aXJlbWVudCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJ0ZXJtc25jb25kXCIsIHByb2R1Y3QudGVybXNuY29uZCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJ5b3V0dWJlXCIsIHByb2R1Y3QueW91dHViZSk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJwdXJjaGFzZV9saW5rXCIsIHByb2R1Y3QucHVyY2hhc2VfbGluayk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvbl90aFwiLCBwcm9kdWN0LmRlc2NyaXB0aW9uX3RoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcInNob3J0ZGVzY3JpcHRpb25fdGhcIiwgcHJvZHVjdC5zaG9ydGRlc2NyaXB0aW9uX3RoKTtcbiAgICAgIC8vXG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmluZHVzdHJpZXMubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChgaW5kdXN0cmllc1ske2l9XWAsIHByb2R1Y3QuaW5kdXN0cmllc1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0Lmxhbmd1YWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBsYW5ndWFnZXNbJHtpfV1gLCBwcm9kdWN0Lmxhbmd1YWdlc1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmRlcGFydG1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGRlcGFydG1lbnRzWyR7aX1dYCwgcHJvZHVjdC5kZXBhcnRtZW50c1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChgY2F0ZWdvcmllc1ske2l9XWAsIHByb2R1Y3QuY2F0ZWdvcmllc1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmZlYXR1cmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGZlYXR1cmVzWyR7aX1dYCwgcHJvZHVjdC5mZWF0dXJlc1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LnNjcmVlbnNob3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYHNjcmVlbnNob3RzWyR7aX1dYCwgcHJvZHVjdC5zY3JlZW5zaG90c1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LnByaWNpbmdfbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYHByaWNpbmdfbW9kZWxbJHtpfV1gLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0LnByaWNpbmdfbW9kZWxbaV0pKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGZvcihsZXQgaSA9MDsgaSA8IHByb2R1Y3QuZXh0cmFzZXJ2aWNlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBleHRyYXNlcnZpY2VzWyR7aX1dYCwgcHJvZHVjdC5leHRyYXNlcnZpY2VzW2ldKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGZvcihsZXQgaSA9MDsgaSA8IHByb2R1Y3QuZmVhdHVyZXNfdGgubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChgZmVhdHVyZXNfdGhbJHtpfV1gLCBwcm9kdWN0LmZlYXR1cmVzX3RoW2ldKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vXG4gICAgICAvLyB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdChpZDphbnksIHByb2R1Y3Q6IGFueSl7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC8ke2lkfT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIC8vR2V0IFByb2R1Y3QgU3RhdHVzIEZvciBBZG1pblxuICBnZXRQcm9kdWN0U3RhdHVzKHN0YXR1czphbnkpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvbGlzdC8ke3N0YXR1c31gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIHVwZGF0ZVByb2R1Y3RTdGF0dXMoaWQ6YW55LHN0YXR1czphbnksY29tbWVudDphbnkgPSBcIlwiKXtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29tbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0vJHtzdGF0dXN9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLy9HZXRMb2dQcm9kdWN0c1xuICBnZXRMb2dQcm9kdWN0KGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9sb2cvJHtpZH1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL1VwZGF0ZVRhZ1Byb2R1Y3RcbiAgICB1cGRhdGVUYWdQcm9kdWN0cyh2YWx1ZTphbnkpe1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9dGFnP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHNlYXJjaFByb2R1Y3QodmFsdWU6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9zZWFyY2g/cXVlcnk9JHt2YWx1ZX1gKVxuICAgICAgICAgICAgLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
