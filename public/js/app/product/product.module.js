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
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            exports: [
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx1Q0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCx5Q0FBcUMsNEJBQTRCLENBQUMsQ0FBQTtBQWlCbEU7SUFBQTtJQUVBLENBQUM7SUFoQkQ7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7Z0JBQ2hCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9DQUFnQjtnQkFDaEIsNkNBQW9CO2dCQUNwQixpREFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDOztxQkFBQTtJQUdGLG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb2R1Y3RDb21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9kdWN0TGlzdENvbXBvbmVudH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZHVjdERldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2R1Y3RDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0RGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFByb2R1Y3RDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0RGV0YWlsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
