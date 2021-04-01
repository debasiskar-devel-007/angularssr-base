/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, apiService, cookieService, route) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.route = route;
        this.message = '';
        this.fromTitleValue = '';
        this.serverURL = '';
        this.signUpRouteingUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.routerStatusValue = '';
        this.logoValue = '';
        this.cookieSetValue = '';
        this.buttonNameValue = '';
        this.defaultUrlValue = '';
        this.loader = null;
        this.ipinfoidValue = '';
        this.project_name = '';
        this.redirect_url = '';
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.loginflag = false;
        this.currentUrl = this.router.url;
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        }));
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.redirect_url = params['path'];
            // console.log('this.redirect_url',this.redirect_url)
        }));
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "forLoader", {
        set: /**
         * @param {?} forLoaderVal
         * @return {?}
         */
        function (forLoaderVal) {
            this.loader = (forLoaderVal) || '<no name set>';
            this.loader = forLoaderVal;
            // console.log('++++',this.loader)
            // console.log('++++-----',this.loader)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "fromTitle", {
        set: /**
         * @param {?} fromTitleVal
         * @return {?}
         */
        function (fromTitleVal) {
            this.fromTitleValue = (fromTitleVal) || '<no name set>';
            this.fromTitleValue = fromTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "logo", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoValue = logoVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "buttonName", {
        set: /**
         * @param {?} buttonNameVal
         * @return {?}
         */
        function (buttonNameVal) {
            this.buttonNameValue = (buttonNameVal) || '<no name set>';
            this.buttonNameValue = buttonNameVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "fullUrl", {
        set: /**
         * @param {?} fullUrlVal
         * @return {?}
         */
        function (fullUrlVal) {
            this.serverURL = (fullUrlVal) || '<no name set>';
            this.serverURL = fullUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "endpoint", {
        set: /**
         * @param {?} endpointVal
         * @return {?}
         */
        function (endpointVal) {
            this.endpointValue = endpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "cookieSet", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.cookieSetValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "signUpRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.signUpRouteingUrlValue = routeingUrlval;
            // console.log(this.signUpRouteingUrlValue)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "forgetRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.forgetRouteingUrlValue = routeingUrlval;
            // console.log(this.forgetRouteingUrlValue)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "routerStatus", {
        set: /**
         * @param {?} routerStatusval
         * @return {?}
         */
        function (routerStatusval) {
            this.routerStatusValue = (routerStatusval) || '<no name set>';
            this.routerStatusValue = routerStatusval;
            // console.log(this.routerStatusValue)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "defaultLoginUrl", {
        set: /**
         * @param {?} defaultUrlVal
         * @return {?}
         */
        function (defaultUrlVal) {
            this.defaultUrlValue = (defaultUrlVal) || '<no name set>';
            this.defaultUrlValue = defaultUrlVal;
            // console.log(this.defaultUrlValue)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "ipinfoid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.ipinfoidValue = id;
            // console.log(this.ipinfoidValue)
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var url = "https://ipinfo.io/?format=json&token=" + this.ipinfoidValue;
        this.http.get(url).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.login_ip_info = res;
        }));
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL); // set the server url 
        }), 50);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.endpointValue); // set the endpoint
        }), 50);
    };
    /**
     * @param {?} length
     * @param {?} chars
     * @return {?}
     */
    LoginComponent.prototype.randomString = /**
     * @param {?} length
     * @param {?} chars
     * @return {?}
     */
    function (length, chars) {
        /** @type {?} */
        var mask = '';
        if (chars.indexOf('a') > -1)
            mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1)
            mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1)
            mask += '0123456789';
        if (chars.indexOf('!') > -1)
            mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        /** @type {?} */
        var result = '';
        for (var i = length; i > 0; --i)
            result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    };
    /********* Login Form Submit start here*********/
    /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    LoginComponent.prototype.loginFormSubmit = /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /**secret key workes here */
        this.secret = this.randomString(9, 'aA#!');
        this.cookieService.set('secret', this.secret);
        localStorage.setItem('secret', this.secret);
        // this.stateGroup = this.myControl.valueChanges
        // .pipe(
        //   startWith(''),
        //   map(value => this._filter(value))
        // );
        this.loader = 1;
        /** @type {?} */
        var x;
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            this.loginflag = true;
            /** @type {?} */
            var data = this.loginForm.value;
            data.login_data = this.login_ip_info;
            data.login_time = new Date().getTime();
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                var e_1, _a, e_2, _b;
                if (response.status == "success") {
                    _this.cookieService.set('jwtToken', response.token);
                    localStorage.setItem('jwtToken', response.token);
                    if (_this.router.url == _this.defaultUrlValue) {
                        for (var key1 in _this.routerStatusValue.data) {
                            if (response.item[0].type === _this.routerStatusValue.data[key1].type) {
                                try {
                                    for (var _c = tslib_1.__values(Object.entries(_this.routerStatusValue.data[key1].cookies)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        var _e = tslib_1.__read(_d.value, 2), keys = _e[0], values = _e[1];
                                        try {
                                            for (var _f = tslib_1.__values(Object.entries(response.item[0])), _g = _f.next(); !_g.done; _g = _f.next()) {
                                                var _h = tslib_1.__read(_g.value, 2), key = _h[0], value = _h[1];
                                                if (values == key) {
                                                    _this.cookieService.set(keys, JSON.stringify(value));
                                                    localStorage.setItem(keys, JSON.stringify(value));
                                                }
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                if (_this.cookieService.get('redirectUrl') == null || _this.cookieService.get('redirectUrl') == '' || _this.cookieService.get('redirectUrl') == undefined || _this.cookieService.get('redirectUrl').length < 1) {
                                    _this.router.navigateByUrl('/' + _this.routerStatusValue.data[key1].routerNav);
                                }
                                else {
                                    _this.router.navigateByUrl(_this.cookieService.get('redirectUrl'));
                                }
                            }
                        }
                    }
                    else {
                        _this.router.navigateByUrl(_this.redirect_url);
                    }
                    // this.loader = 0;
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                    _this.message = '';
                }
                else {
                    // display error message on html
                    _this.loginflag = false;
                    _this.message = response.msg;
                }
            }));
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LoginComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.loginForm.controls[val].markAsUntouched();
    };
    // This is use for navigate this component to forget component 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.forgetpassword = 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue.path);
    };
    // This is use for navigate this component to sign-Up component 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.signup = 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue.path);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    LoginComponent.prototype.customFunction = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.router.navigateByUrl('/' + link);
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log("AppComponent:OnDestroy");
        this.loginflag = false;
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n            <img [src]=\"logoValue\">\n        </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n                <mat-error *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].errors.required && loginForm.controls['email'].touched\">\n                    Email can not be blank</mat-error>\n                <mat-error *ngIf=\"!loginForm.controls['email'].valid && !loginForm.controls['email'].errors.required\">\n                    Please enter a valid email</mat-error>\n            </mat-form-field>\n\n\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\" [ngClass]=\"{'disabled': loginflag}\">{{buttonNameValue}}</button>\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\" [attr.disabled]=\"loginflag ? 'disabled' : ''\">Login</button>\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loginflag\"></mat-progress-bar>\n\n            <span class=\"signupfooter\">\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl =='' \"\n                    (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink ==''  && signUpRouteingUrlValue.path ==''\"\n                    [attr.href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\"\n                    (click)=\"signup()\">Sign Up</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\"\n                    (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\"\n                    [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\"\n                    (click)=\"forgetpassword()\">Forget Password</a>\n\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}.disabled{background:#ddd}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService },
        { type: CookieService },
        { type: ActivatedRoute }
    ]; };
    LoginComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        forLoader: [{ type: Input }],
        fromTitle: [{ type: Input }],
        logo: [{ type: Input }],
        buttonName: [{ type: Input }],
        fullUrl: [{ type: Input }],
        endpoint: [{ type: Input }],
        cookieSet: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }],
        forgetRouteingUrl: [{ type: Input }],
        routerStatus: [{ type: Input }],
        defaultLoginUrl: [{ type: Input }],
        ipinfoid: [{ type: Input }]
    };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.message;
    /** @type {?} */
    LoginComponent.prototype.formDirective;
    /** @type {?} */
    LoginComponent.prototype.fromTitleValue;
    /** @type {?} */
    LoginComponent.prototype.serverURL;
    /** @type {?} */
    LoginComponent.prototype.signUpRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.routerStatusValue;
    /** @type {?} */
    LoginComponent.prototype.endpointValue;
    /** @type {?} */
    LoginComponent.prototype.logoValue;
    /** @type {?} */
    LoginComponent.prototype.cookieSetValue;
    /** @type {?} */
    LoginComponent.prototype.buttonNameValue;
    /** @type {?} */
    LoginComponent.prototype.defaultUrlValue;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loader;
    /** @type {?} */
    LoginComponent.prototype.secret;
    /** @type {?} */
    LoginComponent.prototype.ipinfoidValue;
    /** @type {?} */
    LoginComponent.prototype.login_ip_info;
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.project_name;
    /** @type {?} */
    LoginComponent.prototype.redirect_url;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.previousUrl;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.currentUrl;
    /** @type {?} */
    LoginComponent.prototype.loginflag;
    /** @type {?} */
    LoginComponent.prototype.fb;
    /** @type {?} */
    LoginComponent.prototype.http;
    /** @type {?} */
    LoginComponent.prototype.router;
    /** @type {?} */
    LoginComponent.prototype.apiService;
    /** @type {?} */
    LoginComponent.prototype.cookieService;
    /** @type {?} */
    LoginComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQWEsV0FBVyxFQUFhLFVBQVUsRUFBc0Isa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLbkQ7SUFnSEUsd0JBQW1CLEVBQWUsRUFDekIsSUFBZ0IsRUFDaEIsTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQzVCLEtBQXFCO1FBTDlCLGlCQXlCQztRQXpCa0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBL0d2QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBSWxCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsMkJBQXNCLEdBQVEsRUFBRSxDQUFDO1FBQ2pDLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsY0FBUyxHQUFRLEVBQUUs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QkFBQztDQUFBLEFBdFFELElBc1FDO1NBalFZLGNBQWM7OztJQUN6QixpQ0FBeUI7O0lBRXpCLHVDQUFpRTs7SUFFakUsd0NBQWdDOztJQUNoQyxtQ0FBMkI7O0lBQzNCLGdEQUF3Qzs7SUFDeEMsZ0RBQXdDOztJQUN4QywyQ0FBbUM7O0lBQ25DLHVDQUEwQjs7SUFDMUIsbUNBQTJCOztJQUMzQix3Q0FBZ0M7O0lBQ2hDLHlDQUFpQzs7SUFDakMseUNBQTRCOzs7OztJQUM1QixnQ0FBMkI7O0lBQzNCLGdDQUFtQjs7SUF5RW5CLHVDQUErQjs7SUFPL0IsdUNBQTBCOztJQUkxQixtQ0FBNEI7O0lBQzVCLHNDQUE4Qjs7SUFDOUIsc0NBQThCOzs7OztJQUM5QixxQ0FBd0M7Ozs7O0lBQ3hDLG9DQUF1Qzs7SUFDdkMsbUNBQWlDOztJQUVyQiw0QkFBc0I7O0lBQ2hDLDhCQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixvQ0FBNkI7O0lBQzdCLHVDQUFtQzs7SUFDbkMsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgTWluTGVuZ3RoVmFsaWRhdG9yLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZnJvbVRpdGxlVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJztcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZXJTdGF0dXNWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBlbmRwb2ludFZhbHVlOiBhbnk7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgY29va2llU2V0VmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgYnV0dG9uTmFtZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGRlZmF1bHRVcmxWYWx1ZSA9ICcnO1xuICBwcml2YXRlIGxvYWRlcjogYW55ID0gbnVsbDtcbiAgcHVibGljIHNlY3JldDogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZm9yTG9hZGVyKGZvckxvYWRlclZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkZXIgPSAoZm9yTG9hZGVyVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5sb2FkZXIgPSBmb3JMb2FkZXJWYWw7XG4gICAgLy8gY29uc29sZS5sb2coJysrKysnLHRoaXMubG9hZGVyKVxuICAgIC8vIGNvbnNvbGUubG9nKCcrKysrLS0tLS0nLHRoaXMubG9hZGVyKVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgbmFtZVxuICBzZXQgZnJvbVRpdGxlKGZyb21UaXRsZVZhbDogYW55KSB7XG4gICAgdGhpcy5mcm9tVGl0bGVWYWx1ZSA9IChmcm9tVGl0bGVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gZnJvbVRpdGxlVmFsO1xuXG4gIH1cbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGJ1dHRvbk5hbWUoYnV0dG9uTmFtZVZhbDogYW55KSB7XG4gICAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYnV0dG9uTmFtZVZhbHVlID0gYnV0dG9uTmFtZVZhbFxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmdWxsVXJsKGZ1bGxVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKGZ1bGxVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IGZ1bGxVcmxWYWw7XG5cbiAgfVxuICBASW5wdXQoKVxuXG4gIHNldCBlbmRwb2ludChlbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5lbmRwb2ludFZhbHVlID0gZW5kcG9pbnRWYWw7XG4gIH1cblxuICBASW5wdXQoKVxuXG4gIHB1YmxpYyBzZXQgY29va2llU2V0KHY6IGFueSkge1xuICAgIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xuICB9XG5cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZvcmdldFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVyU3RhdHVzKHJvdXRlclN0YXR1c3ZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IChyb3V0ZXJTdGF0dXN2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlID0gcm91dGVyU3RhdHVzdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdExvZ2luVXJsKGRlZmF1bHRVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFVybFZhbHVlID0gKGRlZmF1bHRVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmRlZmF1bHRVcmxWYWx1ZSA9IGRlZmF1bHRVcmxWYWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kZWZhdWx0VXJsVmFsdWUpXG4gIH1cbiAgcHVibGljIGlwaW5mb2lkVmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlwaW5mb2lkKGlkOiBhbnkpIHtcbiAgICB0aGlzLmlwaW5mb2lkVmFsdWUgPSBpZDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlwaW5mb2lkVmFsdWUpXG4gIH1cblxuICBwdWJsaWMgbG9naW5faXBfaW5mbzogYW55O1xuXG5cblxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBwcm9qZWN0X25hbWU6IGFueSA9ICcnO1xuICBwdWJsaWMgcmVkaXJlY3RfdXJsOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGN1cnJlbnRVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHVibGljIGxvZ2luZmxhZzpib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXG4gICAgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG5cblxuICAgIHRoaXMuY3VycmVudFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICAgIHRoaXMuY3VycmVudFVybCA9IGV2ZW50LnVybDtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnJlZGlyZWN0X3VybCA9IHBhcmFtc1sncGF0aCddO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMucmVkaXJlY3RfdXJsJyx0aGlzLnJlZGlyZWN0X3VybClcbiAgICB9KTtcblxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHZhciB1cmw6IGFueSA9IFwiaHR0cHM6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPVwiICsgdGhpcy5pcGluZm9pZFZhbHVlO1xuICAgIHRoaXMuaHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5sb2dpbl9pcF9pbmZvID0gcmVzO1xuICAgIH0pO1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vIGNsZWFyIHRoZSBlbmRwb2ludCBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmVuZHBvaW50VmFsdWUpOyAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuXG4gIH1cbiAgcmFuZG9tU3RyaW5nKGxlbmd0aCwgY2hhcnMpIHtcbiAgICB2YXIgbWFzayA9ICcnO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdhJykgPiAtMSkgbWFzayArPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdBJykgPiAtMSkgbWFzayArPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCcjJykgPiAtMSkgbWFzayArPSAnMDEyMzQ1Njc4OSc7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJyEnKSA+IC0xKSBtYXNrICs9ICd+YCFAIyQlXiYqKClfKy09e31bXTpcIjtcXCc8Pj8sLi98XFxcXCc7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBtYXNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hc2subGVuZ3RoKV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKioqKioqKiogTG9naW4gRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi9cbiAgbG9naW5Gb3JtU3VibWl0KCkge1xuXG5cbiAgICAvKipzZWNyZXQga2V5IHdvcmtlcyBoZXJlICovXG4gICAgdGhpcy5zZWNyZXQgPSB0aGlzLnJhbmRvbVN0cmluZyg5LCAnYUEjIScpO1xuICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ3NlY3JldCcsIHRoaXMuc2VjcmV0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjcmV0JywgdGhpcy5zZWNyZXQpO1xuICAgIC8vIHRoaXMuc3RhdGVHcm91cCA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgIC8vIC5waXBlKFxuICAgIC8vICAgc3RhcnRXaXRoKCcnKSxcbiAgICAvLyAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgIC8vICk7XG5cbiAgICB0aGlzLmxvYWRlciA9IDE7XG4gICAgbGV0IHg6IGFueTtcblxuICAgIGZvciAoeCBpbiB0aGlzLmxvZ2luRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5sb2dpbmZsYWcgPSB0cnVlO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xuICAgICAgZGF0YS5sb2dpbl9kYXRhID0gdGhpcy5sb2dpbl9pcF9pbmZvO1xuICAgICAgZGF0YS5sb2dpbl90aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkTG9naW4oZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCdqd3RUb2tlbicsIHJlc3BvbnNlLnRva2VuKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0VG9rZW4nLCByZXNwb25zZS50b2tlbik7XG4gICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PSB0aGlzLmRlZmF1bHRVcmxWYWx1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkxIGluIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbVswXS50eXBlID09PSB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0udHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXlzLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS5jb29raWVzKSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlLml0ZW1bMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldChrZXlzLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleXMsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykgPT0gbnVsbCB8fCB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdyZWRpcmVjdFVybCcpID09ICcnIHx8IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykgPT0gdW5kZWZpbmVkIHx8IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0ucm91dGVyTmF2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdyZWRpcmVjdFVybCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gdGhpcy5sb2FkZXIgPSAwO1xuXG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcbiAgICAgICAgICB0aGlzLmxvZ2luZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzcG9uc2UubXNnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIGZvcmdldCBjb21wb25lbnQgXG4gIGZvcmdldHBhc3N3b3JkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUucGF0aCk7XG4gIH1cblxuICBjdXN0b21GdW5jdGlvbihsaW5rOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIGxpbmspO1xuICB9XG5cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFwcENvbXBvbmVudDpPbkRlc3Ryb3lcIik7XG4gICAgdGhpcy5sb2dpbmZsYWcgPSBmYWxzZTtcbiAgfVxuXG59XG4iXX0=