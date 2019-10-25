import { Component, OnInit, Input,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { ResourcelibService } from '../../resourcelib.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-addedit-resourceapp',
  templateUrl: './addedit-resourceapp.component.html',
  styleUrls: ['./addedit-resourceapp.component.css']
})
export class AddeditResourceappComponent implements OnInit {


  // =============================================Declarations=====================================
  header_name: any = "ADD";
  buttonText: any = "SUBMIT";
  resourceForm: FormGroup;
  loader: boolean = false;
  configData: any;
  successMessage: any = "Submitted Successfully";
  cat_array:any=[];
  dialogRef:any;
  // ==============================================================================================

  constructor(private formBuilder: FormBuilder, private resourceService: ResourcelibService,
    private router: Router,private cookieService : CookieService,public dialog: MatDialog) { }

  // ===========================================APP INPUT=====================================
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }
  // ============================================================================================


  


  ngOnInit() {
    this.loader = false;
    this.generateForm();
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.header_name = "ADD";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "EDIT";
        break;
    }
    this.getParentCategory();
  }


  // =============================================GENERATE FORM=================================
  generateForm() {
    this.resourceForm = this.formBuilder.group({
      category_name: ['',Validators.required],
      parent_category: ['',],
      description: ['',Validators.required],
      priority: ['',Validators.required],
      status: ['',]
    });
  }

  // ============================================================================================






  // ==========================================SUBMIT FUNCTION==========================================
  onSubmit() {


    // this.resourceForm.controls['testimonial'].markAsTouched();
    this.loader = true;
    /* stop here if form is invalid */
    if (this.resourceForm.invalid) {
      return;
    } else {
      if (this.resourceForm.value.status) {
        this.resourceForm.value.status = parseInt("1");
      } else {
        this.resourceForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.resourceForm.value, this.configData.condition)
      };
      this.resourceService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
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
  // =================================================================================================








  // ======================================GetParentCategory=============================
    
        getParentCategory()
        {
          let data: any = {
            "source": "resources",
            "token": this.cookieService.get('jwtToken')
          }
      
          this.resourceService.getData(this.configData.endpoint2+"/datalist", data).subscribe((response) => {
      
            let result: any = {};
            result = response;
            this.cat_array=result.res;
            console.log(this.cat_array);      
          });
        }
  // =============================================================================









  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.resourceForm.patchValue({
      category_name:defaultValue.category_name,
      parent_category:defaultValue.parent_category,
      description:defaultValue.description,
      priority:defaultValue.priority,
      status:defaultValue.status,
      userId: null,
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
