/**
 * @fileoverview added by tsickle
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
                template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{header_txt}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" [formGroup]=\"blogCatForm\">\n\n\n\n        <!-- Blog title  -->\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Title\" formControlName=\"blogtitle\" >\n          <mat-error *ngIf=\"!blogCatForm.controls['blogtitle'].valid\n        && blogCatForm.controls['blogtitle'].errors.required\"> Blog title is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['blogtitle'].valid && !blogCatForm.controls['blogtitle'].errors.required\">\n            Max length exceeded</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- Priority   -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"!blogCatForm.controls['priority'].valid\n        && blogCatForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['priority'].valid && !blogCatForm.controls['priority'].errors.required\">\n            Can't have a lower priority</mat-error>\n        </mat-form-field>\n\n        <!-- Status  -->\n\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\" ></ckeditor> -->\n        <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n        </ck-editor>\n        <mat-error *ngIf=\"!blogCatForm.controls['description'].valid\n        && blogCatForm.controls['description'].errors.required && blogCatForm.controls['description'].touched\" > Please describe.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['description'].valid && !blogCatForm.controls['description'].errors.required\">\n            Max length exceeded</mat-error>\n        <!-- ckeditor end here -->\n\n\n\n\n\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\"let parCat of getParentCatArr\" value=\"{{ parCat._id }}\"> {{ parCat.blogtitle }}\n            </mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFrQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFRZCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUF5QjNCLFlBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxNQUFjLEVBQzVGLGFBQTRCLEVBQVEsTUFBaUI7UUFEM0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBUSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBekIvRCxpQkFBWSxHQUFLLEVBQUUsQ0FBQztRQWFwQixlQUFVLEdBQVEsbUJBQW1CLENBQUM7UUFDdEMsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUUzQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQVEsZ0NBQWdDLENBQUE7UUFDdEQsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFRdEIsSUFBSSxDQUFDLFlB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WTtJQUFJLENBQUM7Ozs7SUFFdkQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2R0FBeUI7YUFDMUI7Ozs7WUF2TG1CLFlBQVk7NENBNEwzQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QiwyQkFBc0M7O0lBQ3RDLHNCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tICcuLi9ibG9nLnNlcnZpY2UnO1xuXG5cbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1ibG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1ibG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWJsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZEJsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlZGl0b3Jjb25maWc6YW55PXt9O1xuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgLy8gZWRpdG9yQ29uZmlnID0ge1xuICAvLyAgIHBsYWNlaG9sZGVyOiAnVHlwZSB0aGUgY29udGVudCBoZXJlIScsXG4gIC8vIH07XG4gIC8vIHB1YmxpYyBtb2RlbCA9IHtcbiAgLy8gICBlZGl0b3JEYXRhOiAnJ1xuICAvLyB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9ucz09PT09PT09PT09PT09PT09PVxuICBibG9nQ2F0Rm9ybTogRm9ybUdyb3VwO1xuICBoZWFkZXJfdHh0OiBhbnkgPSBcIkFkZCBCbG9nIENhdGVnb3J5XCI7XG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBhbnkgPSBcIkNhdGVnb3J5IEFkZGVkIFN1Y2Nlc3NmdWxseSEhIVwiXG4gIGdldFBhcmVudENhdEFycjogYW55ID0gW107XG4gIGRpYWxvZ1JlZjphbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UscHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcbiAgICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vZ2VuZXJhdGluZyB0aGUgZm9ybVxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG4gICAgLy9nZXR0aW5nIHRoZSBwYXJlbnQgY2F0ZWdvcnlcbiAgICB0aGlzLmdldFBhcmVudERhdGEoKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl90eHQgPSBcIkVESVRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLmJsb2dDYXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgYmxvZ3RpdGxlOiBkZWZhdWx0VmFsdWUuYmxvZ3RpdGxlLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwYXJlbnRfaWQ6IGRlZmF1bHRWYWx1ZS5wYXJlbnRfaWRcbiAgICB9KTtcblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PUdFTkVSQVRJTkcgVEhFIEZPUk09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5ibG9nQ2F0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYmxvZ3RpdGxlOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXV0sXG4gICAgICBwcmlvcml0eTogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDIpXV0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMCldXSxcbiAgICAgIHBhcmVudF9pZDogWzAsXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgLy8gIEdldHRpbmcgdGhlIGlucHV0IENvbmZpZ3VyYXRpb24gXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gICBcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMiwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbi8vR2V0dGluZyB0aGUgcGFyZW50IGNhdGVnb3J5XG4gIGdldFBhcmVudERhdGEoKSB7XG4gICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICB0b2tlbjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKVxuXG4gICAgfTtcbiAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZ2V0UGFyZW50Q2F0QXJyID0gcmVzcG9uc2UucmVzO1xuICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IGNhdGVnb3J5JyxyZXNwb25zZS5yZXMpO1xuICAgIH0pXG4gIH1cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQgZnVuY3Rpb249PT09PT09PT09PT09PT09PT1cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5ibG9nQ2F0Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG4gICBcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLmJsb2dDYXRGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYmxvZ0NhdEZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuYmxvZ0NhdEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ibG9nQ2F0Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5ibG9nQ2F0Rm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcInBhcmVudF9pZFwiXVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgdGhpcy5ibG9nU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICBcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vQmx1ciBmdW5jdGlvblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLmJsb2dDYXRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbDIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbDI+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuIl19