import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lib-autoShare',
  templateUrl: './auto-share.component.html',
  styleUrls: ['./auto-share.component.html']
})
export class AutoShareComponent implements OnInit {
  public routeingUrlValue: any = '';

  @Input()          // setting the navigate By Url from project
  set routeingUrl(routeingUrlval: any) {
    this.routeingUrlValue = (routeingUrlval) || '<no name set>';
    this.routeingUrlValue = routeingUrlval;
    console.log(this.routeingUrlValue);
  }

  constructor( public router: Router) { }

  ngOnInit() {
  }

  goToMediaManagement() {
    this.router.navigateByUrl('/' + this.routeingUrlValue);
  }

}
