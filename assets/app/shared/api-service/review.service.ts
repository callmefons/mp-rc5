import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { storage } from '../helpers/storage';
import { request } from '../helpers/request';
import config = require('../config/api.config');
import 'rxjs/add/operator/cache';
import {Review} from "../models/review.model";

@Injectable()
export class ReviewService {

  constructor (private _http: Http, private _router: Router) {}
  res:any[];

  onReview(review: Review) {
    const body = JSON.stringify(review);
    return this._http.post(`${config.apiUrl}product/review?token=${storage.getAuthToken()}`,
      body, { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  getReviewById(id:number | string){
    return this._http.get(`${config.apiUrl}product/${id}/review?token=${storage.getAuthToken()}`).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
