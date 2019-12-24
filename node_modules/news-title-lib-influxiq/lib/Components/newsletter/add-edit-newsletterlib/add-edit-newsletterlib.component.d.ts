import { OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
export declare class AddEditNewsletterlibComponent implements OnInit {
    private atp;
    private newsService;
    datepipe: DatePipe;
    cookieService: CookieService;
    private formBuilder;
    router: Router;
    header_name: any;
    buttonText: any;
    group_name_array: any;
    sender_name_array: any;
    configData: any;
    time: any;
    cookieValue: any;
    newsForm: FormGroup;
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
    constructor(atp: AmazingTimePickerService, newsService: NewsTitleService, datepipe: DatePipe, cookieService: CookieService, formBuilder: FormBuilder, router: Router);
    ngOnInit(): void;
    open(): void;
    getGroupName(): void;
    getSenderAddress(): void;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    onSubmit(): void;
}
