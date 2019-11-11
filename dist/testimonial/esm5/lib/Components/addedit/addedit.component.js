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
var AddeditComponent = /** @class */ (function () {
    // ==================================================================================================
    function AddeditComponent(formBuilder, testiService, router, dialog) {
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
    AddeditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(AddeditComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditComponent.prototype, "imageUpload", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.imageConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =====================================Form Validation/generation===================================
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.generateForm = 
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    function () {
        this.testimonialForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
            testimonial: ['', [Validators.required]],
            priority: ['', Validators.required],
            status: [true,],
            testimonial_img: ['',],
            userId: [this.configData.userData.id, null]
        });
    };
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.onSubmit = 
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            this.testiService.addData(this.configData.endpoint, postData).subscribe((/**
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
    // =================================================================================================
    // ================================================Default value======================================
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddeditComponent.prototype.setDefaultValue = 
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
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
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditComponent.prototype.openDialog = 
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
    // =====================================================================================================
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.testimonialForm.controls[val].markAsUntouched();
    };
    // ==========================================Clear MAT tag===================================
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.clear_image = 
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    function () {
        this.flag = false;
    };
    AddeditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit',
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n\r\n\r\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\r\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n\r\n        <!-- -----------------------------------customer username---------------------------- -->\r\n        <mat-form-field>\r\n          <mat-label>Customer/User Name:</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['name']?.touched || testimonialForm.controls['name'].errors \r\n          && testimonialForm.controls['name'].errors.required\">Name is required.</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------------customer email-------------------------- -->\r\n        <mat-form-field>\r\n          <mat-label>Customer/User Email:</mat-label>\r\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['email']?.touched || testimonialForm.controls['email'].errors \r\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\r\n          <mat-error\r\n            *ngIf=\"!testimonialForm.controls['email'].valid && !testimonialForm.controls['email'].errors.required\">Email\r\n            is not valid</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------testimonial----------------------------------- -->\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"testimonial\"\r\n          (blur)=\"inputBlur('testimonial')\"></ckeditor>\r\n        <mat-error *ngIf=\"testimonialForm.controls['testimonial']?.touched || testimonialForm.controls['testimonial']?.touched && testimonialForm.controls['testimonial'].errors \r\n          && testimonialForm.controls['testimonial'].errors.required\">Please write a testimonial.</mat-error>\r\n        <br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ------------------------------------------priority------------------------------ -->\r\n        <mat-form-field>\r\n          <mat-label>Priority:</mat-label>\r\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\r\n          <mat-error *ngIf=\"testimonialForm.controls['priority']?.touched || testimonialForm.controls['priority'].errors \r\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\r\n        </mat-form-field><br>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- ----------------------------------------status---------------------------------- -->\r\n        <mat-label>Status:</mat-label><br>\r\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\r\n        <!-- -------------------------------------------------------------------------------  -->\r\n\r\n\r\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\r\n        <h1>Testimonial Image:</h1>\r\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\r\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one testimonial image.</mat-error>\r\n        <!-- -------------------------------------------------------------------------------- -->\r\n\r\n        <!-- CARD VIEW  -->\r\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\r\n          <mat-card class=\"example-card\">\r\n            <img mat-card-image [attr.src]=\"img_var\">\r\n            <mat-card-title>{{ image_name }}</mat-card-title>\r\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\r\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\r\n          </mat-card>\r\n        </mat-card-content>\r\n        <!-- ---------  -->\r\n\r\n\r\n\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: TestimonialService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddeditComponent.propDecorators = {
        config: [{ type: Input }],
        imageUpload: [{ type: Input }]
    };
    return AddeditComponent;
}());
export { AddeditComponent };
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
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQvYWRkZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFJZDtJQWlDRSxxR0FBcUc7SUFHckcsMEJBQW9CLFdBQXdCLEVBQVUsWUFBZ0MsRUFDNUUsTUFBYyxFQUFTLE1BQWlCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXOzs7O1FBNUIzQyxXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQztRQUNLLFVBQUssR0FBRztZQUNiLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzs7Ozs7UUFLRixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBRWYsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUUvQixtQkFBYyxHQUFXLHdCQUF3QixDQUFDO1FBR2xELFlBQU8sR0FB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QUNkLG1DQUFhOztJQUNiLHVDQUFpQjs7SUFDakIsc0NBQWdCOztJQUNoQixzQ0FBZ0I7Ozs7O0lBSUosdUNBQWdDOzs7OztJQUFFLHdDQUF3Qzs7Ozs7SUFDcEYsa0NBQXNCOztJQUFFLGtDQUF3Qjs7O0FBc0twRDtJQU1FLGVBQ1MsU0FBOEIsRUFDTCxJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZELHlCQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1SEFBeUI7aUJBQzFCOzs7O2dCQXBObUIsWUFBWTtnREF5TjNCLE1BQU0sU0FBQyxlQUFlOztJQU0zQixZQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksS0FBSzs7O0lBR2QsMEJBQXFDOztJQUNyQyxxQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7IFRlc3RpbW9uaWFsU2VydmljZSB9IGZyb20gJy4uLy4uL3Rlc3RpbW9uaWFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkZWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cclxuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXHJcbiAgZWRpdG9yQ29uZmlnID0ge1xyXG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSB0ZXN0aW1vbmlhbC4uLicsXHJcbiAgfTtcclxuICBwdWJsaWMgbW9kZWwgPSB7XHJcbiAgICBlZGl0b3JEYXRhOiAnJ1xyXG4gIH07XHJcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xyXG5cclxuXHJcbiAgLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWNsYXJhdGlvbiBTZWN0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcclxuICB0ZXN0aW1vbmlhbEZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uZmlnRGF0YTtcclxuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCI7XHJcbiAgZGlhbG9nUmVmOiBhbnk7XHJcbiAgaW1hZ2VDb25maWdEYXRhOmFueTtcclxuICBFcnJDb2RlOmJvb2xlYW4gPSBmYWxzZTtcclxuICBmbGFnOiBib29sZWFuO1xyXG4gIGltZ192YXI6IGFueTtcclxuICBoZWFkZXJfbmFtZTogYW55O1xyXG4gIGltYWdlX25hbWU6IGFueTtcclxuICBpbWFnZV90eXBlOiBhbnk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHRlc3RpU2VydmljZTogVGVzdGltb25pYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hlY2tpbmcgdGhlIGNhc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xyXG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBUZXN0aW1vbmlhbFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFRElUXCI7XHJcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XHJcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rm9ybSBWYWxpZGF0aW9uL2dlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGdlbmVyYXRlRm9ybSgpIHtcclxuICAgIHRoaXMudGVzdGltb25pYWxGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvXHJcbiAgICAgICldXSxcclxuICAgICAgdGVzdGltb25pYWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgcHJpb3JpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHN0YXR1czogW3RydWUsXSxcclxuICAgICAgdGVzdGltb25pYWxfaW1nIDogWycnLF0sXHJcbiAgICAgIHVzZXJJZDogW3RoaXMuY29uZmlnRGF0YS51c2VyRGF0YS5pZCwgbnVsbF1cclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgLy8gVGVzdGltb25pYWwgRmlsZSBVcGxvYWQgV29ya3MgXHJcbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxyXG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxyXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLm5hbWUsXHJcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgIHRoaXMudGVzdGltb25pYWxGb3JtLmNvbnRyb2xzWyd0ZXN0aW1vbmlhbCddLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcclxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cclxuICAgIGlmICh0aGlzLnRlc3RpbW9uaWFsRm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXHJcbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xyXG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcclxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnRlc3RpU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcclxuICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcclxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbCxcclxuICAgICAgdGVzdGltb25pYWw6IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbCxcclxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcclxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxyXG4gICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgIHRlc3RpbW9uaWFsX2ltZzogZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5pbWFnZTtcclxuICAgIHRoaXMuaW1hZ2VfbmFtZSA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcubmFtZTtcclxuICAgIHRoaXMuaW1hZ2VfdHlwZSA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcudHlwZVxyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Q2xlYXIgTUFUIHRhZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgY2xlYXJfaW1hZ2UoKSB7XHJcbiAgICB0aGlzLmZsYWcgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIl19