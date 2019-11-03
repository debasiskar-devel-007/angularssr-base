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
export class NewsTitleComponent {
    /**
     * @param {?} fb
     * @param {?} apiService
     * @param {?} _snackBar
     * @param {?} dialog
     */
    constructor(fb, apiService, _snackBar, dialog) {
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
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set logo(v) {
        this.logoValue = v;
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
        // console.log("======================",this.serverUrlValue);
    }
    /**
     * @param {?} addEndpointVal
     * @return {?}
     */
    set addEndpoint(addEndpointVal) {
        this.addEndpointValue = addEndpointVal;
        // console.log(this.addEndpointValue)
    }
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.openDialog();
        }), 500);
    }
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
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(modalData, {
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
        result => {
            // console.log('The dialog was closed');
            // console.log(result);
        }));
    }
}
NewsTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-newsTitle',
                // templateUrl:'./news-title.component.html',
                template: ``,
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
            }] }
];
/** @nocollapse */
NewsTitleComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: MatSnackBar },
    { type: MatDialog }
];
NewsTitleComponent.propDecorators = {
    formTitle: [{ type: Input }],
    logo: [{ type: Input }],
    serverUrl: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
};
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
export class modalData {
    /**
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} apiService
     * @param {?} fb
     */
    constructor(dialogRef, data, apiService, fb) {
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
    ngOnInit() {
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.data.serverUrlValue); //  set the server url
        }), 50);
        // console.log("+++++++++++++++",this.data.serverUrlValue);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.data.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    newsLatterFormSubmit() {
        console.log(this.newsLatterForm.value);
        for (const key in this.newsLatterForm.controls) {
            this.newsLatterForm.controls[key].markAsTouched();
        }
        if (this.newsLatterForm.valid) {
            console.log(this.newsLatterForm.value);
            /** @type {?} */
            let data = {
                'data': this.newsLatterForm.value,
                "source": this.data.addEndpointValue.source
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} responce
             * @return {?}
             */
            (responce) => {
                console.log(responce);
                /** @type {?} */
                let result = {};
                result = responce;
                if (result.status == "success") {
                    this.formDirective.resetForm();
                }
            }));
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        // console.log('ok---?-');
        this.newsLatterForm.controls[val].markAsUntouched();
    }
}
modalData.decorators = [
    { type: Component, args: [{
                selector: 'modalData',
                template: "\r\n<mat-card >\r\n\r\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\r\n             <img  [src]=\"data.logoValue\">\r\n         </span>\r\n   \r\n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\r\n   \r\n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\r\n                           Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Phone field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\r\n                           Phone field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!-- Email field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\r\n                           Email is not valid</mat-error>\r\n                       <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\r\n                           Email field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n           <!--Company field start here-->\r\n           <mat-form-field>\r\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\r\n               <mat-error\r\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\r\n                           Full Name field can not be blank</mat-error>\r\n           </mat-form-field>\r\n   \r\n   \r\n           <button mat-raised-button color=\"primary\">Submit</button>\r\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\r\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\r\n               clear\r\n               </i>\r\n   \r\n   \r\n       </form>\r\n   </mat-card>",
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
            }] }
];
/** @nocollapse */
modalData.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: ApiService },
    { type: FormBuilder }
];
modalData.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFMUYsZ0NBS0M7OztJQUpDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBc0I7O0lBQ3RCLCtCQUFjOztBQVdoQixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBbUM3QixZQUFtQixFQUFlLEVBQVMsVUFBc0IsRUFBVSxTQUFzQixFQUFTLE1BQWlCO1FBQ3pILHdDQUF3QztRQUN4Qyx5Q0FBeUM7UUFDekMsc0NBQXNDO1FBQ3RDLHdDQUF3QztRQUN4QywySkFBMko7UUFDM0osTUFBTTtRQU5XLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFsQ3BILG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQU0sRUFBRSxDQUFDO1FBNEJsQixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFZakMscUJBQXFCO1FBQ3JCLG1DQUFtQztJQUVyQyxDQUFDOzs7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O1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUNsQixNQUFNLEdBQVEsRUFBRTtnQkFDcEIsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDbEIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDaEM7WUFDSCxDQUFDLEVBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxjQUFjLENBQUMsR0FBUTtRQUNyQiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsczFGQUF5Qzs7YUFHMUM7Ozs7WUEzSXFCLFlBQVk7NENBbUo3QixNQUFNLFNBQUMsZUFBZTtZQXBKbEIsVUFBVTtZQURDLFdBQVc7Ozs0QkFpSjVCLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFEN0IsbUNBQWlDOztJQUNqQyxrQ0FBaUU7O0lBRy9ELDhCQUF5Qzs7SUFDekMseUJBQWdEOztJQUNoRCwrQkFBNkI7O0lBQUUsdUJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIGZvcm1UaXRsZVZhbHVlOiBhbnk7XHJcbiAgc2VydmVyVXJsVmFsdWU6IGFueTtcclxuICBhZGRFbmRwb2ludFZhbHVlOiBhbnk7XHJcbiAgbG9nb1ZhbHVlOmFueTtcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZXdzVGl0bGUnLFxyXG4gIC8vIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZVVybHM6IFsnLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueT0nJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGxvZ28odiA6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dvVmFsdWUgPSB2O1xyXG4gIH1cclxuICBcclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT1cIix0aGlzLnNlcnZlclVybFZhbHVlKTtcclxuXHJcbiAgfVxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IEFuZCBzb3VyY2VcclxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludFZhbHVlKVxyXG4gIH1cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuXHJcbiAgcHVibGljIGR1cmF0aW9uSW5TZWNvbmRzOiBhbnkgPSAxMDtcclxuXHJcbiAgcHVibGljIG5ld3NMYXR0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICAvLyB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAvLyAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgLy8gICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIC8vICAgY29tcGFueTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIC8vICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAvLyAgIHRoaXMub3BlblNuYWNrQmFyKCk7IH0sNDAwMCk7IFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBvcGVuU25hY2tCYXIoKSB7XHJcbiAgLy8gICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChOZXdzVGl0bGVDb21wb25lbnQsIHtcclxuICAvLyAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5EaWFsb2coKTsgICAgICBcclxuICAgIH0sIDUwMCk7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBuZXdzTGF0dGVyRm9ybVN1Ym1pdCgpIHtcclxuICAvLyAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHMpIHtcclxuICAvLyAgICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcclxuICAvLyAgIH1cclxuICAvLyAgIGlmICh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbGlkKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xyXG4gIC8vICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gIC8vICAgICAgICdkYXRhJzogdGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSxcclxuICAvLyAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XHJcbiAgLy8gICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgLy8gICAgICAgcmVzdWx0ID0gcmVzcG9uY2U7XHJcbiAgLy8gICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAvLyAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcclxuICAvLyAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAvLyB9XHJcblxyXG5cclxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3Blbihtb2RhbERhdGEsIHtcclxuICAgICAgLy8gd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgYWRkRW5kcG9pbnRWYWx1ZTogdGhpcy5hZGRFbmRwb2ludFZhbHVlLFxyXG4gICAgICAgIHNlcnZlclVybFZhbHVlOiB0aGlzLnNlcnZlclVybFZhbHVlLFxyXG4gICAgICAgIGZvcm1UaXRsZVZhbHVlOnRoaXMuZm9ybVRpdGxlVmFsdWUsXHJcbiAgICAgICAgbG9nb1ZhbHVlOnRoaXMubG9nb1ZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtb2RhbERhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9tb2RhbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmV3cy10aXRsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIG1vZGFsRGF0YSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyBuZXdzTGF0dGVyRm9ybTogRm9ybUdyb3VwO1xyXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPG1vZGFsRGF0YT4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXHJcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29tcGFueTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5kYXRhLnNlcnZlclVybFZhbHVlKTsgICAgICAgIC8vICBzZXQgdGhlIHNlcnZlciB1cmxcclxuICAgIH0sIDUwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiKysrKysrKysrKysrKysrXCIsdGhpcy5kYXRhLnNlcnZlclVybFZhbHVlKTtcclxuXHJcblxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gIENsZWFyIHRoZSBlbmRwb2ludFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmRhdGEuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgLy8gIHNldCB0aGUgZW5kcG9pbnRcclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG4gIG5ld3NMYXR0ZXJGb3JtU3VibWl0KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uZXdzTGF0dGVyRm9ybS52YWxpZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlKTtcclxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAnZGF0YSc6IHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUsXHJcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5kYXRhLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uY2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb2stLS0/LScpO1xyXG4gICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==