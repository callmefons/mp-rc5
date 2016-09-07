import { Injectable } from "@angular/core";
import { Http, Headers, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { request } from '../../shared/helpers/request'
import { storage } from '../../shared/helpers/storage';

@Injectable()
export class ClickyService{

  // url: string = 'http://localhost';
  url: string = 'https://api.clicky.com/api/stats/4?site_id=100980200&sitekey=d8534ecd062e3970/';
  constructor(private _http : Http){
  }

  loadVisitors(name: string) {

    return this._http.get(this.url + name, request.getxhrHeaders())
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }

  loadEvents(name: string){
    return this._http.get(this.url + name, request.getxhrHeaders())
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }



}
