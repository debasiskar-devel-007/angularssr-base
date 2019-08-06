import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public serverUrl: any = 'http://166.62.39.137:5001/';
  public addEndpoint: any = 'demoappemailsend';
  public getDataUrl: any = 'datalist';

  constructor() {
    /*this.meta.setTitle('About us dynamic');
     this.meta.setTag('og:description', 'This is dynamic decription ');
     this.meta.setTag('og:title', 'This is dynamic title with meta og ');
     this.meta.setTag('og:type', 'website');
     this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');
     */
  }

  ngOnInit() {
  }

}
