import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-addedit-service',
  templateUrl: './addedit-service.component.html',
  styleUrls: ['./addedit-service.component.css']
})
export class AddeditServiceComponent implements OnInit {



  // public editorData = '<p>Write description...</p>';

  /**ckeditor for descripiton start here*/
  // public Editor = ClassicEditor;
  // editorConfig = {
  //   placeholder: 'Write description...',
  // };
  // public model = {
  //   editorData: ''
  // };


 /** ckeditor for additional description **/
  // public Editor2 = ClassicEditor;  //for ckeditor
  // editorConfig2 = {
  //   placeholder: 'Please provide additional details...',
  // };
  // public model2 = {
  //   editorData: ''
  // };
  /**ckeditor end here*/



  // ===========================================Declaration section================================
  serviceForm: FormGroup;
  loader: boolean = false;
  configData: any;
  imageConfigData: any;
  buttonText = "SUBMIT";
  successMessage: string = "Service Added!!!";
  dialogRef: any;
  img_arr: any = [];
  ErrCode: boolean = false;
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
  ErrCode2:boolean = false;
  img_missing: boolean = false;
  public editorconfig : any = {};
  public images_array:any=[];
  public setData: any;
  public images_array_edit:any=[];
  // ==============================================================================================



  constructor(private formBuilder: FormBuilder, private servicehttp: ServicelibService,
    private router: Router, public dialog: MatDialog , public cookieService : CookieService) { 
      this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
    }

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
        this.flag2 = false;
        this.header_name = "Add Service";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "Service Edited!!!";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "Edit Service";
        this.flag = true;
        this.flag2 = true;
        if (this.configData.defaultData.additional_img == false)
          this.flag2 = false;
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
  @Input()
  set imageUpload2(getConfig2: any) {
    this.imageConfigData2 = getConfig2;
  }



  // =============================================form generation====================================
  generateForm() {
    this.serviceForm = this.formBuilder.group({
      service_title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      additional_details:[''],
      priority: ['', [Validators.required]],
      status: [true,],
      bulletarr: this.formBuilder.array([]),
      service_img: [''],
      additional_img: ['']
    });
  }
  // =================================================================================================





  // ===============================================Default value======================================
  setDefaultValue(defaultValue) {
    console.log('>>',defaultValue)
    this.setData=defaultValue

    defaultValue.bulletarr.forEach(element => {
      this.addBulletList(element.bullet_title, element.bullet_desc);
    });

    this.serviceForm.patchValue({
      service_title: defaultValue.service_title,
      description: defaultValue.description,
      additional_details: defaultValue.additional_details,
      priority: defaultValue.priority,
      status: defaultValue.status,
      service_img: defaultValue.service_img,
      additional_img: defaultValue.additional_img,
    });
    /** Service image **/
    // this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
    // this.image_name = defaultValue.service_img.name;
    // this.image_type = defaultValue.service_img.type

    /*Image works*/
        for (let i = 0; i < defaultValue.service_img.length; i++) {
          this.img_var = defaultValue.service_img[i].basepath + defaultValue.service_img[i].image;
          this.image_name = defaultValue.service_img[i].name;
          this.image_type = defaultValue.service_img[i].type;
          this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
          this.images_array.push({
            "basepath": defaultValue.service_img[i].basepath,
            "image": defaultValue.service_img[i].image,
            "name": defaultValue.service_img[i].name,
            "type": defaultValue.service_img[i].type
          });
        }

    /** Additional image **/
    this.img_var2 = defaultValue.additional_img.basepath + defaultValue.additional_img.image;
    this.image_name2 = defaultValue.additional_img.name;
    this.image_type2 = defaultValue.additional_img.type
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
  openModaltest(){
    this.openDialog('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');
  }

  // ================================================SUBMIT============================================
  onSubmit() {
   
      /** marking as untouched **/
      for (let x in this.serviceForm.controls) {
        this.serviceForm.controls[x].markAsTouched();
      }

 
    // Service File Upload Works 
    // if (this.imageConfigData.files) {

    //   if (this.imageConfigData.files.length > 1) { this.ErrCode = true;this.img_missing = false; return; }

    //   this.serviceForm.value.service_img =
    //     {
    //       "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
    //       "image": this.imageConfigData.files[0].upload.data.data.fileservername,
    //       "name": this.imageConfigData.files[0].name,
    //       "type": this.imageConfigData.files[0].type
    //     };
    //     this.img_missing = false;
    // } else {

    //   if( this.serviceForm.value.service_img == null ||  this.serviceForm.value.service_img == '')
    //   {
    //   this.img_missing = true;
    //   this.ErrCode = false;
    //   }
    // }

    /*__________________________IMAGE UPLOADER________________________________________*/
    if (this.imageConfigData) {
      // console.log("image path",this.imageConfigData);
      for (const loop in this.imageConfigData.files) {
        this.images_array =
          this.images_array.concat({
            "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
            "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
            "name": this.imageConfigData.files[loop].name,
            "type": this.imageConfigData.files[loop].type
          });
      }
      this.serviceForm.value.service_img = this.images_array;
    } else {
      this.serviceForm.value.service_img = false;
    }







    /** Additional Image  **/
    if (this.imageConfigData2.files) {
      //console.log("length",this.imageConfigData2.files.length); 
      if (this.imageConfigData2.files.length > 1) { this.ErrCode2 = true; return; }
      this.serviceForm.value.additional_img =
        {
          "basepath": this.imageConfigData2.files[0].upload.data.basepath + '/' + this.imageConfigData2.path + '/',
          "image": this.imageConfigData2.files[0].upload.data.data.fileservername,
          "name": this.imageConfigData2.files[0].name,
          "type": this.imageConfigData2.files[0].type
        };
    }


    for (let i in this.serviceForm.controls) {
      this.serviceForm.controls[i].markAsTouched();
    }

    this.loader = true;
     if(this.img_missing==true){return;}
    if (this.serviceForm.invalid) {
      return;
    } else {
      if (this.serviceForm.value.status) {
        this.serviceForm.value.status = 1;
      } else {
        this.serviceForm.value.status =0;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.serviceForm.value, this.configData.condition),
        token: this.configData.jwtToken
      };
      this.servicehttp.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 3000);
          this.router.navigateByUrl(this.configData.callBack);
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
      data: { msg: x },
      panelClass:'success_modal_service'
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
  // clear_image() {
  //   this.flag = false;
  //   this.img_missing = true;
  // }
  clear_image(index:any) {
    this.images_array.pop(this.setData.service_img[index]);
    this.images_array_edit.splice(index, 1);
  }

  clear_image2() {
    this.flag2 = false;
    this.serviceForm.value.additional_img = false;
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
