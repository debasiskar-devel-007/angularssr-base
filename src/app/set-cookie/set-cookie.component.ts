import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-set-cookie',
  templateUrl: './set-cookie.component.html',
  styleUrls: ['./set-cookie.component.css']
})
export class SetCookieComponent implements OnInit {

  public jwtToken: string = null;
  constructor( private cookieService : CookieService ) { }

  ngOnInit() {
  }
  setToken() {
    this.cookieService.set('jwtToken', this.jwtToken);
    alert('Successfully Set');
    this.jwtToken="";

  }
}
