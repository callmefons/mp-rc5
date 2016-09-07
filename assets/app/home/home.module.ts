import {NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ProductService} from "../shared/api-service/product/product.service";
import {routing} from './home.routing';
import {HomeListComponent} from "./home-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing],
    declarations: [HomeComponent,
        HomeListComponent],
    exports: [
        HomeComponent,
        HomeListComponent],
    providers: []
})
export class HomeModule {

}
