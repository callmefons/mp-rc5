import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from "./product-detail.component";
import {FORM_DIRECTIVES} from "@angular/forms";
import {BrowsePageComponent} from "./browse-page.component";

@NgModule({
    imports: [],
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductDetailComponent,
        BrowsePageComponent
    ],
    exports: [
        ProductComponent,
        ProductListComponent,
        ProductDetailComponent,
        BrowsePageComponent
    ],
    providers: []
})
export class ProductModule {

}
