/**
 * @fileoverview added by tsickle
 * Generated from: lib/Component/addedit-service/addedit-service.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
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
            additional_details: [''],
            priority: ['', [Validators.required]],
            status: [true,],
            bulletarr: this.formBuilder.array([]),
            service_img: [''],
            additional_img: ['']
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
                token: this.configData.jwtToken
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
                    }), 3000);
                    _this.router.navigateByUrl(_this.configData.callBack);
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"!serviceForm.controls['service_title'].valid\n        && serviceForm.controls['service_title'].errors.required\"> Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <mat-label>Description :</mat-label>\n        <ck-editor formControlName=\"description\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        <!-- <ckeditor [data]=\"editorData\" formControlName=\"description\" (blur)=\"inputBlur('description')\"> -->\n        <!-- </ckeditor> -->\n\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          (blur)=\"inputBlur('description')\"></ckeditor> -->\n\n\n        <mat-error *ngIf=\"!serviceForm.controls['description'].valid\n          && serviceForm.controls['description'].errors.required && serviceForm.controls['description'].touched\">\n          Description is required.\n        </mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------additional details------------------- -->\n\n        <mat-label>Additional Description (If Any) :</mat-label>\n        <ck-editor formControlName=\"additional_details\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!serviceForm.controls['priority'].valid\n           && serviceForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <h1>Image:</h1>\n\n        <!-- <div class=\"warning_reso\">\n          <mat-icon>warning</mat-icon>\n          <p>Resolution: 650 x 300</p>\n        </div> -->\n\n\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one service image.</p>\n        </div>\n        <div *ngIf=\"img_missing==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please provide a service image.</p>\n        </div>\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <!-- ______________________________________________________________________________________________________________ -->\n        <!-- Additional Image  -->\n        <h1>Additional Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData2\"></lib-file-upload>\n        <div *ngIf=\"ErrCode2==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one additional image.</p>\n        </div><br>\n\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var2\">\n            <mat-card-title>{{ image_name2 }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type2 }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image2()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"onSubmit()\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n  <button mat-button type=\"button\" class=\"demo_modal_button\" (click)=\"openModaltest()\">Demo Modal</button>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2UtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGRlZGl0LXNlcnZpY2UvYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBQ25ELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFJZDtJQTBERSxpR0FBaUc7SUFJakcsaUNBQW9CLFdBQXdCLEVBQVUsV0FBOEIsRUFDMUUsTUFBYyxFQUFTLE1BQWlCLEVBQVUsYUFBNkI7UUFEckUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUE1QnpGLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixtQkFBYyxHQUFXLGtCQUFrQixDQUFDO1FBRTVDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVl6QixhQUFRLEdBQVcsS0FBSyxD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QWE7O0lBQ2IsOENBQWlCOztJQUNqQiw2Q0FBZ0I7O0lBQ2hCLDZDQUFnQjs7SUFDaEIsNkNBQWdCOztJQUNoQixtREFBc0I7O0lBQ3RCLDJDQUFjOztJQUNkLDhDQUFpQjs7SUFDakIsOENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiwyQ0FBeUI7O0lBQ3pCLDhDQUE2Qjs7SUFDN0IsK0NBQStCOzs7OztJQU1uQiw4Q0FBZ0M7Ozs7O0lBQUUsOENBQXNDOzs7OztJQUNsRix5Q0FBc0I7O0lBQUUseUNBQXdCOztJQUFHLGdEQUFvQzs7O0FBMFEzRjtJQU1FLGVBQ1MsU0FBOEIsRUFDTCxJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZELHlCQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2R0FBeUI7aUJBQzFCOzs7O2dCQW5WbUIsWUFBWTtnREF3VjNCLE1BQU0sU0FBQyxlQUFlOztJQU0zQixZQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksS0FBSzs7O0lBR2QsMEJBQXFDOztJQUNyQyxxQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlcnZpY2VsaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtc2VydmljZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cbiAgLy8gcHVibGljIGVkaXRvckRhdGEgPSAnPHA+V3JpdGUgZGVzY3JpcHRpb24uLi48L3A+JztcblxuICAvKipja2VkaXRvciBmb3IgZGVzY3JpcGl0b24gc3RhcnQgaGVyZSovXG4gIC8vIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yO1xuICAvLyBlZGl0b3JDb25maWcgPSB7XG4gIC8vICAgcGxhY2Vob2xkZXI6ICdXcml0ZSBkZXNjcmlwdGlvbi4uLicsXG4gIC8vIH07XG4gIC8vIHB1YmxpYyBtb2RlbCA9IHtcbiAgLy8gICBlZGl0b3JEYXRhOiAnJ1xuICAvLyB9O1xuXG5cbiAvKiogY2tlZGl0b3IgZm9yIGFkZGl0aW9uYWwgZGVzY3JpcHRpb24gKiovXG4gIC8vIHB1YmxpYyBFZGl0b3IyID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIC8vIGVkaXRvckNvbmZpZzIgPSB7XG4gIC8vICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgcHJvdmlkZSBhZGRpdGlvbmFsIGRldGFpbHMuLi4nLFxuICAvLyB9O1xuICAvLyBwdWJsaWMgbW9kZWwyID0ge1xuICAvLyAgIGVkaXRvckRhdGE6ICcnXG4gIC8vIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlY2xhcmF0aW9uIHNlY3Rpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXJ2aWNlRm9ybTogRm9ybUdyb3VwO1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uZmlnRGF0YTogYW55O1xuICBpbWFnZUNvbmZpZ0RhdGE6IGFueTtcbiAgYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSBcIlNlcnZpY2UgQWRkZWQhISFcIjtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIGltZ19hcnI6IGFueSA9IFtdO1xuICBFcnJDb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIGZsYWc6IGJvb2xlYW47XG4gIGltZ192YXI6IGFueTtcbiAgaGVhZGVyX25hbWU6IGFueTtcbiAgaW1hZ2VfbmFtZTogYW55O1xuICBpbWFnZV90eXBlOiBhbnk7XG4gIGdldENvbmZpZzI6IGFueTtcbiAgaW1hZ2VDb25maWdEYXRhMjogYW55O1xuICBpbWdfdmFyMjogYW55O1xuICBpbWFnZV9uYW1lMjogYW55O1xuICBpbWFnZV90eXBlMjogYW55O1xuICBmbGFnMjogYm9vbGVhbjtcbiAgRXJyQ29kZTI6Ym9vbGVhbiA9IGZhbHNlO1xuICBpbWdfbWlzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZWRpdG9yY29uZmlnIDogYW55ID0ge307XG4gIFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2VodHRwOiBTZXJ2aWNlbGliU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cgLCBwdWJsaWMgY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UpIHsgXG4gICAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uICE9ICdlZGl0JylcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdCgnJywgJycpO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNXSVRDSCBDQVNFUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmxhZzIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIFNlcnZpY2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiU2VydmljZSBFZGl0ZWQhISFcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRWRpdCBTZXJ2aWNlXCI7XG4gICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZzIgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmFkZGl0aW9uYWxfaW1nID09IGZhbHNlKVxuICAgICAgICAgIHRoaXMuZmxhZzIgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgICBcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQyKGdldENvbmZpZzI6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhMiA9IGdldENvbmZpZzI7XG4gIH1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Zm9ybSBnZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLnNlcnZpY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZXJ2aWNlX3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYWRkaXRpb25hbF9kZXRhaWxzOlsnJ10sXG4gICAgICBwcmlvcml0eTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgYnVsbGV0YXJyOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcbiAgICAgIHNlcnZpY2VfaW1nOiBbJyddLFxuICAgICAgYWRkaXRpb25hbF9pbWc6IFsnJ11cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG5cbiAgICBkZWZhdWx0VmFsdWUuYnVsbGV0YXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLmFkZEJ1bGxldExpc3QoZWxlbWVudC5idWxsZXRfdGl0bGUsIGVsZW1lbnQuYnVsbGV0X2Rlc2MpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX3RpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlZmF1bHRWYWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgIGFkZGl0aW9uYWxfZGV0YWlsczogZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfZGV0YWlscyxcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICBzdGF0dXM6IGRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICBzZXJ2aWNlX2ltZzogZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLFxuICAgICAgYWRkaXRpb25hbF9pbWc6IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZyxcbiAgICB9KTtcbiAgICAvKiogU2VydmljZSBpbWFnZSAqKi9cbiAgICB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcuYmFzZXBhdGggKyBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZV9uYW1lID0gZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlID0gZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLnR5cGVcblxuICAgIC8qKiBBZGRpdGlvbmFsIGltYWdlICoqL1xuICAgIHRoaXMuaW1nX3ZhcjIgPSBkZWZhdWx0VmFsdWUuYWRkaXRpb25hbF9pbWcuYmFzZXBhdGggKyBkZWZhdWx0VmFsdWUuYWRkaXRpb25hbF9pbWcuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZV9uYW1lMiA9IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy5uYW1lO1xuICAgIHRoaXMuaW1hZ2VfdHlwZTIgPSBkZWZhdWx0VmFsdWUuYWRkaXRpb25hbF9pbWcudHlwZVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZPUk0gQVJSQVkgRlVOQ1RJT05TPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYWRkQnVsbGV0TGlzdChhOiBhbnksIGI6IGFueSkge1xuICAgIGNvbnN0IGJsID0gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scy5idWxsZXRhcnIgYXMgRm9ybUFycmF5O1xuICAgIGJsLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBidWxsZXRfdGl0bGU6IFthXSxcbiAgICAgIGJ1bGxldF9kZXNjOiBbYl0sXG4gICAgfSkpO1xuICB9XG5cbiAgZGVsZXRlQnVsbGV0TGlzdCgpIHtcbiAgICBjb25zdCBibCA9IHRoaXMuc2VydmljZUZvcm0uY29udHJvbHMuYnVsbGV0YXJyIGFzIEZvcm1BcnJheTtcbiAgICBibC5yZW1vdmVBdCgxKTtcbiAgfVxuXG4gIFxuXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuTW9kYWx0ZXN0KCl7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnknKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuICAgXG4gICAgICAvKiogbWFya2luZyBhcyB1bnRvdWNoZWQgKiovXG4gICAgICBmb3IgKGxldCB4IGluIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHMpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG5cbiBcbiAgICAvLyBTZXJ2aWNlIEZpbGUgVXBsb2FkIFdvcmtzIFxuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xuXG4gICAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUgPSB0cnVlO3RoaXMuaW1nX21pc3NpbmcgPSBmYWxzZTsgcmV0dXJuOyB9XG5cbiAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc2VydmljZV9pbWcgPVxuICAgICAgICB7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS50eXBlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1nX21pc3NpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiggdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9PSBudWxsIHx8ICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnNlcnZpY2VfaW1nID09ICcnKVxuICAgICAge1xuICAgICAgdGhpcy5pbWdfbWlzc2luZyA9IHRydWU7XG4gICAgICB0aGlzLkVyckNvZGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQWRkaXRpb25hbCBJbWFnZSAgKiovXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlcykge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImxlbmd0aFwiLHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlcy5sZW5ndGgpOyBcbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUyID0gdHJ1ZTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLmFkZGl0aW9uYWxfaW1nID1cbiAgICAgICAge1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzWzBdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLnBhdGggKyAnLycsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzWzBdLm5hbWUsXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlc1swXS50eXBlXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHNbaV0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcbiAgICAgaWYodGhpcy5pbWdfbWlzc2luZz09dHJ1ZSl7cmV0dXJuO31cbiAgICBpZiAodGhpcy5zZXJ2aWNlRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnN0YXR1cyA9MDtcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc2VydmljZUZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICB0b2tlbjogdGhpcy5jb25maWdEYXRhLmp3dFRva2VuXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXJ2aWNlaHR0cC5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY29uZmlnRGF0YS5jYWxsQmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfSxcbiAgICAgIHBhbmVsQ2xhc3M6J3N1Y2Nlc3NfbW9kYWxfc2VydmljZSdcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgcmVzZXRzZXJ2aWNlRm9ybSgpIHtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLnJlc2V0KCk7XG4gIH1cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY2xlYXJfaW1hZ2UoKSB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgdGhpcy5pbWdfbWlzc2luZyA9IHRydWU7XG4gIH1cblxuICBjbGVhcl9pbWFnZTIoKSB7XG4gICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuYWRkaXRpb25hbF9pbWcgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19