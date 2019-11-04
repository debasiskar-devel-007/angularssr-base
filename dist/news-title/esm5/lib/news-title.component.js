/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.formTitleValue;
    /** @type {?} */
    DialogData.prototype.serverUrlValue;
    /** @type {?} */
    DialogData.prototype.addEndpointValue;
    /** @type {?} */
    DialogData.prototype.logoValue;
}
var NewsTitleComponent = /** @class */ (function () {
    function NewsTitleComponent(fb, apiService, _snackBar, dialog) {
        // this.newsLatterForm = this.fb.group({
        //   fullname: ['', Validators.required],
        //   phone: ['', Validators.required],
        //   company: ['', Validators.required],
        //   email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        // });
        this.fb = fb;
        this.apiService = apiService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.durationInSeconds = 10;
        // setInterval(()=> {
        //   this.openSnackBar(); },4000); 
    }
    Object.defineProperty(NewsTitleComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "logo", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.logoValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            // console.log("======================",this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
            // console.log(this.addEndpointValue)
        },
        enumerable: true,
        configurable: true
    });
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    /**
     * @return {?}
     */
    NewsTitleComponent.prototype.ngOnInit = 
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.openDialog();
        }), 500);
    };
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    /**
     * @return {?}
     */
    NewsTitleComponent.prototype.openDialog = 
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogRef = this.dialog.open(modalData, {
            // width: '250px',
            data: {
                addEndpointValue: this.addEndpointValue,
                serverUrlValue: this.serverUrlValue,
                formTitleValue: this.formTitleValue,
                logoValue: this.logoValue
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log('The dialog was closed');
            // console.log(result);
        }));
    };
    NewsTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-newsTitle',
                    // templateUrl:'./news-title.component.html',
                    template: "",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    NewsTitleComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: MatSnackBar },
        { type: MatDialog }
    ]; };
    NewsTitleComponent.propDecorators = {
        formTitle: [{ type: Input }],
        logo: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
    };
    return NewsTitleComponent;
}());
export { NewsTitleComponent };
if (false) {
    /** @type {?} */
    NewsTitleComponent.prototype.formTitleValue;
    /** @type {?} */
    NewsTitleComponent.prototype.serverUrlValue;
    /** @type {?} */
    NewsTitleComponent.prototype.addEndpointValue;
    /** @type {?} */
    NewsTitleComponent.prototype.logoValue;
    /** @type {?} */
    NewsTitleComponent.prototype.formDirective;
    /** @type {?} */
    NewsTitleComponent.prototype.durationInSeconds;
    /** @type {?} */
    NewsTitleComponent.prototype.newsLatterForm;
    /** @type {?} */
    NewsTitleComponent.prototype.fb;
    /** @type {?} */
    NewsTitleComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    NewsTitleComponent.prototype._snackBar;
    /** @type {?} */
    NewsTitleComponent.prototype.dialog;
}
var modalData = /** @class */ (function () {
    function modalData(dialogRef, data, apiService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.fb = fb;
        // console.log(data);
        this.newsLatterForm = this.fb.group({
            fullname: ['', Validators.required],
            group: [0,],
            phone: ['', Validators.required],
            company: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        });
    }
    /**
     * @return {?}
     */
    modalData.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.data.serverUrlValue); //  set the server url
        }), 50);
        // console.log("+++++++++++++++",this.data.serverUrlValue);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.data.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /**
     * @return {?}
     */
    modalData.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    modalData.prototype.newsLatterFormSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.newsLatterForm.value);
        for (var key in this.newsLatterForm.controls) {
            this.newsLatterForm.controls[key].markAsTouched();
        }
        if (this.newsLatterForm.valid) {
            console.log(this.newsLatterForm.value);
            /** @type {?} */
            var data = {
                'data': this.newsLatterForm.value,
                "source": this.data.addEndpointValue.source
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} responce
             * @return {?}
             */
            function (responce) {
                console.log(responce);
                /** @type {?} */
                var result = {};
                result = responce;
                if (result.status == "success") {
                    _this.formDirective.resetForm();
                }
            }));
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    modalData.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('ok---?-');
        this.newsLatterForm.controls[val].markAsUntouched();
    };
    modalData.decorators = [
        { type: Component, args: [{
                    selector: 'modalData',
                    template: "\r\n<mat-card >\r\n\r\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\r\n             <img  [src]=\"data.logoValue\">\r\n         </span>\r\n   \r\n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\r\n   \r\n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\r\n                           Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Phone field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\r\n                           Phone field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!-- Email field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\r\n                           Email is not valid</mat-error>\r\n                       <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\r\n                           Email field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Company field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\r\n                           Full Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n   \r\n           <button mat-raised-button color=\"primary\">Submit</button>\r\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\r\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\r\n               clear\r\n               </i>\r\n   \r\n   \r\n       </form>\r\n   </mat-card>",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    modalData.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: ApiService },
        { type: FormBuilder }
    ]; };
    modalData.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
    };
    return modalData;
}());
export { modalData };
if (false) {
    /** @type {?} */
    modalData.prototype.newsLatterForm;
    /** @type {?} */
    modalData.prototype.formDirective;
    /** @type {?} */
    modalData.prototype.dialogRef;
    /** @type {?} */
    modalData.prototype.data;
    /** @type {?} */
    modalData.prototype.apiService;
    /** @type {?} */
    modalData.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFMUYsZ0NBS0M7OztJQUpDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBc0I7O0lBQ3RCLCtCQUFjOztBQUtoQjtJQXlDRSw0QkFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVUsU0FBc0IsRUFBUyxNQUFpQjtRQUN6SCx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsMkpBQTJKO1FBQzNKLE1BQU07UUFOVyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbENwSCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFNLEVBQUUsQ0FBQztRQTRCbEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBWWpDLHFCQUFxQjtRQUNyQixtQ0FBbUM7SUFFckMsQ0FBQztJQXpDRCxzQkFDSSx5Q0FBUzs7Ozs7UUFE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ZUFBZSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsczFGQUF5Qzs7aUJBRzFDOzs7O2dCQTNJcUIsWUFBWTtnREFtSjdCLE1BQU0sU0FBQyxlQUFlO2dCQXBKbEIsVUFBVTtnQkFEQyxXQUFXOzs7Z0NBaUo1QixTQUFTLFNBQUMsa0JBQWtCOztJQStEL0IsZ0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQWxFWSxTQUFTOzs7SUFFcEIsbUNBQWlDOztJQUNqQyxrQ0FBaUU7O0lBRy9ELDhCQUF5Qzs7SUFDekMseUJBQWdEOztJQUNoRCwrQkFBNkI7O0lBQUUsdUJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIGZvcm1UaXRsZVZhbHVlOiBhbnk7XHJcbiAgc2VydmVyVXJsVmFsdWU6IGFueTtcclxuICBhZGRFbmRwb2ludFZhbHVlOiBhbnk7XHJcbiAgbG9nb1ZhbHVlOmFueTtcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZXdzVGl0bGUnLFxyXG4gIC8vIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZVVybHM6IFsnLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueT0nJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGxvZ28odiA6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dvVmFsdWUgPSB2O1xyXG4gIH1cclxuICBcclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT1cIix0aGlzLnNlcnZlclVybFZhbHVlKTtcclxuXHJcbiAgfVxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IEFuZCBzb3VyY2VcclxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludFZhbHVlKVxyXG4gIH1cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuXHJcbiAgcHVibGljIGR1cmF0aW9uSW5TZWNvbmRzOiBhbnkgPSAxMDtcclxuXHJcbiAgcHVibGljIG5ld3NMYXR0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICAvLyB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAvLyAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgLy8gICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIC8vICAgY29tcGFueTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIC8vICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAvLyAgIHRoaXMub3BlblNuYWNrQmFyKCk7IH0sNDAwMCk7IFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBvcGVuU25hY2tCYXIoKSB7XHJcbiAgLy8gICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChOZXdzVGl0bGVDb21wb25lbnQsIHtcclxuICAvLyAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5EaWFsb2coKTsgICAgICBcclxuICAgIH0sIDUwMCk7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBuZXdzTGF0dGVyRm9ybVN1Ym1pdCgpIHtcclxuICAvLyAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHMpIHtcclxuICAvLyAgICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcclxuICAvLyAgIH1cclxuICAvLyAgIGlmICh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbGlkKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xyXG4gIC8vICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gIC8vICAgICAgICdkYXRhJzogdGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSxcclxuICAvLyAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XHJcbiAgLy8gICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgLy8gICAgICAgcmVzdWx0ID0gcmVzcG9uY2U7XHJcbiAgLy8gICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAvLyAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcclxuICAvLyAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAvLyB9XHJcblxyXG5cclxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3Blbihtb2RhbERhdGEsIHtcclxuICAgICAgLy8gd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgYWRkRW5kcG9pbnRWYWx1ZTogdGhpcy5hZGRFbmRwb2ludFZhbHVlLFxyXG4gICAgICAgIHNlcnZlclVybFZhbHVlOiB0aGlzLnNlcnZlclVybFZhbHVlLFxyXG4gICAgICAgIGZvcm1UaXRsZVZhbHVlOnRoaXMuZm9ybVRpdGxlVmFsdWUsXHJcbiAgICAgICAgbG9nb1ZhbHVlOnRoaXMubG9nb1ZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtb2RhbERhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9tb2RhbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmV3cy10aXRsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIG1vZGFsRGF0YSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyBuZXdzTGF0dGVyRm9ybTogRm9ybUdyb3VwO1xyXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPG1vZGFsRGF0YT4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXHJcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBncm91cDogWzAsXSxcclxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbXBhbnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIHNlcnZlciB1cmxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuZGF0YS5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrK1wiLHRoaXMuZGF0YS5zZXJ2ZXJVcmxWYWx1ZSk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5kYXRhLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuICBuZXdzTGF0dGVyRm9ybVN1Ym1pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9scykge1xyXG4gICAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubmV3c0xhdHRlckZvcm0udmFsaWQpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XHJcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgJ2RhdGEnOiB0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlLFxyXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuZGF0YS5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbmNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uY2UpO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbmNlO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29rLS0tPy0nKTtcclxuICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=