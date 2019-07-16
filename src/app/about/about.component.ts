import { Component, OnInit } from '@angular/core';
import {MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public readonly metaService:MetaService) {
    this.metaService.setTitle("Universal Tech Associates: About UTA");
    this.metaService.setTag('description',"About UTA: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"About UTA:Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates: About UTA");
    this.metaService.setTag('og:image',"http://www.universaltechassociates.com/assets/images/logo.png");
    this.metaService.setTag('og:type',"website");
    // this.metaService.setTag('og:image',"Universal Tech Associates");
   }

  ngOnInit() {
  }

}
