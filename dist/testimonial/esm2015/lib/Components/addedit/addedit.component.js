/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators } from '@angular/forms';
import { TestimonialService } from '../../testimonial.service';
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
export class AddeditComponent {
    // ==================================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} testiService
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, testiService, router, dialog) {
        this.formBuilder = formBuilder;
        this.testiService = testiService;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Write testimonial...',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        //  ========================================Declaration Section======================================
        this.buttonText = "SUBMIT";
        this.loader = false;
        this.successMessage = "Submitted Successfully";
        this.ErrCode = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader = false;
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.flag = false;
                this.header_name = "Add Testimonial";
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
        // --------------------------------------------------------------------------
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
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    generateForm() {
        this.testimonialForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
            testimonial: ['', [Validators.required]],
            priority: ['', Validators.required],
            status: [true,],
            testimonial_img: ['',],
            userId: [this.configData.userData.id, null]
        });
    }
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    onSubmit() {
        // Testimonial File Upload Works 
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.testimonialForm.value.testimonial_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
        }
        else {
            this.testimonialForm.value.testimonial_img = false;
        }
        this.testimonialForm.controls['testimonial'].markAsTouched();
        this.loader = true;
        /* stop here if form is invalid */
        if (this.testimonialForm.invalid) {
            return;
        }
        else {
            if (this.testimonialForm.value.status) {
                this.testimonialForm.value.status = parseInt("1");
            }
            else {
                this.testimonialForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            this.testiService.addData(this.configData.endpoint, postData).subscribe((/**
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
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.testimonialForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email,
            testimonial: defaultValue.testimonial,
            priority: defaultValue.priority,
            status: defaultValue.status,
            userId: null,
            testimonial_img: defaultValue.testimonial_img
        });
        this.img_var = defaultValue.testimonial_img.basepath + defaultValue.testimonial_img.image;
        this.image_name = defaultValue.testimonial_img.name;
        this.image_type = defaultValue.testimonial_img.type;
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
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.testimonialForm.controls[val].markAsUntouched();
    }
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    clear_image() {
        this.flag = false;
    }
}
AddeditComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit',
                template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n\r\n\r\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\r\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n\r\n        <!-- -----------------------------------customer username---------------------------- -->\r\n        <mat-form-field>\r\n          <mat-label>Customer/User Name:</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['name']?.touched || testimonialForm.controls['name'].errors \r\n          && testimonialForm.controls['name'].errors.required\">Name is required.</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------------customer email-------------------------- -->\r\n        <mat-form-field>\r\n          <mat-label>Customer/User Email:</mat-label>\r\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['email']?.touched || testimonialForm.controls['email'].errors \r\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\r\n          <mat-error\r\n            *ngIf=\"!testimonialForm.controls['email'].valid && !testimonialForm.controls['email'].errors.required\">Email\r\n            is not valid</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------testimonial----------------------------------- -->\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"testimonial\"\r\n          (blur)=\"inputBlur('testimonial')\"></ckeditor>\r\n        <mat-error *ngIf=\"testimonialForm.controls['testimonial']?.touched || testimonialForm.controls['testimonial']?.touched && testimonialForm.controls['testimonial'].errors \r\n          && testimonialForm.controls['testimonial'].errors.required\">Please write a testimonial.</mat-error>\r\n        <br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ------------------------------------------priority------------------------------ -->\r\n        <mat-form-field>\r\n          <mat-label>Priority:</mat-label>\r\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['priority']?.touched || testimonialForm.controls['priority'].errors \r\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------------status---------------------------------- -->\r\n        <mat-label>Status:</mat-label><br>\r\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\r\n        <!-- -------------------------------------------------------------------------------  -->\r\n\r\n\r\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\r\n        <h1>Testimonial Image:</h1>\r\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\r\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one testimonial image.</mat-error>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n        <!-- CARD VIEW  -->\r\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\r\n          <mat-card class=\"example-card\">\r\n            <img mat-card-image [attr.src]=\"img_var\">\r\n            <mat-card-title>{{ image_name }}</mat-card-title>\r\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\r\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\r\n          </mat-card>\r\n        </mat-card-content>\r\n        <!-- ---------  -->\r\n\r\n\r\n\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: TestimonialService },
    { type: Router },
    { type: MatDialog }
];
AddeditComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditComponent.prototype.Editor;
    /** @type {?} */
    AddeditComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditComponent.prototype.buttonText;
    /** @type {?} */
    AddeditComponent.prototype.testimonialForm;
    /** @type {?} */
    AddeditComponent.prototype.loader;
    /** @type {?} */
    AddeditComponent.prototype.configData;
    /** @type {?} */
    AddeditComponent.prototype.successMessage;
    /** @type {?} */
    AddeditComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditComponent.prototype.flag;
    /** @type {?} */
    AddeditComponent.prototype.img_var;
    /** @type {?} */
    AddeditComponent.prototype.header_name;
    /** @type {?} */
    AddeditComponent.prototype.image_name;
    /** @type {?} */
    AddeditComponent.prototype.image_type;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.testiService;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.router;
    /** @type {?} */
    AddeditComponent.prototype.dialog;
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
                template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQvYWRkZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQStCM0IsWUFBb0IsV0FBd0IsRUFBVSxZQUFnQyxFQUM1RSxNQUFjLEVBQVMsTUFBaUI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7Ozs7UUE1QjNDLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDOzs7OztRQUtGLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFFZixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRS9CLG1CQUFjLEdBQVcsd0JBQXdCLENBQUM7UUFH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QUV2RCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVIQUF5QjthQUMxQjs7OztZQXBObUIsWUFBWTs0Q0F5TjNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDBCQUFxQzs7SUFDckMscUJBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQgeyBUZXN0aW1vbmlhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi90ZXN0aW1vbmlhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZGVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXHJcbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxyXG4gIGVkaXRvckNvbmZpZyA9IHtcclxuICAgIHBsYWNlaG9sZGVyOiAnV3JpdGUgdGVzdGltb25pYWwuLi4nLFxyXG4gIH07XHJcbiAgcHVibGljIG1vZGVsID0ge1xyXG4gICAgZWRpdG9yRGF0YTogJydcclxuICB9O1xyXG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cclxuXHJcblxyXG4gIC8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gU2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XHJcbiAgdGVzdGltb25pYWxGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbmZpZ0RhdGE7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xyXG4gIGRpYWxvZ1JlZjogYW55O1xyXG4gIGltYWdlQ29uZmlnRGF0YTphbnk7XHJcbiAgRXJyQ29kZTpib29sZWFuID0gZmFsc2U7XHJcbiAgZmxhZzogYm9vbGVhbjtcclxuICBpbWdfdmFyOiBhbnk7XHJcbiAgaGVhZGVyX25hbWU6IGFueTtcclxuICBpbWFnZV9uYW1lOiBhbnk7XHJcbiAgaW1hZ2VfdHlwZTogYW55O1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0ZXN0aVNlcnZpY2U6IFRlc3RpbW9uaWFsU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xyXG4gICAgICBjYXNlICdhZGQnOlxyXG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcclxuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgVGVzdGltb25pYWxcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZFwiO1xyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRURJVFwiO1xyXG4gICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcclxuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvcm0gVmFsaWRhdGlvbi9nZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBnZW5lcmF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokL1xyXG4gICAgICApXV0sXHJcbiAgICAgIHRlc3RpbW9uaWFsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIHByaW9yaXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXHJcbiAgICAgIHRlc3RpbW9uaWFsX2ltZyA6IFsnJyxdLFxyXG4gICAgICB1c2VySWQ6IFt0aGlzLmNvbmZpZ0RhdGEudXNlckRhdGEuaWQsIG51bGxdXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIC8vIFRlc3RpbW9uaWFsIEZpbGUgVXBsb2FkIFdvcmtzIFxyXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUgPSB0cnVlOyByZXR1cm47IH1cclxuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfaW1nID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcclxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcclxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfaW1nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1sndGVzdGltb25pYWwnXS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XHJcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXHJcbiAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0uaW52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xyXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXHJcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcclxuICAgICAgfTtcclxuICAgICAgdGhpcy50ZXN0aVNlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XHJcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgbmFtZTogZGVmYXVsdFZhbHVlLm5hbWUsXHJcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWwsXHJcbiAgICAgIHRlc3RpbW9uaWFsOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWwsXHJcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXHJcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcclxuICAgICAgdXNlcklkOiBudWxsLFxyXG4gICAgICB0ZXN0aW1vbmlhbF9pbWc6IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWdcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbWdfdmFyID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcuaW1hZ2U7XHJcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLm5hbWU7XHJcbiAgICB0aGlzLmltYWdlX3R5cGUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLnR5cGVcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyBtc2c6IHggfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xyXG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICB9XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNsZWFyIE1BVCB0YWc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNsZWFyX2ltYWdlKCkge1xyXG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiJdfQ==