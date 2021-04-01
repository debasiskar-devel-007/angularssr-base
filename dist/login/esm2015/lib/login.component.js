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
        this.loginflag = false;
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
        let x;
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            this.loginflag = true;
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
                    localStorage.setItem('jwtToken', response.token);
                    if (this.router.url == this.defaultUrlValue) {
                        for (const key1 in this.routerStatusValue.data) {
                            if (response.item[0].type === this.routerStatusValue.data[key1].type) {
                                for (let [keys, values] of Object.entries(this.routerStatusValue.data[key1].cookies)) {
                                    for (let [key, value] of Object.entries(response.item[0])) {
                                        if (values == key) {
                                            this.cookieService.set(keys, JSON.stringify(value));
                                            localStorage.setItem(keys, JSON.stringify(value));
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
                    // this.loader = 0;
                    // this is use for reset the from
                    this.formDirective.resetForm();
                    this.message = '';
                }
                else {
                    // display error message on html
                    this.loginflag = false;
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log("AppComponent:OnDestroy");
        this.loginflag = false;
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-login',
                template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n            <img [src]=\"logoValue\">\n        </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n                <mat-error *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].errors.required && loginForm.controls['email'].touched\">\n                    Email can not be blank</mat-error>\n                <mat-error *ngIf=\"!loginForm.controls['email'].valid && !loginForm.controls['email'].errors.required\">\n                    Please enter a valid email</mat-error>\n            </mat-form-field>\n\n\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\" [ngClass]=\"{'disabled': loginflag}\">{{buttonNameValue}}</button>\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\" [attr.disabled]=\"loginflag ? 'disabled' : ''\">Login</button>\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loginflag\"></mat-progress-bar>\n\n            <span class=\"signupfooter\">\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl =='' \"\n                    (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink ==''  && signUpRouteingUrlValue.path ==''\"\n                    [attr.href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\"\n                    (click)=\"signup()\">Sign Up</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.customURl ==''\"\n                    (click)=\"forgetpassword()\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName !='' && forgetRouteingUrlValue.customLink !='' && forgetRouteingUrlValue.path =='' \"\n                    (click)=\"customFunction(forgetRouteingUrlValue.customLink)\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"forgetRouteingUrlValue.customURl !='' && forgetRouteingUrlValue.customLink =='' && forgetRouteingUrlValue.path ==''\"\n                    [href]=\"forgetRouteingUrlValue.customURl\">{{forgetRouteingUrlValue.buttonName}}</a>\n\n\n                <a *ngIf=\"forgetRouteingUrlValue.buttonName =='' && forgetRouteingUrlValue.customLink ==''\"\n                    (click)=\"forgetpassword()\">Forget Password</a>\n\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}.disabled{background:#ddd}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBMkd6QixZQUFtQixFQUFlLEVBQ3pCLElBQWdCLEVBQ2hCLE1BQWMsRUFDZCxVQUFzQixFQUN0QixhQUE0QixFQUM1QixLQUFxQjtRQUxYLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQS9HdkIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFRLElBQUksQ0FBQztRQTBFcEIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFZeEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUNoQyxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBVy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUM3QjtZQUFBLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxxREFBcUQ7UUFDdkQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLDBFQUEwRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RKLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBbkhELElBQ0ksU0FBUyxDQUFDLFlBQWlCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0Isa0NBQWtDO1FBQ2xDLHVDQUF1QztJQUN6QyxDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLFlBQWlCO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7SUFFckMsQ0FBQzs7Ozs7SUFDRCxJQUNJLElBQUksQ0FBQyxPQUFZO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsSUFDSSxVQUFVLENBQUMsYUFBa0I7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLGVBQWUsQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtJQUN0QyxDQUFDOzs7OztJQUVELElBQ0ksT0FBTyxDQUFDLFVBQWU7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGVBQWUsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUU5QixDQUFDOzs7OztJQUNELElBRUksUUFBUSxDQUFDLFdBQWdCO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsSUFFVyxTQUFTLENBQUMsQ0FBTTtRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUlELElBQ0ksaUJBQWlCLENBQUMsY0FBbUI7UUFDdkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7UUFDN0MsMkNBQTJDO0lBQzdDLENBQUM7Ozs7O0lBR0QsSUFDSSxpQkFBaUIsQ0FBQyxjQUFtQjtRQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDbEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsQ0FBQztRQUM3QywyQ0FBMkM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxJQUNJLFlBQVksQ0FBQyxlQUFvQjtRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztRQUN6QyxzQ0FBc0M7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxJQUNJLGVBQWUsQ0FBQyxhQUFrQjtRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksZUFBZSxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLG9DQUFvQztJQUN0QyxDQUFDOzs7OztJQUVELElBQ1csUUFBUSxDQUFDLEVBQU87UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsa0NBQWtDO0lBQ3BDLENBQUM7Ozs7SUF3Q0QsUUFBUTs7WUFFRixHQUFHLEdBQVEsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQU8sdUJBQXVCO1FBQy9ELFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFPLHNCQUFzQjtRQUM1RSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFHUCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBTyxzQkFBc0I7UUFDaEUsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQU8sbUJBQW1CO1FBQy9FLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUVULENBQUM7Ozs7OztJQUNELFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSzs7WUFDcEIsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsSUFBSSxJQUFJLDRCQUE0QixDQUFDO1FBQ2xFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxJQUFJLElBQUksNEJBQTRCLENBQUM7UUFDbEUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLElBQUksSUFBSSxZQUFZLENBQUM7UUFDbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLElBQUksSUFBSSxvQ0FBb0MsQ0FBQzs7WUFDdEUsTUFBTSxHQUFHLEVBQUU7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUFFLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBR2IsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsZ0RBQWdEO1FBQ2hELFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsc0NBQXNDO1FBQ3RDLEtBQUs7UUFFTCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDWixDQUFNO1FBRVYsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztnQkFDbEIsSUFBSSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUN6RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTt3QkFDM0MsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFOzRCQUM5QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dDQUNwRSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29DQUNwRixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQ3pELElBQUksTUFBTSxJQUFJLEdBQUcsRUFBRTs0Q0FDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0Q0FDcEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lDQUNuRDtxQ0FDRjtpQ0FDRjtnQ0FDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0NBQzFNLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lDQUM5RTtxQ0FBTTtvQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2lDQUNsRTs2QkFDRjt5QkFDRjtxQkFFRjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzlDO29CQUNELG1CQUFtQjtvQkFHbkIsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFFdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO2lCQUM3QjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOzs7OztJQUdELGNBQWMsQ0FBQyxHQUFRO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBR0QsY0FBYztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFHRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBR0QsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7WUFwUUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixxM0hBQXFDOzthQUV0Qzs7OztZQWJtQixXQUFXO1lBQ3RCLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVTtZQUNWLGFBQWE7WUFGTCxjQUFjOzs7NEJBZTVCLFNBQVMsU0FBQyxrQkFBa0I7d0JBYzVCLEtBQUs7d0JBUUwsS0FBSzttQkFNTCxLQUFLO3lCQUlMLEtBQUs7c0JBTUwsS0FBSzt1QkFNTCxLQUFLO3dCQU1MLEtBQUs7Z0NBUUwsS0FBSztnQ0FRTCxLQUFLOzJCQU9MLEtBQUs7OEJBT0wsS0FBSzt1QkFPTCxLQUFLOzs7O0lBekZOLGlDQUF5Qjs7SUFFekIsdUNBQWlFOztJQUVqRSx3Q0FBZ0M7O0lBQ2hDLG1DQUEyQjs7SUFDM0IsZ0RBQXdDOztJQUN4QyxnREFBd0M7O0lBQ3hDLDJDQUFtQzs7SUFDbkMsdUNBQTBCOztJQUMxQixtQ0FBMkI7O0lBQzNCLHdDQUFnQzs7SUFDaEMseUNBQWlDOztJQUNqQyx5Q0FBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7SUFDM0IsZ0NBQW1COztJQXlFbkIsdUNBQStCOztJQU8vQix1Q0FBMEI7O0lBSTFCLG1DQUE0Qjs7SUFDNUIsc0NBQThCOztJQUM5QixzQ0FBOEI7Ozs7O0lBQzlCLHFDQUF3Qzs7Ozs7SUFDeEMsb0NBQXVDOztJQUN2QyxtQ0FBaUM7O0lBRXJCLDRCQUFzQjs7SUFDaEMsOEJBQXVCOztJQUN2QixnQ0FBcUI7O0lBQ3JCLG9DQUE2Qjs7SUFDN0IsdUNBQW1DOztJQUNuQywrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBNaW5MZW5ndGhWYWxpZGF0b3IsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmcm9tVGl0bGVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnO1xuICBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBmb3JnZXRSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHJvdXRlclN0YXR1c1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGVuZHBvaW50VmFsdWU6IGFueTtcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBjb29raWVTZXRWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBidXR0b25OYW1lVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZGVmYXVsdFVybFZhbHVlID0gJyc7XG4gIHByaXZhdGUgbG9hZGVyOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgc2VjcmV0OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JMb2FkZXIoZm9yTG9hZGVyVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRlciA9IChmb3JMb2FkZXJWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxvYWRlciA9IGZvckxvYWRlclZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycsdGhpcy5sb2FkZXIpXG4gICAgLy8gY29uc29sZS5sb2coJysrKystLS0tLScsdGhpcy5sb2FkZXIpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBuYW1lXG4gIHNldCBmcm9tVGl0bGUoZnJvbVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZVZhbHVlID0gKGZyb21UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSBmcm9tVGl0bGVWYWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG4gIHNldCBsb2dvKGxvZ29WYWw6IGFueSkge1xuICAgIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYnV0dG9uTmFtZShidXR0b25OYW1lVmFsOiBhbnkpIHtcbiAgICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IChidXR0b25OYW1lVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSBidXR0b25OYW1lVmFsXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGZ1bGxVcmwoZnVsbFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoZnVsbFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gZnVsbFVybFZhbDtcblxuICB9XG4gIEBJbnB1dCgpXG5cbiAgc2V0IGVuZHBvaW50KGVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmVuZHBvaW50VmFsdWUgPSBlbmRwb2ludFZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG5cbiAgcHVibGljIHNldCBjb29raWVTZXQodjogYW55KSB7XG4gICAgdGhpcy5jb29raWVTZXRWYWx1ZSA9IHY7XG4gIH1cblxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzaWduVXBSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlKVxuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgZm9yZ2V0Um91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSlcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCByb3V0ZXJTdGF0dXMocm91dGVyU3RhdHVzdmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlID0gKHJvdXRlclN0YXR1c3ZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMucm91dGVyU3RhdHVzVmFsdWUgPSByb3V0ZXJTdGF0dXN2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSlcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0TG9naW5VcmwoZGVmYXVsdFVybFZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VXJsVmFsdWUgPSAoZGVmYXVsdFVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVmYXVsdFVybFZhbHVlID0gZGVmYXVsdFVybFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlZmF1bHRVcmxWYWx1ZSlcbiAgfVxuICBwdWJsaWMgaXBpbmZvaWRWYWx1ZTogYW55ID0gJyc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXBpbmZvaWQoaWQ6IGFueSkge1xuICAgIHRoaXMuaXBpbmZvaWRWYWx1ZSA9IGlkO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXBpbmZvaWRWYWx1ZSlcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbl9pcF9pbmZvOiBhbnk7XG5cblxuXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHByb2plY3RfbmFtZTogYW55ID0gJyc7XG4gIHB1YmxpYyByZWRpcmVjdF91cmw6IGFueSA9ICcnO1xuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgY3VycmVudFVybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgbG9naW5mbGFnOmJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cblxuXG4gICAgdGhpcy5jdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c1VybCA9IHRoaXMuY3VycmVudFVybDtcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gZXZlbnQudXJsO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJsID0gcGFyYW1zWydwYXRoJ107XG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5yZWRpcmVjdF91cmwnLHRoaXMucmVkaXJlY3RfdXJsKVxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdmFyIHVybDogYW55ID0gXCJodHRwczovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49XCIgKyB0aGlzLmlwaW5mb2lkVmFsdWU7XG4gICAgdGhpcy5odHRwLmdldCh1cmwpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLmxvZ2luX2lwX2luZm8gPSByZXM7XG4gICAgfSk7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTsgICAgICAgLy8gc2V0IHRoZSBzZXJ2ZXIgdXJsIFxuICAgIH0sIDUwKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZW5kcG9pbnRWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG5cbiAgfVxuICByYW5kb21TdHJpbmcobGVuZ3RoLCBjaGFycykge1xuICAgIHZhciBtYXNrID0gJyc7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJ2EnKSA+IC0xKSBtYXNrICs9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJ0EnKSA+IC0xKSBtYXNrICs9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgaWYgKGNoYXJzLmluZGV4T2YoJyMnKSA+IC0xKSBtYXNrICs9ICcwMTIzNDU2Nzg5JztcbiAgICBpZiAoY2hhcnMuaW5kZXhPZignIScpID4gLTEpIG1hc2sgKz0gJ35gIUAjJCVeJiooKV8rLT17fVtdOlwiO1xcJzw+PywuL3xcXFxcJztcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aDsgaSA+IDA7IC0taSkgcmVzdWx0ICs9IG1hc2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWFzay5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqKioqKioqKiBMb2dpbiBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqL1xuICBsb2dpbkZvcm1TdWJtaXQoKSB7XG5cblxuICAgIC8qKnNlY3JldCBrZXkgd29ya2VzIGhlcmUgKi9cbiAgICB0aGlzLnNlY3JldCA9IHRoaXMucmFuZG9tU3RyaW5nKDksICdhQSMhJyk7XG4gICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnc2VjcmV0JywgdGhpcy5zZWNyZXQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWNyZXQnLCB0aGlzLnNlY3JldCk7XG4gICAgLy8gdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgLy8gLnBpcGUoXG4gICAgLy8gICBzdGFydFdpdGgoJycpLFxuICAgIC8vICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgLy8gKTtcblxuICAgIHRoaXMubG9hZGVyID0gMTtcbiAgICBsZXQgeDogYW55O1xuXG4gICAgZm9yICh4IGluIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmxvZ2luZmxhZyA9IHRydWU7XG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XG4gICAgICBkYXRhLmxvZ2luX2RhdGEgPSB0aGlzLmxvZ2luX2lwX2luZm87XG4gICAgICBkYXRhLmxvZ2luX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGRMb2dpbihkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ2p3dFRva2VuJywgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3RUb2tlbicsIHJlc3BvbnNlLnRva2VuKTtcbiAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09IHRoaXMuZGVmYXVsdFVybFZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleTEgaW4gdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtWzBdLnR5cGUgPT09IHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleXMsIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleTFdLmNvb2tpZXMpKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UuaXRlbVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcyA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KGtleXMsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5cywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKSA9PSBudWxsIHx8IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykgPT0gJycgfHwgdGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKSA9PSB1bmRlZmluZWQgfHwgdGhpcy5jb29raWVTZXJ2aWNlLmdldCgncmVkaXJlY3RVcmwnKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXkxXS5yb3V0ZXJOYXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY29va2llU2VydmljZS5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdF91cmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0aGlzLmxvYWRlciA9IDA7XG5cblxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubG9naW5mbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXNwb25zZS5tc2c7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcbiAgZm9yZ2V0cGFzc3dvcmQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUucGF0aCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gc2lnbi1VcCBjb21wb25lbnQgXG4gIHNpZ251cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZS5wYXRoKTtcbiAgfVxuXG4gIGN1c3RvbUZ1bmN0aW9uKGxpbms6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgbGluayk7XG4gIH1cblxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiQXBwQ29tcG9uZW50Ok9uRGVzdHJveVwiKTtcbiAgICB0aGlzLmxvZ2luZmxhZyA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==