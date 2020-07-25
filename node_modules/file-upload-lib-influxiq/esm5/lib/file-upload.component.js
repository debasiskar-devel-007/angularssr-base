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
        /** @type {?} */
        var valid = { status: true, message: null };
        /* Checking File Format */
        /** @type {?} */
        var format = element.type.split("/");
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
        /** @type {?} */
        var postData = {
            file: this.files[index],
            type: this.configData.type,
            path: this.configData.path,
            prefix: this.configData.prefix,
            uploadType: this.configData.uploadType,
            conversion_needed: this.configData.conversionNeeded,
            bucketname: this.configData.bucketName
        };
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
                    template: "<!-- File Upload -->\n\n<!-- libDragDrop (onFileDropped)=\"selectFiles($event,$event)\"  -->\n\n<!-- image upload section -->\n\n<div *ngIf=\"configData.aspectratio =='' || configData.aspectratio == null\">\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\"  libDragDrop (onFileDropped)=\"selectFiles($event,$event)\" >\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files,$event)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n</div>\n\n\n\n\n\n<!-- crop image upload section -->\n\n<div *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\">\n<div class=\"bodywrapper\">\n    <!-- <h2 class=\"titlecls\">Drag and Drop Files <span>( MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB )</span></h2> -->\n    <!-- <p>Supported Formats:\n        <ng-container *ngFor=\"let val of configData.format; let i = index\">\n            {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n        </ng-container>\n    </p> -->\n    \n</div>\n<div class=\"uploadfilecontainercls\">\n    <input type=\"file\" class=\"uploadfilecontainerfl\"  placeholder=\"Drag and Drop Files\" \n    (change)=\"selectFiles($event.target.files,$event)\" multiple >\n    <span class=\"imgformat\">Formats: <ng-container *ngFor=\"let val of configData.format; let i = index\">\n        {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n    </ng-container></span>\n</div>\n</div>\n\n\n\n\n<div>\n</div>\n\n\n\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file.valid.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file.upload.status == 'progress'\"\n                    value=\"{{ file.upload.data.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file.upload.status == 'waiting'\"></mat-progress-bar>\n\n                <ng-container *ngIf=\"configData.aspectratio !=null && configData.aspectratio.length>0\" >\n                    <h2> Croped Images :</h2>\n                    <!-- <span>ddd {{configData.aspectratio}}----{{configData.aspectratio.length}}\n\n                    </span>  -->\n\n                    <ng-container *ngFor=\"let c of configData.aspectratio;let ci=index\">\n                        <!-- <span>00aspectratio---{{c}}</span> -->\n\n\n                        <br/>\n                        <span>Croped Image (Asepect Ratio) :{{num[ci]}}</span><br>\n                        <image-cropper *ngIf=\"imageChangedEvent !=null && imageChangedEvent[i] !=null \"\n                        [imageChangedEvent]=\"imageChangedEvent[i][ci]\"\n                        [maintainAspectRatio]=\"true\"\n                        [aspectRatio]=c\n                        [onlyScaleDown]=\"true\"\n                        [roundCropper]=\"false\"\n                        [alignImage]=\"'left'\"\n                        (imageLoaded)=\"imageLoaded()\"\n                        (imageCropped)=\"imageCropped($event,ci)\"\n                    ></image-cropper>\n                    <br/>\n                    <span>Croped Image Output : </span><br>\n                    \n                    <img [src]=\"croppedImage[ci]\" />\n    \n                    </ng-container>\n\n                </ng-container>\n\n                \n\n\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file.valid.status == true && file.upload.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file.upload.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n\n\n                    <!-- <button mat-raised-button type=\"button\" color=\"warn\"\n                    (click)=\"getdata();\">get data</button> -->\n            </mat-card-actions>\n\n\n        </span>\n    </mat-card>\n<!-- </div> -->\n\n\n \n\n<!-- image cropped section test -->\n<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQztBQU1wRjtJQTRDRSw2QkFBb0IsV0FBd0IsRUFBVSxpQkFBb0MsRUFDaEYsY0FBOEIsRUFBVSxNQUFjLEVBQVUsU0FBc0IsRUFDdkYsTUFBaUI7UUFGTixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDdkYsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXRDbkIsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLFlB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QUNELDZDQUFlOzs7SUFBZjtRQUNFLGVBQWU7SUFDakIsQ0FBQzs7Z0JBbFJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix1NE1BQXlDOztpQkFFMUM7Ozs7Z0JBbEJRLFdBQVc7Z0JBRVgsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUFFLE1BQU07Z0JBQ3RCLFdBQVc7Z0JBSVgsU0FBUzs7O3lCQStCZixLQUFLOztJQXNRUiwwQkFBQztDQUFBLEFBL1JELElBK1JDO1NBelJZLG1CQUFtQjs7O0lBRTlCLHVDQUFpQzs7SUFDakMsb0NBQXVCOztJQUN2QiwyQ0FBOEI7O0lBQzlCLHlDQUF1Qjs7SUFDdkIsd0NBQTZCOztJQUM3Qix3Q0FBc0I7O0lBQ3RCLHNDQUFnQzs7SUFDaEMsa0NBQW1COztJQUluQixnREFBNEI7O0lBQzVCLDJDQUF1Qjs7SUFFdkIsc0RBQWdDOztJQUNoQyxxREFBK0I7O0lBZ0xoQixtQ0FBSTs7Ozs7SUEzSlAsMENBQWdDOzs7OztJQUFFLGdEQUE0Qzs7Ozs7SUFDeEYsNkNBQXNDOzs7OztJQUFFLHFDQUFzQjs7Ozs7SUFBRSx3Q0FBOEI7O0lBQzlGLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkU2VydmljZSB9IGZyb20gJy4vZmlsZS11cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IEFsZXJ0TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2FsZXJ0LW1lc3NhZ2UvYWxlcnQtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3RmlsZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wcmV2aWV3LWZpbGVzL3ByZXZpZXctZmlsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZmlsZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHB1YmxpYyBmaWxlczogYW55ID0gW107XG4gIHB1YmxpYyBmaWxlc1Byb2Nlc3M6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBwdWJsaWMgdG90YWxGaWxlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBudW06IGFueT1bXTtcblxuICAvLyBpbWFnZSBjcm9wcGVkIHNlY3Rpb24gZm9yIHRlc3QgXG5cbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9IFtdO1xuICBjcm9wcGVkSW1hZ2U6IGFueSA9IFtdO1xuXG4gIGltZ1Jlc3VsdEJlZm9yZUNvbXByZXNzOiBzdHJpbmc7XG4gIGltZ1Jlc3VsdEFmdGVyQ29tcHJlc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICAgIC8vIGNvbnNvbGUubG9nKCAnPj4+PicsdGhpcy5jb25maWdEYXRhLHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpby5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgYyBpbiB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8pIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YS5hc3BlY3RyYXRpb1tjXSlcbiAgICAgIGxldCB2YWwgPSB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW9bY107XG4gICAgICB0aGlzLm51bVtjXSA9IHZhbC50b0ZpeGVkKDIpOyBcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubnVtKVxuXG5cbiAgICB9XG4gIH1cblxuXG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGZpbGVVcGxvYWRTZXJ2aWNlOiBGaWxlVXBsb2FkU2VydmljZSxcbiAgICBwcml2YXRlIEFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvKiBTZWxlY3QgRmlsZSBQcm9jY2VzcyAqL1xuICBzZWxlY3RGaWxlcyhldmVudDogYW55LCBldjE6IGFueSkge1xuICAgIC8vdGhpcy5maWxlQ2hhbmdlRXZlbnQoZXYxKTssXG4gICAgY29uc29sZS5sb2coJz4+Pj5ldmVudCcsZXZlbnQpXG4gICAgY29uc29sZS5sb2coJz4+Pj5ldjEnLGV2MSlcblxuICAgIC8vIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQ9ZXZlbnQ7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY291bnQ6IG51bWJlciA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgLy8gY29uc29sZS5sb2coJz4+Pj5jb3VudCBsZW5ndGgnLGNvdW50KVxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50W2luZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+Y291bnQgZWxlbWVudCcsZWxlbWVudClcblxuICAgICAgZm9yKGxldCBjYyBpbiB0aGlzLmNvbmZpZ0RhdGEuYXNwZWN0cmF0aW8pe1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdldjEnLGNjLGV2MSk7XG4gICAgICAgIGlmKHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnRbaW5kZXhdPT1udWxsKVxuICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50W2luZGV4XT1bXTsgXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnRbaW5kZXhdW2NjXSA9IGV2MTsgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50LCAnaW1nJywgZXYxKTtcblxuICAgICAgLyogQ2hlY2tpbmcgVmFsaWRhdGlvbiAqL1xuICAgICAgbGV0IHZhbGlkYXRlOiBhbnkgPSB0aGlzLmNoZWNraW5nVmFsaWRhdGlvbihlbGVtZW50KTtcbiAgICAgIGlmICh2YWxpZGF0ZS5zdGF0dXMpIHtcbiAgICAgICAgZWxlbWVudC52YWxpZCA9IHsgc3RhdHVzOiB0cnVlIH07XG4gICAgICAgIGVsZW1lbnQudXBsb2FkID0geyBzdGF0dXM6ICdzZWxlY3RlZCcgfTtcbiAgICAgICAgZWxlbWVudC52aWV3VXJsID0gJ2h0dHBzOi8vbG9hZGluZy5pby9zcGlubmVycy9kdWFsLXJpbmcvbGcuZHVhbC1yaW5nLWxvYWRlci5naWYnO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHRoaXMudmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudmFsaWQgPSB7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IHZhbGlkYXRlLm1lc3NhZ2UgfTtcbiAgICAgICAgZWxlbWVudC51cGxvYWQgPSB7IHN0YXR1czogJ3NlbGVjdGVkJyB9O1xuICAgICAgICBlbGVtZW50LnZpZXdVcmwgPSBudWxsO1xuXG4gICAgICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgICAgICBlbGVtZW50LnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG5cbiAgdmlld0ZpbGVzKGNvdW50LCBlbGVtZW50KSB7XG4gICAgbGV0IGZvcm1hdCA9IGVsZW1lbnQudHlwZS5zcGxpdChcIi9cIik7XG4gICAgaWYgKGZvcm1hdFswXSA9PSAnaW1hZ2UnKSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmZpbGVzW2NvdW50XTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbY291bnRdKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoX2V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbWdVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gaW1nVVJMO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVzW2NvdW50XS52aWV3VXJsID0gbnVsbDtcbiAgICAgIHRoaXMuZmlsZXNbY291bnRdLnZpZXdUZXh0ID0gZm9ybWF0WzFdO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNraW5nIFZhbGlkYXRpb24gKi9cbiAgY2hlY2tpbmdWYWxpZGF0aW9uKGVsZW1lbnQpIHtcbiAgICBsZXQgdmFsaWQ6IGFueSA9IHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiBudWxsIH07XG5cbiAgICAvKiBDaGVja2luZyBGaWxlIEZvcm1hdCAqL1xuICAgIGxldCBmb3JtYXQgPSBlbGVtZW50LnR5cGUuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBjaGVjayA9IHRoaXMuY29uZmlnRGF0YS5mb3JtYXQuaW5jbHVkZXMoZm9ybWF0WzFdKTtcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgdmFsaWQubWVzc2FnZSA9IGZvcm1hdFsxXS50b1VwcGVyQ2FzZSgpICsgXCIgZm9ybWF0IG5vdCBzdXBwb3J0ZWQuXCI7XG4gICAgICB0aGlzLm9wZW5TbmFja0Jhcihmb3JtYXRbMV0udG9VcHBlckNhc2UoKSArIFwiIGZvcm1hdCBub3Qgc3VwcG9ydGVkLlwiLCAnJyk7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG4gICAgLyogQ2hlY2tpbmcgRmlsZSBzaXplICovXG4gICAgaWYgKGVsZW1lbnQuc2l6ZSAvIDEwMDAgPiB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSkge1xuICAgICAgdmFsaWQuc3RhdHVzID0gZmFsc2U7XG4gICAgICB2YWxpZC5tZXNzYWdlID0gXCJGaWxlIHNpemUgdG9vIGxhcmdlLiBNYXhpbXVtIGZpbGUgc2l6ZSBsaW1pdDogXCIgKyB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSArIFwiIEtCLlwiO1xuICAgICAgdGhpcy5vcGVuU25hY2tCYXIoXCJGaWxlIHNpemUgdG9vIGxhcmdlLiBNYXhpbXVtIGZpbGUgc2l6ZSBsaW1pdDogXCIgKyB0aGlzLmNvbmZpZ0RhdGEuc2l6ZSArIFwiIEtCLlwiLCAnJyk7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkLnN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgLyogRmlsZSBVcGxvYWQgUHJvY2VzcyAqL1xuICB1cGxvYWRBbGwoZ2V0SW5kZXg6IGFueSA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XS52YWxpZC5zdGF0dXMgPT0gdHJ1ZSAmJiB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQuc3RhdHVzICE9ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy51cGxvYWRpbmcoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFVwbG9hZCAqL1xuICB1cGxvYWRpbmcoaW5kZXgpIHtcbiAgICB2YXIgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgIGZpbGU6IHRoaXMuZmlsZXNbaW5kZXhdLFxuICAgICAgdHlwZTogdGhpcy5jb25maWdEYXRhLnR5cGUsXG4gICAgICBwYXRoOiB0aGlzLmNvbmZpZ0RhdGEucGF0aCxcbiAgICAgIHByZWZpeDogdGhpcy5jb25maWdEYXRhLnByZWZpeCxcbiAgICAgIHVwbG9hZFR5cGU6IHRoaXMuY29uZmlnRGF0YS51cGxvYWRUeXBlLFxuICAgICAgY29udmVyc2lvbl9uZWVkZWQ6IHRoaXMuY29uZmlnRGF0YS5jb252ZXJzaW9uTmVlZGVkLFxuICAgICAgYnVja2V0bmFtZTogdGhpcy5jb25maWdEYXRhLmJ1Y2tldE5hbWVcblxuICAgIH1cblxuICAgIHZhciB1cmw6IHN0cmluZyA9IHRoaXMuY29uZmlnRGF0YS5iYXNlVXJsICsgdGhpcy5jb25maWdEYXRhLmVuZHBvaW50ICsgJz9wYXRoPScgKyB0aGlzLmNvbmZpZ0RhdGEucGF0aCArICcmcHJlZml4PScgKyB0aGlzLmNvbmZpZ0RhdGEucHJlZml4ICsgJyZ0eXBlPScgKyB0aGlzLmNvbmZpZ0RhdGEudHlwZSArICcmcmFuZD0nICsgaW5kZXg7XG4gICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS51cGxvYWQodXJsLCBwb3N0RGF0YSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgICBzd2l0Y2ggKHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0RhdGEuZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1N1Y2Nlc3NmdWxseSBVcGxvYWRlZCAhIScsICdVbmRvJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS51cGxvYWQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHJlc3VsdC5kYXRhLCAnJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXBsb2FkID0gcmVzdWx0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB7IHN0YXR1czogJ2Vycm9yJyB9O1xuICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignQW4gZXJyb3Igb2NjdXJyZWQgISEnLCAnUmV0cnknKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyogUmVtb3ZlIEZpbGVzICovXG4gIHJlbW92ZUZpbGVzKGluZGV4OiBhbnkgPSBudWxsKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignU3VjY2Vzc2Z1bGx5IFJlbW92ZSAhIScsICcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIFNuYWNrIEJhciAqL25hbWVcbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cblxuICAvKiBEaWFsb2cgQm94ICovXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0JveENvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiTWVzc2FnZVwiIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIERlbGV0ZSBhbGwgc2VsZWN0ZWQgZmlsZXMgKi9cbiAgZGVsZXRlQWxsKCkge1xuICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZmlsZXMuc3BsaWNlKDAsIHRoaXMuZmlsZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoJ1N1Y2Nlc3NmdWxseSBSZW1vdmUgISEnLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiBQcmV2aWV3IEZpbGVzICovXG4gIHByZXZpZXdGaWxlcyhpbmRleCkge1xuICAgIHZhciBtaW1lVHlwZSA9IHRoaXMuZmlsZXNbaW5kZXhdLnR5cGU7XG4gICAgaWYgKG1pbWVUeXBlLm1hdGNoKC9pbWFnZVxcLyovKSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wZW5TbmFja0JhcignUHJldmlldyBub3Qgc3VwcG9ydGVkLicsICcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBsZXQgaW1hZ2VQYXRoID0gdGhpcy5maWxlc1tpbmRleF07XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlc1tpbmRleF0pO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoX2V2ZW50KSA9PiB7XG4gICAgICBsZXQgaW1nVVJMID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUHJldmlld0ZpbGVzQ29tcG9uZW50LCB7XG4gICAgICAgIGRhdGE6IHsgaW1nVVJMOiBpbWdVUkwgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuXG5cblxuXG5cblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZUNoYW5nZUV2ZW50JywgZXZlbnQpXG4gICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGV2ZW50O1xuICAgIGNvbnNvbGUubG9nKCdmaWxlQ2hhbmdlRXZlbnQnLCBldmVudClcblxuXG4gIH1cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCwgaTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJz4+Pj4+Pj4+PicsZXZlbnQsaSlcbiAgICB0aGlzLmNyb3BwZWRJbWFnZVtpXSA9IGV2ZW50LmJhc2U2NDtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VDcm9wcGVkJywgdGhpcy5jcm9wcGVkSW1hZ2UpOyAgXG4gICAgdGhpcy5jb25maWdEYXRhLmNyb3BwZWRmaWxlcz10aGlzLmNyb3BwZWRJbWFnZTtcbiAgICAvLyBjb25zb2xlLmxvZygnaW1hZ2VDci4uPiAnLCAgIHRoaXMuY29uZmlnRGF0YS5jcm9wcGVkZmlsZXMpO1xuXG4gIH1cbiAgaW1hZ2VMb2FkZWQoKSB7XG4gICAgLy8gc2hvdyBjcm9wcGVyXG4gIH1cbiAgY3JvcHBlclJlYWR5KCkge1xuICAgIC8vIGNyb3BwZXIgcmVhZHlcbiAgfVxuICBsb2FkSW1hZ2VGYWlsZWQoKSB7XG4gICAgLy8gc2hvdyBtZXNzYWdlXG4gIH1cblxuXG4gIC8vIGdldGRhdGEoKXtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0RhdGEpXG4gIC8vIH1cblxuXG5cblxuXG5cblxufVxuIl19