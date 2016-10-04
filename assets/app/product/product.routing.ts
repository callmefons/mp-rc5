import {ModuleWithProviders} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {ProductComponent}       from './product.component';
import {ProductListComponent}       from './product-list.component';
import {ProductDetailComponent} from "./product-detail.component";
import {BrowsePageComponent} from "./browse-page.component";
import {ProductSearchComponent} from "./product-search.component";

export const PRODUCT_ROUTE: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full'},
      {path: '', component: ProductListComponent},
      {path: 'browse-page/:id', component:BrowsePageComponent},
      {path: ':id', component: ProductListComponent},
      {path: ':id/detail', component: ProductDetailComponent},
      {path: 'search/:q', component: ProductSearchComponent}
      ]
  }
];

