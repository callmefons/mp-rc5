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
    search_keyword:string;
    sub: Subscription;
    products:any;
    loading:boolean = true;
    noResult:boolean=false;

    constructor(private route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {

    }

    ngOnInit() {
        this.loading = true;
        this.noResult = false;
        
        this.sub = this.route
            .params
            .subscribe(params => {
                this.search_keyword = params['q'];
                this._productService.searchProduct(this.search_keyword)
                    .subscribe((product:any)=>{

                    if(product.data.length > 0){
                            this.products = product.data;
                            this.loading = false;
                            this.noResult = false;
                        }else{
                            this.loading = false;
                            this.noResult = true;
                        }


                    });

            });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    goToProductDetail(productId: number) {
        this._router.navigate([`product/${productId}/detail`]);
    }


}
