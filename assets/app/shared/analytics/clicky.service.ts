import { Injectable } from "@angular/core";
import { Http, Headers, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { request } from '../../shared/helpers/request'

@Injectable()
export class ClickyService{

  viewEndpoint: string = 'http://52.221.240.34/api/v1/events/';
  eventEndPoint: string = 'http://52.221.240.34/api/v1/visitors/';


  constructor(private _http : Http){}

  loadVisitors(name: string) {

    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(this.viewEndpoint + name)
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }

  loadEvents(name: string){
    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(this.eventEndPoint + name)
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }



}
