import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public message: any = '';

  //   FormGroupDirective: It is a directive that binds an existing FormGroup to a DOM element.
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  public forgetPasswordForm: FormGroup;
  public projectNameValue: any = '';
  public fullUrlValue: any = '';
  public signUpRouteingUrlValue: any = '';
  private domanUrlValue: any = '';


  @Input()         // Set the project Doman URL
  set domanUrl(domanUrlVal: any) {
    this.domanUrlValue = (domanUrlVal) || '<no name set>';
    this.domanUrlValue = domanUrlVal;
    console.log(this.domanUrlValue);

  }
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

  constructor(public fb: FormBuilder, private http: HttpClient, public router: Router) {

  

    this.forgetPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],

    });
  


  
  }

  ngOnInit() {
  }


  forgetPasswordSubmit() {
    let x: any;
    for (x in this.forgetPasswordForm.controls) {
      this.forgetPasswordForm.controls[x].markAsTouched();
    }
    if (this.forgetPasswordForm.valid) {
      let link: any = this.fullUrlValue;
      let data: any = this.forgetPasswordForm.value;

      data.domanUrl = this.domanUrlValue;
      this.http.post(link, data).subscribe((response) => {
        let result: any = {};
        result = response;

        
        if (result.status == "success") {
          // this is use for reset the from
          this.formDirective.resetForm();
        } else{

           // display error message on html
          this.message = result.msg;

        }
      })
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
