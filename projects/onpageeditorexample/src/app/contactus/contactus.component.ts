import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  public routeingUrl: any = 'lib-social-media-management';

  constructor() { }

  ngOnInit() {
  }

}
