import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddEditSubscriptiongroupComponent implements OnInit {
    private formBuilder;
    private cookieService;
    private newsService;
    private router;
    dialog: MatDialog;
    subGroupForm: FormGroup;
    buttonText: any;
    header_name: any;
    configData: any;
    group_array: any;
    dialogRef: any;
    successMessage: any;
    constructor(formBuilder: FormBuilder, cookieService: CookieService, newsService: NewsTitleService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    config: any;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    openDialog(x: any): void;
    onSubmit(): void;
    getGroup(): void;
}
export declare class Modal2 {
    dialogRef: MatDialogRef<Modal2>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal2>, data: DialogData);
    onNoClick(): void;
}
