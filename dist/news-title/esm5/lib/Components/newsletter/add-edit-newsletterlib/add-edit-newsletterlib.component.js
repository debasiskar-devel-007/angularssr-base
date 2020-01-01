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
var moment = moment_;
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router, snackBar) {
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
     * @param {?} t
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.unix_timestamp = /**
     * @param {?} t
     * @return {?}
     */
    function (t) {
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
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            duration: 2000,
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
        this.tmp_date = (this.unix_timestamp(defaultValue.publishdate));
        /** @type {?} */
        var date = new Date(this.tmp_date);
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
        for (var x in this.newsForm.controls) {
            this.newsForm.controls[x].markAsTouched();
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
                "sourceobj": ["share_news", "senderaddress"]
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" [config]=\"editorconfig\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag===true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n          <div *ngIf=\"false_count==7\" class=\"desc_error\">\n            <mat-icon>error</mat-icon>\n            <p>Please select at least one day.</p>\n          </div>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}"]
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
        { type: MatSnackBar }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7O0lBRTVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCO0lBOENFLHVDQUFvQixHQUE2QixFQUFVLFdBQTZCLEVBQy9FLFFBQWtCLEVBQVMsYUFBNEIsRUFBVSxXQUF3QixFQUN6RixNQUFjLEVBQVUsUUFBcUI7UUFGbEMsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDL0UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsZ0JB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dFZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxrMFBBQXNEOztpQkFFdkQ7Ozs7Z0JBaEJRLHdCQUF3QjtnQkFFeEIsZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLGFBQWE7Z0JBQ3NCLFdBQVc7Z0JBQzlDLE1BQU07Z0JBQ04sV0FBVzs7O3lCQTRDakIsS0FBSzs7SUFnVFIsb0NBQUM7Q0FBQSxBQXZWRCxJQXVWQztTQWxWWSw2QkFBNkI7OztJQUl4QyxvREFBc0M7O0lBQ3RDLG1EQUFnQzs7SUFDaEMseURBQWtDOztJQUNsQywwREFBbUM7O0lBQ25DLG1EQUF1Qjs7SUFDdkIsNkNBQWlCOztJQUNqQixvREFBd0I7O0lBQ3hCLGlEQUEyQjs7SUFDM0IsdURBQXVDOztJQUN2QyxtREFBNEI7O0lBQzVCLHFEQUE4Qjs7SUFDOUIsa0RBQWU7O0lBQ2YsZ0RBQXVCOztJQUN2QixpREFBcUI7O0lBQ3JCLG9EQUEwQjs7Ozs7SUFNMUIsK0NBQThCOztJQUM5QixxREFFRTs7SUFDRiw4Q0FFRTs7Ozs7SUFXVSw0Q0FBcUM7Ozs7O0lBQUUsb0RBQXFDOztJQUN0RixpREFBeUI7O0lBQUUsc0RBQW1DOzs7OztJQUFFLG9EQUFnQzs7SUFDaEcsK0NBQXFCOzs7OztJQUFFLGlEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICdhbWF6aW5nLXRpbWUtcGlja2VyJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50Jztcbi8vIGltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtbmV3c2xldHRlcmxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vID09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT1cbiAgcHVibGljIGhlYWRlcl9uYW1lOiBhbnkgPSBcIk5ld3NsZXR0ZXJcIlxuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gXCJTQVZFXCI7XG4gIHB1YmxpYyBncm91cF9uYW1lX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIHNlbmRlcl9uYW1lX2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIHRpbWU6IGFueTtcbiAgcHVibGljIGNvb2tpZVZhbHVlOiBhbnk7XG4gIHB1YmxpYyBuZXdzRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgZnJlcXVlbmN5X2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRheXNfYXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgZWRpdG9yY29uZmlnOiBhbnkgPSB7fTtcbiAgZGF5c19qc29uOiBhbnk7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyB0bXBfZGF0ZTogYW55O1xuICBwdWJsaWMgZmFsc2VfY291bnQ6bnVtYmVyO1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdHA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSwgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKTtcbiAgICAgIC8vIGlmKHRoaXMuY29uZmlnRGF0YS5hY3Rpb249PSdhZGQnKVxuICAgICAgdGhpcy5kYXlzX2pzb24gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImRheVwiOiBcIlN1bmRheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogMSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJNb25kYXlcIixcbiAgICAgICAgICBcInZhbHVlXCI6IDIsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogMyxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICBcInZhbHVlXCI6IDQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICBcInZhbHVlXCI6IDUsXG4gICAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICBcInZhbHVlXCI6IDYsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICBcInZhbHVlXCI6IDcsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXTtcblxuICAgIHRoaXMuZWRpdG9yY29uZmlnLmV4dHJhQWxsb3dlZENvbnRlbnQgPSAnKltjbGFzc10oKiksc3Bhbjt1bDtsaTt0YWJsZTt0ZDtzdHlsZTsqW2lkXTsqKCopOyp7Kn0nO1xuXG4gIH1cblxuICB1bml4X3RpbWVzdGFtcCh0KSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSh0KjEwMDApLFx0Ly8gQ29udmVydCB0aGUgcGFzc2VkIHRpbWVzdGFtcCB0byBtaWxsaXNlY29uZHNcbiAgICAgIHl5eXkgPSBkLmdldEZ1bGxZZWFyKCksXG4gICAgICBtbSA9ICgnMCcgKyAoZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSxcdC8vIE1vbnRocyBhcmUgemVybyBiYXNlZC4gQWRkIGxlYWRpbmcgMC5cbiAgICAgIGRkID0gKCcwJyArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXHRcdFx0Ly8gQWRkIGxlYWRpbmcgMC5cdFxuICAgICAgdGltZTtcblxuICAgIC8vIGllOiAyMDEzLTAyLTE4LCA4OjM1IEFNXHRcbiAgICB0aW1lID0gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uID09ICdhZGQnKVxuICAgICAgdGhpcy50aW1lID0gdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwgJ2g6bW0nKTtcblxuXG5cbiAgICAvL0NhbGxpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICB0aGlzLmdldEdyb3VwTmFtZSgpO1xuXG4gICAgLy9HZXQgc2VuZGVyJ3MgZ2V0R3JvdXBOYW1lXG4gICAgdGhpcy5nZXRTZW5kZXJBZGRyZXNzKCk7XG5cbiAgICAvL0dldHRpbmcgdGhlIGNvb2tpZSB2YWx1ZVxuICAgIHRoaXMuY29va2llVmFsdWUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0QWxsKCk7XG5cbiAgICAvLyAgY2FsbGluZyB0aGUgZm9ybSBnZW5lcmF0aW9uIFxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiQWRkIGEgTmV3c2xldHRlclwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XG4gICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmRheXNfanNvbiA9IG51bGw7XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVVBEQVRFXCI7XG4gICAgICAgIHRoaXMudGltZSA9IFwiXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTmV3c2xldHRlciBJbmZvcm1hdGlvbiBVcGRhdGVkISEhXCI7XG4gICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcyAhPSBudWxsKVxuICAgICAgICAgIHRoaXMuZnJlcXVlbmN5X2ZsYWcgPSB0cnVlO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXlzX2pzb24gPSB0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcztcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cblxuICB9XG5cblxuXG5cbiAgLyoqIG1hdCBzbmFja2JhciAqKi9cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqIG9wZW5pbmcgdXAgdGhlIHRpbWUgcGlja2VyICoqL1xuICBvcGVuKCkge1xuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZSA9PiB7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLypnZXR0aW5nIHRoZSBncm91cCBuYW1lKi9cbiAgZ2V0R3JvdXBOYW1lKCkge1xuICAgIHZhciBkYXRhOiBhbnkgPSB7ICdzb3VyY2UnOiB0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MiArICdkYXRhbGlzdCcsIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cbiAgZ2V0U2VuZGVyQWRkcmVzcygpIHtcbiAgICB2YXIgZGF0YTogYW55ID0geyAnc291cmNlJzogdGhpcy5jb25maWdEYXRhLnNlbmRlcl90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyICsgJ2RhdGFsaXN0JywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgZm9ybVxuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgdGhpcy5uZXdzRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmV3c3RpdGxlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBuZXdzc3ViamVjdDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2hhcmVfbmV3czogW10sXG4gICAgICBwdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0OltdLFxuICAgICAgc2VuZGVyYWRkcmVzczogW10sXG4gICAgICBwdWJsaXNoZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2V0dGltZTogW3RoaXMudGltZV0sXG4gICAgICBjb250ZW50OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZW5kbmV3czogW10sXG4gICAgICBuZXdzZnJlcXVlbmN5OiBbXSxcbiAgICAgIGRheXNfb2Zfd2Vla3M6IFtdLFxuICAgICAgdGltZW9mZGF5OiBbdGhpcy50aW1lXSxcbiAgICAgIHRpbWV6b25lOiBbXSxcbiAgICAgIHN0YXJ0ZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW5kZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmVwbHk6IFtdLFxuICAgICAgc3RhdHVzOiBbMV1cbiAgICB9KTtcblxuICB9XG5cblxuXG4gIC8vc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy50bXBfZGF0ZSA9ICh0aGlzLnVuaXhfdGltZXN0YW1wKGRlZmF1bHRWYWx1ZS5wdWJsaXNoZGF0ZSkpO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy50bXBfZGF0ZSk7XG4gICAgZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlID0gZGF0ZSxcblxuICAgIHRoaXMudG1wX2RhdGUgPSAodGhpcy51bml4X3RpbWVzdGFtcChkZWZhdWx0VmFsdWUuc3RhcnRkYXRlKSk7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudG1wX2RhdGUpO1xuICAgIGRlZmF1bHRWYWx1ZS5zdGFydGRhdGUgPSBkYXRlLFxuXG4gICAgdGhpcy50bXBfZGF0ZSA9ICh0aGlzLnVuaXhfdGltZXN0YW1wKGRlZmF1bHRWYWx1ZS5lbmRkYXRlKSk7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudG1wX2RhdGUpO1xuICAgIGRlZmF1bHRWYWx1ZS5lbmRkYXRlID0gZGF0ZSxcblxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRlKTtcbiAgICB0aGlzLm5ld3NGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmV3c3RpdGxlOiBkZWZhdWx0VmFsdWUubmV3c3RpdGxlLFxuICAgICAgbmV3c3N1YmplY3Q6IGRlZmF1bHRWYWx1ZS5uZXdzc3ViamVjdCxcbiAgICAgIHNoYXJlX25ld3M6IGRlZmF1bHRWYWx1ZS5zaGFyZV9uZXdzLFxuICAgICAgc2VuZGVyYWRkcmVzczogZGVmYXVsdFZhbHVlLnNlbmRlcmFkZHJlc3MsXG4gICAgICBwdWJsaXNoZGF0ZTogZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlLFxuICAgICAgc2V0dGltZTogZGVmYXVsdFZhbHVlLnNldHRpbWUsXG4gICAgICBjb250ZW50OiBkZWZhdWx0VmFsdWUuY29udGVudCxcbiAgICAgIGRheXNfb2Zfd2Vla3M6IGRlZmF1bHRWYWx1ZS5kYXlzX29mX3dlZWtzLFxuICAgICAgc2VuZG5ld3M6IGRlZmF1bHRWYWx1ZS5zZW5kbmV3cyxcbiAgICAgIG5ld3NmcmVxdWVuY3k6IGRlZmF1bHRWYWx1ZS5uZXdzZnJlcXVlbmN5LFxuICAgICAgdGltZW9mZGF5OiBkZWZhdWx0VmFsdWUudGltZW9mZGF5LFxuICAgICAgdGltZXpvbmU6IGRlZmF1bHRWYWx1ZS50aW1lem9uZSxcbiAgICAgIHN0YXJ0ZGF0ZTogZGVmYXVsdFZhbHVlLnN0YXJ0ZGF0ZSxcbiAgICAgIGVuZGRhdGU6IGRlZmF1bHRWYWx1ZS5lbmRkYXRlLFxuICAgICAgcmVwbHk6IGRlZmF1bHRWYWx1ZS5yZXBseVxuICAgIH0pO1xuXG4gIH1cblxuXG4gIC8qKiBibHVyIGZ1bmN0aW9uICoqL1xuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLm5ld3NGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG4gIC8qKiBtYXJraW5nIHRoZSBjaGVja2JveCBhcyB0cnVlICoqL1xuICBnZXREYXlzKGRheV92YXI6IGFueSkge1xuICAgIGlmIChkYXlfdmFyLmlzU2VsZWN0ZWQgPT09IHRydWUpXG4gICAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBlbHNlXG4gICAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy9zdWJtaXQgZnVuY3Rpb25cbiAgb25TdWJtaXQoKSB7XG5cbiAgICB0aGlzLmRheXNfYXJyYXkgPSBbXTtcbiAgICB0aGlzLmZhbHNlX2NvdW50ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5c19qc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5kYXlzX2pzb25baV0uaXNTZWxlY3RlZClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kYXlzX2FycmF5LnB1c2godGhpcy5kYXlzX2pzb25baV0pO1xuICAgICAgICB0aGlzLmZhbHNlX2NvdW50LS07XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZGF5c19hcnJheS5wdXNoKHRoaXMuZGF5c19qc29uW2ldKTtcbiAgICAgICAgdGhpcy5mYWxzZV9jb3VudCsrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImZhbHNlX2NvdW50XCIsdGhpcy5mYWxzZV9jb3VudCk7XG4gICAgaWYodGhpcy5mYWxzZV9jb3VudCA9PSA3KVxuICAgcmV0dXJuO1xuXG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5kYXlzX29mX3dlZWtzID0gdGhpcy5kYXlzX2FycmF5O1xuXG5cblxuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGUgPSBtb21lbnQodGhpcy5uZXdzRm9ybS52YWx1ZS5wdWJsaXNoZGF0ZSkudW5peCgpO1xuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuc3RhcnRkYXRlID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUuc3RhcnRkYXRlKS51bml4KCk7XG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5lbmRkYXRlID0gbW9tZW50KHRoaXMubmV3c0Zvcm0udmFsdWUuZW5kZGF0ZSkudW5peCgpO1xuICAgIHRoaXMubmV3c0Zvcm0udmFsdWUucHVibGlzaGRhdGVfbm9ybWFsX2Zvcm1hdCA9IG1vbWVudChwYXJzZUludCh0aGlzLm5ld3NGb3JtLnZhbHVlLnB1Ymxpc2hkYXRlKSoxMDAwKS5mb3JtYXQoJ3gnKTtcblxuXG4gICAgY29uc29sZS5sb2codGhpcy5uZXdzRm9ybS52YWx1ZSk7XG5cblxuICAgIC8qKiBtYXJraW5nIGFzIHVudG91Y2hlZCAqKi9cbiAgICBmb3IgKGxldCB4IGluIHRoaXMubmV3c0Zvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubmV3c0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuXG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMubmV3c0Zvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLm5ld3NGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wic2hhcmVfbmV3c1wiLCBcInNlbmRlcmFkZHJlc3NcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcblxuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHRoaXMubWVzc2FnZSwgXCJPS1wiKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19