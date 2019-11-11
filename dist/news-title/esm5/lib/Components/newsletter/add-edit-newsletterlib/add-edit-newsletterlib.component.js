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
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder) {
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
    Object.defineProperty(AddEditNewsletterlibComponent.prototype, "config", {
        /**ckeditor end here*/
        set: /**
         * ckeditor end here
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            console.log(time);
        }));
    };
    /*getting the group name*/
    /*getting the group name*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getGroupName = /*getting the group name*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.group_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.group_name_array = result.res;
        }));
    };
    /*getting the sender's email*/
    /*getting the sender's email*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getSenderAddress = /*getting the sender's email*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.sender_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.sender_name_array = result.res;
        }));
    };
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\r\n\r\n\r\n\r\n        <!-- Newsletter title  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Title:</mat-label>\r\n          <input matInput formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n        <!-- Newsletter Subject  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Subject:</mat-label>\r\n          <input matInput formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- share newsletter with -->\r\n        <mat-form-field>\r\n          <mat-label>Share newsletter with group:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a group</mat-option>\r\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- sender's address  -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a sender</mat-option>\r\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Set Publish Date  -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Time Picker  -->\r\n        <mat-form-field>\r\n          <mat-label>Set time:</mat-label>\r\n          <input matInput atp-time-picker value=\"{{ time }}\" formControlName=\"\"/>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Content  -->\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\"></ckeditor>\r\n\r\n\r\n\r\n        <h1> SET FREQUENCY </h1>\r\n        <hr>\r\n\r\n\r\n        <!-- Automatically send newsletters to -->\r\n        <mat-form-field>\r\n          <mat-label>Automatically send newsletter to members:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=0>Select a group</mat-option>\r\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Newsletter frequency  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Frequency:</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=\"daily\">Daily</mat-option>\r\n            <mat-option value=\"weekly\">Weekly</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- News letter Day of the week  -->\r\n        <div class=\"dayofweek\">\r\n          <h5>NewsLetter day of the week</h5>\r\n          <mat-card-content class=\"date_wrapper\">\r\n            <mat-checkbox>Sunday</mat-checkbox>\r\n            <mat-checkbox>Monday</mat-checkbox>\r\n            <mat-checkbox>Tuesday</mat-checkbox>\r\n            <mat-checkbox>Wednesday</mat-checkbox>\r\n            <mat-checkbox>Thursday</mat-checkbox>\r\n            <mat-checkbox>Friday</mat-checkbox>\r\n            <mat-checkbox>Saturday</mat-checkbox>\r\n          </mat-card-content>\r\n        </div>\r\n\r\n\r\n        <!-- News Letter time of the day -->\r\n        <mat-form-field>\r\n          <mat-label>News Letter time of the day:</mat-label>\r\n          <input matInput atp-time-picker value=\"{{ time }}\" formControlName=\"\" />\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <!-- News Letter Time Zone -->\r\n        <mat-form-field>\r\n          <mat-label>News Letter Time Zone</mat-label>\r\n          <mat-select matNativeControl required formControlName=\"\">\r\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\r\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\r\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\r\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\r\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\r\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- News letter start Date -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <!-- News letter end Date -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker3></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <!-- NewsLetter reply to email address  -->\r\n\r\n        <mat-form-field>\r\n          <mat-label>Newsletter reply to email address</mat-label>\r\n          <input matInput placeholder=\"Newsletter reply to email address\" \r\n          value=\"{{ cookieValue.get_mail }}\" formControlName=\"\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- Buttons  -->\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder }
    ]; };
    AddEditNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditNewsletterlibComponent;
}());
export { AddEditNewsletterlibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRjtJQW1DRSx1Q0FBcUIsR0FBOEIsRUFBVSxXQUE4QixFQUNqRixRQUFrQixFQUFVLGFBQTZCLEVBQVcsV0FBeUI7UUFEbEYsUUFBRyxHQUFILEdBQUcsQ0FBMkI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDakYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFXLGdCQUFXLEdBQVgsV0FBVyxDQUFjOztRQTNCdkcsZ0JBQVcsR0FBSyxZQUFZLENBQUE7UUFDNUIsZUFBVSxHQUFLLE1BQU0sQ0FBQztRQUN0QixxQkFBZ0IsR0FBTyxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQU8sRUFBRSxDQUFDOzs7OztRQVFsQixXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNi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Ozs7O0lBQUcsb0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xyXG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09XHJcbiAgaGVhZGVyX25hbWU6YW55PVwiTmV3c2xldHRlclwiXHJcbiAgYnV0dG9uVGV4dDphbnk9XCJTQVZFXCI7XHJcbiAgZ3JvdXBfbmFtZV9hcnJheTphbnkgPSBbXTtcclxuICBzZW5kZXJfbmFtZV9hcnJheTphbnkgPSBbXTtcclxuICBjb25maWdEYXRhOmFueTtcclxuICB0aW1lOmFueSA7XHJcbiAgY29va2llVmFsdWU6YW55O1xyXG4gIG5ld3NGb3JtIDogRm9ybUdyb3VwO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cclxuICAgIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcclxuICAgIGVkaXRvckNvbmZpZyA9IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICdDb250ZW50OicsXHJcbiAgICB9O1xyXG4gICAgcHVibGljIG1vZGVsID0ge1xyXG4gICAgICBlZGl0b3JEYXRhOiAnJ1xyXG4gICAgfTtcclxuICAgIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XHJcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhdHAgOiBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UsIHByaXZhdGUgbmV3c1NlcnZpY2UgOiBOZXdzVGl0bGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlcGlwZTogRGF0ZVBpcGUgLCBwdWJsaWMgY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UgLCBwcml2YXRlIGZvcm1CdWlsZGVyIDogRm9ybUJ1aWxkZXIpIHsgXHJcbiAgICAgIHRoaXMudGltZSA9IGRhdGVwaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCdoOm1tIGEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RpbWUnLHRoaXMudGltZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgLy9DYWxsaW5nIHRoZSBncm91cCBuYW1lXHJcbiAgICAgICB0aGlzLmdldEdyb3VwTmFtZSgpO1xyXG5cclxuICAgICAgIC8vR2V0IHNlbmRlcidzIGdldEdyb3VwTmFtZVxyXG4gICAgICAgdGhpcy5nZXRTZW5kZXJBZGRyZXNzKCk7XHJcbiAgICAgIFxyXG4gICAgICAgLy9HZXR0aW5nIHRoZSBjb29raWUgdmFsdWVcclxuICAgICAgIHRoaXMuY29va2llVmFsdWUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XHJcblxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxuICBvcGVuKClcclxuICB7XHJcbiAgICBjb25zdCBhbWF6aW5nVGltZVBpY2tlciA9IHRoaXMuYXRwLm9wZW4oKTtcclxuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyh0aW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qZ2V0dGluZyB0aGUgZ3JvdXAgbmFtZSovXHJcbiAgZ2V0R3JvdXBOYW1lKClcclxuICB7XHJcbiAgICB2YXIgZGF0YTphbnkgPSB7ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5ncm91cF90YWJsZSB9O1xyXG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIrJ2RhdGFsaXN0JyxkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2U9PntcclxuICAgICAgIGxldCByZXN1bHQ6YW55O1xyXG4gICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICB0aGlzLmdyb3VwX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cclxuICBnZXRTZW5kZXJBZGRyZXNzKClcclxuICB7XHJcbiAgICB2YXIgZGF0YTphbnk9eyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlfTtcclxuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyKydkYXRhbGlzdCcsZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlPT57XHJcbiAgICAgIGxldCByZXN1bHQ6YW55O1xyXG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XHJcbiAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=