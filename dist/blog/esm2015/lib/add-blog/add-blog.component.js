/**
 * @fileoverview added by tsickle
 * Generated from: lib/add-blog/add-blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
export class AddBlogComponent {
    // ==================================================
    /**
     * @param {?} formBuilder
     * @param {?} blogService
     * @param {?} router
     * @param {?} cookieService
     * @param {?} dialog
     */
    constructor(formBuilder, blogService, router, cookieService, dialog) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.editorconfig = {};
        this.header_txt = "Add Blog Category";
        this.buttonText = "SUBMIT";
        this.loader = false;
        this.successMessage = "Category Added Successfully!!!";
        this.getParentCatArr = [];
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //generating the form
        this.generateForm();
        //getting the parent category
        this.getParentData();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_txt = "EDIT";
                break;
        }
        // --------------------------------------------------------------------------
    }
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.blogCatForm.patchValue({
            blogtitle: defaultValue.blogtitle,
            priority: defaultValue.priority,
            status: defaultValue.status,
            description: defaultValue.description,
            parent_id: defaultValue.parent_id
        });
    }
    // ==================================================================================================
    //  ============================GENERATING THE FORM=======================
    /**
     * @return {?}
     */
    generateForm() {
        this.blogCatForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required, Validators.maxLength(50)]],
            priority: ['', [Validators.required, Validators.maxLength(2)]],
            status: [true,],
            description: ['', [Validators.required, Validators.maxLength(100)]],
            parent_id: [0,]
        });
    }
    // ========================================================================
    //  Getting the input Configuration 
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
        this.dialogRef = this.dialog.open(Modal2, {
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
    // ===================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    getParentData() {
        /** @type {?} */
        let postData = {
            source: this.configData.source,
            token: this.cookieService.get('jwtToken')
        };
        this.blogService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.getParentCatArr = response.res;
            //console.log('parent category',response.res);
        }));
    }
    // =========================SUBMIT function==================
    /**
     * @return {?}
     */
    onSubmit() {
        this.blogCatForm.controls['description'].markAsTouched();
        this.loader = true;
        /* stop here if form is invalid */
        if (this.blogCatForm.invalid) {
            return;
        }
        else {
            if (this.blogCatForm.value.status) {
                this.blogCatForm.value.status = parseInt("1");
            }
            else {
                this.blogCatForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.blogCatForm.value, this.configData.condition),
                "sourceobj": ["parent_id"]
            };
            this.blogService.addData(this.configData.endpoint, postData).subscribe((/**
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
                    alert("Some error occurred. Please try again.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try again.");
            }));
        }
    }
    // ==========================================================
    //Blur function
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.blogCatForm.controls[val].markAsUntouched();
    }
}
AddBlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-blog',
                template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{header_txt}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" [formGroup]=\"blogCatForm\">\n\n\n\n        <!-- Blog title  -->\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Title\" formControlName=\"blogtitle\" >\n          <mat-error *ngIf=\"!blogCatForm.controls['blogtitle'].valid\n        && blogCatForm.controls['blogtitle'].errors.required\"> Blog title is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['blogtitle'].valid && !blogCatForm.controls['blogtitle'].errors.required\">\n            Max length exceeded</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- Priority   -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"!blogCatForm.controls['priority'].valid\n        && blogCatForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['priority'].valid && !blogCatForm.controls['priority'].errors.required\">\n            Can't have a lower priority</mat-error>\n        </mat-form-field>\n\n        <!-- Status  -->\n\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\" ></ckeditor> -->\n        <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n        </ck-editor>\n        \n        <mat-error *ngIf=\"!blogCatForm.controls['description'].valid\n        && blogCatForm.controls['description'].errors.required && blogCatForm.controls['description'].touched\" > Please describe.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['description'].valid && !blogCatForm.controls['description'].errors.required\">\n            Max length exceeded</mat-error>\n        <!-- ckeditor end here -->\n\n\n\n\n\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\"let parCat of getParentCatArr\" value=\"{{ parCat._id }}\"> {{ parCat.blogtitle }}\n            </mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddBlogComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: BlogService },
    { type: Router },
    { type: CookieService },
    { type: MatDialog }
];
AddBlogComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddBlogComponent.prototype.editorconfig;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddBlogComponent.prototype.blogCatForm;
    /** @type {?} */
    AddBlogComponent.prototype.header_txt;
    /** @type {?} */
    AddBlogComponent.prototype.buttonText;
    /** @type {?} */
    AddBlogComponent.prototype.configData;
    /** @type {?} */
    AddBlogComponent.prototype.loader;
    /** @type {?} */
    AddBlogComponent.prototype.successMessage;
    /** @type {?} */
    AddBlogComponent.prototype.getParentCatArr;
    /** @type {?} */
    AddBlogComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddBlogComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddBlogComponent.prototype.blogService;
    /**
     * @type {?}
     * @private
     */
    AddBlogComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddBlogComponent.prototype.cookieService;
    /** @type {?} */
    AddBlogComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
export class Modal2 {
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
Modal2.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal2.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal2.prototype.dialogRef;
    /** @type {?} */
    Modal2.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBa0IsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBUWQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7O0lBNkIzQixZQUFvQixXQUF3QixFQUFVLFdBQXdCLEVBQVUsTUFBYyxFQUM1RixhQUE0QixFQUFTLE1BQWlCO1FBRDVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVGLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQTdCaEUsaUJBQVksR0FBSyxFQUFFLENBQUM7UUFnQnBCLGVBQVUsR0FBUSxtQkFBbUIsQ0FBQztRQUN0QyxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBRTNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxnQ0FBZ0MsQ0FBQTtRQUN0RCxvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQVN4QixJQUFJLENBQUMs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QUFZO0lBQUksQ0FBQzs7OztJQUV2RCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZHQUF5QjthQUMxQjs7OztZQTVMbUIsWUFBWTs0Q0FpTTNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDJCQUFzQzs7SUFDdEMsc0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gJy4uL2Jsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtYmxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtYmxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1ibG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRCbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZWRpdG9yY29uZmlnOmFueT17fTtcbiAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG5cbiAgLy8gZWRpdG9yQ29uZmlnID0ge1xuICAvLyAgIHBsYWNlaG9sZGVyOiAnVHlwZSB0aGUgY29udGVudCBoZXJlIScsXG4gIC8vIH07XG4gIC8vIHB1YmxpYyBtb2RlbCA9IHtcbiAgLy8gICBlZGl0b3JEYXRhOiAnJ1xuICAvLyB9O1xuXG5cbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbnM9PT09PT09PT09PT09PT09PT1cbiAgYmxvZ0NhdEZvcm06IEZvcm1Hcm91cDtcbiAgaGVhZGVyX3R4dDogYW55ID0gXCJBZGQgQmxvZyBDYXRlZ29yeVwiO1xuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xuICBjb25maWdEYXRhOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJDYXRlZ29yeSBBZGRlZCBTdWNjZXNzZnVsbHkhISFcIlxuICBnZXRQYXJlbnRDYXRBcnI6IGFueSA9IFtdO1xuICBkaWFsb2dSZWY6IGFueTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcbiAgICAvL2dldHRpbmcgdGhlIHBhcmVudCBjYXRlZ29yeVxuICAgIHRoaXMuZ2V0UGFyZW50RGF0YSgpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hlY2tpbmcgdGhlIGNhc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX3R4dCA9IFwiRURJVFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMuYmxvZ0NhdEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBibG9ndGl0bGU6IGRlZmF1bHRWYWx1ZS5ibG9ndGl0bGUsXG4gICAgICBwcmlvcml0eTogZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgZGVzY3JpcHRpb246IGRlZmF1bHRWYWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgIHBhcmVudF9pZDogZGVmYXVsdFZhbHVlLnBhcmVudF9pZFxuICAgIH0pO1xuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09R0VORVJBVElORyBUSEUgRk9STT09PT09PT09PT09PT09PT09PT09PT09XG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLmJsb2dDYXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBibG9ndGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKV1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDIpXV0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV1dLFxuICAgICAgcGFyZW50X2lkOiBbMCxdXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyAgR2V0dGluZyB0aGUgaW5wdXQgQ29uZmlndXJhdGlvbiBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcblxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwyLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvL0dldHRpbmcgdGhlIHBhcmVudCBjYXRlZ29yeVxuICBnZXRQYXJlbnREYXRhKCkge1xuICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgdG9rZW46IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJylcblxuICAgIH07XG4gICAgdGhpcy5ibG9nU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmdldFBhcmVudENhdEFyciA9IHJlc3BvbnNlLnJlcztcbiAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBjYXRlZ29yeScscmVzcG9uc2UucmVzKTtcbiAgICB9KVxuICB9XG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09U1VCTUlUIGZ1bmN0aW9uPT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuYmxvZ0NhdEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5ibG9nQ2F0Rm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmJsb2dDYXRGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLmJsb2dDYXRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmxvZ0NhdEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuYmxvZ0NhdEZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJwYXJlbnRfaWRcIl1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvL0JsdXIgZnVuY3Rpb25cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5ibG9nQ2F0Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWwyPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiJdfQ==