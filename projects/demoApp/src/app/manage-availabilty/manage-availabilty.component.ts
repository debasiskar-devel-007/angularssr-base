import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-availabilty',
  templateUrl: './manage-availabilty.component.html',
  styleUrls: ['./manage-availabilty.component.css']
})
export class ManageAvailabiltyComponent implements OnInit {
  public server:any = 'http://166.62.39.137:5009/';
  public endpoint:any = 'addorupdatedata';

  constructor() { }

  ngOnInit() {
  }

}
