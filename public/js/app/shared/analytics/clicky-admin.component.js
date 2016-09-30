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
    ClickyAdminComponent.prototype.ngOnChanges = function () {
        if (this.apps.id != null) {
            this.getAnalytics(this.apps.id);
        }
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ClickyAdminComponent.prototype, "apps", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmFseXRpY3MvY2xpY2t5LWFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBDLGVBQWUsQ0FBQyxDQUFBO0FBRTFELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBWXRFO0lBbUJJLDhCQUFvQixjQUE0QixFQUM1QixlQUE4QixFQUM5QixPQUFjO1FBRmQsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQW5CbEMsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFPLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBTyxFQUFFLENBQUM7UUFFZixXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBTyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFPLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBR2xCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQStGckIsWUFBWTtRQUNMLGtCQUFhLEdBQWM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUM7U0FDNUQsQ0FBQztRQUNLLG9CQUFlLEdBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMscUJBQWdCLEdBQU87WUFDMUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNKLEtBQUss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QkFBaUI7SUFDckIsQ0FBQztJQUtELHNDQUFPLEdBQVAsVUFBUSxXQUFlO1FBQ25CLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztJQUU1QixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBZ0IsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFwT0Q7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBdkJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzs7NEJBQUE7SUF5UEYsMkJBQUM7QUFBRCxDQXZQQSxBQXVQQyxJQUFBO0FBdlBZLDRCQUFvQix1QkF1UGhDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FuYWx5dGljcy9jbGlja3ktYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uQ2hhbmdlcywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7Q2xpY2t5U2VydmljZX0gZnJvbSBcIi4vY2xpY2t5LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuXG5cbmRlY2xhcmUgdmFyIENoYXJ0OmFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21wLWNsaWNreS1hZG1pbi1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiBgdGVtcGxhdGVzL2NsaWNreS1hZG1pbi50ZW1wbGF0ZS5odG1sYCxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2NsaWNreS50ZW1wbGF0ZS5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDbGlja3lBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcblxuICAgIHZpZXdzOm51bWJlciA9IDA7XG4gICAgaXRlbXM6YW55ID0gW107XG4gICAgZGF0YTphbnkgPSBbXTtcbiAgICBkYXRlczphbnkgPSBbXTtcblxuICAgIGNsaWNrczpudW1iZXIgPSAwO1xuICAgIGl0ZW1zX18yOmFueSA9IFtdO1xuICAgIGRhdGFfXzI6YW55ID0gW107XG4gICAgZGF0ZXNfXzI6YW55ID0gW107XG5cblxuICAgIG9uTG9hZDpib29sZWFuID0gdHJ1ZTtcbiAgICBzZWxlY3RlZDpzdHJpbmcgPSAnJztcblxuICAgIEBJbnB1dCgpXG4gICAgYXBwczphbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGlja3lTZXJ2aWNlOkNsaWNreVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKXtcblxuICAgICAgICBpZih0aGlzLmFwcHMuaWQgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLmdldEFuYWx5dGljcyh0aGlzLmFwcHMuaWQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldEFuYWx5dGljcyhuYW1lOmFueSkge1xuXG4gICAgICAgIGlmICh0aGlzLm9uTG9hZCkge1xuXG4gICAgICAgICAgICB0aGlzLm9uTG9hZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YVswXS5sYWJlbCA9IFwiVmlld3MgdGhpcyB3ZWVrIFwiO1xuICAgICAgICAgICAgdGhpcy5saW5lQ2hhcnREYXRhX18yWzBdLmxhYmVsID0gXCJDbGlja3MgdGhpcyB3ZWVrIFwiO1xuXG4gICAgICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVscyA9IG5ldyBBcnJheSg3KTtcbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzX18yID0gbmV3IEFycmF5KDcpO1xuXG4gICAgICAgICAgICB0aGlzLnZpZXdzID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5jbGlja3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5kYXRlc19fMiA9IFtdO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBuYW1lIG9mIGFwcCAke25hbWV9LCBwYXRoICR7cGF0aH1gKTtcblxuICAgICAgICAgICAgdGhpcy5fY2xpY2t5U2VydmljZS5sb2FkVmlzaXRvcnMobmFtZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVswXS5kYXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2godGhpcy5kYXRhW2ldLmRhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1bTpudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSArdGhpcy5kYXRhW2ldLml0ZW1zW2pdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld3MgKz0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLl9jbGlja3lTZXJ2aWNlLmxvYWRFdmVudHMobmFtZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9fMiA9IGRhdGFbMF0uZGF0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFfXzIucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFfXzIubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNfXzIucHVzaCh0aGlzLmRhdGFfXzJbaV0uZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VtOm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRhdGFfXzJbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9ICt0aGlzLmRhdGFfXzJbaV0uaXRlbXNbal0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja3MgKz0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNfXzJbaV0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlMigpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxpbmVDaGFydFxuICAgIHB1YmxpYyBsaW5lQ2hhcnREYXRhOkFycmF5PGFueT4gPSBbXG4gICAgICAgIHtkYXRhOiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sIGxhYmVsOiAnVmlld3MgdGhpcyB3ZWVrICAnfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExhYmVsczpBcnJheTxhbnk+ID0gbmV3IEFycmF5KDcpO1xuICAgIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zOmFueSA9IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAndmlld3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnZGF5cydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0Q29sb3VyczpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7IC8vIGdyZXlcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMC4yKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMSknLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMC44KSdcbiAgICAgICAgfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExlZ2VuZDpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0VHlwZTpzdHJpbmcgPSAnbGluZSc7XG5cblxuICAgIC8vbGluZUNoYXJ0IDJcbiAgICBwdWJsaWMgbGluZUNoYXJ0RGF0YV9fMjpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7ZGF0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdLCBsYWJlbDogJ0NsaWNrcyB0aGlzIHdlZWsgICd9XG4gICAgXTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0TGFiZWxzX18yOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoNyk7XG4gICAgcHVibGljIGxpbmVDaGFydE9wdGlvbnNfXzI6YW55ID0ge1xuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdjbGlja3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnZGF5cydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0Q29sb3Vyc19fMjpBcnJheTxhbnk+ID0gW1xuICAgICAgICB7IC8vIGRhcmsgZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKSdcbiAgICAgICAgfVxuICAgIF07XG4gICAgcHVibGljIGxpbmVDaGFydExlZ2VuZF9fMjpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgbGluZUNoYXJ0VHlwZV9fMjpzdHJpbmcgPSAnbGluZSc7XG5cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcblxuICAgICAgICBsZXQgX2xpbmVDaGFydERhdGE6QXJyYXk8YW55PiA9IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVDaGFydERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9saW5lQ2hhcnREYXRhW2ldID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBBcnJheSh0aGlzLmxpbmVDaGFydERhdGFbaV0uZGF0YS5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxpbmVDaGFydERhdGFbaV0ubGFiZWwgKyB0aGlzLnZpZXdzLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGluZUNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgX2xpbmVDaGFydERhdGFbaV0uZGF0YVtqXSA9IHRoaXMuaXRlbXNbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVscyA9IHRoaXMuZGF0ZXM7XG4gICAgICAgIHRoaXMubGluZUNoYXJ0RGF0YSA9IF9saW5lQ2hhcnREYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUyKCk6dm9pZCB7XG5cbiAgICAgICAgbGV0IF9saW5lQ2hhcnREYXRhOkFycmF5PGFueT4gPSBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhX18yLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXcgQXJyYXkodGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmRhdGEubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmxhYmVsICsgdGhpcy5jbGlja3MudG9TdHJpbmcoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5saW5lQ2hhcnREYXRhX18yW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfbGluZUNoYXJ0RGF0YVtpXS5kYXRhW2pdID0gdGhpcy5pdGVtc19fMltqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzX18yID0gdGhpcy5kYXRlc19fMjtcbiAgICAgICAgdGhpcy5saW5lQ2hhcnREYXRhX18yID0gX2xpbmVDaGFydERhdGE7XG4gICAgfVxuXG5cbiAgICAvLyBldmVudHNcbiAgICBwdWJsaWMgY2hhcnRDbGlja2VkKGU6YW55KTp2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGU6YW55KTp2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBsb2dzOmFueVtdO1xuICAgIHJldmlld3NfbGVuZ3RoOm51bWJlcjtcblxuICAgIHNob3dMb2cocHJvZHVjdF9sb2c6YW55KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLHByb2R1Y3RfbG9nKVxuICAgICAgICB0aGlzLmxvZ3MgPSBwcm9kdWN0X2xvZztcblxuICAgIH1cblxuICAgIGdvVG9FZGl0QXBwKGFwcElkOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvZWRpdC8ke2FwcElkfWBdKTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
