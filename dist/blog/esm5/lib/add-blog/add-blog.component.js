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
var AddBlogComponent = /** @class */ (function () {
    // ==================================================
    function AddBlogComponent(formBuilder, blogService, router, cookieService, dialog) {
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
    AddBlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    // ================================================Default value======================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddBlogComponent.prototype.setDefaultValue = 
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.blogCatForm.patchValue({
            blogtitle: defaultValue.blogtitle,
            priority: defaultValue.priority,
            status: defaultValue.status,
            description: defaultValue.description,
            parent_id: defaultValue.parent_id
        });
    };
    // ==================================================================================================
    //  ============================GENERATING THE FORM=======================
    // ==================================================================================================
    //  ============================GENERATING THE FORM=======================
    /**
     * @return {?}
     */
    AddBlogComponent.prototype.generateForm = 
    // ==================================================================================================
    //  ============================GENERATING THE FORM=======================
    /**
     * @return {?}
     */
    function () {
        this.blogCatForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required, Validators.maxLength(50)]],
            priority: ['', [Validators.required, Validators.maxLength(2)]],
            status: [true,],
            description: ['', [Validators.required, Validators.maxLength(100)]],
            parent_id: [0,]
        });
    };
    Object.defineProperty(AddBlogComponent.prototype, "config", {
        // ========================================================================
        //  Getting the input Configuration 
        set: 
        // ========================================================================
        //  Getting the input Configuration 
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
    AddBlogComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal2, {
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
    // ===================================================================================================
    //Getting the parent category
    // ===================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    AddBlogComponent.prototype.getParentData = 
    // ===================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var postData = {
            source: this.configData.source,
            token: this.cookieService.get('jwtToken')
        };
        this.blogService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.getParentCatArr = response.res;
            //console.log('parent category',response.res);
        }));
    };
    // =========================SUBMIT function==================
    // =========================SUBMIT function==================
    /**
     * @return {?}
     */
    AddBlogComponent.prototype.onSubmit = 
    // =========================SUBMIT function==================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.blogCatForm.value, this.configData.condition),
                "sourceobj": ["parent_id"]
            };
            this.blogService.addData(this.configData.endpoint, postData).subscribe((/**
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
                    alert("Some error occurred. Please try again.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try again.");
            }));
        }
    };
    // ==========================================================
    //Blur function
    // ==========================================================
    //Blur function
    /**
     * @param {?} val
     * @return {?}
     */
    AddBlogComponent.prototype.inputBlur = 
    // ==========================================================
    //Blur function
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.blogCatForm.controls[val].markAsUntouched();
    };
    AddBlogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-blog',
                    template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{header_txt}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" [formGroup]=\"blogCatForm\">\n\n\n\n        <!-- Blog title  -->\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Title\" formControlName=\"blogtitle\" >\n          <mat-error *ngIf=\"!blogCatForm.controls['blogtitle'].valid\n        && blogCatForm.controls['blogtitle'].errors.required\"> Blog title is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['blogtitle'].valid && !blogCatForm.controls['blogtitle'].errors.required\">\n            Max length exceeded</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- Priority   -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"!blogCatForm.controls['priority'].valid\n        && blogCatForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['priority'].valid && !blogCatForm.controls['priority'].errors.required\">\n            Can't have a lower priority</mat-error>\n        </mat-form-field>\n\n        <!-- Status  -->\n\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\" ></ckeditor> -->\n        <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n        </ck-editor>\n        \n        <mat-error *ngIf=\"!blogCatForm.controls['description'].valid\n        && blogCatForm.controls['description'].errors.required && blogCatForm.controls['description'].touched\" > Please describe.</mat-error>\n          <mat-error\n            *ngIf=\"!blogCatForm.controls['description'].valid && !blogCatForm.controls['description'].errors.required\">\n            Max length exceeded</mat-error>\n        <!-- ckeditor end here -->\n\n\n\n\n\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\"let parCat of getParentCatArr\" value=\"{{ parCat._id }}\"> {{ parCat.blogtitle }}\n            </mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddBlogComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: BlogService },
        { type: Router },
        { type: CookieService },
        { type: MatDialog }
    ]; };
    AddBlogComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddBlogComponent;
}());
export { AddBlogComponent };
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
var Modal2 = /** @class */ (function () {
    function Modal2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal2.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal2.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal2.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal2;
}());
export { Modal2 };
if (false) {
    /** @type {?} */
    Modal2.prototype.dialogRef;
    /** @type {?} */
    Modal2.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBa0IsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBR2Q7SUE4QkUscURBQXFEO0lBSXJELDBCQUFvQixXQUF3QixFQUFVLFdBQXdCLEVBQVUsTUFBYyxFQUM1RixhQUE0QixFQUFTLE1BQWlCO1FBRDVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVGLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQTdCaEUsaUJBQVksR0FBSyxFQUFFLENBQUM7UUFnQnBCLGVBQVUsR0FBUSxtQkFBbUIsQ0FBQztRQUN0QyxlQUFVLEdBQVEsUUFBUSxDQUFDO1FBRTNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxnQ0FBZ0MsQ0FBQTtRQUN0RCxvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQVN4QixJQUFJLENBQUMsWUFBWSxDQUFDLG1C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LHNDQUFnQjs7SUFDaEIsa0NBQXdCOztJQUN4QiwwQ0FBc0Q7O0lBQ3RELDJDQUEwQjs7SUFDMUIscUNBQWU7Ozs7O0lBTUgsdUNBQWdDOzs7OztJQUFFLHVDQUFnQzs7Ozs7SUFBRSxrQ0FBc0I7Ozs7O0lBQ3BHLHlDQUFvQzs7SUFBRSxrQ0FBd0I7OztBQWlKbEU7SUFNRSxnQkFDUyxTQUErQixFQUNOLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBQ04sU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQsMEJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZHQUF5QjtpQkFDMUI7Ozs7Z0JBNUxtQixZQUFZO2dEQWlNM0IsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLGFBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxNQUFNOzs7SUFHZiwyQkFBc0M7O0lBQ3RDLHNCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tICcuLi9ibG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWJsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtYmxvZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVkaXRvcmNvbmZpZzphbnk9e307XG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuXG4gIC8vIGVkaXRvckNvbmZpZyA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1R5cGUgdGhlIGNvbnRlbnQgaGVyZSEnLFxuICAvLyB9O1xuICAvLyBwdWJsaWMgbW9kZWwgPSB7XG4gIC8vICAgZWRpdG9yRGF0YTogJydcbiAgLy8gfTtcblxuXG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PT09XG4gIGJsb2dDYXRGb3JtOiBGb3JtR3JvdXA7XG4gIGhlYWRlcl90eHQ6IGFueSA9IFwiQWRkIEJsb2cgQ2F0ZWdvcnlcIjtcbiAgYnV0dG9uVGV4dDogYW55ID0gXCJTVUJNSVRcIjtcbiAgY29uZmlnRGF0YTogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3VjY2Vzc01lc3NhZ2U6IGFueSA9IFwiQ2F0ZWdvcnkgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEhXCJcbiAgZ2V0UGFyZW50Q2F0QXJyOiBhbnkgPSBbXTtcbiAgZGlhbG9nUmVmOiBhbnk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgdGhpcy5lZGl0b3Jjb25maWcuZXh0cmFBbGxvd2VkQ29udGVudCA9ICcqW2NsYXNzXSgqKSxzcGFuO3VsO2xpO3RhYmxlO3RkO3N0eWxlOypbaWRdOyooKik7KnsqfSc7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vZ2VuZXJhdGluZyB0aGUgZm9ybVxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG4gICAgLy9nZXR0aW5nIHRoZSBwYXJlbnQgY2F0ZWdvcnlcbiAgICB0aGlzLmdldFBhcmVudERhdGEoKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl90eHQgPSBcIkVESVRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLmJsb2dDYXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgYmxvZ3RpdGxlOiBkZWZhdWx0VmFsdWUuYmxvZ3RpdGxlLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwYXJlbnRfaWQ6IGRlZmF1bHRWYWx1ZS5wYXJlbnRfaWRcbiAgICB9KTtcblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PUdFTkVSQVRJTkcgVEhFIEZPUk09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5ibG9nQ2F0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYmxvZ3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyKV1dLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMCldXSxcbiAgICAgIHBhcmVudF9pZDogWzAsXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgLy8gIEdldHRpbmcgdGhlIGlucHV0IENvbmZpZ3VyYXRpb24gXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG5cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMiwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgLy9HZXR0aW5nIHRoZSBwYXJlbnQgY2F0ZWdvcnlcbiAgZ2V0UGFyZW50RGF0YSgpIHtcbiAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgIHRva2VuOiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdqd3RUb2tlbicpXG5cbiAgICB9O1xuICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5nZXRQYXJlbnRDYXRBcnIgPSByZXNwb25zZS5yZXM7XG4gICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgY2F0ZWdvcnknLHJlc3BvbnNlLnJlcyk7XG4gICAgfSlcbiAgfVxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVCBmdW5jdGlvbj09PT09PT09PT09PT09PT09PVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmJsb2dDYXRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMuYmxvZ0NhdEZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5ibG9nQ2F0Rm9ybS52YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5ibG9nQ2F0Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJsb2dDYXRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XG4gICAgICB9XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLmJsb2dDYXRGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wicGFyZW50X2lkXCJdXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmJsb2dTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcblxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgLy9CbHVyIGZ1bmN0aW9uXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMuYmxvZ0NhdEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsMiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsMj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4iXX0=