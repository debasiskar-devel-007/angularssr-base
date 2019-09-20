import { Component, OnInit, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { TestimonialService } from '../../testimonial.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {


  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Write testimonial...',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/


  //  ========================================Declaration Section======================================
  buttonText = "SUBMIT";
  testimonialForm: FormGroup;
  public loader: boolean = false;
  configData;
  successMessage: string = "Submitted Successfully";
  dialogRef: any;
  // ==================================================================================================


  constructor(private formBuilder: FormBuilder, private testiService: TestimonialService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.loader = false;
    this.generateForm();
    // --------------------------------checking the cases------------------------ 
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
        break;
    }
    // --------------------------------------------------------------------------

  }

  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  // =====================================Form Validation/generation===================================
  generateForm() {
    this.testimonialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
      )]],
      testimonial: ['', [Validators.required]],
      priority: ['', Validators.required],
      status: [true,],
      userId: [this.configData.userData.id, null]
    })
    
  }
  // =================================================================================================



  // ==========================================SUBMIT=================================================


  onSubmit() {
     this.testimonialForm.controls['testimonial'].markAsTouched();
    this.loader = true;
    /* stop here if form is invalid */
    if (this.testimonialForm.invalid) {
      return;
    } else {
      if (this.testimonialForm.value.status) {
        this.testimonialForm.value.status = parseInt("1");
      } else {
        this.testimonialForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.testimonialForm.value, this.configData.condition)
      };
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
    this.testimonialForm.setValue({
      name: defaultValue.name,
      email: defaultValue.email,
      testimonial: defaultValue.testimonial,
      priority: defaultValue.priority,
      status: defaultValue.status,
      userId: null
    });
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


  inputBlur(val: any) {
    this.testimonialForm.controls[val].markAsUntouched();
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
