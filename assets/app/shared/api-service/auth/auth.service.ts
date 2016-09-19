import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.model';
import { storage } from '../../helpers/storage';
import { request } from '../../helpers/request';
import config = require('../../config/api.config');

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor (private _http: Http, private _router: Router) {}
  res:any[];

  signup(user: Object) {
    const body = JSON.stringify(user);
    return this._http.post(`${config.apiUrl}register`, body, { headers: request.getJsonHeaders() })
      .map(response => response.json())
      .catch(this.handleError);
  }

  login(user: User) {
    const body = JSON.stringify(user);
    return this._http.post(`${config.apiUrl}login`, body, { headers: request.getJsonHeaders() })
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

  isLoggedIn() {
    return !!storage.getAuthToken();
  }

  logout() {
    storage.removeAuthToken();
    this._router.navigate(['/']);
  }
}
