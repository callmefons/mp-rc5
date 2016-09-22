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
var ClickyAdminComponent = (function () {
    function ClickyAdminComponent(_clickyService, _productService, _router) {
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
    ClickyAdminComponent.prototype.ngOnInit = function () {
        this.getAnalytics("ADA");
        // this.getProductOfDeveloper();
    };
    ClickyAdminComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    ClickyAdminComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.apps$ = this._productService.getProductOfDeveloper();
        this.sub = this.apps$.subscribe(function (apps) {
            _this.apps = apps;
            _this.getAnalytics(apps[0].id);
        });
    };
    ClickyAdminComponent.prototype.getAnalytics = function (name) {
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
            //console.log(`name of app ${name}, path ${path}`);
            this._clickyService.loadVisitors(name)
                .subscribe(function (data) {
                _this.data = data[0].dates;
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
    ClickyAdminComponent.prototype.update = function () {
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
    ClickyAdminComponent.prototype.update2 = function () {
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
    ClickyAdminComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    ClickyAdminComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    ClickyAdminComponent.prototype.showLog = function (product_log) {
        // console.log('log',product_log)
        this.logs = product_log;
    };
    ClickyAdminComponent.prototype.goToEditApp = function (appId) {
        this._router.navigate([("/vendor/edit/" + appId)]);
    };
    ClickyAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mp-clicky-admin-component',
            templateUrl: "templates/clicky-admin.template.html",
            styleUrls: ['styles/clicky.template.css'],
        }), 
        __metadata('design:paramtypes', [clicky_service_1.ClickyService, product_service_1.ProductService, router_1.Router])
    ], ClickyAdminComponent);
    return ClickyAdminComponent;
}());
exports.ClickyAdminComponent = ClickyAdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LWFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBSXRFLG1FQUFtRTtBQVNuRTtJQW9CSSw4QkFBb0IsY0FBNEIsRUFDNUIsZUFBOEIsRUFDOUIsT0FBYztRQUZkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFwQmxDLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFPLEVBQUUsQ0FBQztRQUdsQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJckIsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQW1HaEIsWUFBWTtRQUNMLGtCQUFhLEdBQWM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUM7U0FDNUQsQ0FBQztRQUNLLG9CQUFlLEdBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMscUJBQWdCLEdBQU87WUFDMUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFB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QUM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO0lBQzNDLENBQUM7SUFHRCxTQUFTO0lBQ0YsMkNBQVksR0FBbkIsVUFBb0IsQ0FBSztRQUNyQixpQkFBaUI7SUFDckIsQ0FBQztJQUVNLDJDQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFLRCxzQ0FBTyxHQUFQLFVBQVEsV0FBZTtRQUNuQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFFNUIsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQWdCLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBblFMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzs7NEJBQUE7SUFpUUYsMkJBQUM7QUFBRCxDQS9QQSxBQStQQyxJQUFBO0FBL1BZLDRCQUFvQix1QkErUGhDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FuYWx5dGljcy9jbGlja3ktYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9jbGlja3kuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cblxuZGVjbGFyZSB2YXIgQ2hhcnQ6YW55O1xuLy8gaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2hhcnQuanMvZGlzdC9DaGFydC5idW5kbGUuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXAtY2xpY2t5LWFkbWluLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6IGB0ZW1wbGF0ZXMvY2xpY2t5LWFkbWluLnRlbXBsYXRlLmh0bWxgLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvY2xpY2t5LnRlbXBsYXRlLmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENsaWNreUFkbWluQ29tcG9uZW50IHtcblxuICAgIHZpZXdzOm51bWJlciA9IDA7XG4gICAgaXRlbXM6YW55ID0gW107XG4gICAgZGF0YTphbnkgPSBbXTtcbiAgICBkYXRlczphbnkgPSBbXTtcblxuICAgIGNsaWNrczpudW1iZXIgPSAwO1xuICAgIGl0ZW1zX18yOmFueSA9IFtdO1xuICAgIGRhdGFfXzI6YW55ID0gW107XG4gICAgZGF0ZXNfXzI6YW55ID0gW107XG5cblxuICAgIG9uTG9hZDpib29sZWFuID0gdHJ1ZTtcbiAgICBzZWxlY3RlZDpzdHJpbmcgPSAnJztcblxuICAgIHN1YjpTdWJzY3JpcHRpb247XG4gICAgYXBwcyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICAgIGFwcHM6YW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWNreVNlcnZpY2U6Q2xpY2t5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QW5hbHl0aWNzKFwiQURBXCIpO1xuICAgICAgICAvLyB0aGlzLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RPZkRldmVsb3BlcigpIHtcbiAgICAgICAgdGhpcy5hcHBzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuYXBwcyQuc3Vic2NyaWJlKChhcHBzOmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcztcbiAgICAgICAgICAgIHRoaXMuZ2V0QW5hbHl0aWNzKGFwcHNbMF0uaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBbmFseXRpY3MobmFtZTphbnkpIHtcblxuICAgICAgICBpZiAodGhpcy5vbkxvYWQpIHtcblxuICAgICAgICAgICAgdGhpcy5vbkxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmxpbmVDaGFydERhdGFbMF0ubGFiZWwgPSBcIlZpZXdzIHRoaXMgd2VlayBcIjtcbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YV9fMlswXS5sYWJlbCA9IFwiQ2xpY2tzIHRoaXMgd2VlayBcIjtcblxuICAgICAgICAgICAgdGhpcy5saW5lQ2hhcnRMYWJlbHMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVsc19fMiA9IG5ldyBBcnJheSg3KTtcblxuICAgICAgICAgICAgdGhpcy52aWV3cyA9IDA7XG4gICAgICAgICAgICB0aGlzLmRhdGVzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuY2xpY2tzID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXNfXzIgPSBbXTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgbmFtZSBvZiBhcHAgJHtuYW1lfSwgcGF0aCAke3BhdGh9YCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NsaWNreVNlcnZpY2UubG9hZFZpc2l0b3JzKG5hbWUpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFbMF0uZGF0ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2godGhpcy5kYXRhW2ldLmRhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1bTpudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSArdGhpcy5kYXRhW2ldLml0ZW1zW2pdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld3MgKz0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLl9jbGlja3lTZXJ2aWNlLmxvYWRFdmVudHMobmFtZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9fMiA9IGRhdGFbMF0uZGF0ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhX18yLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzX18yLnB1c2godGhpcy5kYXRhX18yW2ldLmRhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1bTpudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhX18yW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSArdGhpcy5kYXRhX18yW2ldLml0ZW1zW2pdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tzICs9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zX18yW2ldID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZTIoKTtcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaW5lQ2hhcnRcbiAgICBwdWJsaWMgbGluZUNoYXJ0RGF0YTpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7ZGF0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdLCBsYWJlbDogJ1ZpZXdzIHRoaXMgd2VlayAgJ31cbiAgICBdO1xuICAgIHB1YmxpYyBsaW5lQ2hhcnRMYWJlbHM6QXJyYXk8YW55PiA9IG5ldyBBcnJheSg3KTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0T3B0aW9uczphbnkgPSB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ3ZpZXdzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ2RheXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcHVibGljIGxpbmVDaGFydENvbG91cnM6QXJyYXk8YW55PiA9IFtcbiAgICAgICAgeyAvLyBncmV5XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuOCknXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHB1YmxpYyBsaW5lQ2hhcnRMZWdlbmQ6Ym9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGxpbmVDaGFydFR5cGU6c3RyaW5nID0gJ2xpbmUnO1xuXG5cbiAgICAvL2xpbmVDaGFydCAyXG4gICAgcHVibGljIGxpbmVDaGFydERhdGFfXzI6QXJyYXk8YW55PiA9IFtcbiAgICAgICAge2RhdGE6IFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgbGFiZWw6ICdDbGlja3MgdGhpcyB3ZWVrICAnfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExhYmVsc19fMjpBcnJheTxhbnk+ID0gbmV3IEFycmF5KDcpO1xuICAgIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zX18yOmFueSA9IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnY2xpY2tzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ2RheXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcHVibGljIGxpbmVDaGFydENvbG91cnNfXzI6QXJyYXk8YW55PiA9IFtcbiAgICAgICAgeyAvLyBkYXJrIGdyZXlcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMC4yKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDEpJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHB1YmxpYyBsaW5lQ2hhcnRMZWdlbmRfXzI6Ym9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGxpbmVDaGFydFR5cGVfXzI6c3RyaW5nID0gJ2xpbmUnO1xuXG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG5cbiAgICAgICAgbGV0IF9saW5lQ2hhcnREYXRhOkFycmF5PGFueT4gPSBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lQ2hhcnREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5saW5lQ2hhcnREYXRhW2ldLmxhYmVsICsgdGhpcy52aWV3cy50b1N0cmluZygpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxpbmVDaGFydERhdGFbaV0uZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIF9saW5lQ2hhcnREYXRhW2ldLmRhdGFbal0gPSB0aGlzLml0ZW1zW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saW5lQ2hhcnRMYWJlbHMgPSB0aGlzLmRhdGVzO1xuICAgICAgICB0aGlzLmxpbmVDaGFydERhdGEgPSBfbGluZUNoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlMigpOnZvaWQge1xuXG4gICAgICAgIGxldCBfbGluZUNoYXJ0RGF0YTpBcnJheTxhbnk+ID0gbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YV9fMi5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZUNoYXJ0RGF0YV9fMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xpbmVDaGFydERhdGFbaV0gPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YV9fMltpXS5kYXRhLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubGluZUNoYXJ0RGF0YV9fMltpXS5sYWJlbCArIHRoaXMuY2xpY2tzLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGluZUNoYXJ0RGF0YV9fMltpXS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgX2xpbmVDaGFydERhdGFbaV0uZGF0YVtqXSA9IHRoaXMuaXRlbXNfXzJbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVsc19fMiA9IHRoaXMuZGF0ZXNfXzI7XG4gICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YV9fMiA9IF9saW5lQ2hhcnREYXRhO1xuICAgIH1cblxuXG4gICAgLy8gZXZlbnRzXG4gICAgcHVibGljIGNoYXJ0Q2xpY2tlZChlOmFueSk6dm9pZCB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYXJ0SG92ZXJlZChlOmFueSk6dm9pZCB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgbG9nczphbnlbXTtcbiAgICByZXZpZXdzX2xlbmd0aDpudW1iZXI7XG5cbiAgICBzaG93TG9nKHByb2R1Y3RfbG9nOmFueSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbG9nJyxwcm9kdWN0X2xvZylcbiAgICAgICAgdGhpcy5sb2dzID0gcHJvZHVjdF9sb2c7XG5cbiAgICB9XG5cbiAgICBnb1RvRWRpdEFwcChhcHBJZDpudW1iZXIpe1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvdmVuZG9yL2VkaXQvJHthcHBJZH1gXSk7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
