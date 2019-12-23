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
            group: [0,],
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
                template: "\n<mat-card >\n\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\n             <img  [src]=\"data.logoValue\">\n         </span>\n   \n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\n   \n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\n           <mat-form-field>\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\n                           Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Phone field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\n                           Phone field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!-- Email field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\n                           Email is not valid</mat-error>\n                       <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\n                           Email field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Company field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\n                           Full Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n   \n           <button mat-raised-button color=\"primary\">Submit</button>\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\n               clear\n               </i>\n   \n   \n       </form>\n   </mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTFGLGdDQUtDOzs7SUFKQyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsc0NBQXNCOztJQUN0QiwrQkFBYzs7QUFXaEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQW1DN0IsWUFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVUsU0FBc0IsRUFBUyxNQUFpQjtRQUN6SCx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsMkpBQTJKO1FBQzNKLE1BQU07UUFOVyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbENwSCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFNLEVBQUUsQ0FBQztRQTRCbEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBWWpDLHFCQUFxQjtRQUNyQixtQ0FBbUM7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LElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTTthQUM1QztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDbEIsTUFBTSxHQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ2xCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2hDO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7O0lBSUQsY0FBYyxDQUFDLEdBQVE7UUFDckIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RELENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDh1RkFBeUM7O2FBRzFDOzs7O1lBM0lxQixZQUFZOzRDQW1KN0IsTUFBTSxTQUFDLGVBQWU7WUFwSmxCLFVBQVU7WUFEQyxXQUFXOzs7NEJBaUo1QixTQUFTLFNBQUMsa0JBQWtCOzs7O0lBRDdCLG1DQUFpQzs7SUFDakMsa0NBQWlFOztJQUcvRCw4QkFBeUM7O0lBQ3pDLHlCQUFnRDs7SUFDaEQsK0JBQTZCOztJQUFFLHVCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBmb3JtVGl0bGVWYWx1ZTogYW55O1xuICBzZXJ2ZXJVcmxWYWx1ZTogYW55O1xuICBhZGRFbmRwb2ludFZhbHVlOiBhbnk7XG4gIGxvZ29WYWx1ZTphbnk7XG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmV3c1RpdGxlJyxcbiAgLy8gdGVtcGxhdGVVcmw6Jy4vbmV3cy10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3cy10aXRsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnk9Jyc7XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvZ28odiA6IHN0cmluZykge1xuICAgIHRoaXMubG9nb1ZhbHVlID0gdjtcbiAgfVxuICBcblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT1cIix0aGlzLnNlcnZlclVybFZhbHVlKTtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IEFuZCBzb3VyY2VcbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludFZhbHVlKVxuICB9XG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cblxuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHM6IGFueSA9IDEwO1xuXG4gIHB1YmxpYyBuZXdzTGF0dGVyRm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICAvLyB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgLy8gICBmdWxsbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAvLyAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgY29tcGFueTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAvLyAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXVxuICAgIC8vIH0pO1xuXG5cbiAgICAvLyBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAvLyAgIHRoaXMub3BlblNuYWNrQmFyKCk7IH0sNDAwMCk7IFxuICAgIFxuICB9XG5cbiAgLy8gb3BlblNuYWNrQmFyKCkge1xuICAvLyAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KE5ld3NUaXRsZUNvbXBvbmVudCwge1xuICAvLyAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwLFxuICAvLyAgIH0pO1xuICAvLyB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3BlbkRpYWxvZygpOyAgICAgIFxuICAgIH0sIDUwMCk7XG4gICBcbiAgICBcbiAgfVxuXG4gIC8vIG5ld3NMYXR0ZXJGb3JtU3VibWl0KCkge1xuICAvLyAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHMpIHtcbiAgLy8gICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4gIC8vICAgfVxuICAvLyAgIGlmICh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbGlkKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlKTtcbiAgLy8gICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gIC8vICAgICAgICdkYXRhJzogdGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSxcbiAgLy8gICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxuICAvLyAgICAgfTtcbiAgLy8gICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uY2UpO1xuICAvLyAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgLy8gICAgICAgcmVzdWx0ID0gcmVzcG9uY2U7XG4gIC8vICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gIC8vICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgLy8gaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnb2stLS0tJyk7XG4gIC8vICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICAvLyB9XG5cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4obW9kYWxEYXRhLCB7XG4gICAgICAvLyB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHtcblxuICAgICAgICBhZGRFbmRwb2ludFZhbHVlOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUsXG4gICAgICAgIHNlcnZlclVybFZhbHVlOiB0aGlzLnNlcnZlclVybFZhbHVlLFxuICAgICAgICBmb3JtVGl0bGVWYWx1ZTp0aGlzLmZvcm1UaXRsZVZhbHVlLFxuICAgICAgICBsb2dvVmFsdWU6dGhpcy5sb2dvVmFsdWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWxEYXRhJyxcbiAgdGVtcGxhdGVVcmw6Jy4vbmV3cy10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9tb2RhbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25ld3MtdGl0bGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIG1vZGFsRGF0YSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG5ld3NMYXR0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPG1vZGFsRGF0YT4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHRoaXMubmV3c0xhdHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZ3JvdXA6IFswLF0sXG4gICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbXBhbnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5kYXRhLnNlcnZlclVybFZhbHVlKTsgICAgICAgIC8vICBzZXQgdGhlIHNlcnZlciB1cmxcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKytcIix0aGlzLmRhdGEuc2VydmVyVXJsVmFsdWUpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5kYXRhLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgbmV3c0xhdHRlckZvcm1TdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmV3c0xhdHRlckZvcm0udmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgJ2RhdGEnOiB0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlLFxuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmRhdGEuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgICAgIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbmNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbmNlO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2stLS0/LScpO1xuICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG59XG5cbiJdfQ==