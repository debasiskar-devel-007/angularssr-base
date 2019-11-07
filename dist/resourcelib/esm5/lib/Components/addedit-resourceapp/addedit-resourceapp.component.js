/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourcelibService } from '../../resourcelib.service';
import { Router } from '@angular/router';
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
var AddeditResourceappComponent = /** @class */ (function () {
    // ==============================================================================================
    function AddeditResourceappComponent(formBuilder, resourceService, router, cookieService, dialog) {
        this.formBuilder = formBuilder;
        this.resourceService = resourceService;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        // =============================================Declarations=====================================
        this.header_name = "ADD";
        this.buttonText = "SUBMIT";
        this.loader = false;
        this.successMessage = "Submitted Successfully";
        this.cat_array = [];
    }
    Object.defineProperty(AddeditResourceappComponent.prototype, "config", {
        // ===========================================APP INPUT=====================================
        set: 
        // ===========================================APP INPUT=====================================
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
    // ============================================================================================
    // ============================================================================================
    /**
     * @return {?}
     */
    AddeditResourceappComponent.prototype.ngOnInit = 
    // ============================================================================================
    /**
     * @return {?}
     */
    function () {
        this.loader = false;
        this.generateForm();
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "ADD";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                break;
        }
        this.getParentCategory();
    };
    // =============================================GENERATE FORM=================================
    // =============================================GENERATE FORM=================================
    /**
     * @return {?}
     */
    AddeditResourceappComponent.prototype.generateForm = 
    // =============================================GENERATE FORM=================================
    /**
     * @return {?}
     */
    function () {
        this.resourceForm = this.formBuilder.group({
            category_name: ['', Validators.required],
            parent_category: ['',],
            description: ['', Validators.required],
            priority: ['', Validators.required],
            status: ['',]
        });
    };
    // ============================================================================================
    // ==========================================SUBMIT FUNCTION==========================================
    // ============================================================================================
    // ==========================================SUBMIT FUNCTION==========================================
    /**
     * @return {?}
     */
    AddeditResourceappComponent.prototype.onSubmit = 
    // ============================================================================================
    // ==========================================SUBMIT FUNCTION==========================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // this.resourceForm.controls['testimonial'].markAsTouched();
        this.loader = true;
        /* stop here if form is invalid */
        if (this.resourceForm.invalid) {
            return;
        }
        else {
            if (this.resourceForm.value.status) {
                this.resourceForm.value.status = parseInt("1");
            }
            else {
                this.resourceForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.resourceForm.value, this.configData.condition)
            };
            this.resourceService.addData(this.configData.endpoint, postData).subscribe((/**
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
    // =================================================================================================
    // ======================================GetParentCategory=============================
    // =================================================================================================
    // ======================================GetParentCategory=============================
    /**
     * @return {?}
     */
    AddeditResourceappComponent.prototype.getParentCategory = 
    // =================================================================================================
    // ======================================GetParentCategory=============================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            "source": "resources",
            "token": this.cookieService.get('jwtToken')
        };
        this.resourceService.getData(this.configData.endpoint2 + "/datalist", data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = {};
            result = response;
            _this.cat_array = result.res;
            console.log(_this.cat_array);
        }));
    };
    // =============================================================================
    // ================================================Default value======================================
    // =============================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddeditResourceappComponent.prototype.setDefaultValue = 
    // =============================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.resourceForm.patchValue({
            category_name: defaultValue.category_name,
            parent_category: defaultValue.parent_category,
            description: defaultValue.description,
            priority: defaultValue.priority,
            status: defaultValue.status,
            userId: null,
        });
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditResourceappComponent.prototype.openDialog = 
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
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
    AddeditResourceappComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit-resourceapp',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"resourceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n        <!-- category name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Category name\" formControlName=\"category_name\">\n          <mat-error *ngIf=\"resourceForm.controls['category_name']?.touched || resourceForm.controls['category_name'].errors \n          && resourceForm.controls['category_name'].errors.required\">Category name is required.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- parent category  -->\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <select matNativeControl required formControlName=\"parent_category\">\n            <option value=\"0\">Please choose a parent</option>            \n            <option value=\"{{ i.category_name }}\" *ngFor=\"let i of cat_array\">{{ i.category_name }}</option>\n          </select>\n        </mat-form-field>\n\n        <!-- description  -->\n        <mat-form-field>\n          <textarea matInput placeholder=\"Category Description\" formControlName=\"description\"></textarea>\n          <mat-error *ngIf=\"resourceForm.controls['description']?.touched || resourceForm.controls['description'].errors \n          && resourceForm.controls['description'].errors.required\">Please add a description.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- priority  -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"resourceForm.controls['priority']?.touched || resourceForm.controls['priority'].errors \n          && resourceForm.controls['priority'].errors.required\">Please set priority.</mat-error>\n        </mat-form-field>\n\n\n        <!-- status  -->\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Status</mat-checkbox><br>\n      \n\n\n        <!-- buttons sets  -->\n        <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n\n\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditResourceappComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ResourcelibService },
        { type: Router },
        { type: CookieService },
        { type: MatDialog }
    ]; };
    AddeditResourceappComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddeditResourceappComponent;
}());
export { AddeditResourceappComponent };
if (false) {
    /** @type {?} */
    AddeditResourceappComponent.prototype.header_name;
    /** @type {?} */
    AddeditResourceappComponent.prototype.buttonText;
    /** @type {?} */
    AddeditResourceappComponent.prototype.resourceForm;
    /** @type {?} */
    AddeditResourceappComponent.prototype.loader;
    /** @type {?} */
    AddeditResourceappComponent.prototype.configData;
    /** @type {?} */
    AddeditResourceappComponent.prototype.successMessage;
    /** @type {?} */
    AddeditResourceappComponent.prototype.cat_array;
    /** @type {?} */
    AddeditResourceappComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddeditResourceappComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddeditResourceappComponent.prototype.resourceService;
    /**
     * @type {?}
     * @private
     */
    AddeditResourceappComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddeditResourceappComponent.prototype.cookieService;
    /** @type {?} */
    AddeditResourceappComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
var Modal = /** @class */ (function () {
    function Modal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal;
}());
export { Modal };
if (false) {
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1yZXNvdXJjZWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXNvdXJjZWxpYi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQtcmVzb3VyY2VhcHAvYWRkZWRpdC1yZXNvdXJjZWFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFJZDtJQWlCRSxpR0FBaUc7SUFFakcscUNBQW9CLFdBQXdCLEVBQVUsZUFBbUMsRUFDL0UsTUFBYyxFQUFTLGFBQTZCLEVBQVEsTUFBaUI7UUFEbkUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDL0UsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFRLFdBQU0sR0FBTixNQUFNLENBQVc7O1FBWHZGLGdCQUFXLEdBQVEsS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBUSxRQUFRLENBQUM7UUFFM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixtQkFBYyxHQUFRLHdCQUF3QixDQUFDO1FBQy9DLGNBQVMsR0FBSyxFQUFFLENBQUM7SUFLMEUsQ0FBQztJQUc1Rixz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QUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsNkdBQXlCO2lCQUMxQjs7OztnQkE1TG1CLFlBQVk7Z0RBaU0zQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsWUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLEtBQUs7OztJQUdkLDBCQUFxQzs7SUFDckMscUJBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZXNvdXJjZWxpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9yZXNvdXJjZWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtcmVzb3VyY2VhcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1yZXNvdXJjZWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtcmVzb3VyY2VhcHAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkaXRSZXNvdXJjZWFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWNsYXJhdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFERFwiO1xuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xuICByZXNvdXJjZUZvcm06IEZvcm1Hcm91cDtcbiAgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgc3VjY2Vzc01lc3NhZ2U6IGFueSA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xuICBjYXRfYXJyYXk6YW55PVtdO1xuICBkaWFsb2dSZWY6YW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVzb3VyY2VTZXJ2aWNlOiBSZXNvdXJjZWxpYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGNvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlLHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUFQUCBJTlBVVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBRERcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkVESVRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuZ2V0UGFyZW50Q2F0ZWdvcnkoKTtcbiAgfVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09R0VORVJBVEUgRk9STT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5yZXNvdXJjZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNhdGVnb3J5X25hbWU6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBhcmVudF9jYXRlZ29yeTogWycnLF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcHJpb3JpdHk6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXR1czogWycnLF1cbiAgICB9KTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVCBGVU5DVElPTj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvblN1Ym1pdCgpIHtcblxuXG4gICAgLy8gdGhpcy5yZXNvdXJjZUZvcm0uY29udHJvbHNbJ3Rlc3RpbW9uaWFsJ10ubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMucmVzb3VyY2VGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVzb3VyY2VGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLnJlc291cmNlRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc291cmNlRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5yZXNvdXJjZUZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICB9O1xuICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09R2V0UGFyZW50Q2F0ZWdvcnk9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFxuICAgICAgICBnZXRQYXJlbnRDYXRlZ29yeSgpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJyZXNvdXJjZXNcIixcbiAgICAgICAgICAgIFwidG9rZW5cIjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKVxuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MitcIi9kYXRhbGlzdFwiLCBkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLmNhdF9hcnJheT1yZXN1bHQucmVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXRfYXJyYXkpOyAgICAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5yZXNvdXJjZUZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBjYXRlZ29yeV9uYW1lOmRlZmF1bHRWYWx1ZS5jYXRlZ29yeV9uYW1lLFxuICAgICAgcGFyZW50X2NhdGVnb3J5OmRlZmF1bHRWYWx1ZS5wYXJlbnRfY2F0ZWdvcnksXG4gICAgICBkZXNjcmlwdGlvbjpkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwcmlvcml0eTpkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICBzdGF0dXM6ZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHVzZXJJZDogbnVsbCxcbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG59XG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==