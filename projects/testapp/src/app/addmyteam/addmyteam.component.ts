import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmyteam',
  templateUrl: './addmyteam.component.html',
  styleUrls: ['./addmyteam.component.css']
})
export class AddmyteamComponent implements OnInit {
  public server: 'http://166.62.39.137:5009/';
  public addUrl:any = 'addorupdatedata';
  constructor() { }

  ngOnInit() {
  }

}
