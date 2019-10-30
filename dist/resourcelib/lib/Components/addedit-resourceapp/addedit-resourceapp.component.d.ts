import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourcelibService } from '../../resourcelib.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddeditResourceappComponent implements OnInit {
    private formBuilder;
    private resourceService;
    private router;
    private cookieService;
    dialog: MatDialog;
    header_name: any;
    buttonText: any;
    resourceForm: FormGroup;
    loader: boolean;
    configData: any;
    successMessage: any;
    cat_array: any;
    dialogRef: any;
    constructor(formBuilder: FormBuilder, resourceService: ResourcelibService, router: Router, cookieService: CookieService, dialog: MatDialog);
    config: any;
    ngOnInit(): void;
    generateForm(): void;
    onSubmit(): void;
    getParentCategory(): void;
    setDefaultValue(defaultValue: any): void;
    openDialog(x: any): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}
