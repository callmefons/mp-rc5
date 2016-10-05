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
var router_1 = require('@angular/router');
var product_service_1 = require("../shared/api-service/product/product.service");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var BrowsePageComponent = (function () {
    function BrowsePageComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
        this.loading = true;
        this.readonly = true;
        /*variable for filter function*/
        this.options = [];
        this.temp_products = [];
        this.products_filter = [];
        this.all_tag = [];
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        //Show Category Link
        this.enable = false;
        this.all_industry = false;
        this.all_category = false;
        this.all_language = false;
        this.all_department = false;
        this.tempAllTag = [];
        this.tempDepartment = [];
        this.tempIndustry = [];
        this.tempLanguage = [];
        this.tempCategory = [];
    }
    BrowsePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all_product$ = this._productService.getProduct();
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.service_id = +params['id'];
            _this.all_product$.subscribe(function (products) {
                _this.products = products;
                _this.loading = false;
                //Reset all_tag when user click link navbar
                _this.all_tag = [];
                _this.temp_products = [];
                _this.getProductTags();
            });
        });
    };
    BrowsePageComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    BrowsePageComponent.prototype.getProductTags = function () {
        var _this = this;
        this.products_filter = this.products;
        this._productService.getProductTags()
            .subscribe(function (product_tags) {
            _this.languagesTag = product_tags.languages;
            _this.departmentsTag = product_tags.departments;
            _this.categoriesTag = product_tags.categories;
            _this.industriesTag = product_tags.industries;
            if (_this.languagesTag != [] && _this.departmentsTag != [] && _this.categoriesTag != [] && _this.industriesTag != []) {
                (_a = _this.all_tag).push.apply(_a, _this.industriesTag.concat(_this.categoriesTag, _this.languagesTag, _this.departmentsTag));
            }
            for (var i = 0; i < _this.all_tag.length; i++) {
                if (_this.all_tag[i].id === _this.service_id) {
                    _this.onAutoCheckboxFilterTag(_this.all_tag[i].id, _this.all_tag[i].type);
                    _this.status_type = _this.all_tag[i].type;
                    _this.status_id = _this.all_tag[i].dbid;
                }
            }
            var _a;
        }),
            function (error) { return _this.errorMessage = error; };
    };
    BrowsePageComponent.prototype.onCheckAllIndustry = function (event) {
        this.tempIndustry = [];
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_industry = true;
        }
        else {
            this.all_industry = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'industry') {
                this.onCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type, event);
            }
        }
    };
    BrowsePageComponent.prototype.onCheckAllCategory = function (event) {
        this.tempCategory = [];
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_category = true;
        }
        else {
            this.all_category = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'category') {
                this.onCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type, event);
            }
        }
    };
    BrowsePageComponent.prototype.onCheckAllLanguage = function (event) {
        this.tempLanguage = [];
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_language = true;
        }
        else {
            this.all_language = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'language') {
                this.onCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type, event);
            }
        }
    };
    BrowsePageComponent.prototype.onCheckAllDepartment = function (event) {
        this.tempDepartment = [];
        this.service_id = null;
        if (event.currentTarget.checked == true) {
            this.all_department = true;
        }
        else {
            this.all_department = false;
        }
        for (var i = 0; i < this.all_tag.length; i++) {
            if (this.all_tag[i].type === 'department') {
                this.onCheckboxFilterTag(this.all_tag[i].id, this.all_tag[i].type, event);
            }
        }
    };
    BrowsePageComponent.prototype.onAutoCheckboxFilterTag = function (value, type) {
        switch (type) {
            case 'department':
                this.tempDepartment.push(value);
                break;
            case 'industry':
                this.tempIndustry.push(value);
                break;
            case 'language':
                this.tempLanguage.push(value);
                break;
        }
        this.sendFilter();
    };
    BrowsePageComponent.prototype.onCheckboxFilterTag = function (value, type, event) {
        this.tempAllTag = [];
        if (event.currentTarget.checked == true) {
            switch (type) {
                case 'department':
                    this.tempDepartment.push(value);
                    break;
                case 'industry':
                    this.tempIndustry.push(value);
                    break;
                case 'language':
                    this.tempLanguage.push(value);
                    break;
                case 'category':
                    this.tempCategory.push(value);
                    break;
            }
            this.sendFilter();
        }
        if (event.currentTarget.checked == false) {
            switch (type) {
                case 'department':
                    var i = _.findIndex(this.tempDepartment, (value));
                    this.tempDepartment.splice(i, 1);
                    break;
                case 'industry':
                    var j = _.findIndex(this.tempIndustry, (value));
                    this.tempIndustry.splice(j, 1);
                    break;
                case 'language':
                    var k = _.findIndex(this.tempLanguage, (value));
                    this.tempLanguage.splice(k, 1);
                    break;
            }
            this.sendFilter();
        }
        this.product_length = this.products_filter.length;
    };
    BrowsePageComponent.prototype.goToProductDetail = function (productId) {
        this._router.navigate([("product/" + productId + "/detail")]);
    };
    BrowsePageComponent.prototype.sendFilter = function () {
        this.tempAllTag = [];
        this.tempAllTag.push({
            'filter_by': 'all',
            'value': this.status_id
        }, {
            'type': 'department',
            'value': this.tempDepartment
        }, {
            'type': 'industry',
            'value': this.tempIndustry
        }, {
            'type': 'language',
            'value': this.tempLanguage
        }, {
            'type': 'category',
            'value': this.tempCategory
        });
        //console.log(this.tempAllTag);
    };
    BrowsePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-product',
            templateUrl: 'templates/browse-page.component.html',
            styleUrls: ['styles/product-list.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], BrowsePageComponent);
    return BrowsePageComponent;
}());
exports.BrowsePageComponent = BrowsePageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvYnJvd3NlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFHMUQsZ0NBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFLN0U7O0dBRUc7QUFRSDtJQWlDSSw2QkFBb0IsS0FBcUIsRUFDckIsT0FBZSxFQUNmLGVBQStCO1FBRi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUE5Qm5ELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQVl6QixnQ0FBZ0M7UUFDaEMsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUcxQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxtQkFBYyxHQUFrQixFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxvQkFBb0I7UUFDcEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQWlFeEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFzQjlCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBc0I5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQXNCOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUE2RmhDLGVBQVUsR0FBUyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBTyxFQUFFLENBQUM7SUE5TnRCLENBQUM7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QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDaEI7WUFDSSxXQUFXLEVBQUMsS0FBSztZQUNqQixPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVM7U0FDekIsRUFDRDtZQUNJLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYztTQUMvQixFQUNEO1lBQ0ksTUFBTSxFQUFFLFVBQVU7WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzdCLEVBQ0Q7WUFDSSxNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDN0IsRUFDRDtZQUNJLE1BQU0sRUFBQyxVQUFVO1lBQ2pCLE9BQU8sRUFBQyxJQUFJLENBQUMsWUFBWTtTQUM1QixDQUVBLENBQUM7UUFDTiwrQkFBK0I7SUFDbkMsQ0FBQztJQXRTTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDOzsyQkFBQTtJQW1TRiwwQkFBQztBQUFELENBalNBLEFBaVNDLElBQUE7QUFqU1ksMkJBQW1CLHNCQWlTL0IsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L2Jyb3dzZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9hcGktc2VydmljZS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0VGFnc30gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC10YWcubW9kZWxcIjtcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXByb2R1Y3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Jyb3dzZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG5cbiAgICBlcnJvck1lc3NhZ2U6IGFueTtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICByZWFkb25seTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGFsbF9wcm9kdWN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByb2R1Y3RzOiBhbnlbXTtcblxuICAgIC8qQXV0byBGaWx0ZXIqL1xuICAgIHNlcnZpY2VfaWQ6IG51bWJlcjsvL25ldyBpZFxuICAgIHN0YXR1c190eXBlOiBzdHJpbmc7XG4gICAgc3RhdHVzX2lkOm51bWJlcjsgLy9kYmlkXG5cbiAgICAvKnZhcmlhYmxlIGZvciBmaWx0ZXIgZnVuY3Rpb24qL1xuICAgIG9wdGlvbnM6IGFueSA9IFtdO1xuICAgIHRlbXBfcHJvZHVjdHM6IGFueSA9IFtdO1xuICAgIHByb2R1Y3RzX2ZpbHRlcjogYW55ID0gW107XG4gICAgcHJvZHVjdF9sZW5ndGg6IG51bWJlcjtcblxuICAgIGFsbF90YWc6IGFueVtdID0gW107XG4gICAgbGFuZ3VhZ2VzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gICAgZGVwYXJ0bWVudHNUYWc6IFByb2R1Y3RUYWdzW10gPSBbXTtcbiAgICBpbmR1c3RyaWVzVGFnOiBQcm9kdWN0VGFnc1tdID0gW107XG4gICAgY2F0ZWdvcmllc1RhZzogUHJvZHVjdFRhZ3NbXSA9IFtdO1xuXG4gICAgLy9TaG93IENhdGVnb3J5IExpbmtcbiAgICBlbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWxsX3Byb2R1Y3QkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VfaWQgPSArcGFyYW1zWydpZCddO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfcHJvZHVjdCQuc3Vic2NyaWJlKChwcm9kdWN0czogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9SZXNldCBhbGxfdGFnIHdoZW4gdXNlciBjbGljayBsaW5rIG5hdmJhclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbF90YWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wX3Byb2R1Y3RzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldFByb2R1Y3RUYWdzKCkge1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHNfZmlsdGVyID0gdGhpcy5wcm9kdWN0cztcbiAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3RhZ3MgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IHByb2R1Y3RfdGFncy5pbmR1c3RyaWVzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmd1YWdlc1RhZyAhPSBbXSAmJiB0aGlzLmRlcGFydG1lbnRzVGFnICE9IFtdICYmIHRoaXMuY2F0ZWdvcmllc1RhZyAhPSBbXSAmJiB0aGlzLmluZHVzdHJpZXNUYWcgIT0gW10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsX3RhZy5wdXNoKC4uLnRoaXMuaW5kdXN0cmllc1RhZywgLi4udGhpcy5jYXRlZ29yaWVzVGFnLCAuLi50aGlzLmxhbmd1YWdlc1RhZywgLi4udGhpcy5kZXBhcnRtZW50c1RhZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsX3RhZ1tpXS5pZCA9PT0gdGhpcy5zZXJ2aWNlX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsIHRoaXMuYWxsX3RhZ1tpXS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c190eXBlID0gdGhpcy5hbGxfdGFnW2ldLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfaWQgPSB0aGlzLmFsbF90YWdbaV0uZGJpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgfVxuXG4gICAgYWxsX2luZHVzdHJ5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoZWNrQWxsSW5kdXN0cnkoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIHRoaXMudGVtcEluZHVzdHJ5ID0gW107XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlX2lkID0gbnVsbDtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsX2luZHVzdHJ5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsX2luZHVzdHJ5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsX3RhZ1tpXS50eXBlID09PSAnaW5kdXN0cnknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoZWNrYm94RmlsdGVyVGFnKHRoaXMuYWxsX3RhZ1tpXS5pZCwgdGhpcy5hbGxfdGFnW2ldLnR5cGUsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWxsX2NhdGVnb3J5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoZWNrQWxsQ2F0ZWdvcnkoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIHRoaXMudGVtcENhdGVnb3J5ID0gW107XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlX2lkID0gbnVsbDtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsX2NhdGVnb3J5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsX2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsX3RhZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsX3RhZ1tpXS50eXBlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoZWNrYm94RmlsdGVyVGFnKHRoaXMuYWxsX3RhZ1tpXS5pZCx0aGlzLmFsbF90YWdbaV0udHlwZSwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhbGxfbGFuZ3VhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uQ2hlY2tBbGxMYW5ndWFnZShldmVudDogYW55KSB7XG5cbiAgICAgICAgdGhpcy50ZW1wTGFuZ3VhZ2UgPSBbXTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VfaWQgPSBudWxsO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGxfbGFuZ3VhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxfdGFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdsYW5ndWFnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hlY2tib3hGaWx0ZXJUYWcodGhpcy5hbGxfdGFnW2ldLmlkLHRoaXMuYWxsX3RhZ1tpXS50eXBlLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFsbF9kZXBhcnRtZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkNoZWNrQWxsRGVwYXJ0bWVudChldmVudDogYW55KSB7XG5cbiAgICAgICAgdGhpcy50ZW1wRGVwYXJ0bWVudCA9IFtdO1xuXG4gICAgICAgIHRoaXMuc2VydmljZV9pZCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmFsbF9kZXBhcnRtZW50ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsX2RlcGFydG1lbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxfdGFnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxfdGFnW2ldLnR5cGUgPT09ICdkZXBhcnRtZW50Jykge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGVja2JveEZpbHRlclRhZyh0aGlzLmFsbF90YWdbaV0uaWQsdGhpcy5hbGxfdGFnW2ldLnR5cGUsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25BdXRvQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSx0eXBlOnN0cmluZykge1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0bWVudCc6XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRGVwYXJ0bWVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZHVzdHJ5JzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmR1c3RyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xhbmd1YWdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBMYW5ndWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZEZpbHRlcigpO1xuXG4gICAgfVxuXG4gICAgb25DaGVja2JveEZpbHRlclRhZyh2YWx1ZTogYW55LHR5cGU6c3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICAgICAgdGhpcy50ZW1wQWxsVGFnICA9IFtdO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkZXBhcnRtZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRGVwYXJ0bWVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5kdXN0cnknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmR1c3RyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBMYW5ndWFnZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcnknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBDYXRlZ29yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VuZEZpbHRlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RlcGFydG1lbnQnOlxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMudGVtcERlcGFydG1lbnQsICh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBEZXBhcnRtZW50LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5kdXN0cnknOlxuICAgICAgICAgICAgICAgICAgICBsZXQgaiA9IF8uZmluZEluZGV4KHRoaXMudGVtcEluZHVzdHJ5LCAodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kdXN0cnkuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsYW5ndWFnZSc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBrID0gXy5maW5kSW5kZXgodGhpcy50ZW1wTGFuZ3VhZ2UsICh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBMYW5ndWFnZS5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbmRGaWx0ZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0X2xlbmd0aCA9IHRoaXMucHJvZHVjdHNfZmlsdGVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnb1RvUHJvZHVjdERldGFpbChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2Bwcm9kdWN0LyR7cHJvZHVjdElkfS9kZXRhaWxgXSk7XG4gICAgfVxuXG4gICAgdGVtcEFsbFRhZyA6IGFueSA9IFtdO1xuICAgIHRlbXBEZXBhcnRtZW50OiBhbnkgPSBbXTtcbiAgICB0ZW1wSW5kdXN0cnk6IGFueSA9IFtdO1xuICAgIHRlbXBMYW5ndWFnZTogYW55ID0gW107XG4gICAgdGVtcENhdGVnb3J5OmFueSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBzZW5kRmlsdGVyKCkge1xuICAgICAgICB0aGlzLnRlbXBBbGxUYWcgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wQWxsVGFnLnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2ZpbHRlcl9ieSc6J2FsbCcsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzp0aGlzLnN0YXR1c19pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdkZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnRlbXBEZXBhcnRtZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ2luZHVzdHJ5JyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnRlbXBJbmR1c3RyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdsYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy50ZW1wTGFuZ3VhZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOidjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzp0aGlzLnRlbXBDYXRlZ29yeVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGVtcEFsbFRhZyk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
