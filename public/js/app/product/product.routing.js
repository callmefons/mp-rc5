"use strict";
var product_component_1 = require('./product.component');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require("./product-detail.component");
exports.PRODUCT_ROUTE = [
    {
        path: '',
        component: product_component_1.ProductComponent,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '', component: product_list_component_1.ProductListComponent },
            { path: ':id', component: product_list_component_1.ProductListComponent },
            { path: ':id/detail', component: product_detail_component_1.ProductDetailComponent }
        ]
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxrQ0FBcUMscUJBQXFCLENBQUMsQ0FBQTtBQUMzRCx1Q0FBeUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRSx5Q0FBcUMsNEJBQTRCLENBQUMsQ0FBQTtBQUVyRCxxQkFBYSxHQUFXO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0NBQWdCO1FBQzNCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO1lBQzlDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUM7U0FDdEQ7S0FDSjtDQUNGLENBQUMiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0LnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGVzLFxuICBSb3V0ZXJNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtQcm9kdWN0Q29tcG9uZW50fSAgICAgICBmcm9tICcuL3Byb2R1Y3QuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZHVjdExpc3RDb21wb25lbnR9ICAgICAgIGZyb20gJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2R1Y3REZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgUFJPRFVDVF9ST1VURTogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0Q29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnJywgcGF0aE1hdGNoOiAnZnVsbCd9LFxuICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAnOmlkJywgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJzppZC9kZXRhaWwnLCBjb21wb25lbnQ6IFByb2R1Y3REZXRhaWxDb21wb25lbnR9XG4gICAgICBdXG4gIH1cbl07XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
