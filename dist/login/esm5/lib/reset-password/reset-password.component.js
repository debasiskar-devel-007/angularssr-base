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
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.accesscode = params['token'];
            console.log(_this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
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
                    template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Enter New Password\" type=\"password\" formControlName=\"password\" \n        (blur)=\"inputUntouched('password')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n          Password field can not be blank</mat-error>\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Confirm New Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n          Confirm Password field can not be blank</mat-error>\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Update Password</button>\n\n    </form>\n  </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQTRERSxnQ0FBbUIsRUFBZSxFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLEtBQXFCLEVBQVMsVUFBc0IsRUFBVSxRQUFxQjtRQUE5SyxpQkFlQztRQWZrQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBaER2Syx1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQzs7UUFFcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQWEsNEJB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Qjs7SUFBRSxzQ0FBdUI7O0lBQUUsd0NBQXFCOztJQUFFLHVDQUE0Qjs7SUFBRSw0Q0FBNkI7Ozs7O0lBQUUsMENBQTZCOztBQXdHaEw7SUFBQTtJQVVzQyxDQUFDOztnQkFWdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrQkFBK0I7NkJBQ2hDLDRGQUtSO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBVnZDLElBVXVDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlc2V0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgcHVibGljIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmcm9tVGl0bGVOYW1lVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcblxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcbiAgLy8gcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHMgPSA1OyAgICAgICAgICAgICAvLyBUaGlzIGlzIFNuYWNrQmFyIHNldCB0aW1lXG5cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgRm9ybSBuYW1lXG4gIHNldCBmcm9tVGl0bGVOYW1lKGZyb21UaXRsZU5hbWVWYWw6IGFueSkge1xuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gKGZyb21UaXRsZU5hbWVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IGZyb21UaXRsZU5hbWVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUpO1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsVmFsdWUpO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBhbmQgc291cmNlXG5cbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG5cbiAgc2V0IGxvZ28obG9nb1ZhbDogYW55KSB7XG4gICAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xuICB9XG5cblxuICAvLyBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgLy8gc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICAvLyB9XG4gIHB1YmxpYyBhY2Nlc3Njb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblxuICAgICAgdGhpcy5hY2Nlc3Njb2RlID0gcGFyYW1zWyd0b2tlbiddO1xuICAgICAgY29uc29sZS5sb2codGhpcy5hY2Nlc3Njb2RlKTtcbiAgICB9KVxuXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9LCB7XG4gICAgICB2YWxpZGF0b3I6IHRoaXMubWFjaHBhc3N3b3JkKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyBjbGVhciB0aGUgZW5kcG9pbnQgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuICAvLyAgdGhpcyBmdW5jdGlvbiBpcyB1c2UgZm9yIG1hY2ggcGFzc3dvcmQgYW5kIGNvbmZpcm0gUGFzc3dvcmQgXG5cbiAgbWFjaHBhc3N3b3JkKHBhc3N3b3Jka3llOiBzdHJpbmcsIGNvbmZpcm1wYXNzd29yZGt5ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKSA9PiB7XG4gICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3Jka3llXSxcbiAgICAgICAgY29uZmlybXBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1tjb25maXJtcGFzc3dvcmRreWVdO1xuICAgICAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgIT09IGNvbmZpcm1wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMoeyBub3RFcXVpdmFsZW50OiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG5cblxuICAvKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovXG4gIHJlc2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWx1ZSk7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgZGF0YTE6IGFueSA9IHsgXCJwYXNzd29yZFwiOiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkLCBcImFjY2Vzc2NvZGVcIjogdGhpcy5hY2Nlc3Njb2RlIH1cbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICdkYXRhJzogZGF0YTEsXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRhLmFjY2Vzc2NvZGUgPSB0aGlzLmFjY2Vzc2NvZGU7XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGlmICh0aGlzLmFkZEVuZHBvaW50VmFsdWUucmVkaXJlY3RfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5hZGRFbmRwb2ludFZhbHVlLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAvLyBVc2UgZm9yIHJlc2V0IHRoZSBmb3JtXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyUmVzZXRDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLW1vZGFsZScsXG4gIHRlbXBsYXRlOiBgUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlgLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUge1xuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIHNuYWNrQmFyUmVzZXRDb21wb25lbnQgeyB9XG4iXX0=