(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('ngx-cookie-service'), require('@angular/material'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/platform-browser/animations'), require('@angular/common'), require('listing-angular7'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/router'), require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('news-title', ['exports', 'rxjs/operators', 'rxjs', 'ngx-cookie-service', '@angular/material', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/platform-browser/animations', '@angular/common', 'listing-angular7', '@angular/forms', '@angular/material/dialog', '@angular/router', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['news-title'] = {}),global.rxjs.operators,global.rxjs,global.i2,global.ng.material,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.platformBrowser.animations,global.ng.common,global.listingAngular7,global.ng.forms,global.ng.material.dialog,global.ng.router,global.ng.common.http,global.ng.core));
}(this, (function (exports,operators,rxjs,i2,material,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,animations,common,listingAngular7,forms,dialog,router,i1,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NewsTitleService = /** @class */ (function () {
        function NewsTitleService(_http, _authHttp, cookieService) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        NewsTitleService.prototype.isTokenExpired = /**
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
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        NewsTitleService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        NewsTitleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NewsTitleService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ NewsTitleService.ngInjectableDef = i0.defineInjectable({ factory: function NewsTitleService_Factory() { return new NewsTitleService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: NewsTitleService, providedIn: "root" });
        return NewsTitleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written Authorization(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json'
                        // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
                    })
                };
                console.log(this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json'
                        // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
                    })
                };
                console.log(this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NewsTitleComponent = /** @class */ (function () {
        function NewsTitleComponent(fb, apiService, _snackBar, dialog$$1) {
            // this.newsLatterForm = this.fb.group({
            //   fullname: ['', Validators.required],
            //   phone: ['', Validators.required],
            //   company: ['', Validators.required],
            //   email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
            // });
            this.fb = fb;
            this.apiService = apiService;
            this._snackBar = _snackBar;
            this.dialog = dialog$$1;
            this.formTitleValue = '';
            this.serverUrlValue = '';
            this.addEndpointValue = '';
            this.logoValue = '';
            this.durationInSeconds = 10;
            // setInterval(()=> {
            //   this.openSnackBar(); },4000); 
        }
        Object.defineProperty(NewsTitleComponent.prototype, "formTitle", {
            set: /**
             * @param {?} formTitleVal
             * @return {?}
             */ function (formTitleVal) {
                this.formTitleValue = formTitleVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NewsTitleComponent.prototype, "logo", {
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this.logoValue = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NewsTitleComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlVal
             * @return {?}
             */ function (serverUrlVal) {
                this.serverUrlValue = (serverUrlVal) || '<no name set>';
                this.serverUrlValue = serverUrlVal;
                // console.log(this.serverUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NewsTitleComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} addEndpointVal
             * @return {?}
             */ function (addEndpointVal) {
                this.addEndpointValue = addEndpointVal;
                // console.log(this.addEndpointValue)
            },
            enumerable: true,
            configurable: true
        });
        // openSnackBar() {
        //   this._snackBar.openFromComponent(NewsTitleComponent, {
        //     duration: this.durationInSeconds * 1000,
        //   });
        // }
        // openSnackBar() {
        //   this._snackBar.openFromComponent(NewsTitleComponent, {
        //     duration: this.durationInSeconds * 1000,
        //   });
        // }
        /**
         * @return {?}
         */
        NewsTitleComponent.prototype.ngOnInit =
            // openSnackBar() {
            //   this._snackBar.openFromComponent(NewsTitleComponent, {
            //     duration: this.durationInSeconds * 1000,
            //   });
            // }
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.openDialog();
                }), 500);
            };
        // newsLatterFormSubmit() {
        //   for (const key in this.newsLatterForm.controls) {
        //     this.newsLatterForm.controls[key].markAsTouched();
        //   }
        //   if (this.newsLatterForm.valid) {
        //     console.log(this.newsLatterForm.value);
        //     let data: any = {
        //       'data': this.newsLatterForm.value,
        //       "source": this.addEndpointValue.source
        //     };
        //     this.apiService.addData(data).subscribe((responce) => {
        //       console.log(responce);
        //       let result: any = {};
        //       result = responce;
        //       if (result.status == "success") {
        //         this.formDirective.resetForm();
        //       }
        //     })
        //   }
        // }
        // inputUntouched(val: any) {
        //   console.log('ok----');
        //   this.newsLatterForm.controls[val].markAsUntouched();
        // }
        // newsLatterFormSubmit() {
        //   for (const key in this.newsLatterForm.controls) {
        //     this.newsLatterForm.controls[key].markAsTouched();
        //   }
        //   if (this.newsLatterForm.valid) {
        //     console.log(this.newsLatterForm.value);
        //     let data: any = {
        //       'data': this.newsLatterForm.value,
        //       "source": this.addEndpointValue.source
        //     };
        //     this.apiService.addData(data).subscribe((responce) => {
        //       console.log(responce);
        //       let result: any = {};
        //       result = responce;
        //       if (result.status == "success") {
        //         this.formDirective.resetForm();
        //       }
        //     })
        //   }
        // }
        // inputUntouched(val: any) {
        //   console.log('ok----');
        //   this.newsLatterForm.controls[val].markAsUntouched();
        // }
        /**
         * @return {?}
         */
        NewsTitleComponent.prototype.openDialog =
            // newsLatterFormSubmit() {
            //   for (const key in this.newsLatterForm.controls) {
            //     this.newsLatterForm.controls[key].markAsTouched();
            //   }
            //   if (this.newsLatterForm.valid) {
            //     console.log(this.newsLatterForm.value);
            //     let data: any = {
            //       'data': this.newsLatterForm.value,
            //       "source": this.addEndpointValue.source
            //     };
            //     this.apiService.addData(data).subscribe((responce) => {
            //       console.log(responce);
            //       let result: any = {};
            //       result = responce;
            //       if (result.status == "success") {
            //         this.formDirective.resetForm();
            //       }
            //     })
            //   }
            // }
            // inputUntouched(val: any) {
            //   console.log('ok----');
            //   this.newsLatterForm.controls[val].markAsUntouched();
            // }
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var dialogRef = this.dialog.open(modalData, {
                    // width: '250px',
                    data: {
                        addEndpointValue: this.addEndpointValue,
                        serverUrlValue: this.serverUrlValue,
                        formTitleValue: this.formTitleValue,
                        logoValue: this.logoValue
                    }
                });
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    console.log('The dialog was closed');
                    console.log(result);
                }));
            };
        NewsTitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-newsTitle',
                        // templateUrl:'./news-title.component.html',
                        template: "",
                        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                    }] }
        ];
        /** @nocollapse */
        NewsTitleComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ApiService },
                { type: material.MatSnackBar },
                { type: material.MatDialog }
            ];
        };
        NewsTitleComponent.propDecorators = {
            formTitle: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }]
        };
        return NewsTitleComponent;
    }());
    var modalData = /** @class */ (function () {
        function modalData(dialogRef, data, apiService, fb) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.apiService = apiService;
            this.fb = fb;
            // console.log(data);
            this.newsLatterForm = this.fb.group({
                fullname: ['', forms.Validators.required],
                phone: ['', forms.Validators.required],
                company: ['', forms.Validators.required],
                email: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
            });
        }
        /**
         * @return {?}
         */
        modalData.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl(); //  Clear the server url
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.data.serverUrlValue); //  set the server url
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint(); //  Clear the endpoint
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.data.addEndpointValue.endpoint); //  set the endpoint
                }), 50);
            };
        /**
         * @return {?}
         */
        modalData.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        /**
         * @return {?}
         */
        modalData.prototype.newsLatterFormSubmit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log(this.newsLatterForm.value);
                for (var key in this.newsLatterForm.controls) {
                    this.newsLatterForm.controls[key].markAsTouched();
                }
                if (this.newsLatterForm.valid) {
                    console.log(this.newsLatterForm.value);
                    /** @type {?} */
                    var data = {
                        'data': this.newsLatterForm.value,
                        "source": this.data.addEndpointValue.source
                    };
                    this.apiService.addData(data).subscribe(( /**
                     * @param {?} responce
                     * @return {?}
                     */function (responce) {
                        console.log(responce);
                        /** @type {?} */
                        var result = {};
                        result = responce;
                        if (result.status == "success") {
                            _this.formDirective.resetForm();
                        }
                    }));
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        modalData.prototype.inputUntouched = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('ok----');
                this.newsLatterForm.controls[val].markAsUntouched();
            };
        modalData.decorators = [
            { type: i0.Component, args: [{
                        selector: 'modalData',
                        template: "\r\n<mat-card >\r\n\r\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\r\n             <img  [src]=\"data.logoValue\">\r\n         </span>\r\n   \r\n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\r\n   \r\n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\r\n                           Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Phone field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\r\n                           Phone field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!-- Email field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\r\n                           Email is not valid</mat-error>\r\n                       <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\r\n                           Email field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Company field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\r\n                           Full Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n   \r\n           <button mat-raised-button color=\"primary\">Submit</button>\r\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\r\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\r\n               clear\r\n               </i>\r\n   \r\n   \r\n       </form>\r\n   </mat-card>",
                        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                    }] }
        ];
        /** @nocollapse */
        modalData.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: ApiService },
                { type: forms.FormBuilder }
            ];
        };
        modalData.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }]
        };
        return modalData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingNewsletterComponent = /** @class */ (function () {
        // =========================================================================================
        function ListingNewsletterComponent() {
            this.loader = true;
        }
        /**
         * @return {?}
         */
        ListingNewsletterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Object.defineProperty(ListingNewsletterComponent.prototype, "config", {
            // ================================================Input For Lib Listing================================
            set: 
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.newsLetterListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                    listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "Search by customer name...", field: 'fullname' }],
                        search: [{ label: "email", field: 'email' }],
                    }
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        ListingNewsletterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-listing-newsletter',
                        template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"newsLetterListConfig.datasource !=null && newsLetterListConfig.datasource.length > 0\"\r\n      [datasource]=\"newsLetterListConfig.datasource\" [skip]=\"newsLetterListConfig.listArray_skip\"\r\n      [modify_header_array]=\"newsLetterListConfig.listArray_modify_header\" [sourcedata]=\"newsLetterListConfig.tableName\"\r\n      [statusarr]=\"newsLetterListConfig.statusarr\" [jwttoken]=\"newsLetterListConfig.jwtToken\"\r\n      [apiurl]=\"newsLetterListConfig.apiUrl\" [editroute]=\"newsLetterListConfig.editUrl\"\r\n      [deleteendpoint]=\"newsLetterListConfig.deleteEndPoint\"\r\n      [date_search_source]=\"newsLetterListConfig.view\"\r\n     [date_search_endpoint]=\"newsLetterListConfig.listEndPoint\"\r\n     [search_settings]=\"newsLetterListConfig.search_settings\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"newsLetterListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListingNewsletterComponent.ctorParameters = function () { return []; };
        ListingNewsletterComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListingNewsletterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddEditSubcategoryComponent = /** @class */ (function () {
        function AddEditSubcategoryComponent(formBuilder, newsletterService, router$$1, dialog$$1) {
            this.formBuilder = formBuilder;
            this.newsletterService = newsletterService;
            this.router = router$$1;
            this.dialog = dialog$$1;
            // ====================declarations==================
            this.buttonText = "SUBMIT";
            this.header_name = "Add Subscription Category";
            this.successMessage = "Submitted Successfully!!!";
        }
        Object.defineProperty(AddEditSubcategoryComponent.prototype, "config", {
            // ==================================================
            set: 
            // ==================================================
            /**
             * @param {?} getConfig
             * @return {?}
             */
            function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddEditSubcategoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //generating the form
                this.generateForm();
                // --------------------------------checking the cases------------------------ 
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "One row updated";
                        this.setDefaultValue(this.configData.defaultData);
                        this.header_name = "EDIT";
                        break;
                }
                // --------------------------------------------------------------------------
            };
        // =========================================MODAL functions==========================================
        // openDialog(x: any): void {
        //   this.dialogRef = this.dialog.open(Modal, {
        //     width: '250px',
        //     data: { msg: x }
        //   });
        //   this.dialogRef.afterClosed().subscribe(result => {
        //   });
        // }
        // =====================================================================================================
        // ================================================Default value======================================
        // =========================================MODAL functions==========================================
        // openDialog(x: any): void {
        //   this.dialogRef = this.dialog.open(Modal, {
        //     width: '250px',
        //     data: { msg: x }
        //   });
        //   this.dialogRef.afterClosed().subscribe(result => {
        //   });
        // }
        // =====================================================================================================
        // ================================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddEditSubcategoryComponent.prototype.setDefaultValue =
            // =========================================MODAL functions==========================================
            // openDialog(x: any): void {
            //   this.dialogRef = this.dialog.open(Modal, {
            //     width: '250px',
            //     data: { msg: x }
            //   });
            //   this.dialogRef.afterClosed().subscribe(result => {
            //   });
            // }
            // =====================================================================================================
            // ================================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                this.subscriptionCatForm.patchValue({
                    name: defaultValue.name,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                });
            };
        // ==================================================================================================
        // ======================form generation=====================
        // ==================================================================================================
        // ======================form generation=====================
        /**
         * @return {?}
         */
        AddEditSubcategoryComponent.prototype.generateForm =
            // ==================================================================================================
            // ======================form generation=====================
            /**
             * @return {?}
             */
            function () {
                this.subscriptionCatForm = this.formBuilder.group({
                    name: [],
                    priority: [],
                    status: []
                });
            };
        // ==========================================================
        // =========================SUBMIT FUNCTION======================
        // ==========================================================
        // =========================SUBMIT FUNCTION======================
        /**
         * @return {?}
         */
        AddEditSubcategoryComponent.prototype.onSubmit =
            // ==========================================================
            // =========================SUBMIT FUNCTION======================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /* stop here if form is invalid */
                if (this.subscriptionCatForm.invalid) {
                    return;
                }
                else {
                    if (this.subscriptionCatForm.value.status) {
                        this.subscriptionCatForm.value.status = parseInt("1");
                    }
                    else {
                        this.subscriptionCatForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.subscriptionCatForm.value, this.configData.condition)
                    };
                    this.newsletterService.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            // this.openDialog(this.successMessage);
                            // setTimeout(() => {
                            //   this.dialogRef.close();
                            // }, 2000);
                            _this.router.navigate([_this.configData.callBack]);
                        }
                        else {
                            alert("Some error occurred. Please try angain.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try angain.");
                    }));
                }
            };
        AddEditSubcategoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-add-edit-subcategory',
                        template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n\r\n      <form autocomplete=\"off\" [formGroup]=\"subscriptionCatForm\">\r\n\r\n\r\n        <!-- Name  -->\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Priority -->\r\n\r\n        <mat-form-field>\r\n          <mat-label>Priority</mat-label>\r\n          <input matInput placeholder=\"priority\" type=\"number\" formControlName=\"priority\">\r\n        </mat-form-field>\r\n\r\n        <!-- Status  -->\r\n        <mat-label>Status</mat-label>\r\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\r\n\r\n\r\n        <!-- Button  -->\r\n        <button type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        /** @nocollapse */
        AddEditSubcategoryComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: NewsTitleService },
                { type: router.Router },
                { type: dialog.MatDialog }
            ];
        };
        AddEditSubcategoryComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddEditSubcategoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingSubcategoryComponent = /** @class */ (function () {
        // ====================================================================================================
        function ListingSubcategoryComponent() {
            this.loader = true;
        }
        Object.defineProperty(ListingSubcategoryComponent.prototype, "config", {
            // =====================================================================================================
            // ================================================Input For Lib Listing================================
            set: 
            // =====================================================================================================
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.SubsCatListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                    listArray_modify_header: { "name": "Name", "priority": "Priority", "status": "Status", "date_added": "Date" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "name...", field: 'name' }],
                        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                    /*Showing Image in the Modal*/
                    pendingmodelapplicationarray_detail_datatype: [{
                            key: "image",
                            value: 'image',
                            fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
                        }],
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListingSubcategoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListingSubcategoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-listing-subcategory',
                        template: "<mat-card *ngIf=\"loader==true\">\r\n    <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n    <lib-listing class=\"formfilterdiv\"\r\n        *ngIf=\"SubsCatListConfig.datasource !=null && SubsCatListConfig.datasource.length > 0\"\r\n        [datasource]=\"SubsCatListConfig.datasource\" [skip]=\"SubsCatListConfig.listArray_skip\"\r\n        [modify_header_array]=\"SubsCatListConfig.listArray_modify_header\" [sourcedata]=\"SubsCatListConfig.tableName\"\r\n        [statusarr]=\"SubsCatListConfig.statusarr\" [jwttoken]=\"SubsCatListConfig.jwtToken\"\r\n        [apiurl]=\"SubsCatListConfig.apiUrl\" [editroute]=\"SubsCatListConfig.editUrl\"\r\n        [deleteendpoint]=\"SubsCatListConfig.deleteEndPoint\"\r\n        [date_search_source]=\"SubsCatListConfig.view\"\r\n       [date_search_endpoint]=\"SubsCatListConfig.listEndPoint\"\r\n       [search_settings]=\"SubsCatListConfig.search_settings\"\r\n       [detail_datatype]=\"SubsCatListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n    </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n    <h2 *ngIf=\"SubsCatListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListingSubcategoryComponent.ctorParameters = function () { return []; };
        ListingSubcategoryComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListingSubcategoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NewsTitleModule = /** @class */ (function () {
        function NewsTitleModule() {
        }
        NewsTitleModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NewsTitleComponent, modalData, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
                        imports: [
                            DemoMaterialModule,
                            forms.ReactiveFormsModule, forms.FormsModule,
                            animations.BrowserAnimationsModule,
                            common.CommonModule,
                            listingAngular7.ListingModule,
                            router.RouterModule,
                            i1.HttpClientModule
                        ],
                        exports: [NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [ApiService],
                        entryComponents: [NewsTitleComponent, modalData]
                    },] }
        ];
        return NewsTitleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NewsTitleService = NewsTitleService;
    exports.NewsTitleComponent = NewsTitleComponent;
    exports.modalData = modalData;
    exports.NewsTitleModule = NewsTitleModule;
    exports.ɵb = ListingNewsletterComponent;
    exports.ɵc = AddEditSubcategoryComponent;
    exports.ɵd = ListingSubcategoryComponent;
    exports.ɵa = ApiService;
    exports.ɵe = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=news-title.umd.js.map