import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddEditSenderComponent implements OnInit {
    private formBuilder;
    private newsService;
    private router;
    dialog: MatDialog;
    senderForm: FormGroup;
    buttonText: any;
    header_name: any;
    configData: any;
    successMessage: any;
    dialogRef: any;
    constructor(formBuilder: FormBuilder, newsService: NewsTitleService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    generateForm(): void;
    config: any;
    openDialog(x: any): void;
    /** blur function **/
    inputBlur(val: any): void;
    setDefaultValue(defaultValue: any): void;
    onSubmit(): void;
}
export declare class Modal3 {
    dialogRef: MatDialogRef<Modal3>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal3>, data: DialogData);
    onNoClick(): void;
}
