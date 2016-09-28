import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { storage } from '../../helpers/storage';
import { request } from '../../helpers/request';
import config = require('../../config/api.config');
import 'rxjs/add/operator/cache';

@Injectable()
export class AccountManagementService {


  constructor (private _http: Http, private _router: Router) {}
  response:any;

  archiveAccount(userId:any, status:any) {
    return this._http.post(`${config.apiUrl}${status}/user/${userId}?token=${storage.getAuthToken()}`
      , { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  resetPasswordAccount(userId:any){
    return this._http.post(`${config.apiUrl}password/reset/user/${userId}?token=${storage.getAuthToken()}`
      , { headers: request.getJsonHeaders() }).cache()
      .map(this.extractData)
      .catch(this.handleError);
  }

  //For user forgot password
  forgotPassword(email:any){
    const body = JSON.stringify(email);
    return this._http.post(`${config.apiUrl}password/email`, body, { headers: request.getJsonHeaders() })
      .cache()
      .map(response => response.json())
      .catch(this.handleError);
  }

  newPassword(value:any){
    const body = JSON.stringify(value);
    return this._http.post(`${config.apiUrl}password/reset/forgot`, body, { headers: request.getJsonHeaders() })
      .cache()
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
