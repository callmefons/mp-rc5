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
        // this.getAnalytics("ADA");
        this.getProductOfDeveloper();
    };
    ClickyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClickyComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.apps$ = this._productService.getProductOfDeveloper();
        this.sub = this.apps$.subscribe(function (apps) {
            _this.apps = apps;
            //sconsole.log(apps[0].name);
            _this.getAnalytics(apps[0].id);
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
            //console.log(`name of app ${name}, path ${path}`);
            this._clickyService.loadVisitors(name)
                .subscribe(function (data) {
                //console.log(data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBS3RFLG1FQUFtRTtBQVNuRTtJQW9CRSx5QkFBb0IsY0FBNEIsRUFDNUIsZUFBOEIsRUFDOUIsT0FBYztRQUZkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFwQmxDLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFPLEVBQUUsQ0FBQztRQUdsQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJckIsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQXNHaEIsWUFBWTtRQUNMLGtCQUFhLEdBQWM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUM7U0FDMUQsQ0FBQztRQUNLLG9CQUFlLEdBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMscUJBQWdCLEdBQU87WUFDNUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFF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QUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxTQUFTO0lBQ0Ysc0NBQVksR0FBbkIsVUFBb0IsQ0FBSztRQUN2QixpQkFBaUI7SUFDbkIsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsaUJBQWlCO0lBQ25CLENBQUM7SUFLRCxpQ0FBTyxHQUFQLFVBQVEsV0FBZTtRQUNyQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFFMUIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQWdCLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBdFFIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7dUJBQUE7SUFvUUYsc0JBQUM7QUFBRCxDQWxRQSxBQWtRQyxJQUFBO0FBbFFZLHVCQUFlLGtCQWtRM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYW5hbHl0aWNzL2NsaWNreS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0NsaWNreVNlcnZpY2V9IGZyb20gXCIuL2NsaWNreS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gJy4uL3Byb2R1Y3QvaW5kZXgnO1xuXG5cbmRlY2xhcmUgdmFyIENoYXJ0OmFueTtcbi8vIGltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NoYXJ0LmpzL2Rpc3QvQ2hhcnQuYnVuZGxlLmpzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtY2xpY2t5LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiBgdGVtcGxhdGVzL2NsaWNreS50ZW1wbGF0ZS5odG1sYCxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9jbGlja3kudGVtcGxhdGUuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQ2xpY2t5Q29tcG9uZW50IHtcblxuICB2aWV3czpudW1iZXIgPSAwO1xuICBpdGVtczphbnkgPSBbXTtcbiAgZGF0YTphbnkgPSBbXTtcbiAgZGF0ZXM6YW55ID0gW107XG5cbiAgY2xpY2tzOm51bWJlciA9IDA7XG4gIGl0ZW1zX18yOmFueSA9IFtdO1xuICBkYXRhX18yOmFueSA9IFtdO1xuICBkYXRlc19fMjphbnkgPSBbXTtcblxuXG4gIG9uTG9hZDpib29sZWFuID0gdHJ1ZTtcbiAgc2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG5cbiAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgYXBwcyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBhcHBzOmFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpY2t5U2VydmljZTpDbGlja3lTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5nZXRBbmFseXRpY3MoXCJBREFcIik7XG4gICAgdGhpcy5nZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKSB7XG4gICAgdGhpcy5hcHBzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgIHRoaXMuc3ViID0gdGhpcy5hcHBzJC5zdWJzY3JpYmUoKGFwcHM6YW55KSA9PiB7XG4gICAgICB0aGlzLmFwcHMgPSBhcHBzO1xuICAgICAgLy9zY29uc29sZS5sb2coYXBwc1swXS5uYW1lKTtcbiAgICAgIHRoaXMuZ2V0QW5hbHl0aWNzKGFwcHNbMF0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QW5hbHl0aWNzKG5hbWU6YW55KSB7XG5cbiAgICBpZiAodGhpcy5vbkxvYWQpIHtcblxuICAgICAgdGhpcy5vbkxvYWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuYW1lO1xuXG4gICAgICB0aGlzLmxpbmVDaGFydERhdGFbMF0ubGFiZWwgPSBcIlZpZXdzIHRoaXMgd2VlayBcIjtcbiAgICAgIHRoaXMubGluZUNoYXJ0RGF0YV9fMlswXS5sYWJlbCA9IFwiQ2xpY2tzIHRoaXMgd2VlayBcIjtcblxuICAgICAgdGhpcy5saW5lQ2hhcnRMYWJlbHMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICB0aGlzLmxpbmVDaGFydExhYmVsc19fMiA9IG5ldyBBcnJheSg3KTtcblxuICAgICAgdGhpcy52aWV3cyA9IDA7XG4gICAgICB0aGlzLmRhdGVzID0gW107XG5cbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcbiAgICAgIHRoaXMuZGF0ZXNfXzIgPSBbXTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhgbmFtZSBvZiBhcHAgJHtuYW1lfSwgcGF0aCAke3BhdGh9YCk7XG5cbiAgICAgIHRoaXMuX2NsaWNreVNlcnZpY2UubG9hZFZpc2l0b3JzKG5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFbMF0uZGF0ZXM7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgLy9EYXRlXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaCh0aGlzLmRhdGFbaV0uZGF0ZSk7XG5cbiAgICAgICAgICAgICAgdmFyIHN1bTpudW1iZXIgPSAwO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YVtpXS5pdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSArPSArdGhpcy5kYXRhW2ldLml0ZW1zW2pdLnZhbHVlO1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy52aWV3cyArPSBzdW07XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0gPSBzdW07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25Mb2FkID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMuX2NsaWNreVNlcnZpY2UubG9hZEV2ZW50cyhuYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhX18yID0gZGF0YVswXS5kYXRlcztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFfXzIubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAvL0RhdGVcbiAgICAgICAgICAgICAgdGhpcy5kYXRlc19fMi5wdXNoKHRoaXMuZGF0YV9fMltpXS5kYXRlKTtcblxuICAgICAgICAgICAgICB2YXIgc3VtOm51bWJlciA9IDA7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhX18yW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9ICt0aGlzLmRhdGFfXzJbaV0uaXRlbXNbal0udmFsdWU7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmNsaWNrcyArPSBzdW07XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXNfXzJbaV0gPSBzdW07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlMigpO1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxpbmVDaGFydFxuICBwdWJsaWMgbGluZUNoYXJ0RGF0YTpBcnJheTxhbnk+ID0gW1xuICAgIHtkYXRhOiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sIGxhYmVsOiAnVmlld3MgdGhpcyB3ZWVrICAnfVxuICBdO1xuICBwdWJsaWMgbGluZUNoYXJ0TGFiZWxzOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoNyk7XG4gIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zOmFueSA9IHtcbiAgICBhbmltYXRpb246IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAndmlld3MnXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnZGF5cydcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH07XG4gIHB1YmxpYyBsaW5lQ2hhcnRDb2xvdXJzOkFycmF5PGFueT4gPSBbXG4gICAgeyAvLyBncmV5XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuMiknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuOCknXG4gICAgfVxuICBdO1xuICBwdWJsaWMgbGluZUNoYXJ0TGVnZW5kOmJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgbGluZUNoYXJ0VHlwZTpzdHJpbmcgPSAnbGluZSc7XG5cblxuICAvL2xpbmVDaGFydCAyXG4gIHB1YmxpYyBsaW5lQ2hhcnREYXRhX18yOkFycmF5PGFueT4gPSBbXG4gICAge2RhdGE6IFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgbGFiZWw6ICdDbGlja3MgdGhpcyB3ZWVrICAnfVxuICBdO1xuICBwdWJsaWMgbGluZUNoYXJ0TGFiZWxzX18yOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoNyk7XG4gIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zX18yOmFueSA9IHtcbiAgICBhbmltYXRpb246IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnY2xpY2tzJ1xuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ2RheXMnXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuICB9O1xuICBwdWJsaWMgbGluZUNoYXJ0Q29sb3Vyc19fMjpBcnJheTxhbnk+ID0gW1xuICAgIHsgLy8gZGFyayBncmV5XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDAuMiknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDEpJ1xuICAgIH1cbiAgXTtcbiAgcHVibGljIGxpbmVDaGFydExlZ2VuZF9fMjpib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGxpbmVDaGFydFR5cGVfXzI6c3RyaW5nID0gJ2xpbmUnO1xuXG5cbiAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuXG4gICAgbGV0IF9saW5lQ2hhcnREYXRhOkFycmF5PGFueT4gPSBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVDaGFydERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9saW5lQ2hhcnREYXRhW2ldID0ge1xuICAgICAgICBkYXRhOiBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoKSxcbiAgICAgICAgbGFiZWw6IHRoaXMubGluZUNoYXJ0RGF0YVtpXS5sYWJlbCArIHRoaXMudmlld3MudG9TdHJpbmcoKVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5saW5lQ2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgX2xpbmVDaGFydERhdGFbaV0uZGF0YVtqXSA9IHRoaXMuaXRlbXNbal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5saW5lQ2hhcnRMYWJlbHMgPSB0aGlzLmRhdGVzO1xuICAgIHRoaXMubGluZUNoYXJ0RGF0YSA9IF9saW5lQ2hhcnREYXRhO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZTIoKTp2b2lkIHtcblxuICAgIGxldCBfbGluZUNoYXJ0RGF0YTpBcnJheTxhbnk+ID0gbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YV9fMi5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfbGluZUNoYXJ0RGF0YVtpXSA9IHtcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KHRoaXMubGluZUNoYXJ0RGF0YV9fMltpXS5kYXRhLmxlbmd0aCksXG4gICAgICAgIGxhYmVsOiB0aGlzLmxpbmVDaGFydERhdGFfXzJbaV0ubGFiZWwgKyB0aGlzLmNsaWNrcy50b1N0cmluZygpXG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxpbmVDaGFydERhdGFfXzJbaV0uZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXS5kYXRhW2pdID0gdGhpcy5pdGVtc19fMltqXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxpbmVDaGFydExhYmVsc19fMiA9IHRoaXMuZGF0ZXNfXzI7XG4gICAgdGhpcy5saW5lQ2hhcnREYXRhX18yID0gX2xpbmVDaGFydERhdGE7XG4gIH1cblxuXG4gIC8vIGV2ZW50c1xuICBwdWJsaWMgY2hhcnRDbGlja2VkKGU6YW55KTp2b2lkIHtcbiAgICAvL2NvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZChlOmFueSk6dm9pZCB7XG4gICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGxvZ3M6YW55W107XG4gIHJldmlld3NfbGVuZ3RoOm51bWJlcjtcblxuICBzaG93TG9nKHByb2R1Y3RfbG9nOmFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLHByb2R1Y3RfbG9nKVxuICAgIHRoaXMubG9ncyA9IHByb2R1Y3RfbG9nO1xuXG4gIH1cblxuICBnb1RvRWRpdEFwcChhcHBJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvZWRpdC8ke2FwcElkfWBdKTtcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
