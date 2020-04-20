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
        // console.log("++++++++++++++++++++++++++++=________+++++ this.previousUrl",this.previousUrl)
        // console.log("++++++++++++++++++++++++++++=________+++++ this.currentUrl",this.currentUrl)
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // console.log('++++++',params['id']);
            this.redirect_url = params['path'];
            // if (params['id'] != '' || params['id'] != null) {
            //   this.redirect_url = params['id'];
            // }
            // console.log('redirect_url',this.redirect_url)
        }));
        /**secret key workes here */
        this.secret = this.randomString(9, 'aA#!');
        console.log(this.secret);
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
        console.log('++++-----', this.loader);
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
        console.log(this.routerStatusValue);
    }
    /**
     * @param {?} defaultUrlVal
     * @return {?}
     */
    set defaultLoginUrl(defaultUrlVal) {
        this.defaultUrlValue = (defaultUrlVal) || '<no name set>';
        this.defaultUrlValue = defaultUrlVal;
        console.log(this.defaultUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.endpointValue); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
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
        console.log(this.loader);
        /** @type {?} */
        let x;
        // use for validation checking
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            let data = this.loginForm.value;
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                console.log(this.routerStatusValue);
                if (response.status == "success") {
                    console.log(this.routerStatusValue.data, this.router.url, this.defaultUrlValue);
                    // this.cookieService.set('user_details', JSON.stringify(response.item[0]));
                    this.cookieService.set('jwtToken', response.token);
                    if (this.router.url == this.defaultUrlValue) {
                        console.log(response, 'response');
                        console.log(this.routerStatusValue.data, this.router.url, this.defaultUrlValue, '1');
                        for (const key1 in this.routerStatusValue.data) {
                            if (response.item[0].type === this.routerStatusValue.data[key1].type) {
                                // console.log(this.routerStatusValue.data[key1].cookies,'cookies');
                                for (let [keys, values] of Object.entries(this.routerStatusValue.data[key1].cookies)) {
                                    for (let [key, value] of Object.entries(response.item[0])) {
                                        if (values == key) {
                                            console.log(key, '-------', value, '-------PP');
                                            console.log(values, '----+++---', keys, '----+++---PP');
                                            this.cookieService.set(keys, JSON.stringify(value));
                                        }
                                    }
                                }
                                // console.log(data, 'cookies')
                                // return;
                                // console.log(response.item[0].type, this.router.url,  this.routerStatusValue.data[key1].type)
                                setTimeout((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.router.navigateByUrl('/' + this.routerStatusValue.data[key1].routerNav);
                                }), 1000);
                                // console.log(this.routerStatusValue.data[key1].routerNav)
                            }
                        }
                    }
                    else {
                        // this.loader = 0; 
                        // console.log('++++++ redirect_url//',this.redirect_url);
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
    defaultLoginUrl: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBcUd6QixZQUFtQixFQUFlLEVBQ3hCLElBQWdCLEVBQ2hCLE1BQWMsRUFDZCxVQUFzQixFQUN0QixhQUE0QixFQUM1QixLQUFxQjtRQUxaLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXpHeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FB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LElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUExUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix5ekhBQXFDOzthQUV0Qzs7OztZQWJtQixXQUFXO1lBQ3RCLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVTtZQUNWLGFBQWE7WUFGTCxjQUFjOzs7NEJBZTVCLFNBQVMsU0FBQyxrQkFBa0I7d0JBYzVCLEtBQUs7d0JBUUwsS0FBSzttQkFNTCxLQUFLO3lCQUlQLEtBQUs7c0JBTUgsS0FBSzt1QkFNTCxLQUFLO3dCQU1QLEtBQUs7Z0NBUUgsS0FBSztnQ0FRTCxLQUFLOzJCQU9MLEtBQUs7OEJBT0wsS0FBSzs7OztJQWxGTixpQ0FBeUI7O0lBRXpCLHVDQUFpRTs7SUFFakUsd0NBQWdDOztJQUNoQyxtQ0FBMkI7O0lBQzNCLGdEQUF3Qzs7SUFDeEMsZ0RBQXdDOztJQUN4QywyQ0FBbUM7O0lBQ25DLHVDQUEwQjs7SUFDMUIsbUNBQTJCOztJQUMzQix3Q0FBZ0M7O0lBQ2hDLHlDQUFpQzs7SUFDakMseUNBQTRCOzs7OztJQUM1QixnQ0FBMkI7O0lBQzNCLGdDQUFrQjs7SUE4RWxCLG1DQUE0Qjs7SUFDNUIsc0NBQThCOztJQUM5QixzQ0FBNkI7Ozs7O0lBQzdCLHFDQUF3Qzs7Ozs7SUFDeEMsb0NBQXVDOztJQUczQiw0QkFBc0I7O0lBQy9CLDhCQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixvQ0FBNkI7O0lBQzdCLHVDQUFtQzs7SUFDbkMsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgTWluTGVuZ3RoVmFsaWRhdG9yLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZnJvbVRpdGxlVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJztcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZXJTdGF0dXNWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBlbmRwb2ludFZhbHVlOiBhbnk7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgY29va2llU2V0VmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgYnV0dG9uTmFtZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGRlZmF1bHRVcmxWYWx1ZSA9ICcnO1xuICBwcml2YXRlIGxvYWRlcjogYW55ID0gbnVsbDtcbiAgcHVibGljIHNlY3JldDphbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JMb2FkZXIoZm9yTG9hZGVyVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRlciA9IChmb3JMb2FkZXJWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxvYWRlciA9IGZvckxvYWRlclZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycsdGhpcy5sb2FkZXIpXG4gICAgY29uc29sZS5sb2coJysrKystLS0tLScsdGhpcy5sb2FkZXIpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXG4gIHNldCBmcm9tVGl0bGUoZnJvbVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gKGZyb21UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG4gIHNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cbkBJbnB1dCgpXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcbn1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZ1bGxVcmwoZnVsbFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoZnVsbFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcblxuICB9XG4gIEBJbnB1dCgpXG5cbiAgc2V0IGVuZHBvaW50KGVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcbiAgfVxuXG5ASW5wdXQoKVxuXG5wdWJsaWMgc2V0IGNvb2tpZVNldCh2IDogYW55KSB7XG4gIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xufVxuXG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlclN0YXR1cyhyb3V0ZXJTdGF0dXN2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyU3RhdHVzVmFsdWUgPSAocm91dGVyU3RhdHVzdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IHJvdXRlclN0YXR1c3ZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRMb2dpblVybChkZWZhdWx0VXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRVcmxWYWx1ZSA9IChkZWZhdWx0VXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kZWZhdWx0VXJsVmFsdWUgPSBkZWZhdWx0VXJsVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGVmYXVsdFVybFZhbHVlKVxuICB9XG4gXG5cblxuXG5cbiAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgcHJvamVjdF9uYW1lOiBhbnkgPSAnJztcbiAgcHVibGljIHJlZGlyZWN0X3VybDphbnkgPSAnJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGN1cnJlbnRVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxuICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgIFxuICAgICAgdGhpcy5jdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1VybCA9IHRoaXMuY3VycmVudFVybDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSBldmVudC51cmw7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrKysrKysrKysrKys9X19fX19fX18rKysrKyB0aGlzLnByZXZpb3VzVXJsXCIsdGhpcy5wcmV2aW91c1VybClcbiAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrKysrKysrKysrKys9X19fX19fX18rKysrKyB0aGlzLmN1cnJlbnRVcmxcIix0aGlzLmN1cnJlbnRVcmwpXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+e1xuICAgICAgLy8gY29uc29sZS5sb2coJysrKysrKycscGFyYW1zWydpZCddKTtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJsID0gcGFyYW1zWydwYXRoJ107XG4gICAgICAvLyBpZiAocGFyYW1zWydpZCddICE9ICcnIHx8IHBhcmFtc1snaWQnXSAhPSBudWxsKSB7XG4gICAgICAvLyAgIHRoaXMucmVkaXJlY3RfdXJsID0gcGFyYW1zWydpZCddO1xuICAgICAgLy8gfVxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlZGlyZWN0X3VybCcsdGhpcy5yZWRpcmVjdF91cmwpXG4gICAgfSk7XG4gICAgICAgIC8qKnNlY3JldCBrZXkgd29ya2VzIGhlcmUgKi9cbiAgICAgICAgdGhpcy5zZWNyZXQ9dGhpcy5yYW5kb21TdHJpbmcoOSwnYUEjIScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3JldCk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ3NlY3JldCcsdGhpcy5zZWNyZXQpO1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZW5kcG9pbnRWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cbiAgcmFuZG9tU3RyaW5nKGxlbmd0aCwgY2hhcnMpIHtcbiAgICB2YXIgbWFzayA9ICcnO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdhJykgPiAtMSkgbWFzayArPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCdBJykgPiAtMSkgbWFzayArPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICAgIGlmIChjaGFycy5pbmRleE9mKCcjJykgPiAtMSkgbWFzayArPSAnMDEyMzQ1Njc4OSc7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJyEnKSA+IC0xKSBtYXNrICs9ICd+YCFAIyQlXiYqKClfKy09e31bXTpcIjtcXCc8Pj8sLi98XFxcXCc7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBtYXNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hc2subGVuZ3RoKV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuIFxuLyoqKioqKioqKiBMb2dpbiBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgbG9naW5Gb3JtU3VibWl0KCkge1xuICAgIHRoaXMubG9hZGVyID0gMTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvYWRlcilcbiAgICBsZXQgeDogYW55O1xuICAgIC8vIHVzZSBmb3IgdmFsaWRhdGlvbiBjaGVja2luZ1xuXG4gICAgZm9yICh4IGluIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG5cbiAgICAgXG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkTG9naW4oZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlKVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGEsIHRoaXMucm91dGVyLnVybCwgIHRoaXMuZGVmYXVsdFVybFZhbHVlKVxuICAgICAgICAgIC8vIHRoaXMuY29va2llU2VydmljZS5zZXQoJ3VzZXJfZGV0YWlscycsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLml0ZW1bMF0pKTtcbiAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCdqd3RUb2tlbicsIHJlc3BvbnNlLnRva2VuKTtcbiAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09IHRoaXMuZGVmYXVsdFVybFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwncmVzcG9uc2UnKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhLCB0aGlzLnJvdXRlci51cmwsICB0aGlzLmRlZmF1bHRVcmxWYWx1ZSwgJzEnKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkxIGluIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbVswXS50eXBlID09PSB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0udHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS5jb29raWVzLCdjb29raWVzJyk7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgIFtrZXlzLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS5jb29raWVzKSl7XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZS5pdGVtWzBdKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMgPT0ga2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwgJy0tLS0tLS0nLCB2YWx1ZSwgJy0tLS0tLS1QUCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMsJy0tLS0rKystLS0nLGtleXMsJy0tLS0rKystLS1QUCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KGtleXMgLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICdjb29raWVzJylcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaXRlbVswXS50eXBlLCB0aGlzLnJvdXRlci51cmwsICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGFba2V5MV0udHlwZSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleTFdLnJvdXRlck5hdik7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleTFdLnJvdXRlck5hdilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9hZGVyID0gMDsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnKysrKysrIHJlZGlyZWN0X3VybC8vJyx0aGlzLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlciA9IDA7XG5cblxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3BvbnNlLm1zZztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxuICBmb3JnZXRwYXNzd29yZCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZS5wYXRoKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBzaWduLVVwIGNvbXBvbmVudCBcbiAgc2lnbnVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlLnBhdGgpO1xuICB9XG5cbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrIGxpbmspO1xuICB9XG5cbn1cbiJdfQ==