import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public forgetPasswordForm: FormGroup;
  public projectNameValue: any = '';
  public fullUrlValue: any = '';
  public signUpRouteingUrlValue: any = '';


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

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
     
    })
   }

  ngOnInit() {
  }

  
  forgetPasswordSubmit() {
    console.log(this.forgetPasswordForm.value);
    let x: any;
    for(x in this.forgetPasswordForm.controls) {
      this.forgetPasswordForm.controls[x].markAsTouched();
    }
    if (this.forgetPasswordForm.valid) {
      
    }
  }

    // This is use for navigate this component to sign-Up component 
    signup() {
      this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    }
  

  inputUntouched(val: any) {
    this.forgetPasswordForm.controls[val].markAsUntouched();
  }

}
