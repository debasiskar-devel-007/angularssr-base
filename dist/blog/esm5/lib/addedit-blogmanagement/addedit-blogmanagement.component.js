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
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from '../blog.service';
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
    function AddeditBlogmanagementComponent(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar, blogService) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.blogService = blogService;
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
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
                this.openSnackBar2("Blog Details Updated Successfully!!!", "OK");
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
                this.openSnackBar2("Blog Details Added Successfully!!!", "OK");
            }
            this.blogService.addData(this.serverUrlData + this.addEndpointData, data).subscribe((/**
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
                }), 1000);
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
    // ------------------------------------------------------------------------------------
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.openSnackBar2 = 
    // ------------------------------------------------------------------------------------
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.preview_video = 
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
                    template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                   \n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl required formControlName=\"blogcat\"\n                      >\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\n                        </option>\n                    </select>\n\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    \n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Author is required.</mat-error>\n\n                    \n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n                <mat-label>Write Testimonial...</mat-label>\n                <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n                </ck-editor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog description is required.</mat-error>\n\n              \n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <!-- <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                   \n                </mat-form-field> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <!-- <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                </mat-form-field><br> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n        && blogManagementForm.controls['tags'].errors.required\">\n                            Tags are required.</mat-error>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                        <mat-card class=\"example-card\">\n                            <img mat-card-image [src]=\"img.img_var\">\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
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
        { type: MatSnackBar },
        { type: BlogService }
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
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.blogService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUs5QyxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBS2hCO0lBK0ZFLDRGQUE0RjtJQUU1Rix3Q0FBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxjQUE4QixFQUFVLE1BQWMsRUFDdEQsV0FBd0IsRUFBUyxNQUFpQixFQUNuRCxRQUFxQixFQUFVLFdBQXdCO1FBSDVDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFELG1CQUFjLEdBQWQsY0FB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ZUFBZTs7SUFRM0IsWUFBQztDQUFBLEFBakJELElBaUJDO1NBYlksS0FBSzs7O0lBQ2hCLHdCQUFrQjs7SUFHaEIsMEJBQXFDOztJQUNyQyxxQkFBZ0Q7OztBQVVwRDtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNULGtHQUE4Qjs7aUJBRS9COztJQUdELHVCQUFDO0NBQUEsQUFORCxJQU1DO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tICcuLi9ibG9nLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbW9kdWxlJztcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogYW55O1xuICB2aWRlb3VybDogYW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4vKipja2VkaXRvciBzdGFydCBoZXJlKi9cbnB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbmVkaXRvckNvbmZpZyA9IHtcbiAgcGxhY2Vob2xkZXI6ICdXcml0ZSB0ZXN0aW1vbmlhbC4uLicsXG59O1xucHVibGljIG1vZGVsID0ge1xuICBlZGl0b3JEYXRhOiAnJ1xufTtcbi8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWNsYXJhdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdTVUJNSVQnO1xuICBwdWJsaWMgYmxvZ0NhdGVnb3J5QXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBibG9nTWFuYWdlbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XG4gIG9wdGlvbnM6IGFueSA9IFsnJ107XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgdGFnc19hcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBkaWFsb2dSZWY6IGFueTtcbiAgcHVibGljIHBhcmFtc19pZDogYW55O1xuICBwdWJsaWMgc2V0RGF0YTogYW55O1xuICBwdWJsaWMgbWVzc2FnZVRleHQ6IGFueTtcbiAgcHVibGljIGxpc3RVcmw6IGFueTtcbiAgcHVibGljIHRlc3RUYWc6IGFueSA9IFtdO1xuICBwdWJsaWMgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyBFcnJDb2RlOiBhbnk7XG4gIHB1YmxpYyBpbWdfdmFyOiBhbnk7XG4gIHB1YmxpYyBpbWFnZV9uYW1lOiBhbnk7XG4gIHB1YmxpYyBpbWFnZV90eXBlOiBhbnk7XG4gIHB1YmxpYyBmbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbWFnZXNfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgaW1hZ2VzX2FycmF5X2VkaXQ6IGFueSA9IFtdO1xuICBwdWJsaWMgZmlsZUNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIGZpbGVfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgZmlsZV9hcnJheV9lZGl0OiBhbnkgPSBbXTtcbiAgcHVibGljIGFjdGlvbjI6IGFueTtcbiAgcHVibGljIGVkaXRvcmNvbmZpZzogYW55ID0ge307XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSW5wdXQgU2VjdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gSW5wdXQgcmVjZWl2aW5nIGZyb20gYWRkL2VkaXQgYXBwIFxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgIC8vc2V0dGluZyB0aGUgbGlzdGluZyB1cmwgZm9ybSB0aGUgYXBwbGljYXRpb25cbiAgc2V0IGxpc3RSb3V0ZShsaXN0dmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpc3RVcmwgPSAobGlzdHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubGlzdFVybCA9IGxpc3R2YWw7XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhcGlzZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHJpdmF0ZSBibG9nU2VydmljZTogQmxvZ1NlcnZpY2UpIHtcbiAgICBcbiAgICAgIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGJsb2d0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYmxvZ2NhdDogWycnLF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHN0YXR1czogWyd0cnVlJyxdLFxuICAgICAgLy8gbWV0YXRpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAvLyBtZXRhZGVzYzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYXV0aG9yOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjcmVkZW50aWFsczogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXG4gICAgICB0YWdzOiBbJyddLFxuICAgICAgYmxvZ3NfaW1hZ2U6IFsnJ10sXG4gICAgICBibG9nc19maWxlOiBbJyddXG4gICAgfSk7XG4gICAgXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKk9ic2VydmFibGUgc3RhcnQgaGVyZSoqL1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIC8qKk9ic2VydmFibGUgZW5kIGhlcmUqKi9cblxuICAgIGlmICh0aGlzLmFjdGlvbjIgIT0gJ2VkaXQnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKCcnLCAnJywgJycpO1xuICAgICAgfSwgNTAwKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEJsb2dDYXRlZ29yeSgpO1xuICAgIH0sIDUwKVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0VGFnc0NvdW50KCk7XG4gICAgfSwgNTApXG5cblxuICAgIGlmICh0aGlzLmFjdGlvbjIgPT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLmhlYWRlclRleHQgPSBcIkVkaXQgQmxvZyBNYW5hZ2VtZW50IERhdGFcIjtcbiAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICB0aGlzLnBhcmFtc19pZCA9IHRoaXMuc2V0RGF0YS5faWQ7XG4gICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2d0aXRsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2d0aXRsZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ2NhdCddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2djYXQpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3ByaW9yaXR5J10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEucHJpb3JpdHkpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3N0YXR1cyddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnN0YXR1cyk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfaW1hZ2UnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfZmlsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2F1dGhvciddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmF1dGhvcik7XG5cblxuICAgICAgLypJbWFnZSB3b3JrcyovXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmltZ192YXIgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGggKyB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2U7XG4gICAgICAgIHRoaXMuaW1hZ2VfbmFtZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lO1xuICAgICAgICB0aGlzLmltYWdlX3R5cGUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXlfZWRpdC5wdXNoKHsgJ2ltZ192YXInOiB0aGlzLmltZ192YXIsICdpbWFnZV9uYW1lJzogdGhpcy5pbWFnZV9uYW1lLCAnaW1hZ2VfdHlwZSc6IHRoaXMuaW1hZ2VfdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkucHVzaCh7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGgsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2UsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLypGaWxlIHdvcmtzKi9cbiAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZS5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5X2VkaXQucHVzaCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSk7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheS5wdXNoKHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5iYXNlcGF0aCxcbiAgICAgICAgICBcImZpbGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLmZpbGUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICBmb3IgKGNvbnN0IHZpZCBpbiB0aGlzLnNldERhdGEuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdGhpcy5hZGRZb3V0dWJlVmlkZW8odGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzW3ZpZF0udmlkZW9fdXJsLFxuICAgICAgICAgIHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3RpdGxlLFxuICAgICAgICAgIHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX2Rlc2NyaXB0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2V0RGF0YS50YWdzICE9IFwiXCIpXG4gICAgICAgIHRoaXMuc2V0RGF0YS50YWdzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUF1dG9jb21wbGV0ZSBGdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLV9GaWx0ZXIgRlVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICBASW5wdXQoKVxuICBzZXQgYWN0aW9uKGFjdGlvbjogYW55KSB7XG4gICAgdGhpcy5hY3Rpb24yID0gYWN0aW9uO1xuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmaWxlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5maWxlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1PREFMIEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcbiAgICAgIHdpZHRoOiAnNDUlJyxcbiAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cblxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FZGlhdGJsZSBtYXRlcmlhbCBGb3JtIEFycmF5LS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWRkIENyZWRlbnRpYWwgRnVjbnRpb25zLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkWW91dHViZVZpZGVvKHZpZF91cmw6IGFueSwgdmlkX3RpdDogYW55LCB2aWRfZGVzYzogYW55KSB7XG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy5jcmVkZW50aWFscyBhcyBGb3JtQXJyYXk7XG4gICAgY3JlZHMucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZpZGVvX3VybDogW3ZpZF91cmxdLFxuICAgICAgdmlkZW9fdGl0bGU6IFt2aWRfdGl0XSxcbiAgICAgIHZpZGVvX2Rlc2NyaXB0aW9uOiBbdmlkX2Rlc2NdXG4gICAgfSkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EZWxldGUgQ3JlZGV0aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS1cbiAgZGVsZXRlQ3JlZHMoKSB7XG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy5jcmVkZW50aWFscyBhcyBGb3JtQXJyYXk7XG4gICAgY3JlZHMucmVtb3ZlQXQoMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0IEJsb2cgQ2F0ZWdvcnkgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0QmxvZ0NhdGVnb3J5KCkge1xuICAgIHZhciBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgICdzb3VyY2UnOiAnYmxvZ19jYXRlZ29yeSdcbiAgICB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYmxvZ0NhdGVnb3J5QXJyYXkgPSByZXN1bHQucmVzO1xuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UQUdTIHZpZXcgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0VGFnc0NvdW50KCkge1xuICAgIHZhciBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgICdzb3VyY2UnOiAndGFnc192aWV3J1xuICAgIH07XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzWzBdICE9IG51bGwpXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHJlc3VsdC5yZXNbMF0udGFncztcbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FRElUIFJFU09MVkUgRlVOQ1RJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQElucHV0KCkgICAgICAgICAgLy9zaW5nbGUgZGF0YSBmcm9tIHJlc29sdmUgY2FsbCAgJiBzZXQgdGhlIHZhbHVlIGZvciBlZGl0XG4gIHNldCBzaW5nbGVEYXRhKGVkaXREYXRhdmFsczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhID0gZWRpdERhdGF2YWxzO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVUJNSVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uU3VibWl0KCkge1xuXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX0lNQUdFIFVQTE9BREVSX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkgPVxuICAgICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gdGhpcy5pbWFnZXNfYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cblxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19GSUxFIFVQTE9BREVSX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cbiAgICBpZiAodGhpcy5maWxlQ29uZmlnRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBsb29wIGluIHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5ID1cbiAgICAgICAgICB0aGlzLmZpbGVfYXJyYXkuY29uY2F0KHtcbiAgICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuZmlsZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICAgIFwiZmlsZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSA9IHRoaXMuZmlsZV9hcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyA9IHRoaXMudGFnc19hcnJheTtcblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWxpZCkge1xuICAgICAgaWYgKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cylcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7XG4gICAgICBpZiAodGhpcy5wYXJhbXNfaWQgIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcbiAgICAgICAgICAgIFwiYmxvZ2NhdFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY2F0LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMsXG4gICAgICAgICAgICBcIm1ldGF0aXRsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5tZXRhdGl0bGUsXG4gICAgICAgICAgICBcIm1ldGFkZXNjXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLm1ldGFkZXNjLFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MsXG4gICAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgXCJibG9nc19pbWFnZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSxcbiAgICAgICAgICAgIFwiYmxvZ3NfZmlsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlLFxuICAgICAgICAgICAgXCJhdXRob3JcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYXV0aG9yXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIyKFwiQmxvZyBEZXRhaWxzIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISEhXCIsIFwiT0tcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRhdGE6IGFueTtcbiAgICAgICAgZGF0YSA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHBhcnRcbiAgICAgICAgICBcInNvdXJjZVwiOiBcImJsb2dzXCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIyKFwiQmxvZyBEZXRhaWxzIEFkZGVkIFN1Y2Nlc3NmdWxseSEhIVwiLCBcIk9LXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJsb2dTZXJ2aWNlLmFkZERhdGEodGhpcy5zZXJ2ZXJVcmxEYXRhICsgdGhpcy5hZGRFbmRwb2ludERhdGEsIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0VXJsKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2coXCJGb3JtIGlzIGludmFsaWRcIik7XG5cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICBnZXQgb25TaWduVXBWYWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHM7XG4gIH1cblxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TZWxlY3QgVGFncyBBdXRvQ29tcGxldGUgRmllbGQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93dmFsKGV2ZW50OiBhbnkpIHtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLnRhZ3NfYXJyYXkucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ3RhZ3MnXS5wYXRjaFZhbHVlKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG9wZW5TbmFja0JhcjIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WSURFTyBVUkwgUFJFVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuY3JlZGVudGlhbHNbdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyVGFncyhpbmRleCkge1xuICAgIHRoaXMudGFnc19hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XG4gICAgICAvLyBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgSW1hZ2UgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyX2ltYWdlKGluZGV4KSB7XG4gICAgdGhpcy5pbWFnZXNfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpbmRleF0pO1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEZpbGUgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyRmlsZVRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLmZpbGVfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2luZGV4XSk7XG4gICAgdGhpcy5maWxlX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbn1cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgdmlkZW9pZDogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcblxuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICd5b3V0dWJldGlwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IHtcblxufVxuXG4iXX0=