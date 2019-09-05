import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';

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
  public token:any=this.cookieService.get('jwtToken');

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private cookieService:CookieService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.BlogList=result;
     
    })
  }

}
