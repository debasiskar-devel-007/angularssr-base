import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, MinLengthValidator, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: any = '';
  //   FormGroupDirective: It is a directive that binds an existing FormGroup to a DOM element.
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  public projectNameValue: any = '';
  public fullUrlValue: any = '';
  public signUpRouteingUrlValue: any = '';
  public forgetRouteingUrlValue: any = '';
  public routerStatusValue: any = '';

  @Input()         // Set the project name
  set projectName(projectNameVal: any) {
    this.projectNameValue = (projectNameVal) || '<no name set>';
    this.projectNameValue = projectNameVal;

  }

  @Input()        // setting the server url from project
  set fullUrl(fullUrlVal: any) {
    this.fullUrlValue = (fullUrlVal) || '<no name set>';
    this.fullUrlValue = fullUrlVal;

  }


  @Input()          // setting the navigate By Sign Up Url from project
  set signUpRouteingUrl(routeingUrlval: any) {
    this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.signUpRouteingUrlValue = routeingUrlval;
  }


  @Input()          // setting the navigate By Forget Password Url from project
  set forgetRouteingUrl(routeingUrlval: any) {
    this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.forgetRouteingUrlValue = routeingUrlval;
  }

  @Input()          // setting the navigate By Forget Password Url from project
  set routerStatus(routerStatusval: any) {
    this.routerStatusValue = (routerStatusval) || '<no name set>';
    this.routerStatusValue = routerStatusval;
    console.log(this.routerStatusValue);
    console.log(this.routerStatusValue.data.length);
  }




  public loginForm: FormGroup;
  public project_name: any = '';

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  loginFormSubmit() {
    let x: any;



    // use for validation checking

    for (x in this.loginForm.controls) {
      this.loginForm.controls[x].markAsTouched();
    }

    if (this.loginForm.valid) {
      let link: any = this.fullUrlValue;
      let data: any = this.loginForm.value;
      this.http.post(link, data).subscribe((response) => {
        let result: any = {};
        result = response;


        if (result.status == "success") {
          // for (let index = 0; index < this.routerStatusValue.data.length; index++) {
          //   // const element = array[index];
          //   console.log(index);

          // }
          for (const key in this.routerStatusValue.data) {
            console.log(this.routerStatusValue.data[key].type);

            if (result.type === this.routerStatusValue.data[key].type) {
              this.router.navigateByUrl('/' + this.routerStatusValue.data[key].routerNav)     // navigate to dashboard url 
            }
          }


          // this is use for reset the from
          this.formDirective.resetForm();
        } else {
          // display error message on html
          this.message = result.msg;
        }
      })
    }

  }


  inputUntouched(val: any) {
    this.loginForm.controls[val].markAsUntouched();
  }

  // This is use for navigate this component to forget component 
  forgetpassword() {
    this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
  }

  // This is use for navigate this component to sign-Up component 
  signup() {
    this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
  }

}
