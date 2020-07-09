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
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.accesscode = params['token'];
            console.log(this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
    }
    // This is SnackBar set time
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
                template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Enter New Password\" type=\"password\" formControlName=\"password\" \n        (blur)=\"inputUntouched('password')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n          Password field can not be blank</mat-error>\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Confirm New Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n          Confirm Password field can not be blank</mat-error>\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Update Password</button>\n\n    </form>\n  </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
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
    logo: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVVoRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7SUFvRGpDLFlBQW1CLEVBQWUsRUFBUyxJQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFxQixFQUFTLFVBQXNCLEVBQVUsUUFBcUI7UUFBM0osT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQWhEdkssdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBUSxFQUFFLENBQUM7O1FBRXBCLHNCQUFpQixHQUFHLENBQUMs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QkFDaEM7Ozs7O0dBS1I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlc2V0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgcHVibGljIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmcm9tVGl0bGVOYW1lVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcblxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcbiAgLy8gcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHMgPSA1OyAgICAgICAgICAgICAvLyBUaGlzIGlzIFNuYWNrQmFyIHNldCB0aW1lXG5cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgRm9ybSBuYW1lXG4gIHNldCBmcm9tVGl0bGVOYW1lKGZyb21UaXRsZU5hbWVWYWw6IGFueSkge1xuICAgIHRoaXMuZnJvbVRpdGxlTmFtZVZhbHVlID0gKGZyb21UaXRsZU5hbWVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IGZyb21UaXRsZU5hbWVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUpO1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsVmFsdWUpO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBhbmQgc291cmNlXG5cbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXG5cbiAgc2V0IGxvZ28obG9nb1ZhbDogYW55KSB7XG4gICAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xuICB9XG5cblxuICAvLyBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgLy8gc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICAvLyB9XG4gIHB1YmxpYyBhY2Nlc3Njb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblxuICAgICAgdGhpcy5hY2Nlc3Njb2RlID0gcGFyYW1zWyd0b2tlbiddO1xuICAgICAgY29uc29sZS5sb2codGhpcy5hY2Nlc3Njb2RlKTtcbiAgICB9KVxuXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9LCB7XG4gICAgICB2YWxpZGF0b3I6IHRoaXMubWFjaHBhc3N3b3JkKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyBjbGVhciB0aGUgZW5kcG9pbnQgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuICAvLyAgdGhpcyBmdW5jdGlvbiBpcyB1c2UgZm9yIG1hY2ggcGFzc3dvcmQgYW5kIGNvbmZpcm0gUGFzc3dvcmQgXG5cbiAgbWFjaHBhc3N3b3JkKHBhc3N3b3Jka3llOiBzdHJpbmcsIGNvbmZpcm1wYXNzd29yZGt5ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKSA9PiB7XG4gICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3Jka3llXSxcbiAgICAgICAgY29uZmlybXBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1tjb25maXJtcGFzc3dvcmRreWVdO1xuICAgICAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgIT09IGNvbmZpcm1wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMoeyBub3RFcXVpdmFsZW50OiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25maXJtcGFzc3dvcmRJbnB1dC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG5cblxuICAvKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovXG4gIHJlc2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWx1ZSk7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgZGF0YTE6IGFueSA9IHsgXCJwYXNzd29yZFwiOiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkLCBcImFjY2Vzc2NvZGVcIjogdGhpcy5hY2Nlc3Njb2RlIH1cbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICdkYXRhJzogZGF0YTEsXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRhLmFjY2Vzc2NvZGUgPSB0aGlzLmFjY2Vzc2NvZGU7XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGlmICh0aGlzLmFkZEVuZHBvaW50VmFsdWUucmVkaXJlY3RfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5hZGRFbmRwb2ludFZhbHVlLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAvLyBVc2UgZm9yIHJlc2V0IHRoZSBmb3JtXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyUmVzZXRDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLW1vZGFsZScsXG4gIHRlbXBsYXRlOiBgUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlgLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUge1xuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIHNuYWNrQmFyUmVzZXRDb21wb25lbnQgeyB9XG4iXX0=