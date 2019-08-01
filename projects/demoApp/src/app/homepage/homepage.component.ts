import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public server:any = 'http://166.62.39.137:5009/';
  constructor() { }

  ngOnInit() {
  }

}
