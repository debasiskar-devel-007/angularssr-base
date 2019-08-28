import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public serverUrl: any = 'http://166.62.39.137:5001/';
  public addEndpoint: any = 'demoappemailsend';
  public getDataUrl: any = 'datalist';
  public contactUsAllDataHeaderSkip: any = ['_id'];
  public contactUsAllDataModifyHeader: any = {addresses: 'Addresses', emails: 'Emails', locationname: 'Location Name', phones: 'Phones'};
  constructor() { }

  ngOnInit() {
  }

}
