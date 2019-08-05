import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onpageeditorexample';
  // public serverUrl: any = 'http://166.62.39.137:5001/demoappemailsend';
  public serverUrl: any = 'http://166.62.39.137:5001/';
  public addEndpoint: any = 'demoappemailsend';
  public getDataUrl: any = 'datalist';
}

