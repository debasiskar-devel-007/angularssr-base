import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-listing-subscription',
  templateUrl: './listing-subscription.component.html',
  styleUrls: ['./listing-subscription.component.css']
})
export class ListingSubscriptionComponent implements OnInit {

   /************** lib list setup start here *************/
   public subscriptionForm: any = {
    apiBaseUrl: environment.apiBaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "subscriptions",
    updateurl: "addorupdatedata",
    editUrl: "newsletter/add-group/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "",
    view: "subscriptions_view"

  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.subscriptionForm.datasource = resolveData.subscriptionData.res;
      this.subscriptionForm.jwtToken = this.cookieService.get('jwtToken');

    });
  }

  ngOnInit() {
  }

}