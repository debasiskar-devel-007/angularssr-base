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
        for (var i = 0; i < this.days_json.length; i++) {
            if (this.days_json[i].isSelected)
                this.days_array.push(this.days_json[i]);
            else
                this.days_array.push(this.days_json[i]);
        }
        this.newsForm.value.days_of_weeks = this.days_array;
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
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\" (blur)=\"inputBlur('newstitle')\">\n          <mat-error *ngIf=\"!newsForm.controls['newstitle'].valid\n          && newsForm.controls['newstitle'].errors.required\" > Title is required.</mat-error>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\" (blur)=\"inputBlur('newssubject')\">\n          <mat-error *ngIf=\"!newsForm.controls['newssubject'].valid\n          && newsForm.controls['newssubject'].errors.required\"> Subject is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\" (blur)=\"inputBlur('publishdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['publishdate'].valid\n          && newsForm.controls['publishdate'].errors.required\"> Publish Date is required.</mat-error>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n       \n\n\n        <!-- Content  -->\n        <ck-editor formControlName=\"content\" [config]=\"editorconfig\" (blur)=\"inputBlur('content')\">        \n        </ck-editor>\n        <mat-error *ngIf=\"!newsForm.controls['content'].valid\n        && newsForm.controls['content'].errors.required && newsForm.controls['content'].touched\"> Content is required.</mat-error>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\" (blur)=\"inputBlur('sendnews')\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\" (click)=\"frequency_flag=false\">Daily</mat-option>\n            <mat-option value=\"weekly\" (click)=\"frequency_flag=true\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\" *ngIf=\"frequency_flag===true\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\" *ngFor=\"let day of days_json;let i = index\">            \n            <mat-checkbox  [checked]=\"day.isSelected\" [value]=\"day.value\" (change)=\"getDays(day)\"> {{day.day}}</mat-checkbox>         \n          </mat-card-content>\n        </div>\n       \n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Hawaii Standard Time\">Hawaii Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Eastern Standard Time\">Eastern Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\" (blur)=\"inputBlur('startdate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['startdate'].valid\n          && newsForm.controls['startdate'].errors.required\"> Start Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\" (blur)=\"inputBlur('enddate')\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n          <mat-error *ngIf=\"!newsForm.controls['enddate'].valid\n          && newsForm.controls['enddate'].errors.required\"> End Date is required.</mat-error>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsTUFBTSxFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RDtJQTRDRSx1Q0FBcUIsR0FBOEIsRUFBVSxXQUE4QixFQUNsRixRQUFrQixFQUFVLGFBQTZCLEVBQVcsV0FBeUIsRUFDN0YsTUFBZSxFQUFXLFFBQXFCO1FBRm5DLFFBQUcsR0FBSCxHQUFHLENBQTJCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQ2xGLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUM3RixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVcsYUFBUSxHQUFS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aVFWLG9DQUFDO0NBQUEsQUF0U0QsSUFzU0M7U0FqU1ksNkJBQTZCOzs7SUFJeEMsb0RBQW1DOztJQUNuQyxtREFBNkI7O0lBQzdCLHlEQUFpQzs7SUFDakMsMERBQWtDOztJQUNsQyxtREFBc0I7O0lBQ3RCLDZDQUFpQjs7SUFDakIsb0RBQXVCOztJQUN2QixpREFBNEI7O0lBQzVCLHVEQUFzQzs7SUFDdEMsbURBQTJCOztJQUMzQixxREFBK0I7O0lBQy9CLGtEQUFjOztJQUNkLGdEQUF3Qjs7Ozs7SUFNdEIsK0NBQThCOztJQUM5QixxREFFRTs7SUFDRiw4Q0FFRTs7Ozs7SUFXUyw0Q0FBc0M7Ozs7O0lBQUUsb0RBQXNDOztJQUN6RixpREFBeUI7O0lBQUcsc0RBQW9DOzs7OztJQUFHLG9EQUFpQzs7SUFDcEcsK0NBQXNCOzs7OztJQUFHLGlEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0LEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyICwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LW5ld3NsZXR0ZXJsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBoZWFkZXJfbmFtZTphbnk9XCJOZXdzbGV0dGVyXCJcbiAgcHVibGljIGJ1dHRvblRleHQ6YW55PVwiU0FWRVwiO1xuICBwdWJsaWMgZ3JvdXBfbmFtZV9hcnJheTphbnkgPSBbXTtcbiAgcHVibGljIHNlbmRlcl9uYW1lX2FycmF5OmFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTphbnk7XG4gIHB1YmxpYyB0aW1lOmFueSA7XG4gIHB1YmxpYyBjb29raWVWYWx1ZTphbnk7XG4gIHB1YmxpYyBuZXdzRm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGZyZXF1ZW5jeV9mbGFnOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRheXNfYXJyYXk6YW55ID0gW107XG4gIHB1YmxpYyBlZGl0b3Jjb25maWcgOiBhbnkgPSB7fTtcbiAgZGF5c19qc29uOmFueTtcbiAgcHVibGljIG1lc3NhZ2UgOiBzdHJpbmc7XG5cbiAgXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICAgIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgICBlZGl0b3JDb25maWcgPSB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQ6JyxcbiAgICB9O1xuICAgIHB1YmxpYyBtb2RlbCA9IHtcbiAgICAgIGVkaXRvckRhdGE6ICcnXG4gICAgfTtcbiAgICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAgIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhdHAgOiBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UsIHByaXZhdGUgbmV3c1NlcnZpY2UgOiBOZXdzVGl0bGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUgLCBwdWJsaWMgY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UgLCBwcml2YXRlIGZvcm1CdWlsZGVyIDogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlciA6IFJvdXRlciAsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7ICAgICAgXG4gICAgICBcbiAgXG4gICAgICB0aGlzLmVkaXRvcmNvbmZpZy5leHRyYUFsbG93ZWRDb250ZW50ID0gJypbY2xhc3NdKCopLHNwYW47dWw7bGk7dGFibGU7dGQ7c3R5bGU7KltpZF07KigqKTsqeyp9JzsgICBcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRheXNfanNvbiA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRheVwiOlwiU3VuZGF5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6MSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6ZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF5XCI6XCJNb25kYXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjoyLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDpmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXlcIjpcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjozLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDpmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXlcIjpcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOjQsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOmZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRheVwiOlwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjo1LFxuICAgICAgICAgICAgaXNTZWxlY3RlZDp0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRheVwiOlwiRnJpZGF5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6NixcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6ZmFsc2VcbiAgICAgICAgICB9LCAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF5XCI6XCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOjcsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOmZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICBcbiAgICBcbiAgfVxuXG5cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmKHRoaXMuY29uZmlnRGF0YS5hY3Rpb249PSdhZGQnKVxuICAgIHRoaXMudGltZSA9IHRoaXMuZGF0ZXBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKCksJ2g6bW0nKTsgIFxuICBcbiAgIFxuXG4gICAgICAgLy9DYWxsaW5nIHRoZSBncm91cCBuYW1lXG4gICAgICAgdGhpcy5nZXRHcm91cE5hbWUoKTtcblxuICAgICAgIC8vR2V0IHNlbmRlcidzIGdldEdyb3VwTmFtZVxuICAgICAgIHRoaXMuZ2V0U2VuZGVyQWRkcmVzcygpO1xuICAgICAgXG4gICAgICAgLy9HZXR0aW5nIHRoZSBjb29raWUgdmFsdWVcbiAgICAgICB0aGlzLmNvb2tpZVZhbHVlID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldEFsbCgpO1xuXG4gICAgICAvLyAgY2FsbGluZyB0aGUgZm9ybSBnZW5lcmF0aW9uIFxuICAgICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgICAgIHRoaXMubmV3c0Zvcm0udmFsdWUuY29va2llbWFpbCA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2dldF9lbWFpbCcpO1xuXG4gICAgICAgLypTd2l0Y2ggY2FzZSovXG4gICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFkZCBhIE5ld3NsZXR0ZXJcIjtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIk5ld3NsZXR0ZXIgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgIHRoaXMuZGF5c19qc29uID0gW107XG4gICAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiOyAgXG4gICAgICAgICAgdGhpcy50aW1lPVwiXCI7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJOZXdzbGV0dGVyIEluZm9ybWF0aW9uIFVwZGF0ZWQhISFcIjtcbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpOyAgICBcbiAgICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuZGF5c19vZl93ZWVrcyE9bnVsbClcbiAgICAgICAgICB0aGlzLmZyZXF1ZW5jeV9mbGFnID0gdHJ1ZTsgICAgXG4gXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICB0aGlzLmRheXNfanNvbiA9IHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YS5kYXlzX29mX3dlZWtzO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBcblxuICAgICAgIFxuICB9XG5cbiAgLyoqIG1hdCBzbmFja2JhciAqKi9cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuICBcblxuIC8qKiBvcGVuaW5nIHVwIHRoZSB0aW1lIHBpY2tlciAqKi9cbiAgb3BlbigpXG4gIHtcbiAgICBjb25zdCBhbWF6aW5nVGltZVBpY2tlciA9IHRoaXMuYXRwLm9wZW4oKTtcbiAgICBhbWF6aW5nVGltZVBpY2tlci5hZnRlckNsb3NlKCkuc3Vic2NyaWJlKHRpbWU9PntcbiAgICB9KTtcbiAgfVxuICBcblxuXG4gIC8qZ2V0dGluZyB0aGUgZ3JvdXAgbmFtZSovXG4gIGdldEdyb3VwTmFtZSgpXG4gIHtcbiAgICB2YXIgZGF0YTphbnkgPSB7ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5ncm91cF90YWJsZSB9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyKydkYXRhbGlzdCcsZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlPT57XG4gICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgdGhpcy5ncm91cF9uYW1lX2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qZ2V0dGluZyB0aGUgc2VuZGVyJ3MgZW1haWwqL1xuICBnZXRTZW5kZXJBZGRyZXNzKClcbiAge1xuICAgIHZhciBkYXRhOmFueT17ICdzb3VyY2UnOnRoaXMuY29uZmlnRGF0YS5zZW5kZXJfdGFibGV9O1xuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQyKydkYXRhbGlzdCcsZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlPT57XG4gICAgICBsZXQgcmVzdWx0OmFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zZW5kZXJfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICB9KTtcbiAgfVxuXG5cbiAgLy9nZW5lcmF0ZSBmb3JtXG4gIGdlbmVyYXRlRm9ybSgpe1xuICAgIHRoaXMubmV3c0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5ld3N0aXRsZTpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIG5ld3NzdWJqZWN0OlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2hhcmVfbmV3czpbXSxcbiAgICAgIHNlbmRlcmFkZHJlc3M6W10sXG4gICAgICBwdWJsaXNoZGF0ZTpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNldHRpbWU6W3RoaXMudGltZV0sXG4gICAgICBjb250ZW50OlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2VuZG5ld3M6W10sXG4gICAgICBuZXdzZnJlcXVlbmN5OltdLFxuICAgICAgZGF5c19vZl93ZWVrczpbXSxcbiAgICAgIHRpbWVvZmRheTpbdGhpcy50aW1lXSxcbiAgICAgIHRpbWV6b25lOltdLFxuICAgICAgc3RhcnRkYXRlOlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW5kZGF0ZTpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJlcGx5OltdLFxuICAgICAgc3RhdHVzOlsxXVxuICAgIH0pO1xuICAgXG4gIH1cblxuICBcblxuICAvL3NldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWVcbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMubmV3c0Zvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBuZXdzdGl0bGU6ZGVmYXVsdFZhbHVlLm5ld3N0aXRsZSxcbiAgICAgIG5ld3NzdWJqZWN0OmRlZmF1bHRWYWx1ZS5uZXdzc3ViamVjdCxcbiAgICAgIHNoYXJlX25ld3M6ZGVmYXVsdFZhbHVlLnNoYXJlX25ld3MsXG4gICAgICBzZW5kZXJhZGRyZXNzOmRlZmF1bHRWYWx1ZS5zZW5kZXJhZGRyZXNzLFxuICAgICAgcHVibGlzaGRhdGU6ZGVmYXVsdFZhbHVlLnB1Ymxpc2hkYXRlLFxuICAgICAgc2V0dGltZTpkZWZhdWx0VmFsdWUuc2V0dGltZSxcbiAgICAgIGNvbnRlbnQ6ZGVmYXVsdFZhbHVlLmNvbnRlbnQsXG4gICAgICBkYXlzX29mX3dlZWtzOmRlZmF1bHRWYWx1ZS5kYXlzX29mX3dlZWtzLFxuICAgICAgc2VuZG5ld3M6ZGVmYXVsdFZhbHVlLnNlbmRuZXdzLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTpkZWZhdWx0VmFsdWUubmV3c2ZyZXF1ZW5jeSxcbiAgICAgIHRpbWVvZmRheTpkZWZhdWx0VmFsdWUudGltZW9mZGF5LFxuICAgICAgdGltZXpvbmU6ZGVmYXVsdFZhbHVlLnRpbWV6b25lLFxuICAgICAgc3RhcnRkYXRlOmRlZmF1bHRWYWx1ZS5zdGFydGRhdGUsXG4gICAgICBlbmRkYXRlOmRlZmF1bHRWYWx1ZS5lbmRkYXRlLFxuICAgICAgcmVwbHk6ZGVmYXVsdFZhbHVlLnJlcGx5XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cblxuICAvKiogYmx1ciBmdW5jdGlvbiAqKi9cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5uZXdzRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuICAvKiogbWFya2luZyB0aGUgY2hlY2tib3ggYXMgdHJ1ZSAqKi9cbiAgZ2V0RGF5cyhkYXlfdmFyOmFueSl7XG4gICAgaWYoZGF5X3Zhci5pc1NlbGVjdGVkID09PSB0cnVlKVxuICAgIGRheV92YXIuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGVsc2VcbiAgICBkYXlfdmFyLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIFxuICAvL3N1Ym1pdCBmdW5jdGlvblxuICBvblN1Ym1pdCgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXlzX2pzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHRoaXMuZGF5c19qc29uW2ldLmlzU2VsZWN0ZWQpXG4gICAgICB0aGlzLmRheXNfYXJyYXkucHVzaCh0aGlzLmRheXNfanNvbltpXSk7XG4gICAgICBlbHNlXG4gICAgICB0aGlzLmRheXNfYXJyYXkucHVzaCh0aGlzLmRheXNfanNvbltpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5uZXdzRm9ybS52YWx1ZS5kYXlzX29mX3dlZWtzID0gdGhpcy5kYXlzX2FycmF5OyAgIFxuXG5cbiAgICAgLyoqIG1hcmtpbmcgYXMgdW50b3VjaGVkICoqL1xuICAgICBmb3IgKGxldCB4IGluIHRoaXMubmV3c0Zvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubmV3c0Zvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgXG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMubmV3c0Zvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLm5ld3NGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKSxcbiAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wic2hhcmVfbmV3c1wiLFwic2VuZGVyYWRkcmVzc1wiXVxuICAgICAgfTtcbiAgICAgIHRoaXMubmV3c1NlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgXG4gICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIodGhpcy5tZXNzYWdlLFwiT0tcIik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==