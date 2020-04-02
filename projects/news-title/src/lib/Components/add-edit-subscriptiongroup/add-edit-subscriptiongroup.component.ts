import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-add-edit-subscriptiongroup',
  templateUrl: './add-edit-subscriptiongroup.component.html',
  styleUrls: ['./add-edit-subscriptiongroup.component.css']
})
export class AddEditSubscriptiongroupComponent implements OnInit {


  // =======================declaratiosn=====================
  subGroupForm: FormGroup;
  buttonText: any = "SUBMIT";
  header_name: any = "Add a group to subscriptions";
  configData: any;
  group_array: any = [];
  dialogRef: any;
  successMessage: any = "Subscription Added Successfully..!!!";
  // ========================================================


  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private newsService: NewsTitleService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {

    //generating the form
    this.generateForm();

    //getting the group
    this.getGroup();

    //Switch Case starts here

    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.header_name = "Add a Group";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "Subscription Updated Successfully..!!!";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "Change/Remove Group";
        break;
    }


  }

  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }


  // =====================generate form==============
  generateForm() {
    this.subGroupForm = this.formBuilder.group({
      fullname: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      company: ['',[Validators.required]],
      group: [],
      status:[]
    });
  }
  // ================================================

  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.subGroupForm.patchValue({
      fullname: defaultValue.fullname,
      phone: defaultValue.phone,
      email: defaultValue.email,
      company: defaultValue.company,
      group: defaultValue.group,
      status:defaultValue.status
    });

  }
  // ==================================================================================================



  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal2, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================




   /** blur function **/
   inputBlur(val: any) {
    this.subGroupForm.controls[val].markAsUntouched();
  }



  // ==========================================SUBMIT=================================================


  onSubmit() {


     /** marking as untouched **/
     for (let x in this.subGroupForm.controls) {
      this.subGroupForm.controls[x].markAsTouched();
    }


        /* stop here if form is invalid */
  
          if (this.subGroupForm.value.status) {
            this.subGroupForm.value.status = parseInt("1");
          } else {
            this.subGroupForm.value.status = parseInt("0");;
          }
        

    // if (this.subGroupForm.value.group == 0)
    //   this.successMessage = "Removed Group!!!";    
    /* stop here if form is invalid */
    if (this.subGroupForm.invalid) {
      return;
    } else {

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.subGroupForm.value, this.configData.condition)
      };
      this.newsService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
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

  //Getting the parent category
  getGroup() {
    let postData: any = {
      source: this.configData.group,
      token: this.cookieService.get('jwtToken')

    };
    this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((response: any) => {
      this.group_array = response.res;
    })
  }


}


// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal2.html',
})
export class Modal2 {

  constructor(
    public dialogRef: MatDialogRef<Modal2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================
