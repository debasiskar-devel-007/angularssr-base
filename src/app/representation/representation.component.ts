import { Component, OnInit } from '@angular/core';
import {MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.css']
})
export class RepresentationComponent implements OnInit {

  constructor(public readonly metaService:MetaService) {
    this.metaService.setTitle("Universal Tech Associates: Representation");
    this.metaService.setTag('description',"Representation: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"Representation: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates: Representation");
    this.metaService.setTag('og:image',"http://www.universaltechassociates.com/assets/images/logo.png");
    this.metaService.setTag('og:type',"website"); }

  ngOnInit() {
  }

}
