import { Injectable } from "@angular/core";
import { Http, Headers, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { request } from '../../shared/helpers/request'

@Injectable()
export class ClickyService{

  url: string = 'https://api.clicky.com/api/stats/4?site_id=100980200&sitekey=d8534ecd062e3970/';
  constructor(private _http : Http){}

  loadVisitors(name: string) {

    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(this.url + name, request.getxhrHeaders())
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }

  loadEvents(name: string){
    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(this.url + name, request.getxhrHeaders())
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }



}
