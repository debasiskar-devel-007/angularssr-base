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
export class AddeditComponent {
    // ==================================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} testiService
     * @param {?} router
     * @param {?} dialog
     * @param {?} sanitizer
     */
    constructor(formBuilder, testiService, router, dialog, sanitizer) {
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
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set audioUpload(getConfig) {
        this.audioConfigData = getConfig;
        //console.warn(getConfig);
    }
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    generateForm() {
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
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            // console.warn(postData);
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
    //  =====================preview video================
    /**
     * @return {?}
     */
    preview_video() {
        this.dialogRef = this.dialog.open(PreviewComponent, {
            width: '850px',
            height: '500px',
            data: { msg: this.youtube_suffix + this.testimonialForm.value.video_url }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // ===================================================
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
    // ========================================================================================
    /**
     * @return {?}
     */
    clear_audio() {
        this.flag2 = false;
        this.testimonialForm.controls['testimonial_audio'].setValue('');
    }
}
AddeditComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['name'].valid\n          && testimonialForm.controls['name'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['email'].valid\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n \n\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n          <mat-label>Please write a testimonial...</mat-label>\n          <ck-editor formControlName=\"description\" [config]=\"editorconfig\" (blur)=\"inputBlur('description')\">\n          </ck-editor>\n         <mat-error *ngIf=\"!testimonialForm.controls['description'].valid\n          && testimonialForm.controls['description'].errors.required && testimonialForm.controls['description'].touched  \" >Description is required.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['priority'].valid\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one testimonial image.</p>\n        </div>\n        <!-- -------------------------------------------------------------------------------- -->\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n\n        <!-- --------------------------------------Video Attachment--------------------- -->\n        <h1>Attach a testimonial video:</h1>\n\n\n        <!-- video url  -->\n        <mat-form-field class=\"video_url\">\n          <input matInput formControlName=\"video_url\">\n          <span matPrefix> {{ youtube_suffix }} </span>\n          <mat-icon matSuffix *ngIf=\"testimonialForm.controls['video_url'].value!=null && testimonialForm.controls['video_url'].value!=''\"  class=\"clickable\" (click)=\"preview_video()\" type=\"button\">remove_red_eye</mat-icon>\n        </mat-form-field>\n\n        <!-- video name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Title\" formControlName=\"video_name\">\n        </mat-form-field>\n\n        <!-- Video description  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Description\" formControlName=\"video_desc\">\n        </mat-form-field>\n\n        <br>\n        <!-- ------------------------------------------------------------------- -->\n\n                <!-- --------------------------------------Audio Attachment--------------------- -->\n                <h1>Attach a testimonial Audio:</h1>\n\n                <span>\n                  <lib-file-upload  [config]=\"audioConfigData\"></lib-file-upload>\n                </span>\n                <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n                  <mat-card class=\"example-card\">\n                    <audio controls>\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/ogg\">\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                    </audio>\n                    <span class=\"closecard\" (click)=\"clear_audio()\"><i class=\"material-icons\">clear</i></span>\n                  </mat-card>\n                </mat-card-content>\n                <br>\n                <!-- ------------------------------------------------------------------- -->\n        \n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.clickable{cursor:pointer;position:relative;z-index:999}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}"]
            }] }
];
/** @nocollapse */
AddeditComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: TestimonialService },
    { type: Router },
    { type: MatDialog },
    { type: DomSanitizer }
];
AddeditComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }],
    audioUpload: [{ type: Input }]
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
// ======================================================================================================
// preview cmponent
export class PreviewComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} sanitizer
     */
    constructor(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.msg);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
PreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>PREVIEW VIDEO</h1>\n<div mat-dialog-content>\n    <p>{{ data.msg }}</p>\n    <!-- <p>{{ safeSrc }}</p> -->\n    <p>\n        <iframe [src]=\"safeSrc\" width=\"560\" height=\"315\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe>\n        <!-- <iframe width=\"420\" height=\"315\" [src]=\"safeSrc\" > -->\n        <!-- </iframe> -->\n    </p>\n</div>"
            }] }
];
/** @nocollapse */
PreviewComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9hZGRlZGl0L2FkZGVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUkxRSxnQ0FFQzs7O0lBREMseUJBQVk7Ozs7O0FBRWQsbUNBRUM7OztJQURDLDRCQUFTOztBQVFYLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQXFDM0IsWUFBb0IsV0FBd0IsRUFBVSxZQUFnQyxFQUM1RSxNQUFjLEVBQVMsTUFBaUIsRUFBVSxTQUF1QjtRQUQvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUM1RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7Ozs7UUFsQzVFLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0ssVUFB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QjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNkdBQXlCO2FBQzFCOzs7O1lBL1JtQixZQUFZOzRDQW9TM0IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsMEJBQXFDOztJQUNyQyxxQkFBZ0Q7Ozs7QUFpQnBELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUUzQixZQUNTLFNBQXlDLEVBQ2hCLElBQW1CLEVBQVUsU0FBdUI7UUFEN0UsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDcEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwrYUFBMkI7YUFDNUI7Ozs7WUFwVG1CLFlBQVk7NENBeVQzQixNQUFNLFNBQUMsZUFBZTtZQXhUbEIsWUFBWTs7OztJQXFUbkIsbUNBQXlCOztJQUV2QixxQ0FBZ0Q7O0lBQ2hELGdDQUFtRDs7Ozs7SUFBRSxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IFRlc3RpbW9uaWFsU2VydmljZSB9IGZyb20gJy4uLy4uL3Rlc3RpbW9uaWFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJldmlld0RpYWxvZyB7XG4gIG1zZzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSB0ZXN0aW1vbmlhbC4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlY2xhcmF0aW9uIFNlY3Rpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gIHB1YmxpYyB0ZXN0aW1vbmlhbEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY29uZmlnRGF0YTtcbiAgcHVibGljIHRlc3RpbW9uaWFsQXVkaW86IGFueTtcbiAgcHVibGljIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHlcIjtcbiAgcHVibGljIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyBFcnJDb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmbGFnOiBib29sZWFuO1xuICBwdWJsaWMgZmxhZzI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGltZ192YXI6IGFueTtcbiAgcHVibGljIGhlYWRlcl9uYW1lOiBhbnk7XG4gIHB1YmxpYyBpbWFnZV9uYW1lOiBhbnk7XG4gIHB1YmxpYyBpbWFnZV90eXBlOiBhbnk7XG4gIHB1YmxpYyB5b3V0dWJlX3N1ZmZpeDogYW55ID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIjtcbiAgcHVibGljIGVkaXRvcmNvbmZpZzogYW55ID0ge307XG4gIHB1YmxpYyBhdWRpb0NvbmZpZ0RhdGE6IGFueTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdGVzdGlTZXJ2aWNlOiBUZXN0aW1vbmlhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgdGhpcy5lZGl0b3Jjb25maWcuZXh0cmFBbGxvd2VkQ29udGVudCA9ICcqW2NsYXNzXSgqKSxzcGFuO3VsO2xpO3RhYmxlO3RkO3N0eWxlOypbaWRdOyooKik7KnsqfSc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGVja2luZyB0aGUgY2FzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIFRlc3RpbW9uaWFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZFwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFRElUXCI7XG4gICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXVkaW9VcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmF1ZGlvQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgICAvL2NvbnNvbGUud2FybihnZXRDb25maWcpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvcm0gVmFsaWRhdGlvbi9nZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvXG4gICAgICApXV0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICB0ZXN0aW1vbmlhbF9pbWc6IFsnJyxdLFxuICAgICAgdmlkZW9fdXJsOiBbbnVsbF0sXG4gICAgICB2aWRlb19uYW1lOiBbXSxcbiAgICAgIHZpZGVvX2Rlc2M6IFtdLFxuICAgICAgdGVzdGltb25pYWxfYXVkaW86IFtudWxsXSxcbiAgICAgIHVzZXJJZDogW3RoaXMuY29uZmlnRGF0YS51c2VyRGF0YS5pZCwgbnVsbF1cbiAgICB9KVxuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICAvLyBUZXN0aW1vbmlhbCBGaWxlIFVwbG9hZCBXb3JrcyBcbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcblxuICAgICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzLmxlbmd0aCA+IDEpIHsgdGhpcy5FcnJDb2RlID0gdHJ1ZTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPVxuICAgICAge1xuICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBUZXN0aW1vbmlhbCBhdWRpbyBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuYXVkaW9Db25maWdEYXRhLmZpbGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmF1ZGlvQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfYXVkaW8gPVxuICAgICAge1xuICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuYXVkaW9Db25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5hdWRpb0NvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgXCJhdWRpb1wiOiB0aGlzLmF1ZGlvQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICBcIm5hbWVcIjogdGhpcy5hdWRpb0NvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgXCJ0eXBlXCI6IHRoaXMuYXVkaW9Db25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMudGVzdGltb25pYWxGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxuICAgICAgfTtcbiAgICAgLy8gY29uc29sZS53YXJuKHBvc3REYXRhKTtcbiAgICAgIHRoaXMudGVzdGlTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIC8vY29uc29sZS53YXJuKFwiZGVmYXVpbHR2YWx1ZVwiLGRlZmF1bHRWYWx1ZSk7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWwsXG4gICAgICBkZXNjcmlwdGlvbjogZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHVzZXJJZDogbnVsbCxcbiAgICAgIHRlc3RpbW9uaWFsX2ltZzogZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZyxcbiAgICAgIHZpZGVvX3VybDogZGVmYXVsdFZhbHVlLnZpZGVvX3VybCxcbiAgICAgIHZpZGVvX25hbWU6IGRlZmF1bHRWYWx1ZS52aWRlb19uYW1lLFxuICAgICAgdmlkZW9fZGVzYzogZGVmYXVsdFZhbHVlLnZpZGVvX2Rlc2MsXG4gICAgICB0ZXN0aW1vbmlhbF9hdWRpbzogZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2F1ZGlvXG4gICAgfSk7XG4gICAgdGhpcy5pbWdfdmFyID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZV9uYW1lID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5uYW1lO1xuICAgIHRoaXMuaW1hZ2VfdHlwZSA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcudHlwZTtcbiAgICBpZiAoZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2F1ZGlvICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmxhZzIgPSB0cnVlO1xuICAgICAgdGhpcy50ZXN0aW1vbmlhbEF1ZGlvID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2F1ZGlvLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2F1ZGlvLmF1ZGlvO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coXCI+Pj5cIix0aGlzLmltZ192YXIpO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgLy8gID09PT09PT09PT09PT09PT09PT09PXByZXZpZXcgdmlkZW89PT09PT09PT09PT09PT09XG4gIHByZXZpZXdfdmlkZW8oKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFByZXZpZXdDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnODUwcHgnLFxuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuXG4gICAgICBkYXRhOiB7IG1zZzogdGhpcy55b3V0dWJlX3N1ZmZpeCArIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnZpZGVvX3VybCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Q2xlYXIgTUFUIHRhZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsZWFyX2ltYWdlKCkge1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xlYXJfYXVkaW8oKSB7XG4gICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtLmNvbnRyb2xzWyd0ZXN0aW1vbmlhbF9hdWRpbyddLnNldFZhbHVlKCcnKTtcbiAgfVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWw+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4vLyBwcmV2aWV3IGNtcG9uZW50XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAncHJldmlldy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCB7XG4gIHNhZmVTcmM6IFNhZmVSZXNvdXJjZVVybDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFByZXZpZXdDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogUHJldmlld0RpYWxvZywgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIHRoaXMuc2FmZVNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChkYXRhLm1zZyk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59Il19