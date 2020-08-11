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
            /** @type {?} */
            var upperCaseCharacters = /[A-Z]+/g;
            if (upperCaseCharacters.test(value) === false) {
                return { passwordStrength: "Password has to contine Upper case characters" };
            }
            /** @type {?} */
            var lowerCaseCharacters = /[a-z]+/g;
            if (lowerCaseCharacters.test(value) === false) {
                return { passwordStrength: "Password has to contine lower case characters" };
            }
            /** @type {?} */
            var numberCharacters = /[0-9]+/g;
            if (numberCharacters.test(value) === false) {
                return { passwordStrength: "Password has to contine number characters" };
            }
            /** @type {?} */
            var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (specialCharacters.test(value) === false) {
                return { passwordStrength: "Password has to contine special character" };
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
        set: 
        // This is SnackBar set time
        /**
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
                    template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoValue != ''\">\n          <img  [src]=\"logoValue\">\n      </span>\n\n        <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n        <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n            <mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Enter New Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n\n                <mat-error *ngIf=\"resetPasswordForm.get('password').hasError('passwordStrength')\">\n                    {{resetPasswordForm.get('password').errors['passwordStrength']}}\n                </mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Confirm New Password\" type=\"password\" formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n                    Confirm Password field can not be blank</mat-error>\n                <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n                <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n            </mat-form-field>\n\n            <button mat-raised-button color=\"primary\">Update Password</button>\n\n        </form>\n    </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
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
        logo: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFxQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUE0REUsZ0NBQW1CLEVBQWUsRUFBUyxJQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFxQixFQUFTLFVBQXNCLEVBQVUsUUFBcUI7UUFBOUssaUJBa0JDO1FBbEJrQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBaER2Syx1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQzs7UUFFcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQWEs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RUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrQkFBK0I7NkJBQ2hDLDRGQUtSO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBVnZDLElBVXVDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcmVzZXQtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuICBwdWJsaWMgcmVzZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZyb21UaXRsZU5hbWVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xuXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICAvLyBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBkdXJhdGlvbkluU2Vjb25kcyA9IDU7ICAgICAgICAgICAgIC8vIFRoaXMgaXMgU25hY2tCYXIgc2V0IHRpbWVcblxuXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBGb3JtIG5hbWVcbiAgc2V0IGZyb21UaXRsZU5hbWUoZnJvbVRpdGxlTmFtZVZhbDogYW55KSB7XG4gICAgdGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUgPSAoZnJvbVRpdGxlTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gZnJvbVRpdGxlTmFtZVZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSk7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcblxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cblxuXG4gIC8vIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxuICAvLyBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAvLyAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAvLyAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSk7XG4gIC8vIH1cbiAgcHVibGljIGFjY2Vzc2NvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXG4gICAgICB0aGlzLmFjY2Vzc2NvZGUgPSBwYXJhbXNbJ3Rva2VuJ107XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2Vzc2NvZGUpO1xuICAgIH0pXG5cblxuICAgIHRoaXMucmVzZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHBhc3N3b3JkOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuUGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvcl1dLFxuICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSwge1xuICAgICAgdmFsaWRhdG9yOiB0aGlzLm1hY2hwYXNzd29yZCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJylcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coJysrKysrKysrJyx0aGlzLnJlc2V0UGFzc3dvcmRGb3JtKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cbiAgLy8gIHRoaXMgZnVuY3Rpb24gaXMgdXNlIGZvciBtYWNoIHBhc3N3b3JkIGFuZCBjb25maXJtIFBhc3N3b3JkIFxuXG4gIG1hY2hwYXNzd29yZChwYXNzd29yZGt5ZTogc3RyaW5nLCBjb25maXJtcGFzc3dvcmRreWU6IHN0cmluZykge1xuICAgIHJldHVybiAoZ3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgbGV0IHBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1twYXNzd29yZGt5ZV0sXG4gICAgICAgIGNvbmZpcm1wYXNzd29yZElucHV0ID0gZ3JvdXAuY29udHJvbHNbY29uZmlybXBhc3N3b3Jka3llXTtcbiAgICAgIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSBjb25maXJtcGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gY29uZmlybXBhc3N3b3JkSW5wdXQuc2V0RXJyb3JzKHsgbm90RXF1aXZhbGVudDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29uZmlybXBhc3N3b3JkSW5wdXQuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuXG5QYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yID0gZnVuY3Rpb24gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcblxuICBsZXQgdmFsdWU6IHN0cmluZyA9IGNvbnRyb2wudmFsdWUgfHwgJyc7XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgdXBwZXJDYXNlQ2hhcmFjdGVycyA9IC9bQS1aXSsvZ1xuICBpZiAodXBwZXJDYXNlQ2hhcmFjdGVycy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4geyBwYXNzd29yZFN0cmVuZ3RoOiBgUGFzc3dvcmQgaGFzIHRvIGNvbnRpbmUgVXBwZXIgY2FzZSBjaGFyYWN0ZXJzYCB9O1xuICB9XG5cbiAgbGV0IGxvd2VyQ2FzZUNoYXJhY3RlcnMgPSAvW2Etel0rL2dcbiAgaWYgKGxvd2VyQ2FzZUNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIGhhcyB0byBjb250aW5lIGxvd2VyIGNhc2UgY2hhcmFjdGVyc2AgfTtcbiAgfVxuXG5cbiAgbGV0IG51bWJlckNoYXJhY3RlcnMgPSAvWzAtOV0rL2dcbiAgaWYgKG51bWJlckNoYXJhY3RlcnMudGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHsgcGFzc3dvcmRTdHJlbmd0aDogYFBhc3N3b3JkIGhhcyB0byBjb250aW5lIG51bWJlciBjaGFyYWN0ZXJzYCB9O1xuICB9XG5cbiAgbGV0IHNwZWNpYWxDaGFyYWN0ZXJzID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dKy9cbiAgaWYgKHNwZWNpYWxDaGFyYWN0ZXJzLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgIHJldHVybiB7IHBhc3N3b3JkU3RyZW5ndGg6IGBQYXNzd29yZCBoYXMgdG8gY29udGluZSBzcGVjaWFsIGNoYXJhY3RlcmAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cblxuICAvKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovXG4gIHJlc2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWx1ZSk7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgZGF0YTE6IGFueSA9IHsgXCJwYXNzd29yZFwiOiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkLCBcImFjY2Vzc2NvZGVcIjogdGhpcy5hY2Nlc3Njb2RlIH1cbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICdkYXRhJzogZGF0YTEsXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRhLmFjY2Vzc2NvZGUgPSB0aGlzLmFjY2Vzc2NvZGU7XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGlmICh0aGlzLmFkZEVuZHBvaW50VmFsdWUucmVkaXJlY3RfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5hZGRFbmRwb2ludFZhbHVlLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAvLyBVc2UgZm9yIHJlc2V0IHRoZSBmb3JtXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyUmVzZXRDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLW1vZGFsZScsXG4gIHRlbXBsYXRlOiBgUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlgLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUge1xuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIHNuYWNrQmFyUmVzZXRDb21wb25lbnQgeyB9XG4iXX0=