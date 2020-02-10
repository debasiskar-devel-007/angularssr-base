/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-cookie-service";
var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService) {
        var _this = this;
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
        this.fileservername = [];
        this.subjectForServerUrl = new Subject();
        this.subjectForaddEndpointUrl = new Subject();
        this.subjectForuploadEndpointUrl = new Subject(); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new Subject();
        this.subjectFordeletesingleEndpointUrl = new Subject();
        this.subjectForupdatestatusSingleEndpointUrl = new Subject();
        this.subjectForGetdataEndpointUrl = new Subject();
        this.subscriptionServer = this.getServerUrl().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.serverUrl = result;
            }
            else {
                _this.serverUrl = null;
            }
        }));
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.addendpointUrl = result;
            }
            else {
                _this.addendpointUrl = null;
            }
        }));
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.uploadEndpointUrl = result;
            }
            else {
                _this.uploadEndpointUrl = null;
            }
        }));
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.updateendpointUrl = result;
            }
            else {
                _this.updateendpointUrl = null;
            }
        }));
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.deletesingle_endpointUrl = result;
            }
            else {
                _this.deletesingle_endpointUrl = null;
            }
        }));
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.updatestatus_single_endpointUrl = result;
            }
            else {
                _this.updatestatus_single_endpointUrl = null;
            }
        }));
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.getdata_endpointUrl = result;
            }
            else {
                _this.getdata_endpointUrl = null;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setServerUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForServerUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearServerUrl = /**
     * @return {?}
     */
    function () {
        this.subjectForServerUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getServerUrl = /**
     * @return {?}
     */
    function () {
        return this.subjectForServerUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setaddEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForaddEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearaddEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForaddEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getaddEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForaddEndpointUrl.asObservable();
    };
    /*****added by souresh******/
    /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setuploadEndpont = /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForuploadEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearuploadEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForuploadEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getuploadEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForuploadEndpointUrl.asObservable();
    };
    /********souresh end here********/
    /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setupdateEndpoint = /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForupdateEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearupdateEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForupdateEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getupdateEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForupdateEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setdeletesingleEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.cleardeletesingleEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectFordeletesingleEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getdeletesingleEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setupdatestatus_singleEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearupdatestatus_singleEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getupdatestatus_singleEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setgetdataEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForGetdataEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.cleargetdataEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForGetdataEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getdataEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForGetdataEndpointUrl.asObservable();
    };
    /**
     * @return {?}
     */
    ApiService.prototype.isTokenExpired = /**
     * @return {?}
     */
    function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.addData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in adddata apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*******added by souresh************/
    /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.uploadFile = /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*******souresh end here********/
    /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateData = /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.getData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri start here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.addLogin = /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in addLogin apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /*************** Added by himadri start here ***************/
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.forgetPassword = /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in forgetPassword apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.deleteSingleData = /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.deleteMultipleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateStatusForSingleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateStatusForMultipleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    ApiService.prototype.CustomRequest = /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    function (requestdata, endpoint) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
if (false) {
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.accesstoken;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /** @type {?} */
    ApiService.prototype.serverUrl;
    /** @type {?} */
    ApiService.prototype.addendpointUrl;
    /** @type {?} */
    ApiService.prototype.uploadEndpointUrl;
    /** @type {?} */
    ApiService.prototype.updateendpointUrl;
    /** @type {?} */
    ApiService.prototype.deletesingle_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_single_endpointUrl;
    /** @type {?} */
    ApiService.prototype.deletemultiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_multiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.getdata_endpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForServerUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForaddEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForuploadEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdateEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectFordeletesingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdatestatusSingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForGetdataEndpointUrl;
    /** @type {?} */
    ApiService.prototype.subscriptionServer;
    /** @type {?} */
    ApiService.prototype.subscriptionaddEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionuploadEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdateEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptiondeletesingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdatestatusSingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionGetdataEndpoint;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBNEIsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsR0FBRyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFL0QsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTSxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR2hEO0lBc0NFLG9CQUFvQixLQUFpQixFQUMzQixTQUFxQixFQUFTLGFBQTRCO1FBRHBFLGlCQXFFQztRQXJFbUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUEvQjdELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFbkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFFMUQsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFVakIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN6Qyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzlDLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBRSxrQkFBa0I7O1FBQ3JFLGdDQUEyQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakQsc0NBQWlDLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2RCw0Q0FBdUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzdE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eUNBQXlCOzs7OztJQUN6Qix5Q0FBaUQ7Ozs7O0lBQ2pELDhDQUFzRDs7Ozs7SUFDdEQsaURBQXlEOzs7OztJQUN6RCxpREFBeUQ7Ozs7O0lBQ3pELHVEQUErRDs7Ozs7SUFDL0QsNkRBQXFFOzs7OztJQUNyRSxrREFBMEQ7O0lBQzFELHdDQUF3Qzs7SUFDeEMsNkNBQTZDOztJQUM3QyxnREFBZ0Q7O0lBQ2hELGdEQUFnRDs7SUFDaEQsc0RBQXNEOztJQUN0RCw0REFBNEQ7O0lBQzVELGlEQUFpRDs7Ozs7SUFFckMsMkJBQXlCOzs7OztJQUNuQywrQkFBNkI7Ozs7O0lBQUMsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBmb3Igc2V0dGluZyBvYnNlcnZhYmxlcyB0byBnZXQgc2VydmVydXJsIGFuZCBlbmRwb2ludHVybCBmcm9tIGFwcFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnR7Q29va2llU2VydmljZX0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7ICAgXG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICBwdWJsaWMgbGVuZ3RoaXM7XG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XG4gIHB1YmxpYyBpbnByb2dyZXNzO1xuICBwdWJsaWMgcHJvZ3Jlc3M6IGFueSA9IFtdO1xuICBwdWJsaWMgdXBsb2FkdHlwZTtcbiAgcHVibGljIHVwbG9hZGVycm9yOiBhbnkgPSAnJztcbiAgcHVibGljIGFjY2Vzc3Rva2VuOmFueT10aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdqd3RUb2tlbicpO1xuICAvLyBwdWJsaWMgYWNjZXNzdG9rZW46YW55PSdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbWIyOGlPaUppWVhJaUxDSmxlSEFpT2pFMU5qZ3pOVGd5TVRBc0ltbGhkQ0k2TVRVMk9ESTNNVGd4TUgwLjJsdHZ4Vkt3ZlgxdXdNT3dRMlp6Z3AxSzJqaWFDRGowNTFXeWhvMEl3LVEnO1xuICBmaWxlc2VydmVybmFtZTogYW55ID0gW107XG4gIHNlcnZlclVybDogYW55O1xuICBhZGRlbmRwb2ludFVybDogYW55O1xuICB1cGxvYWRFbmRwb2ludFVybDphbnk7IC8vc291cmVzaFxuICB1cGRhdGVlbmRwb2ludFVybDogYW55O1xuICBkZWxldGVzaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgdXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybDogYW55O1xuICBkZWxldGVtdWx0aXBsZV9lbmRwb2ludFVybDogYW55O1xuICB1cGRhdGVzdGF0dXNfbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgZ2V0ZGF0YV9lbmRwb2ludFVybDogYW55O1xuICBwcml2YXRlIHN1YmplY3RGb3JTZXJ2ZXJVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvcmFkZEVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTsgIC8vYWRkZWQgYnkgc291cmVzaFxuICBwcml2YXRlIHN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yZGVsZXRlc2luZ2xlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25TZXJ2ZXI6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbmFkZEVuZHBvaW50OiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb251cGxvYWRFbmRwb2ludDogU3Vic2NyaXB0aW9uOyAgIC8vYWRkZWQgYnkgc291cmVzaFxuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBkYXRlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHN1YnNjcmlwdGlvbmRlbGV0ZXNpbmdsZUVuZHBvaW50OiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBzdWJzY3JpcHRpb251cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uR2V0ZGF0YUVuZHBvaW50OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9hdXRoSHR0cDogSHR0cENsaWVudCxwcml2YXRlIGNvb2tpZVNlcnZpY2UgOkNvb2tpZVNlcnZpY2UpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvblNlcnZlciA9IHRoaXMuZ2V0U2VydmVyVXJsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQgPSB0aGlzLmdldGFkZEVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFkZGVuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRlbmRwb2ludFVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLyoqKioqKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKioqKioqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnVwbG9hZEVuZHBvaW50PXRoaXMuZ2V0dXBsb2FkRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZT0+e1xuICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICByZXN1bHQ9bWVzc2FnZTtcbiAgICAgICAgaWYocmVzdWx0IT1udWxsKXtcbiAgICAgICAgICB0aGlzLnVwbG9hZEVuZHBvaW50VXJsID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgdGhpcy51cGxvYWRFbmRwb2ludFVybCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8qKioqKioqKioqKipzb3VyZXNoIGVuZCBoZXJlKioqKioqKioqKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbmRlbGV0ZXNpbmdsZUVuZHBvaW50ID0gdGhpcy5nZXRkZWxldGVzaW5nbGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uR2V0ZGF0YUVuZHBvaW50ID0gdGhpcy5nZXRkYXRhRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgfVxuXG4gIHNldFNlcnZlclVybCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhclNlcnZlclVybCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0U2VydmVyVXJsKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldGFkZEVuZHBvaW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJhZGRFbmRwb2ludCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXRhZGRFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcbiAgfVxuLyoqKioqYWRkZWQgYnkgc291cmVzaCoqKioqKi9cbiAgc2V0dXBsb2FkRW5kcG9udCh2YWx1ZTphbnkpe1xuICAgIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcnVwbG9hZEVuZHBvaW50KCl7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0dXBsb2FkRW5kcG9pbnQoKTogT2JzZXJ2YWJsZSA8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gICAvKioqKioqKipzb3VyZXNoIGVuZCBoZXJlKioqKioqKiovXG5cblxuICBzZXR1cGRhdGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFydXBkYXRlRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0dXBkYXRlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRkZWxldGVzaW5nbGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yZGVsZXRlc2luZ2xlRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGNsZWFyZGVsZXRlc2luZ2xlRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yZGVsZXRlc2luZ2xlRW5kcG9pbnRVcmwubmV4dChudWxsKTtcbiAgfVxuICBwdWJsaWMgZ2V0ZGVsZXRlc2luZ2xlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9yZGVsZXRlc2luZ2xlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXR1cGRhdGVzdGF0dXNfc2luZ2xlRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBjbGVhcnVwZGF0ZXN0YXR1c19zaW5nbGVFbmRwb2ludCgpIHtcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBnZXR1cGRhdGVzdGF0dXNfc2luZ2xlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRnZXRkYXRhRW5kcG9pbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY2xlYXJnZXRkYXRhRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLm5leHQobnVsbCk7XG4gIH1cbiAgcHVibGljIGdldGRhdGFFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuXG5cbiAgaXNUb2tlbkV4cGlyZWQoKSB7XG5cbiAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXG4gIH1cblxuICBhZGREYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gYWRkZGF0YSBhcGlzZXJ2aWNlJyk7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBBdXRob3JpemF0aW9uKHRlbXApXG4gICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZygnaHR0cG9wdGlvbnMnLGh0dHBPcHRpb25zLHRoaXMuc2VydmVyVXJsLHJlcXVlc3RkYXRhKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5hZGRlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqKioqKiphZGRlZCBieSBzb3VyZXNoKioqKioqKioqKioqL1xuICB1cGxvYWRGaWxlKHJlcXVlc3RkYXRhOmFueSl7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM9e1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6dGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIEF1dGhvcml6YXRpb24odGVtcClcbiAgICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQ9dGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGxvYWRFbmRwb2ludFVybCxKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcz0+cmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKioqKioqKnNvdXJlc2ggZW5kIGhlcmUqKioqKioqKi9cbiAgVXBkYXRlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBBdXRob3JpemF0aW9uKHRlbXApXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMudXBkYXRlZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0RGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuLyoqKioqKioqKioqKioqKiBBZGRlZCBieSBoaW1hZHJpIHN0YXJ0IGhlcmUgKioqKioqKioqKioqKioqLyBcbiAgYWRkTG9naW4ocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBhZGRMb2dpbiBhcGlzZXJ2aWNlJyk7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIC8vICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIEF1dGhvcml6YXRpb24odGVtcClcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsLHJlcXVlc3RkYXRhKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5hZGRlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqKioqKioqKioqKioqKiBBZGRlZCBieSBoaW1hZHJpIGVuZCBoZXJlICoqKioqKioqKioqKioqKi8gXG5cbi8qKioqKioqKioqKioqKiogQWRkZWQgYnkgaGltYWRyaSBzdGFydCBoZXJlICoqKioqKioqKioqKioqKi8gXG5mb3JnZXRQYXNzd29yZChyZXF1ZXN0ZGF0YTogYW55KSB7XG4gIGNvbnNvbGUubG9nKCdpbiBmb3JnZXRQYXNzd29yZCBhcGlzZXJ2aWNlJyk7XG4gIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAvLyAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBBdXRob3JpemF0aW9uKHRlbXApXG4gICAgfSlcbiAgfTtcblxuICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybCxyZXF1ZXN0ZGF0YSk7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmFkZGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKioqKioqKioqKioqKioqIEFkZGVkIGJ5IGhpbWFkcmkgZW5kIGhlcmUgKioqKioqKioqKioqKioqLyBcblxuXG4gIGRlbGV0ZVNpbmdsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuZGVsZXRlc2luZ2xlX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGRlbGV0ZU11bHRpcGxlRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwrJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIFVwZGF0ZVN0YXR1c0ZvclNpbmdsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBVcGRhdGVTdGF0dXNGb3JNdWx0aXBsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCsnbWFueScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIEN1c3RvbVJlcXVlc3QocmVxdWVzdGRhdGE6IGFueSwgZW5kcG9pbnQ6YW55ICkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19