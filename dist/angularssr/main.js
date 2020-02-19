(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(meta) {
        this.meta = meta;
        this.meta.setTitle('About us dynamic');
        this.meta.setTag('og:description', 'This is dynamic decription ');
        this.meta.setTag('og:title', 'This is dynamic title with meta og ');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaService"]])
    ], AboutusComponent);
    return AboutusComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _set_cookie_set_cookie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-cookie/set-cookie.component */ "./src/app/set-cookie/set-cookie.component.ts");






var appRoutes = [
    { path: 'about', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"], data: {
            meta: {
                title: 'About US',
                description: 'Have you seen my rubber duckie?'
            }
        } },
    { path: 'contact', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"],
        data: {
            meta: {
                title: 'Contact Us',
                description: 'Have you seen my rubber duckie?'
            }
        } },
    // Set Token Rotes 
    { path: '', component: _set_cookie_set_cookie_component__WEBPACK_IMPORTED_MODULE_5__["SetCookieComponent"] },
    { path: 'setcookie', component: _set_cookie_set_cookie_component__WEBPACK_IMPORTED_MODULE_5__["SetCookieComponent"] },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularssr';
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _set_cookie_set_cookie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./set-cookie/set-cookie.component */ "./src/app/set-cookie/set-cookie.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









/* Cookie Service */


// Forms Module 

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"],
                _set_cookie_set_cookie_component__WEBPACK_IMPORTED_MODULE_10__["SetCookieComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_7__["MetaModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/set-cookie/set-cookie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/set-cookie/set-cookie.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-family: cursive;\n  }\n  \n  input[type=button] {\n    width: 100%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  input[type=button]:hover {\n    background-color: #45a049;\n  }\n  \n  div {\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0LWNvb2tpZS9zZXQtY29va2llLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3NldC1jb29raWUvc2V0LWNvb2tpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICB9XG4gIFxuICBkaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/set-cookie/set-cookie.component.html":
/*!******************************************************!*\
  !*** ./src/app/set-cookie/set-cookie.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div>\n\n      <input type=\"text\" [(ngModel)]=\"jwtToken\" />\n      <input type=\"button\" (click)=\"setToken()\" value=\"Set Token\" />\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/set-cookie/set-cookie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/set-cookie/set-cookie.component.ts ***!
  \****************************************************/
/*! exports provided: SetCookieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCookieComponent", function() { return SetCookieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");



var SetCookieComponent = /** @class */ (function () {
    function SetCookieComponent(cookieService) {
        this.cookieService = cookieService;
        this.jwtToken = null;
    }
    SetCookieComponent.prototype.ngOnInit = function () {
    };
    SetCookieComponent.prototype.setToken = function () {
        this.cookieService.set('jwtToken', this.jwtToken);
        alert('Successfully Set');
        this.jwtToken = "";
    };
    SetCookieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-cookie',
            template: __webpack_require__(/*! ./set-cookie.component.html */ "./src/app/set-cookie/set-cookie.component.html"),
            styles: [__webpack_require__(/*! ./set-cookie.component.css */ "./src/app/set-cookie/set-cookie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], SetCookieComponent);
    return SetCookieComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/influxiq-03/Downloads/blog_lib/angularssr-base/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map