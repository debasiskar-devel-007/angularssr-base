import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
<<<<<<< HEAD
 import{CookieService} from 'ngx-cookie-service';
=======
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
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
<<<<<<< HEAD
  public token:any=this.cookieService.get('jwtToken');
  public searchEndpoint:any='datalist';
  public searchSourcename:any='blog_category_view';

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private cookieService:CookieService) { }

  ngOnInit() {
=======
  public token:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1Njc1MDUxMTEsImlhdCI6MTU2NzQxODcxMX0.PwcteDraTnwzlt-4QfHZOX8tIhgiGgbMvlElhR3cnnI';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /**getting alll blog data by resolve call **/
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.BlogList=result;
<<<<<<< HEAD
     
=======
      
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b
    })
  }

}
