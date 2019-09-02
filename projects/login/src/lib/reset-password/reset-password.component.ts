import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

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
  public message: any = '';
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
  public accesscode: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public route: ActivatedRoute) {

    this.route.params.subscribe(params =>{
     
      this.accesscode = params['token'];
      console.log(this.accesscode);
    })

    this.resetPasswordForm = this.fb.group({
      // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['',  Validators.required],
      confirmPassword: ['', Validators.required],
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
      let data : any = {"password":this.resetPasswordForm.value.password,"accesscode":this.accesscode}
      // data.accesscode = this.accesscode;

        let link: any = this.fullUrlValue;
        console.log(data)
        console.log(link)
      this.http.post(link, data).subscribe((response) => {
        let result: any = {};
        result = response;
        console.log(result);
        if (result.status == "success") {
          this.formDirective.resetForm();
        } else {
          this.message = result.msg;
        }
        
      })
    }
  }
  

  inputUntouched(val: any) {
    this.resetPasswordForm.controls[val].markAsUntouched();
  }




}
