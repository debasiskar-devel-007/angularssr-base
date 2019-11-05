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
var AddEditSenderComponent = /** @class */ (function () {
    // ===========================================
    function AddEditSenderComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.ngOnInit = /**
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
                this.header_name = "Edit Sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.generateForm = 
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
    Object.defineProperty(AddEditSenderComponent.prototype, "config", {
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
    AddEditSenderComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal3, {
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
    AddEditSenderComponent.prototype.setDefaultValue = 
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
    AddEditSenderComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("++++++++", this.senderForm.value);
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
                "sourceobj": ["group"]
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
    AddEditSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-sender',
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\r\n        <!-- Senders name -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's Name</mat-label>\r\n          <input matInput formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n        <!-- Sender's email  -->\r\n        <mat-form-field>\r\n          <mat-label>Email</mat-label>\r\n          <input matInput formControlName=\"email\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Button  -->\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\r\n          (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSenderComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddEditSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSenderComponent;
}());
export { AddEditSenderComponent };
if (false) {
    /** @type {?} */
    AddEditSenderComponent.prototype.senderForm;
    /** @type {?} */
    AddEditSenderComponent.prototype.buttonText;
    /** @type {?} */
    AddEditSenderComponent.prototype.header_name;
    /** @type {?} */
    AddEditSenderComponent.prototype.configData;
    /** @type {?} */
    AddEditSenderComponent.prototype.successMessage;
    /** @type {?} */
    AddEditSenderComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddEditSenderComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditSenderComponent.prototype.newsService;
    /**
     * @type {?}
     * @private
     */
    AddEditSenderComponent.prototype.router;
    /** @type {?} */
    AddEditSenderComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
var Modal3 = /** @class */ (function () {
    function Modal3(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal3.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal3.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    Modal3.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal3;
}());
export { Modal3 };
if (false) {
    /** @type {?} */
    Modal3.prototype.dialogRef;
    /** @type {?} */
    Modal3.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9hZGQtZWRpdC1zZW5kZXIvYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBMEIsV0FBVyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFLZDtJQWVFLDhDQUE4QztJQUM5QyxnQ0FBb0IsV0FBd0IsRUFBVSxXQUE2QixFQUN2RSxNQUFjLEVBQVMsTUFBaUI7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDdkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQcEQsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixnQkFBVyxHQUFRLFlBQVksQ0FBQTtRQUUvQixtQkFBYyxHQUFRLDJCQUEyQixDQUFDO0lBSU0sQ0FBQzs7OztJQUV6RCx5Q0FBUTs7O0lBQVI7UUFDRSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3BCLDhFQUE4RTtRQUM5RSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzlCLEtBQUssS0FBSztnQkFDUixpQkFBaUI7Z0JBRWpC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LENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDOzs7O1lBQUUsVUFBQyxLQUFLO2dCQUNQLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF0SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGluQ0FBK0M7O2lCQUVoRDs7OztnQkFkZ0MsV0FBVztnQkFDbkMsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLFNBQVM7Ozt5QkE2RGYsS0FBSzs7SUFrRVIsNkJBQUM7Q0FBQSxBQXhIRCxJQXdIQztTQW5IWSxzQkFBc0I7OztJQUlqQyw0Q0FBc0I7O0lBQ3RCLDRDQUEyQjs7SUFDM0IsNkNBQStCOztJQUMvQiw0Q0FBZ0I7O0lBQ2hCLGdEQUFrRDs7SUFDbEQsMkNBQWU7Ozs7O0lBRUgsNkNBQWdDOzs7OztJQUFFLDZDQUFxQzs7Ozs7SUFDL0Usd0NBQXNCOztJQUFFLHdDQUF3Qjs7O0FBOEd0RDtJQU1FLGdCQUNTLFNBQStCLEVBQ04sSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDTixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCwwQkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdUhBQTBCO2lCQUMzQjs7OztnQkF6SW1CLFlBQVk7Z0RBOEkzQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsYUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLE1BQU07OztJQUdmLDJCQUFzQzs7SUFDdEMsc0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1zZW5kZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEVkaXRTZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09RGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PVxyXG4gIHNlbmRlckZvcm06IEZvcm1Hcm91cDtcclxuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xyXG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFkZCBTZW5kZXJcIlxyXG4gIGNvbmZpZ0RhdGE6IGFueTtcclxuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XHJcbiAgZGlhbG9nUmVmOiBhbnk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlXHJcbiAgICAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXHJcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xyXG4gICAgICBjYXNlICdhZGQnOlxyXG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IFNlbmRlcidzIEluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT1nZW5lcmF0ZSBmb3JtPT09PT09PT09PT09PT09PT09PT1cclxuICBnZW5lcmF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLnNlbmRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgbmFtZTogW10sXHJcbiAgICAgIGVtYWlsOiBbXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMywge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyBtc2c6IHggfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdGhpcy5zZW5kZXJGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcclxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbFxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PU9uIFNVQk1JVD09PT09PT09PT09PT09PT09PT09PT1cclxuICBvblN1Ym1pdCgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIisrKysrKysrXCIsIHRoaXMuc2VuZGVyRm9ybS52YWx1ZSk7XHJcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXHJcbiAgICBpZiAodGhpcy5zZW5kZXJGb3JtLmludmFsaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xyXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXHJcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnNlbmRlckZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxyXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcImdyb3VwXCJdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vZGFsMy5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsMyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsMz4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiJdfQ==