import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public logo: any = '../../assets/favicon.ico';
  // public signUpRouteingUrl: any = 'sign-up';
  // public loginRouteingUrl: any = 'login';
  public loginRouteingUrl: any = { 
    // "path":"login",
    "path":"",
    "buttonName":"login",
    "customLink":"/login",
    "customURl":""
  };
  public signUpRouteingUrl: any = { 
    // "path":"sign-up",
    "path":"",
    "buttonName":"sign-up",
    "customLink":"",
    "customURl":"https://advancedwellness.pro/"
  };
  public buttonName: any = 'Update Password';
  public formTitle: any = 'Forget Password';
  public serverUrl:any = 'http://166.62.39.137:5050/';
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };
  public domanUrl: any = 'http://localhost:4200/reset-password';
  constructor() { }

  ngOnInit() {
  }
  

}
