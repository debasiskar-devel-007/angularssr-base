import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-newsletter',
  templateUrl: './listing-newsletter.component.html',
  styleUrls: ['./listing-newsletter.component.css']
})
export class ListingNewsletterComponent implements OnInit {


    /************** lib list setup start here *************/
    public newsLetterListConfig:any = {
      apiBaseUrl: "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/",
      listEndPoint: "datalist",
      datasource: "",
      tableName: "newsTitle",
      updateurl: "addorupdatedata",
      editUrl: "newsTitle/edit",
      jwtToken: "",   
      deleteEndPoint: "deletesingledata",
      // addLink: "/testimonial/add",
      view: "newsTitle_view"
    }
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.newsLetterListConfig.datasource = resolveData.newsletterList.res;
    this.newsLetterListConfig.jwtToken = this.cookieService.get('jwtToken');
  });
}
  ngOnInit() {
  }

}
