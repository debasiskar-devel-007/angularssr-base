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
    redirect_url : '/login'
  };
  validationMessage = {
    'upperCaseCharacters':/[A-Z]+/g,
    'upperCaseCharactersMessage':'Password has to continue Upper case characters',
    'lowerCaseCharacters':/[a-z]+/g,
    'lowerCaseCharactersMessage':'Password has to continue Lower case characters',
    'numberCharacters':/[0-9]+/g,
    'numberCharactersMessage':'Password has to continue number characters',
    'specialCharacters':/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
    'specialCharactersMessage':'Password has to continue special characters',
    'minLengthOfCharacters':6,
    'minLengthOfCharactersMessage':'Password has to continue Min characters',
    'maxLengthOfCharacters':12,
    'maxLengthOfCharactersMessage':'Password has to continue Max characters',
  };
  
  constructor() { }

  ngOnInit() {
  }

}
  
