import {Injectable} from '@angular/core';
import {Router}      from '@angular/router';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {storage} from '../../helpers/storage';
import {request} from '../../helpers/request';
import config = require('../../config/api.config');
import 'rxjs/add/operator/cache';
import {Vendor} from "../../models/vendor.model";

@Injectable()
export class VendorService {

    vendor: Vendor[] = [];

    constructor(private _http: Http) {
    }

    getVendorProfile() {
        return this._http.get(`${config.apiUrl}developer/profile?token=${storage.getAuthToken()}`)
            .cache()
            .map(response => {
                const data = response.json().data.developer_profile[0];
                let objs: Vendor[] = [];
                objs.push(data);
                return objs;
            })
            .catch(this.handleError);
    }

    getOrganizationProfile() {
        return this._http.get(`${config.apiUrl}developer/profile?token=${storage.getAuthToken()}`)
            .cache()
            .map(response => {
                const data = response.json().data.organization_profile[0];
                let objs: Vendor[] = [];
                objs.push(data);
                return objs;
            })
            .catch(this.handleError);
    }

    updateVendorProfile(vendor: Vendor) {
        const body = JSON.stringify(vendor);
        return this._http.put(`${config.apiUrl}developer/profile?token=${storage.getAuthToken()}`,
            body, {headers: request.getJsonHeaders()}).cache()
            .map(this.extractData)
            .catch(this.handleError);
    }

    resetPasswordAccount(value: any) {
        const body = JSON.stringify(value);
        return this._http.put(`${config.apiUrl}password/reset?token=${storage.getAuthToken()}`,
            body, {headers: request.getJsonHeaders()}).cache()
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
