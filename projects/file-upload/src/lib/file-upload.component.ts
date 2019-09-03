import { Component, OnInit, ViewChild, Input, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileUploadService } from './file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'lib-file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['style.css']
})

export class FileUploadComponent implements OnInit {

  public formData = new FormData();
  public files: any = [];
  public filesProcess: any = [];
  public configData: any;
  public totalFile: number = 0;
  public dialogRef: any;

  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService,
    private ActivatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  /* Select File Proccess */
  selectFiles(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      /* Checking Validation */
      let validate: any = this.checkingValidation(element);
      if (validate.status) {
        element.valid = { status: true };
        element.upload = { status: 'selected' };
        this.files.push(element);
      } else {
        element.valid = { status: false, message: validate.message };
        element.upload = { status: 'selected' };
        this.files.push(element);
      }
    }
  }

  /* Checking Validation */
  checkingValidation(element) {
    let valid: any = { status: true, message: null };

    /* Checking File Format */
    let format = element.type.split("/");
    let check = this.configData.format.includes(format[1]);
    if (check == false) {
      valid.status = false;
      valid.message = format[1] + " format not supported.";
      return valid;
    }

    /* Checking File size */
    if (element.size / 1000 > this.configData.size) {
      valid.status = false;
      valid.message = "File size too large. Maximum file size limit: " + this.configData.size + " KB.";
      return valid;
    }

    if (valid.status == true) {
      return valid;
    }
  }

  /* File Upload Process */
  uploadAll(getIndex: any = null) {
    for (let index = 0; index < this.files.length; index++) {
      if(this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
        this.uploading(index);
      }
    }
  }

  /* Upload */
  uploading(index) {
    let postData: any = {
      file: this.files[index],
      type: "bulk-upload",
      path: "files",
      prefix: "image_"
    }

    this.fileUploadService.upload(this.configData.baseUrl + this.configData.endpoint, postData).subscribe(
      (response) => {
        let result: any = response;
        switch (result.status) {
          case 'complete':
            this.files[index].upload = result;
            this.openSnackBar('Successfully Uploaded !!', 'Undo');
            break;
          default:
            this.files[index].upload = result;
            break;
        }
      }, (err) => {
        this.files[index] = { status: 'error' };
        this.openSnackBar('An error occurred !!', 'Retry');
      }
    );
  }

  /* Remove Files */
  removeFiles(index: any = null) {
    this.openDialog();
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.files.splice(index, 1);
        this.openSnackBar('Successfully Remove !!', '');
      }
    });
  }

  /* Snack Bar */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /* Dialog Box */
  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: { message: "Message" }
    });
  }

  /* Delete all selected files */
  deleteAll() {
    this.files.splice(0, this.files.length);
  }

}
