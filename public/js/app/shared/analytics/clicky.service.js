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
var ClickyService = (function () {
    function ClickyService(_http) {
        this._http = _http;
        this.viewEndpoint = 'http://52.221.240.34/api/v1/visitors/';
        this.eventEndPoint = 'http://52.221.240.34/api/v1/events/';
    }
    ClickyService.prototype.loadVisitors = function (name) {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.viewEndpoint + name)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ClickyService.prototype.loadEvents = function (name) {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.eventEndPoint + name)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQixRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFJL0I7SUFNRSx1QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFKaEMsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxrQkFBYSxHQUFXLHFDQUFxQyxDQUFDO0lBRzVCLENBQUM7SUFFbkMsb0NBQVksR0FBWixVQUFhLElBQVM7UUFFcEIsMkNBQTJDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUNsQiwyQ0FBMkM7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQTFCSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBOEJiLG9CQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxxQkFBYSxnQkE2QnpCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FuYWx5dGljcy9jbGlja3kuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgSnNvbnAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlcnMvcmVxdWVzdCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWNreVNlcnZpY2V7XG5cbiAgdmlld0VuZHBvaW50OiBzdHJpbmcgPSAnaHR0cDovLzUyLjIyMS4yNDAuMzQvYXBpL3YxL3Zpc2l0b3JzLyc7XG4gIGV2ZW50RW5kUG9pbnQ6IHN0cmluZyA9ICdodHRwOi8vNTIuMjIxLjI0MC4zNC9hcGkvdjEvZXZlbnRzLyc7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cCl7fVxuXG4gIGxvYWRWaXNpdG9ycyhuYW1lOiBhbnkpIHtcblxuICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy52aWV3RW5kcG9pbnQgKyBuYW1lKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICBsb2FkRXZlbnRzKG5hbWU6IGFueSl7XG4gICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmV2ZW50RW5kUG9pbnQgKyBuYW1lKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
