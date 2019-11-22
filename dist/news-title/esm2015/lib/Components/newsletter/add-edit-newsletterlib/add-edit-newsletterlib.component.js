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
import { Router } from '@angular/router';
export class AddEditNewsletterlibComponent {
    /**
     * @param {?} atp
     * @param {?} newsService
     * @param {?} datepipe
     * @param {?} cookieService
     * @param {?} formBuilder
     * @param {?} router
     */
    constructor(atp, newsService, datepipe, cookieService, formBuilder, router) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
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
        if (this.configData.action == 'add')
            this.time = this.datepipe.transform(new Date(), 'h:mm a');
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
        //  calling the form generation 
        this.generateForm();
        this.newsForm.value.cookiemail = this.cookieService.get('get_email');
        /*Switch case*/
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Newsletter";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.setDefaultValue(this.configData.defaultData);
                break;
        }
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
    //generate form
    /**
     * @return {?}
     */
    generateForm() {
        this.newsForm = this.formBuilder.group({
            newstitle: [],
            newssubject: [],
            share_news: [],
            senderaddress: [],
            publishdate: [],
            settime: [this.time],
            content: [],
            sendnews: [],
            newsfrequency: [],
            timeofday: [this.time],
            timezone: [],
            startdate: [],
            enddate: [],
            reply: [],
            status: [1]
        });
    }
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.newsForm.patchValue({
            newstitle: defaultValue.newstitle,
            newssubject: defaultValue.newssubject,
            share_news: defaultValue.share_news,
            senderaddress: defaultValue.senderaddress,
            publishdate: defaultValue.publishdate,
            settime: defaultValue.settime,
            content: defaultValue.content,
            sendnews: defaultValue.sendnews,
            newsfrequency: defaultValue.newsfrequency,
            timeofday: defaultValue.timeofday,
            timezone: defaultValue.timezone,
            startdate: defaultValue.startdate,
            enddate: defaultValue.enddate,
            reply: defaultValue.reply
        });
    }
    //submit function
    /**
     * @return {?}
     */
    onSubmit() {
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            console.log("Invalid Form");
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["share_news", "senderaddress"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    console.log(response.status);
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
}
AddEditNewsletterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-newsletterlib',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\">\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\">\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n\n        <!-- Content  -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"content\"></ckeditor>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\">Daily</mat-option>\n            <mat-option value=\"weekly\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\">\n            <mat-checkbox>Sunday</mat-checkbox>\n            <mat-checkbox>Monday</mat-checkbox>\n            <mat-checkbox>Tuesday</mat-checkbox>\n            <mat-checkbox>Wednesday</mat-checkbox>\n            <mat-checkbox>Thursday</mat-checkbox>\n            <mat-checkbox>Friday</mat-checkbox>\n            <mat-checkbox>Saturday</mat-checkbox>\n          </mat-card-content>\n        </div>\n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
            }] }
];
/** @nocollapse */
AddEditNewsletterlibComponent.ctorParameters = () => [
    { type: AmazingTimePickerService },
    { type: NewsTitleService },
    { type: DatePipe },
    { type: CookieService },
    { type: FormBuilder },
    { type: Router }
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.datepipe;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.cookieService;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.formBuilder;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBTzFELE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7OztJQThCeEMsWUFBcUIsR0FBOEIsRUFBVSxXQUE4QixFQUNsRixRQUFrQixFQUFVLGFBQTZCLEVBQVcsV0FBeUIsRUFDN0YsTUFBZTtRQUZILFFBQUcsR0FBSCxHQUFHLENBQTJCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQ2xGLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUM3RixXQUFNLEdBQU4sTUFBTSxDQUFTOztRQTVCeEIsZ0JBQVcsR0FBSyxZQUFZLENBQUE7UUFDNUIsZUFBVSxHQUFLLE1BQU0sQ0FBQztRQUN0QixxQkFBZ0Is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OztZQXZMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsczlNQUFzRDs7YUFFdkQ7Ozs7WUFaUSx3QkFBd0I7WUFFeEIsZ0JBQWdCO1lBQ2hCLFFBQVE7WUFDUixhQUFhO1lBQ3NCLFdBQVc7WUFDOUMsTUFBTTs7O3FCQWdDVixLQUFLOzs7O0lBckJSLG9EQUE0Qjs7SUFDNUIsbURBQXNCOztJQUN0Qix5REFBMEI7O0lBQzFCLDBEQUEyQjs7SUFDM0IsbURBQWU7O0lBQ2YsNkNBQVU7O0lBQ1Ysb0RBQWdCOztJQUNoQixpREFBcUI7Ozs7O0lBSW5CLCtDQUE4Qjs7SUFDOUIscURBRUU7O0lBQ0YsOENBRUU7Ozs7O0lBU1MsNENBQXNDOzs7OztJQUFFLG9EQUFzQzs7SUFDekYsaURBQXlCOztJQUFHLHNEQUFvQzs7Ozs7SUFBRyxvREFBaUM7O0lBQ3BHLCtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0LEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyICwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtbmV3c2xldHRlcmxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vID09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT1cbiAgaGVhZGVyX25hbWU6YW55PVwiTmV3c2xldHRlclwiXG4gIGJ1dHRvblRleHQ6YW55PVwiU0FWRVwiO1xuICBncm91cF9uYW1lX2FycmF5OmFueSA9IFtdO1xuICBzZW5kZXJfbmFtZV9hcnJheTphbnkgPSBbXTtcbiAgY29uZmlnRGF0YTphbnk7XG4gIHRpbWU6YW55IDtcbiAgY29va2llVmFsdWU6YW55O1xuICBuZXdzRm9ybSA6IEZvcm1Hcm91cDtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG4gICAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICAgIGVkaXRvckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ29udGVudDonLFxuICAgIH07XG4gICAgcHVibGljIG1vZGVsID0ge1xuICAgICAgZWRpdG9yRGF0YTogJydcbiAgICB9O1xuICAgIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gICAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGF0cCA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSwgcHJpdmF0ZSBuZXdzU2VydmljZSA6IE5ld3NUaXRsZVNlcnZpY2UsXG4gICAgcHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZSAsIHB1YmxpYyBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSAsIHByaXZhdGUgZm9ybUJ1aWxkZXIgOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7IFxuXG4gICAgIFxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmKHRoaXMuY29uZmlnRGF0YS5hY3Rpb249PSdhZGQnKVxuICAgIHRoaXMudGltZSA9IHRoaXMuZGF0ZXBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKCksJ2g6bW0gYScpOyAgXG5cbiAgICAgICAvL0NhbGxpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICAgICB0aGlzLmdldEdyb3VwTmFtZSgpO1xuXG4gICAgICAgLy9HZXQgc2VuZGVyJ3MgZ2V0R3JvdXBOYW1lXG4gICAgICAgdGhpcy5nZXRTZW5kZXJBZGRyZXNzKCk7XG4gICAgICBcbiAgICAgICAvL0dldHRpbmcgdGhlIGNvb2tpZSB2YWx1ZVxuICAgICAgIHRoaXMuY29va2llVmFsdWUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG5cbiAgICAgIC8vICBjYWxsaW5nIHRoZSBmb3JtIGdlbmVyYXRpb24gXG4gICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5jb29raWVtYWlsID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnZ2V0X2VtYWlsJyk7XG5cbiAgICAgICAvKlN3aXRjaCBjYXNlKi9cbiAgICAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIGEgTmV3c2xldHRlclwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7ICBcbiAgICAgICAgICB0aGlzLnRpbWU9XCJcIjtcbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpOyAgICAgICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBcblxuICAgICAgIFxuICB9XG5cbiAgb3BlbigpXG4gIHtcbiAgICBjb25zdCBhbWF6aW5nVGltZVBpY2tlciA9IHRoaXMuYXRwLm9wZW4oKTtcbiAgICBhbWF6aW5nVGltZVBpY2tlci5hZnRlckNsb3NlKCkuc3Vic2NyaWJlKHRpbWU9PntcbiAgICB9KTtcbiAgfVxuXG5cbiAgLypnZXR0aW5nIHRoZSBncm91cCBuYW1lKi9cbiAgZ2V0R3JvdXBOYW1lKClcbiAge1xuICAgIHZhciBkYXRhOmFueSA9IHsgJ3NvdXJjZSc6dGhpcy5jb25maWdEYXRhLmdyb3VwX3RhYmxlIH07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIrJ2RhdGFsaXN0JyxkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2U9PntcbiAgICAgICBsZXQgcmVzdWx0OmFueTtcbiAgICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICB0aGlzLmdyb3VwX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLypnZXR0aW5nIHRoZSBzZW5kZXIncyBlbWFpbCovXG4gIGdldFNlbmRlckFkZHJlc3MoKVxuICB7XG4gICAgdmFyIGRhdGE6YW55PXsgJ3NvdXJjZSc6dGhpcy5jb25maWdEYXRhLnNlbmRlcl90YWJsZX07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIrJ2RhdGFsaXN0JyxkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2U9PntcbiAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnNlbmRlcl9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgIH0pO1xuICB9XG5cblxuICAvL2dlbmVyYXRlIGZvcm1cbiAgZ2VuZXJhdGVGb3JtKCl7XG4gICAgdGhpcy5uZXdzRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmV3c3RpdGxlOltdLFxuICAgICAgbmV3c3N1YmplY3Q6W10sXG4gICAgICBzaGFyZV9uZXdzOltdLFxuICAgICAgc2VuZGVyYWRkcmVzczpbXSxcbiAgICAgIHB1Ymxpc2hkYXRlOltdLFxuICAgICAgc2V0dGltZTpbdGhpcy50aW1lXSxcbiAgICAgIGNvbnRlbnQ6W10sXG4gICAgICBzZW5kbmV3czpbXSxcbiAgICAgIG5ld3NmcmVxdWVuY3k6W10sXG4gICAgICB0aW1lb2ZkYXk6W3RoaXMudGltZV0sXG4gICAgICB0aW1lem9uZTpbXSxcbiAgICAgIHN0YXJ0ZGF0ZTpbXSxcbiAgICAgIGVuZGRhdGU6W10sXG4gICAgICByZXBseTpbXSxcbiAgICAgIHN0YXR1czpbMV1cbiAgICB9KTtcbiAgfVxuXG5cblxuICAvL3NldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWVcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMubmV3c0Zvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuZXdzdGl0bGU6ZGVmYXVsdFZhbHVlLm5ld3N0aXRsZSxcbiAgICAgIG5ld3NzdWJqZWN0OmRlZmF1bHRWYWx1ZS5uZXdzc3ViamVjdCxcbiAgICAgIHNoYXJlX25ld3M6ZGVmYXVsdFZhbHVlLnNoYXJlX25ld3MsXG4gICAgICBzZW5kZXJhZGRyZXNzOmRlZmF1bHRWYWx1ZS5zZW5kZXJhZGRyZXNzLFxuICAgICAgcHVibGlzaGRhdGU6ZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlLFxuICAgICAgc2V0dGltZTpkZWZhdWx0VmFsdWUuc2V0dGltZSxcbiAgICAgIGNvbnRlbnQ6ZGVmYXVsdFZhbHVlLmNvbnRlbnQsXG4gICAgICBzZW5kbmV3czpkZWZhdWx0VmFsdWUuc2VuZG5ld3MsXG4gICAgICBuZXdzZnJlcXVlbmN5OmRlZmF1bHRWYWx1ZS5uZXdzZnJlcXVlbmN5LFxuICAgICAgdGltZW9mZGF5OmRlZmF1bHRWYWx1ZS50aW1lb2ZkYXksXG4gICAgICB0aW1lem9uZTpkZWZhdWx0VmFsdWUudGltZXpvbmUsXG4gICAgICBzdGFydGRhdGU6ZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZSxcbiAgICAgIGVuZGRhdGU6ZGVmYXVsdFZhbHVlLmVuZGRhdGUsXG4gICAgICByZXBseTpkZWZhdWx0VmFsdWUucmVwbHlcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuICAvL3N1Ym1pdCBmdW5jdGlvblxuICBvblN1Ym1pdCgpIHtcblxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5uZXdzRm9ybS5pbnZhbGlkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgRm9ybVwiKTtyZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMubmV3c0Zvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJzaGFyZV9uZXdzXCIsXCJzZW5kZXJhZGRyZXNzXCJdXG4gICAgICB9O1xuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==