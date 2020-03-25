import { Component, OnInit, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { TestimonialService } from '../../testimonial.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { tick } from '@angular/core/src/render3';


export interface DialogData {
  msg: string;
}
export interface PreviewDialog {
  msg: any;
}

@Component({
  selector: 'lib-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {


  /**ckeditor start here*/
  // public Editor = ClassicEditor;  //for ckeditor
  // editorConfig = {
  //   placeholder: 'Write testimonial...',
  // };
  // public model = {
  //   editorData: ''
  // };
  /**ckeditor end here*/


  //  ========================================Declaration Section======================================
  public buttonText = "SUBMIT";
  public testimonialForm: FormGroup;
  public loader: boolean = false;
  public configData;
  public testimonialAudio: any;
  public successMessage: string = "Submitted Successfully";
  public dialogRef: any;
  public imageConfigData: any;
  public ErrCode: boolean = false;
  public flag: boolean;
  public flag2: boolean = false;
  public img_var: any;
  public header_name: any;
  public image_name: any;
  public image_type: any;
  public youtube_suffix: any = "https://www.youtube.com/embed/";
  public editorconfig: any = {};
  public audioConfigData: any;

  // ==================================================================================================


  constructor(private formBuilder: FormBuilder, private testiService: TestimonialService,
    private router: Router, public dialog: MatDialog, private sanitizer: DomSanitizer) {
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
  }

  ngOnInit() {
    this.loader = false;
    this.generateForm();
    // --------------------------------checking the cases------------------------ 
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.flag = false;
        this.header_name = "Add Testimonial";
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
    // --------------------------------------------------------------------------

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
  set audioUpload(getConfig: any) {
    this.audioConfigData = getConfig;
    //console.warn(getConfig);
  }

  // =====================================Form Validation/generation===================================
  generateForm() {
    this.testimonialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
      )]],
      description: ['', [Validators.required]],
      priority: ['', Validators.required],
      status: [true,],
      testimonial_img: ['',],
      video_url: [null],
      video_name: [],
      video_desc: [],
      testimonial_audio: [null],
      userId: [this.configData.userData.id, null]
    })

  }
  // =================================================================================================



  // ==========================================SUBMIT=================================================


  onSubmit() {
    // Testimonial File Upload Works 
    if (this.imageConfigData.files) {

      if (this.imageConfigData.files.length > 1) { this.ErrCode = true; return; }
      this.testimonialForm.value.testimonial_img =
      {
        "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
        "image": this.imageConfigData.files[0].upload.data.data.fileservername,
        "name": this.imageConfigData.files[0].name,
        "type": this.imageConfigData.files[0].type
      };
    }


    // Testimonial audio Upload Works 
    if (this.audioConfigData.files) {

      if (this.audioConfigData.files.length > 1) { this.ErrCode = true; return; }
      this.testimonialForm.value.testimonial_audio =
      {
        "basepath": this.audioConfigData.files[0].upload.data.basepath + '/' + this.audioConfigData.path + '/',
        "audio": this.audioConfigData.files[0].upload.data.data.fileservername,
        "name": this.audioConfigData.files[0].name,
        "type": this.audioConfigData.files[0].type
      };
    }

    this.testimonialForm.controls['description'].markAsTouched();
    this.loader = true;
    /* stop here if form is invalid */
    if (this.testimonialForm.invalid) {
      return;
    } else {
      if (this.testimonialForm.value.status) {
        this.testimonialForm.value.status = 1;
      } else {
        this.testimonialForm.value.status = 0;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.testimonialForm.value, this.configData.condition)
      };
     // console.warn(postData);
      this.testiService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
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
  // =================================================================================================




  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    //console.warn("defauiltvalue",defaultValue);
    this.testimonialForm.patchValue({
      name: defaultValue.name,
      email: defaultValue.email,
      description: defaultValue.description,
      priority: defaultValue.priority,
      status: defaultValue.status,
      userId: null,
      testimonial_img: defaultValue.testimonial_img,
      video_url: defaultValue.video_url,
      video_name: defaultValue.video_name,
      video_desc: defaultValue.video_desc,
      testimonial_audio: defaultValue.testimonial_audio
    });
    this.img_var = defaultValue.testimonial_img.basepath + defaultValue.testimonial_img.image;
    this.image_name = defaultValue.testimonial_img.name;
    this.image_type = defaultValue.testimonial_img.type;
    if (defaultValue.testimonial_audio != null) {
      this.flag2 = true;
      this.testimonialAudio = defaultValue.testimonial_audio.basepath + defaultValue.testimonial_audio.audio;
    }

    //console.log(">>>",this.img_var);
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
  // =====================================================================================================



  //  =====================preview video================
  preview_video() {
    this.dialogRef = this.dialog.open(PreviewComponent, {
      width: '850px',
      height: '500px',

      data: { msg: this.youtube_suffix + this.testimonialForm.value.video_url }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // ===================================================




  inputBlur(val: any) {
    this.testimonialForm.controls[val].markAsUntouched();
  }





  // ==========================================Clear MAT tag===================================
  clear_image() {
    this.flag = false;
  }
  // ========================================================================================
  clear_audio() {
    this.flag2 = false;
    this.testimonialForm.controls['testimonial_audio'].setValue('');
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



// preview cmponent

@Component({
  selector: 'app-modal',
  templateUrl: 'preview.html',
})
export class PreviewComponent {
  safeSrc: SafeResourceUrl;
  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewDialog, private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.msg);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}