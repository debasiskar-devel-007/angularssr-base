import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ListingModule } from 'listing-angular7';
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
import { Injectable, NgModule, Component, Input, Inject, defineInjectable, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/resourcelib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourcelibService {
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
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
    ;
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    addData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    getData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    CustomRequest(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
}
ResourcelibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResourcelibService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ ResourcelibService.ngInjectableDef = defineInjectable({ factory: function ResourcelibService_Factory() { return new ResourcelibService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: ResourcelibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/resourcelib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourcelibComponent {
    // ====================================================================================================
    constructor() {
        this.loader = false;
    }
    // ======================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ResourcelibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-resourcelib',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"resourceListConfig.datasource !=null && resourceListConfig.datasource.length > 0\"\n        [datasource]=\"resourceListConfig.datasource\" [skip]=\"resourceListConfig.listArray_skip\"\n        [modify_header_array]=\"resourceListConfig.listArray_modify_header\" [sourcedata]=\"resourceListConfig.tableName\"\n        [statusarr]=\"resourceListConfig.statusarr\" [jwttoken]=\"resourceListConfig.jwtToken\"\n        [apiurl]=\"resourceListConfig.apiUrl\" [editroute]=\"resourceListConfig.editUrl\"\n        [deleteendpoint]=\"resourceListConfig.deleteEndPoint\"\n        [date_search_source]=\"resourceListConfig.view\"\n       [date_search_endpoint]=\"resourceListConfig.listEndPoint\"\n       [search_settings]=\"resourceListConfig.search_settings\"\n       [detail_datatype]=\"resourceListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"resourceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ResourcelibComponent.ctorParameters = () => [];
ResourcelibComponent.propDecorators = {
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Modules/material-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MatFileUploadModule } from 'angular-material-fileupload';
class DemoMaterialModule {
}
DemoMaterialModule.decorators = [
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/addedit-resourceapp/addedit-resourceapp.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddeditResourceappComponent {
    // ==============================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} resourceService
     * @param {?} router
     * @param {?} cookieService
     * @param {?} dialog
     */
    constructor(formBuilder, resourceService, router, cookieService, dialog) {
        this.formBuilder = formBuilder;
        this.resourceService = resourceService;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        // =============================================Declarations=====================================
        this.header_name = "ADD";
        this.buttonText = "SUBMIT";
        this.loader = false;
        this.successMessage = "Submitted Successfully";
        this.cat_array = [];
    }
    // ===========================================APP INPUT=====================================
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    // ============================================================================================
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    // =============================================GENERATE FORM=================================
    /**
     * @return {?}
     */
    generateForm() {
        this.resourceForm = this.formBuilder.group({
            category_name: ['', Validators.required],
            parent_category: ['',],
            description: ['', Validators.required],
            priority: ['', Validators.required],
            status: ['',]
        });
    }
    // ============================================================================================
    // ==========================================SUBMIT FUNCTION==========================================
    /**
     * @return {?}
     */
    onSubmit() {
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
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.resourceForm.value, this.configData.condition)
            };
            this.resourceService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.openDialog(this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialogRef.close();
                    }), 2000);
                    this.router.navigate([this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try again.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try again.");
            }));
        }
    }
    // =================================================================================================
    // ======================================GetParentCategory=============================
    /**
     * @return {?}
     */
    getParentCategory() {
        /** @type {?} */
        let data = {
            "source": "resources",
            "token": this.cookieService.get('jwtToken')
        };
        this.resourceService.getData(this.configData.endpoint2 + "/datalist", data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let result = {};
            result = response;
            this.cat_array = result.res;
            console.log(this.cat_array);
        }));
    }
    // =============================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.resourceForm.patchValue({
            category_name: defaultValue.category_name,
            parent_category: defaultValue.parent_category,
            description: defaultValue.description,
            priority: defaultValue.priority,
            status: defaultValue.status,
            userId: null,
        });
    }
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
}
AddeditResourceappComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-resourceapp',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"resourceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n        <!-- category name  -->\n        <mat-form-field>\n          <input matInput placeholder=\"Category name\" formControlName=\"category_name\">\n          <mat-error *ngIf=\"resourceForm.controls['category_name']?.touched || resourceForm.controls['category_name'].errors \n          && resourceForm.controls['category_name'].errors.required\">Category name is required.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- parent category  -->\n        <mat-form-field>\n          <mat-label>Parent Category</mat-label>\n          <select matNativeControl required formControlName=\"parent_category\">\n            <option value=\"0\">Please choose a parent</option>            \n            <option value=\"{{ i.category_name }}\" *ngFor=\"let i of cat_array\">{{ i.category_name }}</option>\n          </select>\n        </mat-form-field>\n\n        <!-- description  -->\n        <mat-form-field>\n          <textarea matInput placeholder=\"Category Description\" formControlName=\"description\"></textarea>\n          <mat-error *ngIf=\"resourceForm.controls['description']?.touched || resourceForm.controls['description'].errors \n          && resourceForm.controls['description'].errors.required\">Please add a description.</mat-error>\n        </mat-form-field>\n\n\n\n        <!-- priority  -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\">\n          <mat-error *ngIf=\"resourceForm.controls['priority']?.touched || resourceForm.controls['priority'].errors \n          && resourceForm.controls['priority'].errors.required\">Please set priority.</mat-error>\n        </mat-form-field>\n\n\n        <!-- status  -->\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Status</mat-checkbox><br>\n      \n\n\n        <!-- buttons sets  -->\n        <button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n\n\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditResourceappComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ResourcelibService },
    { type: Router },
    { type: CookieService },
    { type: MatDialog }
];
AddeditResourceappComponent.propDecorators = {
    config: [{ type: Input }]
};
// ============================================MODAL COMPONENT===========================================
class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
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
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/resourcelib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourcelibModule {
}
ResourcelibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ResourcelibComponent, AddeditResourceappComponent, Modal],
                imports: [
                    ListingModule,
                    DemoMaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    BrowserModule
                ],
                exports: [ResourcelibComponent, AddeditResourceappComponent],
                entryComponents: [Modal]
            },] }
];

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

export { ResourcelibService, ResourcelibComponent, ResourcelibModule, AddeditResourceappComponent as ɵa, Modal as ɵb, DemoMaterialModule as ɵc };

//# sourceMappingURL=resourcelib.js.map