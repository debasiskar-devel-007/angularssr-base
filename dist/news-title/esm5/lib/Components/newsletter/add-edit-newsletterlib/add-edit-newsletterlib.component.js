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
    DialogData.prototype.test_mail;
    /** @type {?} */
    DialogData.prototype.title;
    /** @type {?} */
    DialogData.prototype.subject;
    /** @type {?} */
    DialogData.prototype.content;
    /** @type {?} */
    DialogData.prototype.testMail;
    /** @type {?} */
    DialogData.prototype.flag;
}
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router, snackBar, dialog) {
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
    Object.defineProperty(AddEditNewsletterlibComponent.prototype, "config", {
        // ==============================================
        /**ckeditor start here*/
        // public Editor = ClassicEditor;  //for ckeditor
        // editorConfig = {
        //   placeholder: 'Content:',
        // };
        // public model = {
        //   editorData: ''
        // };
        /**ckeditor end here*/
        set: 
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
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
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
    AddEditNewsletterlibComponent.prototype.ngOnInit = 
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
    function () {
        var _this = this;
        this.weekdays();
        this.getReplyAddress();
        if (this.configData.action == 'add') {
            this.time = this.datepipe.transform(new Date(), 'H:mm');
        }
        if (this.configData.action == 'edit') {
            this.getReplyAddress();
        }
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
                // this.reply_address=this.reply_data[0].email;
                if (this.configData.defaultData.newsfrequency == "daily")
                    this.frequency_flag = false;
                else
                    this.frequency_flag = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.setDefaultValue(_this.configData.defaultData);
                }), 1000);
                if (this.configData.defaultData.days_of_weeks != null)
                    this.frequency_flag = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.days_json = _this.configData.defaultData.days_of_weeks;
                }), 1000);
                break;
        }
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.weekdays = /**
     * @return {?}
     */
    function () {
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
    };
    /** mat snackbar **/
    /**
     * mat snackbar *
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.openSnackBar = /**
     * mat snackbar *
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    /** opening up the time picker **/
    /**
     * opening up the time picker *
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * opening up the time picker *
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
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /** open Modal **/
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /**
     * open Modal *
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.openDialog = 
    // getTestMail(){
    //   var data1: any = { 'source': this.configData.test_mail_table };
    //   this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe(response => {
    //     let result: any;
    //     result = response;
    //     this.test_mail = result.res;
    //      console.log('+++',this.test_mail)
    //     this.openDialog(this.newsForm.value,this.test_mail)
    //   })
    // }
    /**
     * open Modal *
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        // console.log(y)
        var _this = this;
        this.dialogRef = this.dialog.open(PREVIEW, {
            panelClass: 'newspreview-dialog',
            data: {
                msg: x,
                test_mail: y,
            }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log(result)
            // console.log(result)
            /** @type {?} */
            var mailData = {
                "title": result.title,
                "subject": result.subject,
                "description": result.content,
                "testMail": result.testMail
            };
            if (result.flag == "yes") {
                /** @type {?} */
                var data1 = {
                    source: _this.configData.source_for_test_mail_add,
                    data: mailData
                };
                _this.newsService.addData(_this.configData.endpoint, data1).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (response.status == "success") {
                        _this.openSnackBar('Email Send Successfully.', 'OK');
                        // this.dialogRef.close();
                    }
                    else {
                        _this.openSnackBar('Error Occure....!', '');
                    }
                }));
            }
        }));
    };
    /** preview all **/
    /**
     * preview all *
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.preview_all = /**
     * preview all *
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.newsForm.value.content == '' || this.newsForm.value.newssubject == '') {
            alert("Subject and Description field is requird for test email....!");
        }
        else {
            /** @type {?} */
            var data1 = { 'source': this.configData.test_mail_table };
            this.newsService.getData(this.configData.endpoint2 + 'datalist', data1).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result;
                result = response;
                _this.test_mail = result.res;
                _this.openDialog((Object.values(_this.newsForm.value)), (_this.test_mail));
                // console.log('+++', this.test_mail)
            }));
            // this.openDialog(this.newsForm.value,this.test_mail)
            // this.openDialog((Object.values(this.newsForm.value)),(this.test_mail));
            // console.log(this.newsForm.value)
        }
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
    AddEditNewsletterlibComponent.prototype.getReplyAddress = /*getting the sender's email*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.reply_address_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.reply_data = result.res;
            _this.email_address = _this.reply_data[0].email;
            _this.reply_address_id = _this.reply_data[0]._id;
            // console.log(this.email_address.email)
        }));
    };
    // reply address 
    // reply address 
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getSenderAddress = 
    // reply address 
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
            // console.log(this.sender_name_array)
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
            newstitle: ['', [Validators.required]],
            newssubject: ['', [Validators.required]],
            share_news: [],
            publishdate_normal_format: [],
            senderaddress: [],
            publishdate: ['', [Validators.required]],
            settime: [this.time],
            content: ['', [Validators.required]],
            newsfrequency: [],
            days_of_weeks: [],
            timeofday: [this.time],
            timezone: [],
            startdate: ['', [Validators.required]],
            enddate: ['', [Validators.required]],
            reply_email: [this.reply_address_id],
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
        this.tmp_date = defaultValue.publishdate;
        /** @type {?} */
        var date = new Date(this.tmp_date);
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
                newsfrequency: defaultValue.newsfrequency,
                timeofday: defaultValue.timeofday,
                timezone: defaultValue.timezone,
                startdate: defaultValue.startdate,
                enddate: defaultValue.enddate,
                reply_email: defaultValue.reply_email
            });
        // this.share_with_group = defaultValue.share_news;   
    };
    /** blur function **/
    /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.inputBlur = /**
     * blur function *
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.newsForm.controls[val].markAsUntouched();
    };
    /** marking the checkbox as true **/
    /**
     * marking the checkbox as true *
     * @param {?} day_var
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getDays = /**
     * marking the checkbox as true *
     * @param {?} day_var
     * @return {?}
     */
    function (day_var) {
        if (day_var.isSelected === true)
            day_var.isSelected = false;
        else
            day_var.isSelected = true;
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
        this.newsForm.value.reply_email = this.reply_data[0]._id;
        /** @type {?} */
        var x = moment(this.newsForm.value.publishdate).unix();
        this.newsForm.value.publishdate_normal_format = parseInt(x) * 1000;
        /** marking as untouched **/
        for (var x_1 in this.newsForm.controls) {
            this.newsForm.controls[x_1].markAsTouched();
        }
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["senderaddress", "reply_email"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openSnackBar(_this.message, "OK");
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\" multiple>\n            <mat-option  *ngFor=\"let i of group_name_array\" [value]=\"i._id\">{{ i.name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option  *ngFor='let i of sender_name_array' [value]=\"i._id\">{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n         <!-- Time Picker  -->\n         <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n          <!-- News Letter Time Zone -->\n          <mat-form-field>\n            <mat-label>News Letter Time Zone</mat-label>\n            <mat-select matNativeControl required formControlName=\"timezone\">\n              <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n              <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n              <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n              <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n              <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n              <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n            </mat-select>\n          </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Description is required.</mat-error><br>\n\n\n      <button   type=\"button\" class=\"submitbtn submitbtnpreview\" mat-raised-button color=\"primary\"\n       (click)=\"preview_all()\" >Preview For Test Email</button>\n        <!-- <h1> SET FREQUENCY </h1> -->\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <!-- <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\" (click)=\"automatic_newsletter_to=i.name\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field> -->\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false;days_json={}\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"weekdays();frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag==true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- NewsLetter reply to email address  -->\n        <div class=\"setting_formblock text-field-new-div\">\n          <span class=\"\">Reply Email Address:</span>\n          <span class=\"setting_formblock text-field-new\">{{email_address}}</span>\n        </div>\n\n        <!-- {{email_address.email}} -->\n     \n        <!-- <span>Reply Email Address:</span>\n        <mat-form-field>\n           <input matInput [value]=\"email_address\"  readonly>\n        </mat-form-field>  -->\n\n        \n\n\n        <!-- Buttons  -->\n         <!-- <button *ngIf=\"this.configData.action=='add'\" [disabled]=\"!newsForm.valid\" type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\" openDialog()\">PREVIEW</button> -->\n        <button type=\"submit\" class=\"submitbtn\"  mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\"\n        mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}.setting_formblock .text-field-new{background:#dde2e5;padding:5px;border:4px solid #646d73;width:350px;height:32px}.setting_formblock .text-field-new-div{display:inline-block;margin:0 20px;position:relative;text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder },
        { type: Router },
        { type: MatSnackBar },
        { type: MatDialog }
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
    AddEditNewsletterlibComponent.prototype.test_mail;
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
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.reply_data;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.email_address;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.reply_address_id;
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
var PREVIEW = /** @class */ (function () {
    function PREVIEW(dialogRef, data, newsService, cookieService) {
        // console.log('>>', data)
        this.dialogRef = dialogRef;
        this.data = data;
        this.newsService = newsService;
        this.cookieService = cookieService;
    }
    Object.defineProperty(PREVIEW.prototype, "config", {
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
    /**
     * @return {?}
     */
    PREVIEW.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    PREVIEW.prototype.selectOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val)
    };
    /**
     * @param {?} title
     * @param {?} subject
     * @param {?} content
     * @param {?} testMail
     * @param {?} flag
     * @return {?}
     */
    PREVIEW.prototype.testMailSubmit = /**
     * @param {?} title
     * @param {?} subject
     * @param {?} content
     * @param {?} testMail
     * @param {?} flag
     * @return {?}
     */
    function (title, subject, content, testMail, flag) {
        // console.log(title, subject, content, testMail);
        this.data.title = title;
        this.data.subject = subject;
        this.data.content = content;
        this.data.testMail = this.testMail;
        this.data.flag = flag;
        this.dialogRef.close(this.data);
        // let endpoint:any='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata'
        // let mailData: any = {
        //   source: 'newsTestMailData',
        //   data: {
        //     "title":title,
        //     "subject":subject,
        //     "content":content,
        //     "testMail":this.testMail
        //   },
        //   "sourceobj": ["testMail"],
        //   "token":this.cookieService.get('jwtToken')
        // };
        // this.newsService.addData(endpoint, mailData).subscribe((response: any) => {
        //   if (response.status == "success") {
        //     // this.openSnackBar(this.message, "OK");
        //     this.dialogRef.close();
        //   }
        // });
    };
    PREVIEW.decorators = [
        { type: Component, args: [{
                    selector: 'app-preview',
                    template: "<h1 mat-dialog-title>Newsletter Preview</h1>\n<div mat-dialog-content>\n\n   <!-- <div>\n      <span>Newsletter Title :</span>\n      <span><b>{{ data.msg[0] }}</b></span>\n   </div> <br> -->\n\n   <div>\n      <!-- <span>Newsletter Subject :</span> -->\n      <span><b>{{ data.msg[1] }}</b></span>\n   </div><br>\n\n\n   <div>\n      <!-- <span>Newsletter Description :</span> -->\n      <span><b [innerHTML]='data.msg[7]'></b></span>\n   </div>\n\n   <div>\n      <mat-form-field>\n         <mat-label>Select E-mail Address:</mat-label>\n         <mat-select matNativeControl required  multiple (change)=\"selectOption($event.target.value)\"\n         [(ngModel)]=\"testMail\" >\n           <!-- <mat-option value=0>Select a group</mat-option> -->\n           <mat-option *ngFor=\"let i of data.test_mail\" [value]=\"i._id\">{{ i.email }}</mat-option>\n           </mat-select>\n       </mat-form-field>\n   </div>\n\n\n\n<span class=\"newsbtnclass\">\n   <button class=\"submitbtn\" mat-raised-button\n   color=\"primary\" (click)=\"testMailSubmit(data.msg[0],data.msg[1],data.msg[7],testMail,'yes')\" cdkFocusInitial>Send</button>\n <button class=\"submitbtn\" mat-dialog-close=\"no\" cdkFocusInitial mat-raised-button color=\"primary\">Cancel</button>\n</span>\n\n</div>\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}table{border-collapse:collapse;width:100%;border:1px solid #ddd}td,th{text-align:left;padding:8px;border:1px solid #ddd;color:#0b0a41}tr:nth-child(even){background-color:#f2f2f2}th{background-color:#4caf50;color:#fff}.setting_formblock .text-field-new{background:#dde2e5;padding:5px;border:4px solid #646d73;width:350px;height:32px}.setting_formblock .text-field-new-div{display:inline-block;margin:0 20px;position:relative;text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    PREVIEW.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: NewsTitleService },
        { type: CookieService }
    ]; };
    PREVIEW.propDecorators = {
        config: [{ type: Input }]
    };
    return PREVIEW;
}());
export { PREVIEW };
if (false) {
    /** @type {?} */
    PREVIEW.prototype.configData;
    /** @type {?} */
    PREVIEW.prototype.testMail;
    /** @type {?} */
    PREVIEW.prototype.title;
    /** @type {?} */
    PREVIEW.prototype.subject;
    /** @type {?} */
    PREVIEW.prototype.content;
    /** @type {?} */
    PREVIEW.prototype.flag;
    /** @type {?} */
    PREVIEW.prototype.dialogRef;
    /** @type {?} */
    PREVIEW.prototype.data;
    /** @type {?} */
    PREVIEW.prototype.newsService;
    /** @type {?} */
    PREVIEW.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBcUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR3BGLGdDQVdDOzs7SUFWQyx5QkFBWTs7SUFDWiwrQkFBZTs7SUFDZiwyQkFBVzs7SUFDWCw2QkFBYTs7SUFDYiw2QkFBYTs7SUFDYiw4QkFBYzs7SUFDZCwwQkFBVTs7QUFNWixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEI7SUF1REUsdUNBQW9CLEdBQTZCLEVBQVUsV0FBNkIsRUFDL0UsUUFBa0IsRUFBUyxhQUE0QixFQUFVLFdBQXdCLEVB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LE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLDJHQUEyRztRQUUzRyx3QkFBd0I7UUFDeEIsZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsT0FBTztRQUNQLCtCQUErQjtRQUMvQiwrQ0FBK0M7UUFDL0MsS0FBSztRQUNMLDhFQUE4RTtRQUM5RSx3Q0FBd0M7UUFFeEMsZ0RBQWdEO1FBQ2hELDhCQUE4QjtRQUU5QixNQUFNO1FBRU4sTUFBTTtJQUdSLENBQUM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHl3Q0FBb0M7O2lCQUVyQzs7OztnQkE1Zm1CLFlBQVk7Z0RBZ2hCM0IsTUFBTSxTQUFDLGVBQWU7Z0JBdGhCbEIsZ0JBQWdCO2dCQUVoQixhQUFhOzs7eUJBc2dCbkIsS0FBSzs7SUErRFIsY0FBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLE9BQU87OztJQUVsQiw2QkFBdUI7O0lBU3ZCLDJCQUFxQjs7SUFDckIsd0JBQTJCOztJQUMzQiwwQkFBb0I7O0lBQ3BCLDBCQUFvQjs7SUFDcEIsdUJBQWlCOztJQUdmLDRCQUF1Qzs7SUFDdkMsdUJBQWdEOztJQUFFLDhCQUFvQzs7SUFBRSxnQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbiAgdGVzdF9tYWlsOiBhbnk7XG4gIHRpdGxlOiBhbnk7XG4gIHN1YmplY3Q6IGFueTtcbiAgY29udGVudDogYW55O1xuICB0ZXN0TWFpbDogYW55O1xuICBmbGFnOiBhbnk7XG5cblxuXG59XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgaGVhZGVyX25hbWU6IGFueSA9IFwiTmV3c2xldHRlclwiXG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSBcIlNBVkVcIjtcbiAgcHVibGljIGdyb3VwX25hbWVfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VuZGVyX25hbWVfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgdGVzdF9tYWlsOiBhbnk7XG4gIHB1YmxpYyBjb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyB0aW1lOiBhbnk7XG4gIHB1YmxpYyBjb29raWVWYWx1ZTogYW55O1xuICBwdWJsaWMgbmV3c0Zvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZyZXF1ZW5jeV9mbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkYXlzX2FycmF5OiBhbnkgPSBbXTtcbiAgLy8gcHVibGljIGVkaXRvcmNvbmZpZzogYW55ID0ge307XG4gIGRheXNfanNvbjogYW55O1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgdG1wX2RhdGU6IGFueTtcbiAgcHVibGljIGZhbHNlX2NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBkaWFsb2dSZWY6IGFueTtcbiAgcHVibGljIHNoYXJlX3dpdGhfZ3JvdXA6IGFueTtcbiAgcHVibGljIGF1dG9tYXRpY19uZXdzbGV0dGVyX3RvOiBhbnk7XG4gIHB1YmxpYyByZXBseV9hZGRyZXNzX3RvOiBhbnlcbiAgcHVibGljIHNlbmRlcnNfYWRkcmVzc190bzogYW55O1xuICBwdWJsaWMgcmVwbHlfZGF0YTphbnk7XG4gIHB1YmxpYyBlbWFpbF9hZGRyZXNzOmFueTtcbiAgcHVibGljIHJlcGx5X2FkZHJlc3NfaWQ6YW55O1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICAvLyBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIC8vIGVkaXRvckNvbmZpZyA9IHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcbiAgLy8gfTtcbiAgLy8gcHVibGljIG1vZGVsID0ge1xuICAvLyAgIGVkaXRvckRhdGE6ICcnXG4gIC8vIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdHA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSwgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG5cblxuICAgIC8vIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuXG4gIH1cblxuICAvLyB1bml4X3RpbWVzdGFtcCh0KSB7XG4gIC8vICAgdmFyIGQgPSBuZXcgRGF0ZSh0ICogMTAwMCksXHQvLyBDb252ZXJ0IHRoZSBwYXNzZWQgdGltZXN0YW1wIHRvIG1pbGxpc2Vjb25kc1xuICAvLyAgICAgeXl5eSA9IGQuZ2V0RnVsbFllYXIoKSxcbiAgLy8gICAgIG1tID0gKCcwJyArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFx0Ly8gTW9udGhzIGFyZSB6ZXJvIGJhc2VkLiBBZGQgbGVhZGluZyAwLlxuICAvLyAgICAgZGQgPSAoJzAnICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcdFx0XHQvLyBBZGQgbGVhZGluZyAwLlx0XG4gIC8vICAgICB0aW1lO1xuXG4gIC8vICAgLy8gaWU6IDIwMTMtMDItMTgsIDg6MzUgQU1cdFxuICAvLyAgIHRpbWUgPSBtbSArIFwiL1wiICsgZGQgKyBcIi9cIiArIHl5eXk7XG5cbiAgLy8gICByZXR1cm4gdGltZTtcbiAgLy8gfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy53ZWVrZGF5cygpO1xuXG4gICAgdGhpcy5nZXRSZXBseUFkZHJlc3MoKTtcblxuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gPT0gJ2FkZCcpe1xuICAgICAgdGhpcy50aW1lID0gdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwgJ0g6bW0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWdEYXRhLmFjdGlvbiA9PSAnZWRpdCcpe1xuICAgICAgdGhpcy5nZXRSZXBseUFkZHJlc3MoKTtcbiAgICB9XG5cblxuXG5cbiAgICAvL0NhbGxpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICB0aGlzLmdldEdyb3VwTmFtZSgpO1xuXG4gICAgLy9HZXQgc2VuZGVyJ3MgZ2V0R3JvdXBOYW1lXG4gICAgdGhpcy5nZXRTZW5kZXJBZGRyZXNzKCk7XG5cbiAgICAvL0dldHRpbmcgdGhlIGNvb2tpZSB2YWx1ZVxuICAgIHRoaXMuY29va2llVmFsdWUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG5cbiAgICAvLyAgY2FsbGluZyB0aGUgZm9ybSBnZW5lcmF0aW9uIFxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIGEgTmV3c2xldHRlclwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5kYXlzX2pzb24gPSBudWxsO1xuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnRpbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgSW5mb3JtYXRpb24gVXBkYXRlZCEhIVwiO1xuICAgICAgICAvLyB0aGlzLnJlcGx5X2FkZHJlc3M9dGhpcy5yZXBseV9kYXRhWzBdLmVtYWlsO1xuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLm5ld3NmcmVxdWVuY3kgPT0gXCJkYWlseVwiKVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSBmYWxzZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSB0cnVlO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmRheXNfb2Zfd2Vla3MgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLmZyZXF1ZW5jeV9mbGFnID0gdHJ1ZTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF5c19qc29uID0gdGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhLmRheXNfb2Zfd2Vla3M7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gIH1cblxuXG5cbiAgd2Vla2RheXMoKSB7XG5cbiAgICB0aGlzLmRheXNfanNvbiA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJTdW5kYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAxLFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJNb25kYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAyLFxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogMyxcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogNCxcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA1LFxuICAgICAgICBpc1NlbGVjdGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIkZyaWRheVwiLFxuICAgICAgICBcInZhbHVlXCI6IDYsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgIFwidmFsdWVcIjogNyxcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cblxuXG5cbiAgLyoqIG1hdCBzbmFja2JhciAqKi9cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqIG9wZW5pbmcgdXAgdGhlIHRpbWUgcGlja2VyICoqL1xuICBvcGVuKCkge1xuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZSA9PiB7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIGdldFRlc3RNYWlsKCl7XG4gIC8vICAgdmFyIGRhdGExOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEudGVzdF9tYWlsX3RhYmxlIH07XG4gIC8vICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBkYXRhMSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgIGxldCByZXN1bHQ6IGFueTtcbiAgLy8gICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAvLyAgICAgdGhpcy50ZXN0X21haWwgPSByZXN1bHQucmVzO1xuICAvLyAgICAgIGNvbnNvbGUubG9nKCcrKysnLHRoaXMudGVzdF9tYWlsKVxuICAvLyAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMubmV3c0Zvcm0udmFsdWUsdGhpcy50ZXN0X21haWwpXG4gIC8vICAgfSlcbiAgLy8gfVxuXG5cblxuICAvKiogb3BlbiBNb2RhbCAqKi9cbiAgb3BlbkRpYWxvZyh4OiBhbnksIHk6IGFueSk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKHkpXG5cbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUFJFVklFVywge1xuICAgICAgcGFuZWxDbGFzczonbmV3c3ByZXZpZXctZGlhbG9nJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbXNnOiB4LFxuICAgICAgICB0ZXN0X21haWw6IHksXG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxuXG5cbiAgICAgIGxldCBtYWlsRGF0YTogYW55ID0ge1xuICAgICAgICBcInRpdGxlXCI6IHJlc3VsdC50aXRsZSxcbiAgICAgICAgXCJzdWJqZWN0XCI6IHJlc3VsdC5zdWJqZWN0LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHJlc3VsdC5jb250ZW50LFxuICAgICAgICBcInRlc3RNYWlsXCI6IHJlc3VsdC50ZXN0TWFpbFxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmZsYWcgPT0gXCJ5ZXNcIikge1xuXG4gICAgICAgIGxldCBkYXRhMTogYW55ID0ge1xuICAgICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZV9mb3JfdGVzdF9tYWlsX2FkZCxcbiAgICAgICAgICBkYXRhOiBtYWlsRGF0YVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBkYXRhMSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5TbmFja0JhcignRW1haWwgU2VuZCBTdWNjZXNzZnVsbHkuJywnT0snKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCdFcnJvciBPY2N1cmUuLi4uIScsJycpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG5cbiAgLyoqIHByZXZpZXcgYWxsICoqL1xuICBwcmV2aWV3X2FsbCgpIHtcblxuICBpZih0aGlzLm5ld3NGb3JtLnZhbHVlLmNvbnRlbnQgPT0gJycgfHwgdGhpcy5uZXdzRm9ybS52YWx1ZS5uZXdzc3ViamVjdCA9PSAnJyApIHtcbiAgICAgIGFsZXJ0KFwiU3ViamVjdCBhbmQgRGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZCBmb3IgdGVzdCBlbWFpbC4uLi4hXCIpXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIGRhdGExOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEudGVzdF9tYWlsX3RhYmxlIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIGRhdGExKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLnRlc3RfbWFpbCA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZygoT2JqZWN0LnZhbHVlcyh0aGlzLm5ld3NGb3JtLnZhbHVlKSksICh0aGlzLnRlc3RfbWFpbCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnKysrJywgdGhpcy50ZXN0X21haWwpXG4gICAgICB9KVxuICAgICAgLy8gdGhpcy5vcGVuRGlhbG9nKHRoaXMubmV3c0Zvcm0udmFsdWUsdGhpcy50ZXN0X21haWwpXG4gICAgICAvLyB0aGlzLm9wZW5EaWFsb2coKE9iamVjdC52YWx1ZXModGhpcy5uZXdzRm9ybS52YWx1ZSkpLCh0aGlzLnRlc3RfbWFpbCkpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5ld3NGb3JtLnZhbHVlKVxuICAgIH1cblxuXG4gIH1cblxuXG4gIC8qZ2V0dGluZyB0aGUgZ3JvdXAgbmFtZSovXG4gIGdldEdyb3VwTmFtZSgpIHtcbiAgICB2YXIgZGF0YTogYW55ID0geyAnc291cmNlJzogdGhpcy5jb25maWdEYXRhLmdyb3VwX3RhYmxlIH07XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludDIgKyAnZGF0YWxpc3QnLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmdyb3VwX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLypnZXR0aW5nIHRoZSBzZW5kZXIncyBlbWFpbCovXG4gIGdldFJlcGx5QWRkcmVzcygpIHtcbiAgICB2YXIgZGF0YTogYW55ID0geyAnc291cmNlJzogdGhpcy5jb25maWdEYXRhLnJlcGx5X2FkZHJlc3NfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMucmVwbHlfZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICB0aGlzLmVtYWlsX2FkZHJlc3M9dGhpcy5yZXBseV9kYXRhWzBdLmVtYWlsO1xuICAgICAgdGhpcy5yZXBseV9hZGRyZXNzX2lkPXRoaXMucmVwbHlfZGF0YVswXS5faWQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVtYWlsX2FkZHJlc3MuZW1haWwpXG5cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJlcGx5IGFkZHJlc3MgXG5cbiAgZ2V0U2VuZGVyQWRkcmVzcygpIHtcbiAgICB2YXIgZGF0YTogYW55ID0geyAnc291cmNlJzogdGhpcy5jb25maWdEYXRhLnNlbmRlcl90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbmRlcl9uYW1lX2FycmF5KVxuICAgIH0pO1xuICB9XG5cblxuICAvL2dlbmVyYXRlIGZvcm1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMubmV3c0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5ld3N0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgbmV3c3N1YmplY3Q6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNoYXJlX25ld3M6IFtdLFxuICAgICAgcHVibGlzaGRhdGVfbm9ybWFsX2Zvcm1hdDogW10sXG4gICAgICBzZW5kZXJhZGRyZXNzOiBbXSxcbiAgICAgIHB1Ymxpc2hkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZXR0aW1lOiBbdGhpcy50aW1lXSxcbiAgICAgIGNvbnRlbnQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIG5ld3NmcmVxdWVuY3k6IFtdLFxuICAgICAgZGF5c19vZl93ZWVrczogW10sXG4gICAgICB0aW1lb2ZkYXk6IFt0aGlzLnRpbWVdLFxuICAgICAgdGltZXpvbmU6IFtdLFxuICAgICAgc3RhcnRkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbmRkYXRlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICByZXBseV9lbWFpbDogW3RoaXMucmVwbHlfYWRkcmVzc19pZF0sXG4gICAgICBzdGF0dXM6IFsxXVxuICAgIH0pO1xuICB9XG5cblxuXG4gIC8vc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy50bXBfZGF0ZSA9IGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudG1wX2RhdGUpO1xuICAgIGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSA9IGRhdGUsXG5cbiAgICAgIHRoaXMudG1wX2RhdGUgPSBkZWZhdWx0VmFsdWUuc3RhcnRkYXRlO1xuICAgIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUuc3RhcnRkYXRlID0gZGF0ZSxcblxuICAgICAgdGhpcy50bXBfZGF0ZSA9IGRlZmF1bHRWYWx1ZS5lbmRkYXRlO1xuICAgIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRtcF9kYXRlKTtcbiAgICBkZWZhdWx0VmFsdWUuZW5kZGF0ZSA9IGRhdGUsXG5cbiAgICAgIHRoaXMubmV3c0Zvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIG5ld3N0aXRsZTogZGVmYXVsdFZhbHVlLm5ld3N0aXRsZSxcbiAgICAgICAgbmV3c3N1YmplY3Q6IGRlZmF1bHRWYWx1ZS5uZXdzc3ViamVjdCxcbiAgICAgICAgc2hhcmVfbmV3czogZGVmYXVsdFZhbHVlLnNoYXJlX25ld3MsXG4gICAgICAgIHNlbmRlcmFkZHJlc3M6IGRlZmF1bHRWYWx1ZS5zZW5kZXJhZGRyZXNzLFxuICAgICAgICBwdWJsaXNoZGF0ZTogZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlLFxuICAgICAgICBzZXR0aW1lOiBkZWZhdWx0VmFsdWUuc2V0dGltZSxcbiAgICAgICAgY29udGVudDogZGVmYXVsdFZhbHVlLmNvbnRlbnQsXG4gICAgICAgIGRheXNfb2Zfd2Vla3M6IGRlZmF1bHRWYWx1ZS5kYXlzX29mX3dlZWtzLFxuICAgICAgICBuZXdzZnJlcXVlbmN5OiBkZWZhdWx0VmFsdWUubmV3c2ZyZXF1ZW5jeSxcbiAgICAgICAgdGltZW9mZGF5OiBkZWZhdWx0VmFsdWUudGltZW9mZGF5LFxuICAgICAgICB0aW1lem9uZTogZGVmYXVsdFZhbHVlLnRpbWV6b25lLFxuICAgICAgICBzdGFydGRhdGU6IGRlZmF1bHRWYWx1ZS5zdGFydGRhdGUsXG4gICAgICAgIGVuZGRhdGU6IGRlZmF1bHRWYWx1ZS5lbmRkYXRlLFxuICAgICAgICByZXBseV9lbWFpbDogZGVmYXVsdFZhbHVlLnJlcGx5X2VtYWlsXG4gICAgICB9KTtcbiAgICAvLyB0aGlzLnNoYXJlX3dpdGhfZ3JvdXAgPSBkZWZhdWx0VmFsdWUuc2hhcmVfbmV3czsgICBcblxuICB9XG5cblxuICAvKiogYmx1ciBmdW5jdGlvbiAqKi9cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5uZXdzRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuICAvKiogbWFya2luZyB0aGUgY2hlY2tib3ggYXMgdHJ1ZSAqKi9cbiAgZ2V0RGF5cyhkYXlfdmFyOiBhbnkpIHtcbiAgICBpZiAoZGF5X3Zhci5pc1NlbGVjdGVkID09PSB0cnVlKVxuICAgICAgZGF5X3Zhci5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgZWxzZVxuICAgICAgZGF5X3Zhci5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vc3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0KCkge1xuXG4gICAgdGhpcy5kYXlzX2FycmF5ID0gW107XG4gICAgdGhpcy5mYWxzZV9jb3VudCA9IDA7XG4gICAgaWYgKHRoaXMuZnJlcXVlbmN5X2ZsYWcgIT0gZmFsc2UpXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5c19qc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmRheXNfanNvbltpXS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICAgIHRoaXMuZmFsc2VfY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICB0aGlzLmZhbHNlX2NvdW50Kys7XG4gICAgICB9XG5cbiAgICBpZiAodGhpcy5mYWxzZV9jb3VudCA9PSA3KVxuICAgICAgcmV0dXJuO1xuXG5cbiAgICBpZiAodGhpcy5mcmVxdWVuY3lfZmxhZyA9PSB0cnVlKVxuICAgICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5kYXlzX29mX3dlZWtzID0gdGhpcy5kYXlzX2FycmF5O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuZGF5c19vZl93ZWVrcyA9IG51bGw7XG5cblxuXG5cbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpO1xuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuc3RhcnRkYXRlID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUuc3RhcnRkYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmVuZGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5lbmRkYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLnJlcGx5X2VtYWlsPXRoaXMucmVwbHlfZGF0YVswXS5faWQ7XG5cbiAgICBsZXQgeDogYW55ID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUpLnVuaXgoKTtcbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlX25vcm1hbF9mb3JtYXQgPSBwYXJzZUludCh4KSAqIDEwMDA7XG5cblxuXG4gICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgIGZvciAobGV0IHggaW4gdGhpcy5uZXdzRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5uZXdzRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG5cblxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5uZXdzRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMubmV3c0Zvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pLFxuICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJzZW5kZXJhZGRyZXNzXCIsXCJyZXBseV9lbWFpbFwiXVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIodGhpcy5tZXNzYWdlLCBcIk9LXCIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJ3ByZXZpZXdfYWxsX2RhdGEuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQUkVWSUVXIHtcblxuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG5cbiAgcHVibGljIHRlc3RNYWlsOiBhbnk7XG4gIHB1YmxpYyB0aXRsZTogQW5hbHlzZXJOb2RlO1xuICBwdWJsaWMgc3ViamVjdDogYW55O1xuICBwdWJsaWMgY29udGVudDogYW55O1xuICBwdWJsaWMgZmxhZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxQUkVWSUVXPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsIHB1YmxpYyBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSwgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCc+PicsIGRhdGEpXG5cbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIHNlbGVjdE9wdGlvbih2YWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gIH1cblxuICB0ZXN0TWFpbFN1Ym1pdCh0aXRsZTogYW55LCBzdWJqZWN0OiBhbnksIGNvbnRlbnQ6IGFueSwgdGVzdE1haWw6IGFueSwgZmxhZzogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codGl0bGUsIHN1YmplY3QsIGNvbnRlbnQsIHRlc3RNYWlsKTtcblxuICAgIHRoaXMuZGF0YS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGF0YS5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICB0aGlzLmRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5kYXRhLnRlc3RNYWlsID0gdGhpcy50ZXN0TWFpbDtcbiAgICB0aGlzLmRhdGEuZmxhZyA9IGZsYWc7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEpO1xuXG4gICAgLy8gbGV0IGVuZHBvaW50OmFueT0naHR0cHM6Ly85b3pieXZ2NXYwLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24vYXBpL2FkZG9ydXBkYXRlZGF0YSdcblxuICAgIC8vIGxldCBtYWlsRGF0YTogYW55ID0ge1xuICAgIC8vICAgc291cmNlOiAnbmV3c1Rlc3RNYWlsRGF0YScsXG4gICAgLy8gICBkYXRhOiB7XG4gICAgLy8gICAgIFwidGl0bGVcIjp0aXRsZSxcbiAgICAvLyAgICAgXCJzdWJqZWN0XCI6c3ViamVjdCxcbiAgICAvLyAgICAgXCJjb250ZW50XCI6Y29udGVudCxcbiAgICAvLyAgICAgXCJ0ZXN0TWFpbFwiOnRoaXMudGVzdE1haWxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBcInNvdXJjZW9ialwiOiBbXCJ0ZXN0TWFpbFwiXSxcbiAgICAvLyAgIFwidG9rZW5cIjp0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdqd3RUb2tlbicpXG4gICAgLy8gfTtcbiAgICAvLyB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEoZW5kcG9pbnQsIG1haWxEYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAvLyAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcblxuICAgIC8vICAgICAvLyB0aGlzLm9wZW5TbmFja0Jhcih0aGlzLm1lc3NhZ2UsIFwiT0tcIik7XG4gICAgLy8gICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG5cbiAgICAvLyAgIH1cblxuICAgIC8vIH0pO1xuXG5cbiAgfVxufVxuIl19