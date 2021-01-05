import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, MinLengthValidator, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: any = '';
  //   FormGroupDirective: It is a directive that binds an existing FormGroup to a DOM element.
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  public fromTitleValue: any = '';
  public serverURL: any = '';
  public signUpRouteingUrlValue: any = '';
  public forgetRouteingUrlValue: any = '';
  public routerStatusValue: any = '';
  public endpointValue: any;
  public logoValue: any = '';
  public cookieSetValue: any = '';
  public buttonNameValue: any = '';
  public defaultUrlValue = '';
  private loader: any = null;
  public secret: any;
  @Input()
  set forLoader(forLoaderVal: any) {
    this.loader = (forLoaderVal) || '<no name set>';
    this.loader = forLoaderVal;
    // console.log('++++',this.loader)
    // console.log('++++-----',this.loader)
  }

  @Input()         // Set the project name
  set fromTitle(fromTitleVal: any) {
    this.fromTitleValue = (fromTitleVal) || '<no name set>';
    this.fromTitleValue = fromTitleVal;

  }
  @Input()      // set the from logo
  set logo(logoVal: any) {
    this.logoValue = logoVal;
  }
  @Input()
  set buttonName(buttonNameVal: any) {
    this.buttonNameValue = (buttonNameVal) || '<no name set>';
    this.buttonNameValue = buttonNameVal
  }

  @Input()        // setting the server url from project
  set fullUrl(fullUrlVal: any) {
    this.serverURL = (fullUrlVal) || '<no name set>';
    this.serverURL = fullUrlVal;

  }
  @Input()

  set endpoint(endpointVal: any) {
    this.endpointValue = endpointVal;
  }

  @Input()

  public set cookieSet(v: any) {
    this.cookieSetValue = v;
  }



  @Input()          // setting the navigate By Sign Up Url from project
  set signUpRouteingUrl(routeingUrlval: any) {
    this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.signUpRouteingUrlValue = routeingUrlval;
    // console.log(this.signUpRouteingUrlValue)
  }


  @Input()          // setting the navigate By Forget Password Url from project
  set forgetRouteingUrl(routeingUrlval: any) {
    this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
    this.forgetRouteingUrlValue = routeingUrlval;
    // console.log(this.forgetRouteingUrlValue)
  }

  @Input()          // setting the navigate By Forget Password Url from project
  set routerStatus(routerStatusval: any) {
    this.routerStatusValue = (routerStatusval) || '<no name set>';
    this.routerStatusValue = routerStatusval;
    // console.log(this.routerStatusValue)
  }

  @Input()
  set defaultLoginUrl(defaultUrlVal: any) {
    this.defaultUrlValue = (defaultUrlVal) || '<no name set>';
    this.defaultUrlValue = defaultUrlVal;
    // console.log(this.defaultUrlValue)
  }
  public ipinfoidValue: any = '';
  @Input()
  public set ipinfoid(id: any) {
    this.ipinfoidValue = id;
    // console.log(this.ipinfoidValue)
  }

  public login_ip_info: any;



  public loginForm: FormGroup;
  public project_name: any = '';
  public redirect_url: any = '';
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  public loginflag:boolean = false;

  constructor(public fb: FormBuilder,
    public http: HttpClient,
    public router: Router,
    public apiService: ApiService,
    public cookieService: CookieService,
    public route: ActivatedRoute) {



    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
    this.route.params.subscribe(params => {
      this.redirect_url = params['path'];
      // console.log('this.redirect_url',this.redirect_url)
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

    var url: any = "https://ipinfo.io/?format=json&token=" + this.ipinfoidValue;
    this.http.get(url).subscribe((res) => {
      this.login_ip_info = res;
    });
    this.apiService.clearServerUrl();       // Clear the server url
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverURL);       // set the server url 
    }, 50);


    this.apiService.clearaddEndpoint();       // clear the endpoint 
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.endpointValue);       // set the endpoint
    }, 50);

  }
  randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  /********* Login Form Submit start here*********/
  loginFormSubmit() {
    this.loginflag = true;


    /**secret key workes here */
    this.secret = this.randomString(9, 'aA#!');
    this.cookieService.set('secret', this.secret);
    localStorage.setItem('secret', this.secret);
    // this.stateGroup = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    this.loader = 1;
    let x: any;

    for (x in this.loginForm.controls) {
      this.loginForm.controls[x].markAsTouched();
    }

    if (this.loginForm.valid) {
      let data: any = this.loginForm.value;
      data.login_data = this.login_ip_info;
      data.login_time = new Date().getTime();
      this.apiService.addLogin(data).subscribe((response: any) => {
        if (response.status == "success") {
          this.cookieService.set('jwtToken', response.token);
          localStorage.setItem('jwtToken', response.token);
          if (this.router.url == this.defaultUrlValue) {
            for (const key1 in this.routerStatusValue.data) {
              if (response.item[0].type === this.routerStatusValue.data[key1].type) {
                for (let [keys, values] of Object.entries(this.routerStatusValue.data[key1].cookies)) {
                  for (let [key, value] of Object.entries(response.item[0])) {
                    if (values == key) {
                      this.cookieService.set(keys, JSON.stringify(value));
                      localStorage.setItem(keys, JSON.stringify(value));
                    }
                  }
                }
                if (this.cookieService.get('redirectUrl') == null || this.cookieService.get('redirectUrl') == '' || this.cookieService.get('redirectUrl') == undefined || this.cookieService.get('redirectUrl').length < 1) {
                  this.router.navigateByUrl('/' + this.routerStatusValue.data[key1].routerNav);
                } else {
                  this.router.navigateByUrl(this.cookieService.get('redirectUrl'));
                }
              }
            }

          } else {
            this.router.navigateByUrl(this.redirect_url);
          }
          // this.loader = 0;


          // this is use for reset the from
          this.formDirective.resetForm();
          this.message = '';
        } else {
          // display error message on html
          this.loginflag = false;

          this.message = response.msg;
        }
      });
    }

  }


  inputUntouched(val: any) {
    this.loginForm.controls[val].markAsUntouched();
  }

  // This is use for navigate this component to forget component 
  forgetpassword() {
    this.router.navigateByUrl('/' + this.forgetRouteingUrlValue.path);
  }

  // This is use for navigate this component to sign-Up component 
  signup() {
    this.router.navigateByUrl('/' + this.signUpRouteingUrlValue.path);
  }

  customFunction(link: any) {
    this.router.navigateByUrl('/' + link);
  }


  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
    this.loginflag = false;
  }

}
