/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ContactusComponent {
    /**
     * @param {?} fb
     * @param {?} apiService
     * @param {?} http
     * @param {?} router
     * @param {?} cookieService
     * @param {?} dialog
     */
    constructor(fb, apiService, http, router, cookieService, dialog) {
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
    /**
     * @param {?} modaleLogoVal
     * @return {?}
     */
    set modaleLogo(modaleLogoVal) {
        this.link = modaleLogoVal;
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
            allData.name = this.contactUsForm.value.name;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            let data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.addEndpointData.token
            };
            console.log(data);
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
                    /** @type {?} */
                    const dialogRef = this.dialog.open(successModalComponent, {
                        width: '250px',
                        data: { value: result.status, Url: this.link }
                    });
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
}
ContactusComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus',
                template: "\n  <button *ngIf=\"listingValue != ''\" class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">{{listingValue}}</button>\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n        <span class=\"logowrapper\" *ngIf=\"logoImgValue != ''\" >\n            <img  [src]=\"logoImgValue\">\n        </span>\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <div class=\"fromClass\">\n  <mat-form-field>\n      <input matInput placeholder=\"Name \" formControlName=\"name\" (blur)=\"inputUntouched('name')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['name'].valid && contactUsForm.controls['name'].errors.required && contactUsForm.controls['name'].touched\">Name field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\"  *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" class=\"fromClass\" >\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n     <!-- <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error> -->\n      <!-- <mat-error *ngIf=\"!item.valid  \">Email field can not be blank</mat-error> -->\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" *ngFor=\"let item of phones.controls; let pointIndex=index\" class=\"fromClass\">\n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <!-- <mat-error *ngIf=\"!item.valid  \">Phone field can not be blank</mat-error> -->\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" *ngFor=\"let item of addresses.controls; let pointIndex=index\"  class=\"fromClass\">\n  \n  \n    <mat-form-field [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" (blur)=\"inputUntouched('address')\"></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <!-- <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error> -->\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <div class=\"fromClass\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n  </div>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ContactusComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: HttpClient },
    { type: Router },
    { type: CookieService },
    { type: MatDialog }
];
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
export class successModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
successModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'successModal',
                template: `
  
<span style="text-align: center"  *ngIf="data.Url != ''" >
<img style="max-width: 100%; text-align: center" [src]="data.Url">
</span>

<div mat-dialog-content>
<p *ngIf="data.value.length <= 7">Thanks! your account has been successfully created</p>
<p *ngIf="data.value.length >= 8">{{data.value}}</p>

</div>
<div mat-dialog-actions>
<button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>
</div>

  `
            }] }
];
/** @nocollapse */
successModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    successModalComponent.prototype.dialogRef;
    /** @type {?} */
    successModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvY29udGFjdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFhLFdBQVcsRUFBYSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTdFLGdDQUdDOzs7SUFGQywyQkFBYzs7SUFDZCx5QkFBUzs7QUFhWCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7SUE2RjdCLFlBQW1CLEVBQWUsRUFBUyxVQUFzQixFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLGFBQTRCLEVBQVMsTUFBaUI7UUFBN0osT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXpGekssVUFBSyxHQUFNLEVBQUUsQ0FBQztRQUNkLFNBQUksR0FBTSxFQUFFLENBQUM7UUFDYixRQUFHLEdBQU0sRUFBRSxDQUFDO1FB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QXdCOztBQWdObEwsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFaEMsWUFDUyxTQUE4QyxFQUNyQixJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQztRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEIsQ0FBQzs7OztJQUdKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7YUFFRjs7OztZQTdUeUIsWUFBWTs0Q0FrVWpDLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDBDQUFxRDs7SUFDckQscUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBWaWV3Q2hpbGQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgVXJsOiBhbnk7XG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb250YWN0dXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHVzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyB2YWx1ZTogYW55PScnO1xuICBwdWJsaWMgbGluazogYW55PScnO1xuICBwdWJsaWMgVXJsOiBhbnk9Jyc7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcblxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueTsgICAgICAgIC8vIFRoaXMgdmFyaWFibGUgaXMgdXNlIGZvciBzaG93IHRoZSBGb3JtIHRpdGxlICAgXG4gIHB1YmxpYyBlbWFpbDogYW55W10gPSBbXTtcbiAgcHVibGljIHBob25lOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgYWRkcmVzczogYW55W10gPSBbXTtcblxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJzsgICAgICAvLyB1cmwgdmFyaWFibGUgdG8gZmV0Y2ggdGhlIGFkZCBhdmFpbGFiaWxpdHkgZm9ybSBwYWdlXG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgcm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXRKd3RUb2tlblZhbHVlOiBhbnkgPSAnJzsgIFxuICBwdWJsaWMgbGlzdGluZ1ZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGxvZ29JbWdWYWx1ZTogYW55ID0gJyc7XG5cblxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBtb2RhbCBsb2dvXG5cbiAgc2V0IG1vZGFsZUxvZ28obW9kYWxlTG9nb1ZhbCA6IGFueSkge1xuICAgIHRoaXMubGluayA9IG1vZGFsZUxvZ29WYWw7XG4gIH1cbiAgXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbCA6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHB1YmxpYyBzZXQgbG9nb2ltZyhsb2dvVmFsIDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dvSW1nVmFsdWUgPSBsb2dvVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubG9nb0ltZ1ZhbHVlKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFkZGxpc3RpbmcobGlzdGluZ1ZhbCA6IGFueSkge1xuICAgIHRoaXMubGlzdGluZ1ZhbHVlID0gKGxpc3RpbmdWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RpbmdWYWx1ZSA9IGxpc3RpbmdWYWw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMubGlzdGluZ1ZhbHVlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RpbmdWYWx1ZSlcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgXG4gIHNldCBKd3RUb2tlbihKd3RUb2tlblZhbCA6IGFueSkge1xuICAgIHRoaXMuc2V0Snd0VG9rZW5WYWx1ZSA9IEp3dFRva2VuVmFsO1xuICB9XG5cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVVJMID0gc2VydmVyVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSB1cmwgYWRkRW5kcG9pbnQgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmFkZEVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCByb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgc3RhcnQgLS0tLSovXG4gIGxhdGl0dWRlID0gLTI4LjY4MzUyO1xuICBsb25naXR1ZGUgPSAtMTQ3LjIwNzg1O1xuICBtYXBUeXBlID0gJ3NhdGVsbGl0ZSc7XG4gIC8qVXNpbmcgZm9yIGdvb2dsZSBtYXAgZW5kIC0tLS0qL1xuXG5cbiAgcHVibGljIGNvbnRhY3RVc0Zvcm06IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBtZXNzYWdlOiBbJyddLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgbXVsdGlwbGVlbWFpbHM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pXSksXG4gICAgICBwaG9uZXM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pLFxuICAgICAgYWRkcmVzc2VzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KV0pXG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBtdWx0aXBsZWVtYWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnbXVsdGlwbGVlbWFpbHMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICAvKiBBZGQgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRFbWFpbCgpIHtcbiAgICBjb25zb2xlLmxvZygnb2trJyk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5tdWx0aXBsZWVtYWlscy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBlbWFpbHM6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldIH0pKTtcbiAgfVxuICAvKiBBZGQgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVFbWFpbChpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLm11bHRpcGxlZW1haWxzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgZW1haWwgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgZW1haWxzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG5cbiAgZ2V0IGFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgnYWRkcmVzc2VzJykgYXMgRm9ybUFycmF5O1xuICB9XG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICBhZGRBZGRyZXNzKCkge1xuICAgIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLmFkZHJlc3Nlcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBhZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKTtcbiAgfVxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZUFkZHJlc3MoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5hZGRyZXNzZXMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBhZGRyZXNzZXMgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgYWRkcmVzc2VzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cbiAgLyogTXVsdGlwbGUgcGhvbmVzIGNyZWF0ZWQgc3RhcnQgaGVyZSovXG4gIGdldCBwaG9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ3Bob25lcycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuXG4gIGFkZFBob25lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdva2snKTtcbiAgICB0aGlzLnBob25lcy5wdXNoKHRoaXMuZmIuZ3JvdXAoeyBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSk7XG4gIH1cblxuICAvKiBBZGQgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIHBob25lcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZVBob25lKGluZGV4KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMucGhvbmVzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgcGhvbmVzIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIHBob25lcyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG5cblxuICAvLyBjb250YWN0VXNGb3JtIHN1Ym1pdCBmdW5jdGlvbiBzdGFydCBoZXJlXG4gIGNvbnRhY3RVc0Zvcm1TdWJtaXQoKSB7XG5cblxuICAgIGxldCB4OiBhbnk7XG4gICAgZm9yICh4IGluIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIH1cbiAgICBpZiAodGhpcy5jb250YWN0VXNGb3JtLnZhbGlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2snKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250YWN0VXNGb3JtLnZhbHVlKTtcblxuXG4gICAgICAvLyBBbGwgZW1haWxzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubXVsdGlwbGVlbWFpbHMpIHtcbiAgICAgICAgdGhpcy5lbWFpbC5wdXNoKGtleS5lbWFpbHMpO1xuXG4gICAgICB9XG4gICAgICAvLyBBbGwgZW1haWxzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgLy8gQWxsIFBob25lcyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLnBob25lcyk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUucGhvbmVzKSB7XG4gICAgICAgIHRoaXMucGhvbmUucHVzaChrZXkucGhvbmUpO1xuXG4gICAgICB9XG4gLy8gQWxsIFBob25lcyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIC8vIEFsbCBhZGRyZXNzZXMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5hZGRyZXNzZXMpIHtcbiAgICAgICAgdGhpcy5hZGRyZXNzLnB1c2goa2V5LmFkZHJlc3MpO1xuICAgICAgfVxuICAgICAgLy8gQWxsIGFkZHJlc3NlcyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIGxldCBhbGxEYXRhOiBhbnkgPXt9O1xuICAgICAgYWxsRGF0YS5uYW1lID0gdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm5hbWU7XG4gICAgICBhbGxEYXRhLmFkZHJlc3MgPSB0aGlzLmFkZHJlc3M7XG4gICAgICBhbGxEYXRhLnBob25lID0gdGhpcy5waG9uZTtcbiAgICAgIGFsbERhdGEuZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgICAgYWxsRGF0YS5tZXNzYWdlID0gdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm1lc3NhZ2U7IFxuICAgICAgLy8gY29uc29sZS5sb2coYWxsRGF0YSk7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50RGF0YS5zb3VyY2UsXG4gICAgICAgIFwiZGF0YVwiOiBhbGxEYXRhLFxuICAgICAgICBcInRva2VuXCI6IHRoaXMuYWRkRW5kcG9pbnREYXRhLnRva2VuXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oc3VjY2Vzc01vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgICAgICAgIGRhdGE6IHt2YWx1ZTogcmVzdWx0LnN0YXR1cywgVXJsOiB0aGlzLmxpbmt9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG5cblxuICB9XG5cbiAgLy8gY29udGFjdFVzRm9ybSBzdWJtaXQgZnVuY3Rpb24gZW5kIGhlcmVcblxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnb2stLS0tJyk7XG4gICAgdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cbiAgZ29Ub0xpc3RpbmcoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWNjZXNzTW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICBcbjxzcGFuIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCIgICpuZ0lmPVwiZGF0YS5VcmwgIT0gJydcIiA+XG48aW1nIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXJcIiBbc3JjXT1cImRhdGEuVXJsXCI+XG48L3NwYW4+XG5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuPHAgKm5nSWY9XCJkYXRhLnZhbHVlLmxlbmd0aCA8PSA3XCI+VGhhbmtzISB5b3VyIGFjY291bnQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQ8L3A+XG48cCAqbmdJZj1cImRhdGEudmFsdWUubGVuZ3RoID49IDhcIj57e2RhdGEudmFsdWV9fTwvcD5cblxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cbjwvZGl2PlxuXG4gIGAsXG5cbn0pXG5leHBvcnQgY2xhc3Mgc3VjY2Vzc01vZGFsQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8c3VjY2Vzc01vZGFsQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgIH1cblxuICAgIFxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufSJdfQ==