import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
export interface DialogData {
    msg: string;
}
export declare class AddeditServiceComponent implements OnInit {
    private formBuilder;
    private servicehttp;
    private router;
    dialog: MatDialog;
    cookieService: CookieService;
    /**ckeditor for descripiton start here*/
    /** ckeditor for additional description **/
    /**ckeditor end here*/
    serviceForm: FormGroup;
    loader: boolean;
    configData: any;
    imageConfigData: any;
    buttonText: string;
    successMessage: string;
    dialogRef: any;
    img_arr: any;
    ErrCode: boolean;
    flag: boolean;
    img_var: any;
    header_name: any;
    image_name: any;
    image_type: any;
    getConfig2: any;
    imageConfigData2: any;
    img_var2: any;
    image_name2: any;
    image_type2: any;
    flag2: boolean;
    ErrCode2: boolean;
    img_missing: boolean;
    editorconfig: any;
    images_array: any;
    setData: any;
    images_array_edit: any;
    constructor(formBuilder: FormBuilder, servicehttp: ServicelibService, router: Router, dialog: MatDialog, cookieService: CookieService);
    ngOnInit(): void;
    config: any;
    imageUpload: any;
    imageUpload2: any;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    addBulletList(a: any, b: any): void;
    deleteBulletList(): void;
    trackByFn(index: any): any;
    openModaltest(): void;
    onSubmit(): void;
    openDialog(x: any): void;
    resetserviceForm(): void;
    inputBlur(val: any): void;
    clear_image(index: any): void;
    clear_image2(): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}
