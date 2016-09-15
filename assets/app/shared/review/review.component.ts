import {Component, OnInit,EventEmitter} from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";
import {Location} from '@angular/common';

import {Review} from '../../shared/models/review.model';
import {ProductService} from "../api-service/product/product.service";
import {Product} from "../models/product.model";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ReviewService} from "../api-service/review.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Input,Output} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'customer-review-service',
  templateUrl: 'templates/review.component.html',
  styleUrls: ['styles/review.component.css'],

})

export class ReviewComponent implements OnInit {


  //Input Form Product Detail
  @Input()
  productId: any;

  @Output()
  success: EventEmitter<any> = new EventEmitter();

  title:string = 'Review a Service';
  errorMessage:string;
  review:Review[] = [];

  products:Product[] = [];
  products$:Observable<any>;
  loading = true;
  sub:Subscription;

  product:string;


  sub_review : Subscription;
  review$:Observable<any>;
  rating:number = 1;

  disabled:boolean = true;

  myForm:FormGroup;

  constructor(private _location:Location,
              private _fb:FormBuilder,
              public _reviewService:ReviewService,
              public _productService:ProductService,
              private _router:Router,
            private route: ActivatedRoute) {


    this.myForm = this._fb.group({
      reviewcomment: [''],
      reviewscore: [''],
      productid: ['']
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    if(this.sub)this.sub.unsubscribe();
    if(this.sub_review)this.sub_review.unsubscribe();
  }

  id:any;
  getProducts() {
    this.products$ = this._productService.getProduct();
    this.sub = this.products$.subscribe((products:any)=> {
      this.products = products;
      this.loading = false;
    });
  }


  onSubmit(value:Object) {
    const review = new Review(
      this.myForm.value.reviewcomment,
      this.rating,
      this.productId
    );

    this.review$ = this._reviewService.onReview(review);
      this.sub_review = this.review$.subscribe((res:any) => {
        this.success.emit('success');
        },
        error => this.errorMessage = <any>error);
  }

}
