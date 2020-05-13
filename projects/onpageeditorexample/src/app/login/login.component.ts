import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public ipinfoid = '9797c42b93078a';
  public logo: any = '../../assets/favicon.ico';
  public fromTitle: any = "Login Form";    // This is a From Title 
  public fullUrl: any = "https://api.influxhostserver.com/";  // server url
  public endpoint: any = "login";
  public buttonName:any= 'Login Button';
  public signUpRouteingUrl: any = { 
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
  public defaultLoginUrl = '/login';
  public routerStatus: any;
  constructor(public route: ActivatedRoute,  public router: Router, public appLoder: AppComponent) {

    console.log("++++++++++++++++++++++++++++=________",router.url)
    this.route.params.subscribe(params=>{
      console.log('++++++',params['id']);
    });


    this.routerStatus = {           // this is use for if login succcess then navigate which page 
      "data": [
        {
          "type": "customer",
          "routerNav": "forget-password",
          cookies: {userid:'_id', useremail:'email',jwttoken:'jwttoken'}
        },
        {
          "type": "rep",
          "routerNav": "home",
          cookies: {userid:'_id', useremail:'email',jwttoken:'jwttoken'}
        },
        {
          "type": "model",
          "routerNav": "modelDashbord",
          cookies: {userid:'_id', useremail:'email',jwttoken:'jwttoken'}
        }
      ]
    }

  }

  ngOnInit() {
  }

}
