(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/common/http'), require('listing-angular7'), require('@angular/core'), require('@angular/forms'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lession-management', ['exports', 'rxjs/operators', '@angular/platform-browser', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/common/http', 'listing-angular7', '@angular/core', '@angular/forms', '@angular/router'], factory) :
    (factory((global['lession-management'] = {}),global.rxjs.operators,global.ng.platformBrowser,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.common.http,global.listingAngular7,global.ng.core,global.ng.forms,global.ng.router));
}(this, (function (exports,operators,platformBrowser,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i1,listingAngular7,i0,forms,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* set common header */
    /** @type {?} */
    var httpOptions = {
        headers: new i1.HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    var LessionManagementService = /** @class */ (function () {
        function LessionManagementService(_http, _authHttp) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = '';
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        LessionManagementService.prototype.isTokenExpired = /**
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
        LessionManagementService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
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
        LessionManagementService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        LessionManagementService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LessionManagementService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ LessionManagementService.ngInjectableDef = i0.defineInjectable({ factory: function LessionManagementService_Factory() { return new LessionManagementService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient)); }, token: LessionManagementService, providedIn: "root" });
        return LessionManagementService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LessionManagementComponent = /** @class */ (function () {
        function LessionManagementComponent() {
        }
        Object.defineProperty(LessionManagementComponent.prototype, "config", {
            set: /**
             * @param {?} receivedLessionData
             * @return {?}
             */ function (receivedLessionData) {
                this.lessionData = receivedLessionData;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LessionManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LessionManagementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-lession-management',
                        template: "<lib-list-lession [config]=\"lessionData\"></lib-list-lession>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LessionManagementComponent.ctorParameters = function () { return []; };
        LessionManagementComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return LessionManagementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
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
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListLessionComponent = /** @class */ (function () {
        function ListLessionComponent(httpRequest, router$$1) {
            this.httpRequest = httpRequest;
            this.router = router$$1;
            this.loader = true;
        }
        Object.defineProperty(ListLessionComponent.prototype, "config", {
            set: /**
             * @param {?} receivedLessionData
             * @return {?}
             */ function (receivedLessionData) {
                this.lessionListingConfig = {
                    apiUrl: receivedLessionData.apiBaseUrl,
                    listEndPoint: "datalist",
                    datasource: receivedLessionData.datasource,
                    tableName: receivedLessionData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedLessionData.updateEndpoint,
                    editUrl: receivedLessionData.editUrl,
                    jwtToken: receivedLessionData.jwtToken,
                    deleteEndPoint: receivedLessionData.deleteEndPoint
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListLessionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListLessionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-list-lession',
                        template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<!-- <mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"lessionListingConfig.datasource !=null && lessionListingConfig.datasource.length > 0\"\n    [datasource]=\"lessionListingConfig.datasource\"\n    [skip]=\"lessionListingConfig.listArray_skip\"\n    [modify_header_array]=\"lessionListingConfig.listArray_modify_header\"\n    [sourcedata]=\"lessionListingConfig.tableName\"\n    [statusarr]=\"lessionListingConfig.statusArray\"\n    [jwttoken]=\"lessionListingConfig.jwtToken\" \n    [apiurl]=\"lessionListingConfig.apiUrl\"\n    [editroute]=\"lessionListingConfig.editUrl\"\n    [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing> -->\n\n\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"lessionListingConfig.datasource != null && lessionListingConfig.datasource.length > 0\"\n      [datasource]=\"lessionListingConfig.datasource\" [skip]=\"lessionListingConfig.listArray_skip\"\n      [modify_header_array]=\"lessionListingConfig.listArray_modify_header\" [sourcedata]=\"lessionListingConfig.tableName\"\n      [statusarr]=\"lessionListingConfig.statusarr\" [jwttoken]=\"lessionListingConfig.jwtToken\"\n      [apiurl]=\"lessionListingConfig.apiUrl\" [editroute]=\"lessionListingConfig.editUrl\"\n      [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"lessionListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                        styles: ["h2{margin:auto}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.add-new-button{float:right}.spinner{text-align:center;margin:auto;height:100px}mat-toolbar{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        ListLessionComponent.ctorParameters = function () {
            return [
                { type: LessionManagementService },
                { type: router.Router }
            ];
        };
        ListLessionComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListLessionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddEditLessionComponent = /** @class */ (function () {
        function AddEditLessionComponent(formBuilder, httpRequest, ActivatedRoute, router$$1) {
            this.formBuilder = formBuilder;
            this.httpRequest = httpRequest;
            this.ActivatedRoute = ActivatedRoute;
            this.router = router$$1;
            this.usersData = null;
            this.buttonText = null;
            this.loader = false;
        }
        Object.defineProperty(AddEditLessionComponent.prototype, "config", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddEditLessionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loader = false;
                /* Generate form */
                this.generateForm();
                /* Checking */
                switch (this.configData.action) {
                    case 'add':
                        this.buttonText = "Create"; /* Button text */
                        break;
                    case 'edit':
                        this.buttonText = "Update"; /* Button text */
                        this.setDefaultValue(this.configData.defaultData);
                        break;
                }
            };
        /* Create form controll */
        /* Create form controll */
        /**
         * @return {?}
         */
        AddEditLessionComponent.prototype.generateForm = /* Create form controll */
            /**
             * @return {?}
             */
            function () {
                /* Category create form validation */
                this.lessionForm = this.formBuilder.group({
                    title: ['', [forms.Validators.required, forms.Validators.maxLength(150)]],
                    description: ['', [forms.Validators.required, forms.Validators.maxLength(5000)]],
                    userId: ['',]
                });
            };
        /* Category form submit */
        /* Category form submit */
        /**
         * @return {?}
         */
        AddEditLessionComponent.prototype.lessionFormSubmit = /* Category form submit */
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.loader = true;
                /* stop here if form is invalid */
                if (this.lessionForm.invalid) {
                    return;
                }
                /* start process to submited data */
                /** @type {?} */
                var postData = {
                    source: this.configData.source,
                    data: Object.assign(this.lessionForm.value, this.configData.condition)
                };
                this.httpRequest.addData(this.configData.endpoint, postData).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    if (response.status == "success") {
                        _this.resetlessionForm();
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
            }; // console.log("Ekhane asche");
        /* reset Category form */
        // console.log("Ekhane asche");
        /* reset Category form */
        /**
         * @return {?}
         */
        AddEditLessionComponent.prototype.resetlessionForm =
            // console.log("Ekhane asche");
            /* reset Category form */
            /**
             * @return {?}
             */
            function () {
                this.lessionForm.reset();
            };
        /* Set default category form value */
        /* Set default category form value */
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddEditLessionComponent.prototype.setDefaultValue = /* Set default category form value */
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                this.lessionForm.setValue({
                    title: defaultValue.title,
                    description: defaultValue.description,
                    userId: null
                });
            };
        AddEditLessionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-add-edit-lession',
                        template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"lessionForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n\n\n\n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"lessionFormSubmit();\" mat-button [disabled]=\"!lessionForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetlessionForm();\">Reset</button>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        AddEditLessionComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: LessionManagementService },
                { type: router.ActivatedRoute },
                { type: router.Router }
            ];
        };
        AddEditLessionComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddEditLessionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LessionManagementModule = /** @class */ (function () {
        function LessionManagementModule() {
        }
        LessionManagementModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            LessionManagementComponent,
                            ListLessionComponent,
                            AddEditLessionComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            MaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
                            listingAngular7.ListingModule,
                        ],
                        exports: [
                            LessionManagementComponent,
                            AddEditLessionComponent
                        ]
                    },] }
        ];
        return LessionManagementModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LessionManagementService = LessionManagementService;
    exports.LessionManagementComponent = LessionManagementComponent;
    exports.LessionManagementModule = LessionManagementModule;
    exports.ɵc = MaterialModule;
    exports.ɵb = AddEditLessionComponent;
    exports.ɵa = ListLessionComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=lession-management.umd.js.map