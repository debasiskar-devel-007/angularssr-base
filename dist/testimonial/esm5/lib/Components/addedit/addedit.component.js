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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9hZGRlZGl0L2FkZGVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFBO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFtQixNQUFNLDJCQUEyQixDQUFDOzs7O0FBRzFFLGdDQUVDOzs7SUFEQyx5QkFBWTs7Ozs7QUFFZCxtQ0FFQzs7O0lBREMsNEJBQVE7O0FBR1Y7SUFrQ0UscUdBQXFHO0lBR3JHLDBCQUFvQixXQUF3QixFQUFVLFlBQWdDLEVBQzVFLE1BQWMsRUFBUyxNQUFpQixFQUFXLFNBQXVCO1FBRGhFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVcsY0FBUyxHQUFULFNBQVMsQ0FBYzs7OztRQTdCN0UsV0FBTSxHQUFHLGFBQWEsQ0FBQyxDQUFFLGNBQWM7O1FBQzlDLGlCQUFZLEdBQUc7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDYixV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RCxnQ0FBbUQ7Ozs7O0lBQUcscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBUZXN0aW1vbmlhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi90ZXN0aW1vbmlhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFByZXZpZXdEaWFsb2d7XG4gIG1zZzphbnk7IFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSB0ZXN0aW1vbmlhbC4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlY2xhcmF0aW9uIFNlY3Rpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjsgXG4gIHRlc3RpbW9uaWFsRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbmZpZ0RhdGE7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSBcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHlcIjtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIGltYWdlQ29uZmlnRGF0YTphbnk7XG4gIEVyckNvZGU6Ym9vbGVhbiA9IGZhbHNlO1xuICBmbGFnOiBib29sZWFuO1xuICBpbWdfdmFyOiBhbnk7XG4gIGhlYWRlcl9uYW1lOiBhbnk7XG4gIGltYWdlX25hbWU6IGFueTtcbiAgaW1hZ2VfdHlwZTogYW55O1xuICB5b3V0dWJlX3N1ZmZpeDphbnk9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdGVzdGlTZXJ2aWNlOiBUZXN0aW1vbmlhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nICwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hlY2tpbmcgdGhlIGNhc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBUZXN0aW1vbmlhbFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJPbmUgcm93IHVwZGF0ZWRcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRURJVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvcm0gVmFsaWRhdGlvbi9nZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC9cbiAgICAgICldXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwcmlvcml0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIHRlc3RpbW9uaWFsX2ltZyA6IFsnJyxdLFxuICAgICAgdmlkZW9fdXJsOltdLFxuICAgICAgdmlkZW9fbmFtZTpbXSxcbiAgICAgIHZpZGVvX2Rlc2M6W10sXG4gICAgICB1c2VySWQ6IFt0aGlzLmNvbmZpZ0RhdGEudXNlckRhdGEuaWQsIG51bGxdXG4gICAgfSlcbiAgICBcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIG9uU3VibWl0KCkge1xuICAgIC8vIFRlc3RpbW9uaWFsIEZpbGUgVXBsb2FkIFdvcmtzIFxuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xuICAgICAgICAgICAgXG4gICAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUgPSB0cnVlOyByZXR1cm47IH1cbiAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnRlc3RpbW9uaWFsX2ltZyA9XG4gICAgICAgIHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfaW1nID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMudGVzdGltb25pYWxGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICB9O1xuICAgICAgdGhpcy50ZXN0aVNlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuYW1lOiBkZWZhdWx0VmFsdWUubmFtZSxcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWwsXG4gICAgICBkZXNjcmlwdGlvbjogZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHVzZXJJZDogbnVsbCxcbiAgICAgIHRlc3RpbW9uaWFsX2ltZzogZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZyxcbiAgICAgIHZpZGVvX3VybDpkZWZhdWx0VmFsdWUudmlkZW9fdXJsLFxuICAgICAgdmlkZW9fbmFtZTpkZWZhdWx0VmFsdWUudmlkZW9fbmFtZSxcbiAgICAgIHZpZGVvX2Rlc2M6ZGVmYXVsdFZhbHVlLnZpZGVvX2Rlc2NcbiAgICB9KTtcbiAgICB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy50eXBlXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuLy8gID09PT09PT09PT09PT09PT09PT09PXByZXZpZXcgdmlkZW89PT09PT09PT09PT09PT09XG4gIHByZXZpZXdfdmlkZW8oKVxuICB7XG4gICAgIGNvbnNvbGUubG9nKFwiKioqKioqKipcIix0aGlzLnlvdXR1YmVfc3VmZml4ICt0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS52aWRlb191cmwpO1xuICAgIC8vICB0aGlzLnNhZmVTcmMgPSAgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHRoaXMueW91dHViZV9zdWZmaXgrdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudmlkZW9fdXJsKTtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUHJldmlld0NvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc4NTBweCcsXG4gICAgICBoZWlnaHQ6JzUwMHB4JyxcbiAgICAgIFxuICAgICAgZGF0YTogeyBtc2c6IHRoaXMueW91dHViZV9zdWZmaXggK3RoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnZpZGVvX3VybCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1DbGVhciBNQVQgdGFnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xlYXJfaW1hZ2UoKSB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWw+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4vLyBwcmV2aWV3IGNtcG9uZW50XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAncHJldmlldy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCB7XG4gIHNhZmVTcmM6IFNhZmVSZXNvdXJjZVVybDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFByZXZpZXdDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogUHJldmlld0RpYWxvZyAsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKTsgICAgICBcbiAgICAgIHRoaXMuc2FmZVNyYyA9ICB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoZGF0YS5tc2cpO1xuICAgIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICAgIFxufSJdfQ==