import { Component, OnInit } from '@angular/core';
import {MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public readonly metaService:MetaService) {
    this.metaService.setTitle("Universal Tech Associates: Portfolio");
    this.metaService.setTag('description',"Portfolio: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"Portfolio: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates: Portfolio");
    this.metaService.setTag('og:image',"http://www.universaltechassociates.com/assets/images/logo.png");
    this.metaService.setTag('og:type',"website");
   }

  ngOnInit() {
  }

}
