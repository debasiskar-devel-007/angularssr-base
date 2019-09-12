import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';



export interface DialogData {
  name: string;
}

@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public message: any = '';
  
  //   FormGroupDirective: It is a directive that binds an existing FormGroup to a DOM element.
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective; 
  
  public projectNameValue: any = '';
  public fullUrlValue: any = '';
  public forgetRouteingUrlValue: any = '';
  public loginRouteingUrlValue: any = '';

  @Input()         // Set the project name
  set projectName(projectNameVal: any) {
    this.projectNameValue = (projectNameVal) || '<no name set>';
    this.projectNameValue = projectNameVal;
    console.log(this.projectNameValue);

  }

  @Input()        // setting the server url from project
  set fullUrl(fullUrlVal: any) {
    this.fullUrlValue = (fullUrlVal) || '<no name set>';
    this.fullUrlValue = fullUrlVal;
    console.log(this.fullUrlValue);

  }

  @Input()          // setting the navigate By Forget Password Url from project
  set forgetRouteingUrl(routeingUrlval: any) {
    this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.forgetRouteingUrlValue = routeingUrlval;
    console.log(this.forgetRouteingUrlValue);
  }

  @Input()          // setting the navigate By login Url from project
  set loginRouteingUrl(routeingUrlval: any) {
    this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.loginRouteingUrlValue = routeingUrlval;
    console.log(this.loginRouteingUrlValue);
  }



  public signUpForm: FormGroup;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public dialog: MatDialog) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  signUpFormSubmit() {
      // use for validation checking
    for (let x in this.signUpForm.controls) {
      this.signUpForm.controls[x].markAsTouched();
    }
    if (this.signUpForm.valid) {
      let link: any = this.fullUrlValue;
      let data: any = {'data':this.signUpForm.value,"source":'usermanagement'};
      console.log(data);
      this.http.post(link, data).subscribe((response) =>{
        let result: any = {};
        result = response;
        console.log(result);
       
        if (result.status == "success") {
          // this.router.navigateByUrl('/' + )     // navigate to dashboard url 


          // this is use for reset the from
          this.formDirective.resetForm();
        } else{
          // display error message on html
          this.message = result.msg;
        }
      })
    }
  }

  // This is use for navigate this component to forget component 
  forgetpassword() {
    this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
  }


  // This is use for navigate this component to forget component 
  login() {
    this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
  }

  inputUntouched(val: any) {
    this.signUpForm.controls[val].markAsUntouched();
  }
}


  @Component({
    selector: 'commonModal',
    templateUrl: '../commonModal/commonModal.html',

  })
  export class commonModalComponent {
  
    constructor(
      public dialogRef: MatDialogRef<commonModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }


