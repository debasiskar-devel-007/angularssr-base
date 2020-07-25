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
        // websites: Websites[] = [
        //   {value: 1, viewValue: 'Mask Blog 1'},
        //   {value: 2, viewValue: 'Mask Blog 2'},
        //   {value: 3, viewValue: 'Mask Blog 3'}
        // ];
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [''];
        this.myControl = new FormControl();
        this.tags_array = [];
        this.messageText = 'Blog Added Successfully.';
        this.testTag = [];
        this.flag = false;
        this.images_array = [];
        this.images_array_edit = [];
        this.file_array = [];
        this.file_array_edit = [];
        this.editorconfig = {};
        this.statuschecked = true;
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required]],
            blogcat: ['',],
            description: ['', [Validators.required]],
            // website:[],
            featured: [''],
            priority: ['', [Validators.required]],
            status: [''],
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
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "categoryUrl", {
        set: /**
         * @param {?} blogCat
         * @return {?}
         */
        function (blogCat) {
            this.categoryUrlData = (blogCat) || '<no name set>';
            this.categoryUrlData = blogCat;
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
    Object.defineProperty(AddeditBlogmanagementComponent.prototype, "tagsViewEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.tagsEndpointData = (endpointUrlval) || '<no name set>';
            this.tagsEndpointData = endpointUrlval;
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
            console.log(this.listUrl);
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
                // this.addYoutubeVideo(null, null,null);
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
            // this.blogManagementForm.controls['website'].patchValue(this.setData.website);
            this.blogManagementForm.controls['featured'].patchValue(this.setData.featured);
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
    /**
     * @return {?}
     */
    AddeditBlogmanagementComponent.prototype.redirectToListingPage = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.listUrl);
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
            // console.log("image config",this.imageConfigData);
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
        // var data: any;
        // data = {
        //   'source': 'blog_category'
        // };
        this.apiservice.getDataByEndpoint(this.serverUrlData + this.categoryUrlData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var data;
            data = response;
            _this.blogCategoryArray = data.result;
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
        // var data: any;
        // data = {
        //   'source': 'tags_view'
        // };
        this.apiservice.getDataByEndpoint(this.serverUrlData + this.tagsEndpointData).subscribe((/**
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
        // getDataByEndpoint
        //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
        set: 
        // ----------------------------------------------------------------------------------
        // getDataByEndpoint
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
            // console.log("image path",this.imageConfigData);
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
            console.log("values", this.blogManagementForm.value);
            //status
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = 1;
            else
                this.blogManagementForm.value.status = 0;
            // featured
            if (this.blogManagementForm.value.featured)
                this.blogManagementForm.value.featured = parseInt("1");
            else
                this.blogManagementForm.value.featured = parseInt("0");
            if (this.params_id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    // "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "description": this.blogManagementForm.value.description,
                        // "website": this.blogManagementForm.value.website,
                        "featured": this.blogManagementForm.value.featured,
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
                    // "source":"blogs"                               //add part
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
                if (result.status == 'success') {
                    _this.snackBar.open(_this.messageText, 'OK', { duration: 3000 });
                }
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
                    template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                   \n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Select Blog Category</mat-label>\n                    <mat-select matNativeControl required formControlName=\"blogcat\"\n                      >\n                        <mat-option *ngFor=\"let item of blogCategoryArray\" [value]=\"item._id\">{{ item.blogtitle }}\n                        </mat-option>\n                    </mat-select>\n\n                </mat-form-field><br>\n\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    \n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Author is required.</mat-error>\n\n                    \n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n                  ></ckeditor> -->  \n                  <mat-label>Description :-</mat-label>\n                  <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n                </ck-editor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog description is required.</mat-error>\n\n              \n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n                <!-- website -->\n                <!-- <mat-form-field>\n                    <mat-label>Website</mat-label>\n                    <mat-select [formControl]=\"blogManagementForm.controls['website']\" multiple\n                    >\n                      <mat-option *ngFor=\"let item of websites\" [value]=\"item.value\" >\n                        {{item.viewValue}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>  -->\n                <!--Features  -->\n                <mat-checkbox [formControl]=\"blogManagementForm.controls['featured']\" color=\"primary\">Featured</mat-checkbox><br>\n \n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <!-- <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br> -->\n                <mat-checkbox [formControl]=\"blogManagementForm.controls['status']\" [(ngModel)]=\"statuschecked\">Active</mat-checkbox><br>\n\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <!-- <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                   \n                </mat-form-field> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <!-- <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                </mat-form-field><br> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n\n                <div>\n                    <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                        <mat-icon matSuffix>add_box</mat-icon>\n                    </button>\n                </div>\n                \n                <div formArrayName=\"video\"\n                    *ngFor=\"let creds of blogManagementForm.controls.video?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <!-- <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button> -->\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n\n                </div><br>\n                <div>\n                    <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                        <mat-icon matSuffix>add_box</mat-icon>\n                    </button>\n                </div>\n                \n\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                                                <!-- -----------------------------Multi Tags---------------------------- -->\n                                                <div>\n                                                    <mat-label>Tags:</mat-label>\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                                                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n                                \n                                                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                                                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                                                {{option}}\n                                                            </mat-option>\n                                                        </mat-autocomplete>\n                                                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n                                                         && blogManagementForm.controls['tags'].errors.required\">\n                                                            Tags are required.</mat-error>\n                                                    </mat-form-field>\n                                                    <div>\n                                \n                                                        <mat-chip-list class=\"mat_chip\">\n                                                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                                                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                                                            </mat-chip>\n                                                        </mat-chip-list>\n                                \n                                                    </div>\n                                                </div>\n                                                <!-- ----------------------------------------------------------------- -->\n                                \n                \n                \n                \n\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" >\n                        <mat-card class=\"example-card\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n\n                            <span class=\"viewUrlwrapper\">\n                             <img mat-card-image [src]=\"img.img_var\">\n                            </span>\n                            <span class=\"viewUrlcontent\">\n                             <mat-card-title>{{ img.image_name }}</mat-card-title>\n                             <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            </span>\n\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n                            \n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                (click)=\"redirectToListingPage()\">Cancel</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>\n\n\n\n",
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
        categoryUrl: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        tagsViewEndpoint: [{ type: Input }],
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
    /** @type {?} */
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
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.statuschecked;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.categoryUrlData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.tagsEndpointData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVFoRCxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBS2hCO0lBd0dFLDRGQUE0RjtJQUU1Rix3Q0FBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxjQUE4QixFQUFVLE1BQWMsRUFDdEQsV0FBd0IsRUFBUyxNQUFpQixFQUNuRCxRQUFxQjtRQUhWLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25ELGFB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QUF1Qjs7SUFDdkIsMkRBQTRCOztJQUM1Qix3REFBb0I7O0lBQ3BCLG9EQUFxQjs7SUFDckIseURBQTBCOztJQUMxQixpREFBWTs7SUFDWixzREFBb0I7O0lBQ3BCLHVEQUFvQzs7SUFDcEMseURBQTJCOztJQUMzQiwwREFBNEI7Ozs7O0lBMERoQiw4Q0FBd0I7Ozs7O0lBQUUsb0RBQThCOzs7OztJQUNsRSx3REFBc0M7Ozs7O0lBQUUsZ0RBQXNCOzs7OztJQUM5RCxxREFBZ0M7O0lBQUUsZ0RBQXdCOztJQUMxRCxrREFBNEI7OztBQW1kaEM7SUFPRSxlQUNTLFNBQThCLEVBQ0wsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSmxELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFLZCxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUVwQyxDQUFDOzs7O0lBRUQseUJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwrT0FBeUI7aUJBQzFCOzs7O2dCQW5sQnlCLFlBQVk7Z0RBeWxCakMsTUFBTSxTQUFDLGVBQWU7O0lBUTNCLFlBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWJZLEtBQUs7OztJQUNoQix3QkFBa0I7O0lBR2hCLDBCQUFxQzs7SUFDckMscUJBQWdEOzs7QUFVcEQ7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFNBQVMsU0FBQztvQkFDVCxrR0FBOEI7O2lCQUUvQjs7SUFHRCx1QkFBQztDQUFBLEFBTkQsSUFNQztTQUZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG4vLyBpbnRlcmZhY2UgIFdlYnNpdGVzIHtcbi8vICAgdmFsdWU6IG51bWJlcjtcbi8vICAgdmlld1ZhbHVlOiBzdHJpbmc7XG4vLyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogYW55O1xuICB2aWRlb3VybDogYW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gd2Vic2l0ZXM6IFdlYnNpdGVzW10gPSBbXG4gIC8vICAge3ZhbHVlOiAxLCB2aWV3VmFsdWU6ICdNYXNrIEJsb2cgMSd9LFxuICAvLyAgIHt2YWx1ZTogMiwgdmlld1ZhbHVlOiAnTWFzayBCbG9nIDInfSxcbiAgLy8gICB7dmFsdWU6IDMsIHZpZXdWYWx1ZTogJ01hc2sgQmxvZyAzJ31cbiAgLy8gXTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwdWJsaWMgaGVhZGVyVGV4dDogYW55ID0gJ0FkZCBCbG9nIE1hbmFnZW1lbnQgRGF0YSc7XG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSAnU1VCTUlUJztcbiAgcHVibGljIGJsb2dDYXRlZ29yeUFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgYmxvZ01hbmFnZW1lbnRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgdmlkZW9fcHJlZml4OiBhbnkgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nO1xuICBvcHRpb25zOiBhbnkgPSBbJyddO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgdGFnc19hcnJheTogYW55ID0gW107XG4gIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgcGFyYW1zX2lkOiBhbnk7XG4gIHNldERhdGE6IGFueTtcbiAgbWVzc2FnZVRleHQ6IGFueT0nQmxvZyBBZGRlZCBTdWNjZXNzZnVsbHkuJztcbiAgbGlzdFVybDogYW55O1xuICB0ZXN0VGFnOiBhbnkgPSBbXTtcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIEVyckNvZGU6IGFueTtcbiAgaW1nX3ZhcjogYW55O1xuICBpbWFnZV9uYW1lOiBhbnk7XG4gIGltYWdlX3R5cGU6IGFueTtcbiAgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBpbWFnZXNfYXJyYXk6IGFueSA9IFtdO1xuICBpbWFnZXNfYXJyYXlfZWRpdDogYW55ID0gW107XG4gIGZpbGVDb25maWdEYXRhOiBhbnk7XG4gIGZpbGVfYXJyYXk6IGFueSA9IFtdO1xuICBmaWxlX2FycmF5X2VkaXQ6IGFueSA9IFtdO1xuICBhY3Rpb24yOmFueTtcbiAgZWRpdG9yY29uZmlnOmFueT17fTtcbiAgcHVibGljIHN0YXR1c2NoZWNrZWQ6Ym9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjYXRlZ29yeVVybERhdGE6YW55O1xuICBwdWJsaWMgdGFnc0VuZHBvaW50RGF0YTphbnk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSW5wdXQgU2VjdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gSW5wdXQgcmVjZWl2aW5nIGZyb20gYWRkL2VkaXQgYXBwIFxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZvciBjYXRlZ29yeSBmcm9tIHByb2plY3RcbiAgc2V0IGNhdGVnb3J5VXJsKGJsb2dDYXQ6IGFueSkge1xuICAgIHRoaXMuY2F0ZWdvcnlVcmxEYXRhID0gKGJsb2dDYXQpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmNhdGVnb3J5VXJsRGF0YSA9IGJsb2dDYXQ7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCB0YWdzVmlld0VuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnRhZ3NFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnRhZ3NFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgIC8vc2V0dGluZyB0aGUgbGlzdGluZyB1cmwgZm9ybSB0aGUgYXBwbGljYXRpb25cbiAgc2V0IGxpc3RSb3V0ZShsaXN0dmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpc3RVcmwgPSAobGlzdHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubGlzdFVybCA9IGxpc3R2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0VXJsKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhcGlzZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBibG9ndGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGJsb2djYXQ6IFsnJywgXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAvLyB3ZWJzaXRlOltdLFxuICAgICAgZmVhdHVyZWQ6WycnXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzdGF0dXM6IFsnJ10sXG4gICAgICAvLyBtZXRhdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIC8vIG1ldGFkZXNjOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBhdXRob3I6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB2aWRlbzogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXG4gICAgICB0YWdzOiBbJyddLFxuICAgICAgYmxvZ3NfaW1hZ2U6IFsnJ10sXG4gICAgICBibG9nc19maWxlOiBbJyddXG4gICAgfSk7XG4gICAgdGhpcy5lZGl0b3Jjb25maWcuZXh0cmFBbGxvd2VkQ29udGVudCA9ICcqW2NsYXNzXSgqKSxzcGFuO3VsO2xpO3RhYmxlO3RkO3N0eWxlOypbaWRdOyooKik7KnsqfSc7XG4gICAgXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKk9ic2VydmFibGUgc3RhcnQgaGVyZSoqL1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIC8qKk9ic2VydmFibGUgZW5kIGhlcmUqKi9cblxuICAgIGlmICh0aGlzLmFjdGlvbjIhPSdlZGl0JylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmFkZFlvdXR1YmVWaWRlbyhudWxsLCBudWxsLG51bGwpO1xuICAgICAgfSwgNTAwKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEJsb2dDYXRlZ29yeSgpO1xuICAgIH0sIDUwKVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0VGFnc0NvdW50KCk7XG4gICAgfSwgNTApXG5cblxuICAgIGlmICh0aGlzLmFjdGlvbjI9PSdlZGl0Jykge1xuICAgICAgdGhpcy5oZWFkZXJUZXh0PVwiRWRpdCBCbG9nIE1hbmFnZW1lbnQgRGF0YVwiO1xuICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyYW1zX2lkID0gdGhpcy5zZXREYXRhLl9pZDtcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3RpdGxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3RpdGxlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nY2F0J10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ2NhdCk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5kZXNjcmlwdGlvbik7XG5cbiAgICAgIC8vIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd3ZWJzaXRlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEud2Vic2l0ZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZmVhdHVyZWQnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5mZWF0dXJlZCk7XG5cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydwcmlvcml0eSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnByaW9yaXR5KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5zdGF0dXMpOyAgXG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfaW1hZ2UnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3NfZmlsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2F1dGhvciddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmF1dGhvcik7XG5cblxuICAgICAgLypJbWFnZSB3b3JrcyovXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmltZ192YXIgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGggKyB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2U7XG4gICAgICAgIHRoaXMuaW1hZ2VfbmFtZSA9IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lO1xuICAgICAgICB0aGlzLmltYWdlX3R5cGUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXlfZWRpdC5wdXNoKHsgJ2ltZ192YXInOiB0aGlzLmltZ192YXIsICdpbWFnZV9uYW1lJzogdGhpcy5pbWFnZV9uYW1lLCAnaW1hZ2VfdHlwZSc6IHRoaXMuaW1hZ2VfdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkucHVzaCh7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uYmFzZXBhdGgsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0uaW1hZ2UsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLypGaWxlIHdvcmtzKi9cbiAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZS5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5X2VkaXQucHVzaCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSk7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheS5wdXNoKHtcbiAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5iYXNlcGF0aCxcbiAgICAgICAgICBcImZpbGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLmZpbGUsXG4gICAgICAgICAgXCJuYW1lXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0udHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICBmb3IgKGNvbnN0IHZpZCBpbiB0aGlzLnNldERhdGEudmlkZW8pIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKHRoaXMuc2V0RGF0YS52aWRlb1t2aWRdLnZpZGVvX3VybCxcbiAgICAgICAgICB0aGlzLnNldERhdGEudmlkZW9bdmlkXS52aWRlb190aXRsZSxcbiAgICAgICAgICB0aGlzLnNldERhdGEudmlkZW9bdmlkXS52aWRlb19kZXNjcmlwdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNldERhdGEudGFncyAhPSBcIlwiKVxuICAgICAgICB0aGlzLnNldERhdGEudGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvY29tcGxldGUgRnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG4gIHJlZGlyZWN0VG9MaXN0aW5nUGFnZSgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxpc3RVcmwpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tX0ZpbHRlciBGVW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY3Rpb24oYWN0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmFjdGlvbjIgPSBhY3Rpb247XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgY29uZmlnXCIsdGhpcy5pbWFnZUNvbmZpZ0RhdGEpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpbGVVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmZpbGVDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTU9EQUwgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICc0NSUnLFxuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmxcbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVkaWF0YmxlIG1hdGVyaWFsIEZvcm0gQXJyYXktLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgQ3JlZGVudGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tLVxuICBhZGRZb3V0dWJlVmlkZW8odmlkX3VybDogYW55LCB2aWRfdGl0OiBhbnksIHZpZF9kZXNjOiBhbnkpIHtcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLnZpZGVvIGFzIEZvcm1BcnJheTtcbiAgICBjcmVkcy5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmlkZW9fdXJsOiBbdmlkX3VybF0sXG4gICAgICB2aWRlb190aXRsZTogW3ZpZF90aXRdLFxuICAgICAgdmlkZW9fZGVzY3JpcHRpb246IFt2aWRfZGVzY11cbiAgICB9KSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRGVsZXRlIENyZWRldGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tXG4gIGRlbGV0ZUNyZWRzKCkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMudmlkZW8gYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnJlbW92ZUF0KDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0IEJsb2cgQ2F0ZWdvcnkgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0QmxvZ0NhdGVnb3J5KCkge1xuICAgIC8vIHZhciBkYXRhOiBhbnk7XG4gICAgLy8gZGF0YSA9IHtcbiAgICAvLyAgICdzb3VyY2UnOiAnYmxvZ19jYXRlZ29yeSdcbiAgICAvLyB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhQnlFbmRwb2ludCh0aGlzLnNlcnZlclVybERhdGEgKyB0aGlzLmNhdGVnb3J5VXJsRGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBkYXRhOiBhbnk7XG4gICAgICBkYXRhID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmJsb2dDYXRlZ29yeUFycmF5ID0gZGF0YS5yZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRBR1MgdmlldyBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRUYWdzQ291bnQoKSB7XG4gICAgLy8gdmFyIGRhdGE6IGFueTtcbiAgICAvLyBkYXRhID0ge1xuICAgIC8vICAgJ3NvdXJjZSc6ICd0YWdzX3ZpZXcnXG4gICAgLy8gfTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YUJ5RW5kcG9pbnQoIHRoaXMuc2VydmVyVXJsRGF0YSArICB0aGlzLnRhZ3NFbmRwb2ludERhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc1swXSAhPSBudWxsKSAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnM9cmVzdWx0LnJlc1swXS50YWdzO1xuICAgICAgXG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGdldERhdGFCeUVuZHBvaW50XG5cblxuXG4gIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVESVQgUkVTT0xWRSBGVU5DVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASW5wdXQoKSAgICAgICAgICAvL3NpbmdsZSBkYXRhIGZyb20gcmVzb2x2ZSBjYWxsICAmIHNldCB0aGUgdmFsdWUgZm9yIGVkaXRcbiAgc2V0IHNpbmdsZURhdGEoZWRpdERhdGF2YWxzOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEgPSBlZGl0RGF0YXZhbHM7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNVQk1JVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25TdWJtaXQoKSB7XG4gICAgIFxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19JTUFHRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpbWFnZSBwYXRoXCIsdGhpcy5pbWFnZUNvbmZpZ0RhdGEpO1xuICAgICAgZm9yIChjb25zdCBsb29wIGluIHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5ID1cbiAgICAgICAgICB0aGlzLmltYWdlc19hcnJheS5jb25jYXQoe1xuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IHRoaXMuaW1hZ2VzX2FycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG5cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fRklMRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG4gICAgaWYgKHRoaXMuZmlsZUNvbmZpZ0RhdGEpIHtcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheSA9XG4gICAgICAgICAgdGhpcy5maWxlX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmZpbGVDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImZpbGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSB0aGlzLmZpbGVfYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XG5cbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2d0aXRsZSddLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZXNcIix0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZSk7XG5cbiAgICAgIC8vc3RhdHVzXG4gICAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzKVxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPTE7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9MDtcbi8vIGZlYXR1cmVkXG4gICAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuZmVhdHVyZWQpXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmZlYXR1cmVkID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5mZWF0dXJlZCA9IHBhcnNlSW50KFwiMFwiKTtcblxuXG5cblxuICAgICAgaWYgKHRoaXMucGFyYW1zX2lkIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIC8vIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcbiAgICAgICAgICAgIFwiYmxvZ2NhdFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY2F0LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIFwid2Vic2l0ZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS53ZWJzaXRlLFxuICAgICAgICAgICAgXCJmZWF0dXJlZFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5mZWF0dXJlZCxcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMsIFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MsXG4gICAgICAgICAgICBcInZpZGVvXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnZpZGVvLFxuICAgICAgICAgICAgXCJibG9nc19pbWFnZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSxcbiAgICAgICAgICAgIFwiYmxvZ3NfZmlsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19maWxlLFxuICAgICAgICAgICAgXCJhdXRob3JcIjp0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5hdXRob3JcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgIFxuICAgICAgICAgIC8vIFwic291cmNlXCI6XCJibG9nc1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHBhcnRcbiAgICAgICAgICBcImRhdGFcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUsXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwaXNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMubWVzc2FnZVRleHQsJ09LJyx7ZHVyYXRpb246MzAwMH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxpc3RVcmwpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBlbHNlXG4gICAgY29uc29sZS5sb2coXCJGb3JtIGlzIGludmFsaWRcIik7XG4gICAgXG4gIH1cbiAgXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG4gIGdldCBvblNpZ25VcFZhbGlkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scztcbiAgfVxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuICBcblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VsZWN0IFRhZ3MgQXV0b0NvbXBsZXRlIEZpZWxkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd3ZhbChldmVudDogYW55KSB7XG4gICAgXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WSURFTyBVUkwgUFJFVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudmlkZW9bdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyVGFncyhpbmRleCkge1xuICAgIHRoaXMudGFnc19hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XG4gICAgICAvLyBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgSW1hZ2UgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyX2ltYWdlKGluZGV4KSB7XG4gICAgdGhpcy5pbWFnZXNfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpbmRleF0pO1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEZpbGUgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyRmlsZVRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLmZpbGVfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2luZGV4XSk7XG4gICAgdGhpcy5maWxlX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG59XG5cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgdmlkZW9pZDogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcbiAgICAgIGNvbnNvbGUud2FybigndmlkZW8gbW9kYWwnLGRhdGEpXG5cbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ3lvdXR1YmV0aXAuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQge1xuXG59XG5cbiJdfQ==