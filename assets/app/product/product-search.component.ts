import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router}    from '@angular/router';
import {Subscription, Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
import {ProductService} from "../shared/api-service/product/product.service";
import {ProductTags} from "../shared/models/product-tag.model";

declare var _: any;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-product',
    templateUrl: 'templates/product-search.component.html'
})

export class ProductSearchComponent implements OnInit, OnDestroy {

    // public status: Object = {
    //     isFirstOpen: true,
    //     isFirstDisabled: false,
    //     category: false
    // };
    sub: Subscription;
    constructor(private route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {

    }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                let name = params['q'];
                this._productService.searchProduct(name)
                    .subscribe((res:any)=>{
                        console.log(res);
                    });

                // console.log(name);

            });
    }

    ngOnDestroy() {
        // if (this.sub) {
        //     this.sub.unsubscribe();
        // }
    }


}
