/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component.ts
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
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router) {
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
    //generate form
    //generate form
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.generateForm = 
    //generate form
    /**
     * @return {?}
     */
    function () {
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
    };
    //setting the default value
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.setDefaultValue = 
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
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
    };
    //submit function
    //submit function
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.onSubmit = 
    //submit function
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            console.log("Invalid Form");
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["share_news", "senderaddress"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
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
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\">\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\">\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n\n        <!-- Content  -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"content\"></ckeditor>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\">Daily</mat-option>\n            <mat-option value=\"weekly\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\">\n            <mat-checkbox>Sunday</mat-checkbox>\n            <mat-checkbox>Monday</mat-checkbox>\n            <mat-checkbox>Tuesday</mat-checkbox>\n            <mat-checkbox>Wednesday</mat-checkbox>\n            <mat-checkbox>Thursday</mat-checkbox>\n            <mat-checkbox>Friday</mat-checkbox>\n            <mat-checkbox>Saturday</mat-checkbox>\n          </mat-card-content>\n        </div>\n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder },
        { type: Router }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxNQUFNLEVBQW1CLE1BQU0saUJBQWlCLENBQUM7QUFFMUQ7SUFtQ0UsdUNBQXFCLEdBQThCLEVBQVUsV0FBOEIsRUFDbEYsUUFBa0IsRUFBVSxhQUE2QixFQUFXLFdBQXlCLEVBQzdGLE1BQWU7UUFGSCxRQUFHLEdBQUgsR0FBRyxDQUEyQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUNsRixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDN0YsV0FBTSxHQUFOLE1BQU0sQ0FBUzs7UUE1QnhCLGdCQUFXLEdBQUssWUFBWSxDQUFBO1FBQzVCLGVBQVUsR0FBSyxNQUFNLENBQUM7UUFDdEIscUJBQWdCLEdBQU8sRUFBRSxD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O3FCQUFNO29CQUNMLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2lCQUNsRDtZQUNILENBQUM7Ozs7WUFBRSxVQUFDLEtBQUs7Z0JBQ1AsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXZMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsczlNQUFzRDs7aUJBRXZEOzs7O2dCQVpRLHdCQUF3QjtnQkFFeEIsZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLGFBQWE7Z0JBQ3NCLFdBQVc7Z0JBQzlDLE1BQU07Ozt5QkFnQ1YsS0FBSzs7SUEwSlYsb0NBQUM7Q0FBQSxBQXhMRCxJQXdMQztTQW5MWSw2QkFBNkI7OztJQUl4QyxvREFBNEI7O0lBQzVCLG1EQUFzQjs7SUFDdEIseURBQTBCOztJQUMxQiwwREFBMkI7O0lBQzNCLG1EQUFlOztJQUNmLDZDQUFVOztJQUNWLG9EQUFnQjs7SUFDaEIsaURBQXFCOzs7OztJQUluQiwrQ0FBOEI7O0lBQzlCLHFEQUVFOztJQUNGLDhDQUVFOzs7OztJQVNTLDRDQUFzQzs7Ozs7SUFBRSxvREFBc0M7O0lBQ3pGLGlEQUF5Qjs7SUFBRyxzREFBb0M7Ozs7O0lBQUcsb0RBQWlDOztJQUNwRywrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciAsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LW5ld3NsZXR0ZXJsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09XG4gIGhlYWRlcl9uYW1lOmFueT1cIk5ld3NsZXR0ZXJcIlxuICBidXR0b25UZXh0OmFueT1cIlNBVkVcIjtcbiAgZ3JvdXBfbmFtZV9hcnJheTphbnkgPSBbXTtcbiAgc2VuZGVyX25hbWVfYXJyYXk6YW55ID0gW107XG4gIGNvbmZpZ0RhdGE6YW55O1xuICB0aW1lOmFueSA7XG4gIGNvb2tpZVZhbHVlOmFueTtcbiAgbmV3c0Zvcm0gOiBGb3JtR3JvdXA7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICAgIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgICBlZGl0b3JDb25maWcgPSB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcbiAgICB9O1xuICAgIHB1YmxpYyBtb2RlbCA9IHtcbiAgICAgIGVkaXRvckRhdGE6ICcnXG4gICAgfTtcbiAgICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAgIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhdHAgOiBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UsIHByaXZhdGUgbmV3c1NlcnZpY2UgOiBOZXdzVGl0bGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUgLCBwdWJsaWMgY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UgLCBwcml2YXRlIGZvcm1CdWlsZGVyIDogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlciA6IFJvdXRlcikgeyBcblxuICAgICBcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZih0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uPT0nYWRkJylcbiAgICB0aGlzLnRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCdoOm1tIGEnKTsgIFxuXG4gICAgICAgLy9DYWxsaW5nIHRoZSBncm91cCBuYW1lXG4gICAgICAgdGhpcy5nZXRHcm91cE5hbWUoKTtcblxuICAgICAgIC8vR2V0IHNlbmRlcidzIGdldEdyb3VwTmFtZVxuICAgICAgIHRoaXMuZ2V0U2VuZGVyQWRkcmVzcygpO1xuICAgICAgXG4gICAgICAgLy9HZXR0aW5nIHRoZSBjb29raWUgdmFsdWVcbiAgICAgICB0aGlzLmNvb2tpZVZhbHVlID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldEFsbCgpO1xuXG4gICAgICAvLyAgY2FsbGluZyB0aGUgZm9ybSBnZW5lcmF0aW9uIFxuICAgICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuY29va2llbWFpbCA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2dldF9lbWFpbCcpO1xuXG4gICAgICAgLypTd2l0Y2ggY2FzZSovXG4gICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBhIE5ld3NsZXR0ZXJcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiOyAgXG4gICAgICAgICAgdGhpcy50aW1lPVwiXCI7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTsgICAgICAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG5cbiAgICAgICBcbiAgfVxuXG4gIG9wZW4oKVxuICB7XG4gICAgY29uc3QgYW1hemluZ1RpbWVQaWNrZXIgPSB0aGlzLmF0cC5vcGVuKCk7XG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lPT57XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qZ2V0dGluZyB0aGUgZ3JvdXAgbmFtZSovXG4gIGdldEdyb3VwTmFtZSgpXG4gIHtcbiAgICB2YXIgZGF0YTphbnkgPSB7ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5ncm91cF90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyKydkYXRhbGlzdCcsZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlPT57XG4gICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgdGhpcy5ncm91cF9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qZ2V0dGluZyB0aGUgc2VuZGVyJ3MgZW1haWwqL1xuICBnZXRTZW5kZXJBZGRyZXNzKClcbiAge1xuICAgIHZhciBkYXRhOmFueT17ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5zZW5kZXJfdGFibGV9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyKydkYXRhbGlzdCcsZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlPT57XG4gICAgICBsZXQgcmVzdWx0OmFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICB9KTtcbiAgfVxuXG5cbiAgLy9nZW5lcmF0ZSBmb3JtXG4gIGdlbmVyYXRlRm9ybSgpe1xuICAgIHRoaXMubmV3c0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5ld3N0aXRsZTpbXSxcbiAgICAgIG5ld3NzdWJqZWN0OltdLFxuICAgICAgc2hhcmVfbmV3czpbXSxcbiAgICAgIHNlbmRlcmFkZHJlc3M6W10sXG4gICAgICBwdWJsaXNoZGF0ZTpbXSxcbiAgICAgIHNldHRpbWU6W3RoaXMudGltZV0sXG4gICAgICBjb250ZW50OltdLFxuICAgICAgc2VuZG5ld3M6W10sXG4gICAgICBuZXdzZnJlcXVlbmN5OltdLFxuICAgICAgdGltZW9mZGF5Olt0aGlzLnRpbWVdLFxuICAgICAgdGltZXpvbmU6W10sXG4gICAgICBzdGFydGRhdGU6W10sXG4gICAgICBlbmRkYXRlOltdLFxuICAgICAgcmVwbHk6W10sXG4gICAgICBzdGF0dXM6WzFdXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLy9zZXR0aW5nIHRoZSBkZWZhdWx0IHZhbHVlXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLm5ld3NGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmV3c3RpdGxlOmRlZmF1bHRWYWx1ZS5uZXdzdGl0bGUsXG4gICAgICBuZXdzc3ViamVjdDpkZWZhdWx0VmFsdWUubmV3c3N1YmplY3QsXG4gICAgICBzaGFyZV9uZXdzOmRlZmF1bHRWYWx1ZS5zaGFyZV9uZXdzLFxuICAgICAgc2VuZGVyYWRkcmVzczpkZWZhdWx0VmFsdWUuc2VuZGVyYWRkcmVzcyxcbiAgICAgIHB1Ymxpc2hkYXRlOmRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSxcbiAgICAgIHNldHRpbWU6ZGVmYXVsdFZhbHVlLnNldHRpbWUsXG4gICAgICBjb250ZW50OmRlZmF1bHRWYWx1ZS5jb250ZW50LFxuICAgICAgc2VuZG5ld3M6ZGVmYXVsdFZhbHVlLnNlbmRuZXdzLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTpkZWZhdWx0VmFsdWUubmV3c2ZyZXF1ZW5jeSxcbiAgICAgIHRpbWVvZmRheTpkZWZhdWx0VmFsdWUudGltZW9mZGF5LFxuICAgICAgdGltZXpvbmU6ZGVmYXVsdFZhbHVlLnRpbWV6b25lLFxuICAgICAgc3RhcnRkYXRlOmRlZmF1bHRWYWx1ZS5zdGFydGRhdGUsXG4gICAgICBlbmRkYXRlOmRlZmF1bHRWYWx1ZS5lbmRkYXRlLFxuICAgICAgcmVwbHk6ZGVmYXVsdFZhbHVlLnJlcGx5XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbiAgLy9zdWJtaXQgZnVuY3Rpb25cbiAgb25TdWJtaXQoKSB7XG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMubmV3c0Zvcm0uaW52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIEZvcm1cIik7cmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLm5ld3NGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wic2hhcmVfbmV3c1wiLFwic2VuZGVyYWRkcmVzc1wiXVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=