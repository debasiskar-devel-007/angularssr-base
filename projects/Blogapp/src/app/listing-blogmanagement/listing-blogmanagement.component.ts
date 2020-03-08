import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-listing-blogmanagement',
  templateUrl: './listing-blogmanagement.component.html',
  styleUrls: ['./listing-blogmanagement.component.css']
})
export class ListingBlogmanagementComponent implements OnInit {

  //Blogs Lib List
  public blogListConfig: any = {

    apiBaseUrl: "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/",

    // apiBaseUrl: environment.apiBaseUrl,

    listEndPoint: "datalist",
    datasource: "",
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/blog-management/add",
    view: "blogs_view"

  }


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolveData:any) => {
       this.blogListConfig.datasource = resolveData.blogList.results.blogs;
      console.warn(resolveData.blogList.results.blogs);
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    });
  }

}



