import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
export declare class LoginComponent implements OnInit {
    fb: FormBuilder;
    http: HttpClient;
    router: Router;
    apiService: ApiService;
    cookieService: CookieService;
    route: ActivatedRoute;
    message: any;
    formDirective: FormGroupDirective;
    fromTitleValue: any;
    serverURL: any;
    signUpRouteingUrlValue: any;
    forgetRouteingUrlValue: any;
    routerStatusValue: any;
    endpointValue: any;
    logoValue: any;
    cookieSetValue: any;
    buttonNameValue: any;
    defaultUrlValue: string;
    private loader;
    secret: any;
    forLoader: any;
    fromTitle: any;
    logo: any;
    buttonName: any;
    fullUrl: any;
    endpoint: any;
    cookieSet: any;
    signUpRouteingUrl: any;
    forgetRouteingUrl: any;
    routerStatus: any;
    defaultLoginUrl: any;
    ipinfoidValue: any;
    ipinfoid: any;
    login_ip_info: any;
    loginForm: FormGroup;
    project_name: any;
    redirect_url: any;
    private previousUrl;
    private currentUrl;
    loginflag: boolean;
    constructor(fb: FormBuilder, http: HttpClient, router: Router, apiService: ApiService, cookieService: CookieService, route: ActivatedRoute);
    ngOnInit(): void;
    randomString(length: any, chars: any): string;
    /********* Login Form Submit start here*********/
    loginFormSubmit(): void;
    inputUntouched(val: any): void;
    forgetpassword(): void;
    signup(): void;
    customFunction(link: any): void;
    ngOnDestroy(): void;
}
