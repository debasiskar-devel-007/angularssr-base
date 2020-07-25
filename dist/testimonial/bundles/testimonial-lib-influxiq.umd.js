(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('ngx-cookie-service'), require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('ngx-ckeditor'), require('@angular/common/http'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser'), require('listing-angular7'), require('file-upload-lib-influxiq')) :
    typeof define === 'function' && define.amd ? define('testimonial-lib-influxiq', ['exports', 'rxjs/operators', 'ngx-cookie-service', '@angular/core', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', 'ngx-ckeditor', '@angular/common/http', '@angular/router', '@angular/forms', '@angular/common', '@angular/platform-browser', 'listing-angular7', 'file-upload-lib-influxiq'], factory) :
    (factory((global['testimonial-lib-influxiq'] = {}),global.rxjs.operators,global.ngxCookieService,global.ng.core,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ngxCkeditor,global.ng.common.http,global.ng.router,global.ng.forms,global.ng.common,global.ng.platformBrowser,global.listingAngular7,global.fileUploadLibInfluxiq));
}(this, (function (exports,operators,i2,i0,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,ngxCkeditor,i1,router,forms,common,platformBrowser,listingAngular7,fileUploadLibInfluxiq) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/testimonial.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestimonialService = /** @class */ (function () {
        function TestimonialService(_http, _authHttp, cookieService) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        TestimonialService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        TestimonialService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        TestimonialService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TestimonialService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ TestimonialService.ngInjectableDef = i0.defineInjectable({ factory: function TestimonialService_Factory() { return new TestimonialService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: TestimonialService, providedIn: "root" });
        return TestimonialService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/testimonial.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestimonialComponent = /** @class */ (function () {
        // ====================================================================================================
        function TestimonialComponent() {
            this.loader = true;
        }
        Object.defineProperty(TestimonialComponent.prototype, "config", {
            // =====================================================================================================
            // ================================================Input For Lib Listing================================
            set: 
            // =====================================================================================================
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.testimonialListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image", "description", "name"],
                    listArray_modify_header: { "name copy": "Customer/User Name", "email": "Customer/User Email", "description html": "Testimonial", "priority": "Priority", "status": "Status" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "Search By Customer Name", field: 'name_copy' }, { label: "Search By Customer Email", field: 'email' }],
                        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                    /*Showing Image in the Modal*/
                    pendingmodelapplicationarray_detail_datatype: [{
                            key: "image",
                            value: 'image',
                            fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
                        }],
                    detail_header: ['_id']
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TestimonialComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestimonialComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-testimonial',
                        template: "<mat-card *ngIf=\"loader==true\">\n        <mat-spinner class=\"spinner\"></mat-spinner>\n    </mat-card>\n    \n    \n    \n    <!-- ------------------------lib listing being called------------------------ -->\n    <mat-card *ngIf=\"loader==false\">\n        <lib-listing class=\"formfilterdiv\"\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\n            [date_search_source]=\"testimonialListConfig.view\"\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\n           [search_settings]=\"testimonialListConfig.search_settings\"\n           [detail_datatype]=\"testimonialListConfig.pendingmodelapplicationarray_detail_datatype\"\n           [detail_skip_array]=\"testimonialListConfig.detail_header\">\n        </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n    \n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\n    </mat-card>",
                        styles: [".addbtn{display:block;width:170px;margin:10px;background:#3f50b5!important;color:#fff;float:right}.btnwrapper{display:flex;justify-content:flex-end}"]
                    }] }
        ];
        /** @nocollapse */
        TestimonialComponent.ctorParameters = function () { return []; };
        TestimonialComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return TestimonialComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/Components/addedit/addedit.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditComponent = /** @class */ (function () {
        // ==================================================================================================
        function AddeditComponent(formBuilder, testiService, router$$1, dialog$$1, sanitizer) {
            this.formBuilder = formBuilder;
            this.testiService = testiService;
            this.router = router$$1;
            this.dialog = dialog$$1;
            this.sanitizer = sanitizer;
            /**ckeditor start here*/
            // public Editor = ClassicEditor;  //for ckeditor
            // editorConfig = {
            //   placeholder: 'Write testimonial...',
            // };
            // public model = {
            //   editorData: ''
            // };
            /**
             * ckeditor end here
             */
            //  ========================================Declaration Section======================================
            this.buttonText = "SUBMIT";
            this.loader = false;
            this.successMessage = "Submitted Successfully";
            this.ErrCode = false;
            this.flag2 = false;
            this.youtube_suffix = "https://www.youtube.com/embed/";
            this.editorconfig = {};
            this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
        }
        /**
         * @return {?}
         */
        AddeditComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loader = false;
                this.generateForm();
                // --------------------------------checking the cases------------------------ 
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "SUBMIT";
                        this.flag = false;
                        this.header_name = "Add Testimonial";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "One row updated";
                        this.setDefaultValue(this.configData.defaultData);
                        this.header_name = "EDIT";
                        this.flag = true;
                        break;
                }
                // --------------------------------------------------------------------------
            };
        Object.defineProperty(AddeditComponent.prototype, "config", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditComponent.prototype, "imageUpload", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.imageConfigData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditComponent.prototype, "audioUpload", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.audioConfigData = getConfig;
                //console.warn(getConfig);
            },
            enumerable: true,
            configurable: true
        });
        // =====================================Form Validation/generation===================================
        // =====================================Form Validation/generation===================================
        /**
         * @return {?}
         */
        AddeditComponent.prototype.generateForm =
            // =====================================Form Validation/generation===================================
            /**
             * @return {?}
             */
            function () {
                this.testimonialForm = this.formBuilder.group({
                    name: ['', [forms.Validators.required]],
                    email: ['', [forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
                    description: ['', [forms.Validators.required]],
                    priority: ['', forms.Validators.required],
                    status: [true,],
                    testimonial_img: ['',],
                    video_url: [null],
                    video_name: [],
                    video_desc: [],
                    testimonial_audio: [null],
                    userId: [this.configData.userData.id, null]
                });
            };
        // =================================================================================================
        // ==========================================SUBMIT=================================================
        // =================================================================================================
        // ==========================================SUBMIT=================================================
        /**
         * @return {?}
         */
        AddeditComponent.prototype.onSubmit =
            // =================================================================================================
            // ==========================================SUBMIT=================================================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Testimonial File Upload Works 
                if (this.imageConfigData.files) {
                    if (this.imageConfigData.files.length > 1) {
                        this.ErrCode = true;
                        return;
                    }
                    this.testimonialForm.value.testimonial_img =
                        {
                            "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                            "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                            "name": this.imageConfigData.files[0].name,
                            "type": this.imageConfigData.files[0].type
                        };
                }
                // Testimonial audio Upload Works 
                if (this.audioConfigData.files) {
                    if (this.audioConfigData.files.length > 1) {
                        this.ErrCode = true;
                        return;
                    }
                    this.testimonialForm.value.testimonial_audio =
                        {
                            "basepath": this.audioConfigData.files[0].upload.data.basepath + '/' + this.audioConfigData.path + '/',
                            "audio": this.audioConfigData.files[0].upload.data.data.fileservername,
                            "name": this.audioConfigData.files[0].name,
                            "type": this.audioConfigData.files[0].type
                        };
                }
                this.testimonialForm.controls['description'].markAsTouched();
                this.loader = true;
                /* stop here if form is invalid */
                if (this.testimonialForm.invalid) {
                    return;
                }
                else {
                    if (this.testimonialForm.value.status) {
                        this.testimonialForm.value.status = 1;
                    }
                    else {
                        this.testimonialForm.value.status = 0;
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.testimonialForm.value, this.configData.condition)
                    };
                    // console.warn(postData);
                    this.testiService.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            _this.openDialog(_this.successMessage);
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this.dialogRef.close();
                            }), 2000);
                            _this.router.navigate([_this.configData.callBack]);
                        }
                        else {
                            alert("Some error occurred. Please try angain.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try angain.");
                    }));
                }
            };
        // =================================================================================================
        // ================================================Default value======================================
        // =================================================================================================
        // ================================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddeditComponent.prototype.setDefaultValue =
            // =================================================================================================
            // ================================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                //console.warn("defauiltvalue",defaultValue);
                this.testimonialForm.patchValue({
                    name: defaultValue.name,
                    email: defaultValue.email,
                    description: defaultValue.description,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                    userId: null,
                    testimonial_img: defaultValue.testimonial_img,
                    video_url: defaultValue.video_url,
                    video_name: defaultValue.video_name,
                    video_desc: defaultValue.video_desc,
                    testimonial_audio: defaultValue.testimonial_audio
                });
                this.img_var = defaultValue.testimonial_img.basepath + defaultValue.testimonial_img.image;
                this.image_name = defaultValue.testimonial_img.name;
                this.image_type = defaultValue.testimonial_img.type;
                if (defaultValue.testimonial_audio != null) {
                    this.flag2 = true;
                    this.testimonialAudio = defaultValue.testimonial_audio.basepath + defaultValue.testimonial_audio.audio;
                }
                //console.log(">>>",this.img_var);
            };
        // ==================================================================================================
        // =========================================MODAL functions==========================================
        // ==================================================================================================
        // =========================================MODAL functions==========================================
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditComponent.prototype.openDialog =
            // ==================================================================================================
            // =========================================MODAL functions==========================================
            /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                this.dialogRef = this.dialog.open(Modal, {
                    width: '250px',
                    data: { msg: x }
                });
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // =====================================================================================================
        //  =====================preview video================
        // =====================================================================================================
        //  =====================preview video================
        /**
         * @return {?}
         */
        AddeditComponent.prototype.preview_video =
            // =====================================================================================================
            //  =====================preview video================
            /**
             * @return {?}
             */
            function () {
                this.dialogRef = this.dialog.open(PreviewComponent, {
                    width: '850px',
                    height: '500px',
                    data: { msg: this.youtube_suffix + this.testimonialForm.value.video_url }
                });
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // ===================================================
        // ===================================================
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditComponent.prototype.inputBlur =
            // ===================================================
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.testimonialForm.controls[val].markAsUntouched();
            };
        // ==========================================Clear MAT tag===================================
        // ==========================================Clear MAT tag===================================
        /**
         * @return {?}
         */
        AddeditComponent.prototype.clear_image =
            // ==========================================Clear MAT tag===================================
            /**
             * @return {?}
             */
            function () {
                this.flag = false;
            };
        // ========================================================================================
        // ========================================================================================
        /**
         * @return {?}
         */
        AddeditComponent.prototype.clear_audio =
            // ========================================================================================
            /**
             * @return {?}
             */
            function () {
                this.flag2 = false;
                this.testimonialForm.controls['testimonial_audio'].setValue('');
            };
        AddeditComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['name'].valid\n          && testimonialForm.controls['name'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['email'].valid\n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n \n\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n          <mat-label>write a testimonial :</mat-label>\n          <ck-editor formControlName=\"description\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"  (blur)=\"inputBlur('description')\">\n          </ck-editor>\n         <mat-error *ngIf=\"!testimonialForm.controls['description'].valid\n          && testimonialForm.controls['description'].errors.required && testimonialForm.controls['description'].touched  \" >Description is required.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!testimonialForm.controls['priority'].valid\n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one testimonial image.</p>\n        </div>\n        <!-- -------------------------------------------------------------------------------- -->\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n\n        <!-- --------------------------------------Video Attachment--------------------- -->\n        <h1>Attach a testimonial video:</h1>\n\n\n        <!-- video url  -->\n        <mat-form-field class=\"video_url\">\n          <input matInput formControlName=\"video_url\">\n          <span matPrefix> {{ youtube_suffix }} </span>\n          <mat-icon matSuffix *ngIf=\"testimonialForm.controls['video_url'].value!=null && testimonialForm.controls['video_url'].value!=''\"  class=\"clickable\" (click)=\"preview_video()\" type=\"button\">remove_red_eye</mat-icon>\n        </mat-form-field>\n\n        <!-- video name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Title\" formControlName=\"video_name\">\n        </mat-form-field>\n\n        <!-- Video description  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Video Description\" formControlName=\"video_desc\">\n        </mat-form-field>\n\n        <br>\n        <!-- ------------------------------------------------------------------- -->\n\n                <!-- --------------------------------------Audio Attachment--------------------- -->\n                <h1>Attach a testimonial Audio:</h1>\n\n                <span>\n                  <lib-file-upload  [config]=\"audioConfigData\"></lib-file-upload>\n                </span>\n                <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n                  <mat-card class=\"example-card\">\n                    <audio controls>\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/ogg\">\n                      <source src=\"{{ testimonialAudio }}\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                    </audio>\n                    <span class=\"closecard\" (click)=\"clear_audio()\"><i class=\"material-icons\">clear</i></span>\n                  </mat-card>\n                </mat-card-content>\n                <br>\n                <!-- ------------------------------------------------------------------- -->\n        \n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.clickable{cursor:pointer;position:relative;z-index:999}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: TestimonialService },
                { type: router.Router },
                { type: dialog.MatDialog },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        AddeditComponent.propDecorators = {
            config: [{ type: i0.Input }],
            imageUpload: [{ type: i0.Input }],
            audioUpload: [{ type: i0.Input }]
        };
        return AddeditComponent;
    }());
    // ============================================MODAL COMPONENT===========================================
    var Modal = /** @class */ (function () {
        function Modal(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
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
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                    }] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal;
    }());
    // ======================================================================================================
    // preview cmponent
    var PreviewComponent = /** @class */ (function () {
        function PreviewComponent(dialogRef, data, sanitizer) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.sanitizer = sanitizer;
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.msg);
        }
        /**
         * @return {?}
         */
        PreviewComponent.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        PreviewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>PREVIEW VIDEO</h1>\n<div mat-dialog-content>\n    <p>{{ data.msg }}</p>\n    <!-- <p>{{ safeSrc }}</p> -->\n    <p>\n        <iframe [src]=\"safeSrc\" width=\"560\" height=\"315\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe>\n        <!-- <iframe width=\"420\" height=\"315\" [src]=\"safeSrc\" > -->\n        <!-- </iframe> -->\n    </p>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        PreviewComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return PreviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/Modules/material-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { MatFileUploadModule } from 'angular-material-fileupload';
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/testimonial.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestimonialModule = /** @class */ (function () {
        function TestimonialModule() {
        }
        TestimonialModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TestimonialComponent, AddeditComponent, Modal, PreviewComponent],
                        imports: [
                            DemoMaterialModule,
                            ngxCkeditor.CKEditorModule,
                            i1.HttpClientModule,
                            router.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            listingAngular7.ListingModule,
                            fileUploadLibInfluxiq.FileUploadModule
                        ],
                        exports: [TestimonialComponent, AddeditComponent],
                        entryComponents: [Modal, PreviewComponent]
                    },] }
        ];
        return TestimonialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: testimonial-lib-influxiq.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TestimonialService = TestimonialService;
    exports.TestimonialComponent = TestimonialComponent;
    exports.TestimonialModule = TestimonialModule;
    exports.ɵa = AddeditComponent;
    exports.ɵb = Modal;
    exports.ɵc = PreviewComponent;
    exports.ɵd = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=testimonial-lib-influxiq.umd.js.map