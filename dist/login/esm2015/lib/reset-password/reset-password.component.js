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
export class ResetPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} route
     * @param {?} apiService
     * @param {?} snackBar
     */
    constructor(fb, http, router, route, apiService, snackBar) {
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
            let value = control.value || '';
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
            let upperCaseCharacters = /[A-Z]+/g;
            if (upperCaseCharacters.test(value) === false) {
                return { passwordStrength: `Password at least one Upper case character` };
            }
            /** @type {?} */
            let lowerCaseCharacters = /[a-z]+/g;
            if (lowerCaseCharacters.test(value) === false) {
                return { passwordStrength: `Password at least one lower case character` };
            }
            /** @type {?} */
            let numberCharacters = /[0-9]+/g;
            if (numberCharacters.test(value) === false) {
                return { passwordStrength: `Password at least one number characters` };
            }
            /** @type {?} */
            let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (specialCharacters.test(value) === false) {
                return { passwordStrength: `Password at least one special character` };
            }
            if (value.length <= 6) {
                return { passwordStrength: `Password must contain 6 character` };
            }
            return null;
        });
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.accesscode = params['token'];
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
    /**
     * @param {?} fromTitleNameVal
     * @return {?}
     */
    set fromTitleName(fromTitleNameVal) {
        this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
        this.fromTitleNameValue = fromTitleNameVal;
        console.log(this.fromTitleNameValue);
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
        console.log(this.serverUrlValue);
    }
    /**
     * @param {?} addEndpointVal
     * @return {?}
     */
    set addEndpoint(addEndpointVal) {
        this.addEndpointValue = addEndpointVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} validationMessageVal
     * @return {?}
     */
    set validationMessage(validationMessageVal) {
        this.validationMessageValue = validationMessageVal;
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
            this.apiService.setServerUrl(this.serverUrlValue); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    machpassword(passwordkye, confirmpasswordkye) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            /** @type {?} */
            let passwordInput = group.controls[passwordkye];
            /** @type {?} */
            let confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        });
    }
    /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    resetPasswordSubmit() {
        console.log(this.resetPasswordForm.value);
        /** @type {?} */
        let x;
        for (x in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[x].markAsTouched();
        }
        if (this.resetPasswordForm.valid) {
            /** @type {?} */
            let data1 = { "password": this.resetPasswordForm.value.password, "accesscode": this.accesscode };
            /** @type {?} */
            let data = {
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
            (response) => {
                /** @type {?} */
                let result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    if (this.addEndpointValue.redirect_url != null) {
                        this.router.navigateByUrl(this.addEndpointValue.redirect_url);
                    }
                    this.openSnackBar();
                    this.formDirective.resetForm(); // Use for reset the form
                    this.message = '';
                }
                else {
                    this.message = result.msg;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(snackBarResetComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.resetPasswordForm.controls[val].markAsUntouched();
    }
}
ResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-reset-password',
                template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n          <img  [src]=\"logoValue\">\n      </span>\n\n        <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n        <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <mat-hint align=\"end\">Your password must contain 6 characters with at least one lower caser, upper case alphabets and special character</mat-hint>\n                <input matInput placeholder=\"Enter New Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n\n                <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('passwordStrength')\">\n                    {{resetPasswordForm.get('password').errors['passwordStrength']}}\n                </mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Confirm New Password\" type=\"password\" formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n                    Confirm Password field can not be blank</mat-error>\n                <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button color=\"primary\">Update Password</button>\n\n        </form>\n    </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ResetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ActivatedRoute },
    { type: ApiService },
    { type: MatSnackBar }
];
ResetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    fromTitleName: [{ type: Input }],
    serverUrl: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    logo: [{ type: Input }],
    validationMessage: [{ type: Input }]
};
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
export class snackBarResetComponent {
}
snackBarResetComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-modale',
                template: `Password changed successfully`,
                styles: [`
    .example {
      color: aliceblue;
      background-color: yellowgreen;
    }
  `]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFxQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVaEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBeURqQyxZQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsS0FBcUIsRUFBUyxVQUFzQixFQUFVLFFBQXFCO1FBQTNKLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWE7UUFyRHZLLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUUzQixjQUFTLEdBQVEsRUFBRSxDQUFDOztRQUVwQixzQkFBaUIsR0FBRyxDQUFD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O0lBeEhXLG9DQUFzQjs7SUFBRSxzQ0FBdUI7O0lBQUUsd0NBQXFCOztJQUFFLHVDQUE0Qjs7SUFBRSw0Q0FBNkI7Ozs7O0lBQUUsMENBQTZCOztBQThMaEwsTUFBTSxPQUFPLHNCQUFzQjs7O1lBVmxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsK0JBQStCO3lCQUNoQzs7Ozs7R0FLUjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXNldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgZnJvbVRpdGxlTmFtZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XG5cbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XG4gIC8vIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGR1cmF0aW9uSW5TZWNvbmRzID0gNTsgICAgICAgICAgICAgLy8gVGhpcyBpcyBTbmFja0JhciBzZXQgdGltZVxuICBwdWJsaWMgdmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZTogYW55ID0nJztcblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgRm9ybSBuYW1lXG4gIHNldCBmcm9tVGl0bGVOYW1lKGZyb21UaXRsZU5hbWVWYWw6IGFueSkge1xuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gKGZyb21UaXRsZU5hbWVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IGZyb21UaXRsZU5hbWVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUpO1xuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybFZhbHVlKTtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgYW5kIHNvdXJjZVxuXG4gIHB1YmxpYyBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnRWYWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xuXG4gIHNldCBsb2dvKGxvZ29WYWw6IGFueSkge1xuICAgIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuICBzZXQgdmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2VWYWw6IGFueSkge1xuICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSA9IHZhbGlkYXRpb25NZXNzYWdlVmFsO1xuICB9IFxuXG5cbiAgLy8gQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIC8vIHNldCB2YWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZXZhbDogYW55KSB7XG4gIC8vICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlID0gKHZhbGlkYXRpb25NZXNzYWdldmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gIC8vICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlID0gdmFsaWRhdGlvbk1lc3NhZ2V2YWw7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlKTtcbiAgLy8gfVxuICBwdWJsaWMgYWNjZXNzY29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgIHRoaXMuYWNjZXNzY29kZSA9IHBhcmFtc1sndG9rZW4nXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZXNzY29kZSk7XG4gICAgfSlcblxuXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuUGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvcl1dLFxuICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSwge1xuICAgICAgdmFsaWRhdG9yOiB0aGlzLm1hY2hwYXNzd29yZCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJylcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coJysrKysrKysrJywgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybFZhbHVlKTsgICAgICAgLy8gc2V0IHRoZSBzZXJ2ZXIgdXJsIFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vIGNsZWFyIHRoZSBlbmRwb2ludCBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcblxuICB9XG4gIC8vICB0aGlzIGZ1bmN0aW9uIGlzIHVzZSBmb3IgbWFjaCBwYXNzd29yZCBhbmQgY29uZmlybSBQYXNzd29yZCBcblxuICBtYWNocGFzc3dvcmQocGFzc3dvcmRreWU6IHN0cmluZywgY29uZmlybXBhc3N3b3Jka3llOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGdyb3VwOiBGb3JtR3JvdXApID0+IHtcbiAgICAgIGxldCBwYXNzd29yZElucHV0ID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRreWVdLFxuICAgICAgICBjb25maXJtcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1wYXNzd29yZGt5ZV07XG4gICAgICBpZiAocGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gY29uZmlybXBhc3N3b3JkSW5wdXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1wYXNzd29yZElucHV0LnNldEVycm9ycyh7IG5vdEVxdWl2YWxlbnQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1wYXNzd29yZElucHV0LnNldEVycm9ycyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cblxuICBQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yID0gZnVuY3Rpb24gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgIHwgbnVsbCB7XG4gICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBjb250cm9sLnZhbHVlIHx8ICcnO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuY29uc29sZS5sb2coY29udHJvbClcbiAgICAvLyBVcHBlciBDYXNlIFZhbGlkYXRpb25cbiAgICAvLyBpZiAodHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS51cHBlckNhc2VDaGFyYWN0ZXJzICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUudXBwZXJDYXNlQ2hhcmFjdGVycykgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnVwcGVyQ2FzZUNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgLy8gICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUudXBwZXJDYXNlQ2hhcmFjdGVyc01lc3NhZ2UgfTtcbiAgICAvLyB9XG5cblxuICAgIC8vIC8vIExvd2VyIENhc2UgVmFsaWRhdGlvblxuICAgIC8vIGlmICh0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLmxvd2VyQ2FzZUNoYXJhY3RlcnMgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5sb3dlckNhc2VDaGFyYWN0ZXJzKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubG93ZXJDYXNlQ2hhcmFjdGVycy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgIHJldHVybiB7IHBhc3N3b3JkU3RyZW5ndGg6IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5sb3dlckNhc2VDaGFyYWN0ZXJzTWVzc2FnZSB9O1xuICAgIC8vIH1cblxuICAgIC8vIC8vIE51bWJlciBvZiBDaGFyYWN0ZXJzIFZhbGlkYXRpb25cbiAgICAvLyBpZiAodHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5udW1iZXJDaGFyYWN0ZXJzICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubnVtYmVyQ2hhcmFjdGVycykgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm51bWJlckNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWx1ZSwgJysrKycpXG4gICAgLy8gICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubnVtYmVyQ2hhcmFjdGVyc01lc3NhZ2UgfTtcbiAgICAvLyB9XG5cblxuICAgIC8vIC8vIFBzZWNpYWwgQ2FzZSBWYWxpZGF0aW9uXG4gICAgLy8gaWYgKHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUuc3BlY2lhbENoYXJhY3RlcnMgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5zcGVjaWFsQ2hhcmFjdGVycykgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgIC8vICAgY29uc29sZS5sb2codmFsdWUsICcrKysnKVxuICAgIC8vICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzTWVzc2FnZSB9O1xuICAgIC8vIH1cblxuICAgIC8vIC8vIE1pbiBOdW1iZXIgVmFsaWRhdGlvblxuICAgIC8vIGlmICh0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm1pbkxlbmd0aE9mQ2hhcmFjdGVycyAhPSBudWxsICYmIHR5cGVvZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZVZhbHVlLm1pbkxlbmd0aE9mQ2hhcmFjdGVycykgIT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUubGVuZ3RoIDw9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5taW5MZW5ndGhPZkNoYXJhY3RlcnMpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHZhbHVlLCAnKysrJylcbiAgICAvLyAgIHJldHVybiB7IHBhc3N3b3JkU3RyZW5ndGg6IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5taW5MZW5ndGhPZkNoYXJhY3RlcnNNZXNzYWdlIH07XG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyBNYXggTnVtYmVyIFZhbGlkYXRpb25cbiAgICAvLyBpZiAodHlwZW9mICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5tYXhMZW5ndGhPZkNoYXJhY3RlcnMgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VWYWx1ZS5tYXhMZW5ndGhPZkNoYXJhY3RlcnMpICE9ICd1bmRlZmluZWQnICYmIHZhbHVlLmxlbmd0aCA+PSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWF4TGVuZ3RoT2ZDaGFyYWN0ZXJzKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWx1ZSwgJysrKycpXG4gICAgLy8gICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlVmFsdWUubWF4TGVuZ3RoT2ZDaGFyYWN0ZXJzTWVzc2FnZSB9O1xuICAgIC8vIH1cblxuICAgIGxldCB1cHBlckNhc2VDaGFyYWN0ZXJzID0gL1tBLVpdKy9nXG4gICAgaWYgKHVwcGVyQ2FzZUNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgYXQgbGVhc3Qgb25lIFVwcGVyIGNhc2UgY2hhcmFjdGVyYCB9O1xuICAgIH1cblxuICAgIGxldCBsb3dlckNhc2VDaGFyYWN0ZXJzID0gL1thLXpdKy9nXG4gICAgaWYgKGxvd2VyQ2FzZUNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgYXQgbGVhc3Qgb25lIGxvd2VyIGNhc2UgY2hhcmFjdGVyYCB9O1xuICAgIH1cblxuXG4gICAgbGV0IG51bWJlckNoYXJhY3RlcnMgPSAvWzAtOV0rL2dcbiAgICBpZiAobnVtYmVyQ2hhcmFjdGVycy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB7IHBhc3N3b3JkU3RyZW5ndGg6IGBQYXNzd29yZCBhdCBsZWFzdCBvbmUgbnVtYmVyIGNoYXJhY3RlcnNgIH07XG4gICAgfVxuXG4gICAgbGV0IHNwZWNpYWxDaGFyYWN0ZXJzID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dKy9cbiAgICBpZiAoc3BlY2lhbENoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyYCB9O1xuICAgIH1cblxuaWYgKHZhbHVlLmxlbmd0aCA8PTYgKSB7XG4gICAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgbXVzdCBjb250YWluIDYgY2hhcmFjdGVyYCB9O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cblxuXG4gIC8qKioqKioqKiogUmVzZXQgUGFzc3dvcmQgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi9cbiAgcmVzZXRQYXNzd29yZFN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlKTtcbiAgICBsZXQgeDogYW55O1xuICAgIGZvciAoeCBpbiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzZXRQYXNzd29yZEZvcm0udmFsaWQpIHtcbiAgICAgIGxldCBkYXRhMTogYW55ID0geyBcInBhc3N3b3JkXCI6IHRoaXMucmVzZXRQYXNzd29yZEZvcm0udmFsdWUucGFzc3dvcmQsIFwiYWNjZXNzY29kZVwiOiB0aGlzLmFjY2Vzc2NvZGUgfVxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgJ2RhdGEnOiBkYXRhMSxcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxuICAgICAgfVxuXG5cbiAgICAgIC8vIGRhdGEuYWNjZXNzY29kZSA9IHRoaXMuYWNjZXNzY29kZTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5yZWRpcmVjdF91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmFkZEVuZHBvaW50VmFsdWUucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoKTtcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7ICAgICAgIC8vIFVzZSBmb3IgcmVzZXQgdGhlIGZvcm1cbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoc25hY2tCYXJSZXNldENvbXBvbmVudCwge1xuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwLFxuICAgIH0pO1xuICB9XG5cblxuICAvKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IGVuZCBoZXJlKioqKioqKioqL1xuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItbW9kYWxlJyxcbiAgdGVtcGxhdGU6IGBQYXNzd29yZCBjaGFuZ2VkIHN1Y2Nlc3NmdWxseWAsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZSB7XG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3Mgc25hY2tCYXJSZXNldENvbXBvbmVudCB7IH1cbiJdfQ==