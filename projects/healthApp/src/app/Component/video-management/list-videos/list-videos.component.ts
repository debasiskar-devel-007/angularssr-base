import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
  

  
  public videoList: any = [];
  public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public token:any=this.cookies.get('jwtToken');
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="video_category";
  public deleteEndpoint:any="deletesingledata";
  public EditRoute:any="video-category/edit/";
  public addButtonRoute:any="video-category/add";
  public videoManagementRoute:any="video-library-management/list";
  public searchEndpoint:any="dalalist";
  public searchSourcename:any="video_category_view";
  constructor(public activatedRoute: ActivatedRoute, public cookies :CookieService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.res;
      this.videoList = result;
      console.log("video dataaaa",this.videoList);
      
    })

  }

}
