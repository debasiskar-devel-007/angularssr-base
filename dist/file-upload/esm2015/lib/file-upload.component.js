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
            this.files[count].viewText = format[1];
        }
    }
    /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    checkingValidation(element) {
        /** @type {?} */
        let valid = { status: true, message: null };
        /* Checking File Format */
        /** @type {?} */
        let format = element.type.split("/");
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
        // var url: string = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
        // this.fileUploadService.upload(url, postData).subscribe(
        //   (response) => {
        //     let result: any = response;
        //     switch (result.status) {
        //       case 'complete':
        //         this.files[index].upload = result;
        //         this.configData.files = this.files;
        //         this.openSnackBar('Successfully Uploaded !!', 'Undo');
        //         break;
        //       case 'error':
        //         this.files[index].upload = result.data;
        //         this.openSnackBar(result.data, '');
        //         break;
        //       default:
        //         this.files[index].upload = result;
        //         break;
        //     }
        //   }, (err) => {
        //     this.files[index] = { status: 'error' };
        //     this.openSnackBar('An error occurred !!', 'Retry');
        //   });
        //-----------------------old-------------------//
        //----------------New direct bucket upload------------//
        ;
        //-----------------------old media server upload-------------------//
        // var url: string = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
        // this.fileUploadService.upload(url, postData).subscribe(
        //   (response) => {
        //     let result: any = response;
        //     switch (result.status) {
        //       case 'complete':
        //         this.files[index].upload = result;
        //         this.configData.files = this.files;
        //         this.openSnackBar('Successfully Uploaded !!', 'Undo');
        //         break;
        //       case 'error':
        //         this.files[index].upload = result.data;
        //         this.openSnackBar(result.data, '');
        //         break;
        //       default:
        //         this.files[index].upload = result;
        //         break;
        //     }
        //   }, (err) => {
        //     this.files[index] = { status: 'error' };
        //     this.openSnackBar('An error occurred !!', 'Retry');
        //   });
        //-----------------------old-------------------//
        //----------------New direct bucket upload------------//
        /** @type {?} */
        const val = this.filename[0];
        console.log(val.name);
        this.filearray.push(val);
        /** @type {?} */
        const reader = new FileReader();
        /** @type {?} */
        const file = val.name;
        /** @type {?} */
        let temploader = this.filename;
        console.log(reader);
        console.log(file, '//', this.filename);
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            fetch(this.configData.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postData
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                console.log('buck', response);
                return response.json();
            }))
                .then((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                return fetch(json.uploadURL, {
                    method: 'PUT',
                    body: new Blob([reader.result], { type: this.configData.type })
                });
            }))
                .then((/**
             * @return {?}
             */
            function () {
                // return 'success';
                // file.uploaded = 1;
                file.fileservername = this.configData.prefix + this.filename;
                // console.log(file.type, 'file.type');
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
        });
        reader.readAsArrayBuffer(file);
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
                template: "<!-- File Upload -->\n\n<!-- libDragDrop (onFileDropped)=\"selectFiles($event,$event)\"  -->\n\n<!-- image upload section -->\n\n<div *ngIf=\"configData.aspectratio =='' || configData.aspectratio == null\">\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\"  libDragDrop (onFileDropped)=\"selectFiles($event,$event)\" >\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files,$event)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n</div>\n\n\n\n\n\n<!-- crop image upload section -->\n\n<div *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\">\n<div class=\"bodywrapper\">\n    <!-- <h2 class=\"titlecls\">Drag and Drop Files <span>( MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB )</span></h2> -->\n    <!-- <p>Supported Formats:\n        <ng-container *ngFor=\"let val of configData.format; let i = index\">\n            {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n        </ng-container>\n    </p> -->\n    \n</div>\n<div class=\"uploadfilecontainercls\">\n    <input type=\"file\" class=\"uploadfilecontainerfl\"  placeholder=\"Drag and Drop Files\" \n    (change)=\"selectFiles($event.target.files,$event)\" multiple >\n    <span class=\"imgformat\">Formats: <ng-container *ngFor=\"let val of configData.format; let i = index\">\n        {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n    </ng-container></span>\n</div>\n</div>\n\n<div>\n</div>\n\n\n\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file.valid.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file.upload.status == 'progress'\"\n                    value=\"{{ file.upload.data.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file.upload.status == 'waiting'\"></mat-progress-bar>\n\n                <ng-container *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\" >\n                    <h2> Croped Images :</h2>\n                    <!-- <span>ddd {{configData.aspectratio}}----{{configData.aspectratio.length}}\n\n                    </span>  -->\n\n                    <ng-container *ngFor=\"let c of configData.aspectratio;let ci=index\">\n                        <!-- <span>00aspectratio---{{c}}</span> -->\n\n\n                        <br/>\n                        <span>Croped Image (Asepect Ratio) :{{num[ci]}}</span><br>\n                        <image-cropper *ngIf=\"imageChangedEvent !=null && imageChangedEvent[i] !=null \"\n                        [imageChangedEvent]=\"imageChangedEvent[i][ci]\"\n                        [maintainAspectRatio]=\"true\"\n                        [aspectRatio]=c\n                        [onlyScaleDown]=\"true\"\n                        [roundCropper]=\"false\"\n                        [alignImage]=\"'left'\"\n                        (imageLoaded)=\"imageLoaded()\"\n                        (imageCropped)=\"imageCropped($event,ci)\"\n                    ></image-cropper>\n                    <br/>\n                    <span>Croped Image Output : </span><br>\n                    \n                    <img [src]=\"croppedImage[ci]\" />\n    \n                    </ng-container>\n\n                </ng-container>\n\n                \n\n\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file.valid.status == true && file.upload.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file.upload.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n\n\n                    <!-- <button mat-raised-button type=\"button\" color=\"warn\"\n                    (click)=\"getdata();\">get data</button> -->\n            </mat-card-actions>\n\n\n        </span>\n    </mat-card>\n<!-- </div> -->\n\n\n \n\n<!-- image cropped section test -->\n<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQVlwRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7SUFzQzlCLFlBQW9CLFdBQXdCLEVBQVUsaUJBQW9DLEVBQ2hGLGNBQThCLEVBQVUsTUFBYyxFQUFVLFNBQXNCLEVBQ3ZGLE1BQWlCO1FBRk4sZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2hGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3ZGLFdBQU0sR0FBTixNQUFNLENBQVc7UUF0Q25CLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsY0FB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QyxrQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFFcEIsd0NBQW9COztJQUNwQixnREFBNEI7O0lBQzVCLDJDQUF1Qjs7SUFFdkIsc0RBQWdDOztJQUNoQyxxREFBK0I7O0lBOE9oQixtQ0FBSTs7Ozs7SUF6TlAsMENBQWdDOzs7OztJQUFFLGdEQUE0Qzs7Ozs7SUFDeEYsNkNBQXNDOzs7OztJQUFFLHFDQUFzQjs7Ozs7SUFBRSx3Q0FBOEI7O0lBQzlGLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkU2VydmljZSB9IGZyb20gJy4vZmlsZS11cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IEFsZXJ0TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2FsZXJ0LW1lc3NhZ2UvYWxlcnQtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3RmlsZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wcmV2aWV3LWZpbGVzL3ByZXZpZXctZmlsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZmlsZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHB1YmxpYyBmaWxlczogYW55ID0gW107XG4gIHB1YmxpYyBmaWxlc1Byb2Nlc3M6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBwdWJsaWMgdG90YWxGaWxlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBudW06IGFueT1bXTtcbiAgcHVibGljIGZpbGVuYW1lOmFueTtcbiAgLy8gaW1hZ2UgY3JvcHBlZCBzZWN0aW9uIGZvciB0ZXN0IFxuICBmaWxlYXJyYXk6IGFueSA9IFtdO1xuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gW107XG4gIGNyb3BwZWRJbWFnZTogYW55ID0gW107XG5cbiAgaW1nUmVzdWx0QmVmb3JlQ29tcHJlc3M6IHN0cmluZztcbiAgaW1nUmVzdWx0QWZ0ZXJDb21wcmVzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gICAgLy8gY29uc29sZS5sb2coICc+Pj4+Jyx0aGlzLmNvbmZpZ0RhdGEsdGhpcy5jb25maWdEYXRhLmFzcGVjdHJhdGlvLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBjIGluIHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpbykge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb25maWdEYXRhLmFzcGVjdHJhdGlvW2NdKVxuICAgICAgbGV0IHZhbCA9IHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpb1tjXTtcbiAgICAgIHRoaXMubnVtW2NdID0gdmFsLnRvRml4ZWQoMik7IFxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5udW0pXG5cblxuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZmlsZVVwbG9hZFNlcnZpY2U6IEZpbGVVcGxvYWRTZXJ2aWNlLFxuICAgIHByaXZhdGUgQWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qIFNlbGVjdCBGaWxlIFByb2NjZXNzICovXG4gIHNlbGVjdEZpbGVzKGV2ZW50OiBhbnksIGV2MTogYW55KSB7XG4gICAgLy90aGlzLmZpbGVDaGFuZ2VFdmVudChldjEpOyxcbiAgICBjb25zb2xlLmxvZygnPj4+PmV2ZW50JyxldmVudCk7XG4gICAgY29uc29sZS5sb2coJz4+Pj5ldjEnLGV2MSlcblxuICAgIC8vIGZvcihsZXQgaSBpbiBldjEpe1xuICAgIHRoaXMuZmlsZW5hbWU9ZXYxO1xuICAgIC8vIH1cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVuYW1lLCc/PycpXG4gICAgLy8gfSwgNTAwKTtcblxuICAgIC8vIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQ9ZXZlbnQ7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY291bnQ6IG51bWJlciA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj5jb3VudCBsZW5ndGgnLGNvdW50KVxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50W2luZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+Y291bnQgZWxlbWVudCcsZWxlbWVudClcblxuICAgICAgZm9yKGxldCBjYyBpbiB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8pe1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdldjEnLGNjLGV2MSk7XG4gICAgICAgIGlmKHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnRbaW5kZXhdPT1udWxsKVxuICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50W2luZGV4XT1bXTsgXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnRbaW5kZXhdW2NjXSA9IGV2MTsgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50LCAnaW1nJywgZXYxKTtcblxuICAgICAgLyogQ2hlY2tpbmcgVmFsaWRhdGlvbiAqL1xuICAgICAgbGV0IHZhbGlkYXRlOiBhbnkgPSB0aGlzLmNoZWNraW5nVmFsaWRhdGlvbihlbGVtZW50KTtcbiAgICAgIGlmICh2YWxpZGF0ZS5zdGF0dXMpIHtcbiAgICAgICAgZWxlbWVudC52YWxpZCA9IHsgc3RhdHVzOiB0cnVlIH07XG4gICAgICAgIGVsZW1lbnQudXBsb2FkID0geyBzdGF0dXM6ICdzZWxlY3RlZCcgfTtcbiAgICAgICAgZWxlbWVudC52aWV3VXJsID0gJ2h0dHBzOi8vbG9hZGluZy5pby9zcGlubmVycy9kdWFsLXJpbmcvbGcuZHVhbC1yaW5nLWxvYWRlci5naWYnO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHRoaXMudmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudmFsaWQgPSB7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IHZhbGlkYXRlLm1lc3NhZ2UgfTtcbiAgICAgICAgZWxlbWVudC51cGxvYWQgPSB7IHN0YXR1czogJ3NlbGVjdGVkJyB9O1xuICAgICAgICBlbGVtZW50LnZpZXdVcmwgPSBudWxsO1xuXG4gICAgICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgICAgICBlbGVtZW50LnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG5cbiAgdmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KSB7XG4gICAgbGV0IGZvcm1hdCA9IGVsZW1lbnQudHlwZS5zcGxpdChcIi9cIik7XG4gICAgaWYgKGZvcm1hdFswXSA9PSAnaW1hZ2UnKSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmZpbGVzW2NvdW50XTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbY291bnRdKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoX2V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbWdVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gaW1nVVJMO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gbnVsbDtcbiAgICAgIHRoaXMuZmlsZXNbY291bnRdLnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNraW5nIFZhbGlkYXRpb24gKi9cbiAgY2hlY2tpbmdWYWxpZGF0aW9uKGVsZW1lbnQpIHtcbiAgICBsZXQgdmFsaWQ6IGFueSA9IHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiBudWxsIH07XG5cbiAgICAvKiBDaGVja2luZyBGaWxlIEZvcm1hdCAqL1xuICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBjaGVjayA9IHRoaXMuY29uZmlnRGF0YS5mb3JtYXQuaW5jbHVkZXMoZm9ybWF0WzFdKTtcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgdmFsaWQubWVzc2FnZSA9IGZvcm1hdFsxXS50b1VwcGVyQ2FzZSgpICsgXCIgZm9ybWF0IG5vdCBzdXBwb3J0ZWQuXCI7XG4gICAgICB0aGlzLm9wZW5TbmFja0Jhcihmb3JtYXRbMV0udG9VcHBlckNhc2UoKSArIFwiIGZvcm1hdCBub3Qgc3VwcG9ydGVkLlwiLCAnJyk7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG4gICAgLyogQ2hlY2tpbmcgRmlsZSBzaXplICovXG4gICAgaWYgKGVsZW1lbnQuc2l6ZSAvIDEwMDAgPiB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSkge1xuICAgICAgdmFsaWQuc3RhdHVzID0gZmFsc2U7XG4gICAgICB2YWxpZC5tZXNzYWdlID0gXCJGaWxlIHNpemUgdG9vIGxhcmdlLiBNYXhpbXVtIGZpbGUgc2l6ZSBsaW1pdDogXCIgKyB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSArIFwiIEtCLlwiO1xuICAgICAgdGhpcy5vcGVuU25hY2tCYXIoXCJGaWxlIHNpemUgdG9vIGxhcmdlLiBNYXhpbXVtIGZpbGUgc2l6ZSBsaW1pdDogXCIgKyB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSArIFwiIEtCLlwiLCAnJyk7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkLnN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgLyogRmlsZSBVcGxvYWQgUHJvY2VzcyAqL1xuICB1cGxvYWRBbGwoZ2V0SW5kZXg6IGFueSA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XS52YWxpZC5zdGF0dXMgPT0gdHJ1ZSAmJiB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQuc3RhdHVzICE9ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy51cGxvYWRpbmcoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFVwbG9hZCAqL1xuICB1cGxvYWRpbmcoaW5kZXg6YW55KSB7XG5cbiAgICBjb25zb2xlLmxvZyhpbmRleCwnLz8nLHRoaXMuZmlsZW5hbWUpXG4gICAgdmFyIHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICBmaWxlOiB0aGlzLmZpbGVzW2luZGV4XSxcbiAgICAgIHR5cGU6IHRoaXMuY29uZmlnRGF0YS50eXBlLFxuICAgICAgcGF0aDogdGhpcy5jb25maWdEYXRhLnBhdGgsXG4gICAgICBwcmVmaXg6IHRoaXMuY29uZmlnRGF0YS5wcmVmaXgsXG4gICAgICB1cGxvYWRUeXBlOiB0aGlzLmNvbmZpZ0RhdGEudXBsb2FkVHlwZSxcbiAgICAgIGNvbnZlcnNpb25fbmVlZGVkOiB0aGlzLmNvbmZpZ0RhdGEuY29udmVyc2lvbk5lZWRlZCxcbiAgICAgIGJ1Y2tldG5hbWU6IHRoaXMuY29uZmlnRGF0YS5idWNrZXROYW1lLFxuICAgICAgYmFzZXBhdGg6dGhpcy5jb25maWdEYXRhLmJhc2VVcmwgKyB0aGlzLmNvbmZpZ0RhdGEuYnVja2V0TmFtZVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vbGQgbWVkaWEgc2VydmVyIHVwbG9hZC0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIC8vIHZhciB1cmw6IHN0cmluZyA9IHRoaXMuY29uZmlnRGF0YS5iYXNlVXJsICsgdGhpcy5jb25maWdEYXRhLmVuZHBvaW50ICsgJz9wYXRoPScgKyB0aGlzLmNvbmZpZ0RhdGEucGF0aCArICcmcHJlZml4PScgKyB0aGlzLmNvbmZpZ0RhdGEucHJlZml4ICsgJyZ0eXBlPScgKyB0aGlzLmNvbmZpZ0RhdGEudHlwZSArICcmcmFuZD0nICsgaW5kZXg7XG4gICAgLy8gdGhpcy5maWxlVXBsb2FkU2VydmljZS51cGxvYWQodXJsLCBwb3N0RGF0YSkuc3Vic2NyaWJlKFxuICAgIC8vICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgIC8vICAgICBzd2l0Y2ggKHJlc3VsdC5zdGF0dXMpIHtcbiAgICAvLyAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgLy8gICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQ7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbmZpZ0RhdGEuZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIC8vICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1N1Y2Nlc3NmdWxseSBVcGxvYWRlZCAhIScsICdVbmRvJyk7XG4gICAgLy8gICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICBjYXNlICdlcnJvcic6XG4gICAgLy8gICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQuZGF0YTtcbiAgICAvLyAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHJlc3VsdC5kYXRhLCAnJyk7XG4gICAgLy8gICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICBkZWZhdWx0OlxuICAgIC8vICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkID0gcmVzdWx0O1xuICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIChlcnIpID0+IHtcbiAgICAvLyAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB7IHN0YXR1czogJ2Vycm9yJyB9O1xuICAgIC8vICAgICB0aGlzLm9wZW5TbmFja0JhcignQW4gZXJyb3Igb2NjdXJyZWQgISEnLCAnUmV0cnknKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vbGQtLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tTmV3IGRpcmVjdCBidWNrZXQgdXBsb2FkLS0tLS0tLS0tLS0tLy9cbiAgICBjb25zdCB2YWwgPSB0aGlzLmZpbGVuYW1lWzBdO1xuXG4gICAgY29uc29sZS5sb2codmFsLm5hbWUpXG5cbiAgICB0aGlzLmZpbGVhcnJheS5wdXNoKHZhbCk7XG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHZhbC5uYW1lO1xuICAgIGxldCB0ZW1wbG9hZGVyID0gdGhpcy5maWxlbmFtZTtcblxuICAgIGNvbnNvbGUubG9nKHJlYWRlcik7XG4gICAgY29uc29sZS5sb2coZmlsZSwnLy8nLHRoaXMuZmlsZW5hbWUpO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgICBmZXRjaCh0aGlzLmNvbmZpZ0RhdGEuYmFzZVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHBvc3REYXRhXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwgeyB0eXBlOiB0aGlzLmNvbmZpZ0RhdGEudHlwZSB9KVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgLy8gZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmNvbmZpZ0RhdGEucHJlZml4ICsgdGhpcy5maWxlbmFtZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZS50eXBlLCAnZmlsZS50eXBlJyk7XG4gICAgICAgIC8vIHRlbXBsb2FkZXIgPSBudWxsO1xuICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgICAgLy8gbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXG4gIH1cblxuXG5cblxuICAvKiBSZW1vdmUgRmlsZXMgKi9cbiAgcmVtb3ZlRmlsZXMoaW5kZXg6IGFueSA9IG51bGwpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdTdWNjZXNzZnVsbHkgUmVtb3ZlICEhJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogU25hY2sgQmFyICovbmFtZVxuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIERpYWxvZyBCb3ggKi9cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQm94Q29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJNZXNzYWdlXCIgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogRGVsZXRlIGFsbCBzZWxlY3RlZCBmaWxlcyAqL1xuICBkZWxldGVBbGwoKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoMCwgdGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignU3VjY2Vzc2Z1bGx5IFJlbW92ZSAhIScsICcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIFByZXZpZXcgRmlsZXMgKi9cbiAgcHJldmlld0ZpbGVzKGluZGV4KSB7XG4gICAgdmFyIG1pbWVUeXBlID0gdGhpcy5maWxlc1tpbmRleF0udHlwZTtcbiAgICBpZiAobWltZVR5cGUubWF0Y2goL2ltYWdlXFwvKi8pID09IG51bGwpIHtcbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdQcmV2aWV3IG5vdCBzdXBwb3J0ZWQuJywgJycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmZpbGVzW2luZGV4XTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2luZGV4XSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IChfZXZlbnQpID0+IHtcbiAgICAgIGxldCBpbWdVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihQcmV2aWV3RmlsZXNDb21wb25lbnQsIHtcbiAgICAgICAgZGF0YTogeyBpbWdVUkw6IGltZ1VSTCB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG5cblxuXG5cblxuXG4gIGZpbGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlQ2hhbmdlRXZlbnQnLCBldmVudClcbiAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZXZlbnQ7XG4gICAgY29uc29sZS5sb2coJ2ZpbGVDaGFuZ2VFdmVudCcsIGV2ZW50KVxuXG5cbiAgfVxuICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBpOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+JyxldmVudCxpKVxuICAgIHRoaXMuY3JvcHBlZEltYWdlW2ldID0gZXZlbnQuYmFzZTY0O1xuICAgIGNvbnNvbGUubG9nKCdpbWFnZUNyb3BwZWQnLCB0aGlzLmNyb3BwZWRJbWFnZSk7ICBcbiAgICB0aGlzLmNvbmZpZ0RhdGEuY3JvcHBlZGZpbGVzPXRoaXMuY3JvcHBlZEltYWdlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbWFnZUNyLi4+ICcsICAgdGhpcy5jb25maWdEYXRhLmNyb3BwZWRmaWxlcyk7XG5cbiAgfVxuICBpbWFnZUxvYWRlZCgpIHtcbiAgICAvLyBzaG93IGNyb3BwZXJcbiAgfVxuICBjcm9wcGVyUmVhZHkoKSB7XG4gICAgLy8gY3JvcHBlciByZWFkeVxuICB9XG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG5cbiAgLy8gZ2V0ZGF0YSgpe1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YSlcbiAgLy8gfVxuXG5cblxuXG5cblxuXG59XG4iXX0=