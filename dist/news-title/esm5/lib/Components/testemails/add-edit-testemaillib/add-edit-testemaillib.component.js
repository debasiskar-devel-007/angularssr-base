/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddEditTestemaillibComponent = /** @class */ (function () {
    // ===========================================
    function AddEditTestemaillibComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender(Test)";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.ngOnInit = /**
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
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderFormTest = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
        });
    };
    Object.defineProperty(AddEditTestemaillibComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
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
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal4, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderFormTest.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    /** blur function **/
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.inputBlur = 
    // ==================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.senderFormTest.controls[val].markAsUntouched();
    };
    // =======================On SUBMIT======================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.onSubmit = 
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.senderFormTest.controls) {
            this.senderFormTest.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.senderFormTest.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderFormTest.value, this.configData.condition),
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
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
    AddEditTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-testemaillib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderFormTest\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!senderFormTest.controls['name'].valid\n          && senderFormTest.controls['name'].errors.required\" > Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!senderFormTest.controls['email'].valid\n          && senderFormTest.controls['email'].errors.required\" > Email is required.</mat-error>\n          <mat-error *ngIf=\"!senderFormTest.controls['email'].valid\n          && senderFormTest.controls['email'].errors.email\" > Email is not valid.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditTestemaillibComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddEditTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditTestemaillibComponent;
}());
export { AddEditTestemaillibComponent };
if (false) {
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.senderFormTest;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.buttonText;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.header_name;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.configData;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.successMessage;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.newsService;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.router;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
var Modal4 = /** @class */ (function () {
    function Modal4(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal4.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal4.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal4.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal4;
}());
export { Modal4 };
if (false) {
    /** @type {?} */
    Modal4.prototype.dialogRef;
    /** @type {?} */
    Modal4.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvdGVzdGVtYWlscy9hZGQtZWRpdC10ZXN0ZW1haWxsaWIvYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFDcEYsZ0NBRUM7OztJQURDLHlCQUFZOztBQUlkO0lBZUUsOENBQThDO0lBQzlDLHNDQUFvQixXQUF3QixFQUFVLFdBQTZCLEVBQ3ZFLE1BQWMsRUFBUyxNQUFpQjtRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUN2RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVBwRCxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBQzNCLGdCQUFXLEdBQVEsa0JBQWtCLENBQUE7UUFFckMsbUJBQWMsR0FBUSwyQkFBMkIsQ0FBQztJQUlNLENBQUM7Ozs7SUFFekQsK0NBQVE7OztJQUFSO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUdwQiw4RUFBOEU7UUFDOUUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLE1B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LDBCQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2R0FBMEI7aUJBQzNCOzs7O2dCQWhKbUIsWUFBWTtnREFxSjNCLE1BQU0sU0FBQyxlQUFlOztJQU0zQixhQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksTUFBTTs7O0lBR2YsMkJBQXNDOztJQUN0QyxzQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCAsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtdGVzdGVtYWlsbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT1EZWNsYXJhdGlvbnM9PT09PT09PT09PT09PT09XG4gIHNlbmRlckZvcm1UZXN0OiBGb3JtR3JvdXA7XG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFkZCBTZW5kZXIoVGVzdClcIlxuICBjb25maWdEYXRhOiBhbnk7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBhbnkgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHkhISFcIjtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbmV3c1NlcnZpY2U6IE5ld3NUaXRsZVNlcnZpY2VcbiAgICAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGVja2luZyB0aGUgY2FzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IHNlbmRlcidzIEluZm9ybWF0aW9uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG5cblxuXG4gIC8vID09PT09PT09PT09PT09PWdlbmVyYXRlIGZvcm09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5zZW5kZXJGb3JtVGVzdCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbWFpbDogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMuZW1haWxdXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWw0LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5zZW5kZXJGb3JtVGVzdC5wYXRjaFZhbHVlKHtcbiAgICAgIG5hbWU6IGRlZmF1bHRWYWx1ZS5uYW1lLFxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbFxuICAgIH0pO1xuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8qKiBibHVyIGZ1bmN0aW9uICoqL1xuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlbmRlckZvcm1UZXN0LmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1PbiBTVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuXG4gICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICAgZm9yIChsZXQgeCBpbiB0aGlzLnNlbmRlckZvcm1UZXN0LmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLnNlbmRlckZvcm1UZXN0LmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLnNlbmRlckZvcm1UZXN0LmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZW5kZXJGb3JtVGVzdC52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICB9O1xuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufVxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbDQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsNCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsND4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==