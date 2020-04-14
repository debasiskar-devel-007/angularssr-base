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
        //console.log('++++-----',this.loader)
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
        // console.log(this.defaultUrlValue)
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
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
                    this.cookieService.set('user_details', JSON.stringify(result.item[0]));
                    this.cookieService.set('jwtToken', result.token);
                    if (this.router.url == this.defaultUrlValue) {
                        for (const key in this.routerStatusValue.data) {
                            if (result.item[0].type === this.routerStatusValue.data[key].type) {
                                console.warn(this.routerStatusValue.data[key].routerNav);
                                this.router.navigateByUrl('/' + this.routerStatusValue.data[key].routerNav);
                                this.loader = 0; // navigate to dashboard url 
                                console.log(this.loader);
                            }
                        }
                    }
                    else {
                        this.loader = 0;
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
                    this.message = result.msg;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBcUd6QixZQUFtQixFQUFlLEVBQ3hCLElBQWdCLEVBQ2hCLE1BQWMsRUFDZCxVQUFzQixFQUN0QixhQUE0QixFQUM1QixLQUFxQjtRQUxaLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXpHeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FB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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIE1pbkxlbmd0aFZhbGlkYXRvciwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgcHVibGljIGZyb21UaXRsZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVSTDogYW55ID0gJyc7XG4gIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGZvcmdldFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgcm91dGVyU3RhdHVzVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZW5kcG9pbnRWYWx1ZTogYW55O1xuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGNvb2tpZVNldFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGJ1dHRvbk5hbWVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBkZWZhdWx0VXJsVmFsdWUgPSAnJztcbiAgcHJpdmF0ZSBsb2FkZXI6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBzZWNyZXQ6YW55O1xuICBASW5wdXQoKVxuICBzZXQgZm9yTG9hZGVyKGZvckxvYWRlclZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkZXIgPSAoZm9yTG9hZGVyVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5sb2FkZXIgPSBmb3JMb2FkZXJWYWw7XG4gICAgLy8gY29uc29sZS5sb2coJysrKysnLHRoaXMubG9hZGVyKVxuICAgIC8vY29uc29sZS5sb2coJysrKystLS0tLScsdGhpcy5sb2FkZXIpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXG4gIHNldCBmcm9tVGl0bGUoZnJvbVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gKGZyb21UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG4gIHNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cbkBJbnB1dCgpXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcbn1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZ1bGxVcmwoZnVsbFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoZnVsbFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcblxuICB9XG4gIEBJbnB1dCgpXG5cbiAgc2V0IGVuZHBvaW50KGVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcbiAgfVxuXG5ASW5wdXQoKVxuXG5wdWJsaWMgc2V0IGNvb2tpZVNldCh2IDogYW55KSB7XG4gIHRoaXMuY29va2llU2V0VmFsdWUgPSB2O1xufVxuXG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlclN0YXR1cyhyb3V0ZXJTdGF0dXN2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyU3RhdHVzVmFsdWUgPSAocm91dGVyU3RhdHVzdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IHJvdXRlclN0YXR1c3ZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlclN0YXR1c1ZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0TG9naW5VcmwoZGVmYXVsdFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VXJsVmFsdWUgPSAoZGVmYXVsdFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVmYXVsdFVybFZhbHVlID0gZGVmYXVsdFVybFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlZmF1bHRVcmxWYWx1ZSlcbiAgfVxuIFxuXG5cblxuXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHByb2plY3RfbmFtZTogYW55ID0gJyc7XG4gIHB1YmxpYyByZWRpcmVjdF91cmw6YW55ID0gJyc7XG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBjdXJyZW50VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcbiAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICBcbiAgICAgIHRoaXMuY3VycmVudFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gZXZlbnQudXJsO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrPV9fX19fX19fKysrKysgdGhpcy5wcmV2aW91c1VybFwiLHRoaXMucHJldmlvdXNVcmwpXG4gICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKysrPV9fX19fX19fKysrKysgdGhpcy5jdXJyZW50VXJsXCIsdGhpcy5jdXJyZW50VXJsKVxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcrKysrKysnLHBhcmFtc1snaWQnXSk7XG4gICAgICB0aGlzLnJlZGlyZWN0X3VybCA9IHBhcmFtc1sncGF0aCddO1xuICAgICAgLy8gaWYgKHBhcmFtc1snaWQnXSAhPSAnJyB8fCBwYXJhbXNbJ2lkJ10gIT0gbnVsbCkge1xuICAgICAgLy8gICB0aGlzLnJlZGlyZWN0X3VybCA9IHBhcmFtc1snaWQnXTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdF91cmwnLHRoaXMucmVkaXJlY3RfdXJsKVxuICAgIH0pO1xuICAgIC8qKnNlY3JldCBrZXkgd29ya2VzIGhlcmUgKi9cbiAgICB0aGlzLnNlY3JldD10aGlzLnJhbmRvbVN0cmluZyg5LCdhQSMhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWNyZXQpO1xuICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ3NlY3JldCcsdGhpcy5zZWNyZXQpO1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZW5kcG9pbnRWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cblxuICByYW5kb21TdHJpbmcobGVuZ3RoLCBjaGFycykge1xuICAgIHZhciBtYXNrID0gJyc7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJ2EnKSA+IC0xKSBtYXNrICs9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJ0EnKSA+IC0xKSBtYXNrICs9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJyMnKSA+IC0xKSBtYXNrICs9ICcwMTIzNDU2Nzg5JztcbiAgICBpZiAoY2hhcnMuaW5kZXhPZignIScpID4gLTEpIG1hc2sgKz0gJ35gIUAjJCVeJiooKV8rLT17fVtdOlwiO1xcJzw+PywuL3xcXFxcJztcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aDsgaSA+IDA7IC0taSkgcmVzdWx0ICs9IG1hc2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWFzay5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbi8qKioqKioqKiogTG9naW4gRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXG4gIGxvZ2luRm9ybVN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IDE7XG4gICAgY29uc29sZS5sb2codGhpcy5sb2FkZXIpXG4gICAgbGV0IHg6IGFueTtcbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcblxuICAgIGZvciAoeCBpbiB0aGlzLmxvZ2luRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuXG4gICAgIFxuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZExvZ2luKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICBcbiAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCd1c2VyX2RldGFpbHMnLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuaXRlbVswXSkpO1xuICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ2p3dFRva2VuJywgcmVzdWx0LnRva2VuKTtcbiAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09IHRoaXMuZGVmYXVsdFVybFZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlLmRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pdGVtWzBdLnR5cGUgPT09IHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleV0ucm91dGVyTmF2KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnJvdXRlck5hdik7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSAwOyAgICAgLy8gbmF2aWdhdGUgdG8gZGFzaGJvYXJkIHVybCBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvYWRlcilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gMDsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnKysrKysrIHJlZGlyZWN0X3VybC8vJyx0aGlzLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlciA9IDA7XG5cblxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcbiAgZm9yZ2V0cGFzc3dvcmQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUucGF0aCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gc2lnbi1VcCBjb21wb25lbnQgXG4gIHNpZ251cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZS5wYXRoKTtcbiAgfVxuXG4gIGN1c3RvbUZ1bmN0aW9uKGxpbms6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKyBsaW5rKTtcbiAgfVxuXG59XG4iXX0=