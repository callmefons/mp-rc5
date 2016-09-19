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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var request_1 = require('../../shared/helpers/request');
var ClickyService = (function () {
    function ClickyService(_http) {
        this._http = _http;
        this.viewEndpoint = 'http://52.221.240.34/api/v1/events/';
        this.eventEndPoint = 'http://52.221.240.34/api/v1/visitors/';
    }
    ClickyService.prototype.loadVisitors = function (name) {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.viewEndpoint + name, request_1.request.getxhrHeaders())
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ClickyService.prototype.loadEvents = function (name) {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.eventEndPoint + name, request_1.request.getxhrHeaders())
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ClickyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClickyService);
    return ClickyService;
}());
exports.ClickyService = ClickyService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQixRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0Isd0JBQXdCLDhCQUV4QixDQUFDLENBRnFEO0FBR3REO0lBTUUsdUJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSmhDLGlCQUFZLEdBQVcscUNBQXFDLENBQUM7UUFDN0Qsa0JBQWEsR0FBVyx1Q0FBdUMsQ0FBQztJQUc5QixDQUFDO0lBRW5DLG9DQUFZLEdBQVosVUFBYSxJQUFZO1FBRXZCLDJDQUEyQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQiwyQ0FBMkM7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBMUJIO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE4QmIsb0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHFCQUFhLGdCQTZCekIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYW5hbHl0aWNzL2NsaWNreS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBKc29ucCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVycy9yZXF1ZXN0J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpY2t5U2VydmljZXtcblxuICB2aWV3RW5kcG9pbnQ6IHN0cmluZyA9ICdodHRwOi8vNTIuMjIxLjI0MC4zNC9hcGkvdjEvZXZlbnRzLyc7XG4gIGV2ZW50RW5kUG9pbnQ6IHN0cmluZyA9ICdodHRwOi8vNTIuMjIxLjI0MC4zNC9hcGkvdjEvdmlzaXRvcnMvJztcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHAgOiBIdHRwKXt9XG5cbiAgbG9hZFZpc2l0b3JzKG5hbWU6IHN0cmluZykge1xuXG4gICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLnZpZXdFbmRwb2ludCArIG5hbWUsIHJlcXVlc3QuZ2V0eGhySGVhZGVycygpKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICBsb2FkRXZlbnRzKG5hbWU6IHN0cmluZyl7XG4gICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmV2ZW50RW5kUG9pbnQgKyBuYW1lLCByZXF1ZXN0LmdldHhockhlYWRlcnMoKSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
