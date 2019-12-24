/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUUxRixnQ0FLQzs7O0lBSkMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUFzQjs7SUFDdEIsK0JBQWM7O0FBV2hCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUFtQzdCLFlBQW1CLEVBQWUsRUFBUyxVQUFzQixFQUFVLFNBQXNCLEVBQVMsTUFBaUI7UUFDekgsd0NBQXdDO1FBQ3hDLHlDQUF5QztRQUN6QyxzQ0FBc0M7UUFDdEMsd0NBQXdDO1FBQ3hDLDJKQUEySjtRQUMzSixNQUFNO1FBTlcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWxDcEgsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBTSxFQUFFLENBQUM7UUE0QmxCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQVlqQyxxQkFBcUI7UUFDckIsbUNBQW1D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RSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07YUFDNUM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7b0JBQ2xCLE1BQU0sR0FBUSxFQUFFO2dCQUNwQixNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUNsQixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNoQztZQUNILENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUlELGNBQWMsQ0FBQyxHQUFRO1FBQ3JCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4dUZBQXlDOzthQUcxQzs7OztZQTNJcUIsWUFBWTs0Q0FtSjdCLE1BQU0sU0FBQyxlQUFlO1lBcEpsQixVQUFVO1lBREMsV0FBVzs7OzRCQWlKNUIsU0FBUyxTQUFDLGtCQUFrQjs7OztJQUQ3QixtQ0FBaUM7O0lBQ2pDLGtDQUFpRTs7SUFHL0QsOEJBQXlDOztJQUN6Qyx5QkFBZ0Q7O0lBQ2hELCtCQUE2Qjs7SUFBRSx1QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciwgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgZm9ybVRpdGxlVmFsdWU6IGFueTtcbiAgc2VydmVyVXJsVmFsdWU6IGFueTtcbiAgYWRkRW5kcG9pbnRWYWx1ZTogYW55O1xuICBsb2dvVmFsdWU6YW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5ld3NUaXRsZScsXG4gIC8vIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlVXJsczogWycuL25ld3MtdGl0bGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55PScnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb2dvKHYgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IHY7XG4gIH1cbiAgXG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG4gICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09XCIsdGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBBbmQgc291cmNlXG4gIHB1YmxpYyBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnRWYWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSlcbiAgfVxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG5cbiAgcHVibGljIGR1cmF0aW9uSW5TZWNvbmRzOiBhbnkgPSAxMDtcblxuICBwdWJsaWMgbmV3c0xhdHRlckZvcm06IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgLy8gdGhpcy5uZXdzTGF0dGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIC8vICAgZnVsbG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAvLyAgIGNvbXBhbnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV1cbiAgICAvLyB9KTtcblxuXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgLy8gICB0aGlzLm9wZW5TbmFja0JhcigpOyB9LDQwMDApOyBcbiAgICBcbiAgfVxuXG4gIC8vIG9wZW5TbmFja0JhcigpIHtcbiAgLy8gICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChOZXdzVGl0bGVDb21wb25lbnQsIHtcbiAgLy8gICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5EaWFsb2coKTsgICAgICBcbiAgICB9LCA1MDApO1xuICAgXG4gICAgXG4gIH1cblxuICAvLyBuZXdzTGF0dGVyRm9ybVN1Ym1pdCgpIHtcbiAgLy8gICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzKSB7XG4gIC8vICAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xuICAvLyAgIH1cbiAgLy8gICBpZiAodGhpcy5uZXdzTGF0dGVyRm9ybS52YWxpZCkge1xuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XG4gIC8vICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAvLyAgICAgICAnZGF0YSc6IHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUsXG4gIC8vICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcbiAgLy8gICAgIH07XG4gIC8vICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbmNlKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcbiAgLy8gICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gIC8vICAgICAgIHJlc3VsdCA9IHJlc3BvbmNlO1xuICAvLyAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAvLyAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIC8vIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ29rLS0tLScpO1xuICAvLyAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgLy8gfVxuXG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKG1vZGFsRGF0YSwge1xuICAgICAgLy8gd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7XG5cbiAgICAgICAgYWRkRW5kcG9pbnRWYWx1ZTogdGhpcy5hZGRFbmRwb2ludFZhbHVlLFxuICAgICAgICBzZXJ2ZXJVcmxWYWx1ZTogdGhpcy5zZXJ2ZXJVcmxWYWx1ZSxcbiAgICAgICAgZm9ybVRpdGxlVmFsdWU6dGhpcy5mb3JtVGl0bGVWYWx1ZSxcbiAgICAgICAgbG9nb1ZhbHVlOnRoaXMubG9nb1ZhbHVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuXG5cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsRGF0YScsXG4gIHRlbXBsYXRlVXJsOicuL25ld3MtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICAvLyB0ZW1wbGF0ZVVybDogJy4vbW9kYWxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBtb2RhbERhdGEgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBuZXdzTGF0dGVyRm9ybTogRm9ybUdyb3VwO1xuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxtb2RhbERhdGE+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSxcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBmdWxsbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGdyb3VwOiBbMCxdLFxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb21wYW55OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuZGF0YS5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiKysrKysrKysrKysrKysrXCIsdGhpcy5kYXRhLnNlcnZlclVybFZhbHVlKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gIENsZWFyIHRoZSBlbmRwb2ludFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZGF0YS5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIG5ld3NMYXR0ZXJGb3JtU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubmV3c0xhdHRlckZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbGlkKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlKTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICdkYXRhJzogdGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSxcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5kYXRhLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXG4gICAgICB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25jZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXNwb25jZTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29rLS0tPy0nKTtcbiAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxufVxuXG4iXX0=