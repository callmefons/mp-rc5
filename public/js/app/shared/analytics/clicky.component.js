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
var router_1 = require('@angular/router');
var clicky_service_1 = require("./clicky.service");
var product_service_1 = require("../api-service/product/product.service");
// import '../../../../node_modules/chart.js/dist/Chart.bundle.js';
var ClickyComponent = (function () {
    function ClickyComponent(_clickyService, _productService, _router) {
        this._clickyService = _clickyService;
        this._productService = _productService;
        this._router = _router;
        this.views = 0;
        this.items = [];
        this.data = [];
        this.dates = [];
        this.clicks = 0;
        this.items__2 = [];
        this.data__2 = [];
        this.dates__2 = [];
        this.onLoad = true;
        this.selected = '';
        this.apps = [];
        this.loading = true;
        // lineChart
        this.lineChartData = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'Views this week  ' }
        ];
        this.lineChartLabels = new Array(7);
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'views'
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'days'
                        }
                    }]
            }
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //lineChart 2
        this.lineChartData__2 = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'Clicks this week  ' }
        ];
        this.lineChartLabels__2 = new Array(7);
        this.lineChartOptions__2 = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'clicks'
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'days'
                        }
                    }]
            }
        };
        this.lineChartColours__2 = [
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
        ];
        this.lineChartLegend__2 = true;
        this.lineChartType__2 = 'line';
    }
    ClickyComponent.prototype.ngOnInit = function () {
        this.getProductOfDeveloper();
    };
    ClickyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClickyComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.loading = true;
        this.apps$ = this._productService.getProductOfDeveloper();
        this.sub = this.apps$.subscribe(function (apps) {
            _this.apps = apps;
            if (_this.apps.length > 0) {
                _this.getAnalytics(_this.apps[0].id);
                _this.loading = false;
            }
        });
    };
    ClickyComponent.prototype.getAnalytics = function (name) {
        var _this = this;
        if (this.onLoad) {
            this.onLoad = false;
            this.selected = name;
            this.lineChartData[0].label = "Views this week ";
            this.lineChartData__2[0].label = "Clicks this week ";
            this.lineChartLabels = new Array(7);
            this.lineChartLabels__2 = new Array(7);
            this.views = 0;
            this.dates = [];
            this.clicks = 0;
            this.dates__2 = [];
            this._clickyService.loadVisitors(name)
                .subscribe(function (data) {
                _this.data = data[0].dates;
                _this.data.reverse();
                for (var i = 0; i < _this.data.length; i++) {
                    //Date
                    _this.dates.push(_this.data[i].date);
                    var sum = 0;
                    for (var j = 0; j < _this.data[i].items.length; j++) {
                        sum += +_this.data[i].items[j].value;
                    }
                    _this.views += sum;
                    _this.items[i] = sum;
                }
                _this.update();
                _this.onLoad = true;
            }, function (error) { return console.error(error); });
            this._clickyService.loadEvents(name)
                .subscribe(function (data) {
                _this.data__2 = data[0].dates;
                _this.data__2.reverse();
                for (var i = 0; i < _this.data__2.length; i++) {
                    //Date
                    _this.dates__2.push(_this.data__2[i].date);
                    var sum = 0;
                    for (var j = 0; j < _this.data__2[i].items.length; j++) {
                        sum += +_this.data__2[i].items[j].value;
                    }
                    _this.clicks += sum;
                    _this.items__2[i] = sum;
                }
                _this.update2();
            }, function (error) { return console.error(error); });
        }
    };
    ClickyComponent.prototype.update = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
                data: new Array(this.lineChartData[i].data.length),
                label: this.lineChartData[i].label + this.views.toString()
            };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = this.items[j];
            }
        }
        this.lineChartLabels = this.dates;
        this.lineChartData = _lineChartData;
    };
    ClickyComponent.prototype.update2 = function () {
        var _lineChartData = new Array(this.lineChartData__2.length);
        for (var i = 0; i < this.lineChartData__2.length; i++) {
            _lineChartData[i] = {
                data: new Array(this.lineChartData__2[i].data.length),
                label: this.lineChartData__2[i].label + this.clicks.toString()
            };
            for (var j = 0; j < this.lineChartData__2[i].data.length; j++) {
                _lineChartData[i].data[j] = this.items__2[j];
            }
        }
        this.lineChartLabels__2 = this.dates__2;
        this.lineChartData__2 = _lineChartData;
    };
    // events
    ClickyComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    ClickyComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    ClickyComponent.prototype.showLog = function (product_log) {
        // console.log('log',product_log)
        this.logs = product_log;
    };
    ClickyComponent.prototype.goToAddService = function () {
        this._router.navigate(["vendor/add"]);
    };
    ClickyComponent.prototype.goToViewAllListing = function () {
        this._router.navigate(["vendor/listing"]);
    };
    ClickyComponent.prototype.goToEditApp = function (appId) {
        this._router.navigate([("/vendor/edit/" + appId)]);
    };
    ClickyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mp-clicky-component',
            templateUrl: "templates/clicky.template.html",
            styleUrls: ['styles/clicky.template.css'],
        }), 
        __metadata('design:paramtypes', [clicky_service_1.ClickyService, product_service_1.ProductService, router_1.Router])
    ], ClickyComponent);
    return ClickyComponent;
}());
exports.ClickyComponent = ClickyComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBS3RFLG1FQUFtRTtBQVNuRTtJQXFCRSx5QkFBb0IsY0FBNEIsRUFDNUIsZUFBOEIsRUFDOUIsT0FBYztRQUZkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFyQmxDLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFPLEVBQUUsQ0FBQztRQUdsQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJckIsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBMEd2QixZQUFZO1FBQ0wsa0JBQWEsR0FBYztZQUNoQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBQztTQUMxRCxDQUFDO1FBQ0ssb0JBQWUsR0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxxQkFBZ0IsR0FBTztZQUM1QixTQUFT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QUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7O3VCQUFBO0lBaVJGLHNCQUFDO0FBQUQsQ0EvUUEsQUErUUMsSUFBQTtBQS9RWSx1QkFBZSxrQkErUTNCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FuYWx5dGljcy9jbGlja3kuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9jbGlja3kuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tICcuLi9wcm9kdWN0L2luZGV4JztcblxuXG5kZWNsYXJlIHZhciBDaGFydDphbnk7XG4vLyBpbXBvcnQgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jaGFydC5qcy9kaXN0L0NoYXJ0LmJ1bmRsZS5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21wLWNsaWNreS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogYHRlbXBsYXRlcy9jbGlja3kudGVtcGxhdGUuaHRtbGAsXG4gIHN0eWxlVXJsczogWydzdHlsZXMvY2xpY2t5LnRlbXBsYXRlLmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENsaWNreUNvbXBvbmVudCB7XG5cbiAgdmlld3M6bnVtYmVyID0gMDtcbiAgaXRlbXM6YW55ID0gW107XG4gIGRhdGE6YW55ID0gW107XG4gIGRhdGVzOmFueSA9IFtdO1xuXG4gIGNsaWNrczpudW1iZXIgPSAwO1xuICBpdGVtc19fMjphbnkgPSBbXTtcbiAgZGF0YV9fMjphbnkgPSBbXTtcbiAgZGF0ZXNfXzI6YW55ID0gW107XG5cblxuICBvbkxvYWQ6Ym9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGVkOnN0cmluZyA9ICcnO1xuXG4gIHN1YjpTdWJzY3JpcHRpb247XG4gIGFwcHMkOk9ic2VydmFibGU8YW55PjtcbiAgYXBwczphbnlbXSA9IFtdO1xuICBsb2FkaW5nOmJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWNreVNlcnZpY2U6Q2xpY2t5U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5hcHBzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgIHRoaXMuc3ViID0gdGhpcy5hcHBzJC5zdWJzY3JpYmUoKGFwcHM6YW55KSA9PiB7XG4gICAgICB0aGlzLmFwcHMgPSBhcHBzO1xuICAgICAgaWYodGhpcy5hcHBzLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLmdldEFuYWx5dGljcyh0aGlzLmFwcHNbMF0uaWQpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QW5hbHl0aWNzKG5hbWU6YW55KSB7XG5cbiAgICBpZiAodGhpcy5vbkxvYWQpIHtcblxuICAgICAgdGhpcy5vbkxvYWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuYW1lO1xuXG4gICAgICB0aGlzLmxpbmVDaGFydERhdGFbMF0ubGFiZWwgPSBcIlZpZXdzIHRoaXMgd2VlayBcIjtcbiAgICAgIHRoaXMubGluZUNoYXJ0RGF0YV9fMlswXS5sYWJlbCA9IFwiQ2xpY2tzIHRoaXMgd2VlayBcIjtcblxuICAgICAgdGhpcy5saW5lQ2hhcnRMYWJlbHMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICB0aGlzLmxpbmVDaGFydExhYmVsc19fMiA9IG5ldyBBcnJheSg3KTtcblxuICAgICAgdGhpcy52aWV3cyA9IDA7XG4gICAgICB0aGlzLmRhdGVzID0gW107XG5cbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcbiAgICAgIHRoaXMuZGF0ZXNfXzIgPSBbXTtcblxuXG4gICAgICB0aGlzLl9jbGlja3lTZXJ2aWNlLmxvYWRWaXNpdG9ycyhuYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhWzBdLmRhdGVzO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJldmVyc2UoKTtcblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgIC8vRGF0ZVxuICAgICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2godGhpcy5kYXRhW2ldLmRhdGUpO1xuXG4gICAgICAgICAgICAgIHZhciBzdW06bnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRhdGFbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gK3RoaXMuZGF0YVtpXS5pdGVtc1tqXS52YWx1ZTtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMudmlld3MgKz0gc3VtO1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldID0gc3VtO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uTG9hZCA9IHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuXG4gICAgICB0aGlzLl9jbGlja3lTZXJ2aWNlLmxvYWRFdmVudHMobmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kYXRhX18yID0gZGF0YVswXS5kYXRlcztcbiAgICAgICAgICAgIHRoaXMuZGF0YV9fMi5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhX18yLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgLy9EYXRlXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZXNfXzIucHVzaCh0aGlzLmRhdGFfXzJbaV0uZGF0ZSk7XG5cbiAgICAgICAgICAgICAgdmFyIHN1bTpudW1iZXIgPSAwO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YV9fMltpXS5pdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSArPSArdGhpcy5kYXRhX18yW2ldLml0ZW1zW2pdLnZhbHVlO1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jbGlja3MgKz0gc3VtO1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zX18yW2ldID0gc3VtO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZTIoKTtcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBsaW5lQ2hhcnRcbiAgcHVibGljIGxpbmVDaGFydERhdGE6QXJyYXk8YW55PiA9IFtcbiAgICB7ZGF0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdLCBsYWJlbDogJ1ZpZXdzIHRoaXMgd2VlayAgJ31cbiAgXTtcbiAgcHVibGljIGxpbmVDaGFydExhYmVsczpBcnJheTxhbnk+ID0gbmV3IEFycmF5KDcpO1xuICBwdWJsaWMgbGluZUNoYXJ0T3B0aW9uczphbnkgPSB7XG4gICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ3ZpZXdzJ1xuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ2RheXMnXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuICB9O1xuICBwdWJsaWMgbGluZUNoYXJ0Q29sb3VyczpBcnJheTxhbnk+ID0gW1xuICAgIHsgLy8gZ3JleVxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjIpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMSknLFxuICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjgpJ1xuICAgIH1cbiAgXTtcbiAgcHVibGljIGxpbmVDaGFydExlZ2VuZDpib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGxpbmVDaGFydFR5cGU6c3RyaW5nID0gJ2xpbmUnO1xuXG5cbiAgLy9saW5lQ2hhcnQgMlxuICBwdWJsaWMgbGluZUNoYXJ0RGF0YV9fMjpBcnJheTxhbnk+ID0gW1xuICAgIHtkYXRhOiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sIGxhYmVsOiAnQ2xpY2tzIHRoaXMgd2VlayAgJ31cbiAgXTtcbiAgcHVibGljIGxpbmVDaGFydExhYmVsc19fMjpBcnJheTxhbnk+ID0gbmV3IEFycmF5KDcpO1xuICBwdWJsaWMgbGluZUNoYXJ0T3B0aW9uc19fMjphbnkgPSB7XG4gICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ2NsaWNrcydcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB4QXhlczogW3tcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdkYXlzJ1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cbiAgfTtcbiAgcHVibGljIGxpbmVDaGFydENvbG91cnNfXzI6QXJyYXk8YW55PiA9IFtcbiAgICB7IC8vIGRhcmsgZ3JleVxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKSdcbiAgICB9XG4gIF07XG4gIHB1YmxpYyBsaW5lQ2hhcnRMZWdlbmRfXzI6Ym9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBsaW5lQ2hhcnRUeXBlX18yOnN0cmluZyA9ICdsaW5lJztcblxuXG4gIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcblxuICAgIGxldCBfbGluZUNoYXJ0RGF0YTpBcnJheTxhbnk+ID0gbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lQ2hhcnREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfbGluZUNoYXJ0RGF0YVtpXSA9IHtcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aCksXG4gICAgICAgIGxhYmVsOiB0aGlzLmxpbmVDaGFydERhdGFbaV0ubGFiZWwgKyB0aGlzLnZpZXdzLnRvU3RyaW5nKClcbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGluZUNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIF9saW5lQ2hhcnREYXRhW2ldLmRhdGFbal0gPSB0aGlzLml0ZW1zW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzID0gdGhpcy5kYXRlcztcbiAgICB0aGlzLmxpbmVDaGFydERhdGEgPSBfbGluZUNoYXJ0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUyKCk6dm9pZCB7XG5cbiAgICBsZXQgX2xpbmVDaGFydERhdGE6QXJyYXk8YW55PiA9IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGFfXzIubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZUNoYXJ0RGF0YV9fMi5sZW5ndGg7IGkrKykge1xuICAgICAgX2xpbmVDaGFydERhdGFbaV0gPSB7XG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGFfXzJbaV0uZGF0YS5sZW5ndGgpLFxuICAgICAgICBsYWJlbDogdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmxhYmVsICsgdGhpcy5jbGlja3MudG9TdHJpbmcoKVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgX2xpbmVDaGFydERhdGFbaV0uZGF0YVtqXSA9IHRoaXMuaXRlbXNfXzJbal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5saW5lQ2hhcnRMYWJlbHNfXzIgPSB0aGlzLmRhdGVzX18yO1xuICAgIHRoaXMubGluZUNoYXJ0RGF0YV9fMiA9IF9saW5lQ2hhcnREYXRhO1xuICB9XG5cblxuICAvLyBldmVudHNcbiAgcHVibGljIGNoYXJ0Q2xpY2tlZChlOmFueSk6dm9pZCB7XG4gICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZTphbnkpOnZvaWQge1xuICAgIC8vY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBsb2dzOmFueVtdO1xuICByZXZpZXdzX2xlbmd0aDpudW1iZXI7XG5cbiAgc2hvd0xvZyhwcm9kdWN0X2xvZzphbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nJyxwcm9kdWN0X2xvZylcbiAgICB0aGlzLmxvZ3MgPSBwcm9kdWN0X2xvZztcblxuICB9XG5cbiAgZ29Ub0FkZFNlcnZpY2UoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2B2ZW5kb3IvYWRkYF0pO1xuICB9XG5cbiAgZ29Ub1ZpZXdBbGxMaXN0aW5nKCl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgdmVuZG9yL2xpc3RpbmdgXSk7XG4gIH1cblxuICBnb1RvRWRpdEFwcChhcHBJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvZWRpdC8ke2FwcElkfWBdKTtcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
