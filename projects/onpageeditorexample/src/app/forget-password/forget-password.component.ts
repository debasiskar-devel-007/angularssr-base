import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public signUpRouteingUrl: any = 'sign-up';
  public projectName: any = 'Forget Password';
  public fullUrl:any = 'http://18.224.6.140:5009/forgetpassword';
  constructor() { }

  ngOnInit() {
  }
  

}
