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
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
export class AddEditNewsletterlibComponent {
    /**
     * @param {?} atp
     * @param {?} newsService
     * @param {?} datepipe
     * @param {?} cookieService
     * @param {?} formBuilder
     * @param {?} router
     * @param {?} snackBar
     */
    constructor(atp, newsService, datepipe, cookieService, formBuilder, router, snackBar) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        this.group_name_array = [];
        this.sender_name_array = [];
        this.frequency_flag = false;
        this.days_array = [];
        this.editorconfig = {};
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
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
        // setTimeout(() => {
        this.days_json = [
            {
                "day": "Sunday",
                "value": 1,
                isSelected: false
            },
            {
                "day": "Monday",
                "value": 2,
                isSelected: false
            },
            {
                "day": "Tuesday",
                "value": 3,
                isSelected: false
            },
            {
                "day": "Wednesday",
                "value": 4,
                isSelected: false
            },
            {
                "day": "Thursday",
                "value": 5,
                isSelected: true
            },
            {
                "day": "Friday",
                "value": 6,
                isSelected: false
            },
            {
                "day": "Saturday",
                "value": 7,
                isSelected: false
            }
        ];
        // }, 1000);
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
            this.time = this.datepipe.transform(new Date(), 'h:mm');
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
                this.message = "Newsletter Added Successfully!!!";
                break;
            case 'edit':
                this.days_json = [];
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.message = "Newsletter Information Updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                if (this.configData.defaultData.days_of_weeks != null)
                    this.frequency_flag = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.days_json = this.configData.defaultData.days_of_weeks;
                }), 1000);
                break;
        }
    }
    /**
     * mat snackbar *
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    /**
     * opening up the time picker *
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
            newstitle: ['', [Validators.required]],
            newssubject: ['', [Validators.required]],
            share_news: [],
            senderaddress: [],
            publishdate: ['', [Validators.required]],
            settime: [this.time],
            content: ['', [Validators.required]],
            sendnews: [],
            newsfrequency: [],
            days_of_weeks: [],
            timeofday: [this.time],
            timezone: [],
            startdate: ['', [Validators.required]],
            enddate: ['', [Validators.required]],
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
            days_of_weeks: defaultValue.days_of_weeks,
            sendnews: defaultValue.sendnews,
            newsfrequency: defaultValue.newsfrequency,
            timeofday: defaultValue.timeofday,
            timezone: defaultValue.timezone,
            startdate: defaultValue.startdate,
            enddate: defaultValue.enddate,
            reply: defaultValue.reply
        });
    }
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.newsForm.controls[val].markAsUntouched();
    }
    /**
     * marking the checkbox as true *
     * @param {?} day_var
     * @return {?}
     */
    getDays(day_var) {
        if (day_var.isSelected === true)
            day_var.isSelected = false;
        else
            day_var.isSelected = true;
    }
    //submit function
    /**
     * @return {?}
     */
    onSubmit() {
        for (var i = 0; i < this.days_json.length; i++) {
            if (this.days_json[i].isSelected)
                this.days_array.push(this.days_json[i]);
            else
                this.days_array.push(this.days_json[i]);
        }
        this.newsForm.value.days_of_weeks = this.days_array;
        /** marking as untouched **/
        for (let x in this.newsForm.controls) {
            this.newsForm.controls[x].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
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
                    this.openSnackBar(this.message, "OK");
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
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" [config]=\"editorconfig\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag===true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
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
    { type: Router },
    { type: MatSnackBar }
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.frequency_flag;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.days_array;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.editorconfig;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.days_json;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.message;
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
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsTUFBTSxFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQU94RCxNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7Ozs7O0lBdUN4QyxZQUFxQixHQUE4QixFQUFVLFdBQThCLEVBQ2xGLFFBQWtCLEVBQVUsYUFBNkIsRUFBVyxXQUF5QixFQUM3RixNQUFlLEVBQVcsUUFBcUI7UUFGbkMsUUFBRyxHQUFILEdBQUcsQ0FBMkI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDbEYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFXLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQzdGLFdBQU0sR0FB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O0lBV1MsNENBQXNDOzs7OztJQUFFLG9EQUFzQzs7SUFDekYsaURBQXlCOztJQUFHLHNEQUFvQzs7Ozs7SUFBRyxvREFBaUM7O0lBQ3BHLCtDQUFzQjs7Ozs7SUFBRyxpREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciAsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgaGVhZGVyX25hbWU6YW55PVwiTmV3c2xldHRlclwiXG4gIHB1YmxpYyBidXR0b25UZXh0OmFueT1cIlNBVkVcIjtcbiAgcHVibGljIGdyb3VwX25hbWVfYXJyYXk6YW55ID0gW107XG4gIHB1YmxpYyBzZW5kZXJfbmFtZV9hcnJheTphbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6YW55O1xuICBwdWJsaWMgdGltZTphbnkgO1xuICBwdWJsaWMgY29va2llVmFsdWU6YW55O1xuICBwdWJsaWMgbmV3c0Zvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmcmVxdWVuY3lfZmxhZzpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkYXlzX2FycmF5OmFueSA9IFtdO1xuICBwdWJsaWMgZWRpdG9yY29uZmlnIDogYW55ID0ge307XG4gIGRheXNfanNvbjphbnk7XG4gIHB1YmxpYyBtZXNzYWdlIDogc3RyaW5nO1xuXG4gIFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gICAgZWRpdG9yQ29uZmlnID0ge1xuICAgICAgcGxhY2Vob2xkZXI6ICdDb250ZW50OicsXG4gICAgfTtcbiAgICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgICBlZGl0b3JEYXRhOiAnJ1xuICAgIH07XG4gICAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgXG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXRwIDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlLCBwcml2YXRlIG5ld3NTZXJ2aWNlIDogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlICwgcHVibGljIGNvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlICwgcHJpdmF0ZSBmb3JtQnVpbGRlciA6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIgLCBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyAgICAgIFxuICAgICAgXG4gIFxuICAgICAgdGhpcy5lZGl0b3Jjb25maWcuZXh0cmFBbGxvd2VkQ29udGVudCA9ICcqW2NsYXNzXSgqKSxzcGFuO3VsO2xpO3RhYmxlO3RkO3N0eWxlOypbaWRdOyooKik7KnsqfSc7ICAgXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXlzX2pzb24gPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXlcIjpcIlN1bmRheVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOjEsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOmZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRheVwiOlwiTW9uZGF5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6MixcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6ZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF5XCI6XCJUdWVzZGF5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6MyxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6ZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF5XCI6XCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjo0LFxuICAgICAgICAgICAgaXNTZWxlY3RlZDpmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXlcIjpcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6NSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6dHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXlcIjpcIkZyaWRheVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOjYsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOmZhbHNlXG4gICAgICAgICAgfSwgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRheVwiOlwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjo3LFxuICAgICAgICAgICAgaXNTZWxlY3RlZDpmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgXG4gICAgXG4gIH1cblxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZih0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uPT0nYWRkJylcbiAgICB0aGlzLnRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCdoOm1tJyk7ICBcbiAgXG4gICBcblxuICAgICAgIC8vQ2FsbGluZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XG5cbiAgICAgICAvL0dldCBzZW5kZXIncyBnZXRHcm91cE5hbWVcbiAgICAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcbiAgICAgIFxuICAgICAgIC8vR2V0dGluZyB0aGUgY29va2llIHZhbHVlXG4gICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcblxuICAgICAgLy8gIGNhbGxpbmcgdGhlIGZvcm0gZ2VuZXJhdGlvbiBcbiAgICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgYSBOZXdzbGV0dGVyXCI7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJOZXdzbGV0dGVyIEFkZGVkIFN1Y2Nlc3NmdWxseSEhIVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICB0aGlzLmRheXNfanNvbiA9IFtdO1xuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjsgIFxuICAgICAgICAgIHRoaXMudGltZT1cIlwiO1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTmV3c2xldHRlciBJbmZvcm1hdGlvbiBVcGRhdGVkISEhXCI7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTsgICAgXG4gICAgICAgICAgaWYodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmRheXNfb2Zfd2Vla3MhPW51bGwpXG4gICAgICAgICAgdGhpcy5mcmVxdWVuY3lfZmxhZyA9IHRydWU7ICAgIFxuIFxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5kYXlzX2pzb24gPSB0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcztcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG5cbiAgICAgICBcbiAgfVxuXG4gIC8qKiBtYXQgc25hY2tiYXIgKiovXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbiAgXG5cbiAvKiogb3BlbmluZyB1cCB0aGUgdGltZSBwaWNrZXIgKiovXG4gIG9wZW4oKVxuICB7XG4gICAgY29uc3QgYW1hemluZ1RpbWVQaWNrZXIgPSB0aGlzLmF0cC5vcGVuKCk7XG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lPT57XG4gICAgfSk7XG4gIH1cbiAgXG5cblxuICAvKmdldHRpbmcgdGhlIGdyb3VwIG5hbWUqL1xuICBnZXRHcm91cE5hbWUoKVxuICB7XG4gICAgdmFyIGRhdGE6YW55ID0geyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cbiAgZ2V0U2VuZGVyQWRkcmVzcygpXG4gIHtcbiAgICB2YXIgZGF0YTphbnk9eyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuc2VuZGVyX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xuICAgfSk7XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgZm9ybVxuICBnZW5lcmF0ZUZvcm0oKXtcbiAgICB0aGlzLm5ld3NGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuZXdzdGl0bGU6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBuZXdzc3ViamVjdDpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNoYXJlX25ld3M6W10sXG4gICAgICBzZW5kZXJhZGRyZXNzOltdLFxuICAgICAgcHVibGlzaGRhdGU6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZXR0aW1lOlt0aGlzLnRpbWVdLFxuICAgICAgY29udGVudDpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNlbmRuZXdzOltdLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTpbXSxcbiAgICAgIGRheXNfb2Zfd2Vla3M6W10sXG4gICAgICB0aW1lb2ZkYXk6W3RoaXMudGltZV0sXG4gICAgICB0aW1lem9uZTpbXSxcbiAgICAgIHN0YXJ0ZGF0ZTpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVuZGRhdGU6WycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICByZXBseTpbXSxcbiAgICAgIHN0YXR1czpbMV1cbiAgICB9KTtcbiAgIFxuICB9XG5cbiAgXG5cbiAgLy9zZXR0aW5nIHRoZSBkZWZhdWx0IHZhbHVlXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLm5ld3NGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmV3c3RpdGxlOmRlZmF1bHRWYWx1ZS5uZXdzdGl0bGUsXG4gICAgICBuZXdzc3ViamVjdDpkZWZhdWx0VmFsdWUubmV3c3N1YmplY3QsXG4gICAgICBzaGFyZV9uZXdzOmRlZmF1bHRWYWx1ZS5zaGFyZV9uZXdzLFxuICAgICAgc2VuZGVyYWRkcmVzczpkZWZhdWx0VmFsdWUuc2VuZGVyYWRkcmVzcyxcbiAgICAgIHB1Ymxpc2hkYXRlOmRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSxcbiAgICAgIHNldHRpbWU6ZGVmYXVsdFZhbHVlLnNldHRpbWUsXG4gICAgICBjb250ZW50OmRlZmF1bHRWYWx1ZS5jb250ZW50LFxuICAgICAgZGF5c19vZl93ZWVrczpkZWZhdWx0VmFsdWUuZGF5c19vZl93ZWVrcyxcbiAgICAgIHNlbmRuZXdzOmRlZmF1bHRWYWx1ZS5zZW5kbmV3cyxcbiAgICAgIG5ld3NmcmVxdWVuY3k6ZGVmYXVsdFZhbHVlLm5ld3NmcmVxdWVuY3ksXG4gICAgICB0aW1lb2ZkYXk6ZGVmYXVsdFZhbHVlLnRpbWVvZmRheSxcbiAgICAgIHRpbWV6b25lOmRlZmF1bHRWYWx1ZS50aW1lem9uZSxcbiAgICAgIHN0YXJ0ZGF0ZTpkZWZhdWx0VmFsdWUuc3RhcnRkYXRlLFxuICAgICAgZW5kZGF0ZTpkZWZhdWx0VmFsdWUuZW5kZGF0ZSxcbiAgICAgIHJlcGx5OmRlZmF1bHRWYWx1ZS5yZXBseVxuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG5cbiAgLyoqIGJsdXIgZnVuY3Rpb24gKiovXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMubmV3c0Zvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cbiAgLyoqIG1hcmtpbmcgdGhlIGNoZWNrYm94IGFzIHRydWUgKiovXG4gIGdldERheXMoZGF5X3Zhcjphbnkpe1xuICAgIGlmKGRheV92YXIuaXNTZWxlY3RlZCA9PT0gdHJ1ZSlcbiAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBlbHNlXG4gICAgZGF5X3Zhci5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBcbiAgLy9zdWJtaXQgZnVuY3Rpb25cbiAgb25TdWJtaXQoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5c19qc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aGlzLmRheXNfanNvbltpXS5pc1NlbGVjdGVkKVxuICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgZWxzZVxuICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgIH1cblxuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuZGF5c19vZl93ZWVrcyA9IHRoaXMuZGF5c19hcnJheTsgICBcblxuXG4gICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICAgZm9yIChsZXQgeCBpbiB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG5cbiAgIFxuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLm5ld3NGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5uZXdzRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcInNoYXJlX25ld3NcIixcInNlbmRlcmFkZHJlc3NcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgIFxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHRoaXMubWVzc2FnZSxcIk9LXCIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=