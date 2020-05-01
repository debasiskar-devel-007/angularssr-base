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

      apiBaseUrl: "http://localhost:3000/dev/",
      endpoint: "http://localhost:3000/dev/getblogcategorylistdata",
      endpointc: "http://localhost:3000/dev/getblogcategorylistdata-count",
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
        this.blogListConfig.jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODgyMzExNzgsImRhdGEiOiJXbTFTYldNeVducGFSMXBzWkROS2FWa3pXbWxaTTFwcFdUTmFhUT09IiwiaWF0IjoxNTg4MjI3NTc4fQ.fZRQq_NJ5K_uwluWDC59U-ZjvnQC1nCRufBYzKauDiw"
      });
    }
  ngOnInit() {
    
    
  }

}
