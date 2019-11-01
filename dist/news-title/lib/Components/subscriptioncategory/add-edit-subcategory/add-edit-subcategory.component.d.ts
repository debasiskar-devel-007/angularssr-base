import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddEditSubcategoryComponent implements OnInit {
    private formBuilder;
    private newsletterService;
    private router;
    dialog: MatDialog;
    buttonText: any;
    header_name: any;
    subscriptionCatForm: FormGroup;
    configData: any;
    successMessage: any;
    dialogRef: any;
    config: any;
    constructor(formBuilder: FormBuilder, newsletterService: NewsTitleService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    setDefaultValue(defaultValue: any): void;
    generateForm(): void;
    onSubmit(): void;
}
