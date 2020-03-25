/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
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
        // this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
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
    }
    // ==============================================
    /**ckeditor start here*/
    // public Editor = ClassicEditor;  //for ckeditor
    // editorConfig = {
    //   placeholder: 'Content:',
    // };
    // public model = {
    //   editorData: ''
    // };
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
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"share_with_group=i.name\">{{ i.name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array' (click)=\"senders_address_to=i.email\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"automatic_newsletter_to=i.name\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false;days_json={}\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"weekdays();frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag==true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array' (click)=\"reply_address_to=i.email\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button *ngIf=\"this.configData.action=='add'\" [disabled]=\"!newsForm.valid\" type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"preview_all()\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBcUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQU1DOzs7SUFMQyx5QkFBWTs7SUFDWixpQ0FBb0I7O0lBQ3BCLDBDQUE2Qjs7SUFDN0IsbUNBQXNCOztJQUN0QixxQ0FBd0I7O0FBRzFCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQU90QixNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7Ozs7OztJQThDeEMsWUFBb0IsR0FBNkIsRUFBVSxXQUE2QixFQUMvRSxRQUFrQixFQUFTLGFBQTRCLEVB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UTtZQUNSLGFBQWE7WUFDc0IsV0FBVztZQUM5QyxNQUFNO1lBQ04sV0FBVztZQUNYLFNBQVM7OztxQkF3RGYsS0FBSzs7OztJQW5DTixvREFBc0M7O0lBQ3RDLG1EQUFnQzs7SUFDaEMseURBQWtDOztJQUNsQywwREFBbUM7O0lBQ25DLG1EQUF1Qjs7SUFDdkIsNkNBQWlCOztJQUNqQixvREFBd0I7O0lBQ3hCLGlEQUEyQjs7SUFDM0IsdURBQXVDOztJQUN2QyxtREFBNEI7O0lBRTVCLGtEQUFlOztJQUNmLGdEQUF1Qjs7SUFDdkIsaURBQXFCOztJQUNyQixvREFBMkI7O0lBQzNCLGtEQUFzQjs7SUFDdEIseURBQTZCOztJQUM3QixnRUFBb0M7O0lBQ3BDLHlEQUE0Qjs7SUFDNUIsMkRBQStCOzs7OztJQXVCbkIsNENBQXFDOzs7OztJQUFFLG9EQUFxQzs7SUFDdEYsaURBQXlCOztJQUFFLHNEQUFtQzs7Ozs7SUFBRSxvREFBZ0M7O0lBQ2hHLCtDQUFxQjs7Ozs7SUFBRSxpREFBNkI7O0lBQUUsK0NBQXdCOzs7QUE0VmxGLE1BQU0sT0FBTyxPQUFPOzs7OztJQUdsQixZQUNTLFNBQWdDLEVBQ1AsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFDUCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG01REFBb0M7O2FBRXJDOzs7O1lBNVptQixZQUFZOzRDQWthM0IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsNEJBQXVDOztJQUN2Qyx1QkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xuICBzaGFyZV9ncm91cDogc3RyaW5nO1xuICBhdXRvbWF0aWNfbmV3c2xldHRlcjogc3RyaW5nO1xuICByZXBseV9hZGRyZXNzOiBzdHJpbmc7XG4gIHNlbmRlcnNfYWRkcmVzczogc3RyaW5nO1xufVxuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtbmV3c2xldHRlcmxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vID09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT1cbiAgcHVibGljIGhlYWRlcl9uYW1lOiBhbnkgPSBcIk5ld3NsZXR0ZXJcIlxuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gXCJTQVZFXCI7XG4gIHB1YmxpYyBncm91cF9uYW1lX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIHNlbmRlcl9uYW1lX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIHRpbWU6IGFueTtcbiAgcHVibGljIGNvb2tpZVZhbHVlOiBhbnk7XG4gIHB1YmxpYyBuZXdzRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgZnJlcXVlbmN5X2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRheXNfYXJyYXk6IGFueSA9IFtdO1xuICAvLyBwdWJsaWMgZWRpdG9yY29uZmlnOiBhbnkgPSB7fTtcbiAgZGF5c19qc29uOiBhbnk7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyB0bXBfZGF0ZTogYW55O1xuICBwdWJsaWMgZmFsc2VfY291bnQ6IG51bWJlcjtcbiAgcHVibGljIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgc2hhcmVfd2l0aF9ncm91cDogYW55O1xuICBwdWJsaWMgYXV0b21hdGljX25ld3NsZXR0ZXJfdG86IGFueTtcbiAgcHVibGljIHJlcGx5X2FkZHJlc3NfdG86IGFueVxuICBwdWJsaWMgc2VuZGVyc19hZGRyZXNzX3RvOiBhbnk7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG4gIC8vIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgLy8gZWRpdG9yQ29uZmlnID0ge1xuICAvLyAgIHBsYWNlaG9sZGVyOiAnQ29udGVudDonLFxuICAvLyB9O1xuICAvLyBwdWJsaWMgbW9kZWwgPSB7XG4gIC8vICAgZWRpdG9yRGF0YTogJydcbiAgLy8gfTtcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF0cDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlLCBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUsIHB1YmxpYyBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcblxuXG5cblxuICAgIC8vIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuXG4gIH1cblxuICAvLyB1bml4X3RpbWVzdGFtcCh0KSB7XG4gIC8vICAgdmFyIGQgPSBuZXcgRGF0ZSh0ICogMTAwMCksXHQvLyBDb252ZXJ0IHRoZSBwYXNzZWQgdGltZXN0YW1wIHRvIG1pbGxpc2Vjb25kc1xuICAvLyAgICAgeXl5eSA9IGQuZ2V0RnVsbFllYXIoKSxcbiAgLy8gICAgIG1tID0gKCcwJyArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFx0Ly8gTW9udGhzIGFyZSB6ZXJvIGJhc2VkLiBBZGQgbGVhZGluZyAwLlxuICAvLyAgICAgZGQgPSAoJzAnICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcdFx0XHQvLyBBZGQgbGVhZGluZyAwLlx0XG4gIC8vICAgICB0aW1lO1xuXG4gIC8vICAgLy8gaWU6IDIwMTMtMDItMTgsIDg6MzUgQU1cdFxuICAvLyAgIHRpbWUgPSBtbSArIFwiL1wiICsgZGQgKyBcIi9cIiArIHl5eXk7XG5cbiAgLy8gICByZXR1cm4gdGltZTtcbiAgLy8gfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy53ZWVrZGF5cygpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gPT0gJ2FkZCcpXG4gICAgICB0aGlzLnRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCAnSDptbScpO1xuXG5cblxuICAgIC8vQ2FsbGluZyB0aGUgZ3JvdXAgbmFtZVxuICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XG5cbiAgICAvL0dldCBzZW5kZXIncyBnZXRHcm91cE5hbWVcbiAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcblxuICAgIC8vR2V0dGluZyB0aGUgY29va2llIHZhbHVlXG4gICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcblxuICAgIC8vICBjYWxsaW5nIHRoZSBmb3JtIGdlbmVyYXRpb24gXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuY29va2llbWFpbCA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2dldF9lbWFpbCcpO1xuXG4gICAgLypTd2l0Y2ggY2FzZSovXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgYSBOZXdzbGV0dGVyXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTmV3c2xldHRlciBBZGRlZCBTdWNjZXNzZnVsbHkhISFcIjtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmRheXNfanNvbiA9IG51bGw7XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMudGltZSA9IFwiXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTmV3c2xldHRlciBJbmZvcm1hdGlvbiBVcGRhdGVkISEhXCI7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEubmV3c2ZyZXF1ZW5jeSA9PSBcImRhaWx5XCIpXG4gICAgICAgICAgdGhpcy5mcmVxdWVuY3lfZmxhZyA9IGZhbHNlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5mcmVxdWVuY3lfZmxhZyA9IHRydWU7XG5cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcyAhPSBudWxsKVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSB0cnVlO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXlzX2pzb24gPSB0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcztcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cblxuICB9XG5cblxuXG4gIHdlZWtkYXlzKCkge1xuXG4gICAgdGhpcy5kYXlzX2pzb24gPSBbXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogMSxcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogMixcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDMsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIldlZG5lc2RheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDQsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogNSxcbiAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA2LFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDcsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG5cblxuXG4gIC8qKiBtYXQgc25hY2tiYXIgKiovXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKiBvcGVuaW5nIHVwIHRoZSB0aW1lIHBpY2tlciAqKi9cbiAgb3BlbigpIHtcbiAgICBjb25zdCBhbWF6aW5nVGltZVBpY2tlciA9IHRoaXMuYXRwLm9wZW4oKTtcbiAgICBhbWF6aW5nVGltZVBpY2tlci5hZnRlckNsb3NlKCkuc3Vic2NyaWJlKHRpbWUgPT4ge1xuICAgIH0pO1xuICB9XG5cblxuICAvKiogb3BlbiBNb2RhbCAqKi9cbiAgb3BlbkRpYWxvZyh4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUFJFVklFVywge1xuICAgICAgd2lkdGg6ICcxMDAwcHgnLFxuICAgICAgZGF0YToge1xuICAgICAgICBtc2c6IHgsXG4gICAgICAgIHNoYXJlX2dyb3VwOiB0aGlzLnNoYXJlX3dpdGhfZ3JvdXAsXG4gICAgICAgIGF1dG9tYXRpY19uZXdzbGV0dGVyOiB0aGlzLmF1dG9tYXRpY19uZXdzbGV0dGVyX3RvLFxuICAgICAgICBzZW5kZXJzX2FkZHJlc3M6IHRoaXMuc2VuZGVyc19hZGRyZXNzX3RvLFxuICAgICAgICByZXBseV9hZGRyZXNzOiB0aGlzLnJlcGx5X2FkZHJlc3NfdG9cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKiBwcmV2aWV3IGFsbCAqKi9cbiAgcHJldmlld19hbGwoKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKE9iamVjdC52YWx1ZXModGhpcy5uZXdzRm9ybS52YWx1ZSkpO1xuICB9XG5cblxuICAvKmdldHRpbmcgdGhlIGdyb3VwIG5hbWUqL1xuICBnZXRHcm91cE5hbWUoKSB7XG4gICAgdmFyIGRhdGE6IGFueSA9IHsgJ3NvdXJjZSc6IHRoaXMuY29uZmlnRGF0YS5ncm91cF90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5ncm91cF9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qZ2V0dGluZyB0aGUgc2VuZGVyJ3MgZW1haWwqL1xuICBnZXRTZW5kZXJBZGRyZXNzKCkge1xuICAgIHZhciBkYXRhOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlIH07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnNlbmRlcl9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG5cbiAgLy9nZW5lcmF0ZSBmb3JtXG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLm5ld3NGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuZXdzdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIG5ld3NzdWJqZWN0OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzaGFyZV9uZXdzOiBbXSxcbiAgICAgIHB1Ymxpc2hkYXRlX25vcm1hbF9mb3JtYXQ6IFtdLFxuICAgICAgc2VuZGVyYWRkcmVzczogW10sXG4gICAgICBwdWJsaXNoZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2V0dGltZTogW3RoaXMudGltZV0sXG4gICAgICBjb250ZW50OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZW5kbmV3czogW10sXG4gICAgICBuZXdzZnJlcXVlbmN5OiBbXSxcbiAgICAgIGRheXNfb2Zfd2Vla3M6IFtdLFxuICAgICAgdGltZW9mZGF5OiBbdGhpcy50aW1lXSxcbiAgICAgIHRpbWV6b25lOiBbXSxcbiAgICAgIHN0YXJ0ZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW5kZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmVwbHk6IFtdLFxuICAgICAgc3RhdHVzOiBbMV1cbiAgICB9KTtcblxuICB9XG5cblxuXG4gIC8vc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy50bXBfZGF0ZSA9IGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudG1wX2RhdGUpO1xuICAgIGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSA9IGRhdGUsXG5cbiAgICAgIHRoaXMudG1wX2RhdGUgPSBkZWZhdWx0VmFsdWUuc3RhcnRkYXRlO1xuICAgIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUuc3RhcnRkYXRlID0gZGF0ZSxcblxuICAgICAgdGhpcy50bXBfZGF0ZSA9IGRlZmF1bHRWYWx1ZS5lbmRkYXRlO1xuICAgIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUuZW5kZGF0ZSA9IGRhdGUsXG5cbiAgICB0aGlzLm5ld3NGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmV3c3RpdGxlOiBkZWZhdWx0VmFsdWUubmV3c3RpdGxlLFxuICAgICAgbmV3c3N1YmplY3Q6IGRlZmF1bHRWYWx1ZS5uZXdzc3ViamVjdCxcbiAgICAgIHNoYXJlX25ld3M6IGRlZmF1bHRWYWx1ZS5zaGFyZV9uZXdzLFxuICAgICAgc2VuZGVyYWRkcmVzczogZGVmYXVsdFZhbHVlLnNlbmRlcmFkZHJlc3MsXG4gICAgICBwdWJsaXNoZGF0ZTogZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlLFxuICAgICAgc2V0dGltZTogZGVmYXVsdFZhbHVlLnNldHRpbWUsXG4gICAgICBjb250ZW50OiBkZWZhdWx0VmFsdWUuY29udGVudCxcbiAgICAgIGRheXNfb2Zfd2Vla3M6IGRlZmF1bHRWYWx1ZS5kYXlzX29mX3dlZWtzLFxuICAgICAgc2VuZG5ld3M6IGRlZmF1bHRWYWx1ZS5zZW5kbmV3cyxcbiAgICAgIG5ld3NmcmVxdWVuY3k6IGRlZmF1bHRWYWx1ZS5uZXdzZnJlcXVlbmN5LFxuICAgICAgdGltZW9mZGF5OiBkZWZhdWx0VmFsdWUudGltZW9mZGF5LFxuICAgICAgdGltZXpvbmU6IGRlZmF1bHRWYWx1ZS50aW1lem9uZSxcbiAgICAgIHN0YXJ0ZGF0ZTogZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZSxcbiAgICAgIGVuZGRhdGU6IGRlZmF1bHRWYWx1ZS5lbmRkYXRlLFxuICAgICAgcmVwbHk6IGRlZmF1bHRWYWx1ZS5yZXBseVxuICAgIH0pO1xuICAgIC8vIHRoaXMuc2hhcmVfd2l0aF9ncm91cCA9IGRlZmF1bHRWYWx1ZS5zaGFyZV9uZXdzOyAgIFxuXG4gIH1cblxuXG4gIC8qKiBibHVyIGZ1bmN0aW9uICoqL1xuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG4gIC8qKiBtYXJraW5nIHRoZSBjaGVja2JveCBhcyB0cnVlICoqL1xuICBnZXREYXlzKGRheV92YXI6IGFueSkge1xuICAgIGlmIChkYXlfdmFyLmlzU2VsZWN0ZWQgPT09IHRydWUpXG4gICAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBlbHNlXG4gICAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy9zdWJtaXQgZnVuY3Rpb25cbiAgb25TdWJtaXQoKSB7XG5cbiAgICB0aGlzLmRheXNfYXJyYXkgPSBbXTtcbiAgICB0aGlzLmZhbHNlX2NvdW50ID0gMDtcbiAgICBpZiAodGhpcy5mcmVxdWVuY3lfZmxhZyAhPSBmYWxzZSlcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXlzX2pzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZGF5c19qc29uW2ldLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLmRheXNfYXJyYXkucHVzaCh0aGlzLmRheXNfanNvbltpXSk7XG4gICAgICAgICAgdGhpcy5mYWxzZV9jb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLmRheXNfYXJyYXkucHVzaCh0aGlzLmRheXNfanNvbltpXSk7XG4gICAgICAgIHRoaXMuZmFsc2VfY291bnQrKztcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLmZhbHNlX2NvdW50ID09IDcpXG4gICAgICByZXR1cm47XG5cbiAgXG4gICAgaWYgKHRoaXMuZnJlcXVlbmN5X2ZsYWcgPT0gdHJ1ZSlcbiAgICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuZGF5c19vZl93ZWVrcyA9IHRoaXMuZGF5c19hcnJheTtcbiAgICBlbHNlXG4gICAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmRheXNfb2Zfd2Vla3MgPSBudWxsO1xuXG5cblxuXG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZSA9IG1vbWVudCh0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLnN0YXJ0ZGF0ZSA9IG1vbWVudCh0aGlzLm5ld3NGb3JtLnZhbHVlLnN0YXJ0ZGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5lbmRkYXRlID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUuZW5kZGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XG5cbiAgICBsZXQgeDogYW55ID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUpLnVuaXgoKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlX25vcm1hbF9mb3JtYXQgPSBwYXJzZUludCh4KSoxMDAwO1xuXG5cblxuICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICBmb3IgKGxldCB4IGluIHRoaXMubmV3c0Zvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubmV3c0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuXG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMubmV3c0Zvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLm5ld3NGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wic2hhcmVfbmV3c1wiLCBcInNlbmRlcmFkZHJlc3NcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcblxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHRoaXMubWVzc2FnZSwgXCJPS1wiKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIENPTVBPTkVOVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICdwcmV2aWV3X2FsbF9kYXRhLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUFJFVklFVyB7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UFJFVklFVz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19