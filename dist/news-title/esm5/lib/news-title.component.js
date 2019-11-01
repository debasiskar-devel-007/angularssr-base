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
            // console.log(this.serverUrlValue);
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
            console.log('The dialog was closed');
            console.log(result);
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
        // console.log(this.serverURL);
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
        console.log('ok----');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFMUYsZ0NBS0M7OztJQUpDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBc0I7O0lBQ3RCLCtCQUFjOztBQUtoQjtJQXlDRSw0QkFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVUsU0FBc0IsRUFBUyxNQUFpQjtRQUN6SCx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsMkpBQTJKO1FBQzNKLE1BQU07UUFOVyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbENwSCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFNLEVBQUUsQ0FBQztRQTRCbEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBWWpDLHFCQUFxQjtRQUNyQixtQ0FBbUM7SUFFckMsQ0FBQztJQXpDRCxzQkFDSSx5Q0FBUzs7Ozs7UUFE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Q0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0RCxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzMUZBQXlDOztpQkFHMUM7Ozs7Z0JBM0lxQixZQUFZO2dEQW1KN0IsTUFBTSxTQUFDLGVBQWU7Z0JBcEpsQixVQUFVO2dCQURDLFdBQVc7OztnQ0FpSjVCLFNBQVMsU0FBQyxrQkFBa0I7O0lBOEQvQixnQkFBQztDQUFBLEFBdkVELElBdUVDO1NBakVZLFNBQVM7OztJQUVwQixtQ0FBaUM7O0lBQ2pDLGtDQUFpRTs7SUFHL0QsOEJBQXlDOztJQUN6Qyx5QkFBZ0Q7O0lBQ2hELCtCQUE2Qjs7SUFBRSx1QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciwgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgZm9ybVRpdGxlVmFsdWU6IGFueTtcclxuICBzZXJ2ZXJVcmxWYWx1ZTogYW55O1xyXG4gIGFkZEVuZHBvaW50VmFsdWU6IGFueTtcclxuICBsb2dvVmFsdWU6YW55O1xyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5ld3NUaXRsZScsXHJcbiAgLy8gdGVtcGxhdGVVcmw6Jy4vbmV3cy10aXRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlVXJsczogWycuL25ld3MtdGl0bGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55PScnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbG9nbyh2IDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IHY7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsVmFsdWUpO1xyXG5cclxuICB9XHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgQW5kIHNvdXJjZVxyXG4gIHB1YmxpYyBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnRWYWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50VmFsdWUpXHJcbiAgfVxyXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG5cclxuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHM6IGFueSA9IDEwO1xyXG5cclxuICBwdWJsaWMgbmV3c0xhdHRlckZvcm06IEZvcm1Hcm91cDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcclxuICAgIC8vIHRoaXMubmV3c0xhdHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgIC8vICAgZnVsbG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAvLyAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgLy8gICBjb21wYW55OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgLy8gICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV1cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAvLyBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgIC8vICAgdGhpcy5vcGVuU25hY2tCYXIoKTsgfSw0MDAwKTsgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIG9wZW5TbmFja0JhcigpIHtcclxuICAvLyAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KE5ld3NUaXRsZUNvbXBvbmVudCwge1xyXG4gIC8vICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlbkRpYWxvZygpOyAgICAgIFxyXG4gICAgfSwgNTAwKTtcclxuICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIG5ld3NMYXR0ZXJGb3JtU3VibWl0KCkge1xyXG4gIC8vICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9scykge1xyXG4gIC8vICAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgaWYgKHRoaXMubmV3c0xhdHRlckZvcm0udmFsaWQpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XHJcbiAgLy8gICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgLy8gICAgICAgJ2RhdGEnOiB0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlLFxyXG4gIC8vICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25jZSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcclxuICAvLyAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAvLyAgICAgICByZXN1bHQgPSByZXNwb25jZTtcclxuICAvLyAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gIC8vICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ29rLS0tLScpO1xyXG4gIC8vICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKG1vZGFsRGF0YSwge1xyXG4gICAgICAvLyB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICBhZGRFbmRwb2ludFZhbHVlOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUsXHJcbiAgICAgICAgc2VydmVyVXJsVmFsdWU6IHRoaXMuc2VydmVyVXJsVmFsdWUsXHJcbiAgICAgICAgZm9ybVRpdGxlVmFsdWU6dGhpcy5mb3JtVGl0bGVWYWx1ZSxcclxuICAgICAgICBsb2dvVmFsdWU6dGhpcy5sb2dvVmFsdWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vZGFsRGF0YScsXHJcbiAgdGVtcGxhdGVVcmw6Jy4vbmV3cy10aXRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gdGVtcGxhdGVVcmw6ICcuL21vZGFsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgbW9kYWxEYXRhIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIG5ld3NMYXR0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8bW9kYWxEYXRhPixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSxcclxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyKSB7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHRoaXMubmV3c0xhdHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZnVsbG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb21wYW55OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLmRhdGEuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxyXG4gICAgfSwgNTApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xyXG5cclxuXHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZGF0YS5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbiAgbmV3c0xhdHRlckZvcm1TdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlKTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHMpIHtcclxuICAgICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xyXG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICdkYXRhJzogdGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSxcclxuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmRhdGEuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25jZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAgICAgICByZXN1bHQgPSByZXNwb25jZTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcclxuICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=