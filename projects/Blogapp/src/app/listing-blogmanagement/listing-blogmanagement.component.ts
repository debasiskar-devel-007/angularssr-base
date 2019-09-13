import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-blogmanagement',
  templateUrl: './listing-blogmanagement.component.html',
  styleUrls: ['./listing-blogmanagement.component.css']
})
export class ListingBlogmanagementComponent implements OnInit {

  cookieValue = "Unknown";
  /*Listing Variables*/
  public blogListingConfig: any = {
    apiBaseUrl: "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blogs",
    tableName2: "blogs_view",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
   

  }
  /************** lib list setup end here *************/

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('jwtToken');
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListingConfig.datasource = resolveData.results.res;
      this.blogListingConfig.jwtToken = this.cookieValue;

    });
  }

  ngOnInit() {

  }

}



