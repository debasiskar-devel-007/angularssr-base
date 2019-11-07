import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
<<<<<<< HEAD
  public server:any = 'http://18.191.148.255:5009/';
  public addUrl:any = 'addorupdatedata';
  public updateUrl:any = 'addorupdatedata';
  public deleteUrl:any = 'deletesingledata';
  public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  public Blogdelete:any='deletesingledata';
  public listingTablename:any='blog_category';
  public getSourceUrl:any = 'demoteam';
  public BlogList:any;
  public token:any=this.cookieService.get('jwtToken');
  public searchEndpoint:any='datalist';
  public searchSourcename:any='blog_category_view';
=======
 
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4

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
