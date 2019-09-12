import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-from',
  templateUrl: './reset-from.component.html',
  styleUrls: ['./reset-from.component.css']
})
export class ResetFromComponent implements OnInit {

  public fromTitleName: any = 'Reset From';
  public fullUrl: any = 'http://166.62.39.137:5050/resetpassword';

  
  constructor() { }

  ngOnInit() {
  }

}
  
