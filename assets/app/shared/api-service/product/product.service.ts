import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/product.model';
import { storage } from '../../helpers/storage';
import { request } from '../../helpers/request';
import config = require('../../config/api.config');
import 'rxjs/add/operator/cache';

@Injectable()
export class ProductService {

  product: Product[] = [];

  constructor (private _http: Http) {
  }

  getProductName(){
    return this._http.get(`${config.apiUrl}product/name?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json().data;
        return data;
      })
      .catch(this.handleError);
  }


  getProductTags(){
    return this._http.get(`${config.apiUrl}product/tags?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json().data;
        return data;
      })
      .catch(this.handleError);
  }

  //NOT REQUIRED PERMISSTION
  getProduct(){
    return this._http.get(`${config.apiUrl}product?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json().data;
        return data;
      })
      .catch(this.handleError);
  }

  //PRODUCT OF ONE DEVELOPER [REQUIRED PERMISSION]
  getProductOfDeveloper(){
    return this._http.get(`${config.apiUrl}product/developer?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json().data;
        return data;
      })
      .catch(this.handleError);
  }

  getProductId(id: number | string) {
    return this._http.get(`${config.apiUrl}product/${id}?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json();
        return data;
      })
      .catch(this.handleError);
  }

  addProduct(product: Product) {
    const body = JSON.stringify(product);
    return this._http.post(`${config.apiUrl}product?token=${storage.getAuthToken()}`,
      body, { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateProduct(id:any, product: Product){
    const body = JSON.stringify(product);
    return this._http.put(`${config.apiUrl}product/${id}?token=${storage.getAuthToken()}`,
      body, { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteProduct(id:any){
    return this._http.delete(`${config.apiUrl}product/${id}?token=${storage.getAuthToken()}`)
      .cache()
      .catch(this.handleError);
  }


  //Get Product Status For Admin
  getProductStatus(status:any){
    return this._http.get(`${config.apiUrl}product/list/${status}`)
      .cache()
      .map(response => {
        const data = response.json();
        return data;
      })
      .catch(this.handleError);
  }


  updateProductStatus(id:any,status:any,comment:any = ""){
    const body = JSON.stringify(comment);
    return this._http.post(`${config.apiUrl}product/${id}/${status}?token=${storage.getAuthToken()}`,
      body, { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  //GetLogProducts
  getLogProduct(id:any){
    return this._http.get(`${config.apiUrl}product/log/${id}`)
      .cache()
      .map(response => {
        const data = response.json();
        return data;
      })
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
