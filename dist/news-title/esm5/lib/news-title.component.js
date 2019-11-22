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
                    template: "\n<mat-card >\n\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\n             <img  [src]=\"data.logoValue\">\n         </span>\n   \n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\n   \n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\n           <mat-form-field>\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\n                           Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Phone field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\n                           Phone field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!-- Email field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\n                           Email is not valid</mat-error>\n                       <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\n                           Email field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Company field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\n                           Full Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n   \n           <button mat-raised-button color=\"primary\">Submit</button>\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\n               clear\n               </i>\n   \n   \n       </form>\n   </mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFMUYsZ0NBS0M7OztJQUpDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBc0I7O0lBQ3RCLCtCQUFjOztBQUtoQjtJQXlDRSw0QkFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVUsU0FBc0IsRUFBUyxNQUFpQjtRQUN6SCx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsMkpBQTJKO1FBQzNKLE1BQU07UUFOVyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbENwSCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFNLEVBQUUsQ0FBQztRQTRCbEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBWWpDLHFCQUFxQjtRQUNyQixtQ0FBbUM7SUFFckMsQ0FBQztJQXpDRCxzQkFDSSx5Q0FBUzs7Ozs7UUFE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ZUFBZSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOHVGQUF5Qzs7aUJBRzFDOzs7O2dCQTNJcUIsWUFBWTtnREFtSjdCLE1BQU0sU0FBQyxlQUFlO2dCQXBKbEIsVUFBVTtnQkFEQyxXQUFXOzs7Z0NBaUo1QixTQUFTLFNBQUMsa0JBQWtCOztJQStEL0IsZ0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQWxFWSxTQUFTOzs7SUFFcEIsbUNBQWlDOztJQUNqQyxrQ0FBaUU7O0lBRy9ELDhCQUF5Qzs7SUFDekMseUJBQWdEOztJQUNoRCwrQkFBNkI7O0lBQUUsdUJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGZvcm1UaXRsZVZhbHVlOiBhbnk7XG4gIHNlcnZlclVybFZhbHVlOiBhbnk7XG4gIGFkZEVuZHBvaW50VmFsdWU6IGFueTtcbiAgbG9nb1ZhbHVlOmFueTtcbn1cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZXdzVGl0bGUnLFxuICAvLyB0ZW1wbGF0ZVVybDonLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZVVybHM6IFsnLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdzVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueT0nJztcblxuICBASW5wdXQoKVxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9nbyh2IDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dvVmFsdWUgPSB2O1xuICB9XG4gIFxuXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PVwiLHRoaXMuc2VydmVyVXJsVmFsdWUpO1xuXG4gIH1cbiAgQElucHV0KCkgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgQW5kIHNvdXJjZVxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50VmFsdWUpXG4gIH1cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuXG4gIHB1YmxpYyBkdXJhdGlvbkluU2Vjb25kczogYW55ID0gMTA7XG5cbiAgcHVibGljIG5ld3NMYXR0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIC8vIHRoaXMubmV3c0xhdHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAvLyAgIGZ1bGxuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICBjb21wYW55OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldXG4gICAgLy8gfSk7XG5cblxuICAgIC8vIHNldEludGVydmFsKCgpPT4ge1xuICAgIC8vICAgdGhpcy5vcGVuU25hY2tCYXIoKTsgfSw0MDAwKTsgXG4gICAgXG4gIH1cblxuICAvLyBvcGVuU25hY2tCYXIoKSB7XG4gIC8vICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoTmV3c1RpdGxlQ29tcG9uZW50LCB7XG4gIC8vICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7ICAgICAgXG4gICAgfSwgNTAwKTtcbiAgIFxuICAgIFxuICB9XG5cbiAgLy8gbmV3c0xhdHRlckZvcm1TdWJtaXQoKSB7XG4gIC8vICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9scykge1xuICAvLyAgICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKHRoaXMubmV3c0xhdHRlckZvcm0udmFsaWQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUpO1xuICAvLyAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgLy8gICAgICAgJ2RhdGEnOiB0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlLFxuICAvLyAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXG4gIC8vICAgICB9O1xuICAvLyAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25jZSkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XG4gIC8vICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAvLyAgICAgICByZXN1bHQgPSByZXNwb25jZTtcbiAgLy8gICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgLy8gICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICAvLyBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbiAgLy8gICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIC8vIH1cblxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3Blbihtb2RhbERhdGEsIHtcbiAgICAgIC8vIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YToge1xuXG4gICAgICAgIGFkZEVuZHBvaW50VmFsdWU6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSxcbiAgICAgICAgc2VydmVyVXJsVmFsdWU6IHRoaXMuc2VydmVyVXJsVmFsdWUsXG4gICAgICAgIGZvcm1UaXRsZVZhbHVlOnRoaXMuZm9ybVRpdGxlVmFsdWUsXG4gICAgICAgIGxvZ29WYWx1ZTp0aGlzLmxvZ29WYWx1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cblxuXG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbERhdGEnLFxuICB0ZW1wbGF0ZVVybDonLi9uZXdzLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gdGVtcGxhdGVVcmw6ICcuL21vZGFsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3cy10aXRsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgbW9kYWxEYXRhIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbmV3c0xhdHRlckZvcm06IEZvcm1Hcm91cDtcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8bW9kYWxEYXRhPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXG4gICAgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIpIHtcblxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy5uZXdzTGF0dGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZnVsbG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBncm91cDogWzAsXSxcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tcGFueTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLmRhdGEuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrK1wiLHRoaXMuZGF0YS5zZXJ2ZXJVcmxWYWx1ZSk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmRhdGEuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgLy8gIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBuZXdzTGF0dGVyRm9ybVN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NMYXR0ZXJGb3JtLnZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm5ld3NMYXR0ZXJGb3JtLmNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uZXdzTGF0dGVyRm9ybS52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5uZXdzTGF0dGVyRm9ybS52YWx1ZSk7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICAnZGF0YSc6IHRoaXMubmV3c0xhdHRlckZvcm0udmFsdWUsXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuZGF0YS5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxuICAgICAgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uY2UpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uY2U7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvay0tLT8tJyk7XG4gICAgdGhpcy5uZXdzTGF0dGVyRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbn1cblxuIl19