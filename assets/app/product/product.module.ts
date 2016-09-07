import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from "./product-detail.component";
import {FORM_DIRECTIVES} from "@angular/forms";

@NgModule({
    imports: [],
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductDetailComponent
    ],
    exports: [
        ProductComponent,
        ProductListComponent,
        ProductDetailComponent,
    ],
    providers: []
})
export class ProductModule {

}
