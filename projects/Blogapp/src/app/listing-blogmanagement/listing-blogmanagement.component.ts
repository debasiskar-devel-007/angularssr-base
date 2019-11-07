import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-blogmanagement',
  templateUrl: './listing-blogmanagement.component.html',
  styleUrls: ['./listing-blogmanagement.component.css']
})
export class ListingBlogmanagementComponent implements OnInit {

  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/blog-management/add",
    view: "blogs"

  }


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.blogList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    });
  }

}



