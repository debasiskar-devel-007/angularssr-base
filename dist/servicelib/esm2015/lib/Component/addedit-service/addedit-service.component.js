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
export class AddeditServiceComponent {
    // ==============================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} servicehttp
     * @param {?} router
     * @param {?} dialog
     * @param {?} cookieService
     */
    constructor(formBuilder, servicehttp, router, dialog, cookieService) {
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
        this.images_array = [];
        this.images_array_edit = [];
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
     * @param {?} getConfig2
     * @return {?}
     */
    set imageUpload2(getConfig2) {
        this.imageConfigData2 = getConfig2;
    }
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    generateForm() {
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
    }
    // =================================================================================================
    // ===============================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        console.log('>>', defaultValue);
        this.setData = defaultValue;
        defaultValue.bulletarr.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.addBulletList(element.bullet_title, element.bullet_desc);
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
        // this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
        // this.image_name = defaultValue.service_img.name;
        // this.image_type = defaultValue.service_img.type
        /*Image works*/
        for (let i = 0; i < defaultValue.service_img.length; i++) {
            this.img_var = defaultValue.service_img[i].basepath + defaultValue.service_img[i].image;
            this.image_name = defaultValue.service_img[i].name;
            this.image_type = defaultValue.service_img[i].type;
            this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
            this.images_array.push({
                "basepath": defaultValue.service_img[i].basepath,
                "image": defaultValue.service_img[i].image,
                "name": defaultValue.service_img[i].name,
                "type": defaultValue.service_img[i].type
            });
        }
        /** Additional image **/
        this.img_var2 = defaultValue.additional_img.basepath + defaultValue.additional_img.image;
        this.image_name2 = defaultValue.additional_img.name;
        this.image_type2 = defaultValue.additional_img.type;
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
    /**
     * @return {?}
     */
    openModaltest() {
        this.openDialog('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');
    }
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    onSubmit() {
        /** marking as untouched **/
        for (let x in this.serviceForm.controls) {
            this.serviceForm.controls[x].markAsTouched();
        }
        // Service File Upload Works 
        // if (this.imageConfigData.files) {
        //   if (this.imageConfigData.files.length > 1) { this.ErrCode = true;this.img_missing = false; return; }
        //   this.serviceForm.value.service_img =
        //     {
        //       "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
        //       "image": this.imageConfigData.files[0].upload.data.data.fileservername,
        //       "name": this.imageConfigData.files[0].name,
        //       "type": this.imageConfigData.files[0].type
        //     };
        //     this.img_missing = false;
        // } else {
        //   if( this.serviceForm.value.service_img == null ||  this.serviceForm.value.service_img == '')
        //   {
        //   this.img_missing = true;
        //   this.ErrCode = false;
        //   }
        // }
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            // console.log("image path",this.imageConfigData);
            for (const loop in this.imageConfigData.files) {
                this.images_array =
                    this.images_array.concat({
                        "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[loop].name,
                        "type": this.imageConfigData.files[loop].type
                    });
            }
            this.serviceForm.value.service_img = this.images_array;
        }
        else {
            this.serviceForm.value.service_img = false;
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
        for (let i in this.serviceForm.controls) {
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
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.serviceForm.value, this.configData.condition),
                token: this.configData.jwtToken
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
                    }), 3000);
                    this.router.navigateByUrl(this.configData.callBack);
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
            data: { msg: x },
            panelClass: 'success_modal_service'
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
    // clear_image() {
    //   this.flag = false;
    //   this.img_missing = true;
    // }
    /**
     * @param {?} index
     * @return {?}
     */
    clear_image(index) {
        this.images_array.pop(this.setData.service_img[index]);
        this.images_array_edit.splice(index, 1);
    }
    /**
     * @return {?}
     */
    clear_image2() {
        this.flag2 = false;
        this.serviceForm.value.additional_img = false;
    }
}
AddeditServiceComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-service',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"!serviceForm.controls['service_title'].valid\n        && serviceForm.controls['service_title'].errors.required\"> Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <mat-label>Description :</mat-label>\n        <ck-editor formControlName=\"description\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        <!-- <ckeditor [data]=\"editorData\" formControlName=\"description\" (blur)=\"inputBlur('description')\"> -->\n        <!-- </ckeditor> -->\n\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          (blur)=\"inputBlur('description')\"></ckeditor> -->\n\n\n        <mat-error *ngIf=\"!serviceForm.controls['description'].valid\n          && serviceForm.controls['description'].errors.required && serviceForm.controls['description'].touched\">\n          Description is required.\n        </mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------additional details------------------- -->\n\n        <mat-label>Additional Description (If Any) :</mat-label>\n        <ck-editor formControlName=\"additional_details\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!serviceForm.controls['priority'].valid\n           && serviceForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n\n        <!-- service image  -->\n        <h1>Image:</h1>\n\n        <!-- <div class=\"warning_reso\">\n          <mat-icon>warning</mat-icon>\n          <p>Resolution: 650 x 300</p>\n        </div> -->\n\n\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one service image.</p>\n        </div>\n        <div *ngIf=\"img_missing==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please provide a service image.</p>\n        </div>\n\n\n        <ng-container *ngIf=\"flag==true\">\n          <!-- CARD VIEW  -->\n          <mat-card-content class=\"files-view\" >\n              <mat-card class=\"example-card\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n\n                  <span class=\"viewUrlwrapper\">\n                   <img mat-card-image [src]=\"img.img_var\">\n                  </span>\n                  <span class=\"viewUrlcontent\">\n                   <mat-card-title>{{ img.image_name }}</mat-card-title>\n                   <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                  </span>\n\n                  <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n                  \n\n              </mat-card>\n          </mat-card-content>\n          <!-- ---------  -->\n      </ng-container>\n\n\n\n        <!-- <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content> -->\n\n        <!-- ______________________________________________________________________________________________________________ -->\n        <!-- Additional Image  -->\n        <h1>Additional Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData2\"></lib-file-upload>\n        <div *ngIf=\"ErrCode2==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one additional image.</p>\n        </div><br>\n\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var2\">\n            <mat-card-title>{{ image_name2 }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type2 }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image2()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"onSubmit()\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}.warning_reso{color:#d8000c;border:2px solid #d8000c;background-color:#edf104;padding:0 10px;display:inline-flex;align-items:center}.warning_reso .mat-icon{margin-right:10px}"]
            }] }
];
/** @nocollapse */
AddeditServiceComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ServicelibService },
    { type: Router },
    { type: MatDialog },
    { type: CookieService }
];
AddeditServiceComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }],
    imageUpload2: [{ type: Input }]
};
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
    /** @type {?} */
    AddeditServiceComponent.prototype.images_array;
    /** @type {?} */
    AddeditServiceComponent.prototype.setData;
    /** @type {?} */
    AddeditServiceComponent.prototype.images_array_edit;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2UtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudC9hZGRlZGl0LXNlcnZpY2UvYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBQ25ELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7SUEyRGxDLFlBQW9CLFdBQXdCLEVBQVUsV0FBOEIsRUFDMUUsTUFBYyxFQUFTLE1BQWlCLEVBQVUsYUFBNkI7UUFEckUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUE5QnpGLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixtQkFBYyxHQUFXLGtCQUFrQixDQUFDO1FBRTVDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVl6QixhQUFR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QWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQ0wsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2R0FBeUI7YUFDMUI7Ozs7WUFoWW1CLFlBQVk7NENBcVkzQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QiwwQkFBcUM7O0lBQ3JDLHFCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2VydmljZWxpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkZWRpdC1zZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQtc2VydmljZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtc2VydmljZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRpdFNlcnZpY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICAvLyBwdWJsaWMgZWRpdG9yRGF0YSA9ICc8cD5Xcml0ZSBkZXNjcmlwdGlvbi4uLjwvcD4nO1xuXG4gIC8qKmNrZWRpdG9yIGZvciBkZXNjcmlwaXRvbiBzdGFydCBoZXJlKi9cbiAgLy8gcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7XG4gIC8vIGVkaXRvckNvbmZpZyA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1dyaXRlIGRlc2NyaXB0aW9uLi4uJyxcbiAgLy8gfTtcbiAgLy8gcHVibGljIG1vZGVsID0ge1xuICAvLyAgIGVkaXRvckRhdGE6ICcnXG4gIC8vIH07XG5cblxuIC8qKiBja2VkaXRvciBmb3IgYWRkaXRpb25hbCBkZXNjcmlwdGlvbiAqKi9cbiAgLy8gcHVibGljIEVkaXRvcjIgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgLy8gZWRpdG9yQ29uZmlnMiA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBwcm92aWRlIGFkZGl0aW9uYWwgZGV0YWlscy4uLicsXG4gIC8vIH07XG4gIC8vIHB1YmxpYyBtb2RlbDIgPSB7XG4gIC8vICAgZWRpdG9yRGF0YTogJydcbiAgLy8gfTtcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gc2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNlcnZpY2VGb3JtOiBGb3JtR3JvdXA7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25maWdEYXRhOiBhbnk7XG4gIGltYWdlQ29uZmlnRGF0YTogYW55O1xuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU2VydmljZSBBZGRlZCEhIVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgaW1nX2FycjogYW55ID0gW107XG4gIEVyckNvZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmxhZzogYm9vbGVhbjtcbiAgaW1nX3ZhcjogYW55O1xuICBoZWFkZXJfbmFtZTogYW55O1xuICBpbWFnZV9uYW1lOiBhbnk7XG4gIGltYWdlX3R5cGU6IGFueTtcbiAgZ2V0Q29uZmlnMjogYW55O1xuICBpbWFnZUNvbmZpZ0RhdGEyOiBhbnk7XG4gIGltZ192YXIyOiBhbnk7XG4gIGltYWdlX25hbWUyOiBhbnk7XG4gIGltYWdlX3R5cGUyOiBhbnk7XG4gIGZsYWcyOiBib29sZWFuO1xuICBFcnJDb2RlMjpib29sZWFuID0gZmFsc2U7XG4gIGltZ19taXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBlZGl0b3Jjb25maWcgOiBhbnkgPSB7fTtcbiAgcHVibGljIGltYWdlc19hcnJheTphbnk9W107XG4gIHB1YmxpYyBzZXREYXRhOiBhbnk7XG4gIHB1YmxpYyBpbWFnZXNfYXJyYXlfZWRpdDphbnk9W107XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZWh0dHA6IFNlcnZpY2VsaWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyAsIHB1YmxpYyBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSkgeyBcbiAgICAgIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gIT0gJ2VkaXQnKVxuICAgICAgdGhpcy5hZGRCdWxsZXRMaXN0KCcnLCAnJyk7XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1dJVENIIENBU0VTPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgU2VydmljZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJTZXJ2aWNlIEVkaXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IFNlcnZpY2VcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuYWRkaXRpb25hbF9pbWcgPT0gZmFsc2UpXG4gICAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICAgIFxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZDIoZ2V0Q29uZmlnMjogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEyID0gZ2V0Q29uZmlnMjtcbiAgfVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBhZGRpdGlvbmFsX2RldGFpbHM6WycnXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICBidWxsZXRhcnI6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10pLFxuICAgICAgc2VydmljZV9pbWc6IFsnJ10sXG4gICAgICBhZGRpdGlvbmFsX2ltZzogWycnXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZygnPj4nLGRlZmF1bHRWYWx1ZSlcbiAgICB0aGlzLnNldERhdGE9ZGVmYXVsdFZhbHVlXG5cbiAgICBkZWZhdWx0VmFsdWUuYnVsbGV0YXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLmFkZEJ1bGxldExpc3QoZWxlbWVudC5idWxsZXRfdGl0bGUsIGVsZW1lbnQuYnVsbGV0X2Rlc2MpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX3RpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlZmF1bHRWYWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgIGFkZGl0aW9uYWxfZGV0YWlsczogZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfZGV0YWlscyxcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICBzdGF0dXM6IGRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICBzZXJ2aWNlX2ltZzogZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLFxuICAgICAgYWRkaXRpb25hbF9pbWc6IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZyxcbiAgICB9KTtcbiAgICAvKiogU2VydmljZSBpbWFnZSAqKi9cbiAgICAvLyB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcuYmFzZXBhdGggKyBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcuaW1hZ2U7XG4gICAgLy8gdGhpcy5pbWFnZV9uYW1lID0gZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLm5hbWU7XG4gICAgLy8gdGhpcy5pbWFnZV90eXBlID0gZGVmYXVsdFZhbHVlLnNlcnZpY2VfaW1nLnR5cGVcblxuICAgIC8qSW1hZ2Ugd29ya3MqL1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaW1nX3ZhciA9IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZ1tpXS5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZ1tpXS5pbWFnZTtcbiAgICAgICAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWdbaV0ubmFtZTtcbiAgICAgICAgICB0aGlzLmltYWdlX3R5cGUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWdbaV0udHlwZTtcbiAgICAgICAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnB1c2goeyAnaW1nX3Zhcic6IHRoaXMuaW1nX3ZhciwgJ2ltYWdlX25hbWUnOiB0aGlzLmltYWdlX25hbWUsICdpbWFnZV90eXBlJzogdGhpcy5pbWFnZV90eXBlIH0pO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LnB1c2goe1xuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWdbaV0uYmFzZXBhdGgsXG4gICAgICAgICAgICBcImltYWdlXCI6IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZ1tpXS5pbWFnZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWdbaV0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWdbaV0udHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAvKiogQWRkaXRpb25hbCBpbWFnZSAqKi9cbiAgICB0aGlzLmltZ192YXIyID0gZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLmltYWdlO1xuICAgIHRoaXMuaW1hZ2VfbmFtZTIgPSBkZWZhdWx0VmFsdWUuYWRkaXRpb25hbF9pbWcubmFtZTtcbiAgICB0aGlzLmltYWdlX3R5cGUyID0gZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLnR5cGVcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1GT1JNIEFSUkFZIEZVTkNUSU9OUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGFkZEJ1bGxldExpc3QoYTogYW55LCBiOiBhbnkpIHtcbiAgICBjb25zdCBibCA9IHRoaXMuc2VydmljZUZvcm0uY29udHJvbHMuYnVsbGV0YXJyIGFzIEZvcm1BcnJheTtcbiAgICBibC5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYnVsbGV0X3RpdGxlOiBbYV0sXG4gICAgICBidWxsZXRfZGVzYzogW2JdLFxuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZUJ1bGxldExpc3QoKSB7XG4gICAgY29uc3QgYmwgPSB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzLmJ1bGxldGFyciBhcyBGb3JtQXJyYXk7XG4gICAgYmwucmVtb3ZlQXQoMSk7XG4gIH1cblxuICBcblxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgb3Blbk1vZGFsdGVzdCgpe1xuICAgIHRoaXMub3BlbkRpYWxvZygnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5Jyk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvblN1Ym1pdCgpIHtcbiAgIFxuICAgICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgICAgZm9yIChsZXQgeCBpbiB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzKSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuXG4gXG4gICAgLy8gU2VydmljZSBGaWxlIFVwbG9hZCBXb3JrcyBcbiAgICAvLyBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcblxuICAgIC8vICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzLmxlbmd0aCA+IDEpIHsgdGhpcy5FcnJDb2RlID0gdHJ1ZTt0aGlzLmltZ19taXNzaW5nID0gZmFsc2U7IHJldHVybjsgfVxuXG4gICAgLy8gICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnNlcnZpY2VfaW1nID1cbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgIC8vICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAvLyAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAvLyAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgIC8vICAgICB9O1xuICAgIC8vICAgICB0aGlzLmltZ19taXNzaW5nID0gZmFsc2U7XG4gICAgLy8gfSBlbHNlIHtcblxuICAgIC8vICAgaWYoIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc2VydmljZV9pbWcgPT0gbnVsbCB8fCAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9PSAnJylcbiAgICAvLyAgIHtcbiAgICAvLyAgIHRoaXMuaW1nX21pc3NpbmcgPSB0cnVlO1xuICAgIC8vICAgdGhpcy5FcnJDb2RlID0gZmFsc2U7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX0lNQUdFIFVQTE9BREVSX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImltYWdlIHBhdGhcIix0aGlzLmltYWdlQ29uZmlnRGF0YSk7XG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkgPVxuICAgICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc2VydmljZV9pbWcgPSB0aGlzLmltYWdlc19hcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zZXJ2aWNlX2ltZyA9IGZhbHNlO1xuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8qKiBBZGRpdGlvbmFsIEltYWdlICAqKi9cbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibGVuZ3RoXCIsdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzLmxlbmd0aCk7IFxuICAgICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZTIgPSB0cnVlOyByZXR1cm47IH1cbiAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuYWRkaXRpb25hbF9pbWcgPVxuICAgICAgICB7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YTIucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1tpXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgICBpZih0aGlzLmltZ19taXNzaW5nPT10cnVlKXtyZXR1cm47fVxuICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0wO1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZXJ2aWNlRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIHRva2VuOiB0aGlzLmNvbmZpZ0RhdGEuand0VG9rZW5cbiAgICAgIH07XG4gICAgICB0aGlzLnNlcnZpY2VodHRwLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5jb25maWdEYXRhLmNhbGxCYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9LFxuICAgICAgcGFuZWxDbGFzczonc3VjY2Vzc19tb2RhbF9zZXJ2aWNlJ1xuICAgIH0pO1xuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICByZXNldHNlcnZpY2VGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmljZUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBjbGVhcl9pbWFnZSgpIHtcbiAgLy8gICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgLy8gICB0aGlzLmltZ19taXNzaW5nID0gdHJ1ZTtcbiAgLy8gfVxuICBjbGVhcl9pbWFnZShpbmRleDphbnkpIHtcbiAgICB0aGlzLmltYWdlc19hcnJheS5wb3AodGhpcy5zZXREYXRhLnNlcnZpY2VfaW1nW2luZGV4XSk7XG4gICAgdGhpcy5pbWFnZXNfYXJyYXlfZWRpdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgY2xlYXJfaW1hZ2UyKCkge1xuICAgIHRoaXMuZmxhZzIgPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLmFkZGl0aW9uYWxfaW1nID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==