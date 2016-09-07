import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";
// import {ProductTags} from "../shared/models/product-tag.model";
// import {ProductService} from "../shared/api-service/product/product.service";
import {Router} from "@angular/router";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit, OnDestroy {

    ngOnInit(){

    }

    ngOnDestroy(){

    }

}
