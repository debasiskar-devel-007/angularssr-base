import { Component, OnInit, ViewChild, Input, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileUploadService } from './file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { PreviewFilesComponent } from './component/preview-files/preview-files.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';



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
  public loading: boolean = false;
  public num: any = [];
  public filename: any;
  // image cropped section for test 
  filearray: any = [];
  imageChangedEvent: any = [];
  croppedImage: any = [];

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
    // console.log( '>>>>',this.configData,this.configData.aspectratio.length);

    for (let c in this.configData.aspectratio) {
      // console.log(this.configData.aspectratio[c])
      let val = this.configData.aspectratio[c];
      this.num[c] = val.toFixed(2);
      // console.log(this.num)


    }
  }





  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService,
    private ActivatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  /* Select File Proccess */
  selectFiles(event: any, ev1: any) {
    //this.fileChangeEvent(ev1);,
    console.log('>>>>event', event);
    console.log('>>>>ev1', ev1)

    // for(let i in ev1){
    this.filename = ev1;
    // }
    // setTimeout(() => {
    console.log(this.filename, '??')
    // }, 500);

    // this.imageChangedEvent=event;
    this.loading = true;
    for (let index = 0; index < event.length; index++) {
      var count: number = this.files.length;
      // console.log('>>>>count length',count)
      const element = event[index];
      // console.log('>>>>count element',element)

      for (let cc in this.configData.aspectratio) {

        // console.log('ev1',cc,ev1);
        if (this.imageChangedEvent[index] == null)
          this.imageChangedEvent[index] = [];
        this.imageChangedEvent[index][cc] = ev1;
      }

      // console.log(event, this.imageChangedEvent, 'img', ev1);

      /* Checking Validation */
      let validate: any = this.checkingValidation(element);
      if (validate.status) {
        element.valid = { status: true };
        element.upload = { status: 'selected' };
        element.viewUrl = 'https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif';
        this.files.push(element);
        this.viewFiles(count, element);
      } else {
        element.valid = { status: false, message: validate.message };
        element.upload = { status: 'selected' };
        element.viewUrl = null;
        let format = element.type.split("/");
        // format[1] = element.name.split('.')[1];

        let file_name = element.name;
        let str_no = element.name.lastIndexOf('.') + 1;
        format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);

        element.viewText = format[1];
        this.files.push(element);
      }
    }
  }




  viewFiles(count, element) {
    let format = element.type.split("/");
    if (format[0] == 'image') {
      var reader = new FileReader();
      let imagePath = this.files[count];
      reader.readAsDataURL(this.files[count]);
      reader.onload = (_event) => {
        let imgURL = reader.result;
        this.files[count].viewUrl = imgURL;
      }
    } else {
      this.files[count].viewUrl = null;
      // format[1] = element.name.split('.')[1];
      
      let file_name = element.name;
      let str_no = element.name.lastIndexOf('.') + 1;
      format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);

      this.files[count].viewText = format[1];
    }
  }

  /* Checking Validation */
  checkingValidation(element) {
    console.log(element, 'element++')
    let valid: any = { status: true, message: null };

    /* Checking File Format */
    // let format = element.type.split("/");
    let format = element.type.split("/");
    // format[1] = element.name.split('.')[1];

    let file_name = element.name;
    let str_no = element.name.lastIndexOf('.') + 1;
    format[1] = file_name.substring(file_name.indexOf(file_name) + str_no);
    console.log(file_name, 'file_name>>>')

    console.log(element.name, '??++f')

    console.log(format, 'format++')
    let check = this.configData.format.includes(format[1]);
    if (check == false) {
      valid.status = false;
      valid.message = format[1].toUpperCase() + " format not supported.";
      this.openSnackBar(format[1].toUpperCase() + " format not supported.", '');
      return valid;
    }

    /* Checking File size */
    if (element.size / 1000 > this.configData.size) {
      valid.status = false;
      valid.message = "File size too large. Maximum file size limit: " + this.configData.size + " KB.";
      this.openSnackBar("File size too large. Maximum file size limit: " + this.configData.size + " KB.", '');
      return valid;
    }

    if (valid.status == true) {
      return valid;
    }
  }

  /* File Upload Process */
  uploadAll(getIndex: any = null) {
    for (let index = 0; index < this.files.length; index++) {
      if (this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
        this.uploading(index);
      }
    }
  }



  /* Upload */
  uploading(index: any) {

    console.log(index, '/?', this.filename)
    var postData: any = {
      file: this.files[index],
      type: this.configData.type,
      path: this.configData.path,
      prefix: this.configData.prefix,
      uploadType: this.configData.uploadType,
      conversion_needed: this.configData.conversionNeeded,
      bucketname: this.configData.bucketName,
      basepath: this.configData.baseUrl + this.configData.bucketName
    }

    //-----------------------old media server upload-------------------//
    var url: string = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
    this.fileUploadService.upload(url, postData).subscribe(
      (response) => {
        let result: any = response;
        switch (result.status) {
          case 'complete':
            this.files[index].upload = result;
            this.configData.files = this.files;
            this.openSnackBar('Successfully Uploaded !!', 'Undo');
            break;
          case 'error':
            this.files[index].upload = result.data;
            this.openSnackBar(result.data, '');
            break;
          default:
            this.files[index].upload = result;
            break;
        }
      }, (err) => {
        this.files[index] = { status: 'error' };
        this.openSnackBar('An error occurred !!', 'Retry');
      });
    //-----------------------old-------------------//


    //----------------New direct bucket upload------------//
    //   const val = this.filename[0];

    //   console.log(val.name)

    //   this.filearray.push(val);

    //   const reader = new FileReader();
    //   const file: any = val.name;
    //   let temploader = this.filename;

    //   console.log(reader);
    //   console.log(file,'//',this.filename);

    //   reader.onloadend = (e) => {
    //     fetch(this.configData.baseUrl, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         postData
    //       })
    //     })
    //     .then(function(response) {
    //       console.log('buck', response);
    //       return response.json();
    //     })
    //     .then(function(json) {
    //       return fetch(json.uploadURL, {
    //         method: 'PUT',
    //         body: new Blob([reader.result], { type: this.configData.type })
    //       });
    //     })
    //     .then(function() {
    //       // return 'success';
    //       // file.uploaded = 1;
    //       file.fileservername = this.configData.prefix + this.filename;
    //       // console.log(file.type, 'file.type');
    //       // temploader = null;
    //       // var uploadedFileNode = document.createElement('div');
    //       // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
    //       // list.appendChild(uploadedFileNode);
    //     });
    //   };
    //   // reader.readAsArrayBuffer(file);

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

  /* Snack Bar */name
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
    this.openDialog();
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.files.splice(0, this.files.length);
        this.openSnackBar('Successfully Remove !!', '');
      }
    });
  }

  /* Preview Files */
  previewFiles(index) {
    var mimeType = this.files[index].type;
    if (mimeType.match(/image\/*/) == null) {
      this.openSnackBar('Preview not supported.', '');
      return;
    }

    var reader = new FileReader();
    let imagePath = this.files[index];
    reader.readAsDataURL(this.files[index]);
    reader.onload = (_event) => {
      let imgURL = reader.result;
      const dialogRef = this.dialog.open(PreviewFilesComponent, {
        data: { imgURL: imgURL }
      });
    }
  }








  fileChangeEvent(event) {
    // console.log('fileChangeEvent', event)
    this.imageChangedEvent = event;
    console.log('fileChangeEvent', event)


  }
  imageCropped(event: ImageCroppedEvent, i: any) {
    // console.log('>>>>>>>>>',event,i)
    this.croppedImage[i] = event.base64;
    console.log('imageCropped', this.croppedImage);
    this.configData.croppedfiles = this.croppedImage;
    // console.log('imageCr..> ',   this.configData.croppedfiles);

  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  // getdata(){
  //   console.log(this.configData)
  // }







}
