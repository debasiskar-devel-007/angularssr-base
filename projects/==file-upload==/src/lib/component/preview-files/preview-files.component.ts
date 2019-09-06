import { Component, OnInit, ViewChild, Input, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileUploadService } from '../../file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertMessageComponent } from '../alert-message/alert-message.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'lib-preview-files',
  templateUrl: './preview-files.component.html',
  styleUrls: ['./preview-files.component.css']
})

export class PreviewFilesComponent implements OnInit {

  public formData = new FormData();
  public files: any = [];
  public filesProcess: any = [];
  public configData: any;
  public totalFile: number = 0;
  public dialogRef: any;
  public uploadUrl: string = null;

  @Input()
  set allFiles(getFiles: any) {
    this.files = getFiles;
  }

  @Input()
  set filesUploadUrl(uploadUrl: any) {
    this.uploadUrl = uploadUrl;
  }

  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService,
    private ActivatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
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

    let url: any = this.uploadUrl + '&rand=' + index;

    this.fileUploadService.upload(url, postData).subscribe(
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

  showData() {
    console.log(this.files);
  }

}
