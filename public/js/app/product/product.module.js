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
var product_component_1 = require('./product.component');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require("./product-detail.component");
var browse_page_component_1 = require("./browse-page.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                browse_page_component_1.BrowsePageComponent
            ],
            exports: [
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                browse_page_component_1.BrowsePageComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx1Q0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCx5Q0FBcUMsNEJBQTRCLENBQUMsQ0FBQTtBQUVsRSxzQ0FBa0MseUJBQXlCLENBQUMsQ0FBQTtBQWtCNUQ7SUFBQTtJQUVBLENBQUM7SUFsQkQ7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7Z0JBQ2hCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0QiwyQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsb0NBQWdCO2dCQUNoQiw2Q0FBb0I7Z0JBQ3BCLGlEQUFzQjtnQkFDdEIsMkNBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzs7cUJBQUE7SUFHRixvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUEiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9kdWN0Q29tcG9uZW50fSBmcm9tICcuL3Byb2R1Y3QuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZHVjdExpc3RDb21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2R1Y3REZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtCcm93c2VQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9icm93c2UtcGFnZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3REZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEJyb3dzZVBhZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3REZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEJyb3dzZVBhZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
