/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.value;
    /** @type {?} */
    DialogData.prototype.Url;
}
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, apiService, http, router, cookieService, dialog) {
        this.fb = fb;
        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.value = '';
        this.link = '';
        this.Url = '';
        this.message = '';
        // This variable is use for show the Form title   
        this.email = [];
        this.phone = [];
        this.address = [];
        this.serverURL = ''; // url variable to fetch the add availability form page
        // url variable to fetch the add availability form page
        this.addEndpointData = '';
        this.routeingUrlValue = '';
        this.setJwtTokenValue = '';
        this.listingValue = '';
        this.logoImgValue = '';
        /*Using for google map start ----*/
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.contactUsForm = this.fb.group({
            name: ['', Validators.required],
            message: [''],
            // tslint:disable-next-line:max-line-length
            multipleemails: this.fb.array([this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
            phones: this.fb.array([this.fb.group({ phone: ['', Validators.required] })]),
            addresses: this.fb.array([this.fb.group({ address: ['', Validators.required] })])
        });
    }
    Object.defineProperty(ContactusComponent.prototype, "modaleLogo", {
        set: /**
         * @param {?} modaleLogoVal
         * @return {?}
         */
        function (modaleLogoVal) {
            this.link = modaleLogoVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
            console.log(this.formTitleValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "logoimg", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoImgValue = logoVal;
            console.log(this.logoImgValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "addlisting", {
        set: /**
         * @param {?} listingVal
         * @return {?}
         */
        function (listingVal) {
            this.listingValue = (listingVal) || '<no name set>';
            this.listingValue = listingVal;
            console.log('this.listingValue');
            console.log(this.listingValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "JwtToken", {
        set: /**
         * @param {?} JwtTokenVal
         * @return {?}
         */
        function (JwtTokenVal) {
            this.setJwtTokenValue = JwtTokenVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverURL = (serverUrlval) || '<no name set>';
            this.serverURL = serverUrlval;
            // console.log(this.serverURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
            console.log('this.addEndpointData');
            console.log(this.addEndpointData);
            // console.log(this.addEndpointData.endpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "routeingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.routeingUrlValue = (routeingUrlval) || '<no name set>';
            this.routeingUrlValue = routeingUrlval;
            // console.log(this.routeingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContactusComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL);
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    Object.defineProperty(ContactusComponent.prototype, "multipleemails", {
        /* Multiple emails created start here*/
        get: /* Multiple emails created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add email field start here */
    /* Add email field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addEmail = /* Add email field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    };
    /* Add email field end here */
    /* Remove email field start here */
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeEmail = /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "addresses", {
        /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        get: /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('addresses')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addAddress = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    };
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeAddress = /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.addresses.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "phones", {
        /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        get: /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('phones')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addPhone = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    };
    /* Add phones field end here */
    /* Remove phones field start here */
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removePhone = /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.phones.removeAt(index);
    };
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    ContactusComponent.prototype.contactUsFormSubmit = /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a, e_2, _b, e_3, _c;
        /** @type {?} */
        var x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            try {
                // console.log('ok');
                // console.log(this.contactUsForm.value);
                // All emails sites in a Array start here
                for (var _d = tslib_1.__values(this.contactUsForm.value.multipleemails), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    this.email.push(key.emails);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                // All emails sites in a Array end here
                // All Phones sites in a Array start here
                // console.log(this.contactUsForm.value.phones);
                for (var _f = tslib_1.__values(this.contactUsForm.value.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var key = _g.value;
                    this.phone.push(key.phone);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                // All Phones sites in a Array end here
                // All addresses sites in a Array start here
                for (var _h = tslib_1.__values(this.contactUsForm.value.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var key = _j.value;
                    this.address.push(key.address);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            var allData = {};
            allData.name = this.contactUsForm.value.name;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            var data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.addEndpointData.token
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    /** @type {?} */
                    var dialogRef = _this.dialog.open(successModalComponent, {
                        width: '250px',
                        data: { value: result.status, Url: _this.link }
                    });
                    _this.formDirective.resetForm();
                }
            }));
        }
    };
    // contactUsForm submit function end here
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    ContactusComponent.prototype.inputUntouched = 
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ContactusComponent.prototype.goToListing = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    };
    ContactusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-contactus',
                    template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <div class=\"fromClass\">\n  <mat-form-field>\n      <input matInput placeholder=\"Name \" formControlName=\"name\" (blur)=\"inputUntouched('name')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['name'].valid && contactUsForm.controls['name'].errors.required && contactUsForm.controls['name'].touched\">Name field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\"  *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" class=\"fromClass\" >\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n     <!-- <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error> -->\n      <!-- <mat-error *ngIf=\"!item.valid  \">Email field can not be blank</mat-error> -->\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" *ngFor=\"let item of phones.controls; let pointIndex=index\" class=\"fromClass\">\n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <!-- <mat-error *ngIf=\"!item.valid  \">Phone field can not be blank</mat-error> -->\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" *ngFor=\"let item of addresses.controls; let pointIndex=index\"  class=\"fromClass\">\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" (blur)=\"inputUntouched('address')\"></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <!-- <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error> -->\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <div class=\"fromClass\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n  </div>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ContactusComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: HttpClient },
        { type: Router },
        { type: CookieService },
        { type: MatDialog }
    ]; };
    ContactusComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        modaleLogo: [{ type: Input }],
        formTitle: [{ type: Input }],
        logoimg: [{ type: Input }],
        addlisting: [{ type: Input }],
        JwtToken: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        routeingUrl: [{ type: Input }]
    };
    return ContactusComponent;
}());
export { ContactusComponent };
if (false) {
    /** @type {?} */
    ContactusComponent.prototype.formDirective;
    /** @type {?} */
    ContactusComponent.prototype.value;
    /** @type {?} */
    ContactusComponent.prototype.link;
    /** @type {?} */
    ContactusComponent.prototype.Url;
    /** @type {?} */
    ContactusComponent.prototype.message;
    /** @type {?} */
    ContactusComponent.prototype.formTitleValue;
    /** @type {?} */
    ContactusComponent.prototype.email;
    /** @type {?} */
    ContactusComponent.prototype.phone;
    /** @type {?} */
    ContactusComponent.prototype.address;
    /** @type {?} */
    ContactusComponent.prototype.serverURL;
    /** @type {?} */
    ContactusComponent.prototype.addEndpointData;
    /** @type {?} */
    ContactusComponent.prototype.routeingUrlValue;
    /** @type {?} */
    ContactusComponent.prototype.setJwtTokenValue;
    /** @type {?} */
    ContactusComponent.prototype.listingValue;
    /** @type {?} */
    ContactusComponent.prototype.logoImgValue;
    /** @type {?} */
    ContactusComponent.prototype.latitude;
    /** @type {?} */
    ContactusComponent.prototype.longitude;
    /** @type {?} */
    ContactusComponent.prototype.mapType;
    /** @type {?} */
    ContactusComponent.prototype.contactUsForm;
    /** @type {?} */
    ContactusComponent.prototype.fb;
    /** @type {?} */
    ContactusComponent.prototype.apiService;
    /** @type {?} */
    ContactusComponent.prototype.http;
    /** @type {?} */
    ContactusComponent.prototype.router;
    /** @type {?} */
    ContactusComponent.prototype.cookieService;
    /** @type {?} */
    ContactusComponent.prototype.dialog;
}
var successModalComponent = /** @class */ (function () {
    function successModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    /**
     * @return {?}
     */
    successModalComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    successModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'successModal',
                    template: "\n  \n<span style=\"text-align: center\"  *ngIf=\"data.Url != ''\" >\n<img style=\"max-width: 100%; text-align: center\" [src]=\"data.Url\">\n</span>\n\n<div mat-dialog-content>\n<p *ngIf=\"data.value.length <= 7\">Thanks! your account has been successfully created</p>\n<p *ngIf=\"data.value.length >= 8\">{{data.value}}</p>\n\n</div>\n<div mat-dialog-actions>\n<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\n</div>\n\n  "
                }] }
    ];
    /** @nocollapse */
    successModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return successModalComponent;
}());
export { successModalComponent };
if (false) {
    /** @type {?} */
    successModalComponent.prototype.dialogRef;
    /** @type {?} */
    successModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvY29udGFjdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUU3RSxnQ0FHQzs7O0lBRkMsMkJBQWM7O0lBQ2QseUJBQVM7O0FBTVg7SUFvR0UsNEJBQW1CLEVBQWUsRUFBUyxVQUFzQixFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLGFBQTRCLEVBQVMsTUFBaUI7UUFBN0osT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXpGekssVUFBSyxHQUFNLEVBQUUsQ0FBQztRQUNkLFNBQUksR0FBTSxFQUFFLENBQUM7UUFDYixRQUFHLEdBQU0sRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFRLEVBQUUsQ0FBQzs7UUFHbEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFNLHVEQUF1RDs7UUFDakYsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFRLEVBQUUsQ0FBQzs7UUFtRTlCLGFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNyQixjQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQU1wQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7WUFFYixjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLDBFQUEwRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM00sTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVFLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUVsRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBakZELHNCQUVJLDBDQUFVOzs7OztRQUZkLFVBRWUsYUFBbUI7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFFVyx5Q0FBUzs7Ozs7UUFGcEIsVUFFcUIsWUFBcUI7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFFVyx1Q0FBTzs7Ozs7UUFGbEIsVUFFbUIsT0FBZ0I7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwwQ0FBVTs7Ozs7UUFEZCxVQUNlLFVBQWdCO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBR0Qsc0JBRUksd0NBQVE7Ozs7O1FBRlosVUFFYSxXQUFpQjtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBRUkseUNBQVM7Ozs7O1FBRmIsVUFFYyxZQUFpQjtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQzlCLCtCQUErQjtRQUVqQyxDQUFDOzs7T0FBQTtJQUdELHNCQUNJLDJDQUFXOzs7OztRQURmLFVBQ2dCLGNBQW1CO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xDLDhDQUE4QztRQUNoRCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDJDQUFXOzs7OztRQURmLFVBQ2dCLGNBQW1CO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO1lBQ3ZDLHNDQUFzQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQXVCRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsK0JBQStCO1FBRy9CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsOENBQThDO0lBRWhELENBQUM7SUFFRCxzQkFBSSw4Q0FBYztRQURsQix1Q0FBdUM7Ozs7O1FBQ3ZDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFhLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBZ0M7Ozs7O0lBQ2hDLHFDQUFROzs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLDBFQUEwRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdk0sQ0FBQztJQUNELDhCQUE4QjtJQUU5QixtQ0FBbUM7Ozs7Ozs7SUFDbkMsd0NBQVc7Ozs7OztJQUFYLFVBQVksS0FBSztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQU9ELHNCQUFJLHlDQUFTO1FBTmIsaUNBQWlDO1FBQ2pDLHFDQUFxQztRQUdyQywwQ0FBMEM7Ozs7Ozs7UUFFMUM7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFhLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFDRCxvQ0FBb0M7Ozs7O0lBQ3BDLHVDQUFVOzs7O0lBQVY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0Qsa0NBQWtDO0lBRWxDLHVDQUF1Qzs7Ozs7OztJQUN2QywwQ0FBYTs7Ozs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBTUQsc0JBQUksc0NBQU07UUFMVixxQ0FBcUM7UUFDckMsd0NBQXdDO1FBR3hDLHVDQUF1Qzs7Ozs7OztRQUN2QztZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQWEsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELG9DQUFvQzs7Ozs7SUFFcEMscUNBQVE7Ozs7SUFBUjtRQUNFLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELCtCQUErQjtJQUUvQixvQ0FBb0M7Ozs7Ozs7SUFDcEMsd0NBQVc7Ozs7OztJQUFYLFVBQVksS0FBSztRQUNmLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUtyQywyQ0FBMkM7Ozs7Ozs7SUFDM0MsZ0RBQW1COzs7Ozs7SUFBbkI7UUFBQSxpQkFzRUM7OztZQW5FSyxDQUFNO1FBQ1YsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7U0FFaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFOztnQkFDNUIscUJBQXFCO2dCQUVyQix5Q0FBeUM7Z0JBR3pDLHlDQUF5QztnQkFFekMsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBdEQsSUFBTSxHQUFHLFdBQUE7b0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUU3Qjs7Ozs7Ozs7OztnQkFDRCx1Q0FBdUM7Z0JBRXZDLHlDQUF5QztnQkFFekMsZ0RBQWdEO2dCQUNoRCxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO29CQUE5QyxJQUFNLEdBQUcsV0FBQTtvQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBRTVCOzs7Ozs7Ozs7O2dCQUNOLHVDQUF1QztnQkFFbEMsNENBQTRDO2dCQUU1QyxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFBLGdCQUFBLDRCQUFFO29CQUFqRCxJQUFNLEdBQUcsV0FBQTtvQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2hDOzs7Ozs7Ozs7OztnQkFHRyxPQUFPLEdBQU8sRUFBRTtZQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMzQixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7O2dCQUUvQyxJQUFJLEdBQVE7Z0JBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTtnQkFDckMsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSzthQUNwQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsR0FBRzs7b0JBQ3JDLE1BQVc7Z0JBQ2YsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFOzs7d0JBRXpCLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDeEQsS0FBSyxFQUFFLE9BQU87d0JBQ2QsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUM7cUJBQzdDLENBQUM7b0JBRUYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDaEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUVKO0lBSUgsQ0FBQztJQUVELHlDQUF5Qzs7Ozs7O0lBSXpDLDJDQUFjOzs7Ozs7SUFBZCxVQUFlLEdBQVE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7O0lBSUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQTNSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDRoSkFBeUM7O2lCQUUxQzs7OztnQkFuQm1CLFdBQVc7Z0JBQ3RCLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixNQUFNO2dCQUNOLGFBQWE7Z0JBQ2tCLFNBQVM7OztnQ0FtQjlDLFNBQVMsU0FBQyxrQkFBa0I7NkJBb0I1QixLQUFLOzRCQU9MLEtBQUs7MEJBUUwsS0FBSzs2QkFPTCxLQUFLOzJCQVNMLEtBQUs7NEJBTUwsS0FBSzs4QkFVTCxLQUFLOzhCQVNMLEtBQUs7O0lBd01SLHlCQUFDO0NBQUEsQUE3UkQsSUE2UkM7U0F0Ulksa0JBQWtCOzs7SUFFN0IsMkNBQWlFOztJQUVqRSxtQ0FBcUI7O0lBQ3JCLGtDQUFvQjs7SUFDcEIsaUNBQW1COztJQUNuQixxQ0FBeUI7O0lBRXpCLDRDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pCLHFDQUEyQjs7SUFFM0IsdUNBQTJCOztJQUMzQiw2Q0FBaUM7O0lBQ2pDLDhDQUFrQzs7SUFDbEMsOENBQWtDOztJQUNsQywwQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFtRTlCLHNDQUFxQjs7SUFDckIsdUNBQXVCOztJQUN2QixxQ0FBc0I7O0lBSXRCLDJDQUFnQzs7SUFDcEIsZ0NBQXNCOztJQUFFLHdDQUE2Qjs7SUFBRSxrQ0FBdUI7O0lBQUUsb0NBQXFCOztJQUFFLDJDQUFtQzs7SUFBRSxvQ0FBd0I7O0FBNExsTDtJQXNCRSwrQkFDUyxTQUE4QyxFQUNyQixJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQztRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEIsQ0FBQzs7OztJQUdKLHlDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGljQWVUO2lCQUVGOzs7O2dCQTdUeUIsWUFBWTtnREFrVWpDLE1BQU0sU0FBQyxlQUFlOztJQVEzQiw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBWlkscUJBQXFCOzs7SUFHOUIsMENBQXFEOztJQUNyRCxxQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFZpZXdDaGlsZCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICB2YWx1ZTogc3RyaW5nO1xuICBVcmw6IGFueTtcbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbnRhY3R1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWN0dXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgcHVibGljIHZhbHVlOiBhbnk9Jyc7XG4gIHB1YmxpYyBsaW5rOiBhbnk9Jyc7XG4gIHB1YmxpYyBVcmw6IGFueT0nJztcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55OyAgICAgICAgLy8gVGhpcyB2YXJpYWJsZSBpcyB1c2UgZm9yIHNob3cgdGhlIEZvcm0gdGl0bGUgICBcbiAgcHVibGljIGVtYWlsOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgcGhvbmU6IGFueVtdID0gW107XG4gIHB1YmxpYyBhZGRyZXNzOiBhbnlbXSA9IFtdO1xuXG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnOyAgICAgIC8vIHVybCB2YXJpYWJsZSB0byBmZXRjaCB0aGUgYWRkIGF2YWlsYWJpbGl0eSBmb3JtIHBhZ2VcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNldEp3dFRva2VuVmFsdWU6IGFueSA9ICcnOyAgXG4gIHB1YmxpYyBsaXN0aW5nVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgbG9nb0ltZ1ZhbHVlOiBhbnkgPSAnJztcblxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIG1vZGFsIGxvZ29cblxuICBzZXQgbW9kYWxlTG9nbyhtb2RhbGVMb2dvVmFsIDogYW55KSB7XG4gICAgdGhpcy5saW5rID0gbW9kYWxlTG9nb1ZhbDtcbiAgfVxuICBcblxuICBASW5wdXQoKVxuICBcbiAgcHVibGljIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsIDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1UaXRsZVZhbHVlKVxuICB9XG5cblxuICBASW5wdXQoKVxuICBcbiAgcHVibGljIHNldCBsb2dvaW1nKGxvZ29WYWwgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ29JbWdWYWx1ZSA9IGxvZ29WYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5sb2dvSW1nVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWRkbGlzdGluZyhsaXN0aW5nVmFsIDogYW55KSB7XG4gICAgdGhpcy5saXN0aW5nVmFsdWUgPSAobGlzdGluZ1ZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubGlzdGluZ1ZhbHVlID0gbGlzdGluZ1ZhbDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5saXN0aW5nVmFsdWUnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdGluZ1ZhbHVlKVxuICB9XG5cblxuICBASW5wdXQoKVxuICBcbiAgc2V0IEp3dFRva2VuKEp3dFRva2VuVmFsIDogYW55KSB7XG4gICAgdGhpcy5zZXRKd3RUb2tlblZhbHVlID0gSnd0VG9rZW5WYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHVybCBhZGRFbmRwb2ludCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuYWRkRW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbiAgLypVc2luZyBmb3IgZ29vZ2xlIG1hcCBzdGFydCAtLS0tKi9cbiAgbGF0aXR1ZGUgPSAtMjguNjgzNTI7XG4gIGxvbmdpdHVkZSA9IC0xNDcuMjA3ODU7XG4gIG1hcFR5cGUgPSAnc2F0ZWxsaXRlJztcbiAgLypVc2luZyBmb3IgZ29vZ2xlIG1hcCBlbmQgLS0tLSovXG5cblxuICBwdWJsaWMgY29udGFjdFVzRm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIHRoaXMuY29udGFjdFVzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJ10sXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICBtdWx0aXBsZWVtYWlsczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IGVtYWlsczogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0gfSldKSxcbiAgICAgIHBob25lczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pXSksXG4gICAgICBhZGRyZXNzZXM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBhZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pXSlcblxuICAgIH0pO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpO1xuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuICAvKiBNdWx0aXBsZSBlbWFpbHMgY3JlYXRlZCBzdGFydCBoZXJlKi9cbiAgZ2V0IG11bHRpcGxlZW1haWxzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdtdWx0aXBsZWVtYWlscycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIC8qIEFkZCBlbWFpbCBmaWVsZCBzdGFydCBoZXJlICovXG4gIGFkZEVtYWlsKCkge1xuICAgIGNvbnNvbGUubG9nKCdva2snKTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLm11bHRpcGxlZW1haWxzLnB1c2godGhpcy5mYi5ncm91cCh7IGVtYWlsczogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0gfSkpO1xuICB9XG4gIC8qIEFkZCBlbWFpbCBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBlbWFpbCBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZUVtYWlsKGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMubXVsdGlwbGVlbWFpbHMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBlbWFpbCBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBlbWFpbHMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuICAvKiBNdWx0aXBsZSBhZGRyZXNzZXMgY3JlYXRlZCBzdGFydCBoZXJlKi9cblxuICBnZXQgYWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdhZGRyZXNzZXMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIGFkZEFkZHJlc3MoKSB7XG4gICAgY29uc29sZS5sb2coJ29raycpO1xuICAgIHRoaXMuYWRkcmVzc2VzLnB1c2godGhpcy5mYi5ncm91cCh7IGFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpO1xuICB9XG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlQWRkcmVzcyhpbmRleCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLmFkZHJlc3Nlcy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIGFkZHJlc3NlcyBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBhZGRyZXNzZXMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuICAvKiBNdWx0aXBsZSBwaG9uZXMgY3JlYXRlZCBzdGFydCBoZXJlKi9cbiAgZ2V0IHBob25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgncGhvbmVzJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG5cbiAgYWRkUGhvbmUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29raycpO1xuICAgIHRoaXMucGhvbmVzLnB1c2godGhpcy5mYi5ncm91cCh7IHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKTtcbiAgfVxuXG4gIC8qIEFkZCBwaG9uZXMgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgcGhvbmVzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlUGhvbmUoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5waG9uZXMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBwaG9uZXMgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgcGhvbmVzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cblxuXG4gIC8vIGNvbnRhY3RVc0Zvcm0gc3VibWl0IGZ1bmN0aW9uIHN0YXJ0IGhlcmVcbiAgY29udGFjdFVzRm9ybVN1Ym1pdCgpIHtcblxuXG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsaWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUpO1xuXG5cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5tdWx0aXBsZWVtYWlscykge1xuICAgICAgICB0aGlzLmVtYWlsLnB1c2goa2V5LmVtYWlscyk7XG5cbiAgICAgIH1cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUucGhvbmVzKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5waG9uZXMpIHtcbiAgICAgICAgdGhpcy5waG9uZS5wdXNoKGtleS5waG9uZSk7XG5cbiAgICAgIH1cbiAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgLy8gQWxsIGFkZHJlc3NlcyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLmFkZHJlc3Nlcykge1xuICAgICAgICB0aGlzLmFkZHJlc3MucHVzaChrZXkuYWRkcmVzcyk7XG4gICAgICB9XG4gICAgICAvLyBBbGwgYWRkcmVzc2VzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgbGV0IGFsbERhdGE6IGFueSA9e307XG4gICAgICBhbGxEYXRhLm5hbWUgPSB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubmFtZTtcbiAgICAgIGFsbERhdGEuYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgIGFsbERhdGEucGhvbmUgPSB0aGlzLnBob25lO1xuICAgICAgYWxsRGF0YS5lbWFpbCA9IHRoaXMuZW1haWw7XG4gICAgICBhbGxEYXRhLm1lc3NhZ2UgPSB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubWVzc2FnZTsgXG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGxEYXRhKTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnREYXRhLnNvdXJjZSxcbiAgICAgICAgXCJkYXRhXCI6IGFsbERhdGEsXG4gICAgICAgIFwidG9rZW5cIjogdGhpcy5hZGRFbmRwb2ludERhdGEudG9rZW5cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICBcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihzdWNjZXNzTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgICAgICAgZGF0YToge3ZhbHVlOiByZXN1bHQuc3RhdHVzLCBVcmw6IHRoaXMubGlua31cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBlbmQgaGVyZVxuXG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbiAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuICBnb1RvTGlzdGluZygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1Y2Nlc3NNb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gIFxuPHNwYW4gc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIiAgKm5nSWY9XCJkYXRhLlVybCAhPSAnJ1wiID5cbjxpbWcgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlclwiIFtzcmNdPVwiZGF0YS5VcmxcIj5cbjwvc3Bhbj5cblxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG48cCAqbmdJZj1cImRhdGEudmFsdWUubGVuZ3RoIDw9IDdcIj5UaGFua3MhIHlvdXIgYWNjb3VudCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgY3JlYXRlZDwvcD5cbjxwICpuZ0lmPVwiZGF0YS52YWx1ZS5sZW5ndGggPj0gOFwiPnt7ZGF0YS52YWx1ZX19PC9wPlxuXG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cIlwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG5cbiAgYCxcblxufSlcbmV4cG9ydCBjbGFzcyBzdWNjZXNzTW9kYWxDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxzdWNjZXNzTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgfVxuXG4gICAgXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59Il19