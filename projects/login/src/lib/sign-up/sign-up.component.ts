import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
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
    console.log(this.signUpForm.value);
    for (let x in this.signUpForm.controls) {
      this.signUpForm.controls[x].markAsTouched();
    }
    if (this.signUpForm.valid) {

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
