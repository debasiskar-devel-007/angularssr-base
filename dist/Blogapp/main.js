(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/blog/fesm5/blog.js":
/*!************************************************************!*\
  !*** /var/angular/angularssr-base/dist/blog/fesm5/blog.js ***!
  \************************************************************/
/*! exports provided: BlogService, BlogComponent, BlogModule, ɵb, ɵc, ɵd, ɵe, ɵf, ɵa, ɵj, ɵh, ɵi, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AddBlogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Dialogtest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AddeditBlogmanagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return YoutubeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ListingBlogmanagementlibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return YoutubeplayerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "../../node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "../../node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var file_upload__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! file-upload */ "../../dist/file-upload/fesm5/file-upload.js");
/* harmony import */ var listing_angular7__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! listing-angular7 */ "../../node_modules/listing-angular7/fesm5/listing-angular7.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "../../node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
























































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlogService = /** @class */ (function () {
    function BlogService() {
    }
    BlogService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BlogService.ctorParameters = function () { return []; };
    /** @nocollapse */ BlogService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_54__["defineInjectable"])({ factory: function BlogService_Factory() { return new BlogService(); }, token: BlogService, providedIn: "root" });
    return BlogService;
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
        this.fileservername = [];
        this.subjectForServerUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectForaddEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectForuploadEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectFordeletesingleEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectForupdatestatusSingleEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.subjectForGetdataEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
    ApiService.prototype.deleteSingleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    ApiService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_54__["defineInjectable"])({ factory: function ApiService_Factory() { return new ApiService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_54__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_54__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_54__["inject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlogComponent = /** @class */ (function () {
    function BlogComponent(router, apiService, activeroute) {
        this.router = router;
        this.apiService = apiService;
        this.activeroute = activeroute;
        this.ResolveLIstData = [];
        this.editRouteUrl = '';
        this.Blogtablename = '';
        this.deleteRouteUrl = '';
        this.addupdateRouteUrl = '';
        this.apiUrlviaApp = '';
        this.tokenViapp = '';
        /**
         * lib-listing start here*
         */
        this.blogDataarray = [];
        this.Bloglist_skip = ["_id", "description", "created_at"];
        this.Bloglist_modify_header = { 'title': "Title", 'description': "Description",
            'parentcategoryname': "Parent Category", "status": "Status", "priority": "Priority" };
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
    }
    Object.defineProperty(BlogComponent.prototype, "BlogapiUrl", {
        /**lib-listing end here**/
        set: /**
         * lib-listing end here*
         * @param {?} apivalue
         * @return {?}
         */
        function (apivalue) {
            this.apiUrlviaApp = (apivalue) || '<no name set>';
            this.apiUrlviaApp = apivalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "BlogToken", {
        set: /**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            this.tokenViapp = (token) || '<no name set>';
            this.tokenViapp = token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "addTeammember", {
        set: /**
         * @param {?} addvalue
         * @return {?}
         */
        function (addvalue) {
            this.addMemberviaUrl = (addvalue) || '<no name set>';
            this.addMemberviaUrl = addvalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "Blogtable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.Blogtablename = (value) || '<no name set>';
            this.Blogtablename = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "editblog", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editRouteUrl = (value) || '<no name set>';
            this.editRouteUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "AddEditBlog", {
        set: /**
         * @param {?} addeditvalue
         * @return {?}
         */
        function (addeditvalue) {
            this.addupdateRouteUrl = (addeditvalue) || '<no name set>';
            this.addupdateRouteUrl = addeditvalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "deleteBlog", {
        set: /**
         * @param {?} delValue
         * @return {?}
         */
        function (delValue) {
            this.deleteRouteUrl = (delValue) || '<no name set>';
            this.deleteRouteUrl = delValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "getDataSource", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.getDataSourceData = (serverUrlval) || '<no name set>';
            this.getDataSourceData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "listResolve", {
        set: /**
         * @param {?} listresolveUrlval
         * @return {?}
         */
        function (listresolveUrlval) {
            this.blogDataarray = (listresolveUrlval) || '<no name set>';
            this.blogDataarray = listresolveUrlval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**observable start here**/
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData);
        }), 50);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getData();
        }), 50);
        /**observable end here**/
    };
    /***getting all the blog data function start here**/
    /**
     * getting all the blog data function start here*
     * @return {?}
     */
    BlogComponent.prototype.getData = /**
     * getting all the blog data function start here*
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            "source": "blog_category"
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.blogDataarray = result.res;
        }));
    };
    /**function end here**/
    /**
     * function end here*
     * @return {?}
     */
    BlogComponent.prototype.addButton = /**
     * function end here*
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.addMemberviaUrl);
    };
    BlogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'lib-Blog',
                    template: "<!-- header start here -->\n<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">Blog Category</h2>\n    </mat-toolbar>\n    <!-- header end here -->\n    <!-- add button start here -->\n    <mat-toolbar class=\"buttonsetToolbar\">\n        <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\"> Add Blogs</button>\n    </mat-toolbar>\n    <!-- adding button end here -->\n    <!-- applying lib-listing start here -->\n    <mat-card-content class=\"listing-content-admin\">\n        <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"blogDataarray.length>0\" [datasource]=\"blogDataarray\"\n            [skip]=\"Bloglist_skip\" [modify_header_array]=\"Bloglist_modify_header\" [sourcedata]=\"Blogtablename\"\n            [statusarr]=\"status\" [editroute]=\"editRouteUrl\" [apiurl]=\"serverUrlData\" [jwttoken]=\"tokenViapp\"\n            [deleteendpoint]=\"deleteRouteUrl\" [updateendpoint]=\"addupdateRouteUrl\">\n        </lib-listing>\n        <!-- applying lib-listing end here -->\n\n    </mat-card-content>\n</mat-card>",
                    styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    BlogComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["Router"] },
        { type: ApiService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["ActivatedRoute"] }
    ]; };
    BlogComponent.propDecorators = {
        BlogapiUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        BlogToken: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        addTeammember: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        Blogtable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        editblog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        AddEditBlog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        deleteBlog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        getDataEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        getDataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        serverUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        addEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        listResolve: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }]
    };
    return BlogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MatFileUploadModule } from 'angular-material-fileupload';
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["NgModule"], args: [{
                    exports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    ]
                },] }
    ];
    return DemoMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddBlogComponent = /** @class */ (function () {
    function AddBlogComponent(fb, activeroute, apiservice, _http, router, dialog) {
        /**catch the parameter id***/
        this.fb = fb;
        this.activeroute = activeroute;
        this.apiservice = apiservice;
        this._http = _http;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_52__; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Type the content here!',
        };
        this.model = {
            editorData: ''
        };
        this.blogarray = [];
        this.isSubmitted = false;
        this.editarray = [];
        this.statusarray = [];
        this.allData = [];
        /**
         * blog varibles declaration end here*
         */
        this.headerText = 'Add Blog Category';
        this.buttonText = 'Submit';
        this.messageText = 'Successfully Submitted';
        /*catch parameter id end here**/
        /**Formgroup create start here**/
        this.blogAddEditForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            status: [true,],
            parent_id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required]
        });
        /**Formgroup create end here**/
    }
    Object.defineProperty(AddBlogComponent.prototype, "listRoute", {
        set: /**
         * @param {?} listval
         * @return {?}
         */
        function (listval) {
            this.listUrl = (listval) || '<no name set>';
            this.listUrl = listval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "singleData", {
        set: /**
         * @param {?} allData
         * @return {?}
         */
        function (allData) {
            this.allData = allData;
            this.headerText = "Edit Blogs";
            this.buttonText = "Update";
            this.blogAddEditForm.controls['title'].patchValue(allData[0].title);
            this.blogAddEditForm.controls['priority'].patchValue(allData[0].priority);
            this.blogAddEditForm.controls['status'].patchValue(allData[0].status);
            this.blogAddEditForm.controls['description'].patchValue(allData[0].description);
            this.model.editorData = allData[0].description;
            this.blogAddEditForm.controls['parent_id'].patchValue(allData[0].parent_id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddBlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setaddEndpoint(_this.addEndpointData);
        }), 50);
        /**Observable end here**/
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getBlogData();
        }), 100);
    };
    /*modal start here*/
    /*modal start here*/
    /**
     * @param {?} x
     * @return {?}
     */
    AddBlogComponent.prototype.openDialog = /*modal start here*/
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Dialogtest, {
            width: '250px',
            data: { message: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    /**modal end here */
    /**validation untouch purpose **/
    /**modal end here */
    /**
     * validation untouch purpose *
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    AddBlogComponent.prototype.inputUntouch = /**modal end here */
    /**
     * validation untouch purpose *
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    function (form, val) {
        form.controls[val].markAsUntouched();
    };
    /*validation untouch purpose*/
    /** getting all blogs data start here **/
    /*validation untouch purpose*/
    /**
     * getting all blogs data start here *
     * @return {?}
     */
    AddBlogComponent.prototype.getBlogData = /*validation untouch purpose*/
    /**
     * getting all blogs data start here *
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            "source": "blog_category"
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = response;
            _this.blogarray = result.res;
        }));
    };
    // /**getting all blogs data end here**/
    /**add & update* blogs submitting form start here**/
    // /**getting all blogs data end here**/
    /**
     * add & update* blogs submitting form start here*
     * @return {?}
     */
    AddBlogComponent.prototype.blogAddEditFormSubmit = 
    // /**getting all blogs data end here**/
    /**
     * add & update* blogs submitting form start here*
     * @return {?}
     */
    function () {
        var _this = this;
        this.blogAddEditForm.patchValue({
            description: this.model.editorData
        });
        this.isSubmitted = true;
        /** @type {?} */
        var x;
        for (x in this.blogAddEditForm.controls) {
            this.blogAddEditForm.controls[x].markAsTouched();
        }
        if (this.blogAddEditForm.valid) {
            if (this.blogAddEditForm.value.status)
                this.blogAddEditForm.value.status = parseInt("1");
            else
                this.blogAddEditForm.value.status = parseInt("0");
            /** @type {?} */
            var data;
            if (this.activeroute.snapshot.params.id != null) { //update part
                this.messageText = "One row updated!!!";
                data = {
                    "source": "blog_category",
                    "data": {
                        "id": this.params_id,
                        "parent_id": this.blogAddEditForm.value.parent_id,
                        'title': this.blogAddEditForm.value.title,
                        'priority': this.blogAddEditForm.value.priority,
                        'status': this.blogAddEditForm.value.status,
                        'description': this.blogAddEditForm.value.description
                    },
                    "sourceobj": ["parent_id"]
                };
            }
            else {
                data = {
                    //add part
                    "source": "blog_category",
                    "data": {
                        "parent_id": this.blogAddEditForm.value.parent_id,
                        'title': this.blogAddEditForm.value.title,
                        'priority': this.blogAddEditForm.value.priority,
                        'status': this.blogAddEditForm.value.status,
                        'description': this.blogAddEditForm.value.description
                    },
                    "sourceobj": ["parent_id"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result;
                result = response;
                _this.statusarray = result.status;
                if (result.status == "success")
                    _this.openDialog(_this.messageText);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.dialogRef.close();
                }), 2000);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listUrl);
                }), 3000);
            }));
        }
    };
    AddBlogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'lib-add-blog',
                    template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{headerText}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" name=\"blogAddEditForm\" (ngSubmit)=\"blogAddEditFormSubmit()\"\n        [formGroup]=\"blogAddEditForm\">\n\n        <mat-form-field >\n          <input matInput type=\"text\" placeholder=\"Title\" [formControl]=\"blogAddEditForm.controls['title']\"\n            (blur)=\"inputUntouch(blogAddEditForm,'title')\">\n          <mat-error\n            *ngIf=\"blogAddEditForm.controls['title'].touched && !blogAddEditForm.controls['title'].valid && blogAddEditForm.controls['title'].errors.required\">\n            Category Name field can not be blank</mat-error>\n        </mat-form-field>\n  \n         <!-- -------------------------------priority--------------------------- -->\n         <mat-form-field>\n         <input matInput type=\"number\" placeholder=\"Priority\" [formControl]=\"blogAddEditForm.controls['priority']\"  (blur)=\"inputUntouch(blogAddEditForm,'priority')\">\n         <!-- ------------------------------------------------------------------ -->\n         <mat-error *ngIf=\"blogAddEditForm.controls['priority'].touched && !blogAddEditForm.controls['priority'].valid && blogAddEditForm.controls['priority'].errors.required\">\n          Priority field can not be blank</mat-error> <br>\n        </mat-form-field>\n          <!-- -------------------------------status--------------------------- -->          \n          <mat-checkbox [formControl]=\"blogAddEditForm.controls['status']\">Active</mat-checkbox><br>\n          <!-- ---------------------------------------------------------------- -->\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" [(ngModel)]=\"model.editorData\"\n          [ngModelOptions]=\"{standalone: true}\"></ckeditor>\n        <mat-error\n          *ngIf=\"blogAddEditForm.controls['description'].touched && !blogAddEditForm.controls['description'].valid && blogAddEditForm.controls['description'].errors.required\">\n          Description field can not be blank</mat-error>\n        <!-- ckeditor end here -->\n        <mat-form-field>\n\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\" let f of blogarray\" [value]=\"f._id\">\n              {{f.title}}\n            </mat-option>\n          </mat-select>\n\n          <mat-error\n          *ngIf=\"blogAddEditForm.controls['parent_id'].touched && !blogAddEditForm.controls['parent_id'].valid && blogAddEditForm.controls['parent_id'].errors.required\">\n          Category cannot be blank</mat-error>\n        </mat-form-field>\n\n      \n\n        <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\">{{buttonText}}</button>\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>\n<!-- Blog Add or Edit Form End Here -->",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
                }] }
    ];
    /** @nocollapse */
    AddBlogComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_49__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["ActivatedRoute"] },
        { type: ApiService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MatDialog"] }
    ]; };
    AddBlogComponent.propDecorators = {
        listRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        serverUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        getDataEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        addEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        singleData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }]
    };
    return AddBlogComponent;
}());
var Dialogtest = /** @class */ (function () {
    function Dialogtest(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.is_error = data.message;
    }
    Dialogtest.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'dialogtest',
                    template: "<div class=\"modal\">\n        <h1 mat-dialog-title>Message</h1>\n        <div mat-dialog-content>\n          \n         <p>{{ data.message }}</p>\n        </div>\n        </div>"
                }] }
    ];
    /** @nocollapse */
    Dialogtest.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_50__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return Dialogtest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var appRoutes = [
    { path: 'add', component: AddBlogComponent },
    { path: 'edit/:id', component: AddBlogComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["NgModule"], args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_47__["RouterModule"].forRoot(appRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_47__["RouterModule"]]
                },] }
    ];
    return AppRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddeditBlogmanagementComponent = /** @class */ (function () {
    // -----------------------------------------------------------------------------------------
    function AddeditBlogmanagementComponent(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /**
         * ckeditor start here
         */
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_52__; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Description...',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_49__["FormControl"]();
        this.tags_array = [];
        this.testTag = [];
        this.flag = false;
        this.images_array = [];
        this.images_array_edit = [];
        this.file_array = [];
        this.file_array_edit = [];
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            blogcat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            blogcontent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            status: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            metatitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            metadesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_49__["Validators"].required],
            credentials: this.formBuilder.array([]),
            tags: ['',],
            blogs_image: [''],
            blogs_file: ['']
        });
    }
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "config", {
        // -----------------------------------------------------------------------
        // ----------------------------------------------Input Section-----------------------
        // Input receiving from add/edit app 
        set: 
        // -----------------------------------------------------------------------
        // ----------------------------------------------Input Section-----------------------
        // Input receiving from add/edit app 
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
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrl
         * @return {?}
         */
        function (serverUrl) {
            this.serverUrlData = (serverUrl) || '<no name set>';
            this.serverUrlData = serverUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "listRoute", {
        set: /**
         * @param {?} listval
         * @return {?}
         */
        function (listval) {
            this.listUrl = (listval) || '<no name set>';
            this.listUrl = listval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setaddEndpoint(_this.addEndpointData);
        }), 50);
        /**Observable end here**/
        if (!this.activatedRoute.snapshot.params.id)
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.addYoutubeVideo('', '', '');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getTagsCount();
        }), 50);
        if (this.activatedRoute.snapshot.params.id) {
            this.flag = true;
            this.params_id = this.activatedRoute.snapshot.params.id;
            this.buttonText = "Update";
            this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
            this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
            this.blogManagementForm.controls['blogcontent'].patchValue(this.setData.blogcontent);
            this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
            this.blogManagementForm.controls['status'].patchValue(this.setData.status);
            this.blogManagementForm.controls['metatitle'].patchValue(this.setData.metatitle);
            this.blogManagementForm.controls['metadesc'].patchValue(this.setData.metadesc);
            this.blogManagementForm.controls['blogs_image'].patchValue(this.setData.blogs_image);
            this.blogManagementForm.controls['blogs_file'].patchValue(this.setData.blogs_file);
            /*Image works*/
            for (var i = 0; i < this.setData.blogs_image.length; i++) {
                this.img_var = this.setData.blogs_image[i].basepath + this.setData.blogs_image[i].image;
                this.image_name = this.setData.blogs_image[i].name;
                this.image_type = this.setData.blogs_image[i].type;
                this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
                this.images_array.push({
                    "basepath": this.setData.blogs_image[i].basepath,
                    "image": this.setData.blogs_image[i].image,
                    "name": this.setData.blogs_image[i].name,
                    "type": this.setData.blogs_image[i].type
                });
            }
            /*File works*/
            for (var i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
                this.file_array_edit.push(this.setData.blogs_file[i2].name);
                this.file_array.push({
                    "basepath": this.setData.blogs_file[i2].basepath,
                    "file": this.setData.blogs_file[i2].file,
                    "name": this.setData.blogs_file[i2].name,
                    "type": this.setData.blogs_file[i2].type
                });
            }
            for (var vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    _this.tags_array.push(element);
                }));
        }
        // ------------------------------Autocomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_51__["map"])((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
        // ------------------------------------------------------------------------------------------
    };
    // ------------------------------------_Filter FUnction----------------------------------
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype._filter = 
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toLowerCase().indexOf(filterValue) === 0; }));
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "imageUpload", {
        // --------------------------------------------------------------------------------------------
        set: 
        // --------------------------------------------------------------------------------------------
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.imageConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "fileUpload", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.fileConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // ------------------------------------MODAL Function--------------------------------------------
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.openDialog = 
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '45%',
            height: '500px',
            data: { msg: x }
        });
        // this.sanitizer.bypassSecurityTrustResourceUrl
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.trackByFn = 
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.addYoutubeVideo = 
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    function (vid_url, vid_tit, vid_desc) {
        /** @type {?} */
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [vid_url],
            video_title: [vid_tit],
            video_description: [vid_desc]
        }));
    };
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.deleteCreds = 
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    };
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.getBlogCategory = 
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            result = response;
            _this.blogCategoryArray = result.res;
        }));
    };
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.getTagsCount = 
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                _this.options = result.res[0].tags;
        }));
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "singleData", {
        // ----------------------------------------------------------------------------------
        //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
        set: 
        // ----------------------------------------------------------------------------------
        //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
        /**
         * @param {?} editDatavals
         * @return {?}
         */
        function (editDatavals) {
            this.setData = editDatavals;
        },
        enumerable: true,
        configurable: true
    });
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.onSubmit = 
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            for (var loop in this.imageConfigData.files) {
                this.images_array =
                    this.images_array.concat({
                        "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[loop].name,
                        "type": this.imageConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_image = this.images_array;
        }
        else {
            this.blogManagementForm.value.blogs_image = false;
        }
        /*_____________________________________________________________________________________*/
        /*_________________________________________FILE UPLOADER_______________________________*/
        if (this.fileConfigData) {
            for (var loop in this.fileConfigData.files) {
                this.file_array =
                    this.file_array.concat({
                        "basepath": this.fileConfigData.files[loop].upload.data.basepath + '/' + this.fileConfigData.path + '/',
                        "file": this.fileConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.fileConfigData.files[loop].name,
                        "type": this.fileConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_file = this.file_array;
        }
        else {
            this.blogManagementForm.value.blogs_file = false;
        }
        // ___________________________________________________________________________________
        this.blogManagementForm.value.tags = this.tags_array;
        this.blogManagementForm.controls['blogcontent'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = parseInt("1");
            else
                this.blogManagementForm.value.status = parseInt("0");
            if (this.activatedRoute.snapshot.params.id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "blogcontent": this.blogManagementForm.value.blogcontent,
                        "priority": this.blogManagementForm.value.priority,
                        "status": this.blogManagementForm.value.status,
                        "metatitle": this.blogManagementForm.value.metatitle,
                        "metadesc": this.blogManagementForm.value.metadesc,
                        "tags": this.blogManagementForm.value.tags,
                        "credentials": this.blogManagementForm.value.credentials,
                        "blogs_image": this.blogManagementForm.value.blogs_image,
                        "blogs_file": this.blogManagementForm.value.blogs_file
                    },
                    "sourceobj": ["blogcat"]
                };
            }
            else {
                this.isSubmitted = true;
                /** @type {?} */
                var data;
                data = {
                    //add part
                    "source": "blogs",
                    "data": this.blogManagementForm.value,
                    "sourceobj": ["blogcat"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listUrl);
                }), 3000);
            }));
        }
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "onSignUpValidate", {
        // -----------------------------------------------------------------------------------
        get: 
        // -----------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        function () {
            return this.blogManagementForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.inputBlur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    };
    // -------------------------------Select Tags AutoComplete Field-----------------------
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.showval = 
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    };
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.preview_video = 
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    function (video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    };
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clearTags = 
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tags_array.splice(index, 1);
    };
    // -------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.openSnackBar = 
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    };
    // --------------------------------------Blogs Image clear-------------------------------
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clear_image = 
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.images_array.pop(this.setData.blogs_image[index]);
        this.images_array_edit.splice(index, 1);
    };
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clearFileTags = 
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.file_array.pop(this.setData.blogs_file[index]);
        this.file_array_edit.splice(index, 1);
    };
    AddeditBlogmanagementComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'lib-addedit-blogmanagement',
                    template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogtitle.errors}\"\n                        (blur)=\"inputBlur('blogtitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.blogtitle.errors && onSignUpValidate.blogtitle.errors.required\">\n                        Blog title cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl formControlName=\"blogcat\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcat.errors}\"\n                        (blur)=\"inputBlur('blogcat')\">\n                        <option *ngFor=\"let item of blogCategoryArray\" [value]=\"item._id\">{{ item.title}}</option>\n                    </select>\n                    <mat-error *ngIf=\"onSignUpValidate.blogcat.errors && onSignUpValidate.blogcat.errors.required\">Blog\n                        Category cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"blogcontent\"\n                    (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcontent.errors}\"></ckeditor>\n                <mat-error\n                    *ngIf=\"onSignUpValidate.blogcontent.errors && onSignUpValidate.blogcontent.errors.required && onSignUpValidate.blogcontent.touched\">\n                    Blog Content cannot be blank</mat-error><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.priority.errors}\"\n                        (blur)=\"inputBlur('priority')\">\n                    <mat-error *ngIf=\"onSignUpValidate.priority.errors && onSignUpValidate.priority.errors.required\">\n                        Priority cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metatitle.errors}\"\n                        (blur)=\"inputBlur('metatitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.metatitle.errors && onSignUpValidate.metatitle.errors.required\">\n                        Meta title cannot be blank</mat-error>\n                </mat-form-field>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metadesc.errors}\"\n                        (blur)=\"inputBlur('metadesc')\"></textarea>\n                    <mat-error *ngIf=\"onSignUpValidate.metadesc.errors && onSignUpValidate.metadesc.errors.required\">\n                        Meta description cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n               \n                <ng-container  *ngIf=\"flag==true\">\n                <!-- CARD VIEW  -->\n                <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                    <mat-card class=\"example-card\" >\n                        <img mat-card-image [src]=\"img.img_var\">\n                        <mat-card-title>{{ img.image_name }}</mat-card-title>\n                        <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                        <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n                    \n                    </mat-card>\n                </mat-card-content>\n                <!-- ---------  -->\n            </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n               \n                <mat-chip-list class=\"mat_chip\">                  \n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n               \n               \n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditBlogmanagementComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClient"] },
        { type: ApiService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_47__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_49__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MatSnackBar"] }
    ]; };
    AddeditBlogmanagementComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        serverUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        getDataEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        addEndpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        listRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        imageUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }],
        singleData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }]
    };
    return AddeditBlogmanagementComponent;
}());
// ------------------------------------Modal Component Works------------------------------
var Modal = /** @class */ (function () {
    function Modal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
                }] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_50__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return Modal;
}());
// ---------------------------------------------------------------------------------------
var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
    }
    YoutubeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    return YoutubeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YoutubeplayerComponent = /** @class */ (function () {
    function YoutubeplayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.id = (id) || '<no name set>';
            this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YoutubeplayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YoutubeplayerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'lib-youtubeplayer',
                    template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    YoutubeplayerComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_53__["DomSanitizer"] }
    ]; };
    YoutubeplayerComponent.propDecorators = {
        videoid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }]
    };
    return YoutubeplayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingBlogmanagementlibComponent = /** @class */ (function () {
    // ---------------------------------------------------------------------------------
    function ListingBlogmanagementlibComponent(apiService) {
        this.apiService = apiService;
        this.loader = true;
        // date_search_endpoint is use for All search endpoint
        this.date_search_endpoint = 'datalist';
        // this is a database All search collection or view name
        this.date_search_source = 'blogs_view';
    }
    Object.defineProperty(ListingBlogmanagementlibComponent.prototype, "config", {
        // ----------------------------------------------------------------------------
        // --------------------------Lib Listing Input from App------------------------
        set: 
        // ----------------------------------------------------------------------------
        // --------------------------Lib Listing Input from App------------------------
        /**
         * @param {?} receivedCategoryData
         * @return {?}
         */
        function (receivedCategoryData) {
            console.log("END", receivedCategoryData);
            this.blogListingConfig = {
                apiUrl: receivedCategoryData.apiBaseUrl,
                listEndPoint: "datalist",
                datasource: receivedCategoryData.datasource,
                tableName: receivedCategoryData.tableName,
                tableName2: receivedCategoryData.tableName2,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at",
                    "blogcontent", "metatitle", "metadesc", "images"],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "blogcategory": "Blog Category",
                    "blogcontent": "Blog Content", "priority": "Priority", "status": "Status",
                    "metatitle": "Meta Title", "metadesc": "Meta Description", "credentials": "Credentials",
                    "tags": "Number of tags", "publication": "Publication", "videos": "Number of videos"
                },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedCategoryData.updateEndpoint,
                editUrl: receivedCategoryData.editUrl,
                jwtToken: receivedCategoryData.jwtToken,
                deleteEndPoint: receivedCategoryData.deleteEndPoint,
                search_settings: {
                    textsearch: [{ label: "Search By Title", field: 'blogtitle' },
                        { label: "Search By Blog Category", field: 'blogcat' },
                        { label: "Search By Tags", field: 'tags' }],
                },
                /*Showing Image in the Modal*/
                pendingmodelapplicationarray_detail_datatype: [{
                        key: "images",
                        value: 'image',
                        fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/blogs/' // Image path 
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
    ListingBlogmanagementlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingBlogmanagementlibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Component"], args: [{
                    selector: 'lib-listing-blogmanagementlib',
                    template: "\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\" >\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListingConfig.datasource !=null && blogListingConfig.datasource.length > 0\"\n      [datasource]=\"blogListingConfig.datasource\" [skip]=\"blogListingConfig.listArray_skip\"\n      [modify_header_array]=\"blogListingConfig.listArray_modify_header\" [sourcedata]=\"blogListingConfig.tableName\"\n      [statusarr]=\"blogListingConfig.statusarr\" [jwttoken]=\"blogListingConfig.jwtToken\"\n      [apiurl]=\"blogListingConfig.apiUrl\" [editroute]=\"blogListingConfig.editUrl\"\n      [deleteendpoint]=\"blogListingConfig.deleteEndPoint\"\n      [search_settings]=\"blogListingConfig.search_settings\"\n      [date_search_source]=\"blogListingConfig.tableName2\"  \n      [date_search_endpoint]=\"blogListingConfig.listEndPoint\"\n      [detail_datatype]=\"blogListingConfig.pendingmodelapplicationarray_detail_datatype\" >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: ["body{display:none!important}"]
                }] }
    ];
    /** @nocollapse */
    ListingBlogmanagementlibComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    ListingBlogmanagementlibComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["Input"] }]
    };
    return ListingBlogmanagementlibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_54__["NgModule"], args: [{
                    declarations: [
                        BlogComponent,
                        AddBlogComponent,
                        Dialogtest,
                        AddeditBlogmanagementComponent,
                        Modal,
                        YoutubeplayerComponent,
                        YoutubeComponent,
                        ListingBlogmanagementlibComponent
                    ],
                    imports: [
                        DemoMaterialModule,
                        _angular_router__WEBPACK_IMPORTED_MODULE_47__["RouterModule"],
                        AppRoutingModule,
                        listing_angular7__WEBPACK_IMPORTED_MODULE_44__["ListingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_49__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_49__["ReactiveFormsModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_53__["BrowserModule"],
                        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_45__["CKEditorModule"],
                        listing_angular7__WEBPACK_IMPORTED_MODULE_44__["ListingModule"],
                        file_upload__WEBPACK_IMPORTED_MODULE_43__["FileUploadModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_46__["CommonModule"]
                    ],
                    exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                    providers: [ApiService],
                    entryComponents: [Dialogtest, Modal, YoutubeComponent],
                },] }
    ];
    return BlogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=blog.js.map

/***/ }),

/***/ "../../dist/file-upload/fesm5/file-upload.js":
/*!**************************************************************************!*\
  !*** /var/angular/angularssr-base/dist/file-upload/fesm5/file-upload.js ***!
  \**************************************************************************/
/*! exports provided: FileUploadService, FileUploadComponent, FileUploadModule, ɵe, ɵb, ɵc, ɵd, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AlertMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DialogBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return PreviewFilesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DragDropDirective; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "../../node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "../../node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var listing_angular7__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! listing-angular7 */ "../../node_modules/listing-angular7/fesm5/listing-angular7.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

















































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadService = /** @class */ (function () {
    function FileUploadService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = "http://3.15.236.141:5005/uploads";
    }
    /* Upload Function */
    /* Upload Function */
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    FileUploadService.prototype.upload = /* Upload Function */
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    function (uploadURL, data) {
        /** @type {?} */
        var formData = new FormData();
        formData.append('file', data.file);
        formData.append('type', data.type);
        formData.append('path', data.path);
        formData.append('prefix', data.prefix);
        return this.httpClient.post(uploadURL, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpEventType"].UploadProgress:
                    /** @type {?} */
                    var percentage = Math.round(100 * event.loaded / event.total);
                    if (percentage >= 0 && percentage <= 100) {
                        return { status: 'progress', data: { totalData: event.total, loadedData: event.loaded, percentage: percentage } };
                    }
                    else {
                        return { status: 'complete', data: null };
                    }
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpEventType"].Response:
                    if (event.body.status == 'success') {
                        return { status: 'complete', data: event.body };
                    }
                    else {
                        return { status: 'error', data: 'An error occord.' };
                    }
                default:
                    return { status: 'waiting', data: '' };
                    return "Unhandled event: " + event.type;
            }
        })));
    };
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    FileUploadService.prototype.uploadBase64 = /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    function (uploadURL, data) {
        /** @type {?} */
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(uploadURL, data, httpOptions);
    };
    FileUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FileUploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClient"] }
    ]; };
    /** @nocollapse */ FileUploadService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_47__["defineInjectable"])({ factory: function FileUploadService_Factory() { return new FileUploadService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_47__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClient"])); }, token: FileUploadService, providedIn: "root" });
    return FileUploadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DialogBoxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Component"], args: [{
                    selector: 'lib-dialog-box',
                    template: "<h1 mat-dialog-title>Are you sure ??</h1>\n<div mat-dialog-actions>\n  <button mat-button type=\"button\" [mat-dialog-close]=\"false\" (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button type=\"button\" [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DialogBoxComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return DialogBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PreviewFilesComponent = /** @class */ (function () {
    function PreviewFilesComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    PreviewFilesComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    PreviewFilesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('Preview component: ', this.data);
    };
    PreviewFilesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Component"], args: [{
                    selector: 'lib-preview-files',
                    template: "<h2 mat-dialog-title>File Preview</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <img mat-card-image [src]=\"this.data.imgURL\" *ngIf=\"this.data.imgURL\">\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n</mat-dialog-actions>",
                    styles: ["img{max-width:100%;max-height:64vh}"]
                }] }
    ];
    /** @nocollapse */
    PreviewFilesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return PreviewFilesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(formBuilder, fileUploadService, ActivatedRoute$$1, router, _snackBar, dialog) {
        this.formBuilder = formBuilder;
        this.fileUploadService = fileUploadService;
        this.ActivatedRoute = ActivatedRoute$$1;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formData = new FormData();
        this.files = [];
        this.filesProcess = [];
        this.totalFile = 0;
        this.loading = false;
    }
    Object.defineProperty(FileUploadComponent.prototype, "config", {
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
    FileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /* Select File Proccess */
    /* Select File Proccess */
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.selectFiles = /* Select File Proccess */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.loading = true;
        for (var index = 0; index < event.length; index++) {
            /** @type {?} */
            var count = this.files.length;
            /** @type {?} */
            var element = event[index];
            /* Checking Validation */
            /** @type {?} */
            var validate = this.checkingValidation(element);
            if (validate.status) {
                element.valid = { status: true };
                element.upload = { status: 'selected' };
                element.viewUrl = 'https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif';
                this.files.push(element);
                this.viewFiles(count, element);
            }
            else {
                element.valid = { status: false, message: validate.message };
                element.upload = { status: 'selected' };
                element.viewUrl = null;
                /** @type {?} */
                var format = element.type.split("/");
                element.viewText = format[1];
                this.files.push(element);
            }
        }
    };
    /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    FileUploadComponent.prototype.viewFiles = /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    function (count, element) {
        var _this = this;
        /** @type {?} */
        var format = element.type.split("/");
        if (format[0] == 'image') {
            /** @type {?} */
            var reader = new FileReader();
            /** @type {?} */
            var imagePath = this.files[count];
            reader.readAsDataURL(this.files[count]);
            reader.onload = (/**
             * @param {?} _event
             * @return {?}
             */
            function (_event) {
                /** @type {?} */
                var imgURL = reader.result;
                _this.files[count].viewUrl = imgURL;
            });
        }
        else {
            this.files[count].viewUrl = null;
            this.files[count].viewText = format[1];
        }
    };
    /* Checking Validation */
    /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    FileUploadComponent.prototype.checkingValidation = /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var valid = { status: true, message: null };
        /* Checking File Format */
        /** @type {?} */
        var format = element.type.split("/");
        /** @type {?} */
        var check = this.configData.format.includes(format[1]);
        if (check == false) {
            valid.status = false;
            valid.message = format[1].toUpperCase() + " format not supported.";
            this.openSnackBar(format[1].toUpperCase() + " format not supported.", '');
            return valid;
        }
        /* Checking File size */
        if (element.size / 1000 > this.configData.size) {
            valid.status = false;
            valid.message = "File size too large. Maximum file size limit: " + this.configData.size + " KB.";
            this.openSnackBar("File size too large. Maximum file size limit: " + this.configData.size + " KB.", '');
            return valid;
        }
        if (valid.status == true) {
            return valid;
        }
    };
    /* File Upload Process */
    /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    FileUploadComponent.prototype.uploadAll = /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    function (getIndex) {
        if (getIndex === void 0) { getIndex = null; }
        for (var index = 0; index < this.files.length; index++) {
            if (this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
                this.uploading(index);
            }
        }
    };
    /* Upload */
    /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.uploading = /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var postData = {
            file: this.files[index],
            type: this.configData.type,
            path: this.configData.path,
            prefix: this.configData.prefix,
            uploadType: this.configData.uploadType
        };
        /** @type {?} */
        var url = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
        this.fileUploadService.upload(url, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = response;
            switch (result.status) {
                case 'complete':
                    _this.files[index].upload = result;
                    _this.configData.files = _this.files;
                    _this.openSnackBar('Successfully Uploaded !!', 'Undo');
                    break;
                case 'error':
                    _this.files[index].upload = result.data;
                    _this.openSnackBar(result.data, '');
                    break;
                default:
                    _this.files[index].upload = result;
                    break;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.files[index] = { status: 'error' };
            _this.openSnackBar('An error occurred !!', 'Retry');
        }));
    };
    /* Remove Files */
    /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    FileUploadComponent.prototype.removeFiles = /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (index === void 0) { index = null; }
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.files.splice(index, 1);
                _this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    };
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    FileUploadComponent.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    /* Dialog Box */
    /* Dialog Box */
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.openDialog = /* Dialog Box */
    /**
     * @return {?}
     */
    function () {
        this.dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '250px',
            data: { message: "Message" }
        });
    };
    /* Delete all selected files */
    /* Delete all selected files */
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.deleteAll = /* Delete all selected files */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.files.splice(0, _this.files.length);
                _this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    };
    /* Preview Files */
    /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.previewFiles = /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var mimeType = this.files[index].type;
        if (mimeType.match(/image\/*/) == null) {
            this.openSnackBar('Preview not supported.', '');
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var imagePath = this.files[index];
        reader.readAsDataURL(this.files[index]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        function (_event) {
            /** @type {?} */
            var imgURL = reader.result;
            /** @type {?} */
            var dialogRef = _this.dialog.open(PreviewFilesComponent, {
                data: { imgURL: imgURL }
            });
        });
    };
    FileUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Component"], args: [{
                    selector: 'lib-file-upload',
                    template: "<!-- File Upload -->\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\" libDragDrop (onFileDropped)=\"selectFiles($event)\">\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file.valid.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file.upload.status == 'progress'\"\n                    value=\"{{ file.upload.data.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file.upload.status == 'waiting'\"></mat-progress-bar>\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file.valid.status == true && file.upload.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file.upload.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n            </mat-card-actions>\n        </span>\n    </mat-card>\n</div>",
                    styles: [".uploadfilecontainer{background-repeat:no-repeat;background-size:100px;background-position:center;height:200px;width:80%;margin:20px auto;border:2px dashed #1c8adb;border-radius:10px;text-align:center;display:flex;justify-content:center;align-items:center}.uploadfilecontainer:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.button-group{background-repeat:no-repeat;background-size:100px;background-position:center;height:40px;width:80%;margin:20px auto;border-radius:10px}.error.mat-card-subtitle{color:#a00;text-align:left}.example-card{margin:6px auto auto;max-width:100%}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.progress-bar{margin-top:24px}.file-div{background-color:#dedddc;margin-top:6px}.othersFilePreview{background-color:#8a2be2;height:100%;width:100%;text-align:center;justify-content:center;align-items:center;display:flex}.fileDescription{text-align:left}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{position:relative;z-index:9;flex:1 1 28.33%;margin:10px!important;display:flex;flex-wrap:wrap}.viewUrlwrapper{height:160px;width:100%;overflow:hidden;position:relative}.viewUrlwrapper img{max-width:100%;-o-object-fit:cover;object-fit:cover;margin:0 auto;z-index:99;position:relative;max-width:100%;width:initial;display:block;margin-top:-46px!important}.viewUrlcontent{display:block;justify-content:center;align-items:stretch;flex-wrap:wrap;flex:1 1 100%}.viewUrlcontent .mat-card-header{display:flex;flex-direction:row;flex:1 1 100%;justify-content:center;text-align:center;flex-wrap:wrap}.viewUrlcontent .mat-progress-bar{margin-bottom:5px}.viewUrlcontent .mat-card-header .mat-card-header-text{margin:10px;width:100%}.viewUrlcontent .mat-card-header .mat-card-header-text .mat-card-title{width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:19px;max-height:40px;-webkit-line-clamp:2}.mat-typography .mat-card-image{width:inherit!important;margin:0!important}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: FileUploadService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] }
    ]; };
    FileUploadComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Input"] }]
    };
    return FileUploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["NgModule"], args: [{
                    exports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
                    ]
                },] }
    ];
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_47__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragOver = 
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    //Dragleave listener
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragLeave = 
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    };
    //Drop listener
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.ondrop = 
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    DragDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Directive"], args: [{
                    selector: '[libDragDrop]'
                },] }
    ];
    DragDropDirective.propDecorators = {
        onFileDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Output"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["HostBinding"], args: ['style.background-color',] }],
        opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["HostBinding"], args: ['style.opacity',] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["HostListener"], args: ['dragleave', ['$event'],] }],
        ondrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["HostListener"], args: ['drop', ['$event'],] }]
    };
    return DragDropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertMessageComponent = /** @class */ (function () {
    function AlertMessageComponent() {
    }
    /**
     * @return {?}
     */
    AlertMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AlertMessageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["Component"], args: [{
                    selector: 'lib-alert-message',
                    template: "<span class=\"example-pizza-party\">\n  An error occurred.\n</span>",
                    styles: [".example-pizza-party{color:#ff69b4}"]
                }] }
    ];
    /** @nocollapse */
    AlertMessageComponent.ctorParameters = function () { return []; };
    return AlertMessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_47__["NgModule"], args: [{
                    declarations: [
                        FileUploadComponent,
                        DragDropDirective,
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        MaterialModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
                        listing_angular7__WEBPACK_IMPORTED_MODULE_46__["ListingModule"],
                    ],
                    providers: [],
                    exports: [FileUploadComponent],
                    entryComponents: [
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ]
                },] }
    ];
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=file-upload.js.map

/***/ }),

/***/ "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!*****************************************************************************!*\
  !*** /var/angular/angularssr-base/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../node_modules/moment/locale/af.js",
	"./af.js": "../../node_modules/moment/locale/af.js",
	"./ar": "../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../node_modules/moment/locale/ar.js",
	"./az": "../../node_modules/moment/locale/az.js",
	"./az.js": "../../node_modules/moment/locale/az.js",
	"./be": "../../node_modules/moment/locale/be.js",
	"./be.js": "../../node_modules/moment/locale/be.js",
	"./bg": "../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../node_modules/moment/locale/bg.js",
	"./bm": "../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../node_modules/moment/locale/bm.js",
	"./bn": "../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../node_modules/moment/locale/bn.js",
	"./bo": "../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../node_modules/moment/locale/bo.js",
	"./br": "../../node_modules/moment/locale/br.js",
	"./br.js": "../../node_modules/moment/locale/br.js",
	"./bs": "../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../node_modules/moment/locale/bs.js",
	"./ca": "../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../node_modules/moment/locale/ca.js",
	"./cs": "../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../node_modules/moment/locale/cs.js",
	"./cv": "../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../node_modules/moment/locale/cv.js",
	"./cy": "../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../node_modules/moment/locale/cy.js",
	"./da": "../../node_modules/moment/locale/da.js",
	"./da.js": "../../node_modules/moment/locale/da.js",
	"./de": "../../node_modules/moment/locale/de.js",
	"./de-at": "../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../node_modules/moment/locale/de.js",
	"./dv": "../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../node_modules/moment/locale/dv.js",
	"./el": "../../node_modules/moment/locale/el.js",
	"./el.js": "../../node_modules/moment/locale/el.js",
	"./en-SG": "../../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../../node_modules/moment/locale/en-SG.js",
	"./en-au": "../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../node_modules/moment/locale/en-il.js",
	"./en-nz": "../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
	"./eo": "../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../node_modules/moment/locale/eo.js",
	"./es": "../../node_modules/moment/locale/es.js",
	"./es-do": "../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../node_modules/moment/locale/es.js",
	"./et": "../../node_modules/moment/locale/et.js",
	"./et.js": "../../node_modules/moment/locale/et.js",
	"./eu": "../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../node_modules/moment/locale/eu.js",
	"./fa": "../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../node_modules/moment/locale/fa.js",
	"./fi": "../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../node_modules/moment/locale/fi.js",
	"./fo": "../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../node_modules/moment/locale/fo.js",
	"./fr": "../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../node_modules/moment/locale/fr.js",
	"./fy": "../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../node_modules/moment/locale/fy.js",
	"./ga": "../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../node_modules/moment/locale/ga.js",
	"./gd": "../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../node_modules/moment/locale/gd.js",
	"./gl": "../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../node_modules/moment/locale/gl.js",
	"./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../node_modules/moment/locale/gu.js",
	"./he": "../../node_modules/moment/locale/he.js",
	"./he.js": "../../node_modules/moment/locale/he.js",
	"./hi": "../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../node_modules/moment/locale/hi.js",
	"./hr": "../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../node_modules/moment/locale/hr.js",
	"./hu": "../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
	"./id": "../../node_modules/moment/locale/id.js",
	"./id.js": "../../node_modules/moment/locale/id.js",
	"./is": "../../node_modules/moment/locale/is.js",
	"./is.js": "../../node_modules/moment/locale/is.js",
	"./it": "../../node_modules/moment/locale/it.js",
	"./it-ch": "../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../node_modules/moment/locale/it.js",
	"./ja": "../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../node_modules/moment/locale/ja.js",
	"./jv": "../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../node_modules/moment/locale/jv.js",
	"./ka": "../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../node_modules/moment/locale/ka.js",
	"./kk": "../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../node_modules/moment/locale/kk.js",
	"./km": "../../node_modules/moment/locale/km.js",
	"./km.js": "../../node_modules/moment/locale/km.js",
	"./kn": "../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../node_modules/moment/locale/kn.js",
	"./ko": "../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../node_modules/moment/locale/ko.js",
	"./ku": "../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../node_modules/moment/locale/ku.js",
	"./ky": "../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../node_modules/moment/locale/ky.js",
	"./lb": "../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../node_modules/moment/locale/lb.js",
	"./lo": "../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../node_modules/moment/locale/lo.js",
	"./lt": "../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../node_modules/moment/locale/lt.js",
	"./lv": "../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../node_modules/moment/locale/lv.js",
	"./me": "../../node_modules/moment/locale/me.js",
	"./me.js": "../../node_modules/moment/locale/me.js",
	"./mi": "../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../node_modules/moment/locale/mi.js",
	"./mk": "../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../node_modules/moment/locale/mk.js",
	"./ml": "../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../node_modules/moment/locale/ml.js",
	"./mn": "../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../node_modules/moment/locale/mn.js",
	"./mr": "../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../node_modules/moment/locale/mr.js",
	"./ms": "../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../node_modules/moment/locale/ms.js",
	"./mt": "../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../node_modules/moment/locale/mt.js",
	"./my": "../../node_modules/moment/locale/my.js",
	"./my.js": "../../node_modules/moment/locale/my.js",
	"./nb": "../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../node_modules/moment/locale/nb.js",
	"./ne": "../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../node_modules/moment/locale/ne.js",
	"./nl": "../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../node_modules/moment/locale/nl.js",
	"./nn": "../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../node_modules/moment/locale/nn.js",
	"./pa-in": "../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../node_modules/moment/locale/pl.js",
	"./pt": "../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../node_modules/moment/locale/pt.js",
	"./ro": "../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../node_modules/moment/locale/ro.js",
	"./ru": "../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../node_modules/moment/locale/ru.js",
	"./sd": "../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../node_modules/moment/locale/sd.js",
	"./se": "../../node_modules/moment/locale/se.js",
	"./se.js": "../../node_modules/moment/locale/se.js",
	"./si": "../../node_modules/moment/locale/si.js",
	"./si.js": "../../node_modules/moment/locale/si.js",
	"./sk": "../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../node_modules/moment/locale/sk.js",
	"./sl": "../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../node_modules/moment/locale/sl.js",
	"./sq": "../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../node_modules/moment/locale/sq.js",
	"./sr": "../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../node_modules/moment/locale/sr.js",
	"./ss": "../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../node_modules/moment/locale/ss.js",
	"./sv": "../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../node_modules/moment/locale/sv.js",
	"./sw": "../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../node_modules/moment/locale/sw.js",
	"./ta": "../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../node_modules/moment/locale/ta.js",
	"./te": "../../node_modules/moment/locale/te.js",
	"./te.js": "../../node_modules/moment/locale/te.js",
	"./tet": "../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../node_modules/moment/locale/tet.js",
	"./tg": "../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../node_modules/moment/locale/tg.js",
	"./th": "../../node_modules/moment/locale/th.js",
	"./th.js": "../../node_modules/moment/locale/th.js",
	"./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../node_modules/moment/locale/tlh.js",
	"./tr": "../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../node_modules/moment/locale/tr.js",
	"./tzl": "../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../node_modules/moment/locale/uk.js",
	"./ur": "../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../node_modules/moment/locale/ur.js",
	"./uz": "../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../node_modules/moment/locale/uz.js",
	"./vi": "../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CbG9nYXBwL3NyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<lib-add-blog\n[serverUrl]=\"server\"\n[addEndpoint]=\"addUrl\" \n[getDataEndpoint]=\"getDataUrl\"\n[listRoute]=\"listURL\" \n[singleData]=\"editdata\"\n></lib-add-blog>\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var AddComponent = /** @class */ (function () {
    function AddComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.server = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
        this.addUrl = 'addorupdatedata';
        this.getDataUrl = 'datalist';
        this.editdata = [];
        this.listURL = "blog/list";
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute.snapshot.params.id) {
            this.activatedRoute.data.forEach(function (data) {
                var result;
                result = data.results.res;
                _this.editdata = result;
                console.log("++", _this.editdata);
            });
        }
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/addedit-blogmanagement/addedit-blogmanagement.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CbG9nYXBwL3NyYy9hcHAvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/addedit-blogmanagement/addedit-blogmanagement.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<lib-addedit-blogmanagement \n[serverUrl]=\"server\"\n[addEndpoint]=\"addUrl\" \n[getDataEndpoint]=\"getDataUrl\"\nlistRoute=\"blog-management/list\"\n[singleData]=\"editdata\" \n[imageUpload]=\"configData\"\n[fileUpload]=\"configFileData\"\n\n></lib-addedit-blogmanagement>"

/***/ }),

/***/ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/addedit-blogmanagement/addedit-blogmanagement.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddeditBlogmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditBlogmanagementComponent", function() { return AddeditBlogmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var AddeditBlogmanagementComponent = /** @class */ (function () {
    function AddeditBlogmanagementComponent(cookieService, activatedRoute) {
        this.cookieService = cookieService;
        this.activatedRoute = activatedRoute;
        this.server = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
        this.addUrl = 'addorupdatedata';
        this.getDataUrl = 'datalist';
        this.editdata = [];
        this.configData = {
            baseUrl: "http://3.15.236.141:5005/",
            endpoint: "uploads",
            size: "51200",
            format: ["jpg", "jpeg", "png"],
            type: "blogs-image",
            path: "blogs",
            prefix: "blogs-image_"
        };
        this.configFileData = {
            baseUrl: "http://3.15.236.141:5005/",
            endpoint: "uploads",
            size: "51200",
            format: ["pdf", "doc", "docx", "docxx"],
            type: "blogs-file",
            path: "blogs",
            prefix: "blogs-file"
        };
    }
    AddeditBlogmanagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute.snapshot.params.id) {
            this.activatedRoute.data.forEach(function (data) {
                var result;
                result = data.results.res[0];
                _this.editdata = result;
            });
        }
    };
    AddeditBlogmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addedit-blogmanagement',
            template: __webpack_require__(/*! ./addedit-blogmanagement.component.html */ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.html"),
            styles: [__webpack_require__(/*! ./addedit-blogmanagement.component.css */ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddeditBlogmanagementComponent);
    return AddeditBlogmanagementComponent;
}());



/***/ }),

/***/ "./src/app/app-api.service.ts":
/*!************************************!*\
  !*** ./src/app/app-api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




// for setting observables to get serverurl and endpointurl from app


var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService) {
        var _this = this;
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        this.fileservername = [];
        this.serverUrl = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
        this.subjectForServerUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subjectForaddEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subjectForuploadEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); //added by souresh
        this.subjectForupdateEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subjectFordeletesingleEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subjectForupdatestatusSingleEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subjectForGetdataEndpointUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subscriptionServer = this.getServerUrl().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.serverUrl = result;
            }
            else {
                _this.serverUrl = null;
            }
        });
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.addendpointUrl = result;
            }
            else {
                _this.addendpointUrl = null;
            }
        });
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.uploadEndpointUrl = result;
            }
            else {
                _this.uploadEndpointUrl = null;
            }
        });
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.updateendpointUrl = result;
            }
            else {
                _this.updateendpointUrl = null;
            }
        });
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.deletesingle_endpointUrl = result;
            }
            else {
                _this.deletesingle_endpointUrl = null;
            }
        });
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.updatestatus_single_endpointUrl = result;
            }
            else {
                _this.updatestatus_single_endpointUrl = null;
            }
        });
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(function (message) {
            var result;
            result = message;
            if (result != null) {
                _this.getdata_endpointUrl = result;
            }
            else {
                _this.getdata_endpointUrl = null;
            }
        });
    }
    ApiService.prototype.setServerUrl = function (value) {
        this.subjectForServerUrl.next(value);
    };
    ApiService.prototype.clearServerUrl = function () {
        this.subjectForServerUrl.next(null);
    };
    ApiService.prototype.getServerUrl = function () {
        return this.subjectForServerUrl.asObservable();
    };
    ApiService.prototype.setaddEndpoint = function (value) {
        this.subjectForaddEndpointUrl.next(value);
    };
    ApiService.prototype.clearaddEndpoint = function () {
        this.subjectForaddEndpointUrl.next(null);
    };
    ApiService.prototype.getaddEndpoint = function () {
        return this.subjectForaddEndpointUrl.asObservable();
    };
    /*****added by souresh******/
    ApiService.prototype.setuploadEndpont = function (value) {
        this.subjectForuploadEndpointUrl.next(value);
    };
    ApiService.prototype.clearuploadEndpoint = function () {
        this.subjectForuploadEndpointUrl.next(null);
    };
    ApiService.prototype.getuploadEndpoint = function () {
        return this.subjectForuploadEndpointUrl.asObservable();
    };
    /********souresh end here********/
    ApiService.prototype.setupdateEndpoint = function (value) {
        this.subjectForupdateEndpointUrl.next(value);
    };
    ApiService.prototype.clearupdateEndpoint = function () {
        this.subjectForupdateEndpointUrl.next(null);
    };
    ApiService.prototype.getupdateEndpoint = function () {
        return this.subjectForupdateEndpointUrl.asObservable();
    };
    ApiService.prototype.setdeletesingleEndpoint = function (value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    };
    ApiService.prototype.cleardeletesingleEndpoint = function () {
        this.subjectFordeletesingleEndpointUrl.next(null);
    };
    ApiService.prototype.getdeletesingleEndpoint = function () {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    };
    ApiService.prototype.setupdatestatus_singleEndpoint = function (value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    };
    ApiService.prototype.clearupdatestatus_singleEndpoint = function () {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    };
    ApiService.prototype.getupdatestatus_singleEndpoint = function () {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    };
    ApiService.prototype.setgetdataEndpoint = function (value) {
        this.subjectForGetdataEndpointUrl.next(value);
    };
    ApiService.prototype.cleargetdataEndpoint = function () {
        this.subjectForGetdataEndpointUrl.next(null);
    };
    ApiService.prototype.getdataEndpoint = function () {
        return this.subjectForGetdataEndpointUrl.asObservable();
    };
    ApiService.prototype.isTokenExpired = function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    ApiService.prototype.addData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    /*******added by souresh************/
    ApiService.prototype.uploadFile = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    /*******souresh end here********/
    ApiService.prototype.UpdateData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.deleteSingleData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.deleteMultipleData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.UpdateStatusForSingleData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.UpdateStatusForMultipleData = function (requestdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.CustomRequest = function (requestdata, endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _bloglist_bloglist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bloglist/bloglist.component */ "./src/app/bloglist/bloglist.component.ts");
/* harmony import */ var _resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve.service */ "./src/app/resolve.service.ts");
/* harmony import */ var _addedit_blogmanagement_addedit_blogmanagement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addedit-blogmanagement/addedit-blogmanagement.component */ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.ts");
/* harmony import */ var _listing_blogmanagement_listing_blogmanagement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listing-blogmanagement/listing-blogmanagement.component */ "./src/app/listing-blogmanagement/listing-blogmanagement.component.ts");








/* Routes path */
var appRoutes = [
    /* Blog Management Routes Start */
    { path: 'blog', component: _bloglist_bloglist_component__WEBPACK_IMPORTED_MODULE_4__["BloglistComponent"] },
    {
        path: 'blog/list', component: _bloglist_bloglist_component__WEBPACK_IMPORTED_MODULE_4__["BloglistComponent"], resolve: { results: _resolve_service__WEBPACK_IMPORTED_MODULE_5__["ResolveService"] },
        data: { requestcondition: { source: 'blog_category_view', condition: {} }, endpoint: 'datalist' }
    },
    { path: 'blog/add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] },
    {
        path: 'blog/edit/:id', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], resolve: { results: _resolve_service__WEBPACK_IMPORTED_MODULE_5__["ResolveService"] },
        data: { requestcondition: { source: 'blog_category', condition: { key_id: '' } }, endpoint: 'datalist' }
    },
    { path: 'blog-management/add', component: _addedit_blogmanagement_addedit_blogmanagement_component__WEBPACK_IMPORTED_MODULE_6__["AddeditBlogmanagementComponent"] },
    {
        path: 'blog-management/edit/:id', component: _addedit_blogmanagement_addedit_blogmanagement_component__WEBPACK_IMPORTED_MODULE_6__["AddeditBlogmanagementComponent"],
        resolve: { results: _resolve_service__WEBPACK_IMPORTED_MODULE_5__["ResolveService"] },
        data: { requestcondition: { source: 'blogs', condition: { key_id: '' } }, endpoint: 'datalist' }
    },
    {
        path: 'blog-management/list', component: _listing_blogmanagement_listing_blogmanagement_component__WEBPACK_IMPORTED_MODULE_7__["ListingBlogmanagementComponent"],
        resolve: { results: _resolve_service__WEBPACK_IMPORTED_MODULE_5__["ResolveService"] },
        data: { requestcondition: { source: 'blogs_view', condition: { key_id: '' } }, endpoint: 'datalist' }
    }
    /* Blog Management Routes End */
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CbG9nYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet>\n\n  \n</router-outlet> \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Blogapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! blog */ "../../dist/blog/fesm5/blog.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _bloglist_bloglist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bloglist/bloglist.component */ "./src/app/bloglist/bloglist.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _addedit_blogmanagement_addedit_blogmanagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addedit-blogmanagement/addedit-blogmanagement.component */ "./src/app/addedit-blogmanagement/addedit-blogmanagement.component.ts");
/* harmony import */ var _listing_blogmanagement_listing_blogmanagement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listing-blogmanagement/listing-blogmanagement.component */ "./src/app/listing-blogmanagement/listing-blogmanagement.component.ts");













//import {ResolveService} from './resolve.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                _bloglist_bloglist_component__WEBPACK_IMPORTED_MODULE_8__["BloglistComponent"],
                _addedit_blogmanagement_addedit_blogmanagement_component__WEBPACK_IMPORTED_MODULE_11__["AddeditBlogmanagementComponent"],
                _listing_blogmanagement_listing_blogmanagement_component__WEBPACK_IMPORTED_MODULE_12__["ListingBlogmanagementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                blog__WEBPACK_IMPORTED_MODULE_5__["BlogModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"]
                //ResolveService
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bloglist/bloglist.component.css":
/*!*************************************************!*\
  !*** ./src/app/bloglist/bloglist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#3f51b5}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ff4081}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}.example-card {\n    max-width: 400px;\n  }.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n    border: 2px solid rgb(224, 218, 218);\n  }.headerSpan{\n    text-align: center;\n    display: block;\n    margin: auto;\n  }.darkToolbar{\n    background-color: black;\n  }.gridListWrapper{\n    padding: 30px;\n  }.buttonsetToolbar{\n    background-color: #f4f3f8;\n    text-align: center;\n    display: block;\n    padding-top: 10px;\n  }.singleButton{\n    margin: 5px;\n    display: inline-block;\n  }.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }.example-full-width {\n    width: 100%;\n  }td {\n    padding-right: 8px;\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwicHJvamVjdHMvQmxvZ2FwcC9zcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGVBQWUsQ0FBQyxjQUFjLENBQUMsOENBQThDLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLHlDQUF5QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMscURBQXFELENBQUMsZUFBZSxDQUFDLDZDQUE2QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLHdEQUF3RCxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsdURBQXVELENBQUMsZUFBZSxDQUFDLDZCQUE2QixxREFBcUQsQ0FBQyxzQ0FBc0MscURBQXFELENBQUMsNENBQTRDLGVBQWUsQ0FBQyx3QkFBd0IscURBQXFELENBQUMsOENBQThDLHVEQUF1RCxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIscURBQXFELENBQUMsNEdBQTRHLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLDhDQUE4QyxDQUFDLFVBQVUsOENBQThDLENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUNBQWlDLGNBQWMsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsOENBQThDLENBQUMseUNBQXlDLGdCQUFnQixDQUFDLFVBQVUsY0FBYyxDQUFDLGVBQWUsQ0FBQywrRUFBK0UsY0FBYyxDQUFDLFdBQVcsOENBQThDLENBQUMsaUJBQWlCLGNBQWMsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLG1CQUFtQixjQUFjLENBQUMscURBQXFELGNBQWMsQ0FBQyxlQUFlLENBQUMsOEJBQThCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLHFEQUFxRCxDQUFDLDRCQUE0Qiw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDZCQUE2QixxREFBcUQsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDhDQUE4QyxDQUFDLHdCQUF3Qix3QkFBd0IsQ0FBQyxrRUFBa0UsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGdGQUFnRixZQUFZLENBQUMsV0FBVyxDQUFDLG9HQUFvRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQyxrTEFBa0wsMkNBQTJDLENBQUMsZ0JBQWdCLENBQUMseUhBQXlILDJDQUEyQyxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixhQUFhLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLGFBQWEsQ0FBQywwQkFBMEIsZ0JBQWdCLENBQUMsa0NBQWtDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQywwREFBMEQscUJBQXFCLENBQUMsd0RBQXdELGlCQUFpQixDQUFDLG9QQUFvUCxpRkFBaUYsQ0FBQywrQ0FBK0MsQ0FBQyxnQkFBZ0IsQ0FBQyxpS0FBaUssbUZBQW1GLENBQUMsK0NBQStDLENBQUMsZ0JBQWdCLENBQUMsMEpBQTBKLG1GQUFtRixDQUFDLCtDQUErQyxDQUFDLGdCQUFnQixDQUFDLHdEQUF3RCxhQUFhLENBQUMsNERBQTRELGFBQWEsQ0FBQyxvRUFBb0UsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsYUFBYSxvUEFBb1AsMkNBQTJDLENBQUMsaUtBQWlLLDJDQUEyQyxDQUFDLDBKQUEwSiwwQ0FBMEMsQ0FBQyxDQUFDLHNEQUFzRCx1QkFBdUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGdQQUFnUCwwQ0FBMEMsQ0FBQyxnQkFBZ0IsQ0FBQyx3SkFBd0osMENBQTBDLENBQUMsZ0JBQWdCLENBQUMseURBQXlELG1CQUFtQixDQUFDLHlEQUF5RCxhQUFhLENBQUMsaUJBQWlCLENBQUMsc1BBQXNQLDJDQUEyQyxDQUFDLGdCQUFnQixDQUFDLDJKQUEySiwyQ0FBMkMsQ0FBQyxnQkFBZ0IsQ0FBQyw0Q0FBNEMsY0FBYyxDQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhGQUE4RixjQUFjLENBQUMsd0JBQXdCLG1CQUFtQixDQUFDLGVBQWUsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw0REFBNEQsOENBQThDLENBQUMsY0FBYyxDQUFDLGtCQUFrQiw4Q0FBOEMsQ0FBQyxZQUFZLDhDQUE4QyxDQUFDLG9CQUFvQixjQUFjLENBQUMsMEJBQTBCLDhDQUE4QyxDQUFDLDZCQUE2Qiw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDhDQUE4Qyw4Q0FBOEMsQ0FBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHNCQUFzQixjQUFjLENBQUMseUJBQXlCLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSw4Q0FBOEMsQ0FBQyw2QkFBNkIsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw2R0FBNkcscURBQXFELENBQUMsUUFBUSxDQUFDLGFBQWEsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLDhDQUE4QyxDQUFDLGlCQUFpQiw4Q0FBOEMsQ0FBQyw4QkFBOEIsY0FBYyxDQUFDLHdDQUF3QyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLHVEQUF1RCxjQUFjLENBQUMsZ0NBQWdDLGNBQWMsQ0FBQywwQ0FBMEMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyx5REFBeUQsY0FBYyxDQUFDLDhCQUE4Qiw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxjQUFjLENBQUMsK0NBQStDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsOERBQThELGNBQWMsQ0FBQyx1Q0FBdUMsY0FBYyxDQUFDLGlEQUFpRCxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGdFQUFnRSxjQUFjLENBQUMscUNBQXFDLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsWUFBWSw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLHFEQUFxRCxDQUFDLHFCQUFxQiw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsVUFBVSw4Q0FBOEMsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxpQ0FBaUMsZ0JBQWdCLENBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHNEQUFzRCxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxvQkFBb0IsWUFBWSxDQUFDLENBQUMscUJBQXFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxtREFBbUQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLHVCQUF1QixjQUFjLENBQUMsWUFBWSxDQUFDLDZCQUE2QixZQUFZLENBQUMsNEJBQTRCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxpREFBaUQsQ0FBQyxTQUFTLENBQUMsbURBQW1ELFNBQVMsQ0FBQyw2Q0FBNkMsbURBQW1ELFVBQVUsQ0FBQyxDQUFDLDJCQUEyQiwwQkFBMEIsQ0FBQyxpR0FBaUcsU0FBUyxDQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsaURBQXlDLElBQUksQ0FBQyxDQUE5Qyx5Q0FBeUMsSUFBSSxDQUFDLENBQUMsK0NBQXVDLElBQUksQ0FBQyxDQUE1Qyx1Q0FBdUMsSUFBSSxDQUFDLENBQUMsb0RBQW9ELG9EQUEyQyxDQUEzQyw0Q0FBNEMsQ0FBQywwREFBMEQsa0RBQXlDLENBQXpDLDBDQUEwQyxDQUFDLCtCQUErQixXQUFXLENBQUMseUNBQXlDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQiwrQkFBK0IsQ0FBQyxZQUFZLHFCQUFxQixDQUFDLHdGQUF3RiwwQkFBMEIsQ0FBQyw2RUFBNkUsMEJBQTBCLENBQUMsdUJBQXVCLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLGdDQUFnQyxxQkFBcUIsQ0FBQyxnRUFBZ0UsYUFBYSxDQUFDLCtEQUErRCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxvQkFBb0IscUJBQXFCLENBQUMsMkNBQTJDLHFCQUFxQixDQUFDLHFCQUFxQixxQkFBcUIsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLDhCQUE4QixhQUFhLENBQUMsd0pBQXdKLGtCQUFrQixDQUFDLDBGQUEwRixrQkFBa0IsQ0FBQyxvRkFBb0Ysa0JBQWtCLENBQUMsMEhBQTBILGtCQUFrQixDQUFDLGtCQUFrQixpRkFBaUYsQ0FBQyxrQkFBa0IsZ0dBQWdHLENBQUMsa0JBQWtCLGdHQUFnRyxDQUFDLGtCQUFrQixnR0FBZ0csQ0FBQyxrQkFBa0IsaUdBQWlHLENBQUMsa0JBQWtCLGlHQUFpRyxDQUFDLGtCQUFrQixrR0FBa0csQ0FBQyxrQkFBa0Isc0dBQXNHLENBQUMsa0JBQWtCLHNHQUFzRyxDQUFDLGtCQUFrQixzR0FBc0csQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsd0dBQXdHLENBQUMsbUJBQW1CLHdHQUF3RyxDQUFDLG1CQUFtQix3R0FBd0csQ0FBQyxtQkFBbUIsd0dBQXdHLENBQUMsbUJBQW1CLHlHQUF5RyxDQUFDLG1CQUFtQix5R0FBeUcsQ0FBQyxtQkFBbUIseUdBQXlHLENBQUMsbUJBQW1CLHlHQUF5RyxDQUFDLG1CQUFtQix5R0FBeUcsQ0FBQyxvQkFBb0Isd0JBQXdCLENBQUMscUJBQXFCLENBQUMseUJBQXlCLFlBQVksQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHFCQUFxQixDQUFDLHNEQUFzRCxpR0FBaUcsQ0FBQyw4RUFBOEUsZUFBZSxDQUFDLHdHQUF3RyxxQkFBcUIsQ0FBQyxtQkFBbUIsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxtQkFBbUIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMscUNBQXFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxtQ0FBbUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsaUJBQWlCLENBQUMscUNBQXFDLFlBQVksQ0FBQyx1Q0FBdUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxRQUFRLENBQUMsb0RBQW9ELFdBQVcsQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFNBQVMsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsVUFBVSxDQUFDLGdGQUFnRixVQUFVLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFEQUFxRCxTQUFTLENBQUMscURBQXFELFlBQVksQ0FBQyxzREFBc0QsVUFBVSxDQUFDLGdFQUFnRSxTQUFTLENBQUMsV0FBVyxDQUFDLHFEQUFxRCxXQUFXLENBQUMsK0RBQStELFVBQVUsQ0FBQyxVQUFVLENBQUMsd0VBQXdFLFVBQVUsQ0FBQyxrRkFBa0YsU0FBUyxDQUFDLFdBQVcsQ0FBQyx1RUFBdUUsV0FBVyxDQUFDLGlGQUFpRixVQUFVLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxTQUFTLENBQUMsb0RBQW9ELFlBQVksQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFVBQVUsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxzRUFBc0UsV0FBVyxDQUFDLGdGQUFnRixVQUFVLENBQUMsVUFBVSxDQUFDLDRCQUE0Qix3R0FBd0csQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsaURBQWlELGFBQWEsQ0FBQyxjQUFjLENBQUMscUZBQXFGLGFBQWEsQ0FBQyxrRkFBa0YsYUFBYSxDQUFDLDRFQUE0RSxhQUFhLENBQUMsMGJBQTBiLHFCQUFxQixDQUFDLG1LQUFtSyx3QkFBd0IsQ0FBQyxnS0FBZ0ssd0JBQXdCLENBQUMsMEpBQTBKLHdCQUF3QixDQUFDLDZKQUE2Siw0QkFBNEIsQ0FBQyw2R0FBNkcsVUFBVSxDQUFDLDZCQUE2QixDQUFDLDBCQUEwQixlQUFlLENBQUMsb0NBQW9DLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQywyR0FBMkcsVUFBVSxDQUFDLHVHQUF1RyxVQUFVLENBQUMsK0ZBQStGLFVBQVUsQ0FBQyxvakJBQW9qQixxQkFBcUIsQ0FBQywyR0FBMkcsd0JBQXdCLENBQUMsdUdBQXVHLHdCQUF3QixDQUFDLCtGQUErRix3QkFBd0IsQ0FBQyxvakJBQW9qQixnQ0FBZ0MsQ0FBQywyTEFBMkwscUNBQXFDLENBQUMsdUxBQXVMLHFDQUFxQyxDQUFDLCtLQUErSyxxQ0FBcUMsQ0FBQyxpR0FBaUcsaUZBQWlGLENBQUMsaURBQWlELGdHQUFnRyxDQUFDLHdFQUF3RSxzR0FBc0csQ0FBQywyREFBMkQsaUZBQWlGLENBQUMsbUZBQW1GLGtHQUFrRyxDQUFDLGlJQUFpSSx1R0FBdUcsQ0FBQyx1R0FBdUcsaUZBQWlGLENBQUMsdURBQXVELGdHQUFnRyxDQUFDLGlIQUFpSCxlQUFlLENBQUMsbUJBQW1CLHFCQUFxQixDQUFDLG9EQUFvRCxnQ0FBZ0MsQ0FBQyx1Q0FBdUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLHdFQUF3RSxxQkFBcUIsQ0FBQyxtRkFBbUYscUNBQXFDLENBQUMsNkZBQTZGLGdCQUFnQixDQUFDLHNDQUFzQyxDQUFDLDhHQUE4RyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsaUVBQWlFLHFCQUFxQixDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxrRUFBa0UsZUFBZSxDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQyxpSEFBaUgsZ0NBQWdDLENBQUMsVUFBVSxlQUFlLENBQUMscUJBQXFCLENBQUMsd0NBQXdDLGdHQUFnRyxDQUFDLHNEQUFzRCxpRkFBaUYsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0JBQW9CLDRCQUE0QixDQUFDLHdCQUF3QixZQUFZLENBQUMsNkJBQTZCLHdCQUF3QixDQUFDLDBDQUEwQyw2QkFBNkIscUJBQXFCLENBQUMsQ0FBQyx3QkFBd0Isd0JBQXdCLENBQUMsNEhBQTRILHdCQUF3QixDQUFDLDBIQUEwSCx3QkFBd0IsQ0FBQyxzSEFBc0gsd0JBQXdCLENBQUMsZ0pBQWdKLHdCQUF3QixDQUFDLHNFQUFzRSxvQkFBb0IsQ0FBQywyQ0FBMkMscUJBQXFCLENBQUMsa0NBQWtDLHVCQUF1QixVQUFVLENBQUMsQ0FBQyxrQ0FBa0MseUJBQXlCLGNBQWMsQ0FBQyxDQUFDLCtGQUErRix3QkFBd0IsQ0FBQyw4RkFBOEYsd0JBQXdCLENBQUMsNEZBQTRGLHdCQUF3QixDQUFDLDRCQUE0Qix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyw2Q0FBNkMscUJBQXFCLENBQUMsVUFBVSxDQUFDLDJEQUEyRCxnR0FBZ0csQ0FBQywyRUFBMkUsV0FBVyxDQUFDLDhDQUE4QyxVQUFVLENBQUMsbUNBQW1DLGVBQWUsQ0FBQywwREFBMEQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDJFQUEyRSxVQUFVLENBQUMsVUFBVSxDQUFDLDhFQUE4RSwrQkFBK0IsQ0FBQyx1REFBdUQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHdFQUF3RSxVQUFVLENBQUMsVUFBVSxDQUFDLDJFQUEyRSwrQkFBK0IsQ0FBQyx5REFBeUQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDBFQUEwRSxVQUFVLENBQUMsVUFBVSxDQUFDLDZFQUE2RSwrQkFBK0IsQ0FBQyxXQUFXLGVBQWUsQ0FBQyx1SkFBdUosa0JBQWtCLENBQUMsd0ZBQXdGLG1DQUFtQyxDQUFDLGlCQUFpQixxQkFBcUIsQ0FBQywyQkFBMkIscUJBQXFCLENBQUMsb0JBQW9CLGdDQUFnQyxDQUFDLCtIQUErSCxxQkFBcUIsQ0FBQywyQkFBMkIscUJBQXFCLENBQUMsMENBQTBDLDBCQUEwQixDQUFDLHlCQUF5QixxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsNkZBQTZGLHFCQUFxQixDQUFDLGlXQUFpVyxnQ0FBZ0MsQ0FBQywwREFBMEQsNEJBQTRCLENBQUMsc0ZBQXNGLDRCQUE0QixDQUFDLDRCQUE0Qix3QkFBd0IsQ0FBQyxVQUFVLENBQUMsd0RBQXdELG1DQUFtQyxDQUFDLG9EQUFvRCwrQkFBK0IsQ0FBQyx3QkFBd0IsaUdBQWlHLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsK0RBQStELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywyRkFBMkYsb0NBQW9DLENBQUMsdUZBQXVGLCtCQUErQixDQUFDLDZEQUE2RCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMseUZBQXlGLG1DQUFtQyxDQUFDLHFGQUFxRiwrQkFBK0IsQ0FBQyw4QkFBOEIsaUZBQWlGLENBQUMsOEJBQThCLGFBQWEsQ0FBQyx5Q0FBeUMsYUFBYSxDQUFDLHVDQUF1QyxhQUFhLENBQUMsc0JBQXNCLHlHQUF5RyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLGdDQUFnQyxDQUFDLHNCQUFzQixrQ0FBa0MsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQixDQUFDLG1EQUFtRCxnR0FBZ0csQ0FBQyxnQkFBZ0IsZ0NBQWdDLENBQUMseVVBQXlVLDBCQUEwQixDQUFDLG9CQUFvQixvR0FBb0csZUFBZSxDQUFDLENBQUMsa0NBQWtDLHFCQUFxQixDQUFDLHdFQUF3RSxxQkFBcUIsQ0FBQyxnREFBZ0QscUJBQXFCLENBQUMsMEtBQTBLLGFBQWEsQ0FBQyxzQkFBc0Isb0JBQW9CLENBQUMsVUFBVSxvQkFBb0IsQ0FBQyxrREFBa0QsYUFBYSxDQUFDLDZEQUE2RCxhQUFhLENBQUMsMkRBQTJELGFBQWEsQ0FBQyw2Q0FBNkMsYUFBYSxDQUFDLHVCQUF1QixnQ0FBZ0MsQ0FBQyxtREFBbUQsd0JBQXdCLENBQUMsOERBQThELHdCQUF3QixDQUFDLDREQUE0RCx3QkFBd0IsQ0FBQyw2R0FBNkcsYUFBYSxDQUFDLHdIQUF3SCxhQUFhLENBQUMsc0hBQXNILGFBQWEsQ0FBQyw2REFBNkQsYUFBYSxDQUFDLHFLQUFxSyxhQUFhLENBQUMsdUlBQXVJLHdCQUF3QixDQUFDLFdBQVcsYUFBYSxDQUFDLHdEQUF3RCxxQkFBcUIsQ0FBQyw0Q0FBNEMscUJBQXFCLENBQUMsNERBQTRELGdDQUFnQyxDQUFDLG9GQUFvRiw4RkFBOEYsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyw4REFBOEQsZ0NBQWdDLENBQUMsc0ZBQXNGLDhGQUE4RixDQUFDLHdCQUF3QixDQUFDLDBCQUEwQixDQUFDLHFEQUFxRCxnQ0FBZ0MsQ0FBQyw2RUFBNkUsZ0NBQWdDLENBQUMsa0VBQWtFLGdDQUFnQyxDQUFDLDhFQUE4RSxxQkFBcUIsQ0FBQywwRkFBMEYsNEJBQTRCLENBQUMsMkRBQTJELHFCQUFxQixDQUFDLGlFQUFpRSxxQkFBcUIsQ0FBQyw2RUFBNkUsYUFBYSxDQUFDLHdGQUF3RixhQUFhLENBQUMsc0ZBQXNGLGFBQWEsQ0FBQywrR0FBK0csYUFBYSxDQUFDLGlGQUFpRixxQkFBcUIsQ0FBQyxtRkFBbUYscUJBQXFCLENBQUMsc0JBQXNCLGFBQWEsQ0FBQyxxQkFBcUIsYUFBYSxDQUFDLG1CQUFtQixhQUFhLENBQUMsb0VBQW9FLHFCQUFxQixDQUFDLHdIQUF3SCxxQkFBcUIsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUMsOENBQWdDLHFCQUFxQixDQUFyRCxxQ0FBZ0MscUJBQXFCLENBQXJELDBDQUFnQyxxQkFBcUIsQ0FBckQsZ0NBQWdDLHFCQUFxQixDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyw4Q0FBOEMscUJBQXFCLENBQUMseUNBQXlDLHFCQUFxQixDQUFDLCtCQUErQixtQkFBbUIsQ0FBQyx3RUFBd0UsbUJBQW1CLENBQUMsMkZBQTJGLGFBQWEsQ0FBQyw4QkFBOEIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLDhCQUE4QixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsZ01BQWdNLDBCQUEwQixDQUFDLGdCQUFnQixlQUFlLENBQUMsOENBQThDLGlHQUFpRyxDQUFDLGVBQWUsY0FBYyxDQUFDLHFCQUFxQixDQUFDLHlEQUF5RCxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsdUxBQXVMLDBCQUEwQixDQUFDLGVBQWUsZUFBZSxDQUFDLDREQUE0RCxxQkFBcUIsQ0FBQyxrREFBa0Qsb0NBQW9DLENBQUMsc0NBQXNDLENBQUMseUNBQXlDLG9DQUFvQyxDQUFDLHVNQUF1TSw0QkFBNEIsQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyw4QkFBOEIsd0JBQXdCLENBQUMsMERBQTBELFlBQVksQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxZQUFZLENBQUMsb0RBQW9ELHdCQUF3QixDQUFDLHlEQUF5RCx3QkFBd0IsQ0FBQyxpREFBaUQsY0FBYyxDQUFDLHVFQUF1RSxjQUFjLENBQUMsbUVBQW1FLGNBQWMsQ0FBQyx3QkFBd0IsNEJBQTRCLENBQUMsd0VBQXdFLG9CQUFvQixDQUFDLDJTQUEyUyx3QkFBd0IsQ0FBQyx1RUFBdUUsb0JBQW9CLENBQUMsdVNBQXVTLHdCQUF3QixDQUFDLHFFQUFxRSxvQkFBb0IsQ0FBQywrUkFBK1Isd0JBQXdCLENBQUMsNElBQTRJLDRCQUE0QixDQUFDLHdJQUF3SSxnQ0FBZ0MsQ0FBQyw4REFBOEQscUJBQXFCLENBQUMsc0NBQXNDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsdUNBQXVDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdEQUFnRCxpR0FBaUcsQ0FBQyxxRUFBcUUsMEJBQTBCLENBQUMsMERBQTBELGFBQWEsQ0FBQyx5REFBeUQsYUFBYSxDQUFDLHVEQUF1RCxhQUFhLENBQUMsaUVBQWlFLGFBQWEsQ0FBQyxrRUFBa0UscUJBQXFCLENBQUMsc0JBQXNCLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLFlBQVkscUJBQXFCLENBQUMscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLGtDQUFrQyx3R0FBd0csQ0FBQyxpQkFBaUIsc0NBQXNDLENBQUMsZ0NBQWdDLHFDQUFxQyxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixxQ0FBcUMsQ0FBQyxpQkFBaUIsQ0FBQywwQ0FBMEMsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsc0NBQXNDLCtCQUErQixDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQyxvREFBb0QscUNBQXFDLENBQUMsa0RBQWtELHdCQUF3QixDQUFDLGtFQUFrRSx3QkFBd0IsQ0FBQyxnRUFBZ0Usb0NBQW9DLENBQUMsOERBQThELHdCQUF3QixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyw2REFBNkQsb0NBQW9DLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxxQkFBcUIsQ0FBQyx3QkFBd0IsZ0dBQWdHLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLGdDQUFnQyxDQUFDLDZCQUE2QixnQ0FBZ0MsQ0FBQyx3R0FBd0csd0JBQXdCLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxxR0FBcUcsd0JBQXdCLENBQUMseUNBQXlDLFVBQVUsQ0FBQywrRkFBK0Ysd0JBQXdCLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyx1QkFBdUIsb0NBQW9DLENBQUMseUZBQXlGLGdDQUFnQyxDQUFDLHFJQUFxSSxnQ0FBZ0MsQ0FBQyx3REFBd0QsZ0NBQWdDLENBQUMsNkNBQTZDLGdDQUFnQyxDQUFDLG9KQUFvSixnQ0FBZ0MsQ0FBQyw0S0FBNEssZ0NBQWdDLENBQUMsNkVBQTZFLDRCQUE0QixDQUFDLDRCQUE0QixDQUFDLDRLQUE0Syw0QkFBNEIsQ0FBQyxvTkFBb04sNEJBQTRCLENBQUMsaURBQWlELDJCQUEyQixDQUFDLHlDQUF5QyxnSEFBZ0gsQ0FBQyxxSEFBcUgsQ0FBQyx1Q0FBdUMsaUhBQWlILENBQUMsa0dBQWtHLGdDQUFnQyxDQUFDLG9CQUFvQix1QkFBdUIsY0FBYyxDQUFDLENBQUMscUVBQXFFLHFCQUFxQixDQUFDLGdDQUFnQyxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsK0hBQStILHdCQUF3QixDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsNEJBQTRCLENBQUMsYUFBYSxDQUFDLHVEQUF1RCxxQkFBcUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyxtQ0FBbUMsaUNBQWlDLENBQUMsMEdBQTBHLGdDQUFnQyxDQUFDLHVCQUF1QixhQUFhLENBQUMsaUNBQWlDLHVDQUF1QyxDQUFDLCtGQUErRixvQ0FBb0MsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIscUJBQXFCLENBQUMsK0RBQStELHFCQUFxQixDQUFDLG1DQUFtQyw0QkFBNEIsQ0FBQyx1RUFBdUUsNEJBQTRCLENBQUMsZ0dBQWdHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxnckJBQWdyQixxQ0FBcUMsQ0FBQyxrRkFBa0Ysd0JBQXdCLENBQUMsZ0lBQWdJLHFCQUFxQixDQUFDLHdxQkFBd3FCLHFDQUFxQyxDQUFDLGdGQUFnRix3QkFBd0IsQ0FBQyw0SEFBNEgscUJBQXFCLENBQUMsd3BCQUF3cEIscUNBQXFDLENBQUMsNEVBQTRFLHdCQUF3QixDQUFDLG9IQUFvSCxxQkFBcUIsQ0FBQyx3d0JBQXd3QixxQ0FBcUMsQ0FBQywwTkFBME4sd0JBQXdCLENBQUMsc05BQXNOLFVBQVUsQ0FBQywwUkFBMFIsMEJBQTBCLENBQUMsb0pBQW9KLGlCQUFpQixDQUFDLDROQUE0TixpQ0FBaUMsQ0FBQyxzSEFBc0gsc0NBQXNDLENBQUMsZ3dCQUFnd0IscUNBQXFDLENBQUMsc05BQXNOLHdCQUF3QixDQUFDLGtOQUFrTixVQUFVLENBQUMsc1JBQXNSLDBCQUEwQixDQUFDLGtKQUFrSixpQkFBaUIsQ0FBQywwTkFBME4saUNBQWlDLENBQUMsb0hBQW9ILHNDQUFzQyxDQUFDLGd2QkFBZ3ZCLHFDQUFxQyxDQUFDLDhNQUE4TSx3QkFBd0IsQ0FBQywwTUFBME0sVUFBVSxDQUFDLDhRQUE4USwwQkFBMEIsQ0FBQyw4SUFBOEksaUJBQWlCLENBQUMsc05BQXNOLGlDQUFpQyxDQUFDLGdIQUFnSCxzQ0FBc0MsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0Isa0JBQWtCLENBQUMsVUFBVSxDQUFDLDRIQUE0SCw2QkFBNkIsQ0FBQyw0TUFBNE0sYUFBYSxDQUFDLGdDQUFnQyx3QkFBd0IsQ0FBQyxhQUFhLDRCQUE0QixDQUFDLFVBQVUsZUFBZSxDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUMsa0dBQWtHLENBQUMsNEJBQTRCLGFBQWEsQ0NDdHo2RDtJQUNJLGdCQUFnQjtFQUNsQixDQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEMsQ0FDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtFQUNkLENBQ0E7SUFDRSx1QkFBdUI7RUFDekIsQ0FDQTtJQUNFLGFBQWE7RUFDZixDQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CLENBQ0E7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCLENBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYixDQUVBO0lBQ0UsV0FBVztFQUNiLENBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoicHJvamVjdHMvQmxvZ2FwcC9zcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6NnB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZToyNHB4fS5tYXQtaDEsLm1hdC1oZWFkbGluZSwubWF0LXR5cG9ncmFwaHkgaDF7Zm9udDo0MDAgMjRweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMiwubWF0LXRpdGxlLC5tYXQtdHlwb2dyYXBoeSBoMntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWgzLC5tYXQtc3ViaGVhZGluZy0yLC5tYXQtdHlwb2dyYXBoeSBoM3tmb250OjQwMCAxNnB4LzI4cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWg0LC5tYXQtc3ViaGVhZGluZy0xLC5tYXQtdHlwb2dyYXBoeSBoNHtmb250OjQwMCAxNXB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWg1LC5tYXQtdHlwb2dyYXBoeSBoNXtmb250OjQwMCAxMS42MnB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWg2LC5tYXQtdHlwb2dyYXBoeSBoNntmb250OjQwMCA5LjM4cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS0yLC5tYXQtYm9keS1zdHJvbmd7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1jYXB0aW9uLC5tYXQtc21hbGx7Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNTZweDtsZXR0ZXItc3BhY2luZzotLjA1ZW19Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4O2xldHRlci1zcGFjaW5nOi0uMDJlbX0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHg7bGV0dGVyLXNwYWNpbmc6LS4wMDVlbX0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1idXR0b24sLm1hdC1mYWIsLm1hdC1mbGF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWJ1dHRvbi10b2dnbGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtY29udGVudCwubWF0LWNhcmQtc3VidGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbHtsaW5lLWhlaWdodDoyNHB4fS5tYXQtY2hpcHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29ue2ZvbnQtc2l6ZToxOHB4fS5tYXQtdGFibGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjEyNTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29ue2ZvbnQtc2l6ZToxNTAlO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b257aGVpZ2h0OjEuNWVtO3dpZHRoOjEuNWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbntoZWlnaHQ6MS4xMjVlbTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNWVtIDA7Ym9yZGVyLXRvcDouODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7dG9wOi0uODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS43OTE2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM1JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjdlbSl9QG1lZGlhIHByaW50ey5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSguNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSguNzUpfX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi4yNWVtIDAgLjc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4wOTM3NWVtO21hcmdpbi10b3A6LS41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjFlbSAwIDFlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjg0Mzc1ZW07bWFyZ2luLXRvcDotLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZ3JpZC10aWxlLWZvb3RlciwubWF0LWdyaWQtdGlsZS1oZWFkZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubWF0LXJhZGlvLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1uZXN0ZWQtdHJlZS1ub2RlLC5tYXQtdHJlZS1ub2Rle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTRweH0ubWF0LXJpcHBsZXtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWR7b3ZlcmZsb3c6dmlzaWJsZX0ubWF0LXJpcHBsZS1lbGVtZW50e3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5LHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoMCwwLC4yLDEpO3RyYW5zZm9ybTpzY2FsZSgwKX1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1yaXBwbGUtZWxlbWVudHtkaXNwbGF5Om5vbmV9fS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbi1uYW1lOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0fS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXple3Jlc2l6ZTpub25lfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmd7aGVpZ2h0OmF1dG8haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzoycHggMCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzNmNTFiNX0ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmY0MDgxfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2NvbG9yOiNiMGIwYjB9Lm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmZjQwODF9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzZjUxYjV9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mYWIubWF0LWFjY2VudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25le2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhIWltcG9ydGFudH1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmJsYWNrLW9uLXdoaXRlKXsubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojMDAwIWltcG9ydGFudH19Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtZGlzYWJsZWR7b3BhY2l0eTouNX19QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kOjAgMH19Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXB7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZle2JveC1zaGFkb3c6MCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlcntvcGFjaXR5Oi41NH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWR7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVye2JhY2tncm91bmQ6IzAwMH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRib2R5LC5tYXQtdGFibGUgdGZvb3QsLm1hdC10YWJsZSB0aGVhZCwubWF0LXRhYmxlLXN0aWNreSxbbWF0LWZvb3Rlci1yb3ddLFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLG1hdC1mb290ZXItcm93LG1hdC1oZWFkZXItcm93LG1hdC1yb3d7YmFja2dyb3VuZDppbmhlcml0fW1hdC1mb290ZXItcm93LG1hdC1oZWFkZXItcm93LG1hdC1yb3csdGQubWF0LWNlbGwsdGQubWF0LWZvb3Rlci1jZWxsLHRoLm1hdC1oZWFkZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9LmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7Y29sb3I6IzNmNTFiNX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWRpYWxvZy1jb250YWluZXJ7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kaXZpZGVye2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGl2aWRlci12ZXJ0aWNhbHtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYWN0aW9uLXJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLmNkay1wcm9ncmFtLWZvY3VzZWQsLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYSAoaG92ZXI6bm9uZSl7Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6I2ZmZn19Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6aW5oZXJpdH0ubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciwubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojM2Y1MWI1fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLC5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1tZW51LWl0ZW17YmFja2dyb3VuZDowIDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSl7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZXtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGU6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjIpfS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLjAwMDFkZWcscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6MCAwfX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9ye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3Jle2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3N7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LXdhcm57YmFja2dyb3VuZDojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOmluaGVyaXR9Lm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sdGlwe2JhY2tncm91bmQ6cmdiYSg5Nyw5Nyw5NywuOSl9Lm1hdC10cmVle2JhY2tncm91bmQ6I2ZmZn0ubWF0LW5lc3RlZC10cmVlLW5vZGUsLm1hdC10cmVlLW5vZGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtiYWNrZ3JvdW5kOiMzMjMyMzI7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZjQwODF9IiwiQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyNCwgMjE4LCAyMTgpO1xuICB9XG4gIC5oZWFkZXJTcGFue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmRhcmtUb29sYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5ncmlkTGlzdFdyYXBwZXJ7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICAuYnV0dG9uc2V0VG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmM2Y4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuc2luZ2xlQnV0dG9ue1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/bloglist/bloglist.component.html":
/*!**************************************************!*\
  !*** ./src/app/bloglist/bloglist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<lib-Blog\n  [serverUrl]=\"server\"\n  [addTeammember]=\"addURL\"\n  [editblog]=\"editURL\"\n  [Blogtable]=\"listingTablename\"\n  [deleteBlog]=\"Blogdelete\"\n  [AddEditBlog]=\"updateUrl\"\n  [getDataEndpoint]=\"getDataUrl\" \n  [getDataSource]=\"getSourceUrl\"\n  [listResolve]=\"BlogList\"\n  [BlogToken]=\"token\"\n>\n</lib-Blog>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/bloglist/bloglist.component.ts":
/*!************************************************!*\
  !*** ./src/app/bloglist/bloglist.component.ts ***!
  \************************************************/
/*! exports provided: BloglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloglistComponent", function() { return BloglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var BloglistComponent = /** @class */ (function () {
    function BloglistComponent(activatedRoute, router, cookieService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cookieService = cookieService;
        this.server = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
        this.addUrl = 'addorupdatedata';
        this.updateUrl = 'addorupdatedata';
        this.deleteUrl = 'deletesingledata';
        this.statusUpdateUrl = 'statusupdate';
        this.getDataUrl = 'datalist';
        this.Blogdelete = 'deletesingledata';
        this.listingTablename = 'blog_category';
        this.getSourceUrl = 'demoteam';
        this.addURL = "blog/add";
        this.editURL = "blog/edit";
        this.token = this.cookieService.get('jwtToken');
    }
    BloglistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.forEach(function (data) {
            var result;
            result = data.results.res;
            _this.BlogList = result;
        });
    };
    BloglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bloglist',
            template: __webpack_require__(/*! ./bloglist.component.html */ "./src/app/bloglist/bloglist.component.html"),
            styles: [__webpack_require__(/*! ./bloglist.component.css */ "./src/app/bloglist/bloglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], BloglistComponent);
    return BloglistComponent;
}());



/***/ }),

/***/ "./src/app/listing-blogmanagement/listing-blogmanagement.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/listing-blogmanagement/listing-blogmanagement.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CbG9nYXBwL3NyYy9hcHAvbGlzdGluZy1ibG9nbWFuYWdlbWVudC9saXN0aW5nLWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/listing-blogmanagement/listing-blogmanagement.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/listing-blogmanagement/listing-blogmanagement.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">Blogs</h2>\n    </mat-toolbar>\n\n    <!-- ---------------------Button for adding new role------------------------------ -->\n    <mat-toolbar class=\"buttonsetToolbar\">\n        <button style=\"margin-left: auto;\" class=\"singleButton\" mat-raised-button color=\"primary\" [routerLink]=\"['/blog-management/add']\">Add New Blog</button>\n    </mat-toolbar>\n    \n\n    <!-- to listing library -->\n    <lib-listing-blogmanagementlib [config]=\"blogListingConfig\"></lib-listing-blogmanagementlib>\n</mat-card>"

/***/ }),

/***/ "./src/app/listing-blogmanagement/listing-blogmanagement.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/listing-blogmanagement/listing-blogmanagement.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListingBlogmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingBlogmanagementComponent", function() { return ListingBlogmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var ListingBlogmanagementComponent = /** @class */ (function () {
    /************** lib list setup end here *************/
    function ListingBlogmanagementComponent(router, activatedRoute, cookieService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.cookieValue = "Unknown";
        /*Listing Variables*/
        this.blogListingConfig = {
            apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
            listEndPoint: "datalist",
            datasource: "",
            tableName: "blogs",
            tableName2: "blogs_view",
            updateurl: "addorupdatedata",
            editUrl: "blog-management/edit",
            jwtToken: "",
            deleteEndPoint: "deletesingledata",
        };
        this.cookieValue = this.cookieService.get('jwtToken');
        this.activatedRoute.data.subscribe(function (resolveData) {
            _this.blogListingConfig.datasource = resolveData.results.res;
            _this.blogListingConfig.jwtToken = _this.cookieValue;
        });
    }
    ListingBlogmanagementComponent.prototype.ngOnInit = function () {
    };
    ListingBlogmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing-blogmanagement',
            template: __webpack_require__(/*! ./listing-blogmanagement.component.html */ "./src/app/listing-blogmanagement/listing-blogmanagement.component.html"),
            styles: [__webpack_require__(/*! ./listing-blogmanagement.component.css */ "./src/app/listing-blogmanagement/listing-blogmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ListingBlogmanagementComponent);
    return ListingBlogmanagementComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "../../node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "../../node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/esm5/tree.es5.js");











































//import { MatFileUploadModule } from 'angular-material-fileupload';
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/resolve.service.ts":
/*!************************************!*\
  !*** ./src/app/resolve.service.ts ***!
  \************************************/
/*! exports provided: ResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveService", function() { return ResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-api.service */ "./src/app/app-api.service.ts");




var ResolveService = /** @class */ (function () {
    function ResolveService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var data = { source: route.data.requestcondition.source };
        if (route.data.requestcondition.condition.key_id != null && route.data.requestcondition.condition.key_id == '') {
            data.condition = { _id: route.params.id };
        }
        /* will come into play while editing otherwise no effect */
        return new Promise(function (resolve) {
            _this.apiService.CustomRequest(data, route.data.endpoint).subscribe(function (api_object) {
                if (api_object) {
                    return resolve(api_object);
                }
                else {
                    return true;
                }
            });
        });
    };
    ResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResolveService);
    return ResolveService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/angular/angularssr-base/projects/Blogapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map