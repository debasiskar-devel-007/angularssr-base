/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddEditSubcategoryComponent = /** @class */ (function () {
    function AddEditSubcategoryComponent(formBuilder, newsletterService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsletterService = newsletterService;
        this.router = router;
        this.dialog = dialog;
        // ====================declarations==================
        this.buttonText = "SUBMIT";
        this.header_name = "Add Subscription Category";
        this.successMessage = "Submitted Successfully!!!";
    }
    Object.defineProperty(AddEditSubcategoryComponent.prototype, "config", {
        // ==================================================
        set: 
        // ==================================================
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // =========================================MODAL functions==========================================
    // openDialog(x: any): void {
    //   this.dialogRef = this.dialog.open(Modal, {
    //     width: '250px',
    //     data: { msg: x }
    //   });
    //   this.dialogRef.afterClosed().subscribe(result => {
    //   });
    // }
    // =====================================================================================================
    // ================================================Default value======================================
    // =========================================MODAL functions==========================================
    // openDialog(x: any): void {
    //   this.dialogRef = this.dialog.open(Modal, {
    //     width: '250px',
    //     data: { msg: x }
    //   });
    //   this.dialogRef.afterClosed().subscribe(result => {
    //   });
    // }
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.setDefaultValue = 
    // =========================================MODAL functions==========================================
    // openDialog(x: any): void {
    //   this.dialogRef = this.dialog.open(Modal, {
    //     width: '250px',
    //     data: { msg: x }
    //   });
    //   this.dialogRef.afterClosed().subscribe(result => {
    //   });
    // }
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.subscriptionCatForm.patchValue({
            name: defaultValue.name,
            priority: defaultValue.priority,
            status: defaultValue.status,
        });
    };
    // ==================================================================================================
    // ======================form generation=====================
    // ==================================================================================================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.generateForm = 
    // ==================================================================================================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    function () {
        this.subscriptionCatForm = this.formBuilder.group({
            name: [],
            priority: [],
            status: []
        });
    };
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.onSubmit = 
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.subscriptionCatForm.invalid) {
            return;
        }
        else {
            if (this.subscriptionCatForm.value.status) {
                this.subscriptionCatForm.value.status = parseInt("1");
            }
            else {
                this.subscriptionCatForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subscriptionCatForm.value, this.configData.condition)
            };
            this.newsletterService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    // this.openDialog(this.successMessage);
                    // setTimeout(() => {
                    //   this.dialogRef.close();
                    // }, 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditSubcategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subcategory',
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n\r\n      <form autocomplete=\"off\" [formGroup]=\"subscriptionCatForm\">\r\n\r\n\r\n        <!-- Name  -->\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Priority -->\r\n\r\n        <mat-form-field>\r\n          <mat-label>Priority</mat-label>\r\n          <input matInput placeholder=\"priority\" type=\"number\" formControlName=\"priority\">\r\n        </mat-form-field>\r\n\r\n        <!-- Status  -->\r\n        <mat-label>Status</mat-label>\r\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\r\n\r\n\r\n        <!-- Button  -->\r\n        <button type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubcategoryComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddEditSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSubcategoryComponent;
}());
export { AddEditSubcategoryComponent };
if (false) {
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.buttonText;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.header_name;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.subscriptionCatForm;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.configData;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.successMessage;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.newsletterService;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.router;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFlLFdBQVcsRUFBeUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBSWQ7SUF3QkUscUNBQW9CLFdBQXdCLEVBQVUsaUJBQW1DLEVBQy9FLE1BQWMsRUFBVyxNQUFpQjtRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDL0UsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFXLFdBQU0sR0FBTixNQUFNLENBQVc7O1FBakJwRCxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBQzNCLGdCQUFXLEdBQVEsMkJBQTJCLENBQUE7UUFHOUMsbUJBQWMsR0FBUSwyQkFBMkIsQ0FBQTtJQWFPLENBQUM7SUFQekQsc0JBQ0ksK0NBQU07UUFMVixxREFBcUQ7Ozs7Ozs7UUFJckQsVUFDVyxTQUFjO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBTUQsOENBQVE7OztJQUFSO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVB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Qyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF4SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLGsxQ0FBb0Q7O2lCQUVyRDs7OztnQkFicUIsV0FBVztnQkFDeEIsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLFNBQVM7Ozt5QkF3QmYsS0FBSzs7SUF3R1Isa0NBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQXJIWSwyQkFBMkI7OztJQUd0QyxpREFBMkI7O0lBQzNCLGtEQUE4Qzs7SUFDOUMsMERBQStCOztJQUMvQixpREFBZ0I7O0lBQ2hCLHFEQUFpRDs7SUFDakQsZ0RBQWU7Ozs7O0lBV0gsa0RBQWdDOzs7OztJQUFFLHdEQUEyQzs7Ozs7SUFDdkYsNkNBQXNCOztJQUFJLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1zdWJjYXRlZ29yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LXN1YmNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PT09XHJcbiAgYnV0dG9uVGV4dDogYW55ID0gXCJTVUJNSVRcIjtcclxuICBoZWFkZXJfbmFtZTogYW55ID0gXCJBZGQgU3Vic2NyaXB0aW9uIENhdGVnb3J5XCJcclxuICBzdWJzY3JpcHRpb25DYXRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgY29uZmlnRGF0YTogYW55O1xyXG4gIHN1Y2Nlc3NNZXNzYWdlOiBhbnkgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHkhISFcIlxyXG4gIGRpYWxvZ1JlZjogYW55O1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XHJcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbmV3c2xldHRlclNlcnZpY2U6IE5ld3NUaXRsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyICwgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXHJcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xyXG4gICAgICBjYXNlICdhZGQnOlxyXG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFRElUXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIH1cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xyXG4gIC8vICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAvLyAgICAgZGF0YTogeyBtc2c6IHggfVxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25DYXRGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcclxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcclxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT1cclxuICBnZW5lcmF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkNhdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgbmFtZTogW10sXHJcbiAgICAgIHByaW9yaXR5OiBbXSxcclxuICAgICAgc3RhdHVzOiBbXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQgRlVOQ1RJT049PT09PT09PT09PT09PT09PT09PT09XHJcbiAgb25TdWJtaXQoKSB7XHJcblxyXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xyXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2F0Rm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkNhdEZvcm0udmFsdWUuc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYXRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhdEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXHJcbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xyXG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcclxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc3Vic2NyaXB0aW9uQ2F0Rm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5uZXdzbGV0dGVyU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgICAvLyB9LCAyMDAwKTtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn1cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEBDb21wb25lbnQoe1xyXG4vLyAgIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcclxuLy8gICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxyXG4vLyB9KVxyXG4vLyBleHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cclxuLy8gICBjb25zdHJ1Y3RvcihcclxuLy8gICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXHJcbi8vICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxyXG5cclxuLy8gICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbi8vICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiJdfQ==