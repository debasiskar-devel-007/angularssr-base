/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from "@angular/forms";
export class AddEditNewsletterlibComponent {
    /**
     * @param {?} atp
     * @param {?} newsService
     * @param {?} datepipe
     * @param {?} cookieService
     * @param {?} formBuilder
     */
    constructor(atp, newsService, datepipe, cookieService, formBuilder) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        this.group_name_array = [];
        this.sender_name_array = [];
        // ==============================================
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Content:',
        };
        this.model = {
            editorData: ''
        };
        this.time = datepipe.transform(new Date(), 'h:mm a');
        console.log('Time', this.time);
    }
    /**
     * ckeditor end here
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
    }
    /**
     * @return {?}
     */
    open() {
        /** @type {?} */
        const amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        time => {
            console.log(time);
        }));
    }
    /*getting the group name*/
    /**
     * @return {?}
     */
    getGroupName() {
        /** @type {?} */
        var data = { 'source': this.configData.group_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.group_name_array = result.res;
        }));
    }
    /*getting the sender's email*/
    /**
     * @return {?}
     */
    getSenderAddress() {
        /** @type {?} */
        var data = { 'source': this.configData.sender_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.sender_name_array = result.res;
        }));
    }
}
AddEditNewsletterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-newsletterlib',
                template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\r\n\r\n\r\n\r\n        <!-- Newsletter title  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Title:</mat-label>\r\n          <input matInput formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n        <!-- Newsletter Subject  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Subject:</mat-label>\r\n          <input matInput formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- share newsletter with -->\r\n        <mat-form-field>\r\n          <mat-label>Share newsletter with group:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a group</mat-option>\r\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- sender's address  -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a sender</mat-option>\r\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Set Publish Date  -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Time Picker  -->\r\n        <mat-form-field>\r\n          <mat-label>Set time:</mat-label>\r\n          <input matInput atp-time-picker value=\"{{ time }}\" formControlName=\"\"/>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Content  -->\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\"></ckeditor>\r\n\r\n\r\n\r\n        <h1> SET FREQUENCY </h1>\r\n        <hr>\r\n\r\n\r\n        <!-- Automatically send newsletters to -->\r\n        <mat-form-field>\r\n          <mat-label>Automatically send newsletter to members:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a group</mat-option>\r\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Newsletter frequency  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Frequency:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=\"daily\">Daily</mat-option>\r\n            <mat-option value=\"weekly\">Weekly</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- News letter Day of the week  -->\r\n        <div class=\"dayofweek\">\r\n          <h5>NewsLetter day of the week</h5>\r\n          <mat-card-content class=\"date_wrapper\">\r\n            <mat-checkbox>Sunday</mat-checkbox>\r\n            <mat-checkbox>Monday</mat-checkbox>\r\n            <mat-checkbox>Tuesday</mat-checkbox>\r\n            <mat-checkbox>Wednesday</mat-checkbox>\r\n            <mat-checkbox>Thursday</mat-checkbox>\r\n            <mat-checkbox>Friday</mat-checkbox>\r\n            <mat-checkbox>Saturday</mat-checkbox>\r\n          </mat-card-content>\r\n        </div>\r\n\r\n\r\n        <!-- News Letter time of the day -->\r\n        <mat-form-field>\r\n          <mat-label>News Letter time of the day:</mat-label>\r\n          <input matInput atp-time-picker value=\"{{ time }}\" formControlName=\"\" />\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <!-- News Letter Time Zone -->\r\n        <mat-form-field>\r\n          <mat-label>News Letter Time Zone</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\r\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\r\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\r\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\r\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\r\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- News letter start Date -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <!-- News letter end Date -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker3></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <!-- NewsLetter reply to email address  -->\r\n\r\n        <mat-form-field>\r\n          <mat-label>Newsletter reply to email address</mat-label>\r\n          <input matInput placeholder=\"Newsletter reply to email address\" \r\n          value=\"{{ cookieValue.get_mail }}\" formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- Buttons  -->\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
            }] }
];
/** @nocollapse */
AddEditNewsletterlibComponent.ctorParameters = () => [
    { type: AmazingTimePickerService },
    { type: NewsTitleService },
    { type: DatePipe },
    { type: CookieService },
    { type: FormBuilder }
];
AddEditNewsletterlibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.header_name;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.buttonText;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.group_name_array;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.sender_name_array;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.configData;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.time;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.cookieValue;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.newsForm;
    /**
     * ckeditor start here
     * @type {?}
     */
    AddEditNewsletterlibComponent.prototype.Editor;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.editorConfig;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.model;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.atp;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.newsService;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.datepipe;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.cookieService;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9oRixNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7OztJQThCeEMsWUFBcUIsR0FBOEIsRUFBVSxXQUE4QixFQUNqRixRQUFrQixFQUFVLGFBQTZCLEVBQVcsV0FBeUI7UUFEbEYsUUFBRyxHQUFILEdBQUcsQ0FBMkI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDakYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFXLGdCQUFXLEdBQVgsV0FBVyxDQUFjOztRQTNCdkcsZ0JBQVcsR0FBSyxZQUFZLENBQUE7UUFDNUIsZUFBVSxHQUFLLE1BQU0sQ0FBQztRQUN0QixxQkFBZ0IsR0FBTyxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQU8sRUFBRSxDQUFDOzs7OztRQVFsQixXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxVQUFVO1NBQ3hCLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFXQSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBVEMsSUFDRSxNQUFNLENBQUMsU0FBYztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7O0lBU0QsUUFBUTtRQUVILHdCQUF3QjtRQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELElBQUk7O2NBRUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDekMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUlELFlBQVk7O1lBRU4sSUFBSSxHQUFPLEVBQUUsUUFBUSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFBLEVBQUU7O2dCQUNqRixNQUFVO1lBQ2QsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBR0QsZ0JBQWdCOztZQUVWLElBQUksR0FBSyxFQUFFLFFBQVEsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFFBQVEsQ0FBQSxFQUFFOztnQkFDbEYsTUFBVTtZQUNkLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLG9qTkFBc0Q7O2FBRXZEOzs7O1lBWFEsd0JBQXdCO1lBRXhCLGdCQUFnQjtZQUNoQixRQUFRO1lBQ1IsYUFBYTtZQUNzQixXQUFXOzs7cUJBZ0NsRCxLQUFLOzs7O0lBckJSLG9EQUE0Qjs7SUFDNUIsbURBQXNCOztJQUN0Qix5REFBMEI7O0lBQzFCLDBEQUEyQjs7SUFDM0IsbURBQWU7O0lBQ2YsNkNBQVU7O0lBQ1Ysb0RBQWdCOztJQUNoQixpREFBcUI7Ozs7O0lBSW5CLCtDQUE4Qjs7SUFDOUIscURBRUU7O0lBQ0YsOENBRUU7Ozs7O0lBU1MsNENBQXNDOzs7OztJQUFFLG9EQUFzQzs7Ozs7SUFDekYsaURBQTBCOztJQUFHLHNEQUFvQzs7Ozs7SUFBRyxvREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XHJcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LW5ld3NsZXR0ZXJsaWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT1cclxuICBoZWFkZXJfbmFtZTphbnk9XCJOZXdzbGV0dGVyXCJcclxuICBidXR0b25UZXh0OmFueT1cIlNBVkVcIjtcclxuICBncm91cF9uYW1lX2FycmF5OmFueSA9IFtdO1xyXG4gIHNlbmRlcl9uYW1lX2FycmF5OmFueSA9IFtdO1xyXG4gIGNvbmZpZ0RhdGE6YW55O1xyXG4gIHRpbWU6YW55IDtcclxuICBjb29raWVWYWx1ZTphbnk7XHJcbiAgbmV3c0Zvcm0gOiBGb3JtR3JvdXA7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xyXG4gICAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxyXG4gICAgZWRpdG9yQ29uZmlnID0ge1xyXG4gICAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcclxuICAgIH07XHJcbiAgICBwdWJsaWMgbW9kZWwgPSB7XHJcbiAgICAgIGVkaXRvckRhdGE6ICcnXHJcbiAgICB9O1xyXG4gICAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xyXG5cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcclxuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGF0cCA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSwgcHJpdmF0ZSBuZXdzU2VydmljZSA6IE5ld3NUaXRsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVwaXBlOiBEYXRlUGlwZSAsIHB1YmxpYyBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSAsIHByaXZhdGUgZm9ybUJ1aWxkZXIgOiBGb3JtQnVpbGRlcikgeyBcclxuICAgICAgdGhpcy50aW1lID0gZGF0ZXBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKCksJ2g6bW0gYScpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVGltZScsdGhpcy50aW1lKTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAvL0NhbGxpbmcgdGhlIGdyb3VwIG5hbWVcclxuICAgICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XHJcblxyXG4gICAgICAgLy9HZXQgc2VuZGVyJ3MgZ2V0R3JvdXBOYW1lXHJcbiAgICAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcclxuICAgICAgXHJcbiAgICAgICAvL0dldHRpbmcgdGhlIGNvb2tpZSB2YWx1ZVxyXG4gICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcclxuXHJcbiAgICAgICBcclxuICB9XHJcblxyXG4gIG9wZW4oKVxyXG4gIHtcclxuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xyXG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLypnZXR0aW5nIHRoZSBncm91cCBuYW1lKi9cclxuICBnZXRHcm91cE5hbWUoKVxyXG4gIHtcclxuICAgIHZhciBkYXRhOmFueSA9IHsgJ3NvdXJjZSc6dGhpcy5jb25maWdEYXRhLmdyb3VwX3RhYmxlIH07XHJcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xyXG4gICAgICAgbGV0IHJlc3VsdDphbnk7XHJcbiAgICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qZ2V0dGluZyB0aGUgc2VuZGVyJ3MgZW1haWwqL1xyXG4gIGdldFNlbmRlckFkZHJlc3MoKVxyXG4gIHtcclxuICAgIHZhciBkYXRhOmFueT17ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5zZW5kZXJfdGFibGV9O1xyXG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIrJ2RhdGFsaXN0JyxkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2U9PntcclxuICAgICAgbGV0IHJlc3VsdDphbnk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNlbmRlcl9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcclxuICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==