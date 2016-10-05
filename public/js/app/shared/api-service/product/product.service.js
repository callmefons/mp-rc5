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
    //Get Product Navigation bar
    ProductService.prototype.getProductByTypeAndTag = function (type, tagId) {
        return this._http.get(config.apiUrl + "product/filter/" + type + "/" + tagId)
            .cache()
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
    };
    //Filter Product
    ProductService.prototype.getProductByFilter = function (value) {
        var body = JSON.stringify(value);
        console.log(body);
        return this._http.post(config.apiUrl + "product/filter", body, { headers: request_1.request.getJsonHeaders() }).cache()
            .map(this.extractData)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxJQUFPLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25ELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUtqQztJQUlFLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZoQyxZQUFPLEdBQWMsRUFBRSxDQUFDO0lBR3hCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLDJCQUFzQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ2xGLEtBQUssRUFBRTthQUNQLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsbUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxNQUFNLENBQUMsTUFBTSxzQkFBaUIsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUM3RSxLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELDhDQUFxQixHQUFyQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxNQUFNLENBQUMsTUFBTSxnQ0FBMkIsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUN2RixLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEVBQW1CO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxNQUFNLENBQUMsTUFBTSxnQkFBVyxFQUFFLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUNuRixLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsT0FBWTtRQUVuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFNLENBQUMsTUFBTSxzQkFBaUIsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDNUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTthQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTdCLGtEQUFrRDtRQUNsRCxxRkFBcUY7UUFDckYsMkNBQTJDO1FBQzNDLEVBQUU7UUFDRiwyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6Qyx1REFBdUQ7UUFDdkQsaUVBQWlFO1FBQ2pFLDZEQUE2RDtRQUM3RCxxREFBcUQ7UUFDckQsK0NBQStDO1FBQy9DLDJEQUEyRDtRQUMzRCw2REFBNkQ7UUFDN0QsdUVBQXVFO1FBQ3ZFLEVBQUU7UUFDRixxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUk7UUFDSixvREFBb0Q7UUFDcEQsZ0VBQWdFO1FBQ2hFLElBQUk7UUFDSixzREFBc0Q7UUFDdEQsb0VBQW9FO1FBQ3BFLElBQUk7UUFDSixxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUk7UUFDSixtREFBbUQ7UUFDbkQsOERBQThEO1FBQzlELElBQUk7UUFDSixzREFBc0Q7UUFDdEQsb0VBQW9FO1FBQ3BFLElBQUk7UUFDSix5REFBeUQ7UUFDekQsd0ZBQXdGO1FBQ3hGLElBQUk7UUFDSix3REFBd0Q7UUFDeEQsd0VBQXdFO1FBQ3hFLElBQUk7UUFDSixzREFBc0Q7UUFDdEQsb0VBQW9FO1FBQ3BFLElBQUk7UUFDSixFQUFFO1FBQ0Ysc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEVBQU0sRUFBRSxPQUFZO1FBQ2hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdCQUFXLEVBQUUsZUFBVSxpQkFBTyxDQUFDLFlBQVksRUFBSSxFQUNuRixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxFQUFNO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBSSxNQUFNLENBQUMsTUFBTSxnQkFBVyxFQUFFLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUN0RixLQUFLLEVBQUU7YUFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCw4QkFBOEI7SUFDOUIseUNBQWdCLEdBQWhCLFVBQWlCLE1BQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLHFCQUFnQixNQUFRLENBQUM7YUFDNUQsS0FBSyxFQUFFO2FBQ1AsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNYLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsNENBQW1CLEdBQW5CLFVBQW9CLEVBQU0sRUFBQyxNQUFVLEVBQUMsT0FBZ0I7UUFBaEIsdUJBQWdCLEdBQWhCLFlBQWdCO1FBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLE1BQU0sQ0FBQyxNQUFNLGdCQUFXLEVBQUUsU0FBSSxNQUFNLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDOUYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTthQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsc0NBQWEsR0FBYixVQUFjLEVBQU07UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLE1BQU0sQ0FBQyxNQUFNLG9CQUFlLEVBQUksQ0FBQzthQUN2RCxLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQkFBa0I7SUFDaEIsMENBQWlCLEdBQWpCLFVBQWtCLEtBQVM7UUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLE1BQU0sa0JBQWEsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDeEUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTthQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLE1BQU0sNkJBQXdCLEtBQU8sQ0FBQzthQUNqRSxLQUFLLEVBQUU7YUFDUCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLCtDQUFzQixHQUF0QixVQUF1QixJQUFXLEVBQUUsS0FBWTtRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLE1BQU0sdUJBQWtCLElBQUksU0FBSSxLQUFPLENBQUM7YUFDbkUsS0FBSyxFQUFFO2FBQ1AsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNULElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiwyQ0FBa0IsR0FBbEIsVUFBbUIsS0FBUztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLE1BQU0sQ0FBQyxNQUFNLG1CQUFnQixFQUNuRCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUlPLG9DQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBcUIsS0FBVTtRQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztZQUMxQyxLQUFLLENBQUMsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtRQUNoRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXZOSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBd05iLHFCQUFDO0FBQUQsQ0F2TkEsQUF1TkMsSUFBQTtBQXZOWSxzQkFBYyxpQkF1TjFCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcbmltcG9ydCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcvYXBpLmNvbmZpZycpO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYWNoZSc7XG5cblxuZGVjbGFyZSB2YXIgXyA6YW55O1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcblxuICBwcm9kdWN0OiBQcm9kdWN0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICB9XG5cbiAgZ2V0UHJvZHVjdE5hbWUoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0L25hbWU/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBnZXRQcm9kdWN0VGFncygpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvdGFncz90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL05PVCBSRVFVSVJFRCBQRVJNSVNTVElPTlxuICBnZXRQcm9kdWN0KCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdD90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvL1BST0RVQ1QgT0YgT05FIERFVkVMT1BFUiBbUkVRVUlSRUQgUEVSTUlTU0lPTl1cbiAgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9kZXZlbG9wZXI/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkuZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdElkKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0LyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLmNhY2hlKClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcm9kdWN0KHByb2R1Y3Q6IGFueSkge1xuXG4gICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocHJvZHVjdCk7XG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdD90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KS5jYWNoZSgpXG4gICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblxuICAgICAgLy8gbGV0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIC8vIHhoci5vcGVuKCdQT1NUJywgYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLCB0cnVlKTtcbiAgICAgIC8vIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vXG4gICAgICAvLyBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJsb2dvXCIsIHByb2R1Y3QubG9nbyk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIHByb2R1Y3QubmFtZSk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcInNob3J0ZGVzY3JpcHRpb25cIiwgcHJvZHVjdC5zaG9ydGRlc2NyaXB0aW9uKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcIm1pbnJlcXVpcmVtZW50XCIsIHByb2R1Y3QubWlucmVxdWlyZW1lbnQpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwidGVybXNuY29uZFwiLCBwcm9kdWN0LnRlcm1zbmNvbmQpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwieW91dHViZVwiLCBwcm9kdWN0LnlvdXR1YmUpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwicHVyY2hhc2VfbGlua1wiLCBwcm9kdWN0LnB1cmNoYXNlX2xpbmspO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25fdGhcIiwgcHJvZHVjdC5kZXNjcmlwdGlvbl90aCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJzaG9ydGRlc2NyaXB0aW9uX3RoXCIsIHByb2R1Y3Quc2hvcnRkZXNjcmlwdGlvbl90aCk7XG4gICAgICAvL1xuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5pbmR1c3RyaWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGluZHVzdHJpZXNbJHtpfV1gLCBwcm9kdWN0LmluZHVzdHJpZXNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5sYW5ndWFnZXMubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChgbGFuZ3VhZ2VzWyR7aX1dYCwgcHJvZHVjdC5sYW5ndWFnZXNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5kZXBhcnRtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBkZXBhcnRtZW50c1ske2l9XWAsIHByb2R1Y3QuZGVwYXJ0bWVudHNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGNhdGVnb3JpZXNbJHtpfV1gLCBwcm9kdWN0LmNhdGVnb3JpZXNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5mZWF0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBmZWF0dXJlc1ske2l9XWAsIHByb2R1Y3QuZmVhdHVyZXNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5zY3JlZW5zaG90cy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBzY3JlZW5zaG90c1ske2l9XWAsIHByb2R1Y3Quc2NyZWVuc2hvdHNbaV0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZm9yKGxldCBpID0wOyBpIDwgcHJvZHVjdC5wcmljaW5nX21vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKGBwcmljaW5nX21vZGVsWyR7aX1dYCwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdC5wcmljaW5nX21vZGVsW2ldKSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmV4dHJhc2VydmljZXMubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChgZXh0cmFzZXJ2aWNlc1ske2l9XWAsIHByb2R1Y3QuZXh0cmFzZXJ2aWNlc1tpXSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmb3IobGV0IGkgPTA7IGkgPCBwcm9kdWN0LmZlYXR1cmVzX3RoLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGZlYXR1cmVzX3RoWyR7aX1dYCwgcHJvZHVjdC5mZWF0dXJlc190aFtpXSk7XG4gICAgICAvLyB9XG4gICAgICAvL1xuICAgICAgLy8geGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgLy8gY29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2R1Y3QoaWQ6YW55LCBwcm9kdWN0OiBhbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwcm9kdWN0KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0LyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZGVsZXRlUHJvZHVjdChpZDphbnkpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvJHtpZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAuY2FjaGUoKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICAvL0dldCBQcm9kdWN0IFN0YXR1cyBGb3IgQWRtaW5cbiAgZ2V0UHJvZHVjdFN0YXR1cyhzdGF0dXM6YW55KXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0L2xpc3QvJHtzdGF0dXN9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICB1cGRhdGVQcm9kdWN0U3RhdHVzKGlkOmFueSxzdGF0dXM6YW55LGNvbW1lbnQ6YW55ID0gXCJcIil7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29uZmlnLmFwaVVybH1wcm9kdWN0LyR7aWR9LyR7c3RhdHVzfT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pLmNhY2hlKClcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8vR2V0TG9nUHJvZHVjdHNcbiAgZ2V0TG9nUHJvZHVjdChpZDphbnkpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3QvbG9nLyR7aWR9YClcbiAgICAgIC5jYWNoZSgpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLy9VcGRhdGVUYWdQcm9kdWN0XG4gICAgdXBkYXRlVGFnUHJvZHVjdHModmFsdWU6YW55KXtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb25maWcuYXBpVXJsfXRhZz90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgICAgICAgIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pLmNhY2hlKClcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9kdWN0KHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHtjb25maWcuYXBpVXJsfXByb2R1Y3Qvc2VhcmNoP3F1ZXJ5PSR7dmFsdWV9YClcbiAgICAgICAgICAgIC5jYWNoZSgpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICAvL0dldCBQcm9kdWN0IE5hdmlnYXRpb24gYmFyXG4gICAgZ2V0UHJvZHVjdEJ5VHlwZUFuZFRhZyh0eXBlOnN0cmluZywgdGFnSWQ6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9maWx0ZXIvJHt0eXBlfS8ke3RhZ0lkfWApXG4gICAgICAgICAgICAuY2FjaGUoKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgLy9GaWx0ZXIgUHJvZHVjdFxuICAgIGdldFByb2R1Y3RCeUZpbHRlcih2YWx1ZTphbnkpe1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2NvbmZpZy5hcGlVcmx9cHJvZHVjdC9maWx0ZXJgLFxuICAgICAgICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
