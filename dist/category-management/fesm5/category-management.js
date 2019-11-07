import { map } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { Injectable, NgModule, Component, Input, defineInjectable, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ListingModule } from 'listing-angular7';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* set common header */
/** @type {?} */
var httpOptions = {
    headers: new HttpHeaders({
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    CategoryManagementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CategoryManagementService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CategoryManagementService.ngInjectableDef = defineInjectable({ factory: function CategoryManagementService_Factory() { return new CategoryManagementService(inject(HttpClient), inject(HttpClient)); }, token: CategoryManagementService, providedIn: "root" });
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
         */
        function (receivedCategoryData) {
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
        { type: Component, args: [{
                    selector: 'lib-category-management',
                    template: "<lib-list-category [config]=\"categoryData\"></lib-list-category>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CategoryManagementComponent.ctorParameters = function () { return []; };
    CategoryManagementComponent.propDecorators = {
        config: [{ type: Input }]
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
        { type: NgModule, args: [{
                    exports: [
                        A11yModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        PortalModule,
                        ScrollingModule,
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
    function ListCategoryComponent(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
    }
    Object.defineProperty(ListCategoryComponent.prototype, "config", {
        set: /**
         * @param {?} receivedCategoryData
         * @return {?}
         */
        function (receivedCategoryData) {
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
        { type: Component, args: [{
                    selector: 'lib-list-category',
                    template: "\n<mat-card>\n  <mat-toolbar color=\"primary\">\n      <h2>Manage Category</h2>\n  </mat-toolbar>\n</mat-card>\n\n<br />\n\n<mat-card>\n  <button (click)=\"gotoUrl(categoryListingConfig.addLink);\" class=\"add-new-button\" mat-raised-button matTooltip=\"Create New Category.\" aria-label=\"Button that displays a tooltip when focused or hovered over\">Create New</button>\n\n</mat-card>\n<br />\n\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"categoryListingConfig.datasource !=null && categoryListingConfig.datasource.length > 0\"\n      [datasource]=\"categoryListingConfig.datasource\"\n      [skip]=\"categoryListingConfig.listArray_skip\"\n      [modify_header_array]=\"categoryListingConfig.listArray_modify_header\"\n      [sourcedata]=\"categoryListingConfig.tableName\"\n      [statusarr]=\"categoryListingConfig.statusarray\"\n      [jwttoken]=\"categoryListingConfig.jwtToken\" \n      [apiurl]=\"categoryListingConfig.apiUrl\"\n      [editroute]=\"categoryListingConfig.editUrl\"\n      [deleteendpoint]=\"categoryListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"categoryListingConfig.datasource.length == 0\">No record found.</h2>\n  </mat-card>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListCategoryComponent.ctorParameters = function () { return [
        { type: CategoryManagementService },
        { type: Router }
    ]; };
    ListCategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListCategoryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditCategoryComponent = /** @class */ (function () {
    function AddEditCategoryComponent(formBuilder, httpRequest, ActivatedRoute$$1, router) {
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.ActivatedRoute = ActivatedRoute$$1;
        this.router = router;
        this.usersData = null;
        this.buttonText = 'Create';
        this.loader = false;
    }
    Object.defineProperty(AddEditCategoryComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
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
            title: [null, [Validators.required, Validators.maxLength(150)]],
            description: [null, [Validators.required, Validators.maxLength(1000)]],
            priority: [1, [Validators.required, Validators.max(100)]],
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
            this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.resetCategoryForm();
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
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
        { type: Component, args: [{
                    selector: 'lib-add-edit-category',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"categoryForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput formControlName=\"priority\" placeholder=\"Priority\" type=\"number\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.max\">Title is not more then 100.</mat-error>\n        <!-- error message start -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select formControlName=\"role\" placeholder=\"Role\">\n          <mat-option value=\"public\">Public</mat-option>\n          <mat-option value=\"private\">Private</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n      </mat-form-field>\n\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\n    </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"categoryFormSubmit();\" mat-button [disabled]=\"!categoryForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetCategoryForm();\">Reset</button>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    AddEditCategoryComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CategoryManagementService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    AddEditCategoryComponent.propDecorators = {
        config: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        CategoryManagementComponent,
                        ListCategoryComponent,
                        AddEditCategoryComponent
                    ],
                    imports: [
                        BrowserModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        ListingModule,
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

export { CategoryManagementService, CategoryManagementComponent, CategoryManagementModule, MaterialModule as ɵc, AddEditCategoryComponent as ɵb, ListCategoryComponent as ɵa };

//# sourceMappingURL=category-management.js.map