"use strict";
var product_component_1 = require('./product.component');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require("./product-detail.component");
var browse_page_component_1 = require("./browse-page.component");
exports.PRODUCT_ROUTE = [
    {
        path: '',
        component: product_component_1.ProductComponent,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '', component: product_list_component_1.ProductListComponent },
            { path: 'browse-page/:id', component: browse_page_component_1.BrowsePageComponent },
            { path: ':id', component: product_list_component_1.ProductListComponent },
            { path: ':id/detail', component: product_detail_component_1.ProductDetailComponent }
        ]
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxrQ0FBcUMscUJBQXFCLENBQUMsQ0FBQTtBQUMzRCx1Q0FBeUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRSx5Q0FBcUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNsRSxzQ0FBa0MseUJBQXlCLENBQUMsQ0FBQTtBQUUvQyxxQkFBYSxHQUFXO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0NBQWdCO1FBQzNCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUMsMkNBQW1CLEVBQUM7WUFDeEQsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztZQUM5QyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO1NBQ3REO0tBQ0o7Q0FDRixDQUFDIiwiZmlsZSI6InByb2R1Y3QvcHJvZHVjdC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlcyxcbiAgUm91dGVyTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UHJvZHVjdENvbXBvbmVudH0gICAgICAgZnJvbSAnLi9wcm9kdWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2R1Y3RMaXN0Q29tcG9uZW50fSAgICAgICBmcm9tICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9kdWN0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7QnJvd3NlUGFnZUNvbXBvbmVudH0gZnJvbSBcIi4vYnJvd3NlLXBhZ2UuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JPVVRFOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJ30sXG4gICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdicm93c2UtcGFnZS86aWQnLCBjb21wb25lbnQ6QnJvd3NlUGFnZUNvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJzppZCcsIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICc6aWQvZGV0YWlsJywgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsQ29tcG9uZW50fVxuICAgICAgXVxuICB9XG5dO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
