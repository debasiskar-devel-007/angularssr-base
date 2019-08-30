import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
      if(element.size / 1000 <= this.configData.size) {
        element.error = false;
        this.files.push(element);
        this.filesProcess.push({ status: 'pending' });
      } else {
        element.error = true;
        element.errorMessage = "File not supported.";
        this.files.push(element);
        this.filesProcess.push({ status: 'pending' });
      }
    }
  }

  /* File Upload Process */
  startUploadProcess(getIndex: any = null) {
    if (getIndex == null) {
      for (let index = 0; index < this.files.length; index++) {
        this.uploading(index);
      }
    } else {
      this.uploading(getIndex);
    }
  }

  /* Upload */
  uploading(index) {
    this.fileUploadService.upload(this.files[index]).subscribe(
      (response) => {
        let result: any = response;
        switch(result.status) {
          case 'complete':
            this.filesProcess[index] = result;
            this.openSnackBar('Successfully Uploaded !!', 'Undo');
            break;
          default:
            this.filesProcess[index] = result;
            break;
        }
      }, (err) => {
        this.filesProcess[index] = { status: 'error' };
        this.openSnackBar('An error occurred !!', 'Retry');
      }
    );
  }

  /* Remove Files */
  removeFiles(index: any = null) {
    this.openDialog();
    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.files.splice(index, 1);
        this.openSnackBar('Successfully Remove !!', 'Undo');
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

}
