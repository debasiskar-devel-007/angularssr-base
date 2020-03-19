import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PowerApp';

  public jwtToken:any;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  setjwtToken(){
    // console.log('hit',this.jwtToken);
    this.cookieService.set('jwtToken',this.jwtToken);
    alert('Successfully Set.');
  }
}
