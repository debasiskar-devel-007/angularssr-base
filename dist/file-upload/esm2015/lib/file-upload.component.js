/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploadService } from './file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { PreviewFilesComponent } from './component/preview-files/preview-files.component';
import { MatDialog } from '@angular/material/dialog';
export class FileUploadComponent {
    /**
     * @param {?} formBuilder
     * @param {?} fileUploadService
     * @param {?} ActivatedRoute
     * @param {?} router
     * @param {?} _snackBar
     * @param {?} dialog
     */
    constructor(formBuilder, fileUploadService, ActivatedRoute, router, _snackBar, dialog) {
        this.formBuilder = formBuilder;
        this.fileUploadService = fileUploadService;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formData = new FormData();
        this.files = [];
        this.filesProcess = [];
        this.totalFile = 0;
        this.loading = false;
        this.num = [];
        // image cropped section for test 
        this.filearray = [];
        this.imageChangedEvent = [];
        this.croppedImage = [];
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
        // console.log( '>>>>',this.configData,this.configData.aspectratio.length);
        for (let c in this.configData.aspectratio) {
            // console.log(this.configData.aspectratio[c])
            /** @type {?} */
            let val = this.configData.aspectratio[c];
            this.num[c] = val.toFixed(2);
            // console.log(this.num)
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /* Select File Proccess */
    /**
     * @param {?} event
     * @param {?} ev1
     * @return {?}
     */
    selectFiles(event, ev1) {
        //this.fileChangeEvent(ev1);,
        console.log('>>>>event', event);
        console.log('>>>>ev1', ev1);
        // for(let i in ev1){
        this.filename = ev1;
        // }
        // setTimeout(() => {
        console.log(this.filename, '??');
        // }, 500);
        // this.imageChangedEvent=event;
        this.loading = true;
        for (let index = 0; index < event.length; index++) {
            /** @type {?} */
            var count = this.files.length;
            // console.log('>>>>count length',count)
            /** @type {?} */
            const element = event[index];
            // console.log('>>>>count element',element)
            for (let cc in this.configData.aspectratio) {
                // console.log('ev1',cc,ev1);
                if (this.imageChangedEvent[index] == null)
                    this.imageChangedEvent[index] = [];
                this.imageChangedEvent[index][cc] = ev1;
            }
            // console.log(event, this.imageChangedEvent, 'img', ev1);
            /* Checking Validation */
            /** @type {?} */
            let validate = this.checkingValidation(element);
            if (validate.status) {
                element.valid = { status: true };
                element.upload = { status: 'selected' };
                element.viewUrl = 'https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif';
                this.files.push(element);
                this.viewFiles(count, element);
            }
            else {
                element.valid = { status: false, message: validate.message };
                element.upload = { status: 'selected' };
                element.viewUrl = null;
                /** @type {?} */
                let format = element.type.split("/");
                // format[1] = element.name.split('.')[1];
                /** @type {?} */
                let file_name = element.name;
                /** @type {?} */
                let str_no = element.name.lastIndexOf('.') + 1;
                format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
                element.viewText = format[1];
                this.files.push(element);
            }
        }
    }
    /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    viewFiles(count, element) {
        /** @type {?} */
        let format = element.type.split("/");
        if (format[0] == 'image') {
            /** @type {?} */
            var reader = new FileReader();
            /** @type {?} */
            let imagePath = this.files[count];
            reader.readAsDataURL(this.files[count]);
            reader.onload = (/**
             * @param {?} _event
             * @return {?}
             */
            (_event) => {
                /** @type {?} */
                let imgURL = reader.result;
                this.files[count].viewUrl = imgURL;
            });
        }
        else {
            this.files[count].viewUrl = null;
            // format[1] = element.name.split('.')[1];
            /** @type {?} */
            let file_name = element.name;
            /** @type {?} */
            let str_no = element.name.lastIndexOf('.') + 1;
            format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
            this.files[count].viewText = format[1];
        }
    }
    /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    checkingValidation(element) {
        console.log(element, 'element++');
        /** @type {?} */
        let valid = { status: true, message: null };
        /* Checking File Format */
        // let format = element.type.split("/");
        /** @type {?} */
        let format = element.type.split("/");
        // format[1] = element.name.split('.')[1];
        /** @type {?} */
        let file_name = element.name;
        /** @type {?} */
        let str_no = element.name.lastIndexOf('.') + 1;
        format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
        console.log(file_name, 'file_name>>>');
        console.log(element.name, '??++f');
        console.log(format, 'format++');
        /** @type {?} */
        let check = this.configData.format.includes(format[1]);
        if (check == false) {
            valid.status = false;
            valid.message = format[1].toUpperCase() + " format not supported.";
            this.openSnackBar(format[1].toUpperCase() + " format not supported.", '');
            return valid;
        }
        /* Checking File size */
        if (element.size / 1000 > this.configData.size) {
            valid.status = false;
            valid.message = "File size too large. Maximum file size limit: " + this.configData.size + " KB.";
            this.openSnackBar("File size too large. Maximum file size limit: " + this.configData.size + " KB.", '');
            return valid;
        }
        if (valid.status == true) {
            return valid;
        }
    }
    /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    uploadAll(getIndex = null) {
        for (let index = 0; index < this.files.length; index++) {
            if (this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
                this.uploading(index);
            }
        }
    }
    /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    uploading(index) {
        console.log(index, '/?', this.filename);
        /** @type {?} */
        var postData = {
            file: this.files[index],
            type: this.configData.type,
            path: this.configData.path,
            prefix: this.configData.prefix,
            uploadType: this.configData.uploadType,
            conversion_needed: this.configData.conversionNeeded,
            bucketname: this.configData.bucketName,
            basepath: this.configData.baseUrl + this.configData.bucketName
        }
        //-----------------------old media server upload-------------------//
        ;
        //-----------------------old media server upload-------------------//
        /** @type {?} */
        var url = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
        this.fileUploadService.upload(url, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let result = response;
            switch (result.status) {
                case 'complete':
                    this.files[index].upload = result;
                    this.configData.files = this.files;
                    this.openSnackBar('Successfully Uploaded !!', 'Undo');
                    break;
                case 'error':
                    this.files[index].upload = result.data;
                    this.openSnackBar(result.data, '');
                    break;
                default:
                    this.files[index].upload = result;
                    break;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.files[index] = { status: 'error' };
            this.openSnackBar('An error occurred !!', 'Retry');
        }));
        //-----------------------old-------------------//
        //----------------New direct bucket upload------------//
        //   const val = this.filename[0];
        //   console.log(val.name)
        //   this.filearray.push(val);
        //   const reader = new FileReader();
        //   const file: any = val.name;
        //   let temploader = this.filename;
        //   console.log(reader);
        //   console.log(file,'//',this.filename);
        //   reader.onloadend = (e) => {
        //     fetch(this.configData.baseUrl, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({
        //         postData
        //       })
        //     })
        //     .then(function(response) {
        //       console.log('buck', response);
        //       return response.json();
        //     })
        //     .then(function(json) {
        //       return fetch(json.uploadURL, {
        //         method: 'PUT',
        //         body: new Blob([reader.result], { type: this.configData.type })
        //       });
        //     })
        //     .then(function() {
        //       // return 'success';
        //       // file.uploaded = 1;
        //       file.fileservername = this.configData.prefix + this.filename;
        //       // console.log(file.type, 'file.type');
        //       // temploader = null;
        //       // var uploadedFileNode = document.createElement('div');
        //       // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
        //       // list.appendChild(uploadedFileNode);
        //     });
        //   };
        //   // reader.readAsArrayBuffer(file);
    }
    /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    removeFiles(index = null) {
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.files.splice(index, 1);
                this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    /* Dialog Box */
    /**
     * @return {?}
     */
    openDialog() {
        this.dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '250px',
            data: { message: "Message" }
        });
    }
    /* Delete all selected files */
    /**
     * @return {?}
     */
    deleteAll() {
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.files.splice(0, this.files.length);
                this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    }
    /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    previewFiles(index) {
        /** @type {?} */
        var mimeType = this.files[index].type;
        if (mimeType.match(/image\/*/) == null) {
            this.openSnackBar('Preview not supported.', '');
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        let imagePath = this.files[index];
        reader.readAsDataURL(this.files[index]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        (_event) => {
            /** @type {?} */
            let imgURL = reader.result;
            /** @type {?} */
            const dialogRef = this.dialog.open(PreviewFilesComponent, {
                data: { imgURL: imgURL }
            });
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fileChangeEvent(event) {
        // console.log('fileChangeEvent', event)
        this.imageChangedEvent = event;
        console.log('fileChangeEvent', event);
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    imageCropped(event, i) {
        // console.log('>>>>>>>>>',event,i)
        this.croppedImage[i] = event.base64;
        console.log('imageCropped', this.croppedImage);
        this.configData.croppedfiles = this.croppedImage;
        // console.log('imageCr..> ',   this.configData.croppedfiles);
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        // show cropper
    }
    /**
     * @return {?}
     */
    cropperReady() {
        // cropper ready
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
        // show message
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-file-upload',
                template: "<!-- File Upload -->\n\n<!-- libDragDrop (onFileDropped)=\"selectFiles($event,$event)\"  -->\n\n<!-- image upload section -->\n\n<div *ngIf=\"configData.aspectratio =='' || configData.aspectratio == null\">\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\"  libDragDrop (onFileDropped)=\"selectFiles($event,$event)\" >\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files,$event)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n</div>\n\n\n\n\n\n<!-- crop image upload section -->\n\n<div *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\">\n<div class=\"bodywrapper\">\n    <!-- <h2 class=\"titlecls\">Drag and Drop Files <span>( MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB )</span></h2> -->\n    <!-- <p>Supported Formats:\n        <ng-container *ngFor=\"let val of configData.format; let i = index\">\n            {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n        </ng-container>\n    </p> -->\n    \n</div>\n<div class=\"uploadfilecontainercls\">\n    <input type=\"file\" class=\"uploadfilecontainerfl\"  placeholder=\"Drag and Drop Files\" \n    (change)=\"selectFiles($event.target.files,$event)\" multiple >\n    <span class=\"imgformat\">Formats: <ng-container *ngFor=\"let val of configData.format; let i = index\">\n        {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n    </ng-container></span>\n</div>\n</div>\n\n<div>\n</div>\n\n\n\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file?.valid?.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file?.upload?.status == 'progress'\"\n                    value=\"{{ file.upload?.data?.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file?.upload?.status == 'waiting'\"></mat-progress-bar>\n\n                <ng-container *ngIf=\"configData?.aspectratio !=null && configData?.aspectratio?.length>0\" >\n                    <h2> Croped Images :</h2>\n                    <!-- <span>ddd {{configData.aspectratio}}----{{configData.aspectratio.length}}\n                    </span>  -->\n\n                    <ng-container *ngFor=\"let c of configData.aspectratio;let ci=index\">\n                        <!-- <span>00aspectratio---{{c}}</span> -->\n\n                        <br/>\n                        <span>Croped Image (Asepect Ratio) :{{num[ci]}}</span><br>\n                        <image-cropper *ngIf=\"imageChangedEvent !=null && imageChangedEvent[i] !=null \"\n                        [imageChangedEvent]=\"imageChangedEvent[i][ci]\"\n                        [maintainAspectRatio]=\"true\"\n                        [aspectRatio]=c\n                        [onlyScaleDown]=\"true\"\n                        [roundCropper]=\"false\"\n                        [alignImage]=\"'left'\"\n                        (imageLoaded)=\"imageLoaded()\"\n                        (imageCropped)=\"imageCropped($event,ci)\"\n                    ></image-cropper>\n                    <br/>\n                    <span>Croped Image Output : </span><br>\n                    \n                    <img [src]=\"croppedImage[ci]\" />\n    \n                    </ng-container>\n\n                </ng-container>\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file?.valid?.status == true && file?.upload?.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                    \n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file?.upload?.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n\n\n                    <!-- <button mat-raised-button type=\"button\" color=\"warn\"\n                    (click)=\"getdata();\">get data</button> -->\n            </mat-card-actions>\n        </span>\n    </mat-card>\n<!-- </div> -->\n\n\n \n\n<!-- image cropped section test -->\n<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n",
                styles: [".uploadfilecontainer{background-repeat:no-repeat;background-size:100px;background-position:center;height:200px;width:80%;margin:20px auto;border:2px dashed #1c8adb;border-radius:10px;text-align:center;display:flex;justify-content:center;align-items:center}.uploadfilecontainer:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.uploadfilecontainerfl{background-repeat:no-repeat;background-size:100px;background-position:center;height:auto;width:80%;margin:20px auto;border:1px dashed #5ca2d5!important;border-radius:100px;text-align:center;display:flex;justify-content:center;align-items:center;padding:8px;position:relative;display:flex;justify-content:center;align-items:center}.uploadfilecontainerfl:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.uploadfilecontainerfl::before{content:'';background-color:#fff;width:100%;height:100%;z-index:999;position:absolute;top:0;left:0}.uploadfilecontainerfl::after{content:'Drag and Drop Files ( MAX Size: 50.0 MB )';width:100%;height:100%;left:0;top:0;transform:translate(0,-109%);z-index:9999;position:relative;text-align:center;text-transform:uppercase;color:#483d8b;font-weight:700}.uploadfilecontainerfl:hover::before{background-color:#4580aa;width:100%;height:100%}.uploadfilecontainerfl:hover::after{color:#000!important}.uploadfilecontainercls{display:block;text-align:center;position:relative}.uploadfilecontainercls .imgformat{position:absolute;bottom:6px;z-index:999;color:#7c7c7c!important;left:50%;transform:translate(-50%,0)}.bodywrapper{text-align:center;display:block}.titlecls{color:#483d8b}.titlecls span{font-size:16px!important;color:#878484!important;display:block}.button-group{background-repeat:no-repeat;background-size:100px;background-position:center;height:40px;width:80%;margin:20px auto;border-radius:10px}.error.mat-card-subtitle{color:#a00;text-align:left}.example-card{margin:6px auto auto;max-width:100%}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.progress-bar{margin-top:24px}.file-div{background-color:#dedddc;margin-top:6px}.othersFilePreview{background-color:#8a2be2;height:100%;width:100%;text-align:center;justify-content:center;align-items:center;display:flex}.fileDescription{text-align:left}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{position:relative;z-index:9;flex:1 1 28.33%;margin:10px!important;display:flex;flex-wrap:wrap}.viewUrlwrapper{height:160px;width:100%;overflow:hidden;position:relative}.viewUrlwrapper img{max-width:100%;-o-object-fit:cover;object-fit:cover;margin:0 auto;z-index:99;position:relative;max-width:100%;width:initial;display:block;margin-top:-46px!important}.viewUrlcontent{display:block;justify-content:center;align-items:stretch;flex-wrap:wrap;flex:1 1 100%}.viewUrlcontent .mat-card-header{display:flex;flex-direction:row;flex:1 1 100%;justify-content:center;text-align:center;flex-wrap:wrap}.viewUrlcontent .mat-progress-bar{margin-bottom:5px}.viewUrlcontent .mat-card-header .mat-card-header-text{margin:10px;width:100%}.viewUrlcontent .mat-card-header .mat-card-header-text .mat-card-title{width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:19px;max-height:40px;-webkit-line-clamp:2}.mat-typography .mat-card-image{width:inherit!important;margin:0!important}"]
            }] }
];
/** @nocollapse */
FileUploadComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: FileUploadService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MatSnackBar },
    { type: MatDialog }
];
FileUploadComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FileUploadComponent.prototype.formData;
    /** @type {?} */
    FileUploadComponent.prototype.files;
    /** @type {?} */
    FileUploadComponent.prototype.filesProcess;
    /** @type {?} */
    FileUploadComponent.prototype.configData;
    /** @type {?} */
    FileUploadComponent.prototype.totalFile;
    /** @type {?} */
    FileUploadComponent.prototype.dialogRef;
    /** @type {?} */
    FileUploadComponent.prototype.loading;
    /** @type {?} */
    FileUploadComponent.prototype.num;
    /** @type {?} */
    FileUploadComponent.prototype.filename;
    /** @type {?} */
    FileUploadComponent.prototype.filearray;
    /** @type {?} */
    FileUploadComponent.prototype.imageChangedEvent;
    /** @type {?} */
    FileUploadComponent.prototype.croppedImage;
    /** @type {?} */
    FileUploadComponent.prototype.imgResultBeforeCompress;
    /** @type {?} */
    FileUploadComponent.prototype.imgResultAfterCompress;
    /** @type {?} */
    FileUploadComponent.prototype.name;
    /**
     * @type {?}
     * @private
     */
    FileUploadComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FileUploadComponent.prototype.fileUploadService;
    /**
     * @type {?}
     * @private
     */
    FileUploadComponent.prototype.ActivatedRoute;
    /**
     * @type {?}
     * @private
     */
    FileUploadComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    FileUploadComponent.prototype._snackBar;
    /** @type {?} */
    FileUploadComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQVlwRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7SUFzQzlCLFlBQW9CLFdBQXdCLEVBQVUsaUJBQW9DLEVBQ2hGLGNBQThCLEVBQVUsTUFBYyxFQUFVLFNBQXNCLEVBQ3ZGLE1BQWlCO1FBRk4sZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2hGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3ZGLFdBQU0sR0FBTixNQUFNLENBQVc7UUF0Q25CLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsY0FB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QUUsZ0RBQTRDOzs7OztJQUN4Riw2Q0FBc0M7Ozs7O0lBQUUscUNBQXNCOzs7OztJQUFFLHdDQUE4Qjs7SUFDOUYscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IEZpbGVVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLXVwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgQWxlcnRNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWxlcnQtbWVzc2FnZS9hbGVydC1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IFByZXZpZXdGaWxlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3ByZXZpZXctZmlsZXMvcHJldmlldy1maWxlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1maWxlLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgcHVibGljIGZpbGVzOiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbGVzUHJvY2VzczogYW55ID0gW107XG4gIHB1YmxpYyBjb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyB0b3RhbEZpbGU6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBkaWFsb2dSZWY6IGFueTtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG51bTogYW55ID0gW107XG4gIHB1YmxpYyBmaWxlbmFtZTogYW55O1xuICAvLyBpbWFnZSBjcm9wcGVkIHNlY3Rpb24gZm9yIHRlc3QgXG4gIGZpbGVhcnJheTogYW55ID0gW107XG4gIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSBbXTtcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSBbXTtcblxuICBpbWdSZXN1bHRCZWZvcmVDb21wcmVzczogc3RyaW5nO1xuICBpbWdSZXN1bHRBZnRlckNvbXByZXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgICAvLyBjb25zb2xlLmxvZyggJz4+Pj4nLHRoaXMuY29uZmlnRGF0YSx0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8ubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGMgaW4gdGhpcy5jb25maWdEYXRhLmFzcGVjdHJhdGlvKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW9bY10pXG4gICAgICBsZXQgdmFsID0gdGhpcy5jb25maWdEYXRhLmFzcGVjdHJhdGlvW2NdO1xuICAgICAgdGhpcy5udW1bY10gPSB2YWwudG9GaXhlZCgyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubnVtKVxuXG5cbiAgICB9XG4gIH1cblxuXG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGZpbGVVcGxvYWRTZXJ2aWNlOiBGaWxlVXBsb2FkU2VydmljZSxcbiAgICBwcml2YXRlIEFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvKiBTZWxlY3QgRmlsZSBQcm9jY2VzcyAqL1xuICBzZWxlY3RGaWxlcyhldmVudDogYW55LCBldjE6IGFueSkge1xuICAgIC8vdGhpcy5maWxlQ2hhbmdlRXZlbnQoZXYxKTssXG4gICAgY29uc29sZS5sb2coJz4+Pj5ldmVudCcsIGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZygnPj4+PmV2MScsIGV2MSlcblxuICAgIC8vIGZvcihsZXQgaSBpbiBldjEpe1xuICAgIHRoaXMuZmlsZW5hbWUgPSBldjE7XG4gICAgLy8gfVxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsICc/PycpXG4gICAgLy8gfSwgNTAwKTtcblxuICAgIC8vIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQ9ZXZlbnQ7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY291bnQ6IG51bWJlciA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj5jb3VudCBsZW5ndGgnLGNvdW50KVxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50W2luZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+Y291bnQgZWxlbWVudCcsZWxlbWVudClcblxuICAgICAgZm9yIChsZXQgY2MgaW4gdGhpcy5jb25maWdEYXRhLmFzcGVjdHJhdGlvKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2MScsY2MsZXYxKTtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnRbaW5kZXhdID09IG51bGwpXG4gICAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudFtpbmRleF0gPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudFtpbmRleF1bY2NdID0gZXYxO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCwgJ2ltZycsIGV2MSk7XG5cbiAgICAgIC8qIENoZWNraW5nIFZhbGlkYXRpb24gKi9cbiAgICAgIGxldCB2YWxpZGF0ZTogYW55ID0gdGhpcy5jaGVja2luZ1ZhbGlkYXRpb24oZWxlbWVudCk7XG4gICAgICBpZiAodmFsaWRhdGUuc3RhdHVzKSB7XG4gICAgICAgIGVsZW1lbnQudmFsaWQgPSB7IHN0YXR1czogdHJ1ZSB9O1xuICAgICAgICBlbGVtZW50LnVwbG9hZCA9IHsgc3RhdHVzOiAnc2VsZWN0ZWQnIH07XG4gICAgICAgIGVsZW1lbnQudmlld1VybCA9ICdodHRwczovL2xvYWRpbmcuaW8vc3Bpbm5lcnMvZHVhbC1yaW5nL2xnLmR1YWwtcmluZy1sb2FkZXIuZ2lmJztcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnZpZXdGaWxlcyhjb3VudCwgZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnZhbGlkID0geyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiB2YWxpZGF0ZS5tZXNzYWdlIH07XG4gICAgICAgIGVsZW1lbnQudXBsb2FkID0geyBzdGF0dXM6ICdzZWxlY3RlZCcgfTtcbiAgICAgICAgZWxlbWVudC52aWV3VXJsID0gbnVsbDtcbiAgICAgICAgbGV0IGZvcm1hdCA9IGVsZW1lbnQudHlwZS5zcGxpdChcIi9cIik7XG4gICAgICAgIC8vIGZvcm1hdFsxXSA9IGVsZW1lbnQubmFtZS5zcGxpdCgnLicpWzFdO1xuXG4gICAgICAgIGxldCBmaWxlX25hbWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgIGxldCBzdHJfbm8gPSBlbGVtZW50Lm5hbWUubGFzdEluZGV4T2YoJy4nKSArIDE7XG4gICAgICAgIGZvcm1hdFsxXSA9IGZpbGVfbmFtZS5zdWJzdHJpbmcoZmlsZV9uYW1lLmluZGV4T2YoZmlsZV9uYW1lKSArIHN0cl9ubyk7XG5cbiAgICAgICAgZWxlbWVudC52aWV3VGV4dCA9IGZvcm1hdFsxXTtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIHZpZXdGaWxlcyhjb3VudCwgZWxlbWVudCkge1xuICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgIGlmIChmb3JtYXRbMF0gPT0gJ2ltYWdlJykge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBsZXQgaW1hZ2VQYXRoID0gdGhpcy5maWxlc1tjb3VudF07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2NvdW50XSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKF9ldmVudCkgPT4ge1xuICAgICAgICBsZXQgaW1nVVJMID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5maWxlc1tjb3VudF0udmlld1VybCA9IGltZ1VSTDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlc1tjb3VudF0udmlld1VybCA9IG51bGw7XG4gICAgICAvLyBmb3JtYXRbMV0gPSBlbGVtZW50Lm5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgIFxuICAgICAgbGV0IGZpbGVfbmFtZSA9IGVsZW1lbnQubmFtZTtcbiAgICAgIGxldCBzdHJfbm8gPSBlbGVtZW50Lm5hbWUubGFzdEluZGV4T2YoJy4nKSArIDE7XG4gICAgICBmb3JtYXRbMV0gPSBmaWxlX25hbWUuc3Vic3RyaW5nKGZpbGVfbmFtZS5pbmRleE9mKGZpbGVfbmFtZSkgKyBzdHJfbm8pO1xuXG4gICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VGV4dCA9IGZvcm1hdFsxXTtcbiAgICB9XG4gIH1cblxuICAvKiBDaGVja2luZyBWYWxpZGF0aW9uICovXG4gIGNoZWNraW5nVmFsaWRhdGlvbihlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCwgJ2VsZW1lbnQrKycpXG4gICAgbGV0IHZhbGlkOiBhbnkgPSB7IHN0YXR1czogdHJ1ZSwgbWVzc2FnZTogbnVsbCB9O1xuXG4gICAgLyogQ2hlY2tpbmcgRmlsZSBGb3JtYXQgKi9cbiAgICAvLyBsZXQgZm9ybWF0ID0gZWxlbWVudC50eXBlLnNwbGl0KFwiL1wiKTtcbiAgICBsZXQgZm9ybWF0ID0gZWxlbWVudC50eXBlLnNwbGl0KFwiL1wiKTtcbiAgICAvLyBmb3JtYXRbMV0gPSBlbGVtZW50Lm5hbWUuc3BsaXQoJy4nKVsxXTtcblxuICAgIGxldCBmaWxlX25hbWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgbGV0IHN0cl9ubyA9IGVsZW1lbnQubmFtZS5sYXN0SW5kZXhPZignLicpICsgMTtcbiAgICBmb3JtYXRbMV0gPSBmaWxlX25hbWUuc3Vic3RyaW5nKGZpbGVfbmFtZS5pbmRleE9mKGZpbGVfbmFtZSkgKyBzdHJfbm8pO1xuICAgIGNvbnNvbGUubG9nKGZpbGVfbmFtZSwgJ2ZpbGVfbmFtZT4+PicpXG5cbiAgICBjb25zb2xlLmxvZyhlbGVtZW50Lm5hbWUsICc/PysrZicpXG5cbiAgICBjb25zb2xlLmxvZyhmb3JtYXQsICdmb3JtYXQrKycpXG4gICAgbGV0IGNoZWNrID0gdGhpcy5jb25maWdEYXRhLmZvcm1hdC5pbmNsdWRlcyhmb3JtYXRbMV0pO1xuICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xuICAgICAgdmFsaWQuc3RhdHVzID0gZmFsc2U7XG4gICAgICB2YWxpZC5tZXNzYWdlID0gZm9ybWF0WzFdLnRvVXBwZXJDYXNlKCkgKyBcIiBmb3JtYXQgbm90IHN1cHBvcnRlZC5cIjtcbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKGZvcm1hdFsxXS50b1VwcGVyQ2FzZSgpICsgXCIgZm9ybWF0IG5vdCBzdXBwb3J0ZWQuXCIsICcnKTtcbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG5cbiAgICAvKiBDaGVja2luZyBGaWxlIHNpemUgKi9cbiAgICBpZiAoZWxlbWVudC5zaXplIC8gMTAwMCA+IHRoaXMuY29uZmlnRGF0YS5zaXplKSB7XG4gICAgICB2YWxpZC5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHZhbGlkLm1lc3NhZ2UgPSBcIkZpbGUgc2l6ZSB0b28gbGFyZ2UuIE1heGltdW0gZmlsZSBzaXplIGxpbWl0OiBcIiArIHRoaXMuY29uZmlnRGF0YS5zaXplICsgXCIgS0IuXCI7XG4gICAgICB0aGlzLm9wZW5TbmFja0JhcihcIkZpbGUgc2l6ZSB0b28gbGFyZ2UuIE1heGltdW0gZmlsZSBzaXplIGxpbWl0OiBcIiArIHRoaXMuY29uZmlnRGF0YS5zaXplICsgXCIgS0IuXCIsICcnKTtcbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG5cbiAgICBpZiAodmFsaWQuc3RhdHVzID09IHRydWUpIHtcbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG4gIH1cblxuICAvKiBGaWxlIFVwbG9hZCBQcm9jZXNzICovXG4gIHVwbG9hZEFsbChnZXRJbmRleDogYW55ID0gbnVsbCkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuZmlsZXNbaW5kZXhdLnZhbGlkLnN0YXR1cyA9PSB0cnVlICYmIHRoaXMuZmlsZXNbaW5kZXhdLnVwbG9hZC5zdGF0dXMgIT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnVwbG9hZGluZyhpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIC8qIFVwbG9hZCAqL1xuICB1cGxvYWRpbmcoaW5kZXg6IGFueSkge1xuXG4gICAgY29uc29sZS5sb2coaW5kZXgsICcvPycsIHRoaXMuZmlsZW5hbWUpXG4gICAgdmFyIHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICBmaWxlOiB0aGlzLmZpbGVzW2luZGV4XSxcbiAgICAgIHR5cGU6IHRoaXMuY29uZmlnRGF0YS50eXBlLFxuICAgICAgcGF0aDogdGhpcy5jb25maWdEYXRhLnBhdGgsXG4gICAgICBwcmVmaXg6IHRoaXMuY29uZmlnRGF0YS5wcmVmaXgsXG4gICAgICB1cGxvYWRUeXBlOiB0aGlzLmNvbmZpZ0RhdGEudXBsb2FkVHlwZSxcbiAgICAgIGNvbnZlcnNpb25fbmVlZGVkOiB0aGlzLmNvbmZpZ0RhdGEuY29udmVyc2lvbk5lZWRlZCxcbiAgICAgIGJ1Y2tldG5hbWU6IHRoaXMuY29uZmlnRGF0YS5idWNrZXROYW1lLFxuICAgICAgYmFzZXBhdGg6IHRoaXMuY29uZmlnRGF0YS5iYXNlVXJsICsgdGhpcy5jb25maWdEYXRhLmJ1Y2tldE5hbWVcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tb2xkIG1lZGlhIHNlcnZlciB1cGxvYWQtLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICB2YXIgdXJsOiBzdHJpbmcgPSB0aGlzLmNvbmZpZ0RhdGEuYmFzZVVybCArIHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCArICc/cGF0aD0nICsgdGhpcy5jb25maWdEYXRhLnBhdGggKyAnJnByZWZpeD0nICsgdGhpcy5jb25maWdEYXRhLnByZWZpeCArICcmdHlwZT0nICsgdGhpcy5jb25maWdEYXRhLnR5cGUgKyAnJnJhbmQ9JyArIGluZGV4O1xuICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXBsb2FkKHVybCwgcG9zdERhdGEpLnN1YnNjcmliZShcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgICAgc3dpdGNoIChyZXN1bHQuc3RhdHVzKSB7XG4gICAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5jb25maWdEYXRhLmZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdTdWNjZXNzZnVsbHkgVXBsb2FkZWQgISEnLCAnVW5kbycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcihyZXN1bHQuZGF0YSwgJycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdLnVwbG9hZCA9IHJlc3VsdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdID0geyBzdGF0dXM6ICdlcnJvcicgfTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ0FuIGVycm9yIG9jY3VycmVkICEhJywgJ1JldHJ5Jyk7XG4gICAgICB9KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tb2xkLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLU5ldyBkaXJlY3QgYnVja2V0IHVwbG9hZC0tLS0tLS0tLS0tLS8vXG4gICAgLy8gICBjb25zdCB2YWwgPSB0aGlzLmZpbGVuYW1lWzBdO1xuXG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWwubmFtZSlcblxuICAgIC8vICAgdGhpcy5maWxlYXJyYXkucHVzaCh2YWwpO1xuXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vICAgY29uc3QgZmlsZTogYW55ID0gdmFsLm5hbWU7XG4gICAgLy8gICBsZXQgdGVtcGxvYWRlciA9IHRoaXMuZmlsZW5hbWU7XG5cbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlYWRlcik7XG4gICAgLy8gICBjb25zb2xlLmxvZyhmaWxlLCcvLycsdGhpcy5maWxlbmFtZSk7XG5cbiAgICAvLyAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgIC8vICAgICBmZXRjaCh0aGlzLmNvbmZpZ0RhdGEuYmFzZVVybCwge1xuICAgIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgICAgIHBvc3REYXRhXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnYnVjaycsIHJlc3BvbnNlKTtcbiAgICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgIC8vICAgICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7IHR5cGU6IHRoaXMuY29uZmlnRGF0YS50eXBlIH0pXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgIC8vIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgLy8gICAgICAgLy8gZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgLy8gICAgICAgZmlsZS5maWxlc2VydmVybmFtZSA9IHRoaXMuY29uZmlnRGF0YS5wcmVmaXggKyB0aGlzLmZpbGVuYW1lO1xuICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwgJ2ZpbGUudHlwZScpO1xuICAgIC8vICAgICAgIC8vIHRlbXBsb2FkZXIgPSBudWxsO1xuICAgIC8vICAgICAgIC8vIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgLy8gdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgLy8gICAgICAgLy8gbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9O1xuICAgIC8vICAgLy8gcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXG4gIH1cblxuXG5cblxuICAvKiBSZW1vdmUgRmlsZXMgKi9cbiAgcmVtb3ZlRmlsZXMoaW5kZXg6IGFueSA9IG51bGwpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdTdWNjZXNzZnVsbHkgUmVtb3ZlICEhJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogU25hY2sgQmFyICovbmFtZVxuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIERpYWxvZyBCb3ggKi9cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQm94Q29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJNZXNzYWdlXCIgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogRGVsZXRlIGFsbCBzZWxlY3RlZCBmaWxlcyAqL1xuICBkZWxldGVBbGwoKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoMCwgdGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignU3VjY2Vzc2Z1bGx5IFJlbW92ZSAhIScsICcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIFByZXZpZXcgRmlsZXMgKi9cbiAgcHJldmlld0ZpbGVzKGluZGV4KSB7XG4gICAgdmFyIG1pbWVUeXBlID0gdGhpcy5maWxlc1tpbmRleF0udHlwZTtcbiAgICBpZiAobWltZVR5cGUubWF0Y2goL2ltYWdlXFwvKi8pID09IG51bGwpIHtcbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdQcmV2aWV3IG5vdCBzdXBwb3J0ZWQuJywgJycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmZpbGVzW2luZGV4XTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2luZGV4XSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IChfZXZlbnQpID0+IHtcbiAgICAgIGxldCBpbWdVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihQcmV2aWV3RmlsZXNDb21wb25lbnQsIHtcbiAgICAgICAgZGF0YTogeyBpbWdVUkw6IGltZ1VSTCB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG5cblxuXG5cblxuXG4gIGZpbGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlQ2hhbmdlRXZlbnQnLCBldmVudClcbiAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZXZlbnQ7XG4gICAgY29uc29sZS5sb2coJ2ZpbGVDaGFuZ2VFdmVudCcsIGV2ZW50KVxuXG5cbiAgfVxuICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBpOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+JyxldmVudCxpKVxuICAgIHRoaXMuY3JvcHBlZEltYWdlW2ldID0gZXZlbnQuYmFzZTY0O1xuICAgIGNvbnNvbGUubG9nKCdpbWFnZUNyb3BwZWQnLCB0aGlzLmNyb3BwZWRJbWFnZSk7XG4gICAgdGhpcy5jb25maWdEYXRhLmNyb3BwZWRmaWxlcyA9IHRoaXMuY3JvcHBlZEltYWdlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbWFnZUNyLi4+ICcsICAgdGhpcy5jb25maWdEYXRhLmNyb3BwZWRmaWxlcyk7XG5cbiAgfVxuICBpbWFnZUxvYWRlZCgpIHtcbiAgICAvLyBzaG93IGNyb3BwZXJcbiAgfVxuICBjcm9wcGVyUmVhZHkoKSB7XG4gICAgLy8gY3JvcHBlciByZWFkeVxuICB9XG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG5cbiAgLy8gZ2V0ZGF0YSgpe1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YSlcbiAgLy8gfVxuXG5cblxuXG5cblxuXG59XG4iXX0=