/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, apiService, http, router, cookieService) {
        this.fb = fb;
        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
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
            locationname: ['', Validators.required],
            message: ['', Validators.required],
            // tslint:disable-next-line:max-line-length
            multipleemails: this.fb.array([this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
            phones: this.fb.array([this.fb.group({ phone: ['', Validators.required] })]),
            addresses: this.fb.array([this.fb.group({ address: ['', Validators.required] })])
        });
    }
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
            allData.locationname = this.contactUsForm.value.locationname;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            var data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.cookieService.get('jwtToken')
            };
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
    /**
     * @return {?}
     */
    ContactusComponent.prototype.setJwtToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var link = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/temptoken";
        /** @type {?} */
        var data;
        this.http.post(link, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            // console.log(res);
            /** @type {?} */
            var result = {};
            result = res;
            _this.cookieService.set('jwtToken', result.token);
            _this.cookieService.getAll();
        }));
    };
    ContactusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-contactus',
                    template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n  <button *ngIf=\"setJwtTokenValue != ''\" mat-raised-button color=\"warn\" (click)=\"setJwtToken()\"> SetToken</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <mat-form-field>\n      <input matInput placeholder=\"Location Name \" formControlName=\"locationname\" (blur)=\"inputUntouched('locationname')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['locationname'].valid && contactUsForm.controls['locationname'].errors.required && contactUsForm.controls['locationname'].touched\">Location Name field can not be blank</mat-error>\n    </mat-form-field>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\" class=\"fromClass\" >\n  \n  \n    <mat-form-field *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n  <!--    <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid && contactUsForm.controls['locationname'].touched \">Email field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of phones.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" >\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <mat-error *ngIf=\"item.valid  \">Phone field can not be blank</mat-error>\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of addresses.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" ></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error>\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ContactusComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: HttpClient },
        { type: Router },
        { type: CookieService }
    ]; };
    ContactusComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQWEsV0FBVyxFQUFhLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLbkQ7SUF1RkUsNEJBQW1CLEVBQWUsRUFBUyxVQUFzQixFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLGFBQTRCO1FBQW5JLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTs7UUEzRS9JLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBTSx1REFBdUQ7O1FBQ2pGLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBUSxFQUFFLENBQUM7O1FBMkQ5Qixh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Y25CLFNBQVMsU0FBQyxrQkFBa0I7NEJBYzVCLEtBQUs7MEJBUUwsS0FBSzs2QkFPTCxLQUFLOzJCQVNMLEtBQUs7NEJBTUwsS0FBSzs4QkFVTCxLQUFLOzhCQVNMLEtBQUs7O0lBZ05SLHlCQUFDO0NBQUEsQUF4UkQsSUF3UkM7U0FqUlksa0JBQWtCOzs7SUFFN0IsMkNBQWlFOztJQUVqRSw0Q0FBMkI7O0lBQzNCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6QixxQ0FBMkI7O0lBRTNCLHVDQUEyQjs7SUFDM0IsNkNBQWlDOztJQUNqQyw4Q0FBa0M7O0lBQ2xDLDhDQUFrQzs7SUFDbEMsMENBQThCOztJQUM5QiwwQ0FBOEI7O0lBMkQ5QixzQ0FBcUI7O0lBQ3JCLHVDQUF1Qjs7SUFDdkIscUNBQXNCOztJQUl0QiwyQ0FBZ0M7O0lBQ3BCLGdDQUFzQjs7SUFBRSx3Q0FBNkI7O0lBQUUsa0NBQXVCOztJQUFFLG9DQUFxQjs7SUFBRSwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udGFjdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3R1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIENvbnRhY3R1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueTsgICAgICAgIC8vIFRoaXMgdmFyaWFibGUgaXMgdXNlIGZvciBzaG93IHRoZSBGb3JtIHRpdGxlICAgXG4gIHB1YmxpYyBlbWFpbDogYW55W10gPSBbXTtcbiAgcHVibGljIHBob25lOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgYWRkcmVzczogYW55W10gPSBbXTtcblxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJzsgICAgICAvLyB1cmwgdmFyaWFibGUgdG8gZmV0Y2ggdGhlIGFkZCBhdmFpbGFiaWxpdHkgZm9ybSBwYWdlXG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgcm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXRKd3RUb2tlblZhbHVlOiBhbnkgPSAnJzsgIFxuICBwdWJsaWMgbGlzdGluZ1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGxvZ29JbWdWYWx1ZTogYW55ID0gJyc7XG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbCA6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgbG9nb2ltZyhsb2dvVmFsIDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dvSW1nVmFsdWUgPSBsb2dvVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubG9nb0ltZ1ZhbHVlKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFkZGxpc3RpbmcobGlzdGluZ1ZhbCA6IGFueSkge1xuICAgIHRoaXMubGlzdGluZ1ZhbHVlID0gKGxpc3RpbmdWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RpbmdWYWx1ZSA9IGxpc3RpbmdWYWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMubGlzdGluZ1ZhbHVlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RpbmdWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHNldCBKd3RUb2tlbihKd3RUb2tlblZhbCA6IGFueSkge1xuICAgIHRoaXMuc2V0Snd0VG9rZW5WYWx1ZSA9IEp3dFRva2VuVmFsO1xuICB9XG5cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gc2VydmVyVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSB1cmwgYWRkRW5kcG9pbnQgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmFkZEVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCByb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgc3RhcnQgLS0tLSovXG4gIGxhdGl0dWRlID0gLTI4LjY4MzUyO1xuICBsb25naXR1ZGUgPSAtMTQ3LjIwNzg1O1xuICBtYXBUeXBlID0gJ3NhdGVsbGl0ZSc7XG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgZW5kIC0tLS0qL1xuXG5cbiAgcHVibGljIGNvbnRhY3RVc0Zvcm06IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb250YWN0VXNGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBsb2NhdGlvbm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBtZXNzYWdlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgbXVsdGlwbGVlbWFpbHM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pXSksXG4gICAgICBwaG9uZXM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pLFxuICAgICAgYWRkcmVzc2VzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pXG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBtdWx0aXBsZWVtYWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnbXVsdGlwbGVlbWFpbHMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICAvKiBBZGQgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRFbWFpbCgpIHtcbiAgICBjb25zb2xlLmxvZygnb2trJyk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5tdWx0aXBsZWVtYWlscy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pKTtcbiAgfVxuICAvKiBBZGQgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVFbWFpbChpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLm11bHRpcGxlZW1haWxzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG5cbiAgZ2V0IGFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnYWRkcmVzc2VzJykgYXMgRm9ybUFycmF5O1xuICB9XG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRBZGRyZXNzKCkge1xuICAgIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLmFkZHJlc3Nlcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBhZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKTtcbiAgfVxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZUFkZHJlc3MoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5hZGRyZXNzZXMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBhZGRyZXNzZXMgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgcGhvbmVzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBwaG9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ3Bob25lcycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuXG4gIGFkZFBob25lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLnBob25lcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSk7XG4gIH1cblxuICAvKiBBZGQgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIHBob25lcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZVBob25lKGluZGV4KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMucGhvbmVzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIHBob25lcyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG5cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBzdGFydCBoZXJlXG4gIGNvbnRhY3RVc0Zvcm1TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsaWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUpO1xuXG5cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5tdWx0aXBsZWVtYWlscykge1xuICAgICAgICB0aGlzLmVtYWlsLnB1c2goa2V5LmVtYWlscyk7XG5cbiAgICAgIH1cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUucGhvbmVzKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5waG9uZXMpIHtcbiAgICAgICAgdGhpcy5waG9uZS5wdXNoKGtleS5waG9uZSk7XG5cbiAgICAgIH1cbiAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgLy8gQWxsIGFkZHJlc3NlcyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLmFkZHJlc3Nlcykge1xuICAgICAgICB0aGlzLmFkZHJlc3MucHVzaChrZXkuYWRkcmVzcyk7XG4gICAgICB9XG4gICAgICAvLyBBbGwgYWRkcmVzc2VzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgbGV0IGFsbERhdGE6IGFueSA9e307XG4gICAgICBhbGxEYXRhLmxvY2F0aW9ubmFtZSA9IHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5sb2NhdGlvbm5hbWU7XG4gICAgICBhbGxEYXRhLmFkZHJlc3MgPSB0aGlzLmFkZHJlc3M7XG4gICAgICBhbGxEYXRhLnBob25lID0gdGhpcy5waG9uZTtcbiAgICAgIGFsbERhdGEuZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgICAgYWxsRGF0YS5tZXNzYWdlID0gdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm1lc3NhZ2U7IFxuICAgICAgLy8gY29uc29sZS5sb2coYWxsRGF0YSk7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50RGF0YS5zb3VyY2UsXG4gICAgICAgIFwiZGF0YVwiOiBhbGxEYXRhLFxuICAgICAgICBcInRva2VuXCI6IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJylcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cblxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBlbmQgaGVyZVxuXG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbiAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuICBnb1RvTGlzdGluZygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxuXG5cbiAgc2V0Snd0VG9rZW4oKSB7XG4gICAgbGV0IGxpbms6IGFueSA9IFwiaHR0cHM6Ly9vODIwY3YybHU4LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24vYXBpL3RlbXB0b2tlblwiO1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgdGhpcy5odHRwLnBvc3QobGluayxkYXRhKS5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk9e307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCdqd3RUb2tlbicsIHJlc3VsdC50b2tlbik7XG4gICAgICB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgfSlcbiAgfVxuXG5cbn1cblxuIl19