import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
 

    /************** lib list setup start here *************/
    public blogListConfig:any = {
      apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
      listEndPoint: "datalist",
      datasource: "",
      tableName: "blog_category",
      updateurl: "addorupdatedata",
      editUrl: "blog-category/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/blog-category/add",
      view: "blog_category_view"
      
    }
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        this.blogListConfig.datasource = resolveData.blogCatList.res;
        this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
        
      });
    }
  ngOnInit() {
    
    
  }

}
