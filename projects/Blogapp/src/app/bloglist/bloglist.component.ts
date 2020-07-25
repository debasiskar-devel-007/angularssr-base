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
 
  // https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/getblogmanagementlistdata
    /************** lib list setup start here *************/
    public blogListConfig:any = {

      apiBaseUrl: "https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/",
      endpoint: "https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/getblogcategorylistdata",
      endpointc: "https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/getblogcategorylistdata-count",
      // apiBaseUrl: environment.apiBaseUrl,

      listEndPoint: "getblogcategorylistdata",
      tableName: "",
      updateurl: "",
      editUrl: "blog-category/edit",
      jwtToken: "",
      datasource:'',
      deleteEndPoint: "deleteforblogcategory",
      addLink: "/blog-category/add",
      date_search_source: "getblogcategorylistdata",
      datacollection:"getblogcategorylistdata"
      
    }
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        console.warn(resolveData);
        this.blogListConfig.datasource = resolveData.blogCatList.results.res;
        
        console.log( this.blogListConfig.datasource,'====')
        this.blogListConfig.jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODg3NDQ2NzAsImRhdGEiOiJXbTFTYldNeVducGFSMXBzWkROS2FWa3pXbWxaTTFwcFdUTmFhUT09IiwiaWF0IjoxNTg4NzQxMDcwfQ.iYQz51P545DBGjMJPGdFuQiICgFDnN7eBGPb8oVelWY"
      });
    }
  ngOnInit() {
    
    
  }

}
