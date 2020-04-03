import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingModule } from 'listing-angular7';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DatePipe, CommonModule } from '@angular/common';
import { MatSnackBarModule, MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import * as moment_ from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators, FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog as MatDialog$1, MatDialogRef as MatDialogRef$1, MAT_DIALOG_DATA as MAT_DIALOG_DATA$1 } from '@angular/material/dialog';
import { Injectable, NgModule, Component, Input, Inject, ViewChild, CUSTOM_ELEMENTS_SCHEMA, defineInjectable, inject } from '@angular/core';
import { AmazingTimePickerService, AmazingTimePickerModule } from 'amazing-time-picker';
import { CKEditorModule } from 'ngx-ckeditor';
import { MomentModule } from 'ngx-moment';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.service.ts
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
    NewsTitleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NewsTitleService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    /** @nocollapse */ NewsTitleService.ngInjectableDef = defineInjectable({ factory: function NewsTitleService_Factory() { return new NewsTitleService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: NewsTitleService, providedIn: "root" });
    return NewsTitleService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
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
    /** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NewsTitleComponent = /** @class */ (function () {
    function NewsTitleComponent(fb, apiService, _snackBar, dialog) {
        // this.newsLatterForm = this.fb.group({
        //   fullname: ['', Validators.required],
        //   phone: ['', Validators.required],
        //   company: ['', Validators.required],
        //   email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        // });
        this.fb = fb;
        this.apiService = apiService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
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
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "logo", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.logoValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            // console.log("======================",this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log('The dialog was closed');
            // console.log(result);
        }));
    };
    NewsTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-newsTitle',
                    // templateUrl:'./news-title.component.html',
                    template: "",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    NewsTitleComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: MatSnackBar },
        { type: MatDialog }
    ]; };
    NewsTitleComponent.propDecorators = {
        formTitle: [{ type: Input }],
        logo: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
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
            fullname: ['', Validators.required],
            group: [0,],
            phone: ['', Validators.required],
            company: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.data.serverUrlValue); //  set the server url
        }), 50);
        // console.log("+++++++++++++++",this.data.serverUrlValue);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
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
            this.apiService.addData(data).subscribe((/**
             * @param {?} responce
             * @return {?}
             */
            function (responce) {
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
        // console.log('ok---?-');
        this.newsLatterForm.controls[val].markAsUntouched();
    };
    modalData.decorators = [
        { type: Component, args: [{
                    selector: 'modalData',
                    template: "\n<mat-card >\n\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\n             <img  [src]=\"data.logoValue\">\n         </span>\n   \n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\n   \n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\n           <mat-form-field>\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\n                           Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Phone field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\n                           Phone field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!-- Email field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\n                           Email is not valid</mat-error>\n                       <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\n                           Email field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Company field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\n                           Full Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n   \n           <button mat-raised-button color=\"primary\">Submit</button>\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\n               clear\n               </i>\n   \n   \n       </form>\n   </mat-card>",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    modalData.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: ApiService },
        { type: FormBuilder }
    ]; };
    modalData.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
    };
    return modalData;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/material-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        A11yModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        PortalModule,
                        ScrollingModule,
                    ]
                },] }
    ];
    return DemoMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/listing-newsletter/listing-newsletter.component.ts
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
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image", "fullname_search",
                    "group_name_search"],
                listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email", "group_name": "Group Name", "status": "Status", "date_added": "Date", "date added": "Date",
                    "group name": "Group Name" },
                admintablenameTableName: "admin",
                status: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    textsearch: [{ label: "Search Name", field: 'fullname_search' }, { label: "Search By Email", field: 'email' }, { label: "Search By Group Name", field: 'group_name_search' }],
                },
                detail_header: ['_id', 'fullname_search']
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    ListingNewsletterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-newsletter',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsLetterListConfig.datasource !=null && newsLetterListConfig.datasource.length > 0\"\n      [datasource]=\"newsLetterListConfig.datasource\" [skip]=\"newsLetterListConfig.listArray_skip\"\n      [modify_header_array]=\"newsLetterListConfig.listArray_modify_header\" [sourcedata]=\"newsLetterListConfig.tableName\"\n      [statusarr]=\"newsLetterListConfig.status\" [jwttoken]=\"newsLetterListConfig.jwtToken\"\n      [apiurl]=\"newsLetterListConfig.apiUrl\" [editroute]=\"newsLetterListConfig.editUrl\"\n      [deleteendpoint]=\"newsLetterListConfig.deleteEndPoint\"\n      [date_search_source]=\"newsLetterListConfig.view\"\n     [date_search_endpoint]=\"newsLetterListConfig.listEndPoint\"\n     [search_settings]=\"newsLetterListConfig.search_settings\"\n     [detail_skip_array]=\"newsLetterListConfig.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"newsLetterListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingNewsletterComponent.ctorParameters = function () { return []; };
    ListingNewsletterComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingNewsletterComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSubcategoryComponent = /** @class */ (function () {
    function AddEditSubcategoryComponent(formBuilder, newsletterService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsletterService = newsletterService;
        this.router = router;
        this.dialog = dialog;
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
        this.getSubscriberList();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                break;
        }
        // --------------------------------------------------------------------------
    };
    //get subscriber list
    //get subscriber list
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.getSubscriberList = 
    //get subscriber list
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.subscriber_table_name };
        this.newsletterService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.subscriber_name_array = result.res;
            console.log(_this.subscriber_name_array);
        }));
    };
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.setDefaultValue = 
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
            subscriber: defaultValue.subscriber
        });
    };
    // ==================================================================================================
    /** blur function **/
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.inputBlur = 
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.subscriptionCatForm.controls[val].markAsUntouched();
    };
    // ======================form generation=====================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.generateForm = 
    // ======================form generation=====================
    /**
     * @return {?}
     */
    function () {
        this.subscriptionCatForm = this.formBuilder.group({
            name: ['', Validators.required],
            priority: ['', Validators.required],
            status: [],
            subscriber: []
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
        /** marking as untouched **/
        for (var x in this.subscriptionCatForm.controls) {
            this.subscriptionCatForm.controls[x].markAsTouched();
        }
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
            this.newsletterService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditSubcategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subcategory',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n      <form autocomplete=\"off\" [formGroup]=\"subscriptionCatForm\">\n\n\n        <!-- Name  -->\n        <mat-form-field>\n          <mat-label>Name :</mat-label>\n          <input matInput placeholder=\"name\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!subscriptionCatForm.controls['name'].valid\n          && subscriptionCatForm.controls['name'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Priority -->\n\n        <mat-form-field>\n          <mat-label>Priority :</mat-label>\n          <input matInput placeholder=\"priority\" type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!subscriptionCatForm.controls['priority'].valid\n          && subscriptionCatForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- //subscriber list -->\n\n        <mat-form-field>\n          <mat-label>Select Subscriber :</mat-label>\n          <mat-select matNativeControl  formControlName=\"subscriber\" multiple>\n            <mat-option  *ngFor='let i of subscriber_name_array' [value]=\"i._id\">{{ i.fullname }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n          <!-- Status  -->\n          <mat-label>Status :</mat-label>\n          <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n        <!-- Button  -->\n        <button type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n      </form>\n\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubcategoryComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSubcategoryComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal = /** @class */ (function () {
    function Modal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/subscriptioncategory/listing-subcategory/listing-subcategory.component.ts
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
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image", "name_search", "sub_name_search"],
                listArray_modify_header: { "name": "Name", "priority": "Priority", "status": "Status", "date_added": "Date", "date added": "Date", "subscriber_name": "Subscriber Name", "count": "Count", "subscriber name": "Subscriber Name" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search By Name", field: 'name_search' }, { label: "Search By Subscriber Name", field: 'sub_name_search' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                },
                /*Showing Image in the Modal*/
                pendingmodelapplicationarray_detail_datatype: [{
                        key: "image",
                        value: 'image',
                        fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
                    }],
                detail_header: ['_id', 'name_search']
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
        { type: Component, args: [{
                    selector: 'lib-listing-subcategory',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"SubsCatListConfig.datasource !=null && SubsCatListConfig.datasource.length > 0\"\n        [datasource]=\"SubsCatListConfig.datasource\" [skip]=\"SubsCatListConfig.listArray_skip\"\n        [modify_header_array]=\"SubsCatListConfig.listArray_modify_header\" [sourcedata]=\"SubsCatListConfig.tableName\"\n        [statusarr]=\"SubsCatListConfig.statusarr\" [jwttoken]=\"SubsCatListConfig.jwtToken\"\n        [apiurl]=\"SubsCatListConfig.apiUrl\" [editroute]=\"SubsCatListConfig.editUrl\"\n        [deleteendpoint]=\"SubsCatListConfig.deleteEndPoint\"\n        [date_search_source]=\"SubsCatListConfig.view\"\n       [date_search_endpoint]=\"SubsCatListConfig.listEndPoint\"\n       [search_settings]=\"SubsCatListConfig.search_settings\"\n       [detail_datatype]=\"SubsCatListConfig.pendingmodelapplicationarray_detail_datatype\"\n       [detail_skip_array]=\"SubsCatListConfig.detail_header\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"SubsCatListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingSubcategoryComponent.ctorParameters = function () { return []; };
    ListingSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSubcategoryComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSubscriptiongroupComponent = /** @class */ (function () {
    function AddEditSubscriptiongroupComponent(formBuilder, cookieService, newsService, router, dialog) {
        // this.filtered_group_array = this.group.valueChanges.pipe(startWith(null),
        //   map((item: any) => item ? this.filter(item) : this.nameValForGroup.slice()));
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add a group to subscriptions";
        this.nameValForGroup = '';
        this.successMessage = "Subscription Added Successfully..!!!";
        // group = new FormControl();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [ENTER, COMMA];
        console.log('filtered_group_array--->', this.nameValForGroup);
    }
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        //getting the group
        this.getGroup();
        //Switch Case starts here
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Group";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "Subscription Updated Successfully..!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Change/Remove Group";
                break;
        }
    };
    Object.defineProperty(AddEditSubscriptiongroupComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =====================generate form==============
    // =====================generate form==============
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.generateForm = 
    // =====================generate form==============
    /**
     * @return {?}
     */
    function () {
        this.subGroupForm = this.formBuilder.group({
            fullname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            company: ['', [Validators.required]],
            group: [],
            status: []
        });
    };
    // ================================================
    // ================================================Default value======================================
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.setDefaultValue = 
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.subGroupForm.patchValue({
            fullname: defaultValue.fullname,
            phone: defaultValue.phone,
            email: defaultValue.email,
            company: defaultValue.company,
            group: defaultValue.group,
            status: defaultValue.status
        });
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.openDialog = 
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal2, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    /** blur function **/
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.subGroupForm.controls[val].markAsUntouched();
    };
    // ==========================================SUBMIT=================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.onSubmit = 
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.subGroupForm.controls) {
            this.subGroupForm.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.subGroupForm.value.status) {
            this.subGroupForm.value.status = parseInt("1");
        }
        else {
            this.subGroupForm.value.status = parseInt("0");
        }
        // if (this.subGroupForm.value.group == 0)
        //   this.successMessage = "Removed Group!!!";    
        /* stop here if form is invalid */
        if (this.subGroupForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subGroupForm.value, this.configData.condition)
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    // =================================================================================================
    // Getting the parent category
    // =================================================================================================
    // Getting the parent category
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.getGroup = 
    // =================================================================================================
    // Getting the parent category
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var postData = {
            source: this.configData.groupData,
            token: this.cookieService.get('jwtToken')
        };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.group_array = response.res;
            console.log('>>>', _this.group_array);
        }));
    };
    // mat chip use for listing 
    // mat chip use for listing 
    /**
     * @param {?} name
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.filter = 
    // mat chip use for listing 
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.nameValForGroup = this.group_array;
        for (var i in this.group_array) {
            // console.log(this.group_array[i].name)
            this.groupname = this.group_array[i].name;
            return this.groupname.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.toLowerCase().indexOf(name.toLowerCase()) === 0;
            }));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.input;
        /** @type {?} */
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.nameValForGroup.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        // this.group.setValue(null);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.remove = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        console.log('index-->', item, index);
        this.nameValForGroup = this.group_array;
        for (var i in this.group_array) {
            // console.log(this.group_array[i].name)
            this.groupname = this.group_array[i].name;
            if (this.group_array[i]._id == item) {
                this.group_array.splice(index, 1);
            }
            // console.log('>>',this.groupname)
        }
    };
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.selected = 
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nameValForGroup.push(event.option.viewValue);
        this.groupInput.nativeElement.value = '';
        // this.group.setValue(null);
    };
    AddEditSubscriptiongroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subscriptiongroup',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"subGroupForm\">\n        <!-- Name -->\n        <mat-form-field>\n          <mat-label>Name :</mat-label>\n          <input matInput formControlName=\"fullname\" (blur)=\"inputBlur('fullname')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['fullname'].valid\n          && subGroupForm.controls['fullname'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Phone -->\n        <mat-form-field>\n          <mat-label>Phone Number :</mat-label>\n          <input matInput formControlName=\"phone\" (blur)=\"inputBlur('phone')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['phone'].valid\n          && subGroupForm.controls['phone'].errors.required\"> Phone is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field>\n          <mat-label>Email :</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.required\"> Email is required.</mat-error>\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.email\"> Email is not valid.</mat-error>\n        </mat-form-field>\n\n        <!-- Company -->\n        <mat-form-field>\n          <mat-label>Company :</mat-label>\n          <input matInput formControlName=\"company\" (blur)=\"inputBlur('company')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['company'].valid\n          && subGroupForm.controls['company'].errors.required\">           <mat-label>Company</mat-label>\n          is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Group  -->\n        <mat-form-field>\n          <mat-label>Select Group :</mat-label>\n          <mat-select matNativeControl formControlName=\"group\" multiple>\n              <mat-option value=\"{{  item._id }}\" *ngFor=\"let item of group_array\">{{ item.name  }}</mat-option>\n            </mat-select> \n        </mat-form-field>\n\n\n        <!-- mat-chips  -->\n\n        <!-- <mat-form-field >\n          <mat-chip-list #chipList>\n            <mat-chip\n            *ngFor=\"let item of nameValForGroup;let i=index\"\n              [selectable]=\"selectable\"\n              [removable]=\"removable\"\n              (click)=\"remove(item.id,i)\">\n              {{item.name}}\n              <mat-icon matChipRemove *ngIf=\"removable\" (click)=\"remove(item.id,i)\">cancel</mat-icon>\n            </mat-chip>\n            <input\n              placeholder=\"Select Group....\"\n              #fruitInput\n              formControlName=\"group\"\n              [matAutocomplete]=\"auto\"\n              [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n              [matChipInputAddOnBlur]=\"addOnBlur\"\n              (matChipInputTokenEnd)=\"add($event)\"\n            />\n          </mat-chip-list>\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n            <mat-option *ngFor=\"let item of filtered_group_array | async\" [value]=\"item\">\n              {{ item }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n\n\n\n\n\n\n\n\n        <mat-label>Status :</mat-label>\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\"  (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubscriptiongroupComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CookieService },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSubscriptiongroupComponent.propDecorators = {
        groupInput: [{ type: ViewChild, args: ['fruitInput',] }],
        config: [{ type: Input }]
    };
    return AddEditSubscriptiongroupComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal2 = /** @class */ (function () {
    function Modal2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal2.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal2.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal2.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal2;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment_;
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router, snackBar, dialog) {
        // this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        this.group_name_array = [];
        this.sender_name_array = [];
        this.frequency_flag = false;
        this.days_array = [];
    }
    Object.defineProperty(AddEditNewsletterlibComponent.prototype, "config", {
        // ==============================================
        /**ckeditor start here*/
        // public Editor = ClassicEditor;  //for ckeditor
        // editorConfig = {
        //   placeholder: 'Content:',
        // };
        // public model = {
        //   editorData: ''
        // };
        /**ckeditor end here*/
        set: 
        // ==============================================
        /**ckeditor start here*/
        // public Editor = ClassicEditor;  //for ckeditor
        // editorConfig = {
        //   placeholder: 'Content:',
        // };
        // public model = {
        //   editorData: ''
        // };
        /**
         * ckeditor end here
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // unix_timestamp(t) {
    //   var d = new Date(t * 1000),	// Convert the passed timestamp to milliseconds
    //     yyyy = d.getFullYear(),
    //     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
    //     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.	
    //     time;
    //   // ie: 2013-02-18, 8:35 AM	
    //   time = mm + "/" + dd + "/" + yyyy;
    //   return time;
    // }
    // unix_timestamp(t) {
    //   var d = new Date(t * 1000),	// Convert the passed timestamp to milliseconds
    //     yyyy = d.getFullYear(),
    //     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
    //     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.	
    //     time;
    //   // ie: 2013-02-18, 8:35 AM	
    //   time = mm + "/" + dd + "/" + yyyy;
    //   return time;
    // }
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = 
    // unix_timestamp(t) {
    //   var d = new Date(t * 1000),	// Convert the passed timestamp to milliseconds
    //     yyyy = d.getFullYear(),
    //     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
    //     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.	
    //     time;
    //   // ie: 2013-02-18, 8:35 AM	
    //   time = mm + "/" + dd + "/" + yyyy;
    //   return time;
    // }
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.weekdays();
        this.getReplyAddress();
        if (this.configData.action == 'add') {
            this.time = this.datepipe.transform(new Date(), 'H:mm');
        }
        if (this.configData.action == 'edit') {
            this.getReplyAddress();
        }
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
        //  calling the form generation 
        this.generateForm();
        this.newsForm.value.cookiemail = this.cookieService.get('get_email');
        /*Switch case*/
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Newsletter";
                this.message = "Newsletter Added Successfully!!!";
                break;
            case 'edit':
                this.days_json = null;
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.message = "Newsletter Information Updated!!!";
                // this.reply_address=this.reply_data[0].email;
                if (this.configData.defaultData.newsfrequency == "daily")
                    this.frequency_flag = false;
                else
                    this.frequency_flag = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.setDefaultValue(_this.configData.defaultData);
                }), 1000);
                if (this.configData.defaultData.days_of_weeks != null)
                    this.frequency_flag = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.days_json = _this.configData.defaultData.days_of_weeks;
                }), 1000);
                break;
        }
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.weekdays = /**
     * @return {?}
     */
    function () {
        this.days_json = [
            {
                "day": "Sunday",
                "value": 1,
                isSelected: false
            },
            {
                "day": "Monday",
                "value": 2,
                isSelected: false
            },
            {
                "day": "Tuesday",
                "value": 3,
                isSelected: false
            },
            {
                "day": "Wednesday",
                "value": 4,
                isSelected: false
            },
            {
                "day": "Thursday",
                "value": 5,
                isSelected: true
            },
            {
                "day": "Friday",
                "value": 6,
                isSelected: false
            },
            {
                "day": "Saturday",
                "value": 7,
                isSelected: false
            }
        ];
    };
    /** mat snackbar **/
    /**
     * mat snackbar *
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.openSnackBar = /**
     * mat snackbar *
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    /** opening up the time picker **/
    /**
     * opening up the time picker *
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * opening up the time picker *
     * @return {?}
     */
    function () {
        /** @type {?} */
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
        }));
    };
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /** open Modal **/
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /**
     * open Modal *
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.openDialog = 
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /**
     * open Modal *
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        // console.log(y)
        var _this = this;
        this.dialogRef = this.dialog.open(PREVIEW, {
            panelClass: 'newspreview-dialog',
            data: {
                msg: x,
                test_mail: y,
            }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log(result)
            // console.log(result)
            /** @type {?} */
            var mailData = {
                "title": result.title,
                "subject": result.subject,
                "description": result.content,
                "testMail": result.testMail
            };
            if (result.flag == "yes") {
                /** @type {?} */
                var data1 = {
                    source: _this.configData.source_for_test_mail_add,
                    data: mailData
                };
                _this.newsService.addData(_this.configData.endpoint, data1).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (response.status == "success") {
                        _this.openSnackBar('Email Send Successfully.', 'OK');
                        // this.dialogRef.close();
                    }
                    else {
                        _this.openSnackBar('Error Occure....!', '');
                    }
                }));
            }
        }));
    };
    /** preview all **/
    /**
     * preview all *
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.preview_all = /**
     * preview all *
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.newsForm.value.content == '' || this.newsForm.value.newssubject == '') {
            alert("Subject and Description field is requird for test email....!");
        }
        else {
            /** @type {?} */
            var data1 = { 'source': this.configData.test_mail_table };
            this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result;
                result = response;
                _this.test_mail = result.res;
                _this.openDialog((Object.values(_this.newsForm.value)), (_this.test_mail));
                // console.log('+++', this.test_mail)
            }));
            // this.openDialog(this.newsForm.value,this.test_mail)
            // this.openDialog((Object.values(this.newsForm.value)),(this.test_mail));
            // console.log(this.newsForm.value)
        }
    };
    /*getting the group name*/
    /*getting the group name*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getGroupName = /*getting the group name*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.group_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.group_name_array = result.res;
        }));
    };
    /*getting the sender's email*/
    /*getting the sender's email*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getReplyAddress = /*getting the sender's email*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.reply_address_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.reply_data = result.res;
            _this.email_address = _this.reply_data[0].email;
            _this.reply_address_id = _this.reply_data[0]._id;
            // console.log(this.email_address.email)
        }));
    };
    // reply address 
    // reply address 
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getSenderAddress = 
    // reply address 
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.sender_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.sender_name_array = result.res;
            // console.log(this.sender_name_array)
        }));
    };
    //generate form
    //generate form
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.generateForm = 
    //generate form
    /**
     * @return {?}
     */
    function () {
        this.newsForm = this.formBuilder.group({
            newstitle: ['', [Validators.required]],
            newssubject: ['', [Validators.required]],
            share_news: [],
            publishdate_normal_format: [],
            senderaddress: [],
            publishdate: ['', [Validators.required]],
            settime: [this.time],
            content: ['', [Validators.required]],
            newsfrequency: [],
            days_of_weeks: [],
            timeofday: [this.time],
            timezone: [],
            startdate: ['', [Validators.required]],
            enddate: ['', [Validators.required]],
            reply_email: [this.reply_address_id],
            status: [1]
        });
    };
    //setting the default value
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.setDefaultValue = 
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.tmp_date = defaultValue.publishdate;
        /** @type {?} */
        var date = new Date(this.tmp_date);
        defaultValue.publishdate = date,
            this.tmp_date = defaultValue.startdate;
        date = new Date(this.tmp_date);
        defaultValue.startdate = date,
            this.tmp_date = defaultValue.enddate;
        date = new Date(this.tmp_date);
        defaultValue.enddate = date,
            this.newsForm.patchValue({
                newstitle: defaultValue.newstitle,
                newssubject: defaultValue.newssubject,
                share_news: defaultValue.share_news,
                senderaddress: defaultValue.senderaddress,
                publishdate: defaultValue.publishdate,
                settime: defaultValue.settime,
                content: defaultValue.content,
                days_of_weeks: defaultValue.days_of_weeks,
                newsfrequency: defaultValue.newsfrequency,
                timeofday: defaultValue.timeofday,
                timezone: defaultValue.timezone,
                startdate: defaultValue.startdate,
                enddate: defaultValue.enddate,
                reply_email: defaultValue.reply_email
            });
        // this.share_with_group = defaultValue.share_news;   
    };
    /** blur function **/
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.inputBlur = /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.newsForm.controls[val].markAsUntouched();
    };
    /** marking the checkbox as true **/
    /**
     * marking the checkbox as true *
     * @param {?} day_var
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getDays = /**
     * marking the checkbox as true *
     * @param {?} day_var
     * @return {?}
     */
    function (day_var) {
        if (day_var.isSelected === true)
            day_var.isSelected = false;
        else
            day_var.isSelected = true;
    };
    //submit function
    //submit function
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.onSubmit = 
    //submit function
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.days_array = [];
        this.false_count = 0;
        if (this.frequency_flag != false)
            for (var i = 0; i < this.days_json.length; i++) {
                if (this.days_json[i].isSelected) {
                    this.days_array.push(this.days_json[i]);
                    this.false_count--;
                }
                else
                    this.days_array.push(this.days_json[i]);
                this.false_count++;
            }
        if (this.false_count == 7)
            return;
        if (this.frequency_flag == true)
            this.newsForm.value.days_of_weeks = this.days_array;
        else
            this.newsForm.value.days_of_weeks = null;
        this.newsForm.value.publishdate = moment(this.newsForm.value.publishdate).format('MM/DD/YYYY');
        this.newsForm.value.startdate = moment(this.newsForm.value.startdate).format('MM/DD/YYYY');
        this.newsForm.value.enddate = moment(this.newsForm.value.enddate).format('MM/DD/YYYY');
        this.newsForm.value.reply_email = this.reply_data[0]._id;
        /** @type {?} */
        var x = moment(this.newsForm.value.publishdate).unix();
        this.newsForm.value.publishdate_normal_format = parseInt(x) * 1000;
        /** marking as untouched **/
        for (var x_1 in this.newsForm.controls) {
            this.newsForm.controls[x_1].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["senderaddress", "reply_email"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openSnackBar(_this.message, "OK");
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\" multiple>\n            <mat-option  *ngFor=\"let i of group_name_array\" [value]=\"i._id\">{{ i.name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option  *ngFor='let i of sender_name_array' [value]=\"i._id\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n         <!-- Time Picker  -->\n         <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n          <!-- News Letter Time Zone -->\n          <mat-form-field>\n            <mat-label>News Letter Time Zone</mat-label>\n            <mat-select matNativeControl required formControlName=\"timezone\">\n              <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n              <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n              <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n              <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n              <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n              <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n            </mat-select>\n          </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Description is required.</mat-error><br>\n\n\n      <button   type=\"button\" class=\"submitbtn submitbtnpreview\" mat-raised-button color=\"primary\"\n       (click)=\"preview_all()\" >Preview For Test Email</button>\n        <!-- <h1> SET FREQUENCY </h1> -->\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <!-- <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"automatic_newsletter_to=i.name\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field> -->\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false;days_json={}\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"weekdays();frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag==true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- NewsLetter reply to email address  -->\n        <div class=\"setting_formblock text-field-new-div\">\n          <span class=\"\">Reply Email Address:</span>\n          <span class=\"setting_formblock text-field-new\">{{email_address}}</span>\n        </div>\n\n        <!-- {{email_address.email}} -->\n     \n        <!-- <span>Reply Email Address:</span>\n        <mat-form-field>\n           <input matInput [value]=\"email_address\"  readonly>\n        </mat-form-field>  -->\n\n        \n\n\n        <!-- Buttons  -->\n         <!-- <button *ngIf=\"this.configData.action=='add'\" [disabled]=\"!newsForm.valid\" type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\" openDialog()\">PREVIEW</button> -->\n        <button type=\"submit\" class=\"submitbtn\"  mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\"\n        mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}.setting_formblock .text-field-new{background:#dde2e5;padding:5px;border:4px solid #646d73;width:350px;height:32px}.setting_formblock .text-field-new-div{display:inline-block;margin:0 20px;position:relative;text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder },
        { type: Router },
        { type: MatSnackBar$1 },
        { type: MatDialog$1 }
    ]; };
    AddEditNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditNewsletterlibComponent;
}());
// ============================================MODAL COMPONENT===========================================
var PREVIEW = /** @class */ (function () {
    function PREVIEW(dialogRef, data, newsService, cookieService) {
        // console.log('>>', data)
        this.dialogRef = dialogRef;
        this.data = data;
        this.newsService = newsService;
        this.cookieService = cookieService;
    }
    Object.defineProperty(PREVIEW.prototype, "config", {
        set: /**
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
    PREVIEW.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    PREVIEW.prototype.selectOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val)
    };
    /**
     * @param {?} title
     * @param {?} subject
     * @param {?} content
     * @param {?} testMail
     * @param {?} flag
     * @return {?}
     */
    PREVIEW.prototype.testMailSubmit = /**
     * @param {?} title
     * @param {?} subject
     * @param {?} content
     * @param {?} testMail
     * @param {?} flag
     * @return {?}
     */
    function (title, subject, content, testMail, flag) {
        // console.log(title, subject, content, testMail);
        this.data.title = title;
        this.data.subject = subject;
        this.data.content = content;
        this.data.testMail = this.testMail;
        this.data.flag = flag;
        this.dialogRef.close(this.data);
        // let endpoint:any='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata'
        // let mailData: any = {
        //   source: 'newsTestMailData',
        //   data: {
        //     "title":title,
        //     "subject":subject,
        //     "content":content,
        //     "testMail":this.testMail
        //   },
        //   "sourceobj": ["testMail"],
        //   "token":this.cookieService.get('jwtToken')
        // };
        // this.newsService.addData(endpoint, mailData).subscribe((response: any) => {
        //   if (response.status == "success") {
        //     // this.openSnackBar(this.message, "OK");
        //     this.dialogRef.close();
        //   }
        // });
    };
    PREVIEW.decorators = [
        { type: Component, args: [{
                    selector: 'app-preview',
                    template: "<h1 mat-dialog-title>Newsletter Preview</h1>\n<div mat-dialog-content>\n\n   <!-- <div>\n      <span>Newsletter Title :</span>\n      <span><b>{{ data.msg[0] }}</b></span>\n   </div> <br> -->\n\n   <div>\n      <!-- <span>Newsletter Subject :</span> -->\n      <span><b>{{ data.msg[1] }}</b></span>\n   </div><br>\n\n\n   <div>\n      <!-- <span>Newsletter Description :</span> -->\n      <span><b [innerHTML]='data.msg[7]'></b></span>\n   </div>\n\n   <div>\n      <mat-form-field>\n         <mat-label>Select E-mail Address:</mat-label>\n         <mat-select matNativeControl required  multiple (change)=\"selectOption($event.target.value)\"\n         [(ngModel)]=\"testMail\" >\n           <!-- <mat-option value=0>Select a group</mat-option> -->\n           <mat-option *ngFor=\"let i of data.test_mail\" [value]=\"i._id\">{{ i.email }}</mat-option>\n           </mat-select>\n       </mat-form-field>\n   </div>\n\n\n\n<span class=\"newsbtnclass\">\n   <button class=\"submitbtn\" mat-raised-button\n   color=\"primary\" (click)=\"testMailSubmit(data.msg[0],data.msg[1],data.msg[7],testMail,'yes')\" cdkFocusInitial>Send</button>\n <button class=\"submitbtn\" mat-dialog-close=\"no\" cdkFocusInitial mat-raised-button color=\"primary\">Cancel</button>\n</span>\n\n</div>\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}.setting_formblock .text-field-new{background:#dde2e5;padding:5px;border:4px solid #646d73;width:350px;height:32px}.setting_formblock .text-field-new-div{display:inline-block;margin:0 20px;position:relative;text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    PREVIEW.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] },
        { type: NewsTitleService },
        { type: CookieService }
    ]; };
    PREVIEW.propDecorators = {
        config: [{ type: Input }]
    };
    return PREVIEW;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/listing-newsletterlib/listing-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingNewsletterlibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingNewsletterlibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingNewsletterlibComponent.prototype, "config", {
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
            this.newsConfigForm = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "title_search", "publishdate_normal_format", "subject_search"],
                listArray_modify_header: {
                    'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
                    'publishdate': 'Publish Date', 'status': 'Status', 'date added': 'Date Added'
                },
                admintablenameTableName: "admin",
                status: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                detail_header: ['_id', 'publishdate_normal_format', 'title_search'],
                date_search_source: receivedData.view,
                date_search_endpoint: 'datalist',
                search_settings: {
                    textsearch: [{ label: "Search by title...", field: 'title_search' },
                        { label: "Search by subject...", field: 'subject_search' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search By Date", field: "publishdate_normal_format" }],
                },
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-newsletterlib',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsConfigForm.datasource !=null && newsConfigForm.datasource.length > 0\"\n      [datasource]=\"newsConfigForm.datasource\" \n      [skip]=\"newsConfigForm.listArray_skip\"\n      [modify_header_array]=\"newsConfigForm.listArray_modify_header\" \n      [sourcedata]=\"newsConfigForm.tableName\"\n      [statusarr]=\"newsConfigForm.status\" \n      [jwttoken]=\"newsConfigForm.jwtToken\"\n      [apiurl]=\"newsConfigForm.apiUrl\" \n      [editroute]=\"newsConfigForm.editUrl\"\n      [deleteendpoint]=\"newsConfigForm.deleteEndPoint\"\n      [date_search_source]=\"newsConfigForm.view\"\n      [date_search_endpoint]=\"newsConfigForm.listEndPoint\"\n      [search_settings]=\"newsConfigForm.search_settings\"\n      [detail_skip_array]=\"newsConfigForm.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"newsConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingNewsletterlibComponent.ctorParameters = function () { return []; };
    ListingNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingNewsletterlibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/senderslist/add-edit-sender/add-edit-sender.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSenderComponent = /** @class */ (function () {
    // ===========================================
    function AddEditSenderComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.ngOnInit = /**
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
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit Sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
        });
    };
    Object.defineProperty(AddEditSenderComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
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
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSenderComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal3, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    /** blur function **/
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditSenderComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.senderForm.controls[val].markAsUntouched();
    };
    // ================================================Default value======================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSenderComponent.prototype.setDefaultValue = 
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    // =======================On SUBMIT======================
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.senderForm.controls) {
            this.senderForm.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-sender',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!senderForm.controls['name'].valid\n          && senderForm.controls['name'].errors.required\" > Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.required\" > Email is required.</mat-error>\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.email\" > Email is not Valid.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSenderComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSenderComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal3 = /** @class */ (function () {
    function Modal3(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal3.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal3.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal3.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal3;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/senderslist/listing-sender/listing-sender.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingSenderComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSenderComponent(cookieService) {
        this.cookieService = cookieService;
        this.loader = true;
    }
    Object.defineProperty(ListingSenderComponent.prototype, "config", {
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
            this.senderConfigForm2 = {
                apiUrl: receivedData.apiUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email", "date": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                detail_header: ['_id']
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-sender',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"senderConfigForm2.datasource !=null && senderConfigForm2.datasource.length > 0\"\n      [datasource]=\"senderConfigForm2.datasource\" [skip]=\"senderConfigForm2.listArray_skip\"\n      [modify_header_array]=\"senderConfigForm2.listArray_modify_header\" [sourcedata]=\"senderConfigForm2.tableName\"\n      [statusarr]=\"senderConfigForm2.statusarr\" [jwttoken]=\"senderConfigForm2.jwtToken\"\n      [apiurl]=\"senderConfigForm2.apiUrl\" [editroute]=\"senderConfigForm2.editUrl\"\n      [deleteendpoint]=\"senderConfigForm2.deleteEndPoint\"\n      [detail_skip_array]=\"senderConfigForm2.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"senderConfigForm2.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [".sender_message{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListingSenderComponent.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
    ListingSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSenderComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditTestemaillibComponent = /** @class */ (function () {
    // ===========================================
    function AddEditTestemaillibComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender(Test)";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.ngOnInit = /**
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
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderFormTest = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
        });
    };
    Object.defineProperty(AddEditTestemaillibComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
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
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal4, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderFormTest.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    /** blur function **/
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.inputBlur = 
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.senderFormTest.controls[val].markAsUntouched();
    };
    // =======================On SUBMIT======================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.onSubmit = 
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.senderFormTest.controls) {
            this.senderFormTest.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.senderFormTest.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderFormTest.value, this.configData.condition),
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-testemaillib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderFormTest\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!senderFormTest.controls['name'].valid\n          && senderFormTest.controls['name'].errors.required\" > Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!senderFormTest.controls['email'].valid\n          && senderFormTest.controls['email'].errors.required\" > Email is required.</mat-error>\n          <mat-error *ngIf=\"!senderFormTest.controls['email'].valid\n          && senderFormTest.controls['email'].errors.email\" > Email is not valid.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditTestemaillibComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditTestemaillibComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal4 = /** @class */ (function () {
    function Modal4(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal4.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal4.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal4.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal4;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/testemails/listing-testemaillib/listing-testemaillib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingTestemaillibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingTestemaillibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingTestemaillibComponent.prototype, "config", {
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
            this.senderConfigForm = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                detail_header: ['_id']
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingTestemaillibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-testemaillib',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\"\n      [detail_skip_array]=\"senderConfigForm.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingTestemaillibComponent.ctorParameters = function () { return []; };
    ListingTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingTestemaillibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                        AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                        AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                        ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent, PREVIEW
                    ],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule,
                        AmazingTimePickerModule,
                        // NgxMaterialTimepickerModule,
                        CKEditorModule,
                        MomentModule
                    ],
                    exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                        Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent, ListingNewsletterlibComponent,
                        ListingSenderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService, DatePipe],
                    entryComponents: [PREVIEW, Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: news-title-lib-influxiq.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NewsTitleService, NewsTitleComponent, modalData, NewsTitleModule, AddEditSubscriptiongroupComponent as ɵd, Modal2 as ɵe, ListingNewsletterComponent as ɵh, AddEditNewsletterlibComponent as ɵj, PREVIEW as ɵk, ListingNewsletterlibComponent as ɵl, AddEditSenderComponent as ɵm, Modal3 as ɵn, ListingSenderComponent as ɵo, AddEditSubcategoryComponent as ɵf, Modal as ɵg, ListingSubcategoryComponent as ɵi, AddEditTestemaillibComponent as ɵb, Modal4 as ɵc, ListingTestemaillibComponent as ɵp, ApiService as ɵa, DemoMaterialModule as ɵq };

//# sourceMappingURL=news-title-lib-influxiq.js.map