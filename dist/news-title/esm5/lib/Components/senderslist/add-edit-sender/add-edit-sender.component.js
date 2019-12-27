/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/senderslist/add-edit-sender/add-edit-sender.component.ts
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
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
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
    /** blur function **/
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditSenderComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.senderForm.controls[val].markAsUntouched();
    };
    // ================================================Default value======================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSenderComponent.prototype.setDefaultValue = 
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
        /** marking as untouched **/
        for (var x in this.senderForm.controls) {
            this.senderForm.controls[x].markAsTouched();
        }
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!senderForm.controls['name'].valid\n          && senderForm.controls['name'].errors.required\" > Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.required\" > Email is required.</mat-error>\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.email\" > Email is not Valid.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
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
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvYWRkLWVkaXQtc2VuZGVyL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUEwQixXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFLZDtJQWVFLDhDQUE4QztJQUM5QyxnQ0FBb0IsV0FBd0IsRUFBVSxXQUE2QixFQUN2RSxNQUFjLEVBQVMsTUFBaUI7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDdkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQcEQsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixnQkFBVyxHQUFRLFlBQVksQ0FBQTtRQUUvQixtQkFBYyxHQUFRLDJCQUEyQixDQUFDO0lBSU0sQ0FBQzs7OztJQUV6RCx5Q0FBUTs7O0lBQVI7UUFDRSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3BCLDhFQUE4RTtRQUM5RSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzlCLEtBQUss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S0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2R0FBMEI7aUJBQzNCOzs7O2dCQWpKbUIsWUFBWTtnREFzSjNCLE1BQU0sU0FBQyxlQUFlOztJQU0zQixhQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksTUFBTTs7O0lBR2YsMkJBQXNDOztJQUN0QyxzQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LXNlbmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZEVkaXRTZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09RGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PVxuICBzZW5kZXJGb3JtOiBGb3JtR3JvdXA7XG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFkZCBTZW5kZXJcIlxuICBjb25maWdEYXRhOiBhbnk7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBhbnkgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHkhISFcIjtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbmV3c1NlcnZpY2U6IE5ld3NUaXRsZVNlcnZpY2VcbiAgICAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGVja2luZyB0aGUgY2FzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IFNlbmRlcidzIEluZm9ybWF0aW9uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG5cblxuXG4gIC8vID09PT09PT09PT09PT09PWdlbmVyYXRlIGZvcm09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5zZW5kZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVtYWlsOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5lbWFpbF1dXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbDMsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuIC8qKiBibHVyIGZ1bmN0aW9uICoqL1xuIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICB0aGlzLnNlbmRlckZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbn1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5zZW5kZXJGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmFtZTogZGVmYXVsdFZhbHVlLm5hbWUsXG4gICAgICBlbWFpbDogZGVmYXVsdFZhbHVlLmVtYWlsXG4gICAgfSk7XG5cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09T24gU1VCTUlUPT09PT09PT09PT09PT09PT09PT09PVxuICBvblN1Ym1pdCgpIHtcblxuICAgICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgICAgZm9yIChsZXQgeCBpbiB0aGlzLnNlbmRlckZvcm0uY29udHJvbHMpIHtcbiAgICAgICAgdGhpcy5zZW5kZXJGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cblxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5zZW5kZXJGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZW5kZXJGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiZ3JvdXBcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufVxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbDMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsMyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsMz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==