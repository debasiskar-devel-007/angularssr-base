import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public projectName: any = "Login Form";
public fullUrl: any = "http://18.224.6.140:5009/login";
public signUpRouteingUrl: any = 'sign-up';
public forgetRouteingUrl: any = 'forget-password';
  constructor() { }

  ngOnInit() {
  }

}
