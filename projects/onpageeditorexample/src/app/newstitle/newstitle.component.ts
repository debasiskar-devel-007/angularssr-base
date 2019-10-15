import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-newstitle',
  templateUrl: './newstitle.component.html',
  styleUrls: ['./newstitle.component.css']
})
export class NewstitleComponent implements OnInit {
  public formTitle: any = "News Title";
  public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public logo: any = '../../assets/favicon.ico';
  public addEndpoint: any = {
    endpoint: 'addorupdatedata',
    source: 'newsTitle'
  };
  public durationInSeconds: any = 30;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}


