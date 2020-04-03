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
var AddEditSubscriptiongroupComponent = /** @class */ (function () {
    function AddEditSubscriptiongroupComponent(formBuilder, cookieService, newsService, router, dialog) {
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
    AddEditSubscriptiongroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(AddEditSubscriptiongroupComponent.prototype, "config", {
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
    // =====================generate form==============
    // =====================generate form==============
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.generateForm = 
    // =====================generate form==============
    /**
     * @return {?}
     */
    function () {
        this.subGroupForm = this.formBuilder.group({
            fullname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            company: ['', [Validators.required]],
            group: [],
            status: []
        });
    };
    // ================================================
    // ================================================Default value======================================
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.setDefaultValue = 
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.subGroupForm.patchValue({
            fullname: defaultValue.fullname,
            phone: defaultValue.phone,
            email: defaultValue.email,
            company: defaultValue.company,
            group: defaultValue.group,
            status: defaultValue.status
        });
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.openDialog = 
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal2, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    /** blur function **/
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.subGroupForm.controls[val].markAsUntouched();
    };
    // ==========================================SUBMIT=================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.onSubmit = 
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** marking as untouched **/
        for (var x in this.subGroupForm.controls) {
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
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subGroupForm.value, this.configData.condition)
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
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
    // =================================================================================================
    // Getting the parent category
    // =================================================================================================
    // Getting the parent category
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.getGroup = 
    // =================================================================================================
    // Getting the parent category
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var postData = {
            source: this.configData.groupData,
            token: this.cookieService.get('jwtToken')
        };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.group_array = response.res;
            console.log('>>>', _this.group_array);
        }));
    };
    // mat chip use for listing 
    // mat chip use for listing 
    /**
     * @param {?} name
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.filter = 
    // mat chip use for listing 
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.nameValForGroup = this.group_array;
        for (var i in this.group_array) {
            // console.log(this.group_array[i].name)
            this.groupname = this.group_array[i].name;
            return this.groupname.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.toLowerCase().indexOf(name.toLowerCase()) === 0;
            }));
        }
        ;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.input;
        /** @type {?} */
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.nameValForGroup.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        // this.group.setValue(null);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.remove = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        console.log('index-->', item, index);
        this.nameValForGroup = this.group_array;
        for (var i in this.group_array) {
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
    };
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.selected = 
    // filter(name: string) {
    //   return this.group_array.filter(fruit =>
    //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nameValForGroup.push(event.option.viewValue);
        this.groupInput.nativeElement.value = '';
        // this.group.setValue(null);
    };
    AddEditSubscriptiongroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subscriptiongroup',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"subGroupForm\">\n        <!-- Name -->\n        <mat-form-field>\n          <mat-label>Name :</mat-label>\n          <input matInput formControlName=\"fullname\" (blur)=\"inputBlur('fullname')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['fullname'].valid\n          && subGroupForm.controls['fullname'].errors.required\"> Name is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Phone -->\n        <mat-form-field>\n          <mat-label>Phone Number :</mat-label>\n          <input matInput formControlName=\"phone\" (blur)=\"inputBlur('phone')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['phone'].valid\n          && subGroupForm.controls['phone'].errors.required\"> Phone is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field>\n          <mat-label>Email :</mat-label>\n          <input matInput formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.required\"> Email is required.</mat-error>\n          <mat-error *ngIf=\"!subGroupForm.controls['email'].valid\n          && subGroupForm.controls['email'].errors.email\"> Email is not valid.</mat-error>\n        </mat-form-field>\n\n        <!-- Company -->\n        <mat-form-field>\n          <mat-label>Company :</mat-label>\n          <input matInput formControlName=\"company\" (blur)=\"inputBlur('company')\">\n          <mat-error *ngIf=\"!subGroupForm.controls['company'].valid\n          && subGroupForm.controls['company'].errors.required\">           <mat-label>Company</mat-label>\n          is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Group  -->\n        <mat-form-field>\n          <mat-label>Select Group :</mat-label>\n          <mat-select matNativeControl formControlName=\"group\" multiple>\n              <mat-option value=\"{{  item._id }}\" *ngFor=\"let item of group_array\">{{ item.name  }}</mat-option>\n            </mat-select> \n        </mat-form-field>\n\n\n        <!-- mat-chips  -->\n\n        <!-- <mat-form-field >\n          <mat-chip-list #chipList>\n            <mat-chip\n            *ngFor=\"let item of nameValForGroup;let i=index\"\n              [selectable]=\"selectable\"\n              [removable]=\"removable\"\n              (click)=\"remove(item.id,i)\">\n              {{item.name}}\n              <mat-icon matChipRemove *ngIf=\"removable\" (click)=\"remove(item.id,i)\">cancel</mat-icon>\n            </mat-chip>\n            <input\n              placeholder=\"Select Group....\"\n              #fruitInput\n              formControlName=\"group\"\n              [matAutocomplete]=\"auto\"\n              [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n              [matChipInputAddOnBlur]=\"addOnBlur\"\n              (matChipInputTokenEnd)=\"add($event)\"\n            />\n          </mat-chip-list>\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n            <mat-option *ngFor=\"let item of filtered_group_array | async\" [value]=\"item\">\n              {{ item }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n\n\n\n\n\n\n\n\n        <mat-label>Status :</mat-label>\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\"  (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubscriptiongroupComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CookieService },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddEditSubscriptiongroupComponent.propDecorators = {
        groupInput: [{ type: ViewChild, args: ['fruitInput',] }],
        config: [{ type: Input }]
    };
    return AddEditSubscriptiongroupComponent;
}());
export { AddEditSubscriptiongroupComponent };
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
var Modal2 = /** @class */ (function () {
    function Modal2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal2.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal2.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal2.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal2;
}());
export { Modal2 };
if (false) {
    /** @type {?} */
    Modal2.prototype.dialogRef;
    /** @type {?} */
    Modal2.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BGLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkQsZ0NBRUM7OztJQURDLHlCQUFZOztBQUlkO0lBbUNFLDJDQUFvQixXQUF3QixFQUFVLGFBQTRCLEVBQ3hFLFdBQTZCLEVBQVUsTUFBYyxFQUFTLE1BQWlCO1FBRXJGLDRFQUE0RTtRQUM1RSxrRkFBa0Y7UUFKbEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN4RSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQTFCekYsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixn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QUFpQzs7O0lBSTVDLHlEQUF3Qjs7SUFDeEIsdURBQTJCOztJQUMzQix3REFBa0Q7O0lBQ2xELHVEQUFnQjs7SUFDaEIsc0RBQWM7O0lBRWQsNERBQXVCOztJQUN2Qix3REFBaUI7O0lBQ2pCLHNEQUFlOztJQUNmLDJEQUE2RDs7SUFHN0QsaUVBQXdDOztJQUl4QyxvREFBd0I7O0lBQ3hCLHVEQUEyQjs7SUFDM0Isc0RBQTBCOztJQUMxQixzREFBMkI7O0lBRzNCLCtEQUFvQzs7SUFFcEMsdURBQWdEOzs7OztJQUVwQyx3REFBZ0M7Ozs7O0lBQUUsMERBQW9DOzs7OztJQUNoRix3REFBcUM7Ozs7O0lBQUUsbURBQXNCOztJQUFFLG1EQUF3Qjs7O0FBME8zRjtJQU1FLGdCQUNTLFNBQStCLEVBQ04sSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDTixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCwwQkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsNkdBQTBCO2lCQUMzQjs7OztnQkE3Um1CLFlBQVk7Z0RBa1MzQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsYUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLE1BQU07OztJQUdmLDJCQUFzQzs7SUFDdEMsc0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QsVmlld0NoaWxkLEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyICxWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LCBNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvc249PT09PT09PT09PT09PT09PT09PT1cbiAgc3ViR3JvdXBGb3JtOiBGb3JtR3JvdXA7XG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XG4gIGhlYWRlcl9uYW1lOiBhbnkgPSBcIkFkZCBhIGdyb3VwIHRvIHN1YnNjcmlwdGlvbnNcIjtcbiAgY29uZmlnRGF0YTogYW55O1xuICBncm91cG5hbWU6YW55O1xuXG4gIG5hbWVWYWxGb3JHcm91cDphbnk9Jyc7XG4gIGdyb3VwX2FycmF5OiBhbnk7XG4gIGRpYWxvZ1JlZjogYW55O1xuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJTdWJzY3JpcHRpb24gQWRkZWQgU3VjY2Vzc2Z1bGx5Li4hISFcIjtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmaWx0ZXJlZF9ncm91cF9hcnJheTogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgLy8gZ3JvdXAgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgc2VsZWN0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHJlbW92YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGFkZE9uQmx1cjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQV07XG5cbiAgQFZpZXdDaGlsZCgnZnJ1aXRJbnB1dCcpIGdyb3VwSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcblxuICAgICAgLy8gdGhpcy5maWx0ZXJlZF9ncm91cF9hcnJheSA9IHRoaXMuZ3JvdXAudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLFxuICAgICAgLy8gICBtYXAoKGl0ZW06IGFueSkgPT4gaXRlbSA/IHRoaXMuZmlsdGVyKGl0ZW0pIDogdGhpcy5uYW1lVmFsRm9yR3JvdXAuc2xpY2UoKSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZF9ncm91cF9hcnJheS0tLT4nLHRoaXMubmFtZVZhbEZvckdyb3VwKVxuICAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvL2dlbmVyYXRpbmcgdGhlIGZvcm1cbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgLy9nZXR0aW5nIHRoZSBncm91cFxuICAgIHRoaXMuZ2V0R3JvdXAoKTtcblxuICAgIC8vU3dpdGNoIENhc2Ugc3RhcnRzIGhlcmVcblxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIGEgR3JvdXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiU3Vic2NyaXB0aW9uIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5Li4hISFcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQ2hhbmdlL1JlbW92ZSBHcm91cFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09Z2VuZXJhdGUgZm9ybT09PT09PT09PT09PT09XG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLnN1Ykdyb3VwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZnVsbG5hbWU6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGhvbmU6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW1haWw6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBjb21wYW55OiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGdyb3VwOiBbXSxcbiAgICAgIHN0YXR1czpbXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5zdWJHcm91cEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBmdWxsbmFtZTogZGVmYXVsdFZhbHVlLmZ1bGxuYW1lLFxuICAgICAgcGhvbmU6IGRlZmF1bHRWYWx1ZS5waG9uZSxcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWwsXG4gICAgICBjb21wYW55OiBkZWZhdWx0VmFsdWUuY29tcGFueSxcbiAgICAgIGdyb3VwOiBkZWZhdWx0VmFsdWUuZ3JvdXAsXG4gICAgICBzdGF0dXM6ZGVmYXVsdFZhbHVlLnN0YXR1c1xuICAgIH0pO1xuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMiwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIC8qKiBibHVyIGZ1bmN0aW9uICoqL1xuICAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5zdWJHcm91cEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIG9uU3VibWl0KCkge1xuXG5cbiAgICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgICBmb3IgKGxldCB4IGluIHRoaXMuc3ViR3JvdXBGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLnN1Ykdyb3VwRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG5cbiAgICAgICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICBcbiAgICAgICAgICBpZiAodGhpcy5zdWJHcm91cEZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ykdyb3VwRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ViR3JvdXBGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XG4gICAgICAgICAgfVxuICAgICAgICBcblxuICAgIC8vIGlmICh0aGlzLnN1Ykdyb3VwRm9ybS52YWx1ZS5ncm91cCA9PSAwKVxuICAgIC8vICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiUmVtb3ZlZCBHcm91cCEhIVwiOyAgICBcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMuc3ViR3JvdXBGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zdWJHcm91cEZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICB9O1xuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG5cbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXR0aW5nIHRoZSBwYXJlbnQgY2F0ZWdvcnlcbiAgZ2V0R3JvdXAoKSB7XG4gICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5ncm91cERhdGEsXG4gICAgICB0b2tlbjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKVxuXG4gICAgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZ3JvdXBfYXJyYXkgPSByZXNwb25zZS5yZXM7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Jyx0aGlzLmdyb3VwX2FycmF5KVxuXG4gXG4gICAgfSlcbiAgfVxuXG5cblxuICAvLyBtYXQgY2hpcCB1c2UgZm9yIGxpc3RpbmcgXG5cbiAgZmlsdGVyKG5hbWU6IGFueSkge1xuICAgIHRoaXMubmFtZVZhbEZvckdyb3VwPXRoaXMuZ3JvdXBfYXJyYXk7XG4gICAgZm9yKGxldCBpIGluIHRoaXMuZ3JvdXBfYXJyYXkpe1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncm91cF9hcnJheVtpXS5uYW1lKVxuICAgICB0aGlzLmdyb3VwbmFtZT10aGlzLmdyb3VwX2FycmF5W2ldLm5hbWU7XG4gICAgIHJldHVybiB0aGlzLmdyb3VwbmFtZS5maWx0ZXIoaXRlbSA9PlxuICAgICAgaXRlbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gMClcblxuICAgIH1cbiAgICA7XG4gIH1cblxuIFxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gICAgLy8gQWRkIG91ciBmcnVpdFxuICAgIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xuICAgICAgdGhpcy5uYW1lVmFsRm9yR3JvdXAucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBpbnB1dCB2YWx1ZVxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyB0aGlzLmdyb3VwLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlKGl0ZW06IGFueSxpbmRleDphbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgtLT4nLGl0ZW0saW5kZXgpXG5cbiAgICB0aGlzLm5hbWVWYWxGb3JHcm91cD10aGlzLmdyb3VwX2FycmF5O1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLmdyb3VwX2FycmF5KXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBfYXJyYXlbaV0ubmFtZSlcbiAgICAgdGhpcy5ncm91cG5hbWU9dGhpcy5ncm91cF9hcnJheVtpXS5uYW1lO1xuXG4gICAgICBpZih0aGlzLmdyb3VwX2FycmF5W2ldLl9pZCA9PSBpdGVtKXtcbiAgICAgICAgdGhpcy5ncm91cF9hcnJheS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCc+PicsdGhpcy5ncm91cG5hbWUpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgaW5kZXggPSB0aGlzLm5hbWVWYWxGb3JHcm91cC5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICB9XG4gIH1cblxuICAvLyBmaWx0ZXIobmFtZTogc3RyaW5nKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuZ3JvdXBfYXJyYXkuZmlsdGVyKGZydWl0ID0+XG4gIC8vICAgICAgIGZydWl0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuYW1lLnRvTG93ZXJDYXNlKCkpID09PSAwKTtcbiAgLy8gfVxuXG4gIHNlbGVjdGVkKGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYW1lVmFsRm9yR3JvdXAucHVzaChldmVudC5vcHRpb24udmlld1ZhbHVlKTtcbiAgICB0aGlzLmdyb3VwSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIC8vIHRoaXMuZ3JvdXAuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbDIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbDI+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4iXX0=