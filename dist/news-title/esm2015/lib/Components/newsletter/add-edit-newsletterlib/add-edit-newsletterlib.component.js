/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
    /** @type {?} */
    DialogData.prototype.share_group;
    /** @type {?} */
    DialogData.prototype.automatic_newsletter;
    /** @type {?} */
    DialogData.prototype.reply_address;
    /** @type {?} */
    DialogData.prototype.senders_address;
}
import * as moment_ from 'moment';
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
     * @param {?} dialog
     */
    constructor(atp, newsService, datepipe, cookieService, formBuilder, router, snackBar, dialog) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
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
    }
    /**
     * ckeditor end here
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    // unix_timestamp(t) {
    //   var d = new Date(t * 1000),	// Convert the passed timestamp to milliseconds
    //     yyyy = d.getFullYear(),
    //     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
    //     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.	
    //     time;
    //   // ie: 2013-02-18, 8:35 AM	
    //   time = mm + "/" + dd + "/" + yyyy;
    //   return time;
    // }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.weekdays();
        if (this.configData.action == 'add')
            this.time = this.datepipe.transform(new Date(), 'H:mm');
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
                if (this.configData.defaultData.newsfrequency == "daily")
                    this.frequency_flag = false;
                else
                    this.frequency_flag = true;
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
     * @return {?}
     */
    weekdays() {
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
    /**
     * open Modal *
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(PREVIEW, {
            width: '1000px',
            data: {
                msg: x,
                share_group: this.share_with_group,
                automatic_newsletter: this.automatic_newsletter_to,
                senders_address: this.senders_address_to,
                reply_address: this.reply_address_to
            }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    /**
     * preview all *
     * @return {?}
     */
    preview_all() {
        this.openDialog(Object.values(this.newsForm.value));
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
        this.tmp_date = defaultValue.publishdate;
        /** @type {?} */
        let date = new Date(this.tmp_date);
        defaultValue.publishdate = date,
            this.tmp_date = defaultValue.startdate;
        date = new Date(this.tmp_date);
        defaultValue.startdate = date,
            this.tmp_date = defaultValue.enddate;
        date = new Date(this.tmp_date);
        defaultValue.enddate = date,
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
        // this.share_with_group = defaultValue.share_news;   
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
        if (this.frequency_flag != false)
            for (var i = 0; i < this.days_json.length; i++) {
                if (this.days_json[i].isSelected) {
                    this.days_array.push(this.days_json[i]);
                    this.false_count--;
                }
                else
                    this.days_array.push(this.days_json[i]);
                this.false_count++;
            }
        if (this.false_count == 7)
            return;
        if (this.frequency_flag == true)
            this.newsForm.value.days_of_weeks = this.days_array;
        else
            this.newsForm.value.days_of_weeks = null;
        this.newsForm.value.publishdate = moment(this.newsForm.value.publishdate).format('MM/DD/YYYY');
        this.newsForm.value.startdate = moment(this.newsForm.value.startdate).format('MM/DD/YYYY');
        this.newsForm.value.enddate = moment(this.newsForm.value.enddate).format('MM/DD/YYYY');
        /** @type {?} */
        let x = moment(this.newsForm.value.publishdate).unix();
        this.newsForm.value.publishdate_normal_format = parseInt(x) * 1000;
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
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"share_with_group=i.name\">{{ i.name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array' (click)=\"senders_address_to=i.email\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" [config]=\"editorconfig\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"automatic_newsletter_to=i.name\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false;days_json={}\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"weekdays();frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag==true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array' (click)=\"reply_address_to=i.email\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button *ngIf=\"this.configData.action=='add'\" [disabled]=\"!newsForm.valid\" type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"preview_all()\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}"]
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
    { type: MatSnackBar },
    { type: MatDialog }
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.dialogRef;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.share_with_group;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.automatic_newsletter_to;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.reply_address_to;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.senders_address_to;
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
export class PREVIEW {
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
PREVIEW.decorators = [
    { type: Component, args: [{
                selector: 'app-preview',
                template: "<h1 mat-dialog-title>PREVIEW DETAILS</h1>\n<div mat-dialog-content>\n\n   <table >\n     \n      <tr>\n         <td>Newsletter Title</td>\n         <td>:</td>\n         <td>{{ data.msg[0] }}</td>\n     \n         <td> Newsletter Subject </td>\n         <td>:</td>\n         <td>{{ data.msg[1] }}</td>\n      </tr>\n\n      <tr>\n         <td> Share Newsletter With Group </td>\n         <td>:</td>\n         <td> {{ data.share_group }}</td>\n    \n         <td> Sender's Address </td>\n         <td>:</td>\n         <td>{{ data.senders_address }}</td>\n      </tr>\n\n      <tr>\n         <td> Publish Date </td>\n         <td>:</td>\n         <td>{{ data.msg[5] | date:'shortDate' }}</td>\n     \n         <td> Set Time </td>\n         <td>:</td>\n         <td>{{ data.msg[6] }}</td>\n      </tr>\n\n      <tr>\n         <td> Content </td>\n         <td>:</td>\n         <td>{{ data.msg[7] }}</td>\n  \n            <td> Automatically Send Newsletter To Members</td>\n            <td>:</td>\n            <td>{{ data.automatic_newsletter }}</td>\n         </tr>\n\n         <tr>\n            <td> Newsletter Frequency</td>\n            <td>:</td>\n            <td>{{ data.msg[9] }}</td>\n      \n            <td> News Letter Time Of The Day </td>\n            <td>:</td>\n            <td>{{ data.msg[11] }}</td>\n         </tr>\n\n         <tr>\n            <td> News Letter Time Zone </td>\n            <td>:</td>\n            <td>{{ data.msg[12] }}</td>\n        \n            <td> Newsletter Start Date </td>\n            <td>:</td>\n            <td>{{ data.msg[13]  | date:'shortDate'}}</td>\n         </tr>\n\n         <tr>\n            <td> Newsletter End Date </td>\n            <td>:</td>\n            <td>{{ data.msg[14]  | date:'shortDate'}}</td>\n       \n            <td> Reply address </td>\n            <td>:</td>\n            <td>{{  data.reply_address }}</td>\n         </tr>\n\n    \n    \n   </table>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}"]
            }] }
];
/** @nocollapse */
PREVIEW.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    PREVIEW.prototype.dialogRef;
    /** @type {?} */
    PREVIEW.prototype.data;
}
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxNQUFNLEVBQW1CLE1BQU0saUJBQWlCLENBQUM7QUFPMUQsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7Ozs7O0lBOEJ4QyxZQUFxQixHQUE4QixFQUFVLFdBQThCLEVBQ2xGLFFBQWtCLEVBQVUsYUFBNkIsRUFBVyxXQUF5QixFQUM3RixNQUFlO1FBRkgsUUFBRyxHQUFILEdBQUcsQ0FBMkI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDbEYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFXLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQzdGLFdBQU0sR0FBTixNQUFNLENBQVM7O1FBNUJ4QixnQkFBVyxHQUFLLFlBQVksQ0FBQTtRQUM1QixlQUFVLEdBQUssTUFBTSxDQUFD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QUNKO0lBQ0gsQ0FBQzs7O1lBdkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxzOU1BQXNEOzthQUV2RDs7OztZQVpRLHdCQUF3QjtZQUV4QixnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLGFBQWE7WUFDc0IsV0FBVztZQUM5QyxNQUFNOzs7cUJBZ0NWLEtBQUs7Ozs7SUFyQlIsb0RBQTRCOztJQUM1QixtREFBc0I7O0lBQ3RCLHlEQUEwQjs7SUFDMUIsMERBQTJCOztJQUMzQixtREFBZTs7SUFDZiw2Q0FBVTs7SUFDVixvREFBZ0I7O0lBQ2hCLGlEQUFxQjs7Ozs7SUFJbkIsK0NBQThCOztJQUM5QixxREFFRTs7SUFDRiw4Q0FFRTs7Ozs7SUFTUyw0Q0FBc0M7Ozs7O0lBQUUsb0RBQXNDOztJQUN6RixpREFBeUI7O0lBQUcsc0RBQW9DOzs7OztJQUFHLG9EQUFpQzs7SUFDcEcsK0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICdhbWF6aW5nLXRpbWUtcGlja2VyJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXIgLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBoZWFkZXJfbmFtZTphbnk9XCJOZXdzbGV0dGVyXCJcbiAgYnV0dG9uVGV4dDphbnk9XCJTQVZFXCI7XG4gIGdyb3VwX25hbWVfYXJyYXk6YW55ID0gW107XG4gIHNlbmRlcl9uYW1lX2FycmF5OmFueSA9IFtdO1xuICBjb25maWdEYXRhOmFueTtcbiAgdGltZTphbnkgO1xuICBjb29raWVWYWx1ZTphbnk7XG4gIG5ld3NGb3JtIDogRm9ybUdyb3VwO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gICAgZWRpdG9yQ29uZmlnID0ge1xuICAgICAgcGxhY2Vob2xkZXI6ICdDb250ZW50OicsXG4gICAgfTtcbiAgICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgICBlZGl0b3JEYXRhOiAnJ1xuICAgIH07XG4gICAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXRwIDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlLCBwcml2YXRlIG5ld3NTZXJ2aWNlIDogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlICwgcHVibGljIGNvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlICwgcHJpdmF0ZSBmb3JtQnVpbGRlciA6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHsgXG5cbiAgICAgXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYodGhpcy5jb25maWdEYXRhLmFjdGlvbj09J2FkZCcpXG4gICAgdGhpcy50aW1lID0gdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwnaDptbSBhJyk7ICBcblxuICAgICAgIC8vQ2FsbGluZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XG5cbiAgICAgICAvL0dldCBzZW5kZXIncyBnZXRHcm91cE5hbWVcbiAgICAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcbiAgICAgIFxuICAgICAgIC8vR2V0dGluZyB0aGUgY29va2llIHZhbHVlXG4gICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcblxuICAgICAgLy8gIGNhbGxpbmcgdGhlIGZvcm0gZ2VuZXJhdGlvbiBcbiAgICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgYSBOZXdzbGV0dGVyXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjsgIFxuICAgICAgICAgIHRoaXMudGltZT1cIlwiO1xuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7ICAgICAgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgXG4gIH1cblxuICBvcGVuKClcbiAge1xuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZT0+e1xuICAgIH0pO1xuICB9XG5cblxuICAvKmdldHRpbmcgdGhlIGdyb3VwIG5hbWUqL1xuICBnZXRHcm91cE5hbWUoKVxuICB7XG4gICAgdmFyIGRhdGE6YW55ID0geyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cbiAgZ2V0U2VuZGVyQWRkcmVzcygpXG4gIHtcbiAgICB2YXIgZGF0YTphbnk9eyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuc2VuZGVyX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xuICAgfSk7XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgZm9ybVxuICBnZW5lcmF0ZUZvcm0oKXtcbiAgICB0aGlzLm5ld3NGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuZXdzdGl0bGU6W10sXG4gICAgICBuZXdzc3ViamVjdDpbXSxcbiAgICAgIHNoYXJlX25ld3M6W10sXG4gICAgICBzZW5kZXJhZGRyZXNzOltdLFxuICAgICAgcHVibGlzaGRhdGU6W10sXG4gICAgICBzZXR0aW1lOlt0aGlzLnRpbWVdLFxuICAgICAgY29udGVudDpbXSxcbiAgICAgIHNlbmRuZXdzOltdLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTpbXSxcbiAgICAgIHRpbWVvZmRheTpbdGhpcy50aW1lXSxcbiAgICAgIHRpbWV6b25lOltdLFxuICAgICAgc3RhcnRkYXRlOltdLFxuICAgICAgZW5kZGF0ZTpbXSxcbiAgICAgIHJlcGx5OltdLFxuICAgICAgc3RhdHVzOlsxXVxuICAgIH0pO1xuICB9XG5cblxuXG4gIC8vc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5uZXdzRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5ld3N0aXRsZTpkZWZhdWx0VmFsdWUubmV3c3RpdGxlLFxuICAgICAgbmV3c3N1YmplY3Q6ZGVmYXVsdFZhbHVlLm5ld3NzdWJqZWN0LFxuICAgICAgc2hhcmVfbmV3czpkZWZhdWx0VmFsdWUuc2hhcmVfbmV3cyxcbiAgICAgIHNlbmRlcmFkZHJlc3M6ZGVmYXVsdFZhbHVlLnNlbmRlcmFkZHJlc3MsXG4gICAgICBwdWJsaXNoZGF0ZTpkZWZhdWx0VmFsdWUucHVibGlzaGRhdGUsXG4gICAgICBzZXR0aW1lOmRlZmF1bHRWYWx1ZS5zZXR0aW1lLFxuICAgICAgY29udGVudDpkZWZhdWx0VmFsdWUuY29udGVudCxcbiAgICAgIHNlbmRuZXdzOmRlZmF1bHRWYWx1ZS5zZW5kbmV3cyxcbiAgICAgIG5ld3NmcmVxdWVuY3k6ZGVmYXVsdFZhbHVlLm5ld3NmcmVxdWVuY3ksXG4gICAgICB0aW1lb2ZkYXk6ZGVmYXVsdFZhbHVlLnRpbWVvZmRheSxcbiAgICAgIHRpbWV6b25lOmRlZmF1bHRWYWx1ZS50aW1lem9uZSxcbiAgICAgIHN0YXJ0ZGF0ZTpkZWZhdWx0VmFsdWUuc3RhcnRkYXRlLFxuICAgICAgZW5kZGF0ZTpkZWZhdWx0VmFsdWUuZW5kZGF0ZSxcbiAgICAgIHJlcGx5OmRlZmF1bHRWYWx1ZS5yZXBseVxuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vc3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0KCkge1xuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLm5ld3NGb3JtLmludmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBGb3JtXCIpO3JldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5uZXdzRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcInNoYXJlX25ld3NcIixcInNlbmRlcmFkZHJlc3NcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFDcEYsZ0NBTUM7OztJQUxDLHlCQUFZOztJQUNaLGlDQUFvQjs7SUFDcEIsMENBQTZCOztJQUM3QixtQ0FBc0I7O0lBQ3RCLHFDQUF3Qjs7QUFHMUIsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BQzVCLE1BQU0sR0FBRyxPQUFPO0FBT3RCLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7Ozs7O0lBOEN4QyxZQUFvQixHQUE2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LENBQUM7SUFDekIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixtNURBQW9DOzthQUVyQzs7OztZQTVabUIsWUFBWTs0Q0FrYTNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDRCQUF1Qzs7SUFDdkMsdUJBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbiAgc2hhcmVfZ3JvdXA6IHN0cmluZztcbiAgYXV0b21hdGljX25ld3NsZXR0ZXI6IHN0cmluZztcbiAgcmVwbHlfYWRkcmVzczogc3RyaW5nO1xuICBzZW5kZXJzX2FkZHJlc3M6IHN0cmluZztcbn1cblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LW5ld3NsZXR0ZXJsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBoZWFkZXJfbmFtZTogYW55ID0gXCJOZXdzbGV0dGVyXCJcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9IFwiU0FWRVwiO1xuICBwdWJsaWMgZ3JvdXBfbmFtZV9hcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBzZW5kZXJfbmFtZV9hcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBjb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyB0aW1lOiBhbnk7XG4gIHB1YmxpYyBjb29raWVWYWx1ZTogYW55O1xuICBwdWJsaWMgbmV3c0Zvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZyZXF1ZW5jeV9mbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkYXlzX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGVkaXRvcmNvbmZpZzogYW55ID0ge307XG4gIGRheXNfanNvbjogYW55O1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgdG1wX2RhdGU6IGFueTtcbiAgcHVibGljIGZhbHNlX2NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBkaWFsb2dSZWY6IGFueTtcbiAgcHVibGljIHNoYXJlX3dpdGhfZ3JvdXA6IGFueTtcbiAgcHVibGljIGF1dG9tYXRpY19uZXdzbGV0dGVyX3RvOiBhbnk7XG4gIHB1YmxpYyByZXBseV9hZGRyZXNzX3RvOiBhbnlcbiAgcHVibGljIHNlbmRlcnNfYWRkcmVzc190bzogYW55O1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdHA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSwgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG5cblxuXG5cbiAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JztcblxuICB9XG5cbiAgLy8gdW5peF90aW1lc3RhbXAodCkge1xuICAvLyAgIHZhciBkID0gbmV3IERhdGUodCAqIDEwMDApLFx0Ly8gQ29udmVydCB0aGUgcGFzc2VkIHRpbWVzdGFtcCB0byBtaWxsaXNlY29uZHNcbiAgLy8gICAgIHl5eXkgPSBkLmdldEZ1bGxZZWFyKCksXG4gIC8vICAgICBtbSA9ICgnMCcgKyAoZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSxcdC8vIE1vbnRocyBhcmUgemVybyBiYXNlZC4gQWRkIGxlYWRpbmcgMC5cbiAgLy8gICAgIGRkID0gKCcwJyArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXHRcdFx0Ly8gQWRkIGxlYWRpbmcgMC5cdFxuICAvLyAgICAgdGltZTtcblxuICAvLyAgIC8vIGllOiAyMDEzLTAyLTE4LCA4OjM1IEFNXHRcbiAgLy8gICB0aW1lID0gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xuXG4gIC8vICAgcmV0dXJuIHRpbWU7XG4gIC8vIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMud2Vla2RheXMoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uID09ICdhZGQnKVxuICAgICAgdGhpcy50aW1lID0gdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwgJ0g6bW0nKTtcblxuXG5cbiAgICAvL0NhbGxpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICB0aGlzLmdldEdyb3VwTmFtZSgpO1xuXG4gICAgLy9HZXQgc2VuZGVyJ3MgZ2V0R3JvdXBOYW1lXG4gICAgdGhpcy5nZXRTZW5kZXJBZGRyZXNzKCk7XG5cbiAgICAvL0dldHRpbmcgdGhlIGNvb2tpZSB2YWx1ZVxuICAgIHRoaXMuY29va2llVmFsdWUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG5cbiAgICAvLyAgY2FsbGluZyB0aGUgZm9ybSBnZW5lcmF0aW9uIFxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIGEgTmV3c2xldHRlclwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5kYXlzX2pzb24gPSBudWxsO1xuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnRpbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgSW5mb3JtYXRpb24gVXBkYXRlZCEhIVwiO1xuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLm5ld3NmcmVxdWVuY3kgPT0gXCJkYWlseVwiKVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSBmYWxzZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSB0cnVlO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmRheXNfb2Zfd2Vla3MgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLmZyZXF1ZW5jeV9mbGFnID0gdHJ1ZTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF5c19qc29uID0gdGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmRheXNfb2Zfd2Vla3M7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG5cbiAgfVxuXG5cblxuICB3ZWVrZGF5cygpIHtcblxuICAgIHRoaXMuZGF5c19qc29uID0gW1xuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIlN1bmRheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDEsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIk1vbmRheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDIsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAzLFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA0LFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDUsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiRnJpZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogNixcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA3LFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuXG5cblxuICAvKiogbWF0IHNuYWNrYmFyICoqL1xuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cblxuICAvKiogb3BlbmluZyB1cCB0aGUgdGltZSBwaWNrZXIgKiovXG4gIG9wZW4oKSB7XG4gICAgY29uc3QgYW1hemluZ1RpbWVQaWNrZXIgPSB0aGlzLmF0cC5vcGVuKCk7XG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lID0+IHtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqIG9wZW4gTW9kYWwgKiovXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFBSRVZJRVcsIHtcbiAgICAgIHdpZHRoOiAnMTAwMHB4JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbXNnOiB4LFxuICAgICAgICBzaGFyZV9ncm91cDogdGhpcy5zaGFyZV93aXRoX2dyb3VwLFxuICAgICAgICBhdXRvbWF0aWNfbmV3c2xldHRlcjogdGhpcy5hdXRvbWF0aWNfbmV3c2xldHRlcl90byxcbiAgICAgICAgc2VuZGVyc19hZGRyZXNzOiB0aGlzLnNlbmRlcnNfYWRkcmVzc190byxcbiAgICAgICAgcmVwbHlfYWRkcmVzczogdGhpcy5yZXBseV9hZGRyZXNzX3RvXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuICB9XG5cblxuICAvKiogcHJldmlldyBhbGwgKiovXG4gIHByZXZpZXdfYWxsKCkge1xuICAgIHRoaXMub3BlbkRpYWxvZyhPYmplY3QudmFsdWVzKHRoaXMubmV3c0Zvcm0udmFsdWUpKTtcbiAgfVxuXG5cbiAgLypnZXR0aW5nIHRoZSBncm91cCBuYW1lKi9cbiAgZ2V0R3JvdXBOYW1lKCkge1xuICAgIHZhciBkYXRhOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cbiAgZ2V0U2VuZGVyQWRkcmVzcygpIHtcbiAgICB2YXIgZGF0YTogYW55ID0geyAnc291cmNlJzogdGhpcy5jb25maWdEYXRhLnNlbmRlcl90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgZm9ybVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5uZXdzRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmV3c3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBuZXdzc3ViamVjdDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2hhcmVfbmV3czogW10sXG4gICAgICBwdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0OiBbXSxcbiAgICAgIHNlbmRlcmFkZHJlc3M6IFtdLFxuICAgICAgcHVibGlzaGRhdGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNldHRpbWU6IFt0aGlzLnRpbWVdLFxuICAgICAgY29udGVudDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2VuZG5ld3M6IFtdLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTogW10sXG4gICAgICBkYXlzX29mX3dlZWtzOiBbXSxcbiAgICAgIHRpbWVvZmRheTogW3RoaXMudGltZV0sXG4gICAgICB0aW1lem9uZTogW10sXG4gICAgICBzdGFydGRhdGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGVuZGRhdGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJlcGx5OiBbXSxcbiAgICAgIHN0YXR1czogWzFdXG4gICAgfSk7XG5cbiAgfVxuXG5cblxuICAvL3NldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWVcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMudG1wX2RhdGUgPSBkZWZhdWx0VmFsdWUucHVibGlzaGRhdGU7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUucHVibGlzaGRhdGUgPSBkYXRlLFxuXG4gICAgICB0aGlzLnRtcF9kYXRlID0gZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZTtcbiAgICBkYXRlID0gbmV3IERhdGUodGhpcy50bXBfZGF0ZSk7XG4gICAgZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZSA9IGRhdGUsXG5cbiAgICAgIHRoaXMudG1wX2RhdGUgPSBkZWZhdWx0VmFsdWUuZW5kZGF0ZTtcbiAgICBkYXRlID0gbmV3IERhdGUodGhpcy50bXBfZGF0ZSk7XG4gICAgZGVmYXVsdFZhbHVlLmVuZGRhdGUgPSBkYXRlLFxuXG4gICAgdGhpcy5uZXdzRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5ld3N0aXRsZTogZGVmYXVsdFZhbHVlLm5ld3N0aXRsZSxcbiAgICAgIG5ld3NzdWJqZWN0OiBkZWZhdWx0VmFsdWUubmV3c3N1YmplY3QsXG4gICAgICBzaGFyZV9uZXdzOiBkZWZhdWx0VmFsdWUuc2hhcmVfbmV3cyxcbiAgICAgIHNlbmRlcmFkZHJlc3M6IGRlZmF1bHRWYWx1ZS5zZW5kZXJhZGRyZXNzLFxuICAgICAgcHVibGlzaGRhdGU6IGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSxcbiAgICAgIHNldHRpbWU6IGRlZmF1bHRWYWx1ZS5zZXR0aW1lLFxuICAgICAgY29udGVudDogZGVmYXVsdFZhbHVlLmNvbnRlbnQsXG4gICAgICBkYXlzX29mX3dlZWtzOiBkZWZhdWx0VmFsdWUuZGF5c19vZl93ZWVrcyxcbiAgICAgIHNlbmRuZXdzOiBkZWZhdWx0VmFsdWUuc2VuZG5ld3MsXG4gICAgICBuZXdzZnJlcXVlbmN5OiBkZWZhdWx0VmFsdWUubmV3c2ZyZXF1ZW5jeSxcbiAgICAgIHRpbWVvZmRheTogZGVmYXVsdFZhbHVlLnRpbWVvZmRheSxcbiAgICAgIHRpbWV6b25lOiBkZWZhdWx0VmFsdWUudGltZXpvbmUsXG4gICAgICBzdGFydGRhdGU6IGRlZmF1bHRWYWx1ZS5zdGFydGRhdGUsXG4gICAgICBlbmRkYXRlOiBkZWZhdWx0VmFsdWUuZW5kZGF0ZSxcbiAgICAgIHJlcGx5OiBkZWZhdWx0VmFsdWUucmVwbHlcbiAgICB9KTtcbiAgICAvLyB0aGlzLnNoYXJlX3dpdGhfZ3JvdXAgPSBkZWZhdWx0VmFsdWUuc2hhcmVfbmV3czsgICBcblxuICB9XG5cblxuICAvKiogYmx1ciBmdW5jdGlvbiAqKi9cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5uZXdzRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuICAvKiogbWFya2luZyB0aGUgY2hlY2tib3ggYXMgdHJ1ZSAqKi9cbiAgZ2V0RGF5cyhkYXlfdmFyOiBhbnkpIHtcbiAgICBpZiAoZGF5X3Zhci5pc1NlbGVjdGVkID09PSB0cnVlKVxuICAgICAgZGF5X3Zhci5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgZWxzZVxuICAgICAgZGF5X3Zhci5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vc3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0KCkge1xuXG4gICAgdGhpcy5kYXlzX2FycmF5ID0gW107XG4gICAgdGhpcy5mYWxzZV9jb3VudCA9IDA7XG4gICAgaWYgKHRoaXMuZnJlcXVlbmN5X2ZsYWcgIT0gZmFsc2UpXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5c19qc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmRheXNfanNvbltpXS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICAgIHRoaXMuZmFsc2VfY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICB0aGlzLmZhbHNlX2NvdW50Kys7XG4gICAgICB9XG5cbiAgICBpZiAodGhpcy5mYWxzZV9jb3VudCA9PSA3KVxuICAgICAgcmV0dXJuO1xuXG4gIFxuICAgIGlmICh0aGlzLmZyZXF1ZW5jeV9mbGFnID09IHRydWUpXG4gICAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmRheXNfb2Zfd2Vla3MgPSB0aGlzLmRheXNfYXJyYXk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5kYXlzX29mX3dlZWtzID0gbnVsbDtcblxuXG5cblxuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5zdGFydGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5zdGFydGRhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpO1xuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuZW5kZGF0ZSA9IG1vbWVudCh0aGlzLm5ld3NGb3JtLnZhbHVlLmVuZGRhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpO1xuXG4gICAgbGV0IHg6IGFueSA9IG1vbWVudCh0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlKS51bml4KCk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0ID0gcGFyc2VJbnQoeCkqMTAwMDtcblxuXG5cbiAgICAvKiogbWFya2luZyBhcyB1bnRvdWNoZWQgKiovXG4gICAgZm9yIChsZXQgeCBpbiB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG5cblxuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLm5ld3NGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5uZXdzRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcInNoYXJlX25ld3NcIiwgXCJzZW5kZXJhZGRyZXNzXCJdXG4gICAgICB9O1xuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG5cbiAgICAgICAgICB0aGlzLm9wZW5TbmFja0Jhcih0aGlzLm1lc3NhZ2UsIFwiT0tcIik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAncHJldmlld19hbGxfZGF0YS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBSRVZJRVcge1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFBSRVZJRVc+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==
>>>>>>> c74a787bd43bf119ad8555ef048a20cef56c35ca
