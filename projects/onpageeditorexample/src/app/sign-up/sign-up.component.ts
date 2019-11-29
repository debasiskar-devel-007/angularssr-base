import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public forgetRouteingUrl: any = 'forget-password';
  public loginRouteingUrl: any = 'login';
  public logo: any = '../../assets/favicon.ico';
  public modaleLogo: any = '../../assets/favicon.ico';
  public formTitle: any = 'Sign Up';
  public serverUrl: any = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    // source:'usermanagement'
    source:'user'
  };
  public userType: any = 'admin';
  constructor() { }

  ngOnInit() {
  }

}
