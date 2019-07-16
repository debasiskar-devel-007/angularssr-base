import { Component, OnInit } from '@angular/core';
import {MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {

  constructor(public readonly metaService:MetaService) {
    
    this.metaService.setTitle("Universal Tech Associates: Investors");
    this.metaService.setTag('description',"Investors: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"Investors: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates: Investors");
    this.metaService.setTag('og:image',"http://www.universaltechassociates.com/assets/images/logo.png");
    this.metaService.setTag('og:type',"website");
   }

  ngOnInit() {
  }

}
