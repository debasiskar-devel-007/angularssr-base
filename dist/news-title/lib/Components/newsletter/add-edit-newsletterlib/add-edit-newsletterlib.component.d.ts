import { OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
export declare class AddEditNewsletterlibComponent implements OnInit {
    private atp;
    private newsService;
    datepipe: DatePipe;
    cookieService: CookieService;
    private formBuilder;
    router: Router;
    private snackBar;
    header_name: any;
    buttonText: any;
    group_name_array: any;
    sender_name_array: any;
    configData: any;
    time: any;
    cookieValue: any;
    newsForm: FormGroup;
    frequency_flag: boolean;
    days_array: any;
    editorconfig: any;
    days_json: any;
    message: string;
    tmp_date: any;
    false_count: number;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    config: any;
    constructor(atp: AmazingTimePickerService, newsService: NewsTitleService, datepipe: DatePipe, cookieService: CookieService, formBuilder: FormBuilder, router: Router, snackBar: MatSnackBar);
    unix_timestamp(t: any): any;
    ngOnInit(): void;
    /** mat snackbar **/
    openSnackBar(message: string, action: string): void;
    /** opening up the time picker **/
    open(): void;
    getGroupName(): void;
    getSenderAddress(): void;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    /** blur function **/
    inputBlur(val: any): void;
    /** marking the checkbox as true **/
    getDays(day_var: any): void;
    onSubmit(): void;
}
