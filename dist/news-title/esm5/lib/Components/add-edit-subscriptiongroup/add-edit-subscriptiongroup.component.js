/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddEditSubscriptiongroupComponent = /** @class */ (function () {
    // ========================================================
    function AddEditSubscriptiongroupComponent(formBuilder, cookieService, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add a group to subscriptions";
        this.group_array = [];
        this.successMessage = "Group Added!!!";
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
            fullname: [],
            phone: [],
            email: [],
            company: [],
            group: []
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
            group: defaultValue.group
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
    // ==========================================SUBMIT=================================================
    // =====================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.onSubmit = 
    // =====================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subGroupForm.value.group == 0)
            this.successMessage = "Removed Group!!!";
        /* stop here if form is invalid */
        if (this.subGroupForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subGroupForm.value, this.configData.condition),
                "sourceobj": ["group"]
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
    //Getting the parent category
    // =================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.getGroup = 
    // =================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var postData = {
            source: this.configData.group,
            token: this.cookieService.get('jwtToken')
        };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.group_array = response.res;
        }));
    };
    AddEditSubscriptiongroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subscriptiongroup',
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\" [formGroup]=\"subGroupForm\">\r\n        <!-- Name -->\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput formControlName=\"fullname\">\r\n        </mat-form-field>\r\n\r\n        <!-- Phone -->\r\n        <mat-form-field>\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput formControlName=\"phone\">\r\n        </mat-form-field>\r\n\r\n        <!-- Email -->\r\n        <mat-form-field>\r\n          <mat-label>Email</mat-label>\r\n          <input matInput formControlName=\"email\">\r\n        </mat-form-field>\r\n\r\n        <!-- Company -->\r\n        <mat-form-field>\r\n          <mat-label>Company</mat-label>\r\n          <input matInput formControlName=\"company\">\r\n        </mat-form-field>\r\n\r\n        <!-- Group  -->\r\n        <mat-form-field>\r\n          <mat-label>Group</mat-label>\r\n          <select matNativeControl formControlName=\"group\">\r\n               <option value=0>Remove Group</option>\r\n              <option value=\"{{  item._id }}\" *ngFor=\"let item of group_array\">{{ item.name  }}</option>\r\n            \r\n            </select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\"  (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
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
    AddEditSubscriptiongroupComponent.prototype.group_array;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.dialogRef;
    /** @type {?} */
    AddEditSubscriptiongroupComponent.prototype.successMessage;
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
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBMEIsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUNwRixnQ0FFQzs7O0lBREMseUJBQVk7O0FBSWQ7SUFnQkUsMkRBQTJEO0lBRzNELDJDQUFvQixXQUF3QixFQUFVLGFBQTRCLEVBQ3hFLFdBQTZCLEVBQVUsTUFBYyxFQUFTLE1BQWlCO1FBRHJFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDeEUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFWekYsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixnQkFBVyxHQUFRLDhCQUE4QixDQUFDO1FBRWxELGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBRXRCLG1CQUFjLEdBQVEsZ0JBQWdCLENBQUE7SUFLdUQsQ0FBQzs7OztJQUU5RixvREFBUTs7O0lBQVI7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O29CQUMxQyxrOERBQTBEOztpQkFFM0Q7Ozs7Z0JBZGdDLFdBQVc7Z0JBQ25DLGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixNQUFNO2dCQUNOLFNBQVM7Ozt5QkF3RGYsS0FBSzs7SUFtR1Isd0NBQUM7Q0FBQSxBQXJKRCxJQXFKQztTQWhKWSxpQ0FBaUM7OztJQUk1Qyx5REFBd0I7O0lBQ3hCLHVEQUEyQjs7SUFDM0Isd0RBQWtEOztJQUNsRCx1REFBZ0I7O0lBQ2hCLHdEQUFzQjs7SUFDdEIsc0RBQWU7O0lBQ2YsMkRBQXNDOzs7OztJQUkxQix3REFBZ0M7Ozs7O0lBQUUsMERBQW9DOzs7OztJQUNoRix3REFBcUM7Ozs7O0lBQUUsbURBQXNCOztJQUFFLG1EQUF3Qjs7O0FBcUkzRjtJQU1FLGdCQUNTLFNBQStCLEVBQ04sSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDTixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCwwQkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdUhBQTBCO2lCQUMzQjs7OztnQkFsS21CLFlBQVk7Z0RBdUszQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsYUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLE1BQU07OztJQUdmLDJCQUFzQzs7SUFDdEMsc0JBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9zbj09PT09PT09PT09PT09PT09PT09PVxyXG4gIHN1Ykdyb3VwRm9ybTogRm9ybUdyb3VwO1xyXG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XHJcbiAgaGVhZGVyX25hbWU6IGFueSA9IFwiQWRkIGEgZ3JvdXAgdG8gc3Vic2NyaXB0aW9uc1wiO1xyXG4gIGNvbmZpZ0RhdGE6IGFueTtcclxuICBncm91cF9hcnJheTogYW55ID0gW107XHJcbiAgZGlhbG9nUmVmOiBhbnk7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IGFueSA9IFwiR3JvdXAgQWRkZWQhISFcIlxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgLy9nZW5lcmF0aW5nIHRoZSBmb3JtXHJcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG5cclxuICAgIC8vZ2V0dGluZyB0aGUgZ3JvdXBcclxuICAgIHRoaXMuZ2V0R3JvdXAoKTtcclxuXHJcbiAgICAvL1N3aXRjaCBDYXNlIHN0YXJ0cyBoZXJlXHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBhIEdyb3VwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcclxuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJDaGFuZ2UvUmVtb3ZlIEdyb3VwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PWdlbmVyYXRlIGZvcm09PT09PT09PT09PT09PVxyXG4gIGdlbmVyYXRlRm9ybSgpIHtcclxuICAgIHRoaXMuc3ViR3JvdXBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGZ1bGxuYW1lOiBbXSxcclxuICAgICAgcGhvbmU6IFtdLFxyXG4gICAgICBlbWFpbDogW10sXHJcbiAgICAgIGNvbXBhbnk6IFtdLFxyXG4gICAgICBncm91cDogW11cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdGhpcy5zdWJHcm91cEZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgIGZ1bGxuYW1lOiBkZWZhdWx0VmFsdWUuZnVsbG5hbWUsXHJcbiAgICAgIHBob25lOiBkZWZhdWx0VmFsdWUucGhvbmUsXHJcbiAgICAgIGVtYWlsOiBkZWZhdWx0VmFsdWUuZW1haWwsXHJcbiAgICAgIGNvbXBhbnk6IGRlZmF1bHRWYWx1ZS5jb21wYW55LFxyXG4gICAgICBncm91cDogZGVmYXVsdFZhbHVlLmdyb3VwXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBmdW5jdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsMiwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyBtc2c6IHggfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnN1Ykdyb3VwRm9ybS52YWx1ZS5ncm91cCA9PSAwKVxyXG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJSZW1vdmVkIEdyb3VwISEhXCI7ICAgIFxyXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xyXG4gICAgaWYgKHRoaXMuc3ViR3JvdXBGb3JtLmludmFsaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xyXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXHJcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnN1Ykdyb3VwRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXHJcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiZ3JvdXBcIl1cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAvL0dldHRpbmcgdGhlIHBhcmVudCBjYXRlZ29yeVxyXG4gIGdldEdyb3VwKCkge1xyXG4gICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XHJcbiAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLmdyb3VwLFxyXG4gICAgICB0b2tlbjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKVxyXG5cclxuICAgIH07XHJcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5ncm91cF9hcnJheSA9IHJlc3BvbnNlLnJlcztcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWwyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWwyPixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIl19