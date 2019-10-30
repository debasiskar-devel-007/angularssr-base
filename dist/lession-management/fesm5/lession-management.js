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
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ListingModule } from 'listing-angular7';
import { Injectable, NgModule, Component, Input, defineInjectable, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
    LessionManagementService.prototype.UpdateData = /**
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
    LessionManagementService.prototype.getData = /**
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
    LessionManagementService.prototype.deleteSingleData = /**
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
    LessionManagementService.prototype.deleteMultipleData = /**
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
    LessionManagementService.prototype.UpdateStatusForSingleData = /**
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
    LessionManagementService.prototype.UpdateStatusForMultipleData = /**
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
    LessionManagementService.prototype.CustomRequest = /**
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
    LessionManagementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LessionManagementService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ LessionManagementService.ngInjectableDef = defineInjectable({ factory: function LessionManagementService_Factory() { return new LessionManagementService(inject(HttpClient), inject(HttpClient)); }, token: LessionManagementService, providedIn: "root" });
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
         */
        function (receivedLessionData) {
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
        { type: Component, args: [{
                    selector: 'lib-lession-management',
                    template: "<lib-list-lession [config]=\"lessionData\"></lib-list-lession>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LessionManagementComponent.ctorParameters = function () { return []; };
    LessionManagementComponent.propDecorators = {
        config: [{ type: Input }]
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
var ListLessionComponent = /** @class */ (function () {
    function ListLessionComponent(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
    }
    Object.defineProperty(ListLessionComponent.prototype, "config", {
        set: /**
         * @param {?} receivedLessionData
         * @return {?}
         */
        function (receivedLessionData) {
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
        { type: Component, args: [{
                    selector: 'lib-list-lession',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<!-- <mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"lessionListingConfig.datasource !=null && lessionListingConfig.datasource.length > 0\"\n    [datasource]=\"lessionListingConfig.datasource\"\n    [skip]=\"lessionListingConfig.listArray_skip\"\n    [modify_header_array]=\"lessionListingConfig.listArray_modify_header\"\n    [sourcedata]=\"lessionListingConfig.tableName\"\n    [statusarr]=\"lessionListingConfig.statusArray\"\n    [jwttoken]=\"lessionListingConfig.jwtToken\" \n    [apiurl]=\"lessionListingConfig.apiUrl\"\n    [editroute]=\"lessionListingConfig.editUrl\"\n    [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing> -->\n\n\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"lessionListingConfig.datasource != null && lessionListingConfig.datasource.length > 0\"\n      [datasource]=\"lessionListingConfig.datasource\" [skip]=\"lessionListingConfig.listArray_skip\"\n      [modify_header_array]=\"lessionListingConfig.listArray_modify_header\" [sourcedata]=\"lessionListingConfig.tableName\"\n      [statusarr]=\"lessionListingConfig.statusarr\" [jwttoken]=\"lessionListingConfig.jwtToken\"\n      [apiurl]=\"lessionListingConfig.apiUrl\" [editroute]=\"lessionListingConfig.editUrl\"\n      [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"lessionListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: ["h2{margin:auto}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.add-new-button{float:right}.spinner{text-align:center;margin:auto;height:100px}mat-toolbar{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListLessionComponent.ctorParameters = function () { return [
        { type: LessionManagementService },
        { type: Router }
    ]; };
    ListLessionComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListLessionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditLessionComponent = /** @class */ (function () {
    function AddEditLessionComponent(formBuilder, httpRequest, ActivatedRoute$$1, router) {
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.ActivatedRoute = ActivatedRoute$$1;
        this.router = router;
        this.usersData = null;
        this.buttonText = null;
        this.loader = false;
    }
    Object.defineProperty(AddEditLessionComponent.prototype, "config", {
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
            title: ['', [Validators.required, Validators.maxLength(150)]],
            description: ['', [Validators.required, Validators.maxLength(5000)]],
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
        this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.status == "success") {
                _this.resetlessionForm();
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
        { type: Component, args: [{
                    selector: 'lib-add-edit-lession',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"lessionForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n\n\n\n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"lessionFormSubmit();\" mat-button [disabled]=\"!lessionForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetlessionForm();\">Reset</button>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    AddEditLessionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: LessionManagementService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    AddEditLessionComponent.propDecorators = {
        config: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        LessionManagementComponent,
                        ListLessionComponent,
                        AddEditLessionComponent
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

export { LessionManagementService, LessionManagementComponent, LessionManagementModule, MaterialModule as ɵc, AddEditLessionComponent as ɵb, ListLessionComponent as ɵa };

//# sourceMappingURL=lession-management.js.map