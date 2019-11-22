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
import { DomSanitizer } from '@angular/platform-browser';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
/**
 * @record
 */
export function PreviewDialog() { }
if (false) {
    /** @type {?} */
    PreviewDialog.prototype.msg;
}
var AddeditComponent = /** @class */ (function () {
    // ==================================================================================================
    function AddeditComponent(formBuilder, testiService, router, dialog, sanitizer) {
        this.formBuilder = formBuilder;
        this.testiService = testiService;
        this.router = router;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
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
        this.youtube_suffix = "https://www.youtube.com/embed/";
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
            description: ['', [Validators.required]],
            priority: ['', Validators.required],
            status: [true,],
            testimonial_img: ['',],
            video_url: [],
            video_name: [],
            video_desc: [],
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
        this.testimonialForm.controls['description'].markAsTouched();
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
            description: defaultValue.description,
            priority: defaultValue.priority,
            status: defaultValue.status,
            userId: null,
            testimonial_img: defaultValue.testimonial_img,
            video_url: defaultValue.video_url,
            video_name: defaultValue.video_name,
            video_desc: defaultValue.video_desc
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
    //  =====================preview video================
    // =====================================================================================================
    //  =====================preview video================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.preview_video = 
    // =====================================================================================================
    //  =====================preview video================
    /**
     * @return {?}
     */
    function () {
        console.log("********", this.youtube_suffix + this.testimonialForm.value.video_url);
        //  this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube_suffix+this.testimonialForm.value.video_url);
        this.dialogRef = this.dialog.open(PreviewComponent, {
            width: '850px',
            height: '500px',
            data: { msg: this.youtube_suffix + this.testimonialForm.value.video_url }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // ===================================================
    // ===================================================
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditComponent.prototype.inputBlur = 
    // ===================================================
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['name'].valid\n          && testimonialForm.controls['name'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['email'].valid\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n \n\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          (blur)=\"inputBlur('description')\"></ckeditor>\n          <mat-error *ngIf=\"!testimonialForm.controls['description'].valid\n          && testimonialForm.controls['description'].errors.required && testimonialForm.controls['description'].touched  \" >Description is required.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['priority'].valid\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one testimonial image.</mat-error>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------------Video Attachment--------------------- -->\n        <h1>Attach a testimonial video:</h1>\n\n\n        <!-- video url  -->\n        <mat-form-field class=\"video_url\">\n          <input matInput formControlName=\"video_url\">\n          <span matPrefix> {{ youtube_suffix }} </span>\n          <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video()\" type=\"button\">remove_red_eye</mat-icon>\n        </mat-form-field>\n\n        <!-- video name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video title\" formControlName=\"video_name\">\n        </mat-form-field>\n\n        <!-- Video description  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video description\" formControlName=\"video_desc\">\n        </mat-form-field>\n\n        <br>\n        <!-- ------------------------------------------------------------------- -->\n\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.clickable{cursor:pointer;position:relative;z-index:999}"]
                }] }
    ];
    /** @nocollapse */
    AddeditComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: TestimonialService },
        { type: Router },
        { type: MatDialog },
        { type: DomSanitizer }
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
    /** @type {?} */
    AddeditComponent.prototype.youtube_suffix;
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
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.sanitizer;
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
// ======================================================================================================
// preview cmponent
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        console.log("data", data);
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.msg);
    }
    /**
     * @return {?}
     */
    PreviewComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    PreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>PREVIEW VIDEO</h1>\n<div mat-dialog-content>\n    <p>{{ data.msg }}</p>\n    <!-- <p>{{ safeSrc }}</p> -->\n    <p>\n        <iframe [src]=\"safeSrc\" width=\"560\" height=\"315\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe>\n        <!-- <iframe width=\"420\" height=\"315\" [src]=\"safeSrc\" > -->\n        <!-- </iframe> -->\n    </p>\n</div>"
                }] }
    ];
    /** @nocollapse */
    PreviewComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer }
    ]; };
    return PreviewComponent;
}());
export { PreviewComponent };
if (false) {
    /** @type {?} */
    PreviewComponent.prototype.safeSrc;
    /** @type {?} */
    PreviewComponent.prototype.dialogRef;
    /** @type {?} */
    PreviewComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    PreviewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQvYWRkZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFHMUUsZ0NBRUM7OztJQURDLHlCQUFZOzs7OztBQUVkLG1DQUVDOzs7SUFEQyw0QkFBUTs7QUFHVjtJQWtDRSxxR0FBcUc7SUFHckcsMEJBQW9CLFdBQXdCLEVBQVUsWUFBZ0MsRUFDNUUsTUFBYyxFQUFTLE1BQWlCLEVBQVcsU0FBdUI7UUFEaEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVyxjQUFTLEdBQVQsU0FBUyxDQUFjOzs7O1FBN0I3RSxXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQztRQUNLLFVBQUssR0FBRztZQUNiLFVBQVUsRUFBRSxFQUFF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SUFBRyxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IFRlc3RpbW9uaWFsU2VydmljZSB9IGZyb20gJy4uLy4uL3Rlc3RpbW9uaWFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJldmlld0RpYWxvZ3tcbiAgbXNnOmFueTsgXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1dyaXRlIHRlc3RpbW9uaWFsLi4uJyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIC8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gU2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJ1dHRvblRleHQgPSBcIlNVQk1JVFwiOyBcbiAgdGVzdGltb25pYWxGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uZmlnRGF0YTtcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgaW1hZ2VDb25maWdEYXRhOmFueTtcbiAgRXJyQ29kZTpib29sZWFuID0gZmFsc2U7XG4gIGZsYWc6IGJvb2xlYW47XG4gIGltZ192YXI6IGFueTtcbiAgaGVhZGVyX25hbWU6IGFueTtcbiAgaW1hZ2VfbmFtZTogYW55O1xuICBpbWFnZV90eXBlOiBhbnk7XG4gIHlvdXR1YmVfc3VmZml4OmFueT1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0ZXN0aVNlcnZpY2U6IFRlc3RpbW9uaWFsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cgLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGVja2luZyB0aGUgY2FzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIFRlc3RpbW9uaWFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZFwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFRElUXCI7XG4gICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rm9ybSBWYWxpZGF0aW9uL2dlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokL1xuICAgICAgKV1dLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgdGVzdGltb25pYWxfaW1nIDogWycnLF0sXG4gICAgICB2aWRlb191cmw6W10sXG4gICAgICB2aWRlb19uYW1lOltdLFxuICAgICAgdmlkZW9fZGVzYzpbXSxcbiAgICAgIHVzZXJJZDogW3RoaXMuY29uZmlnRGF0YS51c2VyRGF0YS5pZCwgbnVsbF1cbiAgICB9KVxuICAgIFxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1VCTUlUPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgLy8gVGVzdGltb25pYWwgRmlsZSBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICBcbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfaW1nID1cbiAgICAgICAge1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XG4gICAgICB9XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgIH07XG4gICAgICB0aGlzLnRlc3RpU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5hbWU6IGRlZmF1bHRWYWx1ZS5uYW1lLFxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwcmlvcml0eTogZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgdGVzdGltb25pYWxfaW1nOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLFxuICAgICAgdmlkZW9fdXJsOmRlZmF1bHRWYWx1ZS52aWRlb191cmwsXG4gICAgICB2aWRlb19uYW1lOmRlZmF1bHRWYWx1ZS52aWRlb19uYW1lLFxuICAgICAgdmlkZW9fZGVzYzpkZWZhdWx0VmFsdWUudmlkZW9fZGVzY1xuICAgIH0pO1xuICAgIHRoaXMuaW1nX3ZhciA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcuYmFzZXBhdGggKyBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLmltYWdlO1xuICAgIHRoaXMuaW1hZ2VfbmFtZSA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcubmFtZTtcbiAgICB0aGlzLmltYWdlX3R5cGUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLnR5cGVcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09cHJldmlldyB2aWRlbz09PT09PT09PT09PT09PT1cbiAgcHJldmlld192aWRlbygpXG4gIHtcbiAgICAgY29uc29sZS5sb2coXCIqKioqKioqKlwiLHRoaXMueW91dHViZV9zdWZmaXggK3RoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnZpZGVvX3VybCk7XG4gICAgLy8gIHRoaXMuc2FmZVNyYyA9ICB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy55b3V0dWJlX3N1ZmZpeCt0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS52aWRlb191cmwpO1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihQcmV2aWV3Q29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzg1MHB4JyxcbiAgICAgIGhlaWdodDonNTAwcHgnLFxuICAgICAgXG4gICAgICBkYXRhOiB7IG1zZzogdGhpcy55b3V0dWJlX3N1ZmZpeCArdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudmlkZW9fdXJsIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNsZWFyIE1BVCB0YWc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGVhcl9pbWFnZSgpIHtcbiAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vIHByZXZpZXcgY21wb25lbnRcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdwcmV2aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IHtcbiAgc2FmZVNyYzogU2FmZVJlc291cmNlVXJsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UHJldmlld0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBQcmV2aWV3RGlhbG9nICwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyBcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpOyAgICAgIFxuICAgICAgdGhpcy5zYWZlU3JjID0gIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChkYXRhLm1zZyk7XG4gICAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gICAgXG59Il19