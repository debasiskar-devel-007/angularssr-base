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
export class LoginComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} apiService
     * @param {?} cookieService
     * @param {?} route
     */
    constructor(fb, http, router, apiService, cookieService, route) {
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
        this.currentUrl = this.router.url;
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
            ;
        }));
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.redirect_url = params['path'];
            // console.log('this.redirect_url',this.redirect_url)
        }));
        /**secret key workes here */
        this.secret = this.randomString(9, 'aA#!');
        this.cookieService.set('secret', this.secret);
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    /**
     * @param {?} forLoaderVal
     * @return {?}
     */
    set forLoader(forLoaderVal) {
        this.loader = (forLoaderVal) || '<no name set>';
        this.loader = forLoaderVal;
        // console.log('++++',this.loader)
        // console.log('++++-----',this.loader)
    }
    /**
     * @param {?} fromTitleVal
     * @return {?}
     */
    set fromTitle(fromTitleVal) {
        this.fromTitleValue = (fromTitleVal) || '<no name set>';
        this.fromTitleValue = fromTitleVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} buttonNameVal
     * @return {?}
     */
    set buttonName(buttonNameVal) {
        this.buttonNameValue = (buttonNameVal) || '<no name set>';
        this.buttonNameValue = buttonNameVal;
    }
    /**
     * @param {?} fullUrlVal
     * @return {?}
     */
    set fullUrl(fullUrlVal) {
        this.serverURL = (fullUrlVal) || '<no name set>';
        this.serverURL = fullUrlVal;
    }
    /**
     * @param {?} endpointVal
     * @return {?}
     */
    set endpoint(endpointVal) {
        this.endpointValue = endpointVal;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set cookieSet(v) {
        this.cookieSetValue = v;
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set signUpRouteingUrl(routeingUrlval) {
        this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.signUpRouteingUrlValue = routeingUrlval;
        // console.log(this.signUpRouteingUrlValue)
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set forgetRouteingUrl(routeingUrlval) {
        this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.forgetRouteingUrlValue = routeingUrlval;
        // console.log(this.forgetRouteingUrlValue)
    }
    /**
     * @param {?} routerStatusval
     * @return {?}
     */
    set routerStatus(routerStatusval) {
        this.routerStatusValue = (routerStatusval) || '<no name set>';
        this.routerStatusValue = routerStatusval;
        // console.log(this.routerStatusValue)
    }
    /**
     * @param {?} defaultUrlVal
     * @return {?}
     */
    set defaultLoginUrl(defaultUrlVal) {
        this.defaultUrlValue = (defaultUrlVal) || '<no name set>';
        this.defaultUrlValue = defaultUrlVal;
        // console.log(this.defaultUrlValue)
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set ipinfoid(id) {
        this.ipinfoidValue = id;
        // console.log(this.ipinfoidValue)
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        var url = "https://ipinfo.io/?format=json&token=" + this.ipinfoidValue;
        this.http.get(url).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.login_ip_info = res;
        }));
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL); // set the server url 
        }), 50);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.endpointValue); // set the endpoint
        }), 50);
    }
    /**
     * @param {?} length
     * @param {?} chars
     * @return {?}
     */
    randomString(length, chars) {
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
    }
    /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    loginFormSubmit() {
        this.loader = 1;
        /** @type {?} */
        let x;
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            let data = this.loginForm.value;
            data.login_data = this.login_ip_info;
            data.login_time = new Date().getTime();
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.cookieService.set('jwtToken', response.token);
                    if (this.router.url == this.defaultUrlValue) {
                        for (const key1 in this.routerStatusValue.data) {
                            if (response.item[0].type === this.routerStatusValue.data[key1].type) {
                                for (let [keys, values] of Object.entries(this.routerStatusValue.data[key1].cookies)) {
                                    for (let [key, value] of Object.entries(response.item[0])) {
                                        if (values == key) {
                                            this.cookieService.set(keys, JSON.stringify(value));
                                        }
                                    }
                                }
                                if (this.cookieService.get('redirectUrl') == null || this.cookieService.get('redirectUrl') == '' || this.cookieService.get('redirectUrl') == undefined || this.cookieService.get('redirectUrl').length < 1) {
                                    this.router.navigateByUrl('/' + this.routerStatusValue.data[key1].routerNav);
                                }
                                else {
                                    this.router.navigateByUrl(this.cookieService.get('redirectUrl'));
                                }
                            }
                        }
                    }
                    else {
                        this.router.navigateByUrl(this.redirect_url);
                    }
                    this.loader = 0;
                    // this is use for reset the from
                    this.formDirective.resetForm();
                    this.message = '';
                }
                else {
                    // display error message on html
                    this.message = response.msg;
                }
            }));
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.loginForm.controls[val].markAsUntouched();
    }
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    forgetpassword() {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue.path);
    }
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    signup() {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue.path);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    customFunction(link) {
        this.router.navigateByUrl('/' + link);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-login',
                template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n            <img [src]=\"logoValue\">\n        </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\"\n                    (blur)=\"inputUntouched('email')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].errors.required && loginForm.controls['email'].touched\">\n                    Email can not be blank</mat-error>\n                    <mat-error *ngIf=\"!loginForm.controls['email'].valid && !loginForm.controls['email'].errors.required\">\n                        Please enter a valid email</mat-error>\n            </mat-form-field>\n            \n          \n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\"\n                    (blur)=\"inputUntouched('password')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password can not be blank</mat-error>\n            </mat-form-field>\n\n\n\n            <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Login</button>\n\n\n\n            <span class=\"signupfooter\">\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl =='' \"\n                    (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink ==''  && signUpRouteingUrlValue.path ==''\"\n                    [attr.href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\"\n                    (click)=\"signup()\">Sign Up</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\"\n                    (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\"\n                    [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\"\n                    (click)=\"forgetpassword()\">Forget Password</a>\n\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ApiService },
    { type: CookieService },
    { type: ActivatedRoute }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBMkd6QixZQUFtQixFQUFlLEVBQ3hCLElBQWdCLEVBQ2hCLE1BQWMsRUFDZCxVQUFzQixFQUN0QixhQUE0QixFQUM1QixLQUFxQjtRQUxaLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQS9HeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FB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TCxLQUFLO3lCQUlQLEtBQUs7c0JBTUgsS0FBSzt1QkFNTCxLQUFLO3dCQU1QLEtBQUs7Z0NBUUgsS0FBSztnQ0FRTCxLQUFLOzJCQU9MLEtBQUs7OEJBT0wsS0FBSzt1QkFPTCxLQUFLOzs7O0lBekZOLGlDQUF5Qjs7SUFFekIsdUNBQWlFOztJQUVqRSx3Q0FBZ0M7O0lBQ2hDLG1DQUEyQjs7SUFDM0IsZ0RBQXdDOztJQUN4QyxnREFBd0M7O0lBQ3hDLDJDQUFtQzs7SUFDbkMsdUNBQTBCOztJQUMxQixtQ0FBMkI7O0lBQzNCLHdDQUFnQzs7SUFDaEMseUNBQWlDOztJQUNqQyx5Q0FBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7SUFDM0IsZ0NBQWtCOztJQXlFbEIsdUNBQStCOztJQU8vQix1Q0FBeUI7O0lBSXpCLG1DQUE0Qjs7SUFDNUIsc0NBQThCOztJQUM5QixzQ0FBNkI7Ozs7O0lBQzdCLHFDQUF3Qzs7Ozs7SUFDeEMsb0NBQXVDOztJQUczQiw0QkFBc0I7O0lBQy9CLDhCQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixvQ0FBNkI7O0lBQzdCLHVDQUFtQzs7SUFDbkMsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgTWluTGVuZ3RoVmFsaWRhdG9yLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZnJvbVRpdGxlVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJztcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZXJTdGF0dXNWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBlbmRwb2ludFZhbHVlOiBhbnk7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgY29va2llU2V0VmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgYnV0dG9uTmFtZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGRlZmF1bHRVcmxWYWx1ZSA9ICcnO1xuICBwcml2YXRlIGxvYWRlcjogYW55ID0gbnVsbDtcbiAgcHVibGljIHNlY3JldDphbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JMb2FkZXIoZm9yTG9hZGVyVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRlciA9IChmb3JMb2FkZXJWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxvYWRlciA9IGZvckxvYWRlclZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycsdGhpcy5sb2FkZXIpXG4gICAgLy8gY29uc29sZS5sb2coJysrKystLS0tLScsdGhpcy5sb2FkZXIpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXG4gIHNldCBmcm9tVGl0bGUoZnJvbVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gKGZyb21UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG4gIHNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cbkBJbnB1dCgpXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcbn1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZ1bGxVcmwoZnVsbFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoZnVsbFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcblxuICB9XG4gIEBJbnB1dCgpXG5cbiAgc2V0IGVuZHBvaW50KGVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcbiAgfVxuXG5ASW5wdXQoKVxuXG5wdWJsaWMgc2V0IGNvb2tpZVNldCh2IDogYW55KSB7XG4gIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xufVxuXG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlclN0YXR1cyhyb3V0ZXJTdGF0dXN2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyU3RhdHVzVmFsdWUgPSAocm91dGVyU3RhdHVzdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IHJvdXRlclN0YXR1c3ZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRMb2dpblVybChkZWZhdWx0VXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRVcmxWYWx1ZSA9IChkZWZhdWx0VXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kZWZhdWx0VXJsVmFsdWUgPSBkZWZhdWx0VXJsVmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGVmYXVsdFVybFZhbHVlKVxuICB9XG4gIHB1YmxpYyBpcGluZm9pZFZhbHVlOiBhbnkgPSAnJztcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpcGluZm9pZChpZDphbnkpIHtcbiAgICB0aGlzLmlwaW5mb2lkVmFsdWUgPSBpZDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlwaW5mb2lkVmFsdWUpXG4gIH1cblxuICBwdWJsaWMgbG9naW5faXBfaW5mbzphbnk7XG5cblxuXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHByb2plY3RfbmFtZTogYW55ID0gJyc7XG4gIHB1YmxpYyByZWRpcmVjdF91cmw6YW55ID0gJyc7XG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBjdXJyZW50VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcbiAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICBcblxuXG4gICAgICB0aGlzLmN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzVXJsID0gdGhpcy5jdXJyZW50VXJsO1xuICAgICAgICAgIHRoaXMuY3VycmVudFVybCA9IGV2ZW50LnVybDtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PntcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJsID0gcGFyYW1zWydwYXRoJ107XG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5yZWRpcmVjdF91cmwnLHRoaXMucmVkaXJlY3RfdXJsKVxuICAgIH0pO1xuICAgICAgICAvKipzZWNyZXQga2V5IHdvcmtlcyBoZXJlICovXG4gICAgICAgIHRoaXMuc2VjcmV0PXRoaXMucmFuZG9tU3RyaW5nKDksJ2FBIyEnKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnc2VjcmV0Jyx0aGlzLnNlY3JldCk7XG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdmFyIHVybDphbnkgPSBcImh0dHBzOi8vaXBpbmZvLmlvLz9mb3JtYXQ9anNvbiZ0b2tlbj1cIisgdGhpcy5pcGluZm9pZFZhbHVlO1xuICAgIHRoaXMuaHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5sb2dpbl9pcF9pbmZvID0gcmVzO1xuICAgIH0pO1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vIGNsZWFyIHRoZSBlbmRwb2ludCBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmVuZHBvaW50VmFsdWUpOyAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuXG4gIH1cbiAgcmFuZG9tU3RyaW5nKGxlbmd0aCwgY2hhcnMpIHtcbiAgICB2YXIgbWFzayA9ICcnO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdhJykgPiAtMSkgbWFzayArPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdBJykgPiAtMSkgbWFzayArPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCcjJykgPiAtMSkgbWFzayArPSAnMDEyMzQ1Njc4OSc7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJyEnKSA+IC0xKSBtYXNrICs9ICd+YCFAIyQlXiYqKClfKy09e31bXTpcIjtcXCc8Pj8sLi98XFxcXCc7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBtYXNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hc2subGVuZ3RoKV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuIFxuLyoqKioqKioqKiBMb2dpbiBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgbG9naW5Gb3JtU3VibWl0KCkge1xuICAgIHRoaXMubG9hZGVyID0gMTtcbiAgICBsZXQgeDogYW55O1xuXG4gICAgZm9yICh4IGluIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XG4gICAgICBkYXRhLmxvZ2luX2RhdGEgPSB0aGlzLmxvZ2luX2lwX2luZm87XG4gICAgICBkYXRhLmxvZ2luX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGRMb2dpbihkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnand0VG9rZW4nLCByZXNwb25zZS50b2tlbik7XG4gICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PSB0aGlzLmRlZmF1bHRVcmxWYWx1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkxIGluIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbVswXS50eXBlID09PSB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0udHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciggbGV0ICBba2V5cywgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0uY29va2llcykpe1xuICAgICAgICAgICAgICAgICAgZm9yKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UuaXRlbVswXSkpe1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzID09IGtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldChrZXlzICwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKSA9PSBudWxsIHx8IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykgPT0gJycgfHwgdGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKSA9PSB1bmRlZmluZWQgfHwgdGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKS5sZW5ndGggPDEgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS5yb3V0ZXJOYXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdyZWRpcmVjdFVybCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlciA9IDA7XG5cblxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3BvbnNlLm1zZztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxuICBmb3JnZXRwYXNzd29yZCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZS5wYXRoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBzaWduLVVwIGNvbXBvbmVudCBcbiAgc2lnbnVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xuICB9XG5cbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrIGxpbmspO1xuICB9XG5cbn1cbiJdfQ==