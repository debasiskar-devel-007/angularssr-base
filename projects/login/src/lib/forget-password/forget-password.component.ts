import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

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
  public formTitleValue: any = '';
  public serverUrlValue: any = '';
  public signUpRouteingUrlValue: any = '';
  private domanUrlValue: any = '';
  public addEndpointValue: any = '';
  public logoValue: any = '';


  @Input()         // Set the project email Doman URL
  set domanUrl(domanUrlVal: any) {
    this.domanUrlValue = (domanUrlVal) || '<no name set>';
    this.domanUrlValue = domanUrlVal;
    console.log(this.domanUrlValue);
  }
  @Input()         // Set the project name
  set formTitle(formTitleVal: any) {
    this.formTitleValue = (formTitleVal) || '<no name set>';
    this.formTitleValue = formTitleVal;

  }

  @Input()        // setting the server url from project
  set serverUrl(serverUrlVal: any) {
    this.serverUrlValue = (serverUrlVal) || '<no name set>';
    this.serverUrlValue = serverUrlVal;

  }

  @Input()      // set the from logo

set logo(logoVal : any) {
  this.logoValue = logoVal;
}

  @Input()          // set the endpoint and source
  
  set addEndpoint(addEndpointval : any) {
    this.addEndpointValue = addEndpointval;
  }
  

  @Input()          // setting the navigate By Sign Up Url from project
  set signUpRouteingUrl(routeingUrlval: any) {
    this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.signUpRouteingUrlValue = routeingUrlval;
  }

  constructor(public fb: FormBuilder, private http: HttpClient, public router: Router, public apiService:ApiService) {

  

    this.forgetPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],

    });
  


  
  }

  ngOnInit() {
    this.apiService.clearServerUrl();       //  Clear the server url
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlValue);        //  set the server url
    }, 50);
    // console.log(this.serverURL);


    this.apiService.clearaddEndpoint();       //  Clear the endpoint
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointValue.endpoint);   //  set the endpoint
    }, 50);
  }

/********* Forget password  Form Submit start here*********/ 
  forgetPasswordSubmit() {
    let x: any;
    for (x in this.forgetPasswordForm.controls) {
      this.forgetPasswordForm.controls[x].markAsTouched();
    }
    if (this.forgetPasswordForm.valid) {
      let link: any = this.serverUrlValue;
      let data: any = this.forgetPasswordForm.value;

      data.domanUrl = this.domanUrlValue;

      this.apiService.forgetPassword(data).subscribe((response) =>{
        console.log(response);
        let result: any = {};
        result = response;

        
        if (result.status == "success") {
          // this is use for reset the from
          this.formDirective.resetForm();
        } else{

           // display error message on html
          this.message = result.msg;

        }
      });
    }
  }

/********* Forget password  Form Submit end here*********/ 

  // This is use for navigate this component to sign-Up component 
  signup() {
    this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
  }


  inputUntouched(val: any) {
    this.forgetPasswordForm.controls[val].markAsUntouched();
  }

}
