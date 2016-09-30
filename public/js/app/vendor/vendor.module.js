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
var vendor_routing_1 = require('./vendor.routing');
var vendor_component_1 = require('./vendor.component');
var vendor_profile_component_1 = require("./vendor-profile.component");
var vendor_dashboard_component_1 = require("./vendor-dashboard.component");
var vendor_listing_component_1 = require("./vendor-listing.component");
var vendor_edit_product_component_1 = require("./vendor-edit-product.component");
var vendor_add_product_component_1 = require("./vendor-add-product.component");
var VendorModule = (function () {
    function VendorModule() {
    }
    VendorModule = __decorate([
        core_1.NgModule({
            imports: [
                vendor_routing_1.VENDOR_ROUTES,
            ],
            declarations: [
                vendor_component_1.VendorComponent,
                vendor_profile_component_1.VendorProfileComponent,
                vendor_dashboard_component_1.VendorDashboardComponent,
                vendor_listing_component_1.VendorListingComponent,
                vendor_add_product_component_1.VendorAddProductComponent,
                vendor_edit_product_component_1.VendorEditProductComponent,
            ],
            exports: [
                vendor_component_1.VendorComponent,
                vendor_profile_component_1.VendorProfileComponent,
                vendor_dashboard_component_1.VendorDashboardComponent,
                vendor_listing_component_1.VendorListingComponent,
                vendor_add_product_component_1.VendorAddProductComponent,
                vendor_edit_product_component_1.VendorEditProductComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VendorModule);
    return VendorModule;
}());
exports.VendorModule = VendorModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci92ZW5kb3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFHL0QsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQseUNBQXFDLDRCQUE0QixDQUFDLENBQUE7QUFDbEUsMkNBQXVDLDhCQUE4QixDQUFDLENBQUE7QUFDdEUseUNBQXFDLDRCQUE0QixDQUFDLENBQUE7QUFDbEUsOENBQXlDLGlDQUFpQyxDQUFDLENBQUE7QUFFM0UsNkNBQXdDLGdDQUFnQyxDQUFDLENBQUE7QUF5QnpFO0lBQUE7SUFFQSxDQUFDO0lBekJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLGlEQUFzQjtnQkFDdEIscURBQXdCO2dCQUN4QixpREFBc0I7Z0JBQ3RCLHdEQUF5QjtnQkFDekIsMERBQTBCO2FBQzdCO1lBRUQsT0FBTyxFQUFFO2dCQUNMLGtDQUFlO2dCQUNmLGlEQUFzQjtnQkFDdEIscURBQXdCO2dCQUN4QixpREFBc0I7Z0JBQ3RCLHdEQUF5QjtnQkFDekIsMERBQTBCO2FBQzdCO1NBRUosQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJ2ZW5kb3IvdmVuZG9yLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7VkVORE9SX1JPVVRFU30gZnJvbSAnLi92ZW5kb3Iucm91dGluZyc7XG5pbXBvcnQge1ZlbmRvckNvbXBvbmVudH0gZnJvbSAnLi92ZW5kb3IuY29tcG9uZW50JztcbmltcG9ydCB7VmVuZG9yUHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckRhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmVuZG9yTGlzdGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvckVkaXRQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtWZW5kb3JBZGRQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3ItYWRkLXByb2R1Y3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBWRU5ET1JfUk9VVEVTLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZlbmRvckNvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yUHJvZmlsZUNvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBWZW5kb3JMaXN0aW5nQ29tcG9uZW50LFxuICAgICAgICBWZW5kb3JBZGRQcm9kdWN0Q29tcG9uZW50LFxuICAgICAgICBWZW5kb3JFZGl0UHJvZHVjdENvbXBvbmVudCxcbiAgICBdLFxuXG4gICAgZXhwb3J0czogW1xuICAgICAgICBWZW5kb3JDb21wb25lbnQsXG4gICAgICAgIFZlbmRvclByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIFZlbmRvckRhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yQWRkUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgVmVuZG9yRWRpdFByb2R1Y3RDb21wb25lbnQsXG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIFZlbmRvck1vZHVsZSB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
