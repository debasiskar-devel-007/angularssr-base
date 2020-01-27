/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, router, apiService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.message = '';
        this.buttonNameValue = '';
        this.formTitleValue = ''; // This is From title
        // This is From title
        this.serverUrlValue = ''; //  This is Server url
        //  This is Server url
        this.signUpRouteingUrlValue = ''; // setting the navigate By Sign Up Url from project
        // setting the navigate By Sign Up Url from project
        this.loginRouteingUrlValue = ''; // setting the navigate By login Url from project
        // setting the navigate By login Url from project
        this.domainUrlValue = ''; // This is reset password url
        // This is reset password url
        this.addEndpointValue = ''; // This is endpoint url
        // This is endpoint url
        this.logoValue = ''; // This is from logo url
        // This is from logo url
        this.durationInSeconds = 5; // This is SnackBar set time
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
    Object.defineProperty(ForgetPasswordComponent.prototype, "buttonName", {
        set: 
        // This is SnackBar set time
        /**
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "domainUrl", {
        set: /**
         * @param {?} domainUrlVal
         * @return {?}
         */
        function (domainUrlVal) {
            this.domainUrlValue = (domainUrlVal) || '<no name set>';
            this.domainUrlValue = domainUrlVal;
            // console.log(this.domanUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = (formTitleVal) || '<no name set>';
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "logo", {
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointval
         * @return {?}
         */
        function (addEndpointval) {
            this.addEndpointValue = addEndpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "signUpRouteingUrl", {
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "loginRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.loginRouteingUrlValue = routeingUrlval;
            // console.log(this.loginRouteingUrlValue)
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ForgetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /********* Forget password  Form Submit start here*********/
    /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    ForgetPasswordComponent.prototype.forgetPasswordSubmit = /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var x;
        //  This for-loop use for from blank or properly validated checking  
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) { //    validation checking
            //    validation checking
            // this.openSnackBar();              // open snack-bar function
            /** @type {?} */
            var link = this.serverUrlValue;
            /** @type {?} */
            var data = this.forgetPasswordForm.value;
            data.domainUrl = this.domainUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // console.log(response);
                /** @type {?} */
                var result = {};
                result = response;
                if (result.status == "success") {
                    // this.openSnackBar();             // open snack-bar function
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                    _this.message = ''; // clear the from
                }
                else {
                    // display error message on html
                    _this.message = result.msg; // show the error message
                }
            }));
        }
    };
    /********* Forget password  Form Submit end here*********/
    /********* openSnackBar function open start here*********/
    /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    ForgetPasswordComponent.prototype.openSnackBar = /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(snackBarComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    /********* openSnackBar function open end here*********/
    // This is use for navigate this component to sign-Up component 
    /**
     * ****** openSnackBar function open end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    ForgetPasswordComponent.prototype.signup = /**
     * ****** openSnackBar function open end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    };
    // This is use for navigate this component to login component 
    // This is use for navigate this component to login component 
    /**
     * @return {?}
     */
    ForgetPasswordComponent.prototype.login = 
    // This is use for navigate this component to login component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ForgetPasswordComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    };
    /**
     * @param {?} link
     * @return {?}
     */
    ForgetPasswordComponent.prototype.customFunction = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.router.navigateByUrl('/' + link);
    };
    ForgetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-forget-password',
                    template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Please enter  a valid email</mat-error>\n      </mat-form-field>\n<button mat-raised-button *ngIf=\"buttonNameValue != ''\" color=\"primary\">{{buttonNameValue}}</button>\n            <button mat-raised-button *ngIf=\"buttonNameValue == ''\" color=\"primary\">Login</button>\n      <span class=\"signupfooter\">\n      <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.customURl ==''\" (click)=\"login()\">{{loginRouteingUrlValue.buttonName}}</a>\n\n      <a *ngIf=\"loginRouteingUrlValue.customURl !='' && loginRouteingUrlValue.customLink =='' && loginRouteingUrlValue.path ==''\" [href]=\"loginRouteingUrlValue.customURl\">{{loginRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"loginRouteingUrlValue.buttonName !='' && loginRouteingUrlValue.customLink !='' && loginRouteingUrlValue.path =='' \" (click)=\"customFunction(loginRouteingUrlValue.customLink)\">{{loginRouteingUrlValue.buttonName}}</a>\n\n <a *ngIf=\"loginRouteingUrlValue.buttonName =='' && loginRouteingUrlValue.customLink ==''\" (click)=\"login()\">Login</a>\n\n  <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.customURl ==''\" (click)=\"signup()\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName !='' && signUpRouteingUrlValue.customLink !='' && signUpRouteingUrlValue.path =='' \" (click)=\"customFunction(signUpRouteingUrlValue.customLink)\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n                <a *ngIf=\"signUpRouteingUrlValue.customURl !='' && signUpRouteingUrlValue.customLink =='' && signUpRouteingUrlValue.path ==''\" [href]=\"signUpRouteingUrlValue.customURl\">{{signUpRouteingUrlValue.buttonName}}</a>\n\n\n                <a *ngIf=\"signUpRouteingUrlValue.buttonName =='' && signUpRouteingUrlValue.customLink ==''\" (click)=\"signup()\">Sign Up</a>\n\n\n\n\n                \n      </span>\n    </form>\n  </mat-card>\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Router },
        { type: ApiService },
        { type: MatSnackBar }
    ]; };
    ForgetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        buttonName: [{ type: Input }],
        domainUrl: [{ type: Input }],
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        logo: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }],
        loginRouteingUrl: [{ type: Input }]
    };
    return ForgetPasswordComponent;
}());
export { ForgetPasswordComponent };
if (false) {
    /** @type {?} */
    ForgetPasswordComponent.prototype.message;
    /** @type {?} */
    ForgetPasswordComponent.prototype.buttonNameValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ForgetPasswordComponent.prototype.forgetPasswordForm;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formTitleValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.signUpRouteingUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.loginRouteingUrlValue;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.domainUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.durationInSeconds;
    /** @type {?} */
    ForgetPasswordComponent.prototype.fb;
    /** @type {?} */
    ForgetPasswordComponent.prototype.router;
    /** @type {?} */
    ForgetPasswordComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.snackBar;
}
var snackBarComponent = /** @class */ (function () {
    function snackBarComponent() {
    }
    snackBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-modale',
                    template: "<span class=\"example\">\n    We have e-mailed your password reset link!\n  </span>",
                    styles: ["\n    .example {\n      color: aliceblue;\n      background-color: yellowgreen;\n    }\n  "]
                }] }
    ];
    return snackBarComponent;
}());
export { snackBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBNEVFLGlDQUNTLEVBQWUsRUFDZixNQUFjLEVBQ2QsVUFBc0IsRUFDckIsUUFBcUI7UUFIdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWE7UUExRXhCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFNMUIsbUJBQWMsR0FBUSxFQUFFLENBQUMsQ0FBVSxxQkFBcUI7O1FBQ3hELG1CQUFjLEdBQVEsRUFBRSxDQUFDLENBQVUsc0JBQXNCOztRQUN6RCwyQkFBc0IsR0FBUSxFQUFFLENBQUMsQ0FBRSxtREFBbUQ7O1FBQ3RGLDBCQUFxQixHQUFRLEVBQUUsQ0FBQyxDQUFFLGlEQUFpRDs7UUFDbEYsbUJBQWMsR0FBUSxFQUFFLENBQUMsQ0FBVSw2QkFBNkI7O1FBQ2pFLHFCQUFnQixHQUFRLEVBQUUsQ0FBQyxDQUFRLHVCQUF1Qjs7UUFDMUQsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFlLHdCQUF3Qjs7UUFDM0Qsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQWEsNEJBQTRCO1FBaUVwRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFdkosQ0FBQyxDQUFDO0lBS0wsQ0FBQztJQXRFRCxzQkFDRSwrQ0FBVTs7Ozs7OztRQURaLFVBQ2MsYUFBa0I7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtRQUN0QyxDQUFDOzs7T0FBQTtJQUVDLHNCQUNJLDhDQUFTOzs7OztRQURiLFVBQ2MsWUFBaUI7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztZQUNuQyxtQ0FBbUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSw4Q0FBUzs7Ozs7UUFEYixVQUNjLFlBQWlCO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFFckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBUzs7Ozs7UUFEYixVQUNjLFlBQWlCO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFFckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFFSSx5Q0FBSTs7Ozs7UUFGUixVQUVTLE9BQVk7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFFSSxnREFBVzs7Ozs7UUFGZixVQUVnQixjQUFtQjtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksc0RBQWlCOzs7OztRQURyQixVQUNzQixjQUFtQjtZQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDbEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsQ0FBQztZQUM3QywyQ0FBMkM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLGNBQW1CO1lBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUNqRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDO1lBQzVDLDBDQUEwQztRQUM1QyxDQUFDOzs7T0FBQTs7OztJQXFCRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBTyx3QkFBd0I7UUFDaEUsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBUSxzQkFBc0I7UUFDbEYsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsK0JBQStCO1FBRy9CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFPLHNCQUFzQjtRQUNoRSxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLG9CQUFvQjtRQUN4RixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsNERBQTREOzs7OztJQUM1RCxzREFBb0I7Ozs7SUFBcEI7UUFBQSxpQkFrQ0M7O1lBakNLLENBQU07UUFFVixxRUFBcUU7UUFDckUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEVBQUsseUJBQXlCOzs7O2dCQUkzRCxJQUFJLEdBQVEsSUFBSSxDQUFDLGNBQWM7O2dCQUMvQixJQUFJLEdBQVEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7WUFFN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRXJDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFFBQVE7OztvQkFFbEQsTUFBTSxHQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBRWxCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzlCLDhEQUE4RDtvQkFDOUQsaUNBQWlDO29CQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFTLGlCQUFpQjtpQkFDN0M7cUJBQU07b0JBRUwsZ0NBQWdDO29CQUNoQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBTSx5QkFBeUI7aUJBRTFEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCwwREFBMEQ7SUFHMUQsMERBQTBEOzs7Ozs7SUFHMUQsOENBQVk7Ozs7O0lBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Ysd0RBQXdEO0lBR3ZELGdFQUFnRTs7Ozs7O0lBQ2hFLHdDQUFNOzs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFQyw4REFBOEQ7Ozs7O0lBQzlELHVDQUFLOzs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUgsZ0RBQWM7Ozs7SUFBZCxVQUFlLEdBQVE7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUdELGdEQUFjOzs7O0lBQWQsVUFBZSxJQUFTO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFqTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHU4RkFBK0M7O2lCQUVoRDs7OztnQkFWbUIsV0FBVztnQkFFdEIsTUFBTTtnQkFDTixVQUFVO2dCQUNWLFdBQVc7OztnQ0FZakIsU0FBUyxTQUFDLGtCQUFrQjs2QkFhNUIsS0FBSzs0QkFNTCxLQUFLOzRCQU1MLEtBQUs7NEJBT0wsS0FBSzt1QkFPTCxLQUFLOzhCQU1MLEtBQUs7b0NBT0wsS0FBSzttQ0FPTCxLQUFLOztJQStHUiw4QkFBQztDQUFBLEFBcExELElBb0xDO1NBL0tZLHVCQUF1Qjs7O0lBQ2xDLDBDQUF5Qjs7SUFDekIsa0RBQWlDOztJQUdqQyxnREFBaUU7O0lBRWpFLHFEQUFxQzs7SUFDckMsaURBQWdDOztJQUNoQyxpREFBZ0M7O0lBQ2hDLHlEQUF3Qzs7SUFDeEMsd0RBQXVDOzs7OztJQUN2QyxpREFBaUM7O0lBQ2pDLG1EQUFrQzs7SUFDbEMsNENBQTJCOztJQUMzQixvREFBNkI7O0lBeUQzQixxQ0FBc0I7O0lBQ3RCLHlDQUFxQjs7SUFDckIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBNkI7O0FBdUdqQztJQUFBO0lBVWlDLENBQUM7O2dCQVZqQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK0ZBQXlDOzZCQUNoQyw0RkFLUjtpQkFDRjs7SUFDZ0Msd0JBQUM7Q0FBQSxBQVZsQyxJQVVrQztTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9yZ2V0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG4gIHB1YmxpYyBidXR0b25OYW1lVmFsdWU6IGFueSA9ICcnO1xuXG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmb3JnZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJzsgICAgICAgICAgLy8gVGhpcyBpcyBGcm9tIHRpdGxlXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7ICAgICAgICAgIC8vICBUaGlzIGlzIFNlcnZlciB1cmxcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnOyAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIHB1YmxpYyBsb2dpblJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnOyAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgbG9naW4gVXJsIGZyb20gcHJvamVjdFxuICBwcml2YXRlIGRvbWFpblVybFZhbHVlOiBhbnkgPSAnJzsgICAgICAgICAgLy8gVGhpcyBpcyByZXNldCBwYXNzd29yZCB1cmxcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnOyAgICAgICAgLy8gVGhpcyBpcyBlbmRwb2ludCB1cmxcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7ICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBmcm9tIGxvZ28gdXJsXG4gIHB1YmxpYyBkdXJhdGlvbkluU2Vjb25kcyA9IDU7ICAgICAgICAgICAgIC8vIFRoaXMgaXMgU25hY2tCYXIgc2V0IHRpbWVcblxuXG4gIEBJbnB1dCgpXG5zZXQgYnV0dG9uTmFtZSAoYnV0dG9uTmFtZVZhbCA6YW55KXtcbiAgdGhpcy5idXR0b25OYW1lVmFsdWUgPSAoYnV0dG9uTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICB0aGlzLmJ1dHRvbk5hbWVWYWx1ZSA9IGJ1dHRvbk5hbWVWYWxcbn1cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBlbWFpbCBEb21hbiBVUkxcbiAgc2V0IGRvbWFpblVybChkb21haW5VcmxWYWw6IGFueSkge1xuICAgIHRoaXMuZG9tYWluVXJsVmFsdWUgPSAoZG9tYWluVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kb21haW5VcmxWYWx1ZSA9IGRvbWFpblVybFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRvbWFuVXJsVmFsdWUpO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcblxuICBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50dmFsO1xuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IGxvZ2luUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICkge1xuXG5cblxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG5cbiAgICB9KTtcblxuXG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybFZhbHVlKTsgICAgICAgIC8vICBzZXQgdGhlIHNlcnZlciB1cmxcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIC8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqL1xuICBmb3JnZXRQYXNzd29yZFN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuXG4gICAgLy8gIFRoaXMgZm9yLWxvb3AgdXNlIGZvciBmcm9tIGJsYW5rIG9yIHByb3Blcmx5IHZhbGlkYXRlZCBjaGVja2luZyAgXG4gICAgZm9yICh4IGluIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWxpZCkgeyAgICAvLyAgICB2YWxpZGF0aW9uIGNoZWNraW5nXG5cbiAgICAgIC8vIHRoaXMub3BlblNuYWNrQmFyKCk7ICAgICAgICAgICAgICAvLyBvcGVuIHNuYWNrLWJhciBmdW5jdGlvblxuXG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5zZXJ2ZXJVcmxWYWx1ZTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWx1ZTtcblxuICAgICAgZGF0YS5kb21haW5VcmwgPSB0aGlzLmRvbWFpblVybFZhbHVlO1xuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZm9yZ2V0UGFzc3dvcmQoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIC8vIHRoaXMub3BlblNuYWNrQmFyKCk7ICAgICAgICAgICAgIC8vIG9wZW4gc25hY2stYmFyIGZ1bmN0aW9uXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnOyAgICAgICAgIC8vIGNsZWFyIHRoZSBmcm9tXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7ICAgICAgLy8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIC8qKioqKioqKiogb3BlblNuYWNrQmFyIGZ1bmN0aW9uIG9wZW4gc3RhcnQgaGVyZSoqKioqKioqKi9cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbiAvKioqKioqKioqIG9wZW5TbmFja0JhciBmdW5jdGlvbiBvcGVuIGVuZCBoZXJlKioqKioqKioqL1xuXG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbiAgICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gbG9naW4gY29tcG9uZW50IFxuICAgIGxvZ2luKCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSk7XG4gICAgfVxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cbiAgY3VzdG9tRnVuY3Rpb24obGluazogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrIGxpbmspO1xuICB9XG5cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1tb2RhbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvcmdldC1wYXNzd29yZE1vZGFsZS5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlIHtcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBzbmFja0JhckNvbXBvbmVudCB7IH1cbiJdfQ==