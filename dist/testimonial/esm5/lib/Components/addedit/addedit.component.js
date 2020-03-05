/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/addedit/addedit.component.ts
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
        this.flag2 = false;
        this.youtube_suffix = "https://www.youtube.com/embed/";
        this.editorconfig = {};
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
    Object.defineProperty(AddeditComponent.prototype, "audioUpload", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.audioConfigData = getConfig;
            //console.warn(getConfig);
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
            video_url: [null],
            video_name: [],
            video_desc: [],
            testimonial_audio: [null],
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
        // Testimonial audio Upload Works 
        if (this.audioConfigData.files) {
            if (this.audioConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.testimonialForm.value.testimonial_audio =
                {
                    "basepath": this.audioConfigData.files[0].upload.data.basepath + '/' + this.audioConfigData.path + '/',
                    "audio": this.audioConfigData.files[0].upload.data.data.fileservername,
                    "name": this.audioConfigData.files[0].name,
                    "type": this.audioConfigData.files[0].type
                };
        }
        this.testimonialForm.controls['description'].markAsTouched();
        this.loader = true;
        /* stop here if form is invalid */
        if (this.testimonialForm.invalid) {
            return;
        }
        else {
            if (this.testimonialForm.value.status) {
                this.testimonialForm.value.status = 1;
            }
            else {
                this.testimonialForm.value.status = 0;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            // console.warn(postData);
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
        //console.warn("defauiltvalue",defaultValue);
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
            video_desc: defaultValue.video_desc,
            testimonial_audio: defaultValue.testimonial_audio
        });
        this.img_var = defaultValue.testimonial_img.basepath + defaultValue.testimonial_img.image;
        this.image_name = defaultValue.testimonial_img.name;
        this.image_type = defaultValue.testimonial_img.type;
        if (defaultValue.testimonial_audio != null) {
            this.flag2 = true;
            this.testimonialAudio = defaultValue.testimonial_audio.basepath + defaultValue.testimonial_audio.audio;
        }
        //console.log(">>>",this.img_var);
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
    // ========================================================================================
    // ========================================================================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.clear_audio = 
    // ========================================================================================
    /**
     * @return {?}
     */
    function () {
        this.flag2 = false;
        this.testimonialForm.controls['testimonial_audio'].setValue('');
    };
    AddeditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['name'].valid\n          && testimonialForm.controls['name'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['email'].valid\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n \n\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n          <mat-label>Please write a testimonial...</mat-label>\n          <ck-editor formControlName=\"description\" [config]=\"editorconfig\" (blur)=\"inputBlur('description')\">\n          </ck-editor>\n         <mat-error *ngIf=\"!testimonialForm.controls['description'].valid\n          && testimonialForm.controls['description'].errors.required && testimonialForm.controls['description'].touched  \" >Description is required.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['priority'].valid\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one testimonial image.</p>\n        </div>\n        <!-- -------------------------------------------------------------------------------- -->\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n\n        <!-- --------------------------------------Video Attachment--------------------- -->\n        <h1>Attach a testimonial video:</h1>\n\n\n        <!-- video url  -->\n        <mat-form-field class=\"video_url\">\n          <input matInput formControlName=\"video_url\">\n          <span matPrefix> {{ youtube_suffix }} </span>\n          <mat-icon matSuffix *ngIf=\"testimonialForm.controls['video_url'].value!=null && testimonialForm.controls['video_url'].value!=''\"  class=\"clickable\" (click)=\"preview_video()\" type=\"button\">remove_red_eye</mat-icon>\n        </mat-form-field>\n\n        <!-- video name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Title\" formControlName=\"video_name\">\n        </mat-form-field>\n\n        <!-- Video description  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Description\" formControlName=\"video_desc\">\n        </mat-form-field>\n\n        <br>\n        <!-- ------------------------------------------------------------------- -->\n\n                <!-- --------------------------------------Audio Attachment--------------------- -->\n                <h1>Attach a testimonial Audio:</h1>\n\n                <span>\n                  <lib-file-upload  [config]=\"audioConfigData\"></lib-file-upload>\n                </span>\n                <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n                  <mat-card class=\"example-card\">\n                    <audio controls>\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/ogg\">\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                    </audio>\n                    <span class=\"closecard\" (click)=\"clear_audio()\"><i class=\"material-icons\">clear</i></span>\n                  </mat-card>\n                </mat-card-content>\n                <br>\n                <!-- ------------------------------------------------------------------- -->\n        \n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.clickable{cursor:pointer;position:relative;z-index:999}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}"]
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
        imageUpload: [{ type: Input }],
        audioUpload: [{ type: Input }]
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
    AddeditComponent.prototype.testimonialAudio;
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
    AddeditComponent.prototype.flag2;
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
    /** @type {?} */
    AddeditComponent.prototype.editorconfig;
    /** @type {?} */
    AddeditComponent.prototype.audioConfigData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9hZGRlZGl0L2FkZGVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUkxRSxnQ0FFQzs7O0lBREMseUJBQVk7Ozs7O0FBRWQsbUNBRUM7OztJQURDLDRCQUFTOztBQUdYO0lBdUNFLHFHQUFxRztJQUdyRywwQkFBb0IsV0FBd0IsRUFBVSxZQUFnQyxFQUM1RSxNQUFjLEVBQVMsTUFBaUIsRUFBVSxTQUF1QjtRQUQvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUM1RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7Ozs7UUFsQzVFLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2Is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LFFBQVEsRUFBRSxXQUFXO29CQUNyQiwrYUFBMkI7aUJBQzVCOzs7O2dCQXBUbUIsWUFBWTtnREF5VDNCLE1BQU0sU0FBQyxlQUFlO2dCQXhUbEIsWUFBWTs7SUFnVXJCLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FaWSxnQkFBZ0I7OztJQUMzQixtQ0FBeUI7O0lBRXZCLHFDQUFnRDs7SUFDaEQsZ0NBQW1EOzs7OztJQUFFLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgVGVzdGltb25pYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVzdGltb25pYWwuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL3JlbmRlcjMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQcmV2aWV3RGlhbG9nIHtcbiAgbXNnOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1dyaXRlIHRlc3RpbW9uaWFsLi4uJyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIC8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gU2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgcHVibGljIHRlc3RpbW9uaWFsRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb25maWdEYXRhO1xuICBwdWJsaWMgdGVzdGltb25pYWxBdWRpbzogYW55O1xuICBwdWJsaWMgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xuICBwdWJsaWMgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBpbWFnZUNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIEVyckNvZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZsYWc6IGJvb2xlYW47XG4gIHB1YmxpYyBmbGFnMjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW1nX3ZhcjogYW55O1xuICBwdWJsaWMgaGVhZGVyX25hbWU6IGFueTtcbiAgcHVibGljIGltYWdlX25hbWU6IGFueTtcbiAgcHVibGljIGltYWdlX3R5cGU6IGFueTtcbiAgcHVibGljIHlvdXR1YmVfc3VmZml4OiBhbnkgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiO1xuICBwdWJsaWMgZWRpdG9yY29uZmlnOiBhbnkgPSB7fTtcbiAgcHVibGljIGF1ZGlvQ29uZmlnRGF0YTogYW55O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0ZXN0aVNlcnZpY2U6IFRlc3RpbW9uaWFsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgVGVzdGltb25pYWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkVESVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhdWRpb1VwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuYXVkaW9Db25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICAgIC8vY29uc29sZS53YXJuKGdldENvbmZpZyk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rm9ybSBWYWxpZGF0aW9uL2dlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC9cbiAgICAgICldXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwcmlvcml0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIHRlc3RpbW9uaWFsX2ltZzogWycnLF0sXG4gICAgICB2aWRlb191cmw6IFtudWxsXSxcbiAgICAgIHZpZGVvX25hbWU6IFtdLFxuICAgICAgdmlkZW9fZGVzYzogW10sXG4gICAgICB0ZXN0aW1vbmlhbF9hdWRpbzogW251bGxdLFxuICAgICAgdXNlcklkOiBbdGhpcy5jb25maWdEYXRhLnVzZXJEYXRhLmlkLCBudWxsXVxuICAgIH0pXG5cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIG9uU3VibWl0KCkge1xuICAgIC8vIFRlc3RpbW9uaWFsIEZpbGUgVXBsb2FkIFdvcmtzIFxuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xuXG4gICAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUgPSB0cnVlOyByZXR1cm47IH1cbiAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnRlc3RpbW9uaWFsX2ltZyA9XG4gICAgICB7XG4gICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxuICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIFRlc3RpbW9uaWFsIGF1ZGlvIFVwbG9hZCBXb3JrcyBcbiAgICBpZiAodGhpcy5hdWRpb0NvbmZpZ0RhdGEuZmlsZXMpIHtcblxuICAgICAgaWYgKHRoaXMuYXVkaW9Db25maWdEYXRhLmZpbGVzLmxlbmd0aCA+IDEpIHsgdGhpcy5FcnJDb2RlID0gdHJ1ZTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9hdWRpbyA9XG4gICAgICB7XG4gICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5hdWRpb0NvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmF1ZGlvQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICBcImF1ZGlvXCI6IHRoaXMuYXVkaW9Db25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgIFwibmFtZVwiOiB0aGlzLmF1ZGlvQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxuICAgICAgICBcInR5cGVcIjogdGhpcy5hdWRpb0NvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICB9O1xuICAgICAvLyBjb25zb2xlLndhcm4ocG9zdERhdGEpO1xuICAgICAgdGhpcy50ZXN0aVNlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgLy9jb25zb2xlLndhcm4oXCJkZWZhdWlsdHZhbHVlXCIsZGVmYXVsdFZhbHVlKTtcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5hbWU6IGRlZmF1bHRWYWx1ZS5uYW1lLFxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwcmlvcml0eTogZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgdGVzdGltb25pYWxfaW1nOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLFxuICAgICAgdmlkZW9fdXJsOiBkZWZhdWx0VmFsdWUudmlkZW9fdXJsLFxuICAgICAgdmlkZW9fbmFtZTogZGVmYXVsdFZhbHVlLnZpZGVvX25hbWUsXG4gICAgICB2aWRlb19kZXNjOiBkZWZhdWx0VmFsdWUudmlkZW9fZGVzYyxcbiAgICAgIHRlc3RpbW9uaWFsX2F1ZGlvOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfYXVkaW9cbiAgICB9KTtcbiAgICB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy50eXBlO1xuICAgIGlmIChkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfYXVkaW8gIT0gbnVsbCkge1xuICAgICAgdGhpcy5mbGFnMiA9IHRydWU7XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsQXVkaW8gPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfYXVkaW8uYmFzZXBhdGggKyBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfYXVkaW8uYXVkaW87XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhcIj4+PlwiLHRoaXMuaW1nX3Zhcik7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09cHJldmlldyB2aWRlbz09PT09PT09PT09PT09PT1cbiAgcHJldmlld192aWRlbygpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUHJldmlld0NvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc4NTBweCcsXG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG5cbiAgICAgIGRhdGE6IHsgbXNnOiB0aGlzLnlvdXR1YmVfc3VmZml4ICsgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudmlkZW9fdXJsIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1DbGVhciBNQVQgdGFnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xlYXJfaW1hZ2UoKSB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGVhcl9hdWRpbygpIHtcbiAgICB0aGlzLmZsYWcyID0gZmFsc2U7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbJ3Rlc3RpbW9uaWFsX2F1ZGlvJ10uc2V0VmFsdWUoJycpO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vIHByZXZpZXcgY21wb25lbnRcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdwcmV2aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IHtcbiAgc2FmZVNyYzogU2FmZVJlc291cmNlVXJsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UHJldmlld0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBQcmV2aWV3RGlhbG9nLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgdGhpcy5zYWZlU3JjID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGRhdGEubXNnKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn0iXX0=