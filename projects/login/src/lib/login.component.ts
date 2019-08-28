import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public projectNameValue: any = '';
  public fullUrlValue: any = '';
  public signUpRouteingUrlValue: any = '';
  public forgetRouteingUrlValue: any = '';

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


  @Input()          // setting the navigate By Sign Up Url from project
  set signUpRouteingUrl(routeingUrlval: any) {
    this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.signUpRouteingUrlValue = routeingUrlval;
    console.log(this.signUpRouteingUrlValue);
  }


  @Input()          // setting the navigate By Forget Password Url from project
  set forgetRouteingUrl(routeingUrlval: any) {
    this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.forgetRouteingUrlValue = routeingUrlval;
    console.log(this.forgetRouteingUrlValue);
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
    console.log(this.loginForm.value);
    let x: any;         
    
    // use for validation checking

    for(x in this.loginForm.controls) {
      this.loginForm.controls[x].markAsTouched();
    }
    
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      let link: any = this.fullUrlValue;
      let data: any = this.loginForm.value;
      console.log(link)
      console.log(data)
      this.http.post(link, data).subscribe((response) => {
        let result: any = {};
        result = response;
        console.log(result);
      })
    }

  }

 
  inputUntouched(val: any) {
    console.log('ok----');
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
