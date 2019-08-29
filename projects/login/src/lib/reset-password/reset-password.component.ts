import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  public resetPasswordForm: FormGroup;
  public fromTitleNameValue: any = '';
  public fullUrlValue: any = '';
  // public signUpRouteingUrlValue: any = '';


  @Input()         // Set the project name
  set fromTitleName(fromTitleNameVal: any) {
    this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
    this.fromTitleNameValue = fromTitleNameVal;
    console.log(this.fromTitleNameValue);

  }

  @Input()        // setting the server url from project
  set fullUrl(fullUrlVal: any) {
    this.fullUrlValue = (fullUrlVal) || '<no name set>';
    this.fullUrlValue = fullUrlVal;
    console.log(this.fullUrlValue);

  }

  // @Input()          // setting the navigate By Sign Up Url from project
  // set signUpRouteingUrl(routeingUrlval: any) {
  //   this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
  //   this.signUpRouteingUrlValue = routeingUrlval;
  //   console.log(this.signUpRouteingUrlValue);
  // }

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
    }, {
      validator: this.machpassword('password', 'confirmPassword')
    })
   }

  ngOnInit() {
  }
//  this function is use for mach password and confirm Password 
  machpassword(passwordkye: string, confirmpasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordkye],
          confirmpasswordInput = group.controls[confirmpasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({notEquivalent: true});
      }
      else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  }

  
  resetPasswordSubmit() {
    console.log(this.resetPasswordForm.value);
    let x: any;
    for(x in this.resetPasswordForm.controls) {
      this.resetPasswordForm.controls[x].markAsTouched();
    }
    if (this.resetPasswordForm.valid) {
      let data: any = this.resetPasswordForm.value;
        let link: any = this.fullUrlValue;
      this.http.post(link, data).subscribe((response) => {
        let result: any = {};
        result = response;
        
      })
    }
  }
  

  inputUntouched(val: any) {
    this.resetPasswordForm.controls[val].markAsUntouched();
  }




}