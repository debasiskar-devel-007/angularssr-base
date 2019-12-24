/**
 * @fileoverview added by tsickle
 * Generated from: lib/Component/addedit-service/addedit-service.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
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
export class AddeditServiceComponent {
    // ==============================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} servicehttp
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, servicehttp, router, dialog) {
        this.formBuilder = formBuilder;
        this.servicehttp = servicehttp;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Write description...',
        };
        this.model = {
            editorData: ''
        };
        this.loader = false;
        this.buttonText = "SUBMIT";
        this.successMessage = "Submitted Successfully";
        this.img_arr = [];
        this.ErrCode = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader = false;
        this.generateForm();
        if (this.configData.action != 'edit')
            this.addBulletList('', '');
        // =========================================SWITCH CASES==========================================
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.flag = false;
                this.header_name = "ADD";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                this.flag = true;
                break;
        }
        // ===============================================================================================
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    generateForm() {
        this.serviceForm = this.formBuilder.group({
            service_title: ['', [Validators.required]],
            service_desc: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: [true,],
            bulletarr: this.formBuilder.array([]),
            service_img: ['',],
            userId: ['',]
        });
    }
    // =================================================================================================
    // ===============================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        defaultValue.bulletarr.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.addBulletList(element.bullet_title, element.bullet_desc);
        }));
        this.serviceForm.patchValue({
            service_title: defaultValue.service_title,
            service_desc: defaultValue.service_desc,
            priority: defaultValue.priority,
            status: defaultValue.status,
            service_img: defaultValue.service_img,
            userId: null
        });
        this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
        this.image_name = defaultValue.service_img.name;
        this.image_type = defaultValue.service_img.type;
    }
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    addBulletList(a, b) {
        /** @type {?} */
        const bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.push(this.formBuilder.group({
            bullet_title: [a],
            bullet_desc: [b],
        }));
    }
    /**
     * @return {?}
     */
    deleteBulletList() {
        /** @type {?} */
        const bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.removeAt(1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // ==================================================================================================
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    onSubmit() {
        // Service File Upload Works 
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.serviceForm.value.service_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
        }
        else {
            this.serviceForm.value.service_img = false;
        }
        this.loader = true;
        this.serviceForm.controls['service_desc'].markAsTouched();
        if (this.serviceForm.invalid) {
            return;
        }
        else {
            if (this.serviceForm.value.status) {
                this.serviceForm.value.status = parseInt("1");
            }
            else {
                this.serviceForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.serviceForm.value, this.configData.condition)
            };
            this.servicehttp.addData(this.configData.endpoint, postData).subscribe((/**
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
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
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
    // =================================================================================================
    /**
     * @return {?}
     */
    resetserviceForm() {
        this.serviceForm.reset();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.serviceForm.controls[val].markAsUntouched();
    }
    // ================================================================================================
    /**
     * @return {?}
     */
    clear_image() {
        this.flag = false;
    }
}
AddeditServiceComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-service',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"serviceForm.controls['service_title']?.touched || serviceForm.controls['service_title'].errors \n          && serviceForm.controls['service_title'].errors.required\">Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"service_desc\"\n          (blur)=\"inputBlur('service_desc')\"></ckeditor>\n        <mat-error *ngIf=\"serviceForm.controls['service_desc']?.touched || serviceForm.controls['service_desc']?.touched && \n        serviceForm.controls['service_desc'].errors \n          && serviceForm.controls['service_desc'].errors.required\">Please write a testimonial.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"serviceForm.controls['priority']?.touched || serviceForm.controls['priority'].errors \n          && serviceForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <h1>Service Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\" ></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one service image.</mat-error>\n        <!-- <mat-error *ngIf=\"serviceForm.controls['service_img'].errors && serviceForm.controls['service_img'].errors.required\">Priority is required.</mat-error> -->\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditServiceComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ServicelibService },
    { type: Router },
    { type: MatDialog }
];
AddeditServiceComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditServiceComponent.prototype.Editor;
    /** @type {?} */
    AddeditServiceComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditServiceComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditServiceComponent.prototype.serviceForm;
    /** @type {?} */
    AddeditServiceComponent.prototype.loader;
    /** @type {?} */
    AddeditServiceComponent.prototype.configData;
    /** @type {?} */
    AddeditServiceComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditServiceComponent.prototype.buttonText;
    /** @type {?} */
    AddeditServiceComponent.prototype.successMessage;
    /** @type {?} */
    AddeditServiceComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_arr;
    /** @type {?} */
    AddeditServiceComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditServiceComponent.prototype.flag;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_var;
    /** @type {?} */
    AddeditServiceComponent.prototype.header_name;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_name;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_type;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.servicehttp;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.router;
    /** @type {?} */
    AddeditServiceComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
export class Modal {
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
Modal.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2UtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGRlZGl0LXNlcnZpY2UvYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBcUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBU2QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUFxQ2xDLFlBQW9CLFdBQXdCLEVBQVUsV0FBOEIsRUFDMUUsTUFBYyxFQUFTLE1BQWlCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzFFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXOzs7O1FBL0IzQyxXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQztRQUNLLFVBQUssR0FBRztZQUNiLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQU9GLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztR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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlcnZpY2VsaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LXNlcnZpY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0U2VydmljZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG5cblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSBkZXNjcmlwdGlvbi4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWNsYXJhdGlvbiBzZWN0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2VydmljZUZvcm06IEZvcm1Hcm91cDtcbiAgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIGJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCI7XG4gIGRpYWxvZ1JlZjogYW55O1xuICBpbWdfYXJyOiBhbnkgPSBbXTtcbiAgRXJyQ29kZTogYm9vbGVhbiA9IGZhbHNlO1xuICBmbGFnOiBib29sZWFuO1xuICBpbWdfdmFyOiBhbnk7XG4gIGhlYWRlcl9uYW1lOiBhbnk7XG4gIGltYWdlX25hbWU6IGFueTtcbiAgaW1hZ2VfdHlwZTogYW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2VodHRwOiBTZXJ2aWNlbGliU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uICE9ICdlZGl0JylcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdCgnJywgJycpO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNXSVRDSCBDQVNFUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFERFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJPbmUgcm93IHVwZGF0ZWRcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRURJVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNlcnZpY2VfZGVzYzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIGJ1bGxldGFycjogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXG4gICAgICBzZXJ2aWNlX2ltZzogWycnLF0sXG4gICAgICB1c2VySWQ6IFsnJyxdXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuXG4gICAgZGVmYXVsdFZhbHVlLmJ1bGxldGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5hZGRCdWxsZXRMaXN0KGVsZW1lbnQuYnVsbGV0X3RpdGxlLCBlbGVtZW50LmJ1bGxldF9kZXNjKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VydmljZUZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBzZXJ2aWNlX3RpdGxlOiBkZWZhdWx0VmFsdWUuc2VydmljZV90aXRsZSxcbiAgICAgIHNlcnZpY2VfZGVzYzogZGVmYXVsdFZhbHVlLnNlcnZpY2VfZGVzYyxcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICBzdGF0dXM6IGRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICBzZXJ2aWNlX2ltZzogZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLFxuICAgICAgdXNlcklkOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5pbWdfdmFyID0gZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLmltYWdlO1xuICAgIHRoaXMuaW1hZ2VfbmFtZSA9IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5uYW1lO1xuICAgIHRoaXMuaW1hZ2VfdHlwZSA9IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy50eXBlXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rk9STSBBUlJBWSBGVU5DVElPTlM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBhZGRCdWxsZXRMaXN0KGE6IGFueSwgYjogYW55KSB7XG4gICAgY29uc3QgYmwgPSB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzLmJ1bGxldGFyciBhcyBGb3JtQXJyYXk7XG4gICAgYmwucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGJ1bGxldF90aXRsZTogW2FdLFxuICAgICAgYnVsbGV0X2Rlc2M6IFtiXSxcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGVCdWxsZXRMaXN0KCkge1xuICAgIGNvbnN0IGJsID0gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scy5idWxsZXRhcnIgYXMgRm9ybUFycmF5O1xuICAgIGJsLnJlbW92ZUF0KDEpO1xuICB9XG5cblxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuICAgIC8vIFNlcnZpY2UgRmlsZSBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9XG4gICAgICAgIHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHNbJ3NlcnZpY2VfZGVzYyddLm1hcmtBc1RvdWNoZWQoKTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc2VydmljZUZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXJ2aWNlaHR0cC5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuICAgIH0pO1xuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICByZXNldHNlcnZpY2VGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGVhcl9pbWFnZSgpIHtcbiAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19