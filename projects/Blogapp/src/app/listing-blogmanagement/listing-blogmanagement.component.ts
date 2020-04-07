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

    apiBaseUrl: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/",
    endpoint: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/getblogmanagementlistdata",
    endpointc: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/getblogmanagementlistdata-count",

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
       this.blogListConfig.datasource = resolveData.blogList.res;
      // this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
      this.blogListConfig.jwtToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODYxNzk3MzcsImlhdCI6MTU4NjA5MzMzN30.62F_1FAIekcBiBYaVnAFvEMeLN1Z5_CP3lJZcgEnfe4"

    });
  }

}



