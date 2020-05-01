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

    apiBaseUrl: "http://localhost:3000/dev/",
    endpoint: "http://localhost:3000/dev/getblogmanagementlistdata",
    endpointc: "http://localhost:3000/dev/getblogmanagementlistdata-count",

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
      // this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
      this.blogListConfig.jwtToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODYxNzk3MzcsImlhdCI6MTU4NjA5MzMzN30.62F_1FAIekcBiBYaVnAFvEMeLN1Z5_CP3lJZcgEnfe4"

    });
  }

}



