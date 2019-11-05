/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
        this.senderForm = this.formBuilder.group({
            name: [],
            email: []
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
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    // =======================On SUBMIT======================
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
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
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\r\n        <!-- Senders name -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's Name</mat-label>\r\n          <input matInput formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n        <!-- Sender's email  -->\r\n        <mat-form-field>\r\n          <mat-label>Email</mat-label>\r\n          <input matInput formControlName=\"email\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Button  -->\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\r\n          (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
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
    AddEditTestemaillibComponent.prototype.senderForm;
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
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy90ZXN0ZW1haWxzL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi9hZGQtZWRpdC10ZXN0ZW1haWxsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUEwQixXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFDcEYsZ0NBRUM7OztJQURDLHlCQUFZOztBQUlkO0lBZUUsOENBQThDO0lBQzlDLHNDQUFvQixXQUF3QixFQUFVLFdBQTZCLEVBQ3ZFLE1BQWMsRUFBUyxNQUFpQjtRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUN2RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVBwRCxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBQzNCLGdCQUFXLEdBQVEsa0JBQWtCLENBQUE7UUFFckMsbUJBQWMsR0FBUSwyQkFBMkIsQ0FBQztJQUlNLENBQUM7Ozs7SUFFekQsK0NBQVE7OztJQUFSO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUdwQiw4RUFBOEU7UUFDOUUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM5QixLQUFLLEtBQUs7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QUUsVUFBQyxLQUFLO2dCQUNQLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFySEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGluQ0FBcUQ7O2lCQUV0RDs7OztnQkFiZ0MsV0FBVztnQkFDbkMsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLFNBQVM7Ozt5QkE0RGYsS0FBSzs7SUFpRVIsbUNBQUM7Q0FBQSxBQXZIRCxJQXVIQztTQWxIWSw0QkFBNEI7OztJQUl2QyxrREFBc0I7O0lBQ3RCLGtEQUEyQjs7SUFDM0IsbURBQXFDOztJQUNyQyxrREFBZ0I7O0lBQ2hCLHNEQUFrRDs7SUFDbEQsaURBQWU7Ozs7O0lBRUgsbURBQWdDOzs7OztJQUFFLG1EQUFxQzs7Ozs7SUFDL0UsOENBQXNCOztJQUFFLDhDQUF3Qjs7O0FBNkd0RDtJQU1FLGdCQUNTLFNBQStCLEVBQ04sSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDTixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCwwQkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdUhBQTBCO2lCQUMzQjs7OztnQkF2SW1CLFlBQVk7Z0RBNEkzQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsYUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLE1BQU07OztJQUdmLDJCQUFzQzs7SUFDdEMsc0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgLEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC10ZXN0ZW1haWxsaWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC10ZXN0ZW1haWxsaWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09RGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PVxyXG4gIHNlbmRlckZvcm06IEZvcm1Hcm91cDtcclxuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xyXG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFkZCBTZW5kZXIoVGVzdClcIlxyXG4gIGNvbmZpZ0RhdGE6IGFueTtcclxuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XHJcbiAgZGlhbG9nUmVmOiBhbnk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlXHJcbiAgICAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXHJcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xyXG4gICAgICBjYXNlICdhZGQnOlxyXG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IHNlbmRlcidzIEluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT1nZW5lcmF0ZSBmb3JtPT09PT09PT09PT09PT09PT09PT1cclxuICBnZW5lcmF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLnNlbmRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgbmFtZTogW10sXHJcbiAgICAgIGVtYWlsOiBbXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsNCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyBtc2c6IHggfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdGhpcy5zZW5kZXJGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcclxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbFxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PU9uIFNVQk1JVD09PT09PT09PT09PT09PT09PT09PT1cclxuICBvblN1Ym1pdCgpIHtcclxuXHJcbiAgICBcclxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cclxuICAgIGlmICh0aGlzLnNlbmRlckZvcm0uaW52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXHJcbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xyXG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcclxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc2VuZGVyRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vZGFsNC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsNCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsND4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiJdfQ==