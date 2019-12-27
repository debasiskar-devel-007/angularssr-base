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
export class AddEditSenderComponent {
    // ===========================================
    /**
     * @param {?} formBuilder
     * @param {?} newsService
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, newsService, router, dialog) {
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
    ngOnInit() {
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
    }
    // ===============generate form====================
    /**
     * @return {?}
     */
    generateForm() {
        this.senderForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
        });
    }
    // ================================================
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal3, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.senderForm.controls[val].markAsUntouched();
    }
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    }
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    onSubmit() {
        /** marking as untouched **/
        for (let x in this.senderForm.controls) {
            this.senderForm.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
                "sourceobj": ["group"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.openDialog(this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialogRef.close();
                    }), 2000);
                    this.router.navigate([this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try angain.");
            }));
        }
    }
}
AddEditSenderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-sender',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!senderForm.controls['name'].valid\n          && senderForm.controls['name'].errors.required\" > Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.required\" > Email is required.</mat-error>\n          <mat-error *ngIf=\"!senderForm.controls['email'].valid\n          && senderForm.controls['email'].errors.email\" > Email is not Valid.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddEditSenderComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: NewsTitleService },
    { type: Router },
    { type: MatDialog }
];
AddEditSenderComponent.propDecorators = {
    config: [{ type: Input }]
};
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
export class Modal3 {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Modal3.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal3.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal3.prototype.dialogRef;
    /** @type {?} */
    Modal3.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvYWRkLWVkaXQtc2VuZGVyL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUEwQixXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFVZCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7OztJQVdqQyxZQUFvQixXQUF3QixFQUFVLFdBQTZCLEVBQ3ZFLE1BQWMsRUFBUyxNQUFpQjtRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUN2RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVBwRCxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBQzNCLGdCQUFXLEdBQVEsWUFBWSxDQUFBO1FBRS9CLG1CQUFjLEdBQVEsMkJBQTJCLENBQUM7SUFJTSxDQUFDOzs7O0lBRXpELFFBQVE7UUFDTixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3BCLDhFQUE4RTtRQUM5RSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzlCLEtB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bmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtc2VuZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdFNlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT1EZWNsYXJhdGlvbnM9PT09PT09PT09PT09PT09XG4gIHNlbmRlckZvcm06IEZvcm1Hcm91cDtcbiAgYnV0dG9uVGV4dDogYW55ID0gXCJTVUJNSVRcIjtcbiAgaGVhZGVyX25hbWU6IGFueSA9IFwiQWRkIFNlbmRlclwiXG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgc3VjY2Vzc01lc3NhZ2U6IGFueSA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseSEhIVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZVxuICAgICwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2dlbmVyYXRpbmcgdGhlIGZvcm1cbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkVkaXQgU2VuZGVyJ3MgSW5mb3JtYXRpb25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIH1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09Z2VuZXJhdGUgZm9ybT09PT09PT09PT09PT09PT09PT09XG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLnNlbmRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW1haWw6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLmVtYWlsXV1cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gLyoqIGJsdXIgZnVuY3Rpb24gKiovXG4gaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gIHRoaXMuc2VuZGVyRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xufVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLnNlbmRlckZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWxcbiAgICB9KTtcblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1PbiBTVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuXG4gICAgICAvKiogbWFya2luZyBhcyB1bnRvdWNoZWQgKiovXG4gICAgICBmb3IgKGxldCB4IGluIHRoaXMuc2VuZGVyRm9ybS5jb250cm9scykge1xuICAgICAgICB0aGlzLnNlbmRlckZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLnNlbmRlckZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnNlbmRlckZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJncm91cFwiXVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG59XG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsMy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWwzPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19