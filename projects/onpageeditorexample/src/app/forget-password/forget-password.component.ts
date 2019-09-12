import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public signUpRouteingUrl: any = 'sign-up';
  public projectName: any = 'Forget Password';
  public fullUrl:any = 'http://166.62.39.137:5050/forgetpassword';
  public domanUrl: any = 'http://localhost:4200/reset-password';
  constructor() { }

  ngOnInit() {
  }
  

}
