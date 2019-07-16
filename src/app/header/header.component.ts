import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {MatDialog} from '@angular/material';
import {LocationStrategy} from "@angular/common";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public click: any;
 /* public showHidediv: any;
*/
  /*@Output() public sidenavToggle = new EventEmitter();*/

  navbarOpen = false;
  isPopState = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(public router: Router, private locStrat: LocationStrategy, public dialog: MatDialog) {
  }

  ngOnInit(): void  {
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });

  }

 /* toTop() {
    document.getElementById("pagetopblock").scrollIntoView({behavior: 'smooth'});
  }
*/
 /* public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }*/



}
