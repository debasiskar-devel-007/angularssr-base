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
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(formBuilder, fileUploadService, ActivatedRoute, router, _snackBar, dialog) {
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
    Object.defineProperty(FileUploadComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
            // console.log( '>>>>',this.configData,this.configData.aspectratio.length);
            for (var c in this.configData.aspectratio) {
                // console.log(this.configData.aspectratio[c])
                /** @type {?} */
                var val = this.configData.aspectratio[c];
                this.num[c] = val.toFixed(2);
                // console.log(this.num)
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /* Select File Proccess */
    /* Select File Proccess */
    /**
     * @param {?} event
     * @param {?} ev1
     * @return {?}
     */
    FileUploadComponent.prototype.selectFiles = /* Select File Proccess */
    /**
     * @param {?} event
     * @param {?} ev1
     * @return {?}
     */
    function (event, ev1) {
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
        for (var index = 0; index < event.length; index++) {
            /** @type {?} */
            var count = this.files.length;
            // console.log('>>>>count length',count)
            /** @type {?} */
            var element = event[index];
            // console.log('>>>>count element',element)
            for (var cc in this.configData.aspectratio) {
                // console.log('ev1',cc,ev1);
                if (this.imageChangedEvent[index] == null)
                    this.imageChangedEvent[index] = [];
                this.imageChangedEvent[index][cc] = ev1;
            }
            // console.log(event, this.imageChangedEvent, 'img', ev1);
            /* Checking Validation */
            /** @type {?} */
            var validate = this.checkingValidation(element);
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
                var format = element.type.split("/");
                // format[1] = element.name.split('.')[1];
                /** @type {?} */
                var file_name = element.name;
                /** @type {?} */
                var str_no = element.name.lastIndexOf('.') + 1;
                format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
                element.viewText = format[1];
                this.files.push(element);
            }
        }
    };
    /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    FileUploadComponent.prototype.viewFiles = /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    function (count, element) {
        var _this = this;
        /** @type {?} */
        var format = element.type.split("/");
        if (format[0] == 'image') {
            /** @type {?} */
            var reader = new FileReader();
            /** @type {?} */
            var imagePath = this.files[count];
            reader.readAsDataURL(this.files[count]);
            reader.onload = (/**
             * @param {?} _event
             * @return {?}
             */
            function (_event) {
                /** @type {?} */
                var imgURL = reader.result;
                _this.files[count].viewUrl = imgURL;
            });
        }
        else {
            this.files[count].viewUrl = null;
            // format[1] = element.name.split('.')[1];
            /** @type {?} */
            var file_name = element.name;
            /** @type {?} */
            var str_no = element.name.lastIndexOf('.') + 1;
            format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
            this.files[count].viewText = format[1];
        }
    };
    /* Checking Validation */
    /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    FileUploadComponent.prototype.checkingValidation = /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        console.log(element, 'element++');
        /** @type {?} */
        var valid = { status: true, message: null };
        /* Checking File Format */
        // let format = element.type.split("/");
        /** @type {?} */
        var format = element.type.split("/");
        // format[1] = element.name.split('.')[1];
        /** @type {?} */
        var file_name = element.name;
        /** @type {?} */
        var str_no = element.name.lastIndexOf('.') + 1;
        format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
        console.log(file_name, 'file_name>>>');
        console.log(element.name, '??++f');
        console.log(format, 'format++');
        /** @type {?} */
        var check = this.configData.format.includes(format[1]);
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
    };
    /* File Upload Process */
    /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    FileUploadComponent.prototype.uploadAll = /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    function (getIndex) {
        if (getIndex === void 0) { getIndex = null; }
        for (var index = 0; index < this.files.length; index++) {
            if (this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
                this.uploading(index);
            }
        }
    };
    /* Upload */
    /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.uploading = /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
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
        function (response) {
            /** @type {?} */
            var result = response;
            switch (result.status) {
                case 'complete':
                    _this.files[index].upload = result;
                    _this.configData.files = _this.files;
                    _this.openSnackBar('Successfully Uploaded !!', 'Undo');
                    break;
                case 'error':
                    _this.files[index].upload = result.data;
                    _this.openSnackBar(result.data, '');
                    break;
                default:
                    _this.files[index].upload = result;
                    break;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.files[index] = { status: 'error' };
            _this.openSnackBar('An error occurred !!', 'Retry');
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
    };
    /* Remove Files */
    /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    FileUploadComponent.prototype.removeFiles = /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (index === void 0) { index = null; }
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.files.splice(index, 1);
                _this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    };
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    FileUploadComponent.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    /* Dialog Box */
    /* Dialog Box */
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.openDialog = /* Dialog Box */
    /**
     * @return {?}
     */
    function () {
        this.dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '250px',
            data: { message: "Message" }
        });
    };
    /* Delete all selected files */
    /* Delete all selected files */
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.deleteAll = /* Delete all selected files */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.files.splice(0, _this.files.length);
                _this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    };
    /* Preview Files */
    /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.previewFiles = /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var mimeType = this.files[index].type;
        if (mimeType.match(/image\/*/) == null) {
            this.openSnackBar('Preview not supported.', '');
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var imagePath = this.files[index];
        reader.readAsDataURL(this.files[index]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        function (_event) {
            /** @type {?} */
            var imgURL = reader.result;
            /** @type {?} */
            var dialogRef = _this.dialog.open(PreviewFilesComponent, {
                data: { imgURL: imgURL }
            });
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.fileChangeEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('fileChangeEvent', event)
        this.imageChangedEvent = event;
        console.log('fileChangeEvent', event);
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    FileUploadComponent.prototype.imageCropped = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        // console.log('>>>>>>>>>',event,i)
        this.croppedImage[i] = event.base64;
        console.log('imageCropped', this.croppedImage);
        this.configData.croppedfiles = this.croppedImage;
        // console.log('imageCr..> ',   this.configData.croppedfiles);
    };
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        // show cropper
    };
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.cropperReady = /**
     * @return {?}
     */
    function () {
        // cropper ready
    };
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.loadImageFailed = /**
     * @return {?}
     */
    function () {
        // show message
    };
    FileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-file-upload',
                    template: "<!-- File Upload -->\n\n<!-- libDragDrop (onFileDropped)=\"selectFiles($event,$event)\"  -->\n\n<!-- image upload section -->\n\n<div *ngIf=\"configData.aspectratio =='' || configData.aspectratio == null\">\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\"  libDragDrop (onFileDropped)=\"selectFiles($event,$event)\" >\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files,$event)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n</div>\n\n\n\n\n\n<!-- crop image upload section -->\n\n<div *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\">\n<div class=\"bodywrapper\">\n    <!-- <h2 class=\"titlecls\">Drag and Drop Files <span>( MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB )</span></h2> -->\n    <!-- <p>Supported Formats:\n        <ng-container *ngFor=\"let val of configData.format; let i = index\">\n            {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n        </ng-container>\n    </p> -->\n    \n</div>\n<div class=\"uploadfilecontainercls\">\n    <input type=\"file\" class=\"uploadfilecontainerfl\"  placeholder=\"Drag and Drop Files\" \n    (change)=\"selectFiles($event.target.files,$event)\" multiple >\n    <span class=\"imgformat\">Formats: <ng-container *ngFor=\"let val of configData.format; let i = index\">\n        {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n    </ng-container></span>\n</div>\n</div>\n\n<div>\n</div>\n\n\n\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file?.valid?.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file?.upload?.status == 'progress'\"\n                    value=\"{{ file.upload?.data?.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file?.upload?.status == 'waiting'\"></mat-progress-bar>\n\n                <ng-container *ngIf=\"configData?.aspectratio !=null && configData?.aspectratio?.length>0\" >\n                    <h2> Croped Images :</h2>\n                    <!-- <span>ddd {{configData.aspectratio}}----{{configData.aspectratio.length}}\n                    </span>  -->\n\n                    <ng-container *ngFor=\"let c of configData.aspectratio;let ci=index\">\n                        <!-- <span>00aspectratio---{{c}}</span> -->\n\n                        <br/>\n                        <span>Croped Image (Asepect Ratio) :{{num[ci]}}</span><br>\n                        <image-cropper *ngIf=\"imageChangedEvent !=null && imageChangedEvent[i] !=null \"\n                        [imageChangedEvent]=\"imageChangedEvent[i][ci]\"\n                        [maintainAspectRatio]=\"true\"\n                        [aspectRatio]=c\n                        [onlyScaleDown]=\"true\"\n                        [roundCropper]=\"false\"\n                        [alignImage]=\"'left'\"\n                        (imageLoaded)=\"imageLoaded()\"\n                        (imageCropped)=\"imageCropped($event,ci)\"\n                    ></image-cropper>\n                    <br/>\n                    <span>Croped Image Output : </span><br>\n                    \n                    <img [src]=\"croppedImage[ci]\" />\n    \n                    </ng-container>\n\n                </ng-container>\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file?.valid?.status == true && file?.upload?.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                    \n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file?.upload?.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n\n\n                    <!-- <button mat-raised-button type=\"button\" color=\"warn\"\n                    (click)=\"getdata();\">get data</button> -->\n            </mat-card-actions>\n        </span>\n    </mat-card>\n<!-- </div> -->\n\n\n \n\n<!-- image cropped section test -->\n<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n",
                    styles: [".uploadfilecontainer{background-repeat:no-repeat;background-size:100px;background-position:center;height:200px;width:80%;margin:20px auto;border:2px dashed #1c8adb;border-radius:10px;text-align:center;display:flex;justify-content:center;align-items:center}.uploadfilecontainer:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.uploadfilecontainerfl{background-repeat:no-repeat;background-size:100px;background-position:center;height:auto;width:80%;margin:20px auto;border:1px dashed #5ca2d5!important;border-radius:100px;text-align:center;display:flex;justify-content:center;align-items:center;padding:8px;position:relative;display:flex;justify-content:center;align-items:center}.uploadfilecontainerfl:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.uploadfilecontainerfl::before{content:'';background-color:#fff;width:100%;height:100%;z-index:999;position:absolute;top:0;left:0}.uploadfilecontainerfl::after{content:'Drag and Drop Files ( MAX Size: 50.0 MB )';width:100%;height:100%;left:0;top:0;transform:translate(0,-109%);z-index:9999;position:relative;text-align:center;text-transform:uppercase;color:#483d8b;font-weight:700}.uploadfilecontainerfl:hover::before{background-color:#4580aa;width:100%;height:100%}.uploadfilecontainerfl:hover::after{color:#000!important}.uploadfilecontainercls{display:block;text-align:center;position:relative}.uploadfilecontainercls .imgformat{position:absolute;bottom:6px;z-index:999;color:#7c7c7c!important;left:50%;transform:translate(-50%,0)}.bodywrapper{text-align:center;display:block}.titlecls{color:#483d8b}.titlecls span{font-size:16px!important;color:#878484!important;display:block}.button-group{background-repeat:no-repeat;background-size:100px;background-position:center;height:40px;width:80%;margin:20px auto;border-radius:10px}.error.mat-card-subtitle{color:#a00;text-align:left}.example-card{margin:6px auto auto;max-width:100%}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.progress-bar{margin-top:24px}.file-div{background-color:#dedddc;margin-top:6px}.othersFilePreview{background-color:#8a2be2;height:100%;width:100%;text-align:center;justify-content:center;align-items:center;display:flex}.fileDescription{text-align:left}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{position:relative;z-index:9;flex:1 1 28.33%;margin:10px!important;display:flex;flex-wrap:wrap}.viewUrlwrapper{height:160px;width:100%;overflow:hidden;position:relative}.viewUrlwrapper img{max-width:100%;-o-object-fit:cover;object-fit:cover;margin:0 auto;z-index:99;position:relative;max-width:100%;width:initial;display:block;margin-top:-46px!important}.viewUrlcontent{display:block;justify-content:center;align-items:stretch;flex-wrap:wrap;flex:1 1 100%}.viewUrlcontent .mat-card-header{display:flex;flex-direction:row;flex:1 1 100%;justify-content:center;text-align:center;flex-wrap:wrap}.viewUrlcontent .mat-progress-bar{margin-bottom:5px}.viewUrlcontent .mat-card-header .mat-card-header-text{margin:10px;width:100%}.viewUrlcontent .mat-card-header .mat-card-header-text .mat-card-title{width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:19px;max-height:40px;-webkit-line-clamp:2}.mat-typography .mat-card-image{width:inherit!important;margin:0!important}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: FileUploadService },
        { type: ActivatedRoute },
        { type: Router },
        { type: MatSnackBar },
        { type: MatDialog }
    ]; };
    FileUploadComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return FileUploadComponent;
}());
export { FileUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQU1wRjtJQTRDRSw2QkFBb0IsV0FBd0IsRUFBVSxpQkFBb0MsRUFDaEYsY0FBOEIsRUFBVSxNQUFjLEVBQVUsU0FBc0IsRUFDdkYsTUFBaUI7UUFGTixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDdkYsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXRDbkIsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLFlB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QWlCO2dCQUNqQixjQUFjO2dCQUFFLE1BQU07Z0JBQ3RCLFdBQVc7Z0JBSVgsU0FBUzs7O3lCQStCZixLQUFLOztJQTZWUiwwQkFBQztDQUFBLEFBdFhELElBc1hDO1NBaFhZLG1CQUFtQjs7O0lBRTlCLHVDQUFpQzs7SUFDakMsb0NBQXVCOztJQUN2QiwyQ0FBOEI7O0lBQzlCLHlDQUF1Qjs7SUFDdkIsd0NBQTZCOztJQUM3Qix3Q0FBc0I7O0lBQ3RCLHNDQUFnQzs7SUFDaEMsa0NBQXFCOztJQUNyQix1Q0FBcUI7O0lBRXJCLHdDQUFvQjs7SUFDcEIsZ0RBQTRCOztJQUM1QiwyQ0FBdUI7O0lBRXZCLHNEQUFnQzs7SUFDaEMscURBQStCOztJQXVRaEIsbUNBQUk7Ozs7O0lBbFBQLDBDQUFnQzs7Ozs7SUFBRSxnREFBNEM7Ozs7O0lBQ3hGLDZDQUFzQzs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQUUsd0NBQThCOztJQUM5RixxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBBbGVydE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hbGVydC1tZXNzYWdlL2FsZXJ0LW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJldmlld0ZpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcHJldmlldy1maWxlcy9wcmV2aWV3LWZpbGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50IH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZpbGUtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICdmaWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBwdWJsaWMgZmlsZXM6IGFueSA9IFtdO1xuICBwdWJsaWMgZmlsZXNQcm9jZXNzOiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIHRvdGFsRmlsZTogbnVtYmVyID0gMDtcbiAgcHVibGljIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbnVtOiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbGVuYW1lOiBhbnk7XG4gIC8vIGltYWdlIGNyb3BwZWQgc2VjdGlvbiBmb3IgdGVzdCBcbiAgZmlsZWFycmF5OiBhbnkgPSBbXTtcbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9IFtdO1xuICBjcm9wcGVkSW1hZ2U6IGFueSA9IFtdO1xuXG4gIGltZ1Jlc3VsdEJlZm9yZUNvbXByZXNzOiBzdHJpbmc7XG4gIGltZ1Jlc3VsdEFmdGVyQ29tcHJlc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICAgIC8vIGNvbnNvbGUubG9nKCAnPj4+PicsdGhpcy5jb25maWdEYXRhLHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpby5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgYyBpbiB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8pIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpb1tjXSlcbiAgICAgIGxldCB2YWwgPSB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW9bY107XG4gICAgICB0aGlzLm51bVtjXSA9IHZhbC50b0ZpeGVkKDIpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5udW0pXG5cblxuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZmlsZVVwbG9hZFNlcnZpY2U6IEZpbGVVcGxvYWRTZXJ2aWNlLFxuICAgIHByaXZhdGUgQWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qIFNlbGVjdCBGaWxlIFByb2NjZXNzICovXG4gIHNlbGVjdEZpbGVzKGV2ZW50OiBhbnksIGV2MTogYW55KSB7XG4gICAgLy90aGlzLmZpbGVDaGFuZ2VFdmVudChldjEpOyxcbiAgICBjb25zb2xlLmxvZygnPj4+PmV2ZW50JywgZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+ZXYxJywgZXYxKVxuXG4gICAgLy8gZm9yKGxldCBpIGluIGV2MSl7XG4gICAgdGhpcy5maWxlbmFtZSA9IGV2MTtcbiAgICAvLyB9XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgJz8/JylcbiAgICAvLyB9LCA1MDApO1xuXG4gICAgLy8gdGhpcy5pbWFnZUNoYW5nZWRFdmVudD1ldmVudDtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjb3VudDogbnVtYmVyID0gdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgICAvLyBjb25zb2xlLmxvZygnPj4+PmNvdW50IGxlbmd0aCcsY291bnQpXG4gICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnRbaW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj5jb3VudCBlbGVtZW50JyxlbGVtZW50KVxuXG4gICAgICBmb3IgKGxldCBjYyBpbiB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8pIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXYxJyxjYyxldjEpO1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNoYW5nZWRFdmVudFtpbmRleF0gPT0gbnVsbClcbiAgICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50W2luZGV4XSA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50W2luZGV4XVtjY10gPSBldjE7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50LCAnaW1nJywgZXYxKTtcblxuICAgICAgLyogQ2hlY2tpbmcgVmFsaWRhdGlvbiAqL1xuICAgICAgbGV0IHZhbGlkYXRlOiBhbnkgPSB0aGlzLmNoZWNraW5nVmFsaWRhdGlvbihlbGVtZW50KTtcbiAgICAgIGlmICh2YWxpZGF0ZS5zdGF0dXMpIHtcbiAgICAgICAgZWxlbWVudC52YWxpZCA9IHsgc3RhdHVzOiB0cnVlIH07XG4gICAgICAgIGVsZW1lbnQudXBsb2FkID0geyBzdGF0dXM6ICdzZWxlY3RlZCcgfTtcbiAgICAgICAgZWxlbWVudC52aWV3VXJsID0gJ2h0dHBzOi8vbG9hZGluZy5pby9zcGlubmVycy9kdWFsLXJpbmcvbGcuZHVhbC1yaW5nLWxvYWRlci5naWYnO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHRoaXMudmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudmFsaWQgPSB7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IHZhbGlkYXRlLm1lc3NhZ2UgfTtcbiAgICAgICAgZWxlbWVudC51cGxvYWQgPSB7IHN0YXR1czogJ3NlbGVjdGVkJyB9O1xuICAgICAgICBlbGVtZW50LnZpZXdVcmwgPSBudWxsO1xuICAgICAgICBsZXQgZm9ybWF0ID0gZWxlbWVudC50eXBlLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgLy8gZm9ybWF0WzFdID0gZWxlbWVudC5uYW1lLnNwbGl0KCcuJylbMV07XG5cbiAgICAgICAgbGV0IGZpbGVfbmFtZSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgbGV0IHN0cl9ubyA9IGVsZW1lbnQubmFtZS5sYXN0SW5kZXhPZignLicpICsgMTtcbiAgICAgICAgZm9ybWF0WzFdID0gZmlsZV9uYW1lLnN1YnN0cmluZyhmaWxlX25hbWUuaW5kZXhPZihmaWxlX25hbWUpICsgc3RyX25vKTtcblxuICAgICAgICBlbGVtZW50LnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG5cbiAgdmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KSB7XG4gICAgbGV0IGZvcm1hdCA9IGVsZW1lbnQudHlwZS5zcGxpdChcIi9cIik7XG4gICAgaWYgKGZvcm1hdFswXSA9PSAnaW1hZ2UnKSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmZpbGVzW2NvdW50XTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbY291bnRdKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoX2V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbWdVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gaW1nVVJMO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gbnVsbDtcbiAgICAgIC8vIGZvcm1hdFsxXSA9IGVsZW1lbnQubmFtZS5zcGxpdCgnLicpWzFdO1xuICAgICAgXG4gICAgICBsZXQgZmlsZV9uYW1lID0gZWxlbWVudC5uYW1lO1xuICAgICAgbGV0IHN0cl9ubyA9IGVsZW1lbnQubmFtZS5sYXN0SW5kZXhPZignLicpICsgMTtcbiAgICAgIGZvcm1hdFsxXSA9IGZpbGVfbmFtZS5zdWJzdHJpbmcoZmlsZV9uYW1lLmluZGV4T2YoZmlsZV9uYW1lKSArIHN0cl9ubyk7XG5cbiAgICAgIHRoaXMuZmlsZXNbY291bnRdLnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNraW5nIFZhbGlkYXRpb24gKi9cbiAgY2hlY2tpbmdWYWxpZGF0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LCAnZWxlbWVudCsrJylcbiAgICBsZXQgdmFsaWQ6IGFueSA9IHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiBudWxsIH07XG5cbiAgICAvKiBDaGVja2luZyBGaWxlIEZvcm1hdCAqL1xuICAgIC8vIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgIC8vIGZvcm1hdFsxXSA9IGVsZW1lbnQubmFtZS5zcGxpdCgnLicpWzFdO1xuXG4gICAgbGV0IGZpbGVfbmFtZSA9IGVsZW1lbnQubmFtZTtcbiAgICBsZXQgc3RyX25vID0gZWxlbWVudC5uYW1lLmxhc3RJbmRleE9mKCcuJykgKyAxO1xuICAgIGZvcm1hdFsxXSA9IGZpbGVfbmFtZS5zdWJzdHJpbmcoZmlsZV9uYW1lLmluZGV4T2YoZmlsZV9uYW1lKSArIHN0cl9ubyk7XG4gICAgY29uc29sZS5sb2coZmlsZV9uYW1lLCAnZmlsZV9uYW1lPj4+JylcblxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZSwgJz8/KytmJylcblxuICAgIGNvbnNvbGUubG9nKGZvcm1hdCwgJ2Zvcm1hdCsrJylcbiAgICBsZXQgY2hlY2sgPSB0aGlzLmNvbmZpZ0RhdGEuZm9ybWF0LmluY2x1ZGVzKGZvcm1hdFsxXSk7XG4gICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XG4gICAgICB2YWxpZC5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHZhbGlkLm1lc3NhZ2UgPSBmb3JtYXRbMV0udG9VcHBlckNhc2UoKSArIFwiIGZvcm1hdCBub3Qgc3VwcG9ydGVkLlwiO1xuICAgICAgdGhpcy5vcGVuU25hY2tCYXIoZm9ybWF0WzFdLnRvVXBwZXJDYXNlKCkgKyBcIiBmb3JtYXQgbm90IHN1cHBvcnRlZC5cIiwgJycpO1xuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuICAgIC8qIENoZWNraW5nIEZpbGUgc2l6ZSAqL1xuICAgIGlmIChlbGVtZW50LnNpemUgLyAxMDAwID4gdGhpcy5jb25maWdEYXRhLnNpemUpIHtcbiAgICAgIHZhbGlkLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgdmFsaWQubWVzc2FnZSA9IFwiRmlsZSBzaXplIHRvbyBsYXJnZS4gTWF4aW11bSBmaWxlIHNpemUgbGltaXQ6IFwiICsgdGhpcy5jb25maWdEYXRhLnNpemUgKyBcIiBLQi5cIjtcbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKFwiRmlsZSBzaXplIHRvbyBsYXJnZS4gTWF4aW11bSBmaWxlIHNpemUgbGltaXQ6IFwiICsgdGhpcy5jb25maWdEYXRhLnNpemUgKyBcIiBLQi5cIiwgJycpO1xuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuICAgIGlmICh2YWxpZC5zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qIEZpbGUgVXBsb2FkIFByb2Nlc3MgKi9cbiAgdXBsb2FkQWxsKGdldEluZGV4OiBhbnkgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAodGhpcy5maWxlc1tpbmRleF0udmFsaWQuc3RhdHVzID09IHRydWUgJiYgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkLnN0YXR1cyAhPSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMudXBsb2FkaW5nKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgLyogVXBsb2FkICovXG4gIHVwbG9hZGluZyhpbmRleDogYW55KSB7XG5cbiAgICBjb25zb2xlLmxvZyhpbmRleCwgJy8/JywgdGhpcy5maWxlbmFtZSlcbiAgICB2YXIgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgIGZpbGU6IHRoaXMuZmlsZXNbaW5kZXhdLFxuICAgICAgdHlwZTogdGhpcy5jb25maWdEYXRhLnR5cGUsXG4gICAgICBwYXRoOiB0aGlzLmNvbmZpZ0RhdGEucGF0aCxcbiAgICAgIHByZWZpeDogdGhpcy5jb25maWdEYXRhLnByZWZpeCxcbiAgICAgIHVwbG9hZFR5cGU6IHRoaXMuY29uZmlnRGF0YS51cGxvYWRUeXBlLFxuICAgICAgY29udmVyc2lvbl9uZWVkZWQ6IHRoaXMuY29uZmlnRGF0YS5jb252ZXJzaW9uTmVlZGVkLFxuICAgICAgYnVja2V0bmFtZTogdGhpcy5jb25maWdEYXRhLmJ1Y2tldE5hbWUsXG4gICAgICBiYXNlcGF0aDogdGhpcy5jb25maWdEYXRhLmJhc2VVcmwgKyB0aGlzLmNvbmZpZ0RhdGEuYnVja2V0TmFtZVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vbGQgbWVkaWEgc2VydmVyIHVwbG9hZC0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIHZhciB1cmw6IHN0cmluZyA9IHRoaXMuY29uZmlnRGF0YS5iYXNlVXJsICsgdGhpcy5jb25maWdEYXRhLmVuZHBvaW50ICsgJz9wYXRoPScgKyB0aGlzLmNvbmZpZ0RhdGEucGF0aCArICcmcHJlZml4PScgKyB0aGlzLmNvbmZpZ0RhdGEucHJlZml4ICsgJyZ0eXBlPScgKyB0aGlzLmNvbmZpZ0RhdGEudHlwZSArICcmcmFuZD0nICsgaW5kZXg7XG4gICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS51cGxvYWQodXJsLCBwb3N0RGF0YSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgICBzd2l0Y2ggKHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0RhdGEuZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1N1Y2Nlc3NmdWxseSBVcGxvYWRlZCAhIScsICdVbmRvJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHJlc3VsdC5kYXRhLCAnJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkID0gcmVzdWx0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB7IHN0YXR1czogJ2Vycm9yJyB9O1xuICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignQW4gZXJyb3Igb2NjdXJyZWQgISEnLCAnUmV0cnknKTtcbiAgICAgIH0pO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vbGQtLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tTmV3IGRpcmVjdCBidWNrZXQgdXBsb2FkLS0tLS0tLS0tLS0tLy9cbiAgICAvLyAgIGNvbnN0IHZhbCA9IHRoaXMuZmlsZW5hbWVbMF07XG5cbiAgICAvLyAgIGNvbnNvbGUubG9nKHZhbC5uYW1lKVxuXG4gICAgLy8gICB0aGlzLmZpbGVhcnJheS5wdXNoKHZhbCk7XG5cbiAgICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy8gICBjb25zdCBmaWxlOiBhbnkgPSB2YWwubmFtZTtcbiAgICAvLyAgIGxldCB0ZW1wbG9hZGVyID0gdGhpcy5maWxlbmFtZTtcblxuICAgIC8vICAgY29uc29sZS5sb2cocmVhZGVyKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGUsJy8vJyx0aGlzLmZpbGVuYW1lKTtcblxuICAgIC8vICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgLy8gICAgIGZldGNoKHRoaXMuY29uZmlnRGF0YS5iYXNlVXJsLCB7XG4gICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgICAgcG9zdERhdGFcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdidWNrJywgcmVzcG9uc2UpO1xuICAgIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAvLyAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgLy8gICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogdGhpcy5jb25maWdEYXRhLnR5cGUgfSlcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgLy8gcmV0dXJuICdzdWNjZXNzJztcbiAgICAvLyAgICAgICAvLyBmaWxlLnVwbG9hZGVkID0gMTtcbiAgICAvLyAgICAgICBmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5jb25maWdEYXRhLnByZWZpeCArIHRoaXMuZmlsZW5hbWU7XG4gICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coZmlsZS50eXBlLCAnZmlsZS50eXBlJyk7XG4gICAgLy8gICAgICAgLy8gdGVtcGxvYWRlciA9IG51bGw7XG4gICAgLy8gICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAvLyAgICAgICAvLyBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH07XG4gICAgLy8gICAvLyByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG5cbiAgfVxuXG5cblxuXG4gIC8qIFJlbW92ZSBGaWxlcyAqL1xuICByZW1vdmVGaWxlcyhpbmRleDogYW55ID0gbnVsbCkge1xuICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1N1Y2Nlc3NmdWxseSBSZW1vdmUgISEnLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiBTbmFjayBCYXIgKi9uYW1lXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgLyogRGlhbG9nIEJveCAqL1xuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dCb3hDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiBcIk1lc3NhZ2VcIiB9XG4gICAgfSk7XG4gIH1cblxuICAvKiBEZWxldGUgYWxsIHNlbGVjdGVkIGZpbGVzICovXG4gIGRlbGV0ZUFsbCgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmZpbGVzLnNwbGljZSgwLCB0aGlzLmZpbGVzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdTdWNjZXNzZnVsbHkgUmVtb3ZlICEhJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogUHJldmlldyBGaWxlcyAqL1xuICBwcmV2aWV3RmlsZXMoaW5kZXgpIHtcbiAgICB2YXIgbWltZVR5cGUgPSB0aGlzLmZpbGVzW2luZGV4XS50eXBlO1xuICAgIGlmIChtaW1lVHlwZS5tYXRjaCgvaW1hZ2VcXC8qLykgPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1ByZXZpZXcgbm90IHN1cHBvcnRlZC4nLCAnJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgbGV0IGltYWdlUGF0aCA9IHRoaXMuZmlsZXNbaW5kZXhdO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbaW5kZXhdKTtcbiAgICByZWFkZXIub25sb2FkID0gKF9ldmVudCkgPT4ge1xuICAgICAgbGV0IGltZ1VSTCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFByZXZpZXdGaWxlc0NvbXBvbmVudCwge1xuICAgICAgICBkYXRhOiB7IGltZ1VSTDogaW1nVVJMIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cblxuXG5cblxuXG5cbiAgZmlsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGVDaGFuZ2VFdmVudCcsIGV2ZW50KVxuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcbiAgICBjb25zb2xlLmxvZygnZmlsZUNoYW5nZUV2ZW50JywgZXZlbnQpXG5cblxuICB9XG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQsIGk6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4nLGV2ZW50LGkpXG4gICAgdGhpcy5jcm9wcGVkSW1hZ2VbaV0gPSBldmVudC5iYXNlNjQ7XG4gICAgY29uc29sZS5sb2coJ2ltYWdlQ3JvcHBlZCcsIHRoaXMuY3JvcHBlZEltYWdlKTtcbiAgICB0aGlzLmNvbmZpZ0RhdGEuY3JvcHBlZGZpbGVzID0gdGhpcy5jcm9wcGVkSW1hZ2U7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltYWdlQ3IuLj4gJywgICB0aGlzLmNvbmZpZ0RhdGEuY3JvcHBlZGZpbGVzKTtcblxuICB9XG4gIGltYWdlTG9hZGVkKCkge1xuICAgIC8vIHNob3cgY3JvcHBlclxuICB9XG4gIGNyb3BwZXJSZWFkeSgpIHtcbiAgICAvLyBjcm9wcGVyIHJlYWR5XG4gIH1cbiAgbG9hZEltYWdlRmFpbGVkKCkge1xuICAgIC8vIHNob3cgbWVzc2FnZVxuICB9XG5cblxuICAvLyBnZXRkYXRhKCl7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5jb25maWdEYXRhKVxuICAvLyB9XG5cblxuXG5cblxuXG5cbn1cbiJdfQ==