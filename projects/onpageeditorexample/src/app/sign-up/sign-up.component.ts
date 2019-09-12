import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public forgetRouteingUrl: any = 'forget-password';
  public loginRouteingUrl: any = 'login';

  public projectName: any = 'Sign Up';
  public fullUrl: any = 'http://166.62.39.137:5050/addorupdatedata';
  constructor() { }

  ngOnInit() {
  }

}
