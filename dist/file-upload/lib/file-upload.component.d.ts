import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploadService } from './file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
export declare class FileUploadComponent implements OnInit {
    private formBuilder;
    private fileUploadService;
    private ActivatedRoute;
    private router;
    private _snackBar;
    dialog: MatDialog;
    formData: FormData;
    files: any;
    filesProcess: any;
    configData: any;
    totalFile: number;
    dialogRef: any;
    loading: boolean;
    imgResultBeforeCompress: string;
    imgResultAfterCompress: string;
    config: any;
    constructor(formBuilder: FormBuilder, fileUploadService: FileUploadService, ActivatedRoute: ActivatedRoute, router: Router, _snackBar: MatSnackBar, dialog: MatDialog);
    ngOnInit(): void;
    selectFiles(event: any): void;
    viewFiles(count: any, element: any): void;
    checkingValidation(element: any): any;
    uploadAll(getIndex?: any): void;
    uploading(index: any): void;
    removeFiles(index?: any): void;
    name: any;
    openSnackBar(message: string, action: string): void;
    openDialog(): void;
    deleteAll(): void;
    previewFiles(index: any): void;
}
