(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('@angular/common/http'), require('listing-angular7')) :
    typeof define === 'function' && define.amd ? define('category-management', ['exports', 'rxjs/operators', '@angular/platform-browser', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/core', '@angular/forms', '@angular/router', '@angular/common/http', 'listing-angular7'], factory) :
    (factory((global['category-management'] = {}),global.rxjs.operators,global.ng.platformBrowser,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.core,global.ng.forms,global.ng.router,global.ng.common.http,global.listingAngular7));
}(this, (function (exports,operators,platformBrowser,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i0,forms,router,i1,listingAngular7) { 'use strict';

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
    var CategoryManagementService = /** @class */ (function () {
        function CategoryManagementService(_http, _authHttp) {
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
        CategoryManagementService.prototype.isTokenExpired = /**
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
        CategoryManagementService.prototype.addData = /**
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
        CategoryManagementService.prototype.UpdateData = /**
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
        CategoryManagementService.prototype.getData = /**
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
        CategoryManagementService.prototype.deleteSingleData = /**
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
        CategoryManagementService.prototype.deleteMultipleData = /**
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
        CategoryManagementService.prototype.UpdateStatusForSingleData = /**
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
        CategoryManagementService.prototype.UpdateStatusForMultipleData = /**
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
        CategoryManagementService.prototype.CustomRequest = /**
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
        CategoryManagementService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CategoryManagementService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ CategoryManagementService.ngInjectableDef = i0.defineInjectable({ factory: function CategoryManagementService_Factory() { return new CategoryManagementService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient)); }, token: CategoryManagementService, providedIn: "root" });
        return CategoryManagementService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryManagementComponent = /** @class */ (function () {
        function CategoryManagementComponent() {
        }
        Object.defineProperty(CategoryManagementComponent.prototype, "config", {
            set: /**
             * @param {?} receivedCategoryData
             * @return {?}
             */ function (receivedCategoryData) {
                this.categoryData = receivedCategoryData;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CategoryManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CategoryManagementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-category-management',
                        template: "<lib-list-category [config]=\"categoryData\"></lib-list-category>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CategoryManagementComponent.ctorParameters = function () { return []; };
        CategoryManagementComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return CategoryManagementComponent;
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
    var ListCategoryComponent = /** @class */ (function () {
        function ListCategoryComponent(httpRequest, router$$1) {
            this.httpRequest = httpRequest;
            this.router = router$$1;
            this.loader = true;
        }
        Object.defineProperty(ListCategoryComponent.prototype, "config", {
            set: /**
             * @param {?} receivedCategoryData
             * @return {?}
             */ function (receivedCategoryData) {
                this.categoryListingConfig = {
                    apiUrl: receivedCategoryData.apiBaseUrl,
                    listEndPoint: "datalist",
                    datasource: receivedCategoryData.datasource,
                    tableName: receivedCategoryData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                    listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
                    admintablenameTableName: "admin",
                    statusarray: [{ val: 1, name: 'Active' }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedCategoryData.updateEndpoint,
                    editUrl: receivedCategoryData.editUrl,
                    jwtToken: receivedCategoryData.jwtToken,
                    deleteEndPoint: receivedCategoryData.deleteEndPoint,
                    addLink: receivedCategoryData.addLink
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListCategoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} url
         * @return {?}
         */
        ListCategoryComponent.prototype.gotoUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.router.navigate([url]);
            };
        ListCategoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-list-category',
                        template: "\n<mat-card>\n  <mat-toolbar color=\"primary\">\n      <h2>Manage Category</h2>\n  </mat-toolbar>\n</mat-card>\n\n<br />\n\n<mat-card>\n  <button (click)=\"gotoUrl(categoryListingConfig.addLink);\" class=\"add-new-button\" mat-raised-button matTooltip=\"Create New Category.\" aria-label=\"Button that displays a tooltip when focused or hovered over\">Create New</button>\n\n</mat-card>\n<br />\n\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"categoryListingConfig.datasource !=null && categoryListingConfig.datasource.length > 0\"\n      [datasource]=\"categoryListingConfig.datasource\"\n      [skip]=\"categoryListingConfig.listArray_skip\"\n      [modify_header_array]=\"categoryListingConfig.listArray_modify_header\"\n      [sourcedata]=\"categoryListingConfig.tableName\"\n      [statusarr]=\"categoryListingConfig.statusarray\"\n      [jwttoken]=\"categoryListingConfig.jwtToken\" \n      [apiurl]=\"categoryListingConfig.apiUrl\"\n      [editroute]=\"categoryListingConfig.editUrl\"\n      [deleteendpoint]=\"categoryListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"categoryListingConfig.datasource.length == 0\">No record found.</h2>\n  </mat-card>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListCategoryComponent.ctorParameters = function () {
            return [
                { type: CategoryManagementService },
                { type: router.Router }
            ];
        };
        ListCategoryComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListCategoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddEditCategoryComponent = /** @class */ (function () {
        function AddEditCategoryComponent(formBuilder, httpRequest, ActivatedRoute, router$$1) {
            this.formBuilder = formBuilder;
            this.httpRequest = httpRequest;
            this.ActivatedRoute = ActivatedRoute;
            this.router = router$$1;
            this.usersData = null;
            this.buttonText = 'Create';
            this.loader = false;
        }
        Object.defineProperty(AddEditCategoryComponent.prototype, "config", {
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
        AddEditCategoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loader = false;
                /* Generate form */
                this.generateForm();
                /* Checking */
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "Create";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "Update";
                        this.setDefaultValue(this.configData.defaultData);
                        break;
                }
            };
        /* Create form controll */
        /* Create form controll */
        /**
         * @return {?}
         */
        AddEditCategoryComponent.prototype.generateForm = /* Create form controll */
            /**
             * @return {?}
             */
            function () {
                /* Category create form validation */
                this.categoryForm = this.formBuilder.group({
                    title: [null, [forms.Validators.required, forms.Validators.maxLength(150)]],
                    description: [null, [forms.Validators.required, forms.Validators.maxLength(1000)]],
                    priority: [1, [forms.Validators.required, forms.Validators.max(100)]],
                    role: ['public', null],
                    status: [false, null],
                    userId: [this.configData.userData.id, null]
                });
            };
        /* Category form submit */
        /* Category form submit */
        /**
         * @return {?}
         */
        AddEditCategoryComponent.prototype.categoryFormSubmit = /* Category form submit */
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.loader = true;
                /* stop here if form is invalid */
                if (this.categoryForm.invalid) {
                    return;
                }
                else {
                    if (this.categoryForm.value.status) {
                        this.categoryForm.value.status = parseInt("1");
                    }
                    else {
                        this.categoryForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.categoryForm.value, this.configData.condition)
                    };
                    this.httpRequest.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            _this.resetCategoryForm();
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
        /* reset Category form */
        /* reset Category form */
        /**
         * @return {?}
         */
        AddEditCategoryComponent.prototype.resetCategoryForm = /* reset Category form */
            /**
             * @return {?}
             */
            function () {
                this.categoryForm.reset();
            };
        /* Set default category form value */
        /* Set default category form value */
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddEditCategoryComponent.prototype.setDefaultValue = /* Set default category form value */
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                this.categoryForm.setValue({
                    title: defaultValue.title,
                    description: defaultValue.description,
                    priority: defaultValue.priority,
                    role: defaultValue.role,
                    status: defaultValue.status,
                    userId: null
                });
            };
        AddEditCategoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-add-edit-category',
                        template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"categoryForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput formControlName=\"priority\" placeholder=\"Priority\" type=\"number\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.max\">Title is not more then 100.</mat-error>\n        <!-- error message start -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select formControlName=\"role\" placeholder=\"Role\">\n          <mat-option value=\"public\">Public</mat-option>\n          <mat-option value=\"private\">Private</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n      </mat-form-field>\n\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\n    </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"categoryFormSubmit();\" mat-button [disabled]=\"!categoryForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetCategoryForm();\">Reset</button>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        AddEditCategoryComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: CategoryManagementService },
                { type: router.ActivatedRoute },
                { type: router.Router }
            ];
        };
        AddEditCategoryComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddEditCategoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryManagementModule = /** @class */ (function () {
        function CategoryManagementModule() {
        }
        CategoryManagementModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CategoryManagementComponent,
                            ListCategoryComponent,
                            AddEditCategoryComponent
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
                            CategoryManagementComponent,
                            AddEditCategoryComponent
                        ]
                    },] }
        ];
        return CategoryManagementModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CategoryManagementService = CategoryManagementService;
    exports.CategoryManagementComponent = CategoryManagementComponent;
    exports.CategoryManagementModule = CategoryManagementModule;
    exports.ɵc = MaterialModule;
    exports.ɵb = AddEditCategoryComponent;
    exports.ɵa = ListCategoryComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=category-management.umd.js.map