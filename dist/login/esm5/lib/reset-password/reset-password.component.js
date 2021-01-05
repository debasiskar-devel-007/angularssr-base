/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, http, router, route, apiService, snackBar) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.fromTitleNameValue = '';
        this.serverUrlValue = '';
        this.message = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        // public signUpRouteingUrlValue: any = '';
        this.durationInSeconds = 5; // This is SnackBar set time
        // This is SnackBar set time
        this.validationMessageValue = '';
        this.PasswordStrengthValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = control.value || '';
            if (!value) {
                return null;
            }
            console.log(control);
            // Upper Case Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.upperCaseCharacters != null && typeof (this.validationMessageValue.upperCaseCharacters) != 'undefined' && this.validationMessageValue.upperCaseCharacters.test(value) === false) {
            //   return { passwordStrength: this.validationMessageValue.upperCaseCharactersMessage };
            // }
            // // Lower Case Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.lowerCaseCharacters != null && typeof (this.validationMessageValue.lowerCaseCharacters) != 'undefined' && this.validationMessageValue.lowerCaseCharacters.test(value) === false) {
            //   return { passwordStrength: this.validationMessageValue.lowerCaseCharactersMessage };
            // }
            // // Number of Characters Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.numberCharacters != null && typeof (this.validationMessageValue.numberCharacters) != 'undefined' && this.validationMessageValue.numberCharacters.test(value) === false) {
            //   console.log(value, '+++')
            //   return { passwordStrength: this.validationMessageValue.numberCharactersMessage };
            // }
            // // Psecial Case Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.specialCharacters != null && typeof (this.validationMessageValue.specialCharacters) != 'undefined' && this.validationMessageValue.specialCharacters.test(value) === false) {
            //   console.log(value, '+++')
            //   return { passwordStrength: this.validationMessageValue.specialCharactersMessage };
            // }
            // // Min Number Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.minLengthOfCharacters != null && typeof (this.validationMessageValue.minLengthOfCharacters) != 'undefined' && value.length <= this.validationMessageValue.minLengthOfCharacters) {
            //   console.log(value, '+++')
            //   return { passwordStrength: this.validationMessageValue.minLengthOfCharactersMessage };
            // }
            // // Max Number Validation
            // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.maxLengthOfCharacters != null && typeof (this.validationMessageValue.maxLengthOfCharacters) != 'undefined' && value.length >= this.validationMessageValue.maxLengthOfCharacters) {
            //   console.log(value, '+++')
            //   return { passwordStrength: this.validationMessageValue.maxLengthOfCharactersMessage };
            // }
            /** @type {?} */
            var upperCaseCharacters = /[A-Z]+/g;
            if (upperCaseCharacters.test(value) === false) {
                return { passwordStrength: "Password at least one Upper case character" };
            }
            /** @type {?} */
            var lowerCaseCharacters = /[a-z]+/g;
            if (lowerCaseCharacters.test(value) === false) {
                return { passwordStrength: "Password at least one lower case character" };
            }
            /** @type {?} */
            var numberCharacters = /[0-9]+/g;
            if (numberCharacters.test(value) === false) {
                return { passwordStrength: "Password at least one number characters" };
            }
            /** @type {?} */
            var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (specialCharacters.test(value) === false) {
                return { passwordStrength: "Password at least one special character" };
            }
            if (value.length <= 6) {
                return { passwordStrength: "Password must contain 6 character" };
            }
            return null;
        });
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.accesscode = params['token'];
            // console.log(this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            password: ['', [Validators.required, this.PasswordStrengthValidator]],
            // password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
        console.log('++++++++', this.resetPasswordForm);
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "fromTitleName", {
        set: /**
         * @param {?} fromTitleNameVal
         * @return {?}
         */
        function (fromTitleNameVal) {
            this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
            this.fromTitleNameValue = fromTitleNameVal;
            console.log(this.fromTitleNameValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            console.log(this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "logo", {
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
    Object.defineProperty(ResetPasswordComponent.prototype, "validationMessage", {
        set: /**
         * @param {?} validationMessageVal
         * @return {?}
         */
        function (validationMessageVal) {
            this.validationMessageValue = validationMessageVal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    //  this function is use for mach password and confirm Password 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    ResetPasswordComponent.prototype.machpassword = 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    function (passwordkye, confirmpasswordkye) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            /** @type {?} */
            var passwordInput = group.controls[passwordkye];
            /** @type {?} */
            var confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        });
    };
    /********* Reset Password Form Submit start here*********/
    /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    ResetPasswordComponent.prototype.resetPasswordSubmit = /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.resetPasswordForm.value);
        /** @type {?} */
        var x;
        for (x in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[x].markAsTouched();
        }
        if (this.resetPasswordForm.valid) {
            /** @type {?} */
            var data1 = { "password": this.resetPasswordForm.value.password, "accesscode": this.accesscode };
            /** @type {?} */
            var data = {
                'data': data1,
                "source": this.addEndpointValue.source
            }
            // data.accesscode = this.accesscode;
            ;
            // data.accesscode = this.accesscode;
            this.apiService.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    if (_this.addEndpointValue.redirect_url != null) {
                        _this.router.navigateByUrl(_this.addEndpointValue.redirect_url);
                    }
                    _this.openSnackBar();
                    _this.formDirective.resetForm(); // Use for reset the form
                    _this.message = '';
                }
                else {
                    _this.message = result.msg;
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.openSnackBar = /**
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(snackBarResetComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    /********* Reset Password Form Submit end here*********/
    /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    ResetPasswordComponent.prototype.inputUntouched = /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.resetPasswordForm.controls[val].markAsUntouched();
    };
    ResetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-reset-password',
                    template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n          <img  [src]=\"logoValue\">\n      </span>\n\n        <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n        <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <mat-hint align=\"end\">Your password must contain 6 characters with at least one lower caser, upper case alphabets and special character</mat-hint>\n                <input matInput placeholder=\"Enter New Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n\n                <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('passwordStrength')\">\n                    {{resetPasswordForm.get('password').errors['passwordStrength']}}\n                </mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Confirm New Password\" type=\"password\" formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n                    Confirm Password field can not be blank</mat-error>\n                <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button color=\"primary\">Update Password</button>\n\n        </form>\n    </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ActivatedRoute },
        { type: ApiService },
        { type: MatSnackBar }
    ]; };
    ResetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        fromTitleName: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        logo: [{ type: Input }],
        validationMessage: [{ type: Input }]
    };
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
if (false) {
    /** @type {?} */
    ResetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ResetPasswordComponent.prototype.resetPasswordForm;
    /** @type {?} */
    ResetPasswordComponent.prototype.fromTitleNameValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.message;
    /** @type {?} */
    ResetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.durationInSeconds;
    /** @type {?} */
    ResetPasswordComponent.prototype.validationMessageValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.accesscode;
    /** @type {?} */
    ResetPasswordComponent.prototype.PasswordStrengthValidator;
    /** @type {?} */
    ResetPasswordComponent.prototype.fb;
    /** @type {?} */
    ResetPasswordComponent.prototype.http;
    /** @type {?} */
    ResetPasswordComponent.prototype.router;
    /** @type {?} */
    ResetPasswordComponent.prototype.route;
    /** @type {?} */
    ResetPasswordComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordComponent.prototype.snackBar;
}
var snackBarResetComponent = /** @class */ (function () {
    function snackBarResetComponent() {
    }
    snackBarResetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-modale',
                    template: "Password changed successfully",
                    styles: ["\n    .example {\n      color: aliceblue;\n      background-color: yellowgreen;\n    }\n  "]
                }] }
    ];
    return snackBarResetComponent;
}());
export { snackBarResetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFxQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUFpRUUsZ0NBQW1CLEVBQWUsRUFBUyxJQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFxQixFQUFTLFVBQXNCLEVBQVUsUUFBcUI7UUFBOUssaUJBa0JDO1FBbEJrQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBckR2Syx1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQzs7UUFFcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQWEs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LElBbVBDO1NBM09ZLHNCQUFzQjs7O0lBRWpDLCtDQUFpRTs7SUFDakUsbURBQW9DOztJQUNwQyxvREFBb0M7O0lBQ3BDLGdEQUFnQzs7SUFDaEMseUNBQXlCOztJQUN6QixrREFBa0M7O0lBRWxDLDJDQUEyQjs7SUFFM0IsbURBQTZCOztJQUM3Qix3REFBdUM7O0lBMkN2Qyw0Q0FBMEI7O0lBcUQxQiwyREFxRUM7O0lBeEhXLG9DQUFzQjs7SUFBRSxzQ0FBdUI7O0lBQUUsd0NBQXFCOztJQUFFLHVDQUE0Qjs7SUFBRSw0Q0FBNkI7Ozs7O0lBQUUsMENBQTZCOztBQW9MaEw7SUFBQTtJQVVzQyxDQUFDOztnQkFWdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrQkFBK0I7NkJBQ2hDLDRGQUtSO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBVnZDLElBVXVDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcmVzZXQtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuICBwdWJsaWMgcmVzZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZyb21UaXRsZU5hbWVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xuXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICAvLyBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBkdXJhdGlvbkluU2Vjb25kcyA9IDU7ICAgICAgICAgICAgIC8vIFRoaXMgaXMgU25hY2tCYXIgc2V0IHRpbWVcbiAgcHVibGljIHZhbGlkYXRpb25NZXNzYWdlVmFsdWU6IGFueSA9Jyc7XG5cbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIEZvcm0gbmFtZVxuICBzZXQgZnJvbVRpdGxlTmFtZShmcm9tVGl0bGVOYW1lVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IChmcm9tVGl0bGVOYW1lVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUgPSBmcm9tVGl0bGVOYW1lVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlKTtcbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcblxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG5cbiAgc2V0IHZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlVmFsOiBhbnkpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUgPSB2YWxpZGF0aW9uTWVzc2FnZVZhbDtcbiAgfSBcblxuXG4gIC8vIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxuICAvLyBzZXQgdmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2V2YWw6IGFueSkge1xuICAvLyAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSA9ICh2YWxpZGF0aW9uTWVzc2FnZXZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAvLyAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSA9IHZhbGlkYXRpb25NZXNzYWdldmFsO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSk7XG4gIC8vIH1cbiAgcHVibGljIGFjY2Vzc2NvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXG4gICAgICB0aGlzLmFjY2Vzc2NvZGUgPSBwYXJhbXNbJ3Rva2VuJ107XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2Vzc2NvZGUpO1xuICAgIH0pXG5cblxuICAgIHRoaXMucmVzZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLlBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3JdXSxcbiAgICAgIC8vIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0sIHtcbiAgICAgIHZhbGlkYXRvcjogdGhpcy5tYWNocGFzc3dvcmQoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKCcrKysrKysrKycsIHRoaXMucmVzZXRQYXNzd29yZEZvcm0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyBjbGVhciB0aGUgZW5kcG9pbnQgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuICAvLyAgdGhpcyBmdW5jdGlvbiBpcyB1c2UgZm9yIG1hY2ggcGFzc3dvcmQgYW5kIGNvbmZpcm0gUGFzc3dvcmQgXG5cbiAgbWFjaHBhc3N3b3JkKHBhc3N3b3Jka3llOiBzdHJpbmcsIGNvbmZpcm1wYXNzd29yZGt5ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKSA9PiB7XG4gICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3Jka3llXSxcbiAgICAgICAgY29uZmlybXBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1tjb25maXJtcGFzc3dvcmRreWVdO1xuICAgICAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgIT09IGNvbmZpcm1wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMoeyBub3RFcXVpdmFsZW50OiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG5cbiAgUGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciA9IGZ1bmN0aW9uIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzICB8IG51bGwge1xuICAgIGxldCB2YWx1ZTogc3RyaW5nID0gY29udHJvbC52YWx1ZSB8fCAnJztcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbmNvbnNvbGUubG9nKGNvbnRyb2wpXG4gICAgLy8gVXBwZXIgQ2FzZSBWYWxpZGF0aW9uXG4gICAgLy8gaWYgKHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUudXBwZXJDYXNlQ2hhcmFjdGVycyAhPSBudWxsICYmIHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnVwcGVyQ2FzZUNoYXJhY3RlcnMpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS51cHBlckNhc2VDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgIC8vICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnVwcGVyQ2FzZUNoYXJhY3RlcnNNZXNzYWdlIH07XG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyBMb3dlciBDYXNlIFZhbGlkYXRpb25cbiAgICAvLyBpZiAodHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5sb3dlckNhc2VDaGFyYWN0ZXJzICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubG93ZXJDYXNlQ2hhcmFjdGVycykgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLmxvd2VyQ2FzZUNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgLy8gICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubG93ZXJDYXNlQ2hhcmFjdGVyc01lc3NhZ2UgfTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyBOdW1iZXIgb2YgQ2hhcmFjdGVycyBWYWxpZGF0aW9uXG4gICAgLy8gaWYgKHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubnVtYmVyQ2hhcmFjdGVycyAhPSBudWxsICYmIHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm51bWJlckNoYXJhY3RlcnMpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5udW1iZXJDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgIC8vICAgY29uc29sZS5sb2codmFsdWUsICcrKysnKVxuICAgIC8vICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm51bWJlckNoYXJhY3RlcnNNZXNzYWdlIH07XG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyBQc2VjaWFsIENhc2UgVmFsaWRhdGlvblxuICAgIC8vIGlmICh0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUuc3BlY2lhbENoYXJhY3RlcnMpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5zcGVjaWFsQ2hhcmFjdGVycy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHZhbHVlLCAnKysrJylcbiAgICAvLyAgIHJldHVybiB7IHBhc3N3b3JkU3RyZW5ndGg6IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5zcGVjaWFsQ2hhcmFjdGVyc01lc3NhZ2UgfTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyBNaW4gTnVtYmVyIFZhbGlkYXRpb25cbiAgICAvLyBpZiAodHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5taW5MZW5ndGhPZkNoYXJhY3RlcnMgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5taW5MZW5ndGhPZkNoYXJhY3RlcnMpICE9ICd1bmRlZmluZWQnICYmIHZhbHVlLmxlbmd0aCA8PSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWluTGVuZ3RoT2ZDaGFyYWN0ZXJzKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWx1ZSwgJysrKycpXG4gICAgLy8gICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWluTGVuZ3RoT2ZDaGFyYWN0ZXJzTWVzc2FnZSB9O1xuICAgIC8vIH1cblxuXG4gICAgLy8gLy8gTWF4IE51bWJlciBWYWxpZGF0aW9uXG4gICAgLy8gaWYgKHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWF4TGVuZ3RoT2ZDaGFyYWN0ZXJzICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWF4TGVuZ3RoT2ZDaGFyYWN0ZXJzKSAhPSAndW5kZWZpbmVkJyAmJiB2YWx1ZS5sZW5ndGggPj0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm1heExlbmd0aE9mQ2hhcmFjdGVycykge1xuICAgIC8vICAgY29uc29sZS5sb2codmFsdWUsICcrKysnKVxuICAgIC8vICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm1heExlbmd0aE9mQ2hhcmFjdGVyc01lc3NhZ2UgfTtcbiAgICAvLyB9XG5cbiAgICBsZXQgdXBwZXJDYXNlQ2hhcmFjdGVycyA9IC9bQS1aXSsvZ1xuICAgIGlmICh1cHBlckNhc2VDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIGF0IGxlYXN0IG9uZSBVcHBlciBjYXNlIGNoYXJhY3RlcmAgfTtcbiAgICB9XG5cbiAgICBsZXQgbG93ZXJDYXNlQ2hhcmFjdGVycyA9IC9bYS16XSsvZ1xuICAgIGlmIChsb3dlckNhc2VDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIGF0IGxlYXN0IG9uZSBsb3dlciBjYXNlIGNoYXJhY3RlcmAgfTtcbiAgICB9XG5cblxuICAgIGxldCBudW1iZXJDaGFyYWN0ZXJzID0gL1swLTldKy9nXG4gICAgaWYgKG51bWJlckNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgYXQgbGVhc3Qgb25lIG51bWJlciBjaGFyYWN0ZXJzYCB9O1xuICAgIH1cblxuICAgIGxldCBzcGVjaWFsQ2hhcmFjdGVycyA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XSsvXG4gICAgaWYgKHNwZWNpYWxDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3RlcmAgfTtcbiAgICB9XG5cbmlmICh2YWx1ZS5sZW5ndGggPD02ICkge1xuICAgICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIG11c3QgY29udGFpbiA2IGNoYXJhY3RlcmAgfTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG5cblxuICAvKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovXG4gIHJlc2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWx1ZSk7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgZGF0YTE6IGFueSA9IHsgXCJwYXNzd29yZFwiOiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkLCBcImFjY2Vzc2NvZGVcIjogdGhpcy5hY2Nlc3Njb2RlIH1cbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICdkYXRhJzogZGF0YTEsXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRhLmFjY2Vzc2NvZGUgPSB0aGlzLmFjY2Vzc2NvZGU7XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGlmICh0aGlzLmFkZEVuZHBvaW50VmFsdWUucmVkaXJlY3RfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5hZGRFbmRwb2ludFZhbHVlLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAvLyBVc2UgZm9yIHJlc2V0IHRoZSBmb3JtXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyUmVzZXRDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLW1vZGFsZScsXG4gIHRlbXBsYXRlOiBgUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlgLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUge1xuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIHNuYWNrQmFyUmVzZXRDb21wb25lbnQgeyB9XG4iXX0=