import { Component, OnInit, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-addedit-service',
  templateUrl: './addedit-service.component.html',
  styleUrls: ['./addedit-service.component.css']
})
export class AddeditServiceComponent implements OnInit {





  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Write description...',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/



  // ===========================================Declaration section================================
  serviceForm: FormGroup;
  loader: boolean = false;
  configData: any;
  imageConfigData: any;
  buttonText = "SUBMIT";
  successMessage: string = "Submitted Successfully";
  dialogRef: any;
  img_arr: any = [];
  ErrCode: boolean = false;
  flag: boolean;
  img_var: any;
  header_name: any;
  image_name: any;
  image_type: any;
  // ==============================================================================================



  constructor(private formBuilder: FormBuilder, private servicehttp: ServicelibService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.loader = false;
    this.generateForm();

    if (this.configData.action != 'edit')
      this.addBulletList('', '');


    // =========================================SWITCH CASES==========================================
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.flag = false;
        this.header_name = "ADD";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "EDIT";
        this.flag = true;
        break;
    }
    // ===============================================================================================

  }


  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
  }




  // =============================================form generation====================================
  generateForm() {
    this.serviceForm = this.formBuilder.group({
      service_title: ['', [Validators.required]],
      service_desc: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: [true,],
      bulletarr: this.formBuilder.array([]),
      service_img: ['',],
      userId: ['',]
    });
  }
  // =================================================================================================





  // ===============================================Default value======================================
  setDefaultValue(defaultValue) {

    defaultValue.bulletarr.forEach(element => {
      this.addBulletList(element.bullet_title, element.bullet_desc);
    });

    this.serviceForm.patchValue({
      service_title: defaultValue.service_title,
      service_desc: defaultValue.service_desc,
      priority: defaultValue.priority,
      status: defaultValue.status,
      service_img: defaultValue.service_img,
      userId: null
    });
    this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
    this.image_name = defaultValue.service_img.name;
    this.image_type = defaultValue.service_img.type
  }
  // ==================================================================================================









  // ==========================================FORM ARRAY FUNCTIONS===================================
  addBulletList(a: any, b: any) {
    const bl = this.serviceForm.controls.bulletarr as FormArray;
    bl.push(this.formBuilder.group({
      bullet_title: [a],
      bullet_desc: [b],
    }));
  }

  deleteBulletList() {
    const bl = this.serviceForm.controls.bulletarr as FormArray;
    bl.removeAt(1);
  }


  trackByFn(index) {
    return index;
  }
  // ==================================================================================================


  // ================================================SUBMIT============================================
  onSubmit() {
    // Service File Upload Works 
    if (this.imageConfigData.files) {

      if (this.imageConfigData.files.length > 1) { this.ErrCode = true; return; }
      this.serviceForm.value.service_img =
        {
          "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
          "image": this.imageConfigData.files[0].upload.data.data.fileservername,
          "name": this.imageConfigData.files[0].name,
          "type": this.imageConfigData.files[0].type
        };
    } else {
      this.serviceForm.value.service_img = false;
    }


    this.loader = true;
    this.serviceForm.controls['service_desc'].markAsTouched();
    if (this.serviceForm.invalid) {
      return;
    } else {
      if (this.serviceForm.value.status) {
        this.serviceForm.value.status = parseInt("1");
      } else {
        this.serviceForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.serviceForm.value, this.configData.condition)
      };
      this.servicehttp.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }

  }
  // ================================================================================================== 



  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal, {
      width: '250px',
      data: { msg: x }
    });
    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  // =================================================================================================



  resetserviceForm() {
    this.serviceForm.reset();
  }

  inputBlur(val: any) {
    this.serviceForm.controls[val].markAsUntouched();
  }

  // ================================================================================================
  clear_image() {
    this.flag = false;
  }
  // ================================================================================================
}










// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================
