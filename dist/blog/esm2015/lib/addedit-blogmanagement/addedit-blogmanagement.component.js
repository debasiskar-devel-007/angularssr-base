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
export class AddeditBlogmanagementComponent {
    // -----------------------------------------------------------------------------------------
    /**
     * @param {?} http
     * @param {?} apiservice
     * @param {?} activatedRoute
     * @param {?} router
     * @param {?} formBuilder
     * @param {?} dialog
     * @param {?} snackBar
     * @param {?} blogService
     */
    constructor(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar, blogService) {
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
    // -----------------------------------------------------------------------
    // ----------------------------------------------Input Section-----------------------
    // Input receiving from add/edit app 
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} serverUrl
     * @return {?}
     */
    set serverUrl(serverUrl) {
        this.serverUrlData = (serverUrl) || '<no name set>';
        this.serverUrlData = serverUrl;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
    }
    /**
     * @param {?} listval
     * @return {?}
     */
    set listRoute(listval) {
        this.listUrl = (listval) || '<no name set>';
        this.listUrl = listval;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setaddEndpoint(this.addEndpointData);
        }), 50);
        /**Observable end here**/
        if (this.action2 != 'edit')
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.addYoutubeVideo('', '', '');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getTagsCount();
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
            for (let i = 0; i < this.setData.blogs_image.length; i++) {
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
            for (let i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
                this.file_array_edit.push(this.setData.blogs_file[i2].name);
                this.file_array.push({
                    "basepath": this.setData.blogs_file[i2].basepath,
                    "file": this.setData.blogs_file[i2].file,
                    "name": this.setData.blogs_file[i2].name,
                    "type": this.setData.blogs_file[i2].type
                });
            }
            for (const vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    this.tags_array.push(element);
                }));
        }
        // ------------------------------Autocomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        // ------------------------------------------------------------------------------------------
    }
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().indexOf(filterValue) === 0));
    }
    // --------------------------------------------------------------------------------------------
    /**
     * @param {?} action
     * @return {?}
     */
    set action(action) {
        this.action2 = action;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set fileUpload(getConfig) {
        this.fileConfigData = getConfig;
    }
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
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
        result => {
        }));
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    addYoutubeVideo(vid_url, vid_tit, vid_desc) {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [vid_url],
            video_title: [vid_tit],
            video_description: [vid_desc]
        }));
    }
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    deleteCreds() {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    }
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    getBlogCategory() {
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.blogCategoryArray = result.res;
        }));
    }
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    getTagsCount() {
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                this.options = result.res[0].tags;
        }));
    }
    // ----------------------------------------------------------------------------------
    //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
    /**
     * @param {?} editDatavals
     * @return {?}
     */
    set singleData(editDatavals) {
        this.setData = editDatavals;
    }
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    onSubmit() {
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            for (const loop in this.imageConfigData.files) {
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
            for (const loop in this.fileConfigData.files) {
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
            response => {
                /** @type {?} */
                let result;
                result = response;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listUrl);
                }), 1000);
            }));
        }
        else
            console.log("Form is invalid");
    }
    // -----------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    get onSignUpValidate() {
        return this.blogManagementForm.controls;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    }
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    showval(event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    }
    // ------------------------------------------------------------------------------------
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar2(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    preview_video(video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    }
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearTags(index) {
        this.tags_array.splice(index, 1);
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    }
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clear_image(index) {
        this.images_array.pop(this.setData.blogs_image[index]);
        this.images_array_edit.splice(index, 1);
    }
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearFileTags(index) {
        this.file_array.pop(this.setData.blogs_file[index]);
        this.file_array_edit.splice(index, 1);
    }
}
AddeditBlogmanagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-blogmanagement',
                template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                   \n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl required formControlName=\"blogcat\"\n                      >\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\n                        </option>\n                    </select>\n\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    \n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Author is required.</mat-error>\n\n                    \n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n                <mat-label>Write Testimonial...</mat-label>\n                <ck-editor formControlName=\"description\" [config]=\"editorconfig\">\n                </ck-editor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog description is required.</mat-error>\n\n              \n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <!-- <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                   \n                </mat-form-field> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <!-- <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                </mat-form-field><br> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n        && blogManagementForm.controls['tags'].errors.required\">\n                            Tags are required.</mat-error>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                        <mat-card class=\"example-card\">\n                            <img mat-card-image [src]=\"img.img_var\">\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditBlogmanagementComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ApiService },
    { type: ActivatedRoute },
    { type: Router },
    { type: FormBuilder },
    { type: MatDialog },
    { type: MatSnackBar },
    { type: BlogService }
];
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
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
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
                template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.videoid;
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
// ---------------------------------------------------------------------------------------
export class YoutubeComponent {
}
YoutubeComponent.decorators = [
    { type: Component, args: [{
                template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUs5QyxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBV2hCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7OztJQTJGekMsWUFBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxjQUE4QixFQUFVLE1BQWMsRUFDdEQsV0FBd0IsRUFBUyxNQUFpQixFQUNuRCxRQUFxQixFQUFVLFdBQXdCO1FBSDVDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzFE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bEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCtPQUF5QjthQUMxQjs7OztZQXJqQnlCLFlBQVk7NENBMmpCakMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0JBQWtCOztJQUdoQiwwQkFBcUM7O0lBQ3JDLHFCQUFnRDs7O0FBY3BELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1Qsa0dBQThCOzthQUUvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vYmxvZy5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsLW1vZHVsZSc7XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IGFueTtcbiAgdmlkZW91cmw6IGFueTtcbn1cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LWJsb2dtYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG5wdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG5lZGl0b3JDb25maWcgPSB7XG4gIHBsYWNlaG9sZGVyOiAnV3JpdGUgdGVzdGltb25pYWwuLi4nLFxufTtcbnB1YmxpYyBtb2RlbCA9IHtcbiAgZWRpdG9yRGF0YTogJydcbn07XG4vKipja2VkaXRvciBlbmQgaGVyZSovXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwdWJsaWMgaGVhZGVyVGV4dDogYW55ID0gJ0FkZCBCbG9nIE1hbmFnZW1lbnQgRGF0YSc7XG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSAnU1VCTUlUJztcbiAgcHVibGljIGJsb2dDYXRlZ29yeUFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgYmxvZ01hbmFnZW1lbnRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgdmlkZW9fcHJlZml4OiBhbnkgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nO1xuICBvcHRpb25zOiBhbnkgPSBbJyddO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHRhZ3NfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgZGlhbG9nUmVmOiBhbnk7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcbiAgcHVibGljIHNldERhdGE6IGFueTtcbiAgcHVibGljIG1lc3NhZ2VUZXh0OiBhbnk7XG4gIHB1YmxpYyBsaXN0VXJsOiBhbnk7XG4gIHB1YmxpYyB0ZXN0VGFnOiBhbnkgPSBbXTtcbiAgcHVibGljIGltYWdlQ29uZmlnRGF0YTogYW55O1xuICBwdWJsaWMgRXJyQ29kZTogYW55O1xuICBwdWJsaWMgaW1nX3ZhcjogYW55O1xuICBwdWJsaWMgaW1hZ2VfbmFtZTogYW55O1xuICBwdWJsaWMgaW1hZ2VfdHlwZTogYW55O1xuICBwdWJsaWMgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW1hZ2VzX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGltYWdlc19hcnJheV9lZGl0OiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbGVDb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyBmaWxlX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbGVfYXJyYXlfZWRpdDogYW55ID0gW107XG4gIHB1YmxpYyBhY3Rpb24yOiBhbnk7XG4gIHB1YmxpYyBlZGl0b3Jjb25maWc6IGFueSA9IHt9O1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlucHV0IFNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElucHV0IHJlY2VpdmluZyBmcm9tIGFkZC9lZGl0IGFwcCBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuXG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAvL3NldHRpbmcgdGhlIGxpc3RpbmcgdXJsIGZvcm0gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0VXJsID0gKGxpc3R2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RVcmwgPSBsaXN0dmFsO1xuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXBpc2VydmljZTogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlKSB7XG4gICAgXG4gICAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBibG9ndGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGJsb2djYXQ6IFsnJyxdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzdGF0dXM6IFsndHJ1ZScsXSxcbiAgICAgIC8vIG1ldGF0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgLy8gbWV0YWRlc2M6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGF1dGhvcjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgY3JlZGVudGlhbHM6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10pLFxuICAgICAgdGFnczogWycnXSxcbiAgICAgIGJsb2dzX2ltYWdlOiBbJyddLFxuICAgICAgYmxvZ3NfZmlsZTogWycnXVxuICAgIH0pO1xuICAgIFxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKipPYnNlcnZhYmxlIHN0YXJ0IGhlcmUqKi9cbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxEYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICAvKipPYnNlcnZhYmxlIGVuZCBoZXJlKiovXG5cbiAgICBpZiAodGhpcy5hY3Rpb24yICE9ICdlZGl0JylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFlvdXR1YmVWaWRlbygnJywgJycsICcnKTtcbiAgICAgIH0sIDUwMClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRCbG9nQ2F0ZWdvcnkoKTtcbiAgICB9LCA1MClcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldFRhZ3NDb3VudCgpO1xuICAgIH0sIDUwKVxuXG5cbiAgICBpZiAodGhpcy5hY3Rpb24yID09ICdlZGl0Jykge1xuICAgICAgdGhpcy5oZWFkZXJUZXh0ID0gXCJFZGl0IEJsb2cgTWFuYWdlbWVudCBEYXRhXCI7XG4gICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgdGhpcy5wYXJhbXNfaWQgPSB0aGlzLnNldERhdGEuX2lkO1xuICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9ndGl0bGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9ndGl0bGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2djYXQnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nY2F0KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydwcmlvcml0eSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnByaW9yaXR5KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5zdGF0dXMpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2dzX2ltYWdlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2UpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2dzX2ZpbGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydhdXRob3InXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5hdXRob3IpO1xuXG5cbiAgICAgIC8qSW1hZ2Ugd29ya3MqL1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbWdfdmFyID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmJhc2VwYXRoICsgdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlO1xuICAgICAgICB0aGlzLmltYWdlX25hbWUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZV90eXBlID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLnR5cGU7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQucHVzaCh7ICdpbWdfdmFyJzogdGhpcy5pbWdfdmFyLCAnaW1hZ2VfbmFtZSc6IHRoaXMuaW1hZ2VfbmFtZSwgJ2ltYWdlX3R5cGUnOiB0aGlzLmltYWdlX3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LnB1c2goe1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmJhc2VwYXRoLFxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qRmlsZSB3b3JrcyovXG4gICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUubGVuZ3RoOyBpMisrKSB7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheV9lZGl0LnB1c2godGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLm5hbWUpO1xuICAgICAgICB0aGlzLmZpbGVfYXJyYXkucHVzaCh7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0uYmFzZXBhdGgsXG4gICAgICAgICAgXCJmaWxlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5maWxlLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgICAgZm9yIChjb25zdCB2aWQgaW4gdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3VybCxcbiAgICAgICAgICB0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb190aXRsZSxcbiAgICAgICAgICB0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb19kZXNjcmlwdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNldERhdGEudGFncyAhPSBcIlwiKVxuICAgICAgICB0aGlzLnNldERhdGEudGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvY29tcGxldGUgRnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1fRmlsdGVyIEZVbmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGFjdGlvbihhY3Rpb246IGFueSkge1xuICAgIHRoaXMuYWN0aW9uMiA9IGFjdGlvbjtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZmlsZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuZmlsZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0RBTCBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzQ1JScsXG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG5cbiAgICB9KTtcblxuICAgIC8vIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybFxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRWRpYXRibGUgbWF0ZXJpYWwgRm9ybSBBcnJheS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFkZCBDcmVkZW50aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS0tXG4gIGFkZFlvdXR1YmVWaWRlbyh2aWRfdXJsOiBhbnksIHZpZF90aXQ6IGFueSwgdmlkX2Rlc2M6IGFueSkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMuY3JlZGVudGlhbHMgYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2aWRlb191cmw6IFt2aWRfdXJsXSxcbiAgICAgIHZpZGVvX3RpdGxlOiBbdmlkX3RpdF0sXG4gICAgICB2aWRlb19kZXNjcmlwdGlvbjogW3ZpZF9kZXNjXVxuICAgIH0pKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRGVsZXRlIENyZWRldGlhbCBGdWNudGlvbnMtLS0tLS0tLS0tLS0tLS0tXG4gIGRlbGV0ZUNyZWRzKCkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMuY3JlZGVudGlhbHMgYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnJlbW92ZUF0KDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldCBCbG9nIENhdGVnb3J5IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldEJsb2dDYXRlZ29yeSgpIHtcbiAgICB2YXIgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICAnc291cmNlJzogJ2Jsb2dfY2F0ZWdvcnknXG4gICAgfTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmJsb2dDYXRlZ29yeUFycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVEFHUyB2aWV3IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFRhZ3NDb3VudCgpIHtcbiAgICB2YXIgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICAnc291cmNlJzogJ3RhZ3NfdmlldydcbiAgICB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc1swXSAhPSBudWxsKVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSByZXN1bHQucmVzWzBdLnRhZ3M7XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRURJVCBSRVNPTFZFIEZVTkNUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2luZ2xlIGRhdGEgZnJvbSByZXNvbHZlIGNhbGwgICYgc2V0IHRoZSB2YWx1ZSBmb3IgZWRpdFxuICBzZXQgc2luZ2xlRGF0YShlZGl0RGF0YXZhbHM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSA9IGVkaXREYXRhdmFscztcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU1VCTUlULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvblN1Ym1pdCgpIHtcblxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19JTUFHRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBsb29wIGluIHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5ID1cbiAgICAgICAgICB0aGlzLmltYWdlc19hcnJheS5jb25jYXQoe1xuICAgICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IHRoaXMuaW1hZ2VzX2FycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nc19pbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG5cbiAgICAvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fRklMRSBVUExPQURFUl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG4gICAgaWYgKHRoaXMuZmlsZUNvbmZpZ0RhdGEpIHtcbiAgICAgIGZvciAoY29uc3QgbG9vcCBpbiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheSA9XG4gICAgICAgICAgdGhpcy5maWxlX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmZpbGVDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgICBcImZpbGVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0ubmFtZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSB0aGlzLmZpbGVfYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XG5cbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICBpZiAodGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMpXG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpO1xuICAgICAgaWYgKHRoaXMucGFyYW1zX2lkICE9IG51bGwpIHsgICAgLy91cGRhdGUgcGFydFxuICAgICAgICB0aGlzLm1lc3NhZ2VUZXh0ID0gXCJPbmUgcm93IHVwZGF0ZWQhISFcIjtcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyA9IHRoaXMudGFnc19hcnJheTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBcInNvdXJjZVwiOiBcImJsb2dzXCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wYXJhbXNfaWQsXG4gICAgICAgICAgICBcImJsb2d0aXRsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9ndGl0bGUsXG4gICAgICAgICAgICBcImJsb2djYXRcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ2NhdCxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBcInByaW9yaXR5XCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnByaW9yaXR5LFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzLFxuICAgICAgICAgICAgXCJtZXRhdGl0bGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUubWV0YXRpdGxlLFxuICAgICAgICAgICAgXCJtZXRhZGVzY1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5tZXRhZGVzYyxcbiAgICAgICAgICAgIFwidGFnc1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzLFxuICAgICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5jcmVkZW50aWFscyxcbiAgICAgICAgICAgIFwiYmxvZ3NfaW1hZ2VcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfaW1hZ2UsXG4gICAgICAgICAgICBcImJsb2dzX2ZpbGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSxcbiAgICAgICAgICAgIFwiYXV0aG9yXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmF1dGhvclxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJibG9nY2F0XCJdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyMihcIkJsb2cgRGV0YWlscyBVcGRhdGVkIFN1Y2Nlc3NmdWxseSEhIVwiLCBcIk9LXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkYXRhOiBhbnk7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYXJ0XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxuICAgICAgICAgIFwiZGF0YVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJibG9nY2F0XCJdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyMihcIkJsb2cgRGV0YWlscyBBZGRlZCBTdWNjZXNzZnVsbHkhISFcIiwgXCJPS1wiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ibG9nU2VydmljZS5hZGREYXRhKHRoaXMuc2VydmVyVXJsRGF0YSArIHRoaXMuYWRkRW5kcG9pbnREYXRhLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuXG5cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMubGlzdFVybCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICB9KTtcblxuXG4gICAgfVxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBpcyBpbnZhbGlkXCIpO1xuXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cbiAgZ2V0IG9uU2lnblVwVmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzO1xuICB9XG5cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VsZWN0IFRhZ3MgQXV0b0NvbXBsZXRlIEZpZWxkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2hvd3ZhbChldmVudDogYW55KSB7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVklERU8gVVJMIFBSRVZJRVctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmV2aWV3X3ZpZGVvKHZpZGVvX2luZGV4KSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzW3ZpZGVvX2luZGV4XS52aWRlb191cmwpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xFQVIgVEFHUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhclRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLnRhZ3NfYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoWW91dHViZUNvbXBvbmVudCwge1xuICAgICAgLy8gZHVyYXRpb246IDE1MDAsXG4gICAgICBwYW5lbENsYXNzOiBbJ3NuYWNrYmFyLWNvbG9yJ11cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEltYWdlIGNsZWFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhcl9pbWFnZShpbmRleCkge1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaW5kZXhdKTtcbiAgICB0aGlzLmltYWdlc19hcnJheV9lZGl0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CbG9ncyBGaWxlIGNsZWFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhckZpbGVUYWdzKGluZGV4KSB7XG4gICAgdGhpcy5maWxlX2FycmF5LnBvcCh0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpbmRleF0pO1xuICAgIHRoaXMuZmlsZV9hcnJheV9lZGl0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG59XG5cblxuXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTW9kYWwgQ29tcG9uZW50IFdvcmtzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gIHZpZGVvaWQ6IGFueSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7XG5cblxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAneW91dHViZXRpcC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZUNvbXBvbmVudCB7XG5cbn1cblxuIl19