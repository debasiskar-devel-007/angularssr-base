import { OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
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
    groupname: any;
    nameValForGroup: any;
    group_array: any;
    dialogRef: any;
    successMessage: any;
    filtered_group_array: Observable<any[]>;
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    groupInput: ElementRef;
    constructor(formBuilder: FormBuilder, cookieService: CookieService, newsService: NewsTitleService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    config: any;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    openDialog(x: any): void;
    /** blur function **/
    inputBlur(val: any): void;
    onSubmit(): void;
    getGroup(): void;
    filter(name: any): any;
    add(event: MatChipInputEvent): void;
    remove(item: any, index: any): void;
    selected(event: MatAutocompleteSelectedEvent): void;
}
export declare class Modal2 {
    dialogRef: MatDialogRef<Modal2>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal2>, data: DialogData);
    onNoClick(): void;
}
