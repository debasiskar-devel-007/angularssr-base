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

    apiBaseUrl: "http://localhost:3000/dev/api1/",
    endpoint: "http://localhost:3000/dev/api1/getblogmanagementlistdata",
    endpointc: "http://localhost:3000/dev/api1/getblogmanagementlistdata-count",

    // apiBaseUrl: environment.apiBaseUrl,

    listEndPoint: "getblogmanagementlistdata",
    datasource: "",
    tableName: "",
    updateurl: "statusupdateforblog",
    editUrl: "blog-management/edit",
    jwtToken: "",
    deleteEndPoint: "deleteforblog",
    addLink: "/blog-management/add",
    view: "getblogmanagementlistdata",
    datacollection:'getblogmanagementlistdata'
  }


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolveData:any) => {
      console.log(resolveData)
       this.blogListConfig.datasource = resolveData.blogList.results.res;
       console.log(this.blogListConfig.datasource)
      // this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
      this.blogListConfig.jwtToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODkxMjUwMTYsImRhdGEiOiJXbTFTYldNeVducGFSMXBzWkROS2FWa3pXbWxaTTFwcFdUTmFhUT09IiwiaWF0IjoxNTg5MTIxNDE2fQ.2QYX2-vjdD8ZRuNb2melYURMkrNhOJIfps6wOpfPXpI"

    });
  }

}



