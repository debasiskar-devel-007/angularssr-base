import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logo: any = '../../assets/favicon.ico';
  public fromTitle: any = "Login Form";    // This is a From Title 
  public fullUrl: any = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";  // server url
  public endpoint: any = "login";
  public buttonName:any= 'Login Button';
  public signUpRouteingUrl: any = { 
    // "path":"sign-up",
    "path":"",
    "buttonName":"sign-up",
    "customLink":"",
    "customURl":"https://advancedwellness.pro/"
  };

  public forgetRouteingUrl: any = {
    // "path":"forget-password",
    "path":"",
    "buttonName":"forget-password",
    "customLink":"/forget-password",
    "customURl":"http://www.fjhj.lkj/cx"
  };
  public routerStatus: any;
  // public cookieSet: any = {
  //   "cookie": [
  //     {
  //       "type": "token",
  //       "name": "jwtToken"
  //     },
  //     {
  //       "type": "email",
  //       "name": "Username"
  //     },
  //     {
  //       "type": "_id",
  //       "name": "_id"
  //     }]
  // };
  constructor() {
    this.routerStatus = {           // this is use for if login succcess then navigate which page 
      "data": [
        {
          "type": "admin",
          "routerNav": "forget-password"
        },
        {
          "type": "user",
          "routerNav": "userDashbord"
        },
        {
          "type": "model",
          "routerNav": "modelDashbord"
        }
      ]
    }

  }

  ngOnInit() {
  }

}