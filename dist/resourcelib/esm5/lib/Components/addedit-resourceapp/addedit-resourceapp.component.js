/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/addedit-resourceapp/addedit-resourceapp.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1yZXNvdXJjZWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXNvdXJjZWxpYi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQtcmVzb3VyY2VhcHAvYWRkZWRpdC1yZXNvdXJjZWFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBSWQ7SUFpQkUsaUdBQWlHO0lBRWpHLHFDQUFvQixXQUF3QixFQUFVLGVBQW1DLEVBQy9FLE1BQWMsRUFBUyxhQUE2QixFQUFRLE1BQWlCO1FBRG5FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQy9FLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBUSxXQUFNLEdBQU4sTUFBTSxDQUFXOztRQVh2RixnQkFBVyxHQUFRLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQVEsUUFBUSxDQUFDO1FBRTNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBUSx3QkFBd0IsQ0FBQztRQUMvQyxjQUFTLEdBQUssRUFBRSxDQUFDO0lBSzBFLENBQUM7SUFHNUYs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SUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZHQUF5QjtpQkFDMUI7Ozs7Z0JBNUxtQixZQUFZO2dEQWlNM0IsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLFlBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxLQUFLOzs7SUFHZCwwQkFBcUM7O0lBQ3JDLHFCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VsaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VsaWIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LXJlc291cmNlYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQtcmVzb3VyY2VhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LXJlc291cmNlYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0UmVzb3VyY2VhcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBoZWFkZXJfbmFtZTogYW55ID0gXCJBRERcIjtcbiAgYnV0dG9uVGV4dDogYW55ID0gXCJTVUJNSVRcIjtcbiAgcmVzb3VyY2VGb3JtOiBGb3JtR3JvdXA7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25maWdEYXRhOiBhbnk7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBhbnkgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHlcIjtcbiAgY2F0X2FycmF5OmFueT1bXTtcbiAgZGlhbG9nUmVmOmFueTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlc291cmNlU2VydmljZTogUmVzb3VyY2VsaWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSxwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1BUFAgSU5QVVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIFxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQUREXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZFwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFRElUXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmdldFBhcmVudENhdGVnb3J5KCk7XG4gIH1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUdFTkVSQVRFIEZPUk09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMucmVzb3VyY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBjYXRlZ29yeV9uYW1lOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwYXJlbnRfY2F0ZWdvcnk6IFsnJyxdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHByaW9yaXR5OiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFsnJyxdXG4gICAgfSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQgRlVOQ1RJT049PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb25TdWJtaXQoKSB7XG5cblxuICAgIC8vIHRoaXMucmVzb3VyY2VGb3JtLmNvbnRyb2xzWyd0ZXN0aW1vbmlhbCddLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLnJlc291cmNlRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlc291cmNlRm9ybS52YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMucmVzb3VyY2VGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxuICAgICAgfTtcbiAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgIFxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUdldFBhcmVudENhdGVnb3J5PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBcbiAgICAgICAgZ2V0UGFyZW50Q2F0ZWdvcnkoKVxuICAgICAgICB7XG4gICAgICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIFwic291cmNlXCI6IFwicmVzb3VyY2VzXCIsXG4gICAgICAgICAgICBcInRva2VuXCI6IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJylcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIrXCIvZGF0YWxpc3RcIiwgZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgdGhpcy5jYXRfYXJyYXk9cmVzdWx0LnJlcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0X2FycmF5KTsgICAgICBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMucmVzb3VyY2VGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgY2F0ZWdvcnlfbmFtZTpkZWZhdWx0VmFsdWUuY2F0ZWdvcnlfbmFtZSxcbiAgICAgIHBhcmVudF9jYXRlZ29yeTpkZWZhdWx0VmFsdWUucGFyZW50X2NhdGVnb3J5LFxuICAgICAgZGVzY3JpcHRpb246ZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6ZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOmRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICB1c2VySWQ6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxufVxuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWw+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4iXX0=