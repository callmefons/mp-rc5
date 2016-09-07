import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { storage } from '../../helpers/storage';
import { request } from '../../helpers/request';
import config = require('../../config/api.config');
import 'rxjs/add/operator/cache';

@Injectable()
export class AllVendorService {


  constructor (private _http: Http) {
  }

  getAllDeveloper(){
    return this._http.get(`${config.apiUrl}developers?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json().data;
        return data;
      })
      .catch(this.handleError);
  }

  getAllDeveloperId(id: number | string) {
    return this._http.get(`${config.apiUrl}developer/profile/${id}?token=${storage.getAuthToken()}`)
      .cache()
      .map(response => {
        const data = response.json();
        return data;
      })
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
