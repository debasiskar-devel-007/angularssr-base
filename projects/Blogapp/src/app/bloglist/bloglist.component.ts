import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
 import { environment } from '../../environments/environment';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
 

    /************** lib list setup start here *************/
    public blogListConfig:any = {

      apiBaseUrl: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/",
    endpoint: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/getbloglistdata",
    endpointc: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/getbloglistdata-count",
      // apiBaseUrl: environment.apiBaseUrl,

      listEndPoint: "datalist",
      datasource: "",
      tableName: "blog_category",
      updateurl: "addorupdatedata",
      editUrl: "blog-category/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/blog-category/add",
      view: "blog_category"
      
    }
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        console.warn(resolveData);
        this.blogListConfig.datasource = resolveData.blogCatList.res;
        // this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
       
        this.blogListConfig.jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODYzMzM5OTgsImlhdCI6MTU4NjI0NzU5OH0.2tQPenabWix0l8S4er5xHmXkH-duoE-W6CHNWAPmT7o"
      });
    }
  ngOnInit() {
    
    
  }

}
