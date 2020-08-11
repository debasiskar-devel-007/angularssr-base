import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-from',
  templateUrl: './reset-from.component.html',
  styleUrls: ['./reset-from.component.css']
})
export class ResetFromComponent implements OnInit {

  public fromTitleName: any = 'Reset From';

  public logo: any = '../../assets/favicon.ico';
  public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'usermanagement',
    redirect_url : '/login',
    passwordregex: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
    errormsg:'is required'
  };
  
  
  constructor() { }

  ngOnInit() {
  }

}
  
