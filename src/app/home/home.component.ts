import { Component, OnInit } from '@angular/core';
import {MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})   
export class HomeComponent implements OnInit {

  constructor(public readonly metaService:MetaService) {
    this.metaService.setTitle("Universal Tech Associates: Home");
    this.metaService.setTag('description',"Home: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"Home: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates: Home");
    this.metaService.setTag('og:image',"../../assets/images/logo.png");
    this.metaService.setTag('og:type',"website"); }

  ngOnInit() {
  }

}
