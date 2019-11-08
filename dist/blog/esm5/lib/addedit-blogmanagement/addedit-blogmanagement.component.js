/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
    /** @type {?} */
    DialogData.prototype.videourl;
}
var AddeditBlogmanagementComponent = /** @class */ (function () {
    // -----------------------------------------------------------------------------------------
    function AddeditBlogmanagementComponent(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Description*',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [''];
        this.myControl = new FormControl();
        this.tags_array = [];
        this.testTag = [];
        this.flag = false;
        this.images_array = [];
        this.images_array_edit = [];
        this.file_array = [];
        this.file_array_edit = [];
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required]],
            blogcat: ['',],
            description: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: ['true',],
            // metatitle: ['', [Validators.required]],
            // metadesc: ['', [Validators.required]],
            author: ['', [Validators.required]],
            credentials: this.formBuilder.array([]),
            tags: [''],
            blogs_image: [''],
            blogs_file: ['']
        });
    }
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "config", {
        // -----------------------------------------------------------------------
        // ----------------------------------------------Input Section-----------------------
        // Input receiving from add/edit app 
        set: 
        // -----------------------------------------------------------------------
        // ----------------------------------------------Input Section-----------------------
        // Input receiving from add/edit app 
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrl
         * @return {?}
         */
        function (serverUrl) {
            this.serverUrlData = (serverUrl) || '<no name set>';
            this.serverUrlData = serverUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "listRoute", {
        set: /**
         * @param {?} listval
         * @return {?}
         */
        function (listval) {
            this.listUrl = (listval) || '<no name set>';
            this.listUrl = listval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setaddEndpoint(_this.addEndpointData);
        }), 50);
        /**Observable end here**/
        if (!this.activatedRoute.snapshot.params.id)
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.addYoutubeVideo('', '', '');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getTagsCount();
        }), 50);
        if (this.action2 == 'edit') {
            this.headerText = "Edit Blog Management Data";
            this.flag = true;
            this.params_id = this.setData._id;
            this.buttonText = "Update";
            this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
            this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
            this.blogManagementForm.controls['description'].patchValue(this.setData.description);
            this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
            this.blogManagementForm.controls['status'].patchValue(this.setData.status);
            this.blogManagementForm.controls['metatitle'].patchValue(this.setData.metatitle);
            this.blogManagementForm.controls['metadesc'].patchValue(this.setData.metadesc);
            this.blogManagementForm.controls['blogs_image'].patchValue(this.setData.blogs_image);
            this.blogManagementForm.controls['blogs_file'].patchValue(this.setData.blogs_file);
            this.blogManagementForm.controls['author'].patchValue(this.setData.author);
            /*Image works*/
            for (var i = 0; i < this.setData.blogs_image.length; i++) {
                this.img_var = this.setData.blogs_image[i].basepath + this.setData.blogs_image[i].image;
                this.image_name = this.setData.blogs_image[i].name;
                this.image_type = this.setData.blogs_image[i].type;
                this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
                this.images_array.push({
                    "basepath": this.setData.blogs_image[i].basepath,
                    "image": this.setData.blogs_image[i].image,
                    "name": this.setData.blogs_image[i].name,
                    "type": this.setData.blogs_image[i].type
                });
            }
            /*File works*/
            for (var i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
                this.file_array_edit.push(this.setData.blogs_file[i2].name);
                this.file_array.push({
                    "basepath": this.setData.blogs_file[i2].basepath,
                    "file": this.setData.blogs_file[i2].file,
                    "name": this.setData.blogs_file[i2].name,
                    "type": this.setData.blogs_file[i2].type
                });
            }
            for (var vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    _this.tags_array.push(element);
                }));
        }
        // ------------------------------Autocomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
        // ------------------------------------------------------------------------------------------
    };
    // ------------------------------------_Filter FUnction----------------------------------
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype._filter = 
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toLowerCase().indexOf(filterValue) === 0; }));
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "action", {
        // --------------------------------------------------------------------------------------------
        set: 
        // --------------------------------------------------------------------------------------------
        /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.action2 = action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "imageUpload", {
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
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "fileUpload", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.fileConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // ------------------------------------MODAL Function--------------------------------------------
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.openDialog = 
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '45%',
            height: '500px',
            data: { msg: x }
        });
        // this.sanitizer.bypassSecurityTrustResourceUrl
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.trackByFn = 
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.addYoutubeVideo = 
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    function (vid_url, vid_tit, vid_desc) {
        /** @type {?} */
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [vid_url],
            video_title: [vid_tit],
            video_description: [vid_desc]
        }));
    };
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.deleteCreds = 
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    };
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.getBlogCategory = 
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.blogCategoryArray = result.res;
        }));
    };
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.getTagsCount = 
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                _this.options = result.res[0].tags;
        }));
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "singleData", {
        // ----------------------------------------------------------------------------------
        //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
        set: 
        // ----------------------------------------------------------------------------------
        //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
        /**
         * @param {?} editDatavals
         * @return {?}
         */
        function (editDatavals) {
            this.setData = editDatavals;
        },
        enumerable: true,
        configurable: true
    });
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.onSubmit = 
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            for (var loop in this.imageConfigData.files) {
                this.images_array =
                    this.images_array.concat({
                        "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[loop].name,
                        "type": this.imageConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_image = this.images_array;
        }
        else {
            this.blogManagementForm.value.blogs_image = false;
        }
        /*_____________________________________________________________________________________*/
        /*_________________________________________FILE UPLOADER_______________________________*/
        if (this.fileConfigData) {
            for (var loop in this.fileConfigData.files) {
                this.file_array =
                    this.file_array.concat({
                        "basepath": this.fileConfigData.files[loop].upload.data.basepath + '/' + this.fileConfigData.path + '/',
                        "file": this.fileConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.fileConfigData.files[loop].name,
                        "type": this.fileConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_file = this.file_array;
        }
        else {
            this.blogManagementForm.value.blogs_file = false;
        }
        // ___________________________________________________________________________________
        this.blogManagementForm.value.tags = this.tags_array;
        this.blogManagementForm.controls['description'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = parseInt("1");
            else
                this.blogManagementForm.value.status = parseInt("0");
            if (this.params_id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "description": this.blogManagementForm.value.description,
                        "priority": this.blogManagementForm.value.priority,
                        "status": this.blogManagementForm.value.status,
                        "metatitle": this.blogManagementForm.value.metatitle,
                        "metadesc": this.blogManagementForm.value.metadesc,
                        "tags": this.blogManagementForm.value.tags,
                        "credentials": this.blogManagementForm.value.credentials,
                        "blogs_image": this.blogManagementForm.value.blogs_image,
                        "blogs_file": this.blogManagementForm.value.blogs_file,
                        "author": this.blogManagementForm.value.author
                    },
                    "sourceobj": ["blogcat"]
                };
            }
            else {
                this.isSubmitted = true;
                /** @type {?} */
                var data;
                data = {
                    //add part
                    "source": "blogs",
                    "data": this.blogManagementForm.value,
                    "sourceobj": ["blogcat"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result;
                result = response;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listUrl);
                }), 3000);
            }));
        }
        else
            console.log("Form is invalid");
    };
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "onSignUpValidate", {
        // -----------------------------------------------------------------------------------
        get: 
        // -----------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        function () {
            return this.blogManagementForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.inputBlur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    };
    // -------------------------------Select Tags AutoComplete Field-----------------------
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.showval = 
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    };
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.preview_video = 
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    function (video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    };
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clearTags = 
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tags_array.splice(index, 1);
    };
    // -------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.openSnackBar = 
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    };
    // --------------------------------------Blogs Image clear-------------------------------
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clear_image = 
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.images_array.pop(this.setData.blogs_image[index]);
        this.images_array_edit.splice(index, 1);
    };
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.clearFileTags = 
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.file_array.pop(this.setData.blogs_file[index]);
        this.file_array_edit.splice(index, 1);
    };
    AddeditBlogmanagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit-blogmanagement',
                    template: "<mat-card>\r\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\r\n    </mat-toolbar>\r\n\r\n\r\n\r\n    <span class=\"formspan\">\r\n        <mat-card-content class=\"example-container\">\r\n            <form [formGroup]=\"blogManagementForm\">\r\n                <!-- ----------------------------Blog title---------------------------- -->\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\r\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                   \r\n\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------ -->\r\n\r\n\r\n                <!-- -------------------------Blog Category---------------------------- -->\r\n                <mat-form-field>\r\n                    <mat-label>Blog Category</mat-label>\r\n                    <select matNativeControl required formControlName=\"blogcat\"\r\n                      >\r\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- -------------------------Author---------------------------- -->\r\n                <mat-form-field>\r\n                    \r\n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\r\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\r\n                        Blog title is required.</mat-error>\r\n\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['author'].valid && !blogManagementForm.controls['author'].errors.required\">\r\n                        Max length exceeded</mat-error>\r\n                </mat-form-field><br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n                <!-- ------------------------------------Blog Content------------------ -->\r\n\r\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\r\n                  ></ckeditor>\r\n                <mat-error\r\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\r\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\r\n                    Blog title is required.</mat-error>\r\n\r\n              \r\n                <br>\r\n                <!-- -----------------------------------------------------------------  -->\r\n\r\n\r\n\r\n\r\n                <!-- -----------------------------------Priority------------------------ -->\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\r\n                        >\r\n\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\r\n                        Priority is required.</mat-error>\r\n\r\n                </mat-form-field><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Status---------------------------- -->\r\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n                <!-- --------------------------------Meta title-------------------------  -->\r\n                <!-- <mat-form-field>\r\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\r\n                       >\r\n                    <mat-error\r\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\r\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\r\n                        Meta title is required.</mat-error>\r\n\r\n                   \r\n                </mat-form-field> -->\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- ----------------------------------Meta Description------------------ -->\r\n                <!-- <mat-form-field>\r\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\r\n                      ></textarea>\r\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\r\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\r\n                        Meta description is required.</mat-error>\r\n\r\n                </mat-form-field><br> -->\r\n                <!-- -------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n                <!-- --------------------------------------Video URL--------------------- -->\r\n                <mat-label>Attach Videos:</mat-label>\r\n                <div formArrayName=\"credentials\"\r\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\r\n                    <ng-container [formGroupName]=\"i\">\r\n                        <mat-form-field class=\"video_embed\">\r\n                            <input type=\"text\" matInput formControlName=\"video_url\">\r\n                            <span matPrefix>{{ video_prefix }}</span>\r\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\r\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\r\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\r\n                                contact_support\r\n                            </i>\r\n\r\n\r\n                        </mat-form-field>\r\n\r\n\r\n                        <!-- Video Title  -->\r\n                        <mat-form-field>\r\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\r\n                            <mat-icon matSuffix>title</mat-icon>\r\n                        </mat-form-field>\r\n                        <!-- Video Description  -->\r\n                        <mat-form-field>\r\n\r\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\r\n                                placeholder=\"Video description\"></textarea>\r\n                            <mat-icon matSuffix>description</mat-icon>\r\n                        </mat-form-field>\r\n\r\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\r\n                            <mat-icon matSuffix>add_box</mat-icon>\r\n                        </button>\r\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\r\n                                <mat-icon matSuffix>delete</mat-icon>\r\n                            </button></span>\r\n                    </ng-container>\r\n                </div><br>\r\n                <!-- ------------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- -----------------------------Multi Tags---------------------------- -->\r\n                <div>\r\n                    <mat-label>Tags:</mat-label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\r\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\r\n\r\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                {{option}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\r\n        && blogManagementForm.controls['tags'].errors.required\">\r\n                            Tags are required.</mat-error>\r\n\r\n                    </mat-form-field>\r\n                    <div>\r\n\r\n                        <mat-chip-list class=\"mat_chip\">\r\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\r\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\r\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\r\n                            </mat-chip>\r\n                        </mat-chip-list>\r\n\r\n                    </div>\r\n                </div>\r\n                <!-- ----------------------------------------------------------------- -->\r\n\r\n\r\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\r\n                <h1>Blogs Image:</h1>\r\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <ng-container *ngIf=\"flag==true\">\r\n                    <!-- CARD VIEW  -->\r\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\r\n                        <mat-card class=\"example-card\">\r\n                            <img mat-card-image [src]=\"img.img_var\">\r\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\r\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\r\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\r\n\r\n                        </mat-card>\r\n                    </mat-card-content>\r\n                    <!-- ---------  -->\r\n                </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                <!-- ---------------------------------------------File Uploader--------------------- -->\r\n                <h1>Blogs File:</h1>\r\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\r\n                <!-- -------------------------------------------------------------------------------- -->\r\n\r\n                <mat-chip-list class=\"mat_chip\">\r\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\r\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n\r\n\r\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\r\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\r\n\r\n            </form>\r\n        </mat-card-content>\r\n    </span>\r\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditBlogmanagementComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ApiService },
        { type: ActivatedRoute },
        { type: Router },
        { type: FormBuilder },
        { type: MatDialog },
        { type: MatSnackBar }
    ]; };
    AddeditBlogmanagementComponent.propDecorators = {
        config: [{ type: Input }],
        serverUrl: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        listRoute: [{ type: Input }],
        action: [{ type: Input }],
        imageUpload: [{ type: Input }],
        fileUpload: [{ type: Input }],
        singleData: [{ type: Input }]
    };
    return AddeditBlogmanagementComponent;
}());
export { AddeditBlogmanagementComponent };
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.Editor;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.headerText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.buttonText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogCategoryArray;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.configData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogManagementForm;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.serverUrlData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.addEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.isSubmitted;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.video_prefix;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.options;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.filteredOptions;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.myControl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.tags_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.params_id;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.setData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.messageText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.listUrl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.testTag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.img_var;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_name;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_type;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.flag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.fileConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.action2;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.apiservice;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.formBuilder;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialog;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.snackBar;
}
// ------------------------------------Modal Component Works------------------------------
var Modal = /** @class */ (function () {
    function Modal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
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
                    template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\r\n<div mat-dialog-content>\r\n \r\n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \r\n  \r\n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n "
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
    Modal.prototype.videoid;
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
// ---------------------------------------------------------------------------------------
var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
    }
    YoutubeComponent.decorators = [
        { type: Component, args: [{
                    template: "<span class=\"log_image\">\r\n    <img src=\"/assets/images/youtube-link.jpg\">\r\n</span>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    return YoutubeComponent;
}());
export { YoutubeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUluRSxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBS2hCO0lBaUdFLDRGQUE0RjtJQUU1Rix3Q0FBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxjQUE4QixFQUFVLE1BQWMsRUFDdEQsV0FBd0IsRUFBUyxNQUFpQixFQUNuRCxRQUFxQjtRQUhWLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxXQUFN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QUFpQjs7SUFDakIsaURBQWE7O0lBQ2IsaURBQWtCOztJQUNsQix5REFBcUI7O0lBQ3JCLGlEQUFhOztJQUNiLGlEQUFhOztJQUNiLG9EQUFnQjs7SUFDaEIsb0RBQWdCOztJQUNoQiw4Q0FBc0I7O0lBQ3RCLHNEQUF1Qjs7SUFDdkIsMkRBQTRCOztJQUM1Qix3REFBb0I7O0lBQ3BCLG9EQUFxQjs7SUFDckIseURBQTBCOztJQUMxQixpREFBWTs7Ozs7SUE2Q0EsOENBQXdCOzs7OztJQUFFLG9EQUE4Qjs7Ozs7SUFDbEUsd0RBQXNDOzs7OztJQUFFLGdEQUFzQjs7Ozs7SUFDOUQscURBQWdDOztJQUFFLGdEQUF3Qjs7SUFDMUQsa0RBQTRCOzs7QUEwYmhDO0lBT0UsZUFDUyxTQUE4QixFQUNMLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQ0wsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpsRCxZQUFPLEdBQVEsRUFBRSxDQUFDO0lBT2xCLENBQUM7Ozs7SUFFRCx5QkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHVRQUF5QjtpQkFDMUI7Ozs7Z0JBaGpCeUIsWUFBWTtnREFzakJqQyxNQUFNLFNBQUMsZUFBZTs7SUFRM0IsWUFBQztDQUFBLEFBakJELElBaUJDO1NBYlksS0FBSzs7O0lBQ2hCLHdCQUFrQjs7SUFHaEIsMEJBQXFDOztJQUNyQyxxQkFBZ0Q7OztBQVVwRDtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNULHNHQUE4Qjs7aUJBRS9COztJQUdELHVCQUFDO0NBQUEsQUFORCxJQU1DO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICBtc2c6IGFueTtcclxuICB2aWRlb3VybDogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xyXG4gIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcclxuICBlZGl0b3JDb25maWcgPSB7XHJcbiAgICBwbGFjZWhvbGRlcjogJ0Rlc2NyaXB0aW9uKicsXHJcbiAgfTtcclxuICBwdWJsaWMgbW9kZWwgPSB7XHJcbiAgICBlZGl0b3JEYXRhOiAnJ1xyXG4gIH07XHJcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcclxuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gJ1NVQk1JVCc7XHJcbiAgcHVibGljIGJsb2dDYXRlZ29yeUFycmF5OiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xyXG4gIGJsb2dNYW5hZ2VtZW50Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XHJcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcclxuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnk7XHJcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XHJcbiAgb3B0aW9uczogYW55ID0gWycnXTtcclxuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIHRhZ3NfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGRpYWxvZ1JlZjogYW55O1xyXG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcclxuICBzZXREYXRhOiBhbnk7XHJcbiAgbWVzc2FnZVRleHQ6IGFueTtcclxuICBsaXN0VXJsOiBhbnk7XHJcbiAgdGVzdFRhZzogYW55ID0gW107XHJcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XHJcbiAgRXJyQ29kZTogYW55O1xyXG4gIGltZ192YXI6IGFueTtcclxuICBpbWFnZV9uYW1lOiBhbnk7XHJcbiAgaW1hZ2VfdHlwZTogYW55O1xyXG4gIGZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbWFnZXNfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGltYWdlc19hcnJheV9lZGl0OiBhbnkgPSBbXTtcclxuICBmaWxlQ29uZmlnRGF0YTogYW55O1xyXG4gIGZpbGVfYXJyYXk6IGFueSA9IFtdO1xyXG4gIGZpbGVfYXJyYXlfZWRpdDogYW55ID0gW107XHJcbiAgYWN0aW9uMjphbnk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnB1dCBTZWN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gSW5wdXQgcmVjZWl2aW5nIGZyb20gYWRkL2VkaXQgYXBwIFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSBzZXJ2ZXJVcmw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xyXG5cclxuXHJcbiAgfVxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy9zZXR0aW5nIHRoZSBsaXN0aW5nIHVybCBmb3JtIHRoZSBhcHBsaWNhdGlvblxyXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmxpc3RVcmwgPSAobGlzdHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5saXN0VXJsID0gbGlzdHZhbDtcclxuXHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhcGlzZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xyXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgYmxvZ3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIGJsb2djYXQ6IFsnJywgXSxcclxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgc3RhdHVzOiBbJ3RydWUnLF0sXHJcbiAgICAgIC8vIG1ldGF0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxyXG4gICAgICAvLyBtZXRhZGVzYzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxyXG4gICAgICBhdXRob3I6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcclxuICAgICAgdGFnczogWycnXSxcclxuICAgICAgYmxvZ3NfaW1hZ2U6IFsnJ10sXHJcbiAgICAgIGJsb2dzX2ZpbGU6IFsnJ11cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLyoqT2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXHJcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XHJcbiAgICB9LCA1MCk7XHJcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XHJcbiAgICB9LCA1MCk7XHJcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XHJcbiAgICB9LCA1MCk7XHJcbiAgICAvKipPYnNlcnZhYmxlIGVuZCBoZXJlKiovXHJcblxyXG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZClcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRZb3V0dWJlVmlkZW8oJycsICcnLCAnJyk7XHJcbiAgICAgIH0sIDUwMClcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRCbG9nQ2F0ZWdvcnkoKTtcclxuICAgIH0sIDUwKVxyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRUYWdzQ291bnQoKTtcclxuICAgIH0sIDUwKVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5hY3Rpb24yPT0nZWRpdCcpIHtcclxuICAgICAgdGhpcy5oZWFkZXJUZXh0PVwiRWRpdCBCbG9nIE1hbmFnZW1lbnQgRGF0YVwiO1xyXG4gICAgICB0aGlzLmZsYWcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhcmFtc19pZCA9IHRoaXMuc2V0RGF0YS5faWQ7XHJcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9ndGl0bGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9ndGl0bGUpO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ2NhdCddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2djYXQpO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydwcmlvcml0eSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnByaW9yaXR5KTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3N0YXR1cyddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnN0YXR1cyk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydtZXRhdGl0bGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5tZXRhdGl0bGUpO1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snbWV0YWRlc2MnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5tZXRhZGVzYyk7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nc19pbWFnZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlKTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2dzX2ZpbGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlKTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2F1dGhvciddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmF1dGhvcik7XHJcblxyXG5cclxuICAgICAgLypJbWFnZSB3b3JrcyovXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5pbWdfdmFyID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmJhc2VwYXRoICsgdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VfbmFtZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VfdHlwZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS50eXBlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQucHVzaCh7ICdpbWdfdmFyJzogdGhpcy5pbWdfdmFyLCAnaW1hZ2VfbmFtZSc6IHRoaXMuaW1hZ2VfbmFtZSwgJ2ltYWdlX3R5cGUnOiB0aGlzLmltYWdlX3R5cGUgfSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5iYXNlcGF0aCxcclxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qRmlsZSB3b3JrcyovXHJcbiAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZS5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgICB0aGlzLmZpbGVfYXJyYXlfZWRpdC5wdXNoKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5uYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGVfYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5iYXNlcGF0aCxcclxuICAgICAgICAgIFwiZmlsZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0uZmlsZSxcclxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSxcclxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0udHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZm9yIChjb25zdCB2aWQgaW4gdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgdGhpcy5hZGRZb3V0dWJlVmlkZW8odGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fdXJsLFxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fdGl0bGUsXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb19kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNldERhdGEudGFncyAhPSBcIlwiKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YS50YWdzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRhZ3NfYXJyYXkucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvY29tcGxldGUgRnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLV9GaWx0ZXIgRlVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aW9uKGFjdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLmFjdGlvbjIgPSBhY3Rpb247XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcclxuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZmlsZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5maWxlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1PREFMIEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XHJcbiAgICAgIHdpZHRoOiAnNDUlJyxcclxuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsXHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRWRpYXRibGUgbWF0ZXJpYWwgRm9ybSBBcnJheS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB0cmFja0J5Rm4oaW5kZXgpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFkZCBDcmVkZW50aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYWRkWW91dHViZVZpZGVvKHZpZF91cmw6IGFueSwgdmlkX3RpdDogYW55LCB2aWRfZGVzYzogYW55KSB7XHJcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLmNyZWRlbnRpYWxzIGFzIEZvcm1BcnJheTtcclxuICAgIGNyZWRzLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIHZpZGVvX3VybDogW3ZpZF91cmxdLFxyXG4gICAgICB2aWRlb190aXRsZTogW3ZpZF90aXRdLFxyXG4gICAgICB2aWRlb19kZXNjcmlwdGlvbjogW3ZpZF9kZXNjXVxyXG4gICAgfSkpO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRGVsZXRlIENyZWRldGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tXHJcbiAgZGVsZXRlQ3JlZHMoKSB7XHJcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLmNyZWRlbnRpYWxzIGFzIEZvcm1BcnJheTtcclxuICAgIGNyZWRzLnJlbW92ZUF0KDEpO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldCBCbG9nIENhdGVnb3J5IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBnZXRCbG9nQ2F0ZWdvcnkoKSB7XHJcbiAgICB2YXIgZGF0YTogYW55O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgJ3NvdXJjZSc6ICdibG9nX2NhdGVnb3J5J1xyXG4gICAgfTtcclxuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgIHRoaXMuYmxvZ0NhdGVnb3J5QXJyYXkgPSByZXN1bHQucmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UQUdTIHZpZXcgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGdldFRhZ3NDb3VudCgpIHtcclxuICAgIHZhciBkYXRhOiBhbnk7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAnc291cmNlJzogJ3RhZ3NfdmlldydcclxuICAgIH07XHJcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0LnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXNbMF0gIT0gbnVsbCkgICAgICBcclxuICAgICAgICB0aGlzLm9wdGlvbnM9cmVzdWx0LnJlc1swXS50YWdzO1xyXG4gICAgICBcclxuICAgICAgIFxyXG5cclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRURJVCBSRVNPTFZFIEZVTkNUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQElucHV0KCkgICAgICAgICAgLy9zaW5nbGUgZGF0YSBmcm9tIHJlc29sdmUgY2FsbCAgJiBzZXQgdGhlIHZhbHVlIGZvciBlZGl0XHJcbiAgc2V0IHNpbmdsZURhdGEoZWRpdERhdGF2YWxzOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSA9IGVkaXREYXRhdmFscztcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNVQk1JVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBvblN1Ym1pdCgpIHtcclxuICAgICBcclxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19JTUFHRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5ID1cclxuICAgICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LmNvbmNhdCh7XHJcbiAgICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udHlwZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfaW1hZ2UgPSB0aGlzLmltYWdlc19hcnJheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxuXHJcbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fRklMRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGVDb25maWdEYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzKSB7XHJcbiAgICAgICAgdGhpcy5maWxlX2FycmF5ID1cclxuICAgICAgICAgIHRoaXMuZmlsZV9hcnJheS5jb25jYXQoe1xyXG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmZpbGVDb25maWdEYXRhLnBhdGggKyAnLycsXHJcbiAgICAgICAgICAgIFwiZmlsZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLm5hbWUsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSB0aGlzLmZpbGVfYXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5cclxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XHJcblxyXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ubWFya0FzVG91Y2hlZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWxpZCkge1xyXG4gICAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzKVxyXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1zX2lkIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlVGV4dCA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XHJcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyA9IHRoaXMudGFnc19hcnJheTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxyXG4gICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcclxuICAgICAgICAgICAgXCJibG9ndGl0bGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3RpdGxlLFxyXG4gICAgICAgICAgICBcImJsb2djYXRcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ2NhdCxcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXCJwcmlvcml0eVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5wcmlvcml0eSxcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzLFxyXG4gICAgICAgICAgICBcIm1ldGF0aXRsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5tZXRhdGl0bGUsXHJcbiAgICAgICAgICAgIFwibWV0YWRlc2NcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUubWV0YWRlc2MsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzLFxyXG4gICAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICBcImJsb2dzX2ltYWdlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlLFxyXG4gICAgICAgICAgICBcImJsb2dzX2ZpbGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSxcclxuICAgICAgICAgICAgXCJhdXRob3JcIjp0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5hdXRob3JcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGRhdGE6IGFueTtcclxuICAgICAgICBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGQgcGFydFxyXG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxyXG4gICAgICAgICAgXCJkYXRhXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLFxyXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXBpc2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxpc3RVcmwpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBpcyBpbnZhbGlkXCIpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbiAgZ2V0IG9uU2lnblVwVmFsaWRhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VsZWN0IFRhZ3MgQXV0b0NvbXBsZXRlIEZpZWxkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzaG93dmFsKGV2ZW50OiBhbnkpIHtcclxuICAgIFxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3RhZ3MnXS5wYXRjaFZhbHVlKFwiXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVklERU8gVVJMIFBSRVZJRVctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcclxuICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5jcmVkZW50aWFsc1t2aWRlb19pbmRleF0udmlkZW9fdXJsKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xlYXJUYWdzKGluZGV4KSB7XHJcbiAgICB0aGlzLnRhZ3NfYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBvcGVuU25hY2tCYXIoKSB7XHJcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFlvdXR1YmVDb21wb25lbnQsIHtcclxuICAgICAgLy8gZHVyYXRpb246IDE1MDAsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgSW1hZ2UgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xlYXJfaW1hZ2UoaW5kZXgpIHtcclxuICAgIHRoaXMuaW1hZ2VzX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaW5kZXhdKTtcclxuICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgRmlsZSBjbGVhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbGVhckZpbGVUYWdzKGluZGV4KSB7XHJcbiAgICB0aGlzLmZpbGVfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2luZGV4XSk7XHJcbiAgICB0aGlzLmZpbGVfYXJyYXlfZWRpdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1vZGFsIENvbXBvbmVudCBXb3Jrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICB2aWRlb2lkOiBhbnkgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWw+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJ3lvdXR1YmV0aXAuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQge1xyXG5cclxufVxyXG5cclxuIl19