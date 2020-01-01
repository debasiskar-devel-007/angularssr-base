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
import * as moment_ from 'moment';
// import { Moment } from 'moment';
/** @type {?} */
const moment = moment_;
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
        // console.log(this.configData.action);
        // if(this.configData.action=='add')
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
        this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
     * @param {?} t
     * @return {?}
     */
    unix_timestamp(t) {
        /** @type {?} */
        var d = new Date(t * 1000);
        /** @type {?} */
        var // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear();
        /** @type {?} */
        var mm = ('0' + (d.getMonth() + 1)).slice(-2);
        /** @type {?} */
        var // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2);
        /** @type {?} */
        var // Add leading 0.	
        time;
        // ie: 2013-02-18, 8:35 AM	
        time = mm + "/" + dd + "/" + yyyy;
        return time;
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
                this.days_json = null;
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.message = "Newsletter Information Updated!!!";
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.setDefaultValue(this.configData.defaultData);
                }), 1000);
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
            publishdate_normal_format: [],
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
        this.tmp_date = (this.unix_timestamp(defaultValue.publishdate));
        /** @type {?} */
        let date = new Date(this.tmp_date);
        defaultValue.publishdate = date,
            this.tmp_date = (this.unix_timestamp(defaultValue.startdate));
        date = new Date(this.tmp_date);
        defaultValue.startdate = date,
            this.tmp_date = (this.unix_timestamp(defaultValue.enddate));
        date = new Date(this.tmp_date);
        defaultValue.enddate = date,
            console.log(typeof date);
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
        this.days_array = [];
        this.false_count = 0;
        for (var i = 0; i < this.days_json.length; i++) {
            if (this.days_json[i].isSelected) {
                this.days_array.push(this.days_json[i]);
                this.false_count--;
            }
            else
                this.days_array.push(this.days_json[i]);
            this.false_count++;
        }
        console.log("false_count", this.false_count);
        if (this.false_count == 7)
            return;
        this.newsForm.value.days_of_weeks = this.days_array;
        this.newsForm.value.publishdate = moment(this.newsForm.value.publishdate).unix();
        this.newsForm.value.startdate = moment(this.newsForm.value.startdate).unix();
        this.newsForm.value.enddate = moment(this.newsForm.value.enddate).unix();
        this.newsForm.value.publishdate_normal_format = moment(parseInt(this.newsForm.value.publishdate) * 1000).format('x');
        console.log(this.newsForm.value);
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
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" [config]=\"editorconfig\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag===true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}"]
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.tmp_date;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.false_count;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7O01BRTVCLE1BQU0sR0FBRyxPQUFPO0FBT3RCLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7Ozs7SUF5Q3hDLFlBQW9CLEdBQTZCLEVBQVUsV0FBNkIsRUFDL0UsUUFBa0IsRUFBUyxhQUE0QixFQUFVLFdBQXdCLEVBQ3pGLE1BQWMsRUFBVSxRQUFxQjtRQUZsQyxRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUMvRSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsa0JB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SUFDbkMsbURBQXVCOztJQUN2Qiw2Q0FBaUI7O0lBQ2pCLG9EQUF3Qjs7SUFDeEIsaURBQTJCOztJQUMzQix1REFBdUM7O0lBQ3ZDLG1EQUE0Qjs7SUFDNUIscURBQThCOztJQUM5QixrREFBZTs7SUFDZixnREFBdUI7O0lBQ3ZCLGlEQUFxQjs7SUFDckIsb0RBQTBCOzs7OztJQU0xQiwrQ0FBOEI7O0lBQzlCLHFEQUVFOztJQUNGLDhDQUVFOzs7OztJQVdVLDRDQUFxQzs7Ozs7SUFBRSxvREFBcUM7O0lBQ3RGLGlEQUF5Qjs7SUFBRSxzREFBbUM7Ozs7O0lBQUUsb0RBQWdDOztJQUNoRywrQ0FBcUI7Ozs7O0lBQUUsaURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuLy8gaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgaGVhZGVyX25hbWU6IGFueSA9IFwiTmV3c2xldHRlclwiXG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSBcIlNBVkVcIjtcbiAgcHVibGljIGdyb3VwX25hbWVfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VuZGVyX25hbWVfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBwdWJsaWMgdGltZTogYW55O1xuICBwdWJsaWMgY29va2llVmFsdWU6IGFueTtcbiAgcHVibGljIG5ld3NGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmcmVxdWVuY3lfZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGF5c19hcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBlZGl0b3Jjb25maWc6IGFueSA9IHt9O1xuICBkYXlzX2pzb246IGFueTtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIHRtcF9kYXRlOiBhbnk7XG4gIHB1YmxpYyBmYWxzZV9jb3VudDpudW1iZXI7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG4gIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgZWRpdG9yQ29uZmlnID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnQ29udGVudDonLFxuICB9O1xuICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgZWRpdG9yRGF0YTogJydcbiAgfTtcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF0cDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlLCBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUsIHB1YmxpYyBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG4gICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pO1xuICAgICAgLy8gaWYodGhpcy5jb25maWdEYXRhLmFjdGlvbj09J2FkZCcpXG4gICAgICB0aGlzLmRheXNfanNvbiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgXCJ2YWx1ZVwiOiAxLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRheVwiOiBcIk1vbmRheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogMixcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgXCJ2YWx1ZVwiOiAzLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRheVwiOiBcIldlZG5lc2RheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogNCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogNSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImRheVwiOiBcIkZyaWRheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogNixcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogNyxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgdGhpcy5lZGl0b3Jjb25maWcuZXh0cmFBbGxvd2VkQ29udGVudCA9ICcqW2NsYXNzXSgqKSxzcGFuO3VsO2xpO3RhYmxlO3RkO3N0eWxlOypbaWRdOyooKik7KnsqfSc7XG5cbiAgfVxuXG4gIHVuaXhfdGltZXN0YW1wKHQpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKHQqMTAwMCksXHQvLyBDb252ZXJ0IHRoZSBwYXNzZWQgdGltZXN0YW1wIHRvIG1pbGxpc2Vjb25kc1xuICAgICAgeXl5eSA9IGQuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1tID0gKCcwJyArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFx0Ly8gTW9udGhzIGFyZSB6ZXJvIGJhc2VkLiBBZGQgbGVhZGluZyAwLlxuICAgICAgZGQgPSAoJzAnICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcdFx0XHQvLyBBZGQgbGVhZGluZyAwLlx0XG4gICAgICB0aW1lO1xuXG4gICAgLy8gaWU6IDIwMTMtMDItMTgsIDg6MzUgQU1cdFxuICAgIHRpbWUgPSBtbSArIFwiL1wiICsgZGQgKyBcIi9cIiArIHl5eXk7XG5cbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gPT0gJ2FkZCcpXG4gICAgICB0aGlzLnRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCAnaDptbScpO1xuXG5cblxuICAgIC8vQ2FsbGluZyB0aGUgZ3JvdXAgbmFtZVxuICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XG5cbiAgICAvL0dldCBzZW5kZXIncyBnZXRHcm91cE5hbWVcbiAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcblxuICAgIC8vR2V0dGluZyB0aGUgY29va2llIHZhbHVlXG4gICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcblxuICAgIC8vICBjYWxsaW5nIHRoZSBmb3JtIGdlbmVyYXRpb24gXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuY29va2llbWFpbCA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2dldF9lbWFpbCcpO1xuXG4gICAgLypTd2l0Y2ggY2FzZSovXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgYSBOZXdzbGV0dGVyXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTmV3c2xldHRlciBBZGRlZCBTdWNjZXNzZnVsbHkhISFcIjtcbiAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMuZGF5c19qc29uID0gbnVsbDtcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy50aW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJOZXdzbGV0dGVyIEluZm9ybWF0aW9uIFVwZGF0ZWQhISFcIjtcbiAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YS5kYXlzX29mX3dlZWtzICE9IG51bGwpXG4gICAgICAgICAgdGhpcy5mcmVxdWVuY3lfZmxhZyA9IHRydWU7XG5cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRheXNfanNvbiA9IHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YS5kYXlzX29mX3dlZWtzO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cblxuXG4gIH1cblxuXG5cblxuICAvKiogbWF0IHNuYWNrYmFyICoqL1xuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cblxuICAvKiogb3BlbmluZyB1cCB0aGUgdGltZSBwaWNrZXIgKiovXG4gIG9wZW4oKSB7XG4gICAgY29uc3QgYW1hemluZ1RpbWVQaWNrZXIgPSB0aGlzLmF0cC5vcGVuKCk7XG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lID0+IHtcbiAgICB9KTtcbiAgfVxuXG5cblxuICAvKmdldHRpbmcgdGhlIGdyb3VwIG5hbWUqL1xuICBnZXRHcm91cE5hbWUoKSB7XG4gICAgdmFyIGRhdGE6IGFueSA9IHsgJ3NvdXJjZSc6IHRoaXMuY29uZmlnRGF0YS5ncm91cF90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5ncm91cF9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qZ2V0dGluZyB0aGUgc2VuZGVyJ3MgZW1haWwqL1xuICBnZXRTZW5kZXJBZGRyZXNzKCkge1xuICAgIHZhciBkYXRhOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlIH07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnNlbmRlcl9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG5cbiAgLy9nZW5lcmF0ZSBmb3JtXG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLm5ld3NGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuZXdzdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIG5ld3NzdWJqZWN0OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzaGFyZV9uZXdzOiBbXSxcbiAgICAgIHB1Ymxpc2hkYXRlX25vcm1hbF9mb3JtYXQ6W10sXG4gICAgICBzZW5kZXJhZGRyZXNzOiBbXSxcbiAgICAgIHB1Ymxpc2hkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZXR0aW1lOiBbdGhpcy50aW1lXSxcbiAgICAgIGNvbnRlbnQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNlbmRuZXdzOiBbXSxcbiAgICAgIG5ld3NmcmVxdWVuY3k6IFtdLFxuICAgICAgZGF5c19vZl93ZWVrczogW10sXG4gICAgICB0aW1lb2ZkYXk6IFt0aGlzLnRpbWVdLFxuICAgICAgdGltZXpvbmU6IFtdLFxuICAgICAgc3RhcnRkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbmRkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICByZXBseTogW10sXG4gICAgICBzdGF0dXM6IFsxXVxuICAgIH0pO1xuXG4gIH1cblxuXG5cbiAgLy9zZXR0aW5nIHRoZSBkZWZhdWx0IHZhbHVlXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLnRtcF9kYXRlID0gKHRoaXMudW5peF90aW1lc3RhbXAoZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlKSk7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUucHVibGlzaGRhdGUgPSBkYXRlLFxuXG4gICAgdGhpcy50bXBfZGF0ZSA9ICh0aGlzLnVuaXhfdGltZXN0YW1wKGRlZmF1bHRWYWx1ZS5zdGFydGRhdGUpKTtcbiAgICBkYXRlID0gbmV3IERhdGUodGhpcy50bXBfZGF0ZSk7XG4gICAgZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZSA9IGRhdGUsXG5cbiAgICB0aGlzLnRtcF9kYXRlID0gKHRoaXMudW5peF90aW1lc3RhbXAoZGVmYXVsdFZhbHVlLmVuZGRhdGUpKTtcbiAgICBkYXRlID0gbmV3IERhdGUodGhpcy50bXBfZGF0ZSk7XG4gICAgZGVmYXVsdFZhbHVlLmVuZGRhdGUgPSBkYXRlLFxuXG4gICAgY29uc29sZS5sb2codHlwZW9mIGRhdGUpO1xuICAgIHRoaXMubmV3c0Zvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuZXdzdGl0bGU6IGRlZmF1bHRWYWx1ZS5uZXdzdGl0bGUsXG4gICAgICBuZXdzc3ViamVjdDogZGVmYXVsdFZhbHVlLm5ld3NzdWJqZWN0LFxuICAgICAgc2hhcmVfbmV3czogZGVmYXVsdFZhbHVlLnNoYXJlX25ld3MsXG4gICAgICBzZW5kZXJhZGRyZXNzOiBkZWZhdWx0VmFsdWUuc2VuZGVyYWRkcmVzcyxcbiAgICAgIHB1Ymxpc2hkYXRlOiBkZWZhdWx0VmFsdWUucHVibGlzaGRhdGUsXG4gICAgICBzZXR0aW1lOiBkZWZhdWx0VmFsdWUuc2V0dGltZSxcbiAgICAgIGNvbnRlbnQ6IGRlZmF1bHRWYWx1ZS5jb250ZW50LFxuICAgICAgZGF5c19vZl93ZWVrczogZGVmYXVsdFZhbHVlLmRheXNfb2Zfd2Vla3MsXG4gICAgICBzZW5kbmV3czogZGVmYXVsdFZhbHVlLnNlbmRuZXdzLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTogZGVmYXVsdFZhbHVlLm5ld3NmcmVxdWVuY3ksXG4gICAgICB0aW1lb2ZkYXk6IGRlZmF1bHRWYWx1ZS50aW1lb2ZkYXksXG4gICAgICB0aW1lem9uZTogZGVmYXVsdFZhbHVlLnRpbWV6b25lLFxuICAgICAgc3RhcnRkYXRlOiBkZWZhdWx0VmFsdWUuc3RhcnRkYXRlLFxuICAgICAgZW5kZGF0ZTogZGVmYXVsdFZhbHVlLmVuZGRhdGUsXG4gICAgICByZXBseTogZGVmYXVsdFZhbHVlLnJlcGx5XG4gICAgfSk7XG5cbiAgfVxuXG5cbiAgLyoqIGJsdXIgZnVuY3Rpb24gKiovXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMubmV3c0Zvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG5cbiAgLyoqIG1hcmtpbmcgdGhlIGNoZWNrYm94IGFzIHRydWUgKiovXG4gIGdldERheXMoZGF5X3ZhcjogYW55KSB7XG4gICAgaWYgKGRheV92YXIuaXNTZWxlY3RlZCA9PT0gdHJ1ZSlcbiAgICAgIGRheV92YXIuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGVsc2VcbiAgICAgIGRheV92YXIuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICAvL3N1Ym1pdCBmdW5jdGlvblxuICBvblN1Ym1pdCgpIHtcblxuICAgIHRoaXMuZGF5c19hcnJheSA9IFtdO1xuICAgIHRoaXMuZmFsc2VfY291bnQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXlzX2pzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmRheXNfanNvbltpXS5pc1NlbGVjdGVkKVxuICAgICAge1xuICAgICAgICB0aGlzLmRheXNfYXJyYXkucHVzaCh0aGlzLmRheXNfanNvbltpXSk7XG4gICAgICAgIHRoaXMuZmFsc2VfY291bnQtLTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICB0aGlzLmZhbHNlX2NvdW50Kys7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiZmFsc2VfY291bnRcIix0aGlzLmZhbHNlX2NvdW50KTtcbiAgICBpZih0aGlzLmZhbHNlX2NvdW50ID09IDcpXG4gICByZXR1cm47XG5cbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmRheXNfb2Zfd2Vla3MgPSB0aGlzLmRheXNfYXJyYXk7XG5cblxuXG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZSA9IG1vbWVudCh0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlKS51bml4KCk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5zdGFydGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5zdGFydGRhdGUpLnVuaXgoKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmVuZGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5lbmRkYXRlKS51bml4KCk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0ID0gbW9tZW50KHBhcnNlSW50KHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUpKjEwMDApLmZvcm1hdCgneCcpO1xuXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm5ld3NGb3JtLnZhbHVlKTtcblxuXG4gICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgIGZvciAobGV0IHggaW4gdGhpcy5uZXdzRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5uZXdzRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG5cblxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5uZXdzRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMubmV3c0Zvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJzaGFyZV9uZXdzXCIsIFwic2VuZGVyYWRkcmVzc1wiXVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIodGhpcy5tZXNzYWdlLCBcIk9LXCIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=