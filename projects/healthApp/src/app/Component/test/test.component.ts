import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public jwtToken: string = null;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  setToken() {
    this.cookieService.set('jwtToken', this.jwtToken);
    alert('Successfully Set.');
  }

}
