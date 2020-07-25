import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestimonialService } from '../../testimonial.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export interface DialogData {
    msg: string;
}
export interface PreviewDialog {
    msg: any;
}
export declare class AddeditComponent implements OnInit {
    private formBuilder;
    private testiService;
    private router;
    dialog: MatDialog;
    private sanitizer;
    /**ckeditor start here*/
    /**ckeditor end here*/
    buttonText: string;
    testimonialForm: FormGroup;
    loader: boolean;
    configData: any;
    testimonialAudio: any;
    successMessage: string;
    dialogRef: any;
    imageConfigData: any;
    ErrCode: boolean;
    flag: boolean;
    flag2: boolean;
    img_var: any;
    header_name: any;
    image_name: any;
    image_type: any;
    youtube_suffix: any;
    editorconfig: any;
    audioConfigData: any;
    constructor(formBuilder: FormBuilder, testiService: TestimonialService, router: Router, dialog: MatDialog, sanitizer: DomSanitizer);
    ngOnInit(): void;
    config: any;
    imageUpload: any;
    audioUpload: any;
    generateForm(): void;
    onSubmit(): void;
    setDefaultValue(defaultValue: any): void;
    openDialog(x: any): void;
    preview_video(): void;
    inputBlur(val: any): void;
    clear_image(): void;
    clear_audio(): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}
export declare class PreviewComponent {
    dialogRef: MatDialogRef<PreviewComponent>;
    data: PreviewDialog;
    private sanitizer;
    safeSrc: SafeResourceUrl;
    constructor(dialogRef: MatDialogRef<PreviewComponent>, data: PreviewDialog, sanitizer: DomSanitizer);
    onNoClick(): void;
}
