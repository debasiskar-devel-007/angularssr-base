(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('rxjs/operators'), require('listing-angular7'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('ngx-cookie-service'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('resourcelib', ['exports', '@angular/common/http', 'rxjs/operators', 'listing-angular7', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/core', '@angular/forms', '@angular/router', 'ngx-cookie-service', '@angular/material/dialog', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global.resourcelib = {}),global.ng.common.http,global.rxjs.operators,global.listingAngular7,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.core,global.ng.forms,global.ng.router,global.i2,global.ng.material.dialog,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,i1,operators,listingAngular7,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i0,forms,router,i2,dialog,common,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/resourcelib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResourcelibService = /** @class */ (function () {
        function ResourcelibService(_http, _authHttp, cookieService) {
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
        ResourcelibService.prototype.isTokenExpired = /**
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
        ResourcelibService.prototype.addData = /**
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
        ResourcelibService.prototype.UpdateData = /**
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
        ResourcelibService.prototype.getData = /**
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
        ResourcelibService.prototype.deleteSingleData = /**
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
        ResourcelibService.prototype.deleteMultipleData = /**
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
        ResourcelibService.prototype.UpdateStatusForSingleData = /**
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
        ResourcelibService.prototype.UpdateStatusForMultipleData = /**
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
        ResourcelibService.prototype.CustomRequest = /**
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
        ResourcelibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ResourcelibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ResourcelibService.ngInjectableDef = i0.defineInjectable({ factory: function ResourcelibService_Factory() { return new ResourcelibService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ResourcelibService, providedIn: "root" });
        return ResourcelibService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/resourcelib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResourcelibComponent = /** @class */ (function () {
        // ====================================================================================================
        function ResourcelibComponent() {
            this.loader = false;
        }
        Object.defineProperty(ResourcelibComponent.prototype, "config", {
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            set: 
            // ======================================================================================
            // ================================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.resourceListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                    listArray_modify_header: { "category name": "Category Name", "parent category": "Parent Category", "description": "Description", "priority": "Priority", "status": "Status" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "Search by Category name...", field: 'category_name' }, { label: "Search by parent category...", field: 'parent_category' }],
                        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ResourcelibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ResourcelibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-resourcelib',
                        template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"resourceListConfig.datasource !=null && resourceListConfig.datasource.length > 0\"\n        [datasource]=\"resourceListConfig.datasource\" [skip]=\"resourceListConfig.listArray_skip\"\n        [modify_header_array]=\"resourceListConfig.listArray_modify_header\" [sourcedata]=\"resourceListConfig.tableName\"\n        [statusarr]=\"resourceListConfig.statusarr\" [jwttoken]=\"resourceListConfig.jwtToken\"\n        [apiurl]=\"resourceListConfig.apiUrl\" [editroute]=\"resourceListConfig.editUrl\"\n        [deleteendpoint]=\"resourceListConfig.deleteEndPoint\"\n        [date_search_source]=\"resourceListConfig.view\"\n       [date_search_endpoint]=\"resourceListConfig.listEndPoint\"\n       [search_settings]=\"resourceListConfig.search_settings\"\n       [detail_datatype]=\"resourceListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"resourceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ResourcelibComponent.ctorParameters = function () { return []; };
        ResourcelibComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ResourcelibComponent;
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
     * Generated from: lib/Components/addedit-resourceapp/addedit-resourceapp.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditResourceappComponent = /** @class */ (function () {
        // ==============================================================================================
        function AddeditResourceappComponent(formBuilder, resourceService, router$$1, cookieService, dialog$$1) {
            this.formBuilder = formBuilder;
            this.resourceService = resourceService;
            this.router = router$$1;
            this.cookieService = cookieService;
            this.dialog = dialog$$1;
            // =============================================Declarations=====================================
            this.header_name = "ADD";
            this.buttonText = "SUBMIT";
            this.loader = false;
            this.successMessage = "Submitted Successfully";
            this.cat_array = [];
        }
        Object.defineProperty(AddeditResourceappComponent.prototype, "config", {
            // ===========================================APP INPUT=====================================
            set: 
            // ===========================================APP INPUT=====================================
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
        // ============================================================================================
        // ============================================================================================
        /**
         * @return {?}
         */
        AddeditResourceappComponent.prototype.ngOnInit =
            // ============================================================================================
            /**
             * @return {?}
             */
            function () {
                this.loader = false;
                this.generateForm();
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "SUBMIT";
                        this.header_name = "ADD";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "One row updated";
                        this.setDefaultValue(this.configData.defaultData);
                        this.header_name = "EDIT";
                        break;
                }
                this.getParentCategory();
            };
        // =============================================GENERATE FORM=================================
        // =============================================GENERATE FORM=================================
        /**
         * @return {?}
         */
        AddeditResourceappComponent.prototype.generateForm =
            // =============================================GENERATE FORM=================================
            /**
             * @return {?}
             */
            function () {
                this.resourceForm = this.formBuilder.group({
                    category_name: ['', forms.Validators.required],
                    parent_category: ['',],
                    description: ['', forms.Validators.required],
                    priority: ['', forms.Validators.required],
                    status: ['',]
                });
            };
        // ============================================================================================
        // ==========================================SUBMIT FUNCTION==========================================
        // ============================================================================================
        // ==========================================SUBMIT FUNCTION==========================================
        /**
         * @return {?}
         */
        AddeditResourceappComponent.prototype.onSubmit =
            // ============================================================================================
            // ==========================================SUBMIT FUNCTION==========================================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                // this.resourceForm.controls['testimonial'].markAsTouched();
                this.loader = true;
                /* stop here if form is invalid */
                if (this.resourceForm.invalid) {
                    return;
                }
                else {
                    if (this.resourceForm.value.status) {
                        this.resourceForm.value.status = parseInt("1");
                    }
                    else {
                        this.resourceForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.resourceForm.value, this.configData.condition)
                    };
                    this.resourceService.addData(this.configData.endpoint, postData).subscribe(( /**
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
                            alert("Some error occurred. Please try again.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try again.");
                    }));
                }
            };
        // =================================================================================================
        // ======================================GetParentCategory=============================
        // =================================================================================================
        // ======================================GetParentCategory=============================
        /**
         * @return {?}
         */
        AddeditResourceappComponent.prototype.getParentCategory =
            // =================================================================================================
            // ======================================GetParentCategory=============================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var data = {
                    "source": "resources",
                    "token": this.cookieService.get('jwtToken')
                };
                this.resourceService.getData(this.configData.endpoint2 + "/datalist", data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    /** @type {?} */
                    var result = {};
                    result = response;
                    _this.cat_array = result.res;
                    console.log(_this.cat_array);
                }));
            };
        // =============================================================================
        // ================================================Default value======================================
        // =============================================================================
        // ================================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddeditResourceappComponent.prototype.setDefaultValue =
            // =============================================================================
            // ================================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                this.resourceForm.patchValue({
                    category_name: defaultValue.category_name,
                    parent_category: defaultValue.parent_category,
                    description: defaultValue.description,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                    userId: null,
                });
            };
        // ==================================================================================================
        // =========================================MODAL functions==========================================
        // ==================================================================================================
        // =========================================MODAL functions==========================================
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditResourceappComponent.prototype.openDialog =
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
        AddeditResourceappComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit-resourceapp',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"resourceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n        <!-- category name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Category name\" formControlName=\"category_name\">\n          <mat-error *ngIf=\"resourceForm.controls['category_name']?.touched || resourceForm.controls['category_name'].errors \n          && resourceForm.controls['category_name'].errors.required\">Category name is required.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- parent category  -->\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <select matNativeControl required formControlName=\"parent_category\">\n            <option value=\"0\">Please choose a parent</option>            \n            <option value=\"{{ i.category_name }}\" *ngFor=\"let i of cat_array\">{{ i.category_name }}</option>\n          </select>\n        </mat-form-field>\n\n        <!-- description  -->\n        <mat-form-field>\n          <textarea matInput placeholder=\"Category Description\" formControlName=\"description\"></textarea>\n          <mat-error *ngIf=\"resourceForm.controls['description']?.touched || resourceForm.controls['description'].errors \n          && resourceForm.controls['description'].errors.required\">Please add a description.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- priority  -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"resourceForm.controls['priority']?.touched || resourceForm.controls['priority'].errors \n          && resourceForm.controls['priority'].errors.required\">Please set priority.</mat-error>\n        </mat-form-field>\n\n\n        <!-- status  -->\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Status</mat-checkbox><br>\n      \n\n\n        <!-- buttons sets  -->\n        <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n\n\n    </mat-card-content>\n  </span>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditResourceappComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ResourcelibService },
                { type: router.Router },
                { type: i2.CookieService },
                { type: dialog.MatDialog }
            ];
        };
        AddeditResourceappComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddeditResourceappComponent;
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/resourcelib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResourcelibModule = /** @class */ (function () {
        function ResourcelibModule() {
        }
        ResourcelibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ResourcelibComponent, AddeditResourceappComponent, Modal],
                        imports: [
                            listingAngular7.ListingModule,
                            DemoMaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [ResourcelibComponent, AddeditResourceappComponent],
                        entryComponents: [Modal]
                    },] }
        ];
        return ResourcelibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: resourcelib.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ResourcelibService = ResourcelibService;
    exports.ResourcelibComponent = ResourcelibComponent;
    exports.ResourcelibModule = ResourcelibModule;
    exports.ɵa = AddeditResourceappComponent;
    exports.ɵb = Modal;
    exports.ɵc = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=resourcelib.umd.js.map