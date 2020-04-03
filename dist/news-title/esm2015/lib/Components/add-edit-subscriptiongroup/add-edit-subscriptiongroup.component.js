/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
export class AddEditSubscriptiongroupComponent {
    /**
     * @param {?} formBuilder
     * @param {?} cookieService
     * @param {?} newsService
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, cookieService, newsService, router, dialog) {
        // this.filtered_group_array = this.group.valueChanges.pipe(startWith(null),
        //   map((item: any) => item ? this.filter(item) : this.nameValForGroup.slice()));
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add a group to subscriptions";
        this.nameValForGroup = '';
        this.successMessage = "Subscription Added Successfully..!!!";
        // group = new FormControl();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [ENTER, COMMA];
        console.log('filtered_group_array--->', this.nameValForGroup);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //generating the form
        this.generateForm();
        //getting the group
        this.getGroup();
        //Switch Case starts here
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Group";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "Subscription Updated Successfully..!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Change/Remove Group";
                break;
        }
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    // =====================generate form==============
    /**
     * @return {?}
     */
    generateForm() {
        this.subGroupForm = this.formBuilder.group({
            fullname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            company: ['', [Validators.required]],
            group: [],
            status: []
        });
    }
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.subGroupForm.patchValue({
            fullname: defaultValue.fullname,
            phone: defaultValue.phone,
            email: defaultValue.email,
            company: defaultValue.company,
            group: defaultValue.group,
            status: defaultValue.status
        });
    }
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal2, {
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
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.subGroupForm.controls[val].markAsUntouched();
    }
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    onSubmit() {
        /** marking as untouched **/
        for (let x in this.subGroupForm.controls) {
            this.subGroupForm.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.subGroupForm.value.status) {
            this.subGroupForm.value.status = parseInt("1");
        }
        else {
            this.subGroupForm.value.status = parseInt("0");
            ;
        }
        // if (this.subGroupForm.value.group == 0)
        //   this.successMessage = "Removed Group!!!";    
        /* stop here if form is invalid */
        if (this.subGroupForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.subGroupForm.value, this.configData.condition)
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
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
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try angain.");
            }));
        }
    }
    // =================================================================================================
    // Getting the parent category
    /**
     * @return {?}
     */
    getGroup() {
        /** @type {?} */
        let postData = {
            source: this.configData.groupData,
            token: this.cookieService.get('jwtToken')
        };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.group_array = response.res;
            console.log('>>>', this.group_array);
        }));
    }
    // mat chip use for listing 
    /**
     * @param {?} name
     * @return {?}
     */
    filter(name) {
        this.nameValForGroup = this.group_array;
        for (let i in this.group_array) {
            // console.log(this.group_array[i].name)
            this.groupname = this.group_array[i].name;
            return this.groupname.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.toLowerCase().indexOf(name.toLowerCase()) === 0));
        }
        ;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.nameValForGroup.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        // this.group.setValue(null);
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    remove(item, index) {
        console.log('index-->', item, index);
        this.nameValForGroup = this.group_array;
        for (let i in this.group_array) {
            // console.log(this.group_array[i].name)
            this.groupname = this.group_array[i].name;
            if (this.group_array[i]._id == item) {
                this.group_array.splice(index, 1);
            }
            // console.log('>>',this.groupname)
        }
        // const index = this.nameValForGroup.indexOf(item);
        if (index >= 0) {
        }
    }
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.nameValForGroup.push(event.option.viewValue);
        this.groupInput.nativeElement.value = '';
        // this.group.setValue(null);
    }
}
AddEditSubscriptiongroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-subscriptiongroup',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"subGroupForm\">\n        <!-- Name -->\n        <mat-form-field>\n          <mat-label>Name :</mat-label>\n          <input matInput formControlName=\"fullname\" (blur)=\"inputBlur('fullname')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['fullname'].valid\n          && subGroupForm.controls['fullname'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Phone -->\n        <mat-form-field>\n          <mat-label>Phone Number :</mat-label>\n          <input matInput formControlName=\"phone\" (blur)=\"inputBlur('phone')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['phone'].valid\n          && subGroupForm.controls['phone'].errors.required\"> Phone is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field>\n          <mat-label>Email :</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.required\"> Email is required.</mat-error>\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.email\"> Email is not valid.</mat-error>\n        </mat-form-field>\n\n        <!-- Company -->\n        <mat-form-field>\n          <mat-label>Company :</mat-label>\n          <input matInput formControlName=\"company\" (blur)=\"inputBlur('company')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['company'].valid\n          && subGroupForm.controls['company'].errors.required\">           <mat-label>Company</mat-label>\n          is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Group  -->\n        <mat-form-field>\n          <mat-label>Select Group :</mat-label>\n          <mat-select matNativeControl formControlName=\"group\" multiple>\n              <mat-option value=\"{{  item._id }}\" *ngFor=\"let item of group_array\">{{ item.name  }}</mat-option>\n            </mat-select> \n        </mat-form-field>\n\n\n        <!-- mat-chips  -->\n\n        <!-- <mat-form-field >\n          <mat-chip-list #chipList>\n            <mat-chip\n            *ngFor=\"let item of nameValForGroup;let i=index\"\n              [selectable]=\"selectable\"\n              [removable]=\"removable\"\n              (click)=\"remove(item.id,i)\">\n              {{item.name}}\n              <mat-icon matChipRemove *ngIf=\"removable\" (click)=\"remove(item.id,i)\">cancel</mat-icon>\n            </mat-chip>\n            <input\n              placeholder=\"Select Group....\"\n              #fruitInput\n              formControlName=\"group\"\n              [matAutocomplete]=\"auto\"\n              [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n              [matChipInputAddOnBlur]=\"addOnBlur\"\n              (matChipInputTokenEnd)=\"add($event)\"\n            />\n          </mat-chip-list>\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n            <mat-option *ngFor=\"let item of filtered_group_array | async\" [value]=\"item\">\n              {{ item }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n\n\n\n\n\n\n\n\n        <mat-label>Status :</mat-label>\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\"  (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddEditSubscriptiongroupComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CookieService },
    { type: NewsTitleService },
    { type: Router },
    { type: MatDialog }
];
AddEditSubscriptiongroupComponent.propDecorators = {
    groupInput: [{ type: ViewChild, args: ['fruitInput',] }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.subGroupForm;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.buttonText;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.header_name;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.configData;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.groupname;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.nameValForGroup;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.group_array;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.dialogRef;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.successMessage;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.filtered_group_array;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.visible;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.selectable;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.removable;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.addOnBlur;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.groupInput;
    /**
     * @type {?}
     * @private
     */
    AddEditSubscriptiongroupComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditSubscriptiongroupComponent.prototype.cookieService;
    /**
     * @type {?}
     * @private
     */
    AddEditSubscriptiongroupComponent.prototype.newsService;
    /**
     * @type {?}
     * @private
     */
    AddEditSubscriptiongroupComponent.prototype.router;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
export class Modal2 {
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
Modal2.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal2.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal2.prototype.dialogRef;
    /** @type {?} */
    Modal2.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BGLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkQsZ0NBRUM7OztJQURDLHlCQUFZOztBQVNkLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7O0lBOEI1QyxZQUFvQixXQUF3QixFQUFVLGFBQTRCLEVBQ3hFLFdBQTZCLEVBQVUsTUFBYyxFQUFTLE1BQWlCO1FBRXJGLDRFQUE0RTtRQUM1RSxrRkFBa0Y7UUFKbEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN4RSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQTFCekYsZUFB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UyxTQUErQixFQUNOLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBQ04sU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2R0FBMEI7YUFDM0I7Ozs7WUE3Um1CLFlBQVk7NENBa1MzQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QiwyQkFBc0M7O0lBQ3RDLHNCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0LFZpZXdDaGlsZCxFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciAsVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCwgTWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb3NuPT09PT09PT09PT09PT09PT09PT09XG4gIHN1Ykdyb3VwRm9ybTogRm9ybUdyb3VwO1xuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xuICBoZWFkZXJfbmFtZTogYW55ID0gXCJBZGQgYSBncm91cCB0byBzdWJzY3JpcHRpb25zXCI7XG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgZ3JvdXBuYW1lOmFueTtcblxuICBuYW1lVmFsRm9yR3JvdXA6YW55PScnO1xuICBncm91cF9hcnJheTogYW55O1xuICBkaWFsb2dSZWY6IGFueTtcbiAgc3VjY2Vzc01lc3NhZ2U6IGFueSA9IFwiU3Vic2NyaXB0aW9uIEFkZGVkIFN1Y2Nlc3NmdWxseS4uISEhXCI7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZmlsdGVyZWRfZ3JvdXBfYXJyYXk6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIC8vIGdyb3VwID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICByZW1vdmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBhZGRPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUFdO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZydWl0SW5wdXQnKSBncm91cElucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG5cbiAgICAgIC8vIHRoaXMuZmlsdGVyZWRfZ3JvdXBfYXJyYXkgPSB0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIC8vICAgbWFwKChpdGVtOiBhbnkpID0+IGl0ZW0gPyB0aGlzLmZpbHRlcihpdGVtKSA6IHRoaXMubmFtZVZhbEZvckdyb3VwLnNsaWNlKCkpKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWRfZ3JvdXBfYXJyYXktLS0+Jyx0aGlzLm5hbWVWYWxGb3JHcm91cClcbiAgICAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIC8vZ2V0dGluZyB0aGUgZ3JvdXBcbiAgICB0aGlzLmdldEdyb3VwKCk7XG5cbiAgICAvL1N3aXRjaCBDYXNlIHN0YXJ0cyBoZXJlXG5cbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBhIEdyb3VwXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIlN1YnNjcmlwdGlvbiBVcGRhdGVkIFN1Y2Nlc3NmdWxseS4uISEhXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkNoYW5nZS9SZW1vdmUgR3JvdXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PWdlbmVyYXRlIGZvcm09PT09PT09PT09PT09PVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5zdWJHcm91cEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZ1bGxuYW1lOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBob25lOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVtYWlsOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgY29tcGFueTogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBncm91cDogW10sXG4gICAgICBzdGF0dXM6W11cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMuc3ViR3JvdXBGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgZnVsbG5hbWU6IGRlZmF1bHRWYWx1ZS5mdWxsbmFtZSxcbiAgICAgIHBob25lOiBkZWZhdWx0VmFsdWUucGhvbmUsXG4gICAgICBlbWFpbDogZGVmYXVsdFZhbHVlLmVtYWlsLFxuICAgICAgY29tcGFueTogZGVmYXVsdFZhbHVlLmNvbXBhbnksXG4gICAgICBncm91cDogZGVmYXVsdFZhbHVlLmdyb3VwLFxuICAgICAgc3RhdHVzOmRlZmF1bHRWYWx1ZS5zdGF0dXNcbiAgICB9KTtcblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbDIsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBtc2c6IHggfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAvKiogYmx1ciBmdW5jdGlvbiAqKi9cbiAgIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMuc3ViR3JvdXBGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBvblN1Ym1pdCgpIHtcblxuXG4gICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICAgZm9yIChsZXQgeCBpbiB0aGlzLnN1Ykdyb3VwRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5zdWJHcm91cEZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuXG4gICAgICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgXG4gICAgICAgICAgaWYgKHRoaXMuc3ViR3JvdXBGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zdWJHcm91cEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1Ykdyb3VwRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAvLyBpZiAodGhpcy5zdWJHcm91cEZvcm0udmFsdWUuZ3JvdXAgPT0gMClcbiAgICAvLyAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIlJlbW92ZWQgR3JvdXAhISFcIjsgICAgXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLnN1Ykdyb3VwRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc3ViR3JvdXBGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2V0dGluZyB0aGUgcGFyZW50IGNhdGVnb3J5XG4gIGdldEdyb3VwKCkge1xuICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBEYXRhLFxuICAgICAgdG9rZW46IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dFRva2VuJylcblxuICAgIH07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmdyb3VwX2FycmF5ID0gcmVzcG9uc2UucmVzO1xuICAgICAgY29uc29sZS5sb2coJz4+PicsdGhpcy5ncm91cF9hcnJheSlcblxuIFxuICAgIH0pXG4gIH1cblxuXG5cbiAgLy8gbWF0IGNoaXAgdXNlIGZvciBsaXN0aW5nIFxuXG4gIGZpbHRlcihuYW1lOiBhbnkpIHtcbiAgICB0aGlzLm5hbWVWYWxGb3JHcm91cD10aGlzLmdyb3VwX2FycmF5O1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLmdyb3VwX2FycmF5KXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBfYXJyYXlbaV0ubmFtZSlcbiAgICAgdGhpcy5ncm91cG5hbWU9dGhpcy5ncm91cF9hcnJheVtpXS5uYW1lO1xuICAgICByZXR1cm4gdGhpcy5ncm91cG5hbWUuZmlsdGVyKGl0ZW0gPT5cbiAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKG5hbWUudG9Mb3dlckNhc2UoKSkgPT09IDApXG5cbiAgICB9XG4gICAgO1xuICB9XG5cbiBcbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAgIC8vIEFkZCBvdXIgZnJ1aXRcbiAgICBpZiAoKHZhbHVlIHx8ICcnKS50cmltKCkpIHtcbiAgICAgIHRoaXMubmFtZVZhbEZvckdyb3VwLnB1c2godmFsdWUudHJpbSgpKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5ncm91cC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHJlbW92ZShpdGVtOiBhbnksaW5kZXg6YW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2luZGV4LS0+JyxpdGVtLGluZGV4KVxuXG4gICAgdGhpcy5uYW1lVmFsRm9yR3JvdXA9dGhpcy5ncm91cF9hcnJheTtcbiAgICBmb3IobGV0IGkgaW4gdGhpcy5ncm91cF9hcnJheSl7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyb3VwX2FycmF5W2ldLm5hbWUpXG4gICAgIHRoaXMuZ3JvdXBuYW1lPXRoaXMuZ3JvdXBfYXJyYXlbaV0ubmFtZTtcblxuICAgICAgaWYodGhpcy5ncm91cF9hcnJheVtpXS5faWQgPT0gaXRlbSl7XG4gICAgICAgIHRoaXMuZ3JvdXBfYXJyYXkuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZygnPj4nLHRoaXMuZ3JvdXBuYW1lKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGluZGV4ID0gdGhpcy5uYW1lVmFsRm9yR3JvdXAuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsdGVyKG5hbWU6IHN0cmluZykge1xuICAvLyAgIHJldHVybiB0aGlzLmdyb3VwX2FycmF5LmZpbHRlcihmcnVpdCA9PlxuICAvLyAgICAgICBmcnVpdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gMCk7XG4gIC8vIH1cblxuICBzZWxlY3RlZChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmFtZVZhbEZvckdyb3VwLnB1c2goZXZlbnQub3B0aW9uLnZpZXdWYWx1ZSk7XG4gICAgdGhpcy5ncm91cElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAvLyB0aGlzLmdyb3VwLnNldFZhbHVlKG51bGwpO1xuICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsMi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWwyPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19