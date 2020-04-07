/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.project_name = '';
        this.redirect_url = '';
        this.previousUrl = undefined;
        this.currentUrl = undefined;
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
        // console.log("++++++++++++++++++++++++++++=________+++++ this.previousUrl",this.previousUrl)
        // console.log("++++++++++++++++++++++++++++=________+++++ this.currentUrl",this.currentUrl)
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // console.log('++++++',params['id']);
            _this.redirect_url = params['path'];
            // if (params['id'] != '' || params['id'] != null) {
            //   this.redirect_url = params['id'];
            // }
            // console.log('redirect_url',this.redirect_url)
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
            console.log('++++-----', this.loader);
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
            console.log(this.routerStatusValue);
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
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.endpointValue); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
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
        this.loader = 1;
        console.log(this.loader);
        /** @type {?} */
        var x;
        // use for validation checking
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            var data = this.loginForm.value;
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = {};
                result = response;
                if (result.status == "success") {
                    _this.cookieService.set('user_details', JSON.stringify(result.item[0]));
                    _this.cookieService.set('jwtToken', result.token);
                    if (_this.router.url == _this.defaultUrlValue) {
                        for (var key in _this.routerStatusValue.data) {
                            if (result.item[0].type === _this.routerStatusValue.data[key].type) {
                                console.warn(_this.routerStatusValue.data[key].routerNav);
                                _this.router.navigateByUrl('/' + _this.routerStatusValue.data[key].routerNav);
                                _this.loader = 0; // navigate to dashboard url 
                                console.log(_this.loader);
                            }
                        }
                    }
                    else {
                        _this.loader = 0;
                        // console.log('++++++ redirect_url//',this.redirect_url);
                        _this.router.navigateByUrl(_this.redirect_url);
                    }
                    _this.loader = 0;
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                    _this.message = '';
                }
                else {
                    // display error message on html
                    _this.message = result.msg;
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
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n            <img [src]=\"logoValue\">\n        </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\"\n                    (blur)=\"inputUntouched('email')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].errors.required && loginForm.controls['email'].touched\">\n                    Email can not be blank</mat-error>\n            </mat-form-field>\n            \n            <mat-error *ngIf=\"!loginForm.controls['email'].valid && !loginForm.controls['email'].errors.required\">\n                Please enter a valid email</mat-error>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\"\n                    (blur)=\"inputUntouched('password')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password can not be blank</mat-error>\n            </mat-form-field>\n\n\n\n            <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Login</button>\n\n\n\n            <span class=\"signupfooter\">\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl =='' \"\n                    (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink ==''  && signUpRouteingUrlValue.path ==''\"\n                    [attr.href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\"\n                    (click)=\"signup()\">Sign Up</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\"\n                    (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\"\n                    [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\"\n                    (click)=\"forgetpassword()\">Forget Password</a>\n\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
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
        defaultLoginUrl: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtuRDtJQTBHRSx3QkFBbUIsRUFBZSxFQUN4QixJQUFnQixFQUNoQixNQUFjLEVBQ2QsVUFBc0IsRUFDdEIsYUFBNEIsRUFDNUIsS0FBcUI7UUFML0IsaUJBNkJDO1FBN0JrQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF6R3hCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQiwyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsMkJBQXNCLEdBQVEsRUFBRSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQVEsRUFBRSxD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S0FBSzs7SUEwSVIscUJBQUM7Q0FBQSxBQWxPRCxJQWtPQztTQTdOWSxjQUFjOzs7SUFDekIsaUNBQXlCOztJQUV6Qix1Q0FBaUU7O0lBRWpFLHdDQUFnQzs7SUFDaEMsbUNBQTJCOztJQUMzQixnREFBd0M7O0lBQ3hDLGdEQUF3Qzs7SUFDeEMsMkNBQW1DOztJQUNuQyx1Q0FBMEI7O0lBQzFCLG1DQUEyQjs7SUFDM0Isd0NBQWdDOztJQUNoQyx5Q0FBaUM7O0lBQ2pDLHlDQUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOztJQStFM0IsbUNBQTRCOztJQUM1QixzQ0FBOEI7O0lBQzlCLHNDQUE2Qjs7Ozs7SUFDN0IscUNBQXdDOzs7OztJQUN4QyxvQ0FBdUM7O0lBRzNCLDRCQUFzQjs7SUFDL0IsOEJBQXVCOztJQUN2QixnQ0FBcUI7O0lBQ3JCLG9DQUE2Qjs7SUFDN0IsdUNBQW1DOztJQUNuQywrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBNaW5MZW5ndGhWYWxpZGF0b3IsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmcm9tVGl0bGVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnO1xuICBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBmb3JnZXRSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHJvdXRlclN0YXR1c1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGVuZHBvaW50VmFsdWU6IGFueTtcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBjb29raWVTZXRWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBidXR0b25OYW1lVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZGVmYXVsdFVybFZhbHVlID0gJyc7XG4gIHByaXZhdGUgbG9hZGVyOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JMb2FkZXIoZm9yTG9hZGVyVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRlciA9IChmb3JMb2FkZXJWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxvYWRlciA9IGZvckxvYWRlclZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycsdGhpcy5sb2FkZXIpXG4gICAgY29uc29sZS5sb2coJysrKystLS0tLScsdGhpcy5sb2FkZXIpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXG4gIHNldCBmcm9tVGl0bGUoZnJvbVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gKGZyb21UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG4gIHNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cbkBJbnB1dCgpXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcbn1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZ1bGxVcmwoZnVsbFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoZnVsbFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcblxuICB9XG4gIEBJbnB1dCgpXG5cbiAgc2V0IGVuZHBvaW50KGVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcbiAgfVxuXG5ASW5wdXQoKVxuXG5wdWJsaWMgc2V0IGNvb2tpZVNldCh2IDogYW55KSB7XG4gIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xufVxuXG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlclN0YXR1cyhyb3V0ZXJTdGF0dXN2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyU3RhdHVzVmFsdWUgPSAocm91dGVyU3RhdHVzdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IHJvdXRlclN0YXR1c3ZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0TG9naW5VcmwoZGVmYXVsdFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VXJsVmFsdWUgPSAoZGVmYXVsdFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVmYXVsdFVybFZhbHVlID0gZGVmYXVsdFVybFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlZmF1bHRVcmxWYWx1ZSlcbiAgfVxuIFxuXG5cblxuXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHByb2plY3RfbmFtZTogYW55ID0gJyc7XG4gIHB1YmxpYyByZWRpcmVjdF91cmw6YW55ID0gJyc7XG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBjdXJyZW50VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcbiAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICBcbiAgICAgIHRoaXMuY3VycmVudFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gZXZlbnQudXJsO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrPV9fX19fX19fKysrKysgdGhpcy5wcmV2aW91c1VybFwiLHRoaXMucHJldmlvdXNVcmwpXG4gICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrPV9fX19fX19fKysrKysgdGhpcy5jdXJyZW50VXJsXCIsdGhpcy5jdXJyZW50VXJsKVxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcrKysrKysnLHBhcmFtc1snaWQnXSk7XG4gICAgICB0aGlzLnJlZGlyZWN0X3VybCA9IHBhcmFtc1sncGF0aCddO1xuICAgICAgLy8gaWYgKHBhcmFtc1snaWQnXSAhPSAnJyB8fCBwYXJhbXNbJ2lkJ10gIT0gbnVsbCkge1xuICAgICAgLy8gICB0aGlzLnJlZGlyZWN0X3VybCA9IHBhcmFtc1snaWQnXTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdF91cmwnLHRoaXMucmVkaXJlY3RfdXJsKVxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyBjbGVhciB0aGUgZW5kcG9pbnQgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5lbmRwb2ludFZhbHVlKTsgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuXG4gXG4vKioqKioqKioqIExvZ2luIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovIFxuICBsb2dpbkZvcm1TdWJtaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubG9hZGVyKVxuICAgIGxldCB4OiBhbnk7XG4gICAgLy8gdXNlIGZvciB2YWxpZGF0aW9uIGNoZWNraW5nXG5cbiAgICBmb3IgKHggaW4gdGhpcy5sb2dpbkZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcblxuICAgICBcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmxvZ2luRm9ybS52YWx1ZTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGRMb2dpbihkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgndXNlcl9kZXRhaWxzJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0Lml0ZW1bMF0pKTtcbiAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCdqd3RUb2tlbicsIHJlc3VsdC50b2tlbik7XG4gICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PSB0aGlzLmRlZmF1bHRVcmxWYWx1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhKSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuaXRlbVswXS50eXBlID09PSB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5XS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnJvdXRlck5hdik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5XS5yb3V0ZXJOYXYpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyID0gMDsgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkZXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IDA7IFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJysrKysrKyByZWRpcmVjdF91cmwvLycsdGhpcy5yZWRpcmVjdF91cmwpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJlZGlyZWN0X3VybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZXIgPSAwO1xuXG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIGZvcmdldCBjb21wb25lbnQgXG4gIGZvcmdldHBhc3N3b3JkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUucGF0aCk7XG4gIH1cblxuICBjdXN0b21GdW5jdGlvbihsaW5rOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJysgbGluayk7XG4gIH1cblxufVxuIl19