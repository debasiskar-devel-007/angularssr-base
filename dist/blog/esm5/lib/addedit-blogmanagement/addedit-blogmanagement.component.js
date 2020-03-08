/**
 * @fileoverview added by tsickle
 * Generated from: lib/addedit-blogmanagement/addedit-blogmanagement.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
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
        /**ckeditor start here*/
        // public Editor = ClassicEditor;  //for ckeditor
        // editorConfig = {
        //   placeholder: 'Description*',
        // };
        // public model = {
        //   editorData: ''
        // };
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
        this.editorconfig = {};
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required]],
            blogcat: ['',],
            description: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: ['true',],
            // metatitle: ['', [Validators.required]],
            // metadesc: ['', [Validators.required]],
            author: ['', [Validators.required]],
            video: this.formBuilder.array([]),
            tags: [''],
            blogs_image: [''],
            blogs_file: ['']
        });
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
        if (this.action2 != 'edit')
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
            for (var vid in this.setData.video) {
                this.addYoutubeVideo(this.setData.video[vid].video_url, this.setData.video[vid].video_title, this.setData.video[vid].video_description);
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
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.video));
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
        var creds = (/** @type {?} */ (this.blogManagementForm.controls.video));
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
        this.blogManagementForm.controls['blogtitle'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = 1;
            else
                this.blogManagementForm.value.status = 0;
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
                        "tags": this.blogManagementForm.value.tags,
                        "video": this.blogManagementForm.value.video,
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
        if (event.keyCode == 13 || event.keyCode == 32) {
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
        this.openDialog(this.blogManagementForm.value.video[video_index].video_url);
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
                    template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                   \n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl required formControlName=\"blogcat\"\n                      >\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\n                        </option>\n                    </select>\n\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    \n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Author is required.</mat-error>\n\n                    \n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n                  ></ckeditor> -->\n                  <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n                </ck-editor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog description is required.</mat-error>\n\n              \n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <!-- <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                   \n                </mat-form-field> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <!-- <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                </mat-form-field><br> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"video\"\n                    *ngFor=\"let creds of blogManagementForm.controls.video?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n        && blogManagementForm.controls['tags'].errors.required\">\n                            Tags are required.</mat-error>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                        <mat-card class=\"example-card\">\n                            <img mat-card-image [src]=\"img.img_var\">\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
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
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.editorconfig;
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
        console.warn('video modal', data);
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
                    template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
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
                    template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    return YoutubeComponent;
}());
export { YoutubeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtoRCxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBS2hCO0lBaUdFLDRGQUE0RjtJQUU1Rix3Q0FBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxjQUE4QixFQUFVLE1BQWMsRUFDdEQsV0FBd0IsRUFBUyxNQUFpQixFQUNuRCxRQUFxQjtRQUhWLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25ELGFB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UyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7UUFKbEQsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUtkLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBRXBDLENBQUM7Ozs7SUFFRCx5QkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLCtPQUF5QjtpQkFDMUI7Ozs7Z0JBaGpCeUIsWUFBWTtnREFzakJqQyxNQUFNLFNBQUMsZUFBZTs7SUFRM0IsWUFBQztDQUFBLEFBakJELElBaUJDO1NBYlksS0FBSzs7O0lBQ2hCLHdCQUFrQjs7SUFHaEIsMEJBQXFDOztJQUNyQyxxQkFBZ0Q7OztBQVVwRDtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNULGtHQUE4Qjs7aUJBRS9COztJQUdELHVCQUFDO0NBQUEsQUFORCxJQU1DO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IGFueTtcbiAgdmlkZW91cmw6IGFueTtcbn1cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LWJsb2dtYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICAvLyBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIC8vIGVkaXRvckNvbmZpZyA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ0Rlc2NyaXB0aW9uKicsXG4gIC8vIH07XG4gIC8vIHB1YmxpYyBtb2RlbCA9IHtcbiAgLy8gICBlZGl0b3JEYXRhOiAnJ1xuICAvLyB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWNsYXJhdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdTVUJNSVQnO1xuICBwdWJsaWMgYmxvZ0NhdGVnb3J5QXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBibG9nTWFuYWdlbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XG4gIG9wdGlvbnM6IGFueSA9IFsnJ107XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICB0YWdzX2FycmF5OiBhbnkgPSBbXTtcbiAgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcbiAgc2V0RGF0YTogYW55O1xuICBtZXNzYWdlVGV4dDogYW55O1xuICBsaXN0VXJsOiBhbnk7XG4gIHRlc3RUYWc6IGFueSA9IFtdO1xuICBpbWFnZUNvbmZpZ0RhdGE6IGFueTtcbiAgRXJyQ29kZTogYW55O1xuICBpbWdfdmFyOiBhbnk7XG4gIGltYWdlX25hbWU6IGFueTtcbiAgaW1hZ2VfdHlwZTogYW55O1xuICBmbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlc19hcnJheTogYW55ID0gW107XG4gIGltYWdlc19hcnJheV9lZGl0OiBhbnkgPSBbXTtcbiAgZmlsZUNvbmZpZ0RhdGE6IGFueTtcbiAgZmlsZV9hcnJheTogYW55ID0gW107XG4gIGZpbGVfYXJyYXlfZWRpdDogYW55ID0gW107XG4gIGFjdGlvbjI6YW55O1xuICBlZGl0b3Jjb25maWc6YW55PXt9O1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlucHV0IFNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElucHV0IHJlY2VpdmluZyBmcm9tIGFkZC9lZGl0IGFwcCBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAvL3NldHRpbmcgdGhlIGxpc3RpbmcgdXJsIGZvcm0gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0VXJsID0gKGxpc3R2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RVcmwgPSBsaXN0dmFsO1xuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXBpc2VydmljZTogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYmxvZ3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBibG9nY2F0OiBbJycsIF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHN0YXR1czogWyd0cnVlJyxdLFxuICAgICAgLy8gbWV0YXRpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAvLyBtZXRhZGVzYzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYXV0aG9yOlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgdmlkZW86IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10pLFxuICAgICAgdGFnczogWycnXSxcbiAgICAgIGJsb2dzX2ltYWdlOiBbJyddLFxuICAgICAgYmxvZ3NfZmlsZTogWycnXVxuICAgIH0pO1xuICAgIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKipPYnNlcnZhYmxlIHN0YXJ0IGhlcmUqKi9cbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxEYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICAvKipPYnNlcnZhYmxlIGVuZCBoZXJlKiovXG5cbiAgICBpZiAodGhpcy5hY3Rpb24yIT0nZWRpdCcpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRZb3V0dWJlVmlkZW8oJycsICcnLCAnJyk7XG4gICAgICB9LCA1MDApXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0QmxvZ0NhdGVnb3J5KCk7XG4gICAgfSwgNTApXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRUYWdzQ291bnQoKTtcbiAgICB9LCA1MClcblxuXG4gICAgaWYgKHRoaXMuYWN0aW9uMj09J2VkaXQnKSB7XG4gICAgICB0aGlzLmhlYWRlclRleHQ9XCJFZGl0IEJsb2cgTWFuYWdlbWVudCBEYXRhXCI7XG4gICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgdGhpcy5wYXJhbXNfaWQgPSB0aGlzLnNldERhdGEuX2lkO1xuICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9ndGl0bGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9ndGl0bGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2djYXQnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nY2F0KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydwcmlvcml0eSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnByaW9yaXR5KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5zdGF0dXMpOyAgXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfaW1hZ2UnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfZmlsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2F1dGhvciddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmF1dGhvcik7XG5cblxuICAgICAgLypJbWFnZSB3b3JrcyovXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmltZ192YXIgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGggKyB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2U7XG4gICAgICAgIHRoaXMuaW1hZ2VfbmFtZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lO1xuICAgICAgICB0aGlzLmltYWdlX3R5cGUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXlfZWRpdC5wdXNoKHsgJ2ltZ192YXInOiB0aGlzLmltZ192YXIsICdpbWFnZV9uYW1lJzogdGhpcy5pbWFnZV9uYW1lLCAnaW1hZ2VfdHlwZSc6IHRoaXMuaW1hZ2VfdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkucHVzaCh7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGgsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2UsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLypGaWxlIHdvcmtzKi9cbiAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZS5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5X2VkaXQucHVzaCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSk7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheS5wdXNoKHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5iYXNlcGF0aCxcbiAgICAgICAgICBcImZpbGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLmZpbGUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICBmb3IgKGNvbnN0IHZpZCBpbiB0aGlzLnNldERhdGEudmlkZW8pIHtcbiAgICAgICAgdGhpcy5hZGRZb3V0dWJlVmlkZW8odGhpcy5zZXREYXRhLnZpZGVvW3ZpZF0udmlkZW9fdXJsLFxuICAgICAgICAgIHRoaXMuc2V0RGF0YS52aWRlb1t2aWRdLnZpZGVvX3RpdGxlLFxuICAgICAgICAgIHRoaXMuc2V0RGF0YS52aWRlb1t2aWRdLnZpZGVvX2Rlc2NyaXB0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2V0RGF0YS50YWdzICE9IFwiXCIpXG4gICAgICAgIHRoaXMuc2V0RGF0YS50YWdzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUF1dG9jb21wbGV0ZSBGdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLV9GaWx0ZXIgRlVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICBASW5wdXQoKVxuICBzZXQgYWN0aW9uKGFjdGlvbjogYW55KSB7XG4gICAgdGhpcy5hY3Rpb24yID0gYWN0aW9uO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmaWxlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5maWxlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1PREFMIEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnNDUlJyxcbiAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cblxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FZGlhdGJsZSBtYXRlcmlhbCBGb3JtIEFycmF5LS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWRkIENyZWRlbnRpYWwgRnVjbnRpb25zLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkWW91dHViZVZpZGVvKHZpZF91cmw6IGFueSwgdmlkX3RpdDogYW55LCB2aWRfZGVzYzogYW55KSB7XG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy52aWRlbyBhcyBGb3JtQXJyYXk7XG4gICAgY3JlZHMucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZpZGVvX3VybDogW3ZpZF91cmxdLFxuICAgICAgdmlkZW9fdGl0bGU6IFt2aWRfdGl0XSxcbiAgICAgIHZpZGVvX2Rlc2NyaXB0aW9uOiBbdmlkX2Rlc2NdXG4gICAgfSkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURlbGV0ZSBDcmVkZXRpYWwgRnVjbnRpb25zLS0tLS0tLS0tLS0tLS0tLVxuICBkZWxldGVDcmVkcygpIHtcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLnZpZGVvIGFzIEZvcm1BcnJheTtcbiAgICBjcmVkcy5yZW1vdmVBdCgxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQgQmxvZyBDYXRlZ29yeSBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRCbG9nQ2F0ZWdvcnkoKSB7XG4gICAgdmFyIGRhdGE6IGFueTtcbiAgICBkYXRhID0ge1xuICAgICAgJ3NvdXJjZSc6ICdibG9nX2NhdGVnb3J5J1xuICAgIH07XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5ibG9nQ2F0ZWdvcnlBcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRBR1MgdmlldyBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRUYWdzQ291bnQoKSB7XG4gICAgdmFyIGRhdGE6IGFueTtcbiAgICBkYXRhID0ge1xuICAgICAgJ3NvdXJjZSc6ICd0YWdzX3ZpZXcnXG4gICAgfTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0LnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXNbMF0gIT0gbnVsbCkgICAgICBcbiAgICAgICAgdGhpcy5vcHRpb25zPXJlc3VsdC5yZXNbMF0udGFncztcbiAgICAgIFxuICAgICAgIFxuXG5cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FRElUIFJFU09MVkUgRlVOQ1RJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQElucHV0KCkgICAgICAgICAgLy9zaW5nbGUgZGF0YSBmcm9tIHJlc29sdmUgY2FsbCAgJiBzZXQgdGhlIHZhbHVlIGZvciBlZGl0XG4gIHNldCBzaW5nbGVEYXRhKGVkaXREYXRhdmFsczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhID0gZWRpdERhdGF2YWxzO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVUJNSVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uU3VibWl0KCkge1xuICAgICBcbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fSU1BR0UgVVBMT0FERVJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEpIHtcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcykge1xuICAgICAgICB0aGlzLmltYWdlc19hcnJheSA9XG4gICAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkuY29uY2F0KHtcbiAgICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLm5hbWUsXG4gICAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfaW1hZ2UgPSB0aGlzLmltYWdlc19hcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfaW1hZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cblxuXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX0ZJTEUgVVBMT0FERVJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cblxuICAgIGlmICh0aGlzLmZpbGVDb25maWdEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlcykge1xuICAgICAgICB0aGlzLmZpbGVfYXJyYXkgPVxuICAgICAgICAgIHRoaXMuZmlsZV9hcnJheS5jb25jYXQoe1xuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5maWxlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICAgICAgXCJmaWxlXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLm5hbWUsXG4gICAgICAgICAgICBcInR5cGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlID0gdGhpcy5maWxlX2FycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9ndGl0bGUnXS5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMpXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9MTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0wO1xuICAgICAgaWYgKHRoaXMucGFyYW1zX2lkIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcbiAgICAgICAgICAgIFwiYmxvZ2NhdFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY2F0LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMsIFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MsXG4gICAgICAgICAgICBcInZpZGVvXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnZpZGVvLFxuICAgICAgICAgICAgXCJibG9nc19pbWFnZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSxcbiAgICAgICAgICAgIFwiYmxvZ3NfZmlsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlLFxuICAgICAgICAgICAgXCJhdXRob3JcIjp0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5hdXRob3JcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYXJ0XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJibG9nY2F0XCJdXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBpc2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0VXJsKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgZWxzZVxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBpcyBpbnZhbGlkXCIpO1xuICAgIFxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG4gIGdldCBvblNpZ25VcFZhbGlkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scztcbiAgfVxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuICBcblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VsZWN0IFRhZ3MgQXV0b0NvbXBsZXRlIEZpZWxkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd3ZhbChldmVudDogYW55KSB7XG4gICAgXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WSURFTyBVUkwgUFJFVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudmlkZW9bdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyVGFncyhpbmRleCkge1xuICAgIHRoaXMudGFnc19hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XG4gICAgICAvLyBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgSW1hZ2UgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyX2ltYWdlKGluZGV4KSB7XG4gICAgdGhpcy5pbWFnZXNfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpbmRleF0pO1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEZpbGUgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyRmlsZVRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLmZpbGVfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2luZGV4XSk7XG4gICAgdGhpcy5maWxlX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbn1cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgdmlkZW9pZDogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcbiAgICAgIGNvbnNvbGUud2FybigndmlkZW8gbW9kYWwnLGRhdGEpXG5cbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ3lvdXR1YmV0aXAuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQge1xuXG59XG5cbiJdfQ==