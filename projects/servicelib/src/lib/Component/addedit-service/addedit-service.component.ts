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



  // ===========================================declaration section================================
  serviceForm: FormGroup;
  loader: boolean = false;
  configData: any;
  imageConfigData: any;
  buttonText = "SUBMIT";
  successMessage: string = "Submitted Successfully";
  dialogRef: any;
  flag: boolean = false;
  img_arr:any = [];
  // ==============================================================================================



  constructor(private formBuilder: FormBuilder, private servicehttp: ServicelibService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.loader = false;
    this.generateForm();

    if (this.configData.action != 'edit')
      this.addBulletList('', '');


    // ============================================SWITCH CASES==========================================
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.configData.defaultData);
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
      service_img:['',],
      userId: ['',]
    });
  }
  // =================================================================================================





  // ================================================Default value======================================
  setDefaultValue(defaultValue) {

    defaultValue.bulletarr.forEach(element => {
      this.addBulletList(element.bullet_title, element.bullet_desc);
    });

    this.serviceForm.patchValue({
      service_title: defaultValue.service_title,
      service_desc: defaultValue.service_desc,
      priority: defaultValue.priority,
      status: defaultValue.status,
      
      userId: null
    });
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
    if(this.imageConfigData.files) {
      for(let loop = 0; loop < this.imageConfigData.files.length; loop++ ) {
        this.img_arr.push(this.imageConfigData.files[loop].name);
        this.serviceForm.value.service_img = this.img_arr;
      }
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
        console.log(response);
        if (response.status == "success") {
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
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



  resetserviceForm(){
      this.serviceForm.reset();
  }

  inputBlur(val: any) {
    this.serviceForm.controls[val].markAsUntouched();
  }
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
