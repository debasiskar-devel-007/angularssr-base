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
import { CookieService } from 'ngx-cookie-service';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddeditServiceComponent = /** @class */ (function () {
    // ==============================================================================================
    function AddeditServiceComponent(formBuilder, servicehttp, router, dialog, cookieService) {
        this.formBuilder = formBuilder;
        this.servicehttp = servicehttp;
        this.router = router;
        this.dialog = dialog;
        this.cookieService = cookieService;
        this.editorData = '<p>Write description...</p>';
        /**ckeditor for descripiton start here*/
        // public Editor = ClassicEditor;
        // editorConfig = {
        //   placeholder: 'Write description...',
        // };
        // public model = {
        //   editorData: ''
        // };
        /**
         * ckeditor for additional description *
         */
        this.Editor2 = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig2 = {
            placeholder: 'Please provide additional details...',
        };
        this.model2 = {
            editorData: ''
        };
        this.loader = false;
        this.buttonText = "SUBMIT";
        this.successMessage = "Service Added!!!";
        this.img_arr = [];
        this.ErrCode = false;
        this.ErrCode2 = false;
        this.img_missing = false;
        this.editorconfig = {};
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
    }
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                this.flag2 = false;
                this.header_name = "Add Service";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "Service Edited!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit Service";
                this.flag = true;
                this.flag2 = true;
                if (this.configData.defaultData.additional_img == false)
                    this.flag2 = false;
                break;
        }
        // ===============================================================================================
    };
    Object.defineProperty(AddeditServiceComponent.prototype, "config", {
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
    Object.defineProperty(AddeditServiceComponent.prototype, "imageUpload", {
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
    Object.defineProperty(AddeditServiceComponent.prototype, "imageUpload2", {
        set: /**
         * @param {?} getConfig2
         * @return {?}
         */
        function (getConfig2) {
            this.imageConfigData2 = getConfig2;
        },
        enumerable: true,
        configurable: true
    });
    // =============================================form generation====================================
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.generateForm = 
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    function () {
        this.serviceForm = this.formBuilder.group({
            service_title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            additional_details: ['',],
            priority: ['', [Validators.required]],
            status: [true,],
            bulletarr: this.formBuilder.array([]),
            service_img: ['',],
            additional_img: ['',]
        });
    };
    // =================================================================================================
    // ===============================================Default value======================================
    // =================================================================================================
    // ===============================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddeditServiceComponent.prototype.setDefaultValue = 
    // =================================================================================================
    // ===============================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        var _this = this;
        defaultValue.bulletarr.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.addBulletList(element.bullet_title, element.bullet_desc);
        }));
        this.serviceForm.patchValue({
            service_title: defaultValue.service_title,
            description: defaultValue.description,
            additional_details: defaultValue.additional_details,
            priority: defaultValue.priority,
            status: defaultValue.status,
            service_img: defaultValue.service_img,
            additional_img: defaultValue.additional_img,
        });
        /** Service image **/
        this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
        this.image_name = defaultValue.service_img.name;
        this.image_type = defaultValue.service_img.type;
        /** Additional image **/
        this.img_var2 = defaultValue.additional_img.basepath + defaultValue.additional_img.image;
        this.image_name2 = defaultValue.additional_img.name;
        this.image_type2 = defaultValue.additional_img.type;
    };
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    AddeditServiceComponent.prototype.addBulletList = 
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.push(this.formBuilder.group({
            bullet_title: [a],
            bullet_desc: [b],
        }));
    };
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.deleteBulletList = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.removeAt(1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditServiceComponent.prototype.trackByFn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    // ==================================================================================================
    // ==================================================================================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.openModaltest = 
    // ==================================================================================================
    /**
     * @return {?}
     */
    function () {
        this.openDialog('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');
    };
    // ================================================SUBMIT============================================
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.onSubmit = 
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.serviceForm.controls) {
            this.serviceForm.controls[x].markAsTouched();
        }
        // Service File Upload Works 
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                this.img_missing = false;
                return;
            }
            this.serviceForm.value.service_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
            this.img_missing = false;
        }
        else {
            if (this.serviceForm.value.service_img == null || this.serviceForm.value.service_img == '') {
                this.img_missing = true;
                this.ErrCode = false;
            }
        }
        /** Additional Image  **/
        if (this.imageConfigData2.files) {
            //console.log("length",this.imageConfigData2.files.length); 
            if (this.imageConfigData2.files.length > 1) {
                this.ErrCode2 = true;
                return;
            }
            this.serviceForm.value.additional_img =
                {
                    "basepath": this.imageConfigData2.files[0].upload.data.basepath + '/' + this.imageConfigData2.path + '/',
                    "image": this.imageConfigData2.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData2.files[0].name,
                    "type": this.imageConfigData2.files[0].type
                };
        }
        for (var i in this.serviceForm.controls) {
            this.serviceForm.controls[i].markAsTouched();
        }
        this.loader = true;
        if (this.img_missing == true) {
            return;
        }
        if (this.serviceForm.invalid) {
            return;
        }
        else {
            if (this.serviceForm.value.status) {
                this.serviceForm.value.status = 1;
            }
            else {
                this.serviceForm.value.status = 0;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.serviceForm.value, this.configData.condition),
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzcxNzc4MDIsImlhdCI6MTU3NzA5MTQwMn0.jtwImZIdKK-9WxeQQHef5YLSXvN05CiJeAw-lXCcHtE"
            };
            this.servicehttp.addData(this.configData.endpoint, postData).subscribe((/**
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
                    }), 5000);
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
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditServiceComponent.prototype.openDialog = 
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x },
            panelClass: 'success_modal_service'
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =================================================================================================
    // =================================================================================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.resetserviceForm = 
    // =================================================================================================
    /**
     * @return {?}
     */
    function () {
        this.serviceForm.reset();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditServiceComponent.prototype.inputBlur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.serviceForm.controls[val].markAsUntouched();
    };
    // ================================================================================================
    // ================================================================================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.clear_image = 
    // ================================================================================================
    /**
     * @return {?}
     */
    function () {
        this.flag = false;
        this.img_missing = true;
    };
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.clear_image2 = /**
     * @return {?}
     */
    function () {
        this.flag2 = false;
        this.serviceForm.value.additional_img = false;
    };
    AddeditServiceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit-service',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"!serviceForm.controls['service_title'].valid\n        && serviceForm.controls['service_title'].errors.required\"> Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <mat-label>Write Description...</mat-label>\n        <ck-editor formControlName=\"description\"  [config]=\"editorconfig\">\n        </ck-editor>\n        <!-- <ckeditor [data]=\"editorData\" formControlName=\"description\" (blur)=\"inputBlur('description')\"> -->\n        <!-- </ckeditor> -->\n\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          (blur)=\"inputBlur('description')\"></ckeditor> -->\n\n\n        <mat-error *ngIf=\"!serviceForm.controls['description'].valid\n          && serviceForm.controls['description'].errors.required && serviceForm.controls['description'].touched\">\n          Description is required.\n        </mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------additional details------------------- -->\n\n        <mat-label>Additional Details If Any...</mat-label>\n        <ck-editor formControlName=\"additional_details\" [config]=\"editorconfig\">\n        </ck-editor>\n\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!serviceForm.controls['priority'].valid\n           && serviceForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <h1>Service Image:</h1>\n\n        <div class=\"warning_reso\">\n          <mat-icon>warning</mat-icon>\n          <p>Resolution: 650 x 300</p>\n        </div>\n\n\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one service image.</p>\n        </div>\n        <div *ngIf=\"img_missing==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please provide a service image.</p>\n        </div>\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <!-- ______________________________________________________________________________________________________________ -->\n        <!-- Additional Image  -->\n        <h1>Additional Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData2\"></lib-file-upload>\n        <div *ngIf=\"ErrCode2==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one additional image.</p>\n        </div><br>\n\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var2\">\n            <mat-card-title>{{ image_name2 }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type2 }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image2()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"onSubmit()\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n  <button mat-button type=\"button\" class=\"demo_modal_button\" (click)=\"openModaltest()\">Demo Modal</button>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}.warning_reso{color:#d8000c;border:2px solid #d8000c;background-color:#edf104;padding:0 10px;display:inline-flex;align-items:center}.warning_reso .mat-icon{margin-right:10px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditServiceComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ServicelibService },
        { type: Router },
        { type: MatDialog },
        { type: CookieService }
    ]; };
    AddeditServiceComponent.propDecorators = {
        config: [{ type: Input }],
        imageUpload: [{ type: Input }],
        imageUpload2: [{ type: Input }]
    };
    return AddeditServiceComponent;
}());
export { AddeditServiceComponent };
if (false) {
    /** @type {?} */
    AddeditServiceComponent.prototype.editorData;
    /**
     * ckeditor for additional description *
     * @type {?}
     */
    AddeditServiceComponent.prototype.Editor2;
    /** @type {?} */
    AddeditServiceComponent.prototype.editorConfig2;
    /** @type {?} */
    AddeditServiceComponent.prototype.model2;
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
    /** @type {?} */
    AddeditServiceComponent.prototype.getConfig2;
    /** @type {?} */
    AddeditServiceComponent.prototype.imageConfigData2;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_var2;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_name2;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_type2;
    /** @type {?} */
    AddeditServiceComponent.prototype.flag2;
    /** @type {?} */
    AddeditServiceComponent.prototype.ErrCode2;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_missing;
    /** @type {?} */
    AddeditServiceComponent.prototype.editorconfig;
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
    /** @type {?} */
    AddeditServiceComponent.prototype.cookieService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2UtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGRlZGl0LXNlcnZpY2UvYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBcUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFDbkQsZ0NBRUM7OztJQURDLHlCQUFZOztBQUlkO0lBMERFLGlHQUFpRztJQUlqRyxpQ0FBb0IsV0FBd0IsRUFBVSxXQUE4QixFQUMxRSxNQUFjLEVBQVMsTUFBaUIsRUFBVSxhQUE2QjtRQURyRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUMxRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQXREbEYsZUFBVSxHQUFHLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7UUFhM0MsWUFBTyxHQUFHLGFBQWEsQ0FBQyxDQUFFLGNBQWM7O1FBQy9DLGtCQUFhLEdBQUc7WUFDZCxXQUFXLEVBQUUsc0NBQXNDO1NB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LEtBQUs7O0lBNk1SLDhCQUFDO0NBQUEsQUE1VEQsSUE0VEM7U0F2VFksdUJBQXVCOzs7SUFJbEMsNkNBQWtEOzs7OztJQWFsRCwwQ0FBK0I7O0lBQy9CLGdEQUVFOztJQUNGLHlDQUVFOzs7OztJQU1GLDhDQUF1Qjs7SUFDdkIseUNBQXdCOztJQUN4Qiw2Q0FBZ0I7O0lBQ2hCLGtEQUFxQjs7SUFDckIsNkNBQXNCOztJQUN0QixpREFBNEM7O0lBQzVDLDRDQUFlOztJQUNmLDBDQUFrQjs7SUFDbEIsMENBQXlCOztJQUN6Qix1Q0FBYzs7SUFDZCwwQ0FBYTs7SUFDYiw4Q0FBaUI7O0lBQ2pCLDZDQUFnQjs7SUFDaEIsNkNBQWdCOztJQUNoQiw2Q0FBZ0I7O0lBQ2hCLG1EQUFzQjs7SUFDdEIsMkNBQWM7O0lBQ2QsOENBQWlCOztJQUNqQiw4Q0FBaUI7O0lBQ2pCLHdDQUFlOztJQUNmLDJDQUF5Qjs7SUFDekIsOENBQTZCOztJQUM3QiwrQ0FBK0I7Ozs7O0lBTW5CLDhDQUFnQzs7Ozs7SUFBRSw4Q0FBc0M7Ozs7O0lBQ2xGLHlDQUFzQjs7SUFBRSx5Q0FBd0I7O0lBQUcsZ0RBQW9DOzs7QUF5UTNGO0lBTUUsZUFDUyxTQUE4QixFQUNMLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQ0wsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQseUJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZHQUF5QjtpQkFDMUI7Ozs7Z0JBbFZtQixZQUFZO2dEQXVWM0IsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLFlBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxLQUFLOzs7SUFHZCwwQkFBcUM7O0lBQ3JDLHFCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2VydmljZWxpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkZWRpdC1zZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQtc2VydmljZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtc2VydmljZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRpdFNlcnZpY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICBwdWJsaWMgZWRpdG9yRGF0YSA9ICc8cD5Xcml0ZSBkZXNjcmlwdGlvbi4uLjwvcD4nO1xuXG4gIC8qKmNrZWRpdG9yIGZvciBkZXNjcmlwaXRvbiBzdGFydCBoZXJlKi9cbiAgLy8gcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7XG4gIC8vIGVkaXRvckNvbmZpZyA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1dyaXRlIGRlc2NyaXB0aW9uLi4uJyxcbiAgLy8gfTtcbiAgLy8gcHVibGljIG1vZGVsID0ge1xuICAvLyAgIGVkaXRvckRhdGE6ICcnXG4gIC8vIH07XG5cblxuIC8qKiBja2VkaXRvciBmb3IgYWRkaXRpb25hbCBkZXNjcmlwdGlvbiAqKi9cbiAgcHVibGljIEVkaXRvcjIgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgZWRpdG9yQ29uZmlnMiA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBwcm92aWRlIGFkZGl0aW9uYWwgZGV0YWlscy4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbDIgPSB7XG4gICAgZWRpdG9yRGF0YTogJydcbiAgfTtcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gc2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNlcnZpY2VGb3JtOiBGb3JtR3JvdXA7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25maWdEYXRhOiBhbnk7XG4gIGltYWdlQ29uZmlnRGF0YTogYW55O1xuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU2VydmljZSBBZGRlZCEhIVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgaW1nX2FycjogYW55ID0gW107XG4gIEVyckNvZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmxhZzogYm9vbGVhbjtcbiAgaW1nX3ZhcjogYW55O1xuICBoZWFkZXJfbmFtZTogYW55O1xuICBpbWFnZV9uYW1lOiBhbnk7XG4gIGltYWdlX3R5cGU6IGFueTtcbiAgZ2V0Q29uZmlnMjogYW55O1xuICBpbWFnZUNvbmZpZ0RhdGEyOiBhbnk7XG4gIGltZ192YXIyOiBhbnk7XG4gIGltYWdlX25hbWUyOiBhbnk7XG4gIGltYWdlX3R5cGUyOiBhbnk7XG4gIGZsYWcyOiBib29sZWFuO1xuICBFcnJDb2RlMjpib29sZWFuID0gZmFsc2U7XG4gIGltZ19taXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBlZGl0b3Jjb25maWcgOiBhbnkgPSB7fTtcbiAgXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZWh0dHA6IFNlcnZpY2VsaWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyAsIHB1YmxpYyBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSkgeyBcbiAgICAgIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gIT0gJ2VkaXQnKVxuICAgICAgdGhpcy5hZGRCdWxsZXRMaXN0KCcnLCAnJyk7XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1dJVENIIENBU0VTPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgU2VydmljZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJTZXJ2aWNlIEVkaXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IFNlcnZpY2VcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuYWRkaXRpb25hbF9pbWcgPT0gZmFsc2UpXG4gICAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZDIoZ2V0Q29uZmlnMjogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEyID0gZ2V0Q29uZmlnMjtcbiAgfVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBhZGRpdGlvbmFsX2RldGFpbHM6WycnLF0sXG4gICAgICBwcmlvcml0eTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgYnVsbGV0YXJyOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcbiAgICAgIHNlcnZpY2VfaW1nOiBbJycsXSxcbiAgICAgIGFkZGl0aW9uYWxfaW1nOiBbJycsXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcblxuICAgIGRlZmF1bHRWYWx1ZS5idWxsZXRhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdChlbGVtZW50LmJ1bGxldF90aXRsZSwgZWxlbWVudC5idWxsZXRfZGVzYyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgc2VydmljZV90aXRsZTogZGVmYXVsdFZhbHVlLnNlcnZpY2VfdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgYWRkaXRpb25hbF9kZXRhaWxzOiBkZWZhdWx0VmFsdWUuYWRkaXRpb25hbF9kZXRhaWxzLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHNlcnZpY2VfaW1nOiBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcsXG4gICAgICBhZGRpdGlvbmFsX2ltZzogZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLFxuICAgIH0pO1xuICAgIC8qKiBTZXJ2aWNlIGltYWdlICoqL1xuICAgIHRoaXMuaW1nX3ZhciA9IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcubmFtZTtcbiAgICB0aGlzLmltYWdlX3R5cGUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcudHlwZVxuXG4gICAgLyoqIEFkZGl0aW9uYWwgaW1hZ2UgKiovXG4gICAgdGhpcy5pbWdfdmFyMiA9IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUyID0gZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlMiA9IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy50eXBlXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rk9STSBBUlJBWSBGVU5DVElPTlM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBhZGRCdWxsZXRMaXN0KGE6IGFueSwgYjogYW55KSB7XG4gICAgY29uc3QgYmwgPSB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzLmJ1bGxldGFyciBhcyBGb3JtQXJyYXk7XG4gICAgYmwucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGJ1bGxldF90aXRsZTogW2FdLFxuICAgICAgYnVsbGV0X2Rlc2M6IFtiXSxcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGVCdWxsZXRMaXN0KCkge1xuICAgIGNvbnN0IGJsID0gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scy5idWxsZXRhcnIgYXMgRm9ybUFycmF5O1xuICAgIGJsLnJlbW92ZUF0KDEpO1xuICB9XG5cbiAgXG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5Nb2RhbHRlc3QoKXtcbiAgICB0aGlzLm9wZW5EaWFsb2coJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeScpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1VCTUlUPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb25TdWJtaXQoKSB7XG4gICBcbiAgICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICAgIGZvciAobGV0IHggaW4gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scykge1xuICAgICAgICB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cblxuIFxuICAgIC8vIFNlcnZpY2UgRmlsZSBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7dGhpcy5pbWdfbWlzc2luZyA9IGZhbHNlOyByZXR1cm47IH1cblxuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9XG4gICAgICAgIHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWdfbWlzc2luZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmKCB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnNlcnZpY2VfaW1nID09IG51bGwgfHwgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc2VydmljZV9pbWcgPT0gJycpXG4gICAgICB7XG4gICAgICB0aGlzLmltZ19taXNzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuRXJyQ29kZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBBZGRpdGlvbmFsIEltYWdlICAqKi9cbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibGVuZ3RoXCIsdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzLmxlbmd0aCk7IFxuICAgICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZTIgPSB0cnVlOyByZXR1cm47IH1cbiAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuYWRkaXRpb25hbF9pbWcgPVxuICAgICAgICB7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YTIucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1tpXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgICBpZih0aGlzLmltZ19taXNzaW5nPT10cnVlKXtyZXR1cm47fVxuICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0wO1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZXJ2aWNlRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIHRva2VuOiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUptYjI4aU9pSmlZWElpTENKbGVIQWlPakUxTnpjeE56YzRNRElzSW1saGRDSTZNVFUzTnpBNU1UUXdNbjAuanR3SW1aSWRLSy05V3hlUVFIZWY1WUxTWHZOMDVDaUplQXctbFhDY0h0RVwiXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXJ2aWNlaHR0cC5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfSxcbiAgICAgIHBhbmVsQ2xhc3M6J3N1Y2Nlc3NfbW9kYWxfc2VydmljZSdcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgcmVzZXRzZXJ2aWNlRm9ybSgpIHtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLnJlc2V0KCk7XG4gIH1cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xlYXJfaW1hZ2UoKSB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgdGhpcy5pbWdfbWlzc2luZyA9IHRydWU7XG4gIH1cblxuICBjbGVhcl9pbWFnZTIoKSB7XG4gICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuYWRkaXRpb25hbF9pbWcgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19