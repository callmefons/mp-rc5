import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/product.model';
import { storage } from '../../helpers/storage';
import { request } from '../../helpers/request';
import config = require('../../config/api.config');
import 'rxjs/add/operator/cache';


declare var _ :any;
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

  addProduct(product: any) {

      const body = JSON.stringify(product);
      return this._http.post(`${config.apiUrl}product?token=${storage.getAuthToken()}`,
          body, { headers: request.getJsonHeaders() }).cache()
          .map(this.extractData)
          .catch(this.handleError);

      // let xhr: XMLHttpRequest = new XMLHttpRequest();
      // xhr.open('POST', `${config.apiUrl}product?token=${storage.getAuthToken()}`, true);
      // let formData: FormData = new FormData();
      //
      // let formData: FormData = new FormData();
      // formData.append("logo", product.logo);
      // formData.append("name", product.name);
      // formData.append("description", product.description);
      // formData.append("shortdescription", product.shortdescription);
      // formData.append("minrequirement", product.minrequirement);
      // formData.append("termsncond", product.termsncond);
      // formData.append("youtube", product.youtube);
      // formData.append("purchase_link", product.purchase_link);
      // formData.append("description_th", product.description_th);
      // formData.append("shortdescription_th", product.shortdescription_th);
      //
      // for(let i =0; i < product.industries.length; i++){
      //     formData.append(`industries[${i}]`, product.industries[i]);
      // }
      // for(let i =0; i < product.languages.length; i++){
      //     formData.append(`languages[${i}]`, product.languages[i]);
      // }
      // for(let i =0; i < product.departments.length; i++){
      //     formData.append(`departments[${i}]`, product.departments[i]);
      // }
      // for(let i =0; i < product.categories.length; i++){
      //     formData.append(`categories[${i}]`, product.categories[i]);
      // }
      // for(let i =0; i < product.features.length; i++){
      //     formData.append(`features[${i}]`, product.features[i]);
      // }
      // for(let i =0; i < product.screenshots.length; i++){
      //     formData.append(`screenshots[${i}]`, product.screenshots[i]);
      // }
      // for(let i =0; i < product.pricing_model.length; i++) {
      //     formData.append(`pricing_model[${i}]`, JSON.stringify(product.pricing_model[i]));
      // }
      // for(let i =0; i < product.extraservices.length; i++){
      //     formData.append(`extraservices[${i}]`, product.extraservices[i]);
      // }
      // for(let i =0; i < product.features_th.length; i++){
      //     formData.append(`features_th[${i}]`, product.features_th[i]);
      // }
      //
      // xhr.send(formData);
      // console.log(xhr.response);
  }

  updateProduct(id:any, product: any){
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

  //UpdateTagProduct
    updateTagProducts(value:any){
        const body = JSON.stringify(value);
        return this._http.post(`${config.apiUrl}tag?token=${storage.getAuthToken()}`,
            body, { headers: request.getJsonHeaders() }).cache()
            .map(this.extractData)
            .catch(this.handleError);
    }

    searchProduct(value:string){
        return this._http.get(`${config.apiUrl}product/search?query=${value}`)
            .cache()
            .map(response => {
                const data = response.json();
                return data;
            })
            .catch(this.handleError);
    }

    //Get Product Navigation bar
    getProductByTypeAndTag(type:string, tagId:number){
        return this._http.get(`${config.apiUrl}product/filter/${type}/${tagId}`)
            .cache()
            .map(response => {
                const data = response.json();
                return data;
            })
            .catch(this.handleError);
    }

    //Filter Product
    getProductByFilter(value:any){
        const body = JSON.stringify(value);
        console.log(body)
        return this._http.post(`${config.apiUrl}product/filter`,
            body, { headers: request.getJsonHeaders() }).cache()
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
