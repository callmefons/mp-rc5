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
            _this.getAnalytics(apps[0].name);
        });
    };
    ClickyAdminComponent.prototype.getAnalytics = function (name) {
        var _this = this;
        this.selected = name;
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
                // console.log(this.items);
                // console.log(this.views);
                // console.log(this.dates);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LWFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBSXRFLG1FQUFtRTtBQVNuRTtJQW9CSSw4QkFBb0IsY0FBNEIsRUFDNUIsZUFBOEIsRUFDOUIsT0FBYztRQUZkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFwQmxDLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFPLEVBQUUsQ0FBQztRQUdsQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJckIsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQXlHaEIsWUFBWTtRQUNMLGtCQUFhLEdBQWM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUM7U0FDNUQsQ0FBQztRQUNLLG9CQUFlLEdBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMscUJBQWdCLEdBQU87WUFDMUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFB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Q0FBaUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFFNUIsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQWdCLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBclBMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzs7NEJBQUE7SUFtUEYsMkJBQUM7QUFBRCxDQWpQQSxBQWlQQyxJQUFBO0FBalBZLDRCQUFvQix1QkFpUGhDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FuYWx5dGljcy9jbGlja3ktYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9jbGlja3kuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cblxuZGVjbGFyZSB2YXIgQ2hhcnQ6YW55O1xuLy8gaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2hhcnQuanMvZGlzdC9DaGFydC5idW5kbGUuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXAtY2xpY2t5LWFkbWluLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6IGB0ZW1wbGF0ZXMvY2xpY2t5LWFkbWluLnRlbXBsYXRlLmh0bWxgLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvY2xpY2t5LnRlbXBsYXRlLmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENsaWNreUFkbWluQ29tcG9uZW50IHtcblxuICAgIHZpZXdzOm51bWJlciA9IDA7XG4gICAgaXRlbXM6YW55ID0gW107XG4gICAgZGF0YTphbnkgPSBbXTtcbiAgICBkYXRlczphbnkgPSBbXTtcblxuICAgIGNsaWNrczpudW1iZXIgPSAwO1xuICAgIGl0ZW1zX18yOmFueSA9IFtdO1xuICAgIGRhdGFfXzI6YW55ID0gW107XG4gICAgZGF0ZXNfXzI6YW55ID0gW107XG5cblxuICAgIG9uTG9hZDpib29sZWFuID0gdHJ1ZTtcbiAgICBzZWxlY3RlZDpzdHJpbmcgPSAnJztcblxuICAgIHN1YjpTdWJzY3JpcHRpb247XG4gICAgYXBwcyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICAgIGFwcHM6YW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWNreVNlcnZpY2U6Q2xpY2t5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QW5hbHl0aWNzKFwiQURBXCIpO1xuICAgICAgICAvLyB0aGlzLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RPZkRldmVsb3BlcigpIHtcbiAgICAgICAgdGhpcy5hcHBzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuYXBwcyQuc3Vic2NyaWJlKChhcHBzOmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwcztcbiAgICAgICAgICAgIHRoaXMuZ2V0QW5hbHl0aWNzKGFwcHNbMF0ubmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFuYWx5dGljcyhuYW1lOnN0cmluZykge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLm9uTG9hZCkge1xuXG4gICAgICAgICAgICB0aGlzLm9uTG9hZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YVswXS5sYWJlbCA9IFwiVmlld3MgdGhpcyB3ZWVrIFwiO1xuICAgICAgICAgICAgdGhpcy5saW5lQ2hhcnREYXRhX18yWzBdLmxhYmVsID0gXCJDbGlja3MgdGhpcyB3ZWVrIFwiO1xuXG4gICAgICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVscyA9IG5ldyBBcnJheSg3KTtcbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzX18yID0gbmV3IEFycmF5KDcpO1xuXG4gICAgICAgICAgICB0aGlzLnZpZXdzID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5jbGlja3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5kYXRlc19fMiA9IFtdO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBuYW1lIG9mIGFwcCAke25hbWV9LCBwYXRoICR7cGF0aH1gKTtcblxuICAgICAgICAgICAgdGhpcy5fY2xpY2t5U2VydmljZS5sb2FkVmlzaXRvcnMobmFtZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVswXS5kYXRlcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaCh0aGlzLmRhdGFbaV0uZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VtOm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRhdGFbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9ICt0aGlzLmRhdGFbaV0uaXRlbXNbal0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3cyArPSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZpZXdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5fY2xpY2t5U2VydmljZS5sb2FkRXZlbnRzKG5hbWUpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFfXzIgPSBkYXRhWzBdLmRhdGVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YV9fMi5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc19fMi5wdXNoKHRoaXMuZGF0YV9fMltpXS5kYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdW06bnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YV9fMltpXS5pdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gK3RoaXMuZGF0YV9fMltpXS5pdGVtc1tqXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrcyArPSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc19fMltpXSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGluZUNoYXJ0XG4gICAgcHVibGljIGxpbmVDaGFydERhdGE6QXJyYXk8YW55PiA9IFtcbiAgICAgICAge2RhdGE6IFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgbGFiZWw6ICdWaWV3cyB0aGlzIHdlZWsgICd9XG4gICAgXTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0TGFiZWxzOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoNyk7XG4gICAgcHVibGljIGxpbmVDaGFydE9wdGlvbnM6YW55ID0ge1xuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0Q29sb3VyczpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7IC8vIGdyZXlcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMC4yKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMSknLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMC44KSdcbiAgICAgICAgfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExlZ2VuZDpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0VHlwZTpzdHJpbmcgPSAnbGluZSc7XG5cblxuICAgIC8vbGluZUNoYXJ0IDJcbiAgICBwdWJsaWMgbGluZUNoYXJ0RGF0YV9fMjpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7ZGF0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdLCBsYWJlbDogJ0NsaWNrcyB0aGlzIHdlZWsgICd9XG4gICAgXTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0TGFiZWxzX18yOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoNyk7XG4gICAgcHVibGljIGxpbmVDaGFydE9wdGlvbnNfXzI6YW55ID0ge1xuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0Q29sb3Vyc19fMjpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7IC8vIGRhcmsgZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKSdcbiAgICAgICAgfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExlZ2VuZF9fMjpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0VHlwZV9fMjpzdHJpbmcgPSAnbGluZSc7XG5cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcblxuICAgICAgICBsZXQgX2xpbmVDaGFydERhdGE6QXJyYXk8YW55PiA9IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVDaGFydERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9saW5lQ2hhcnREYXRhW2ldID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGFbaV0uZGF0YS5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxpbmVDaGFydERhdGFbaV0ubGFiZWwgKyB0aGlzLnZpZXdzLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGluZUNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgX2xpbmVDaGFydERhdGFbaV0uZGF0YVtqXSA9IHRoaXMuaXRlbXNbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVscyA9IHRoaXMuZGF0ZXM7XG4gICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YSA9IF9saW5lQ2hhcnREYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUyKCk6dm9pZCB7XG5cbiAgICAgICAgbGV0IF9saW5lQ2hhcnREYXRhOkFycmF5PGFueT4gPSBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhX18yLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmRhdGEubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmxhYmVsICsgdGhpcy5jbGlja3MudG9TdHJpbmcoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXS5kYXRhW2pdID0gdGhpcy5pdGVtc19fMltqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzX18yID0gdGhpcy5kYXRlc19fMjtcbiAgICAgICAgdGhpcy5saW5lQ2hhcnREYXRhX18yID0gX2xpbmVDaGFydERhdGE7XG4gICAgfVxuXG5cbiAgICAvLyBldmVudHNcbiAgICBwdWJsaWMgY2hhcnRDbGlja2VkKGU6YW55KTp2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGU6YW55KTp2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBsb2dzOmFueVtdO1xuICAgIHJldmlld3NfbGVuZ3RoOm51bWJlcjtcblxuICAgIHNob3dMb2cocHJvZHVjdF9sb2c6YW55KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLHByb2R1Y3RfbG9nKVxuICAgICAgICB0aGlzLmxvZ3MgPSBwcm9kdWN0X2xvZztcblxuICAgIH1cblxuICAgIGdvVG9FZGl0QXBwKGFwcElkOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvZWRpdC8ke2FwcElkfWBdKTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
