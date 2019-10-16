/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
export class ContactusComponent {
    /**
     * @param {?} fb
     * @param {?} apiService
     * @param {?} http
     * @param {?} router
     * @param {?} cookieService
     */
    constructor(fb, apiService, http, router, cookieService) {
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
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logoimg(logoVal) {
        this.logoImgValue = logoVal;
        console.log(this.logoImgValue);
    }
    /**
     * @param {?} listingVal
     * @return {?}
     */
    set addlisting(listingVal) {
        this.listingValue = (listingVal) || '<no name set>';
        this.listingValue = listingVal;
        console.log('this.listingValue');
        console.log(this.listingValue);
    }
    /**
     * @param {?} JwtTokenVal
     * @return {?}
     */
    set JwtToken(JwtTokenVal) {
        this.setJwtTokenValue = JwtTokenVal;
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        // console.log(this.serverURL);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        console.log('this.addEndpointData');
        console.log(this.addEndpointData);
        // console.log(this.addEndpointData.endpoint);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set routeingUrl(routeingUrlval) {
        this.routeingUrlValue = (routeingUrlval) || '<no name set>';
        this.routeingUrlValue = routeingUrlval;
        // console.log(this.routeingUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    /* Multiple emails created start here*/
    /**
     * @return {?}
     */
    get multipleemails() {
        return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
    }
    /* Add email field start here */
    /**
     * @return {?}
     */
    addEmail() {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    }
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeEmail(index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    }
    /* Remove email field end here */
    /* Multiple emails created end here*/
    /* Multiple addresses created start here*/
    /**
     * @return {?}
     */
    get addresses() {
        return (/** @type {?} */ (this.contactUsForm.get('addresses')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addAddress() {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    }
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeAddress(index) {
        // console.log(index);
        this.addresses.removeAt(index);
    }
    /* Remove addresses field end here */
    /* Multiple addresses created end here*/
    /* Multiple phones created start here*/
    /**
     * @return {?}
     */
    get phones() {
        return (/** @type {?} */ (this.contactUsForm.get('phones')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addPhone() {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    }
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removePhone(index) {
        // console.log(index);
        this.phones.removeAt(index);
    }
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    contactUsFormSubmit() {
        /** @type {?} */
        let x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            // console.log('ok');
            // console.log(this.contactUsForm.value);
            // All emails sites in a Array start here
            for (const key of this.contactUsForm.value.multipleemails) {
                this.email.push(key.emails);
            }
            // All emails sites in a Array end here
            // All Phones sites in a Array start here
            // console.log(this.contactUsForm.value.phones);
            for (const key of this.contactUsForm.value.phones) {
                this.phone.push(key.phone);
            }
            // All Phones sites in a Array end here
            // All addresses sites in a Array start here
            for (const key of this.contactUsForm.value.addresses) {
                this.address.push(key.address);
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            let allData = {};
            allData.locationname = this.contactUsForm.value.locationname;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            let data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.cookieService.get('jwtToken')
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    this.formDirective.resetForm();
                }
            }));
        }
    }
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    goToListing() {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    }
    /**
     * @return {?}
     */
    setJwtToken() {
        /** @type {?} */
        let link = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/temptoken";
        /** @type {?} */
        let data;
        this.http.post(link, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            // console.log(res);
            /** @type {?} */
            let result = {};
            result = res;
            this.cookieService.set('jwtToken', result.token);
            this.cookieService.getAll();
        }));
    }
}
ContactusComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus',
                template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n  <button *ngIf=\"setJwtTokenValue != ''\" mat-raised-button color=\"warn\" (click)=\"setJwtToken()\"> SetToken</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <mat-form-field>\n      <input matInput placeholder=\"Location Name \" formControlName=\"locationname\" (blur)=\"inputUntouched('locationname')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['locationname'].valid && contactUsForm.controls['locationname'].errors.required && contactUsForm.controls['locationname'].touched\">Location Name field can not be blank</mat-error>\n    </mat-form-field>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\" class=\"fromClass\" >\n  \n  \n    <mat-form-field *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n  <!--    <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid && contactUsForm.controls['locationname'].touched \">Email field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of phones.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" >\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <mat-error *ngIf=\"item.valid  \">Phone field can not be blank</mat-error>\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of addresses.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" ></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error>\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ContactusComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: HttpClient },
    { type: Router },
    { type: CookieService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVluRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQWdGN0IsWUFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsYUFBNEI7UUFBbkksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlOztRQTNFL0ksVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFNLHVEQUF1RDs7UUFDakYsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxH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SUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBclJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZ2xKQUF5Qzs7YUFFMUM7Ozs7WUFibUIsV0FBVztZQUN0QixVQUFVO1lBQ1YsVUFBVTtZQUNWLE1BQU07WUFDTixhQUFhOzs7NEJBY25CLFNBQVMsU0FBQyxrQkFBa0I7d0JBYzVCLEtBQUs7c0JBUUwsS0FBSzt5QkFPTCxLQUFLO3VCQVNMLEtBQUs7d0JBTUwsS0FBSzswQkFVTCxLQUFLOzBCQVNMLEtBQUs7Ozs7SUEvRE4sMkNBQWlFOztJQUVqRSw0Q0FBMkI7O0lBQzNCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6QixxQ0FBMkI7O0lBRTNCLHVDQUEyQjs7SUFDM0IsNkNBQWlDOztJQUNqQyw4Q0FBa0M7O0lBQ2xDLDhDQUFrQzs7SUFDbEMsMENBQThCOztJQUM5QiwwQ0FBOEI7O0lBMkQ5QixzQ0FBcUI7O0lBQ3JCLHVDQUF1Qjs7SUFDdkIscUNBQXNCOztJQUl0QiwyQ0FBZ0M7O0lBQ3BCLGdDQUFzQjs7SUFBRSx3Q0FBNkI7O0lBQUUsa0NBQXVCOztJQUFFLG9DQUFxQjs7SUFBRSwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udGFjdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3R1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIENvbnRhY3R1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueTsgICAgICAgIC8vIFRoaXMgdmFyaWFibGUgaXMgdXNlIGZvciBzaG93IHRoZSBGb3JtIHRpdGxlICAgXG4gIHB1YmxpYyBlbWFpbDogYW55W10gPSBbXTtcbiAgcHVibGljIHBob25lOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgYWRkcmVzczogYW55W10gPSBbXTtcblxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJzsgICAgICAvLyB1cmwgdmFyaWFibGUgdG8gZmV0Y2ggdGhlIGFkZCBhdmFpbGFiaWxpdHkgZm9ybSBwYWdlXG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgcm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXRKd3RUb2tlblZhbHVlOiBhbnkgPSAnJzsgIFxuICBwdWJsaWMgbGlzdGluZ1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGxvZ29JbWdWYWx1ZTogYW55ID0gJyc7XG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbCA6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgbG9nb2ltZyhsb2dvVmFsIDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dvSW1nVmFsdWUgPSBsb2dvVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubG9nb0ltZ1ZhbHVlKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFkZGxpc3RpbmcobGlzdGluZ1ZhbCA6IGFueSkge1xuICAgIHRoaXMubGlzdGluZ1ZhbHVlID0gKGxpc3RpbmdWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RpbmdWYWx1ZSA9IGxpc3RpbmdWYWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMubGlzdGluZ1ZhbHVlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RpbmdWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHNldCBKd3RUb2tlbihKd3RUb2tlblZhbCA6IGFueSkge1xuICAgIHRoaXMuc2V0Snd0VG9rZW5WYWx1ZSA9IEp3dFRva2VuVmFsO1xuICB9XG5cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gc2VydmVyVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSB1cmwgYWRkRW5kcG9pbnQgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmFkZEVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCByb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgc3RhcnQgLS0tLSovXG4gIGxhdGl0dWRlID0gLTI4LjY4MzUyO1xuICBsb25naXR1ZGUgPSAtMTQ3LjIwNzg1O1xuICBtYXBUeXBlID0gJ3NhdGVsbGl0ZSc7XG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgZW5kIC0tLS0qL1xuXG5cbiAgcHVibGljIGNvbnRhY3RVc0Zvcm06IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb250YWN0VXNGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBsb2NhdGlvbm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBtZXNzYWdlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgbXVsdGlwbGVlbWFpbHM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pXSksXG4gICAgICBwaG9uZXM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pLFxuICAgICAgYWRkcmVzc2VzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pXG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBtdWx0aXBsZWVtYWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnbXVsdGlwbGVlbWFpbHMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICAvKiBBZGQgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRFbWFpbCgpIHtcbiAgICBjb25zb2xlLmxvZygnb2trJyk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5tdWx0aXBsZWVtYWlscy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pKTtcbiAgfVxuICAvKiBBZGQgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVFbWFpbChpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLm11bHRpcGxlZW1haWxzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG5cbiAgZ2V0IGFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnYWRkcmVzc2VzJykgYXMgRm9ybUFycmF5O1xuICB9XG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRBZGRyZXNzKCkge1xuICAgIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLmFkZHJlc3Nlcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBhZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKTtcbiAgfVxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZUFkZHJlc3MoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5hZGRyZXNzZXMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBhZGRyZXNzZXMgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgcGhvbmVzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBwaG9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ3Bob25lcycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuXG4gIGFkZFBob25lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLnBob25lcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSk7XG4gIH1cblxuICAvKiBBZGQgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIHBob25lcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZVBob25lKGluZGV4KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMucGhvbmVzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIHBob25lcyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG5cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBzdGFydCBoZXJlXG4gIGNvbnRhY3RVc0Zvcm1TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsaWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUpO1xuXG5cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5tdWx0aXBsZWVtYWlscykge1xuICAgICAgICB0aGlzLmVtYWlsLnB1c2goa2V5LmVtYWlscyk7XG5cbiAgICAgIH1cbiAgICAgIC8vIEFsbCBlbWFpbHMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUucGhvbmVzKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5waG9uZXMpIHtcbiAgICAgICAgdGhpcy5waG9uZS5wdXNoKGtleS5waG9uZSk7XG5cbiAgICAgIH1cbiAvLyBBbGwgUGhvbmVzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgLy8gQWxsIGFkZHJlc3NlcyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLmFkZHJlc3Nlcykge1xuICAgICAgICB0aGlzLmFkZHJlc3MucHVzaChrZXkuYWRkcmVzcyk7XG4gICAgICB9XG4gICAgICAvLyBBbGwgYWRkcmVzc2VzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgbGV0IGFsbERhdGE6IGFueSA9e307XG4gICAgICBhbGxEYXRhLmxvY2F0aW9ubmFtZSA9IHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5sb2NhdGlvbm5hbWU7XG4gICAgICBhbGxEYXRhLmFkZHJlc3MgPSB0aGlzLmFkZHJlc3M7XG4gICAgICBhbGxEYXRhLnBob25lID0gdGhpcy5waG9uZTtcbiAgICAgIGFsbERhdGEuZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgICAgYWxsRGF0YS5tZXNzYWdlID0gdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm1lc3NhZ2U7IFxuICAgICAgLy8gY29uc29sZS5sb2coYWxsRGF0YSk7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50RGF0YS5zb3VyY2UsXG4gICAgICAgIFwiZGF0YVwiOiBhbGxEYXRhLFxuICAgICAgICBcInRva2VuXCI6IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJylcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cblxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBlbmQgaGVyZVxuXG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdvay0tLS0nKTtcbiAgICB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cblxuICBnb1RvTGlzdGluZygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxuXG5cbiAgc2V0Snd0VG9rZW4oKSB7XG4gICAgbGV0IGxpbms6IGFueSA9IFwiaHR0cHM6Ly9vODIwY3YybHU4LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24vYXBpL3RlbXB0b2tlblwiO1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgdGhpcy5odHRwLnBvc3QobGluayxkYXRhKS5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk9e307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0KCdqd3RUb2tlbicsIHJlc3VsdC50b2tlbik7XG4gICAgICB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgfSlcbiAgfVxuXG5cbn1cblxuIl19