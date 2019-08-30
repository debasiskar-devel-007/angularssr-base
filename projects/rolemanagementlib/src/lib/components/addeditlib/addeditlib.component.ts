import { Component, OnInit, Inject, Input, ViewChild, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from '../../services/app-api.services';
import { ActivatedRoute, Router } from '@angular/router';

export interface DialogData {
  msg: string;
}

@Component({
  selector: 'lib-addeditlib',
  templateUrl: './addeditlib.component.html',
  styleUrls: ['./addeditlib.component.css']
})


export class AddeditlibComponent implements OnInit {



  // ----------------declaration section-------------- 
  public roleForm: FormGroup;
  public usersData: any = null;
  public buttonText: any = 'Create';
  public configData: any;
  public loader: boolean = false;
  isSubmitted: boolean = false;
  dialogRef : any;
  public successMessage: string = 'Successfully Added';
// ---------------------------------------------- 


// Input receiving from add/edit app 
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }


  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    public dialog: MatDialog, public router: Router,
    private httpReq: ApiService, private activatedRoute: ActivatedRoute) {




  }

  //  ---------------------------------Modal function-----------------------
openDialog(x:any): void {
  this.dialogRef = this.dialog.open(Modal, {
    width: '250px',
    data: { msg : x }
  });

  this.dialogRef.afterClosed().subscribe(result => {
    
  });
}
// --------------------------------end of  modal---------------- 


  ngOnInit() {
    this.loader = false;

    /* Generate form */
    this.generateForm();

    /* Checking */
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "Create";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "Update";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.configData.defaultData);
        break;
    }


  }



  generateForm() {
    /* Category create form validation */
    this.roleForm = this.formBuilder.group({
      rolename: ['', Validators.required],
      roledesc: ['', Validators.required],
      status: ['',],
      userId: [this.configData.userData.id, null]
    });


  }

  resetRoleForm() {
    this.roleForm.reset();
  }

  /* Set default category form value */
  setDefaultValue(defaultValue) {
    this.roleForm.setValue({
      rolename: defaultValue.rolename,
      roledesc: defaultValue.roledesc,
      status: defaultValue.status,
      userId: null
    });
  }


  get onSignUpValidate() {
    return this.roleForm.controls;
  }

  inputBlur(val: any) {
    this.roleForm.controls[val].markAsUntouched();
  }


  onSubmit() {
    this.loader = true;
    this.isSubmitted = true;
    /* stop here if form is invalid */
    if (this.roleForm.invalid) {
      return;
    } else {
      if (this.roleForm.value.status) {
        this.roleForm.value.status = parseInt("1");
      } else {
        this.roleForm.value.status = parseInt("0");
      }
    }

    let postData: any = {
      source: this.configData.source,
      data: Object.assign(this.roleForm.value, this.configData.condition)
    };

    this.httpReq.addData(this.configData.endpoint, postData).subscribe((response: any) => {
      if (response.status == "success") {

        this.openDialog(this.successMessage);
         setTimeout(() => {
           this.dialogRef.close();
         }, 2000);
        this.router.navigate([this.configData.callBack]);
        
      } else {
        alert("Some error occured. Please try again.");
      }
    }, (error) => {
      alert("Some error occured. Please try again.");
    });
  }
}



// -----------Component declaration for Modal Class----------------
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}








