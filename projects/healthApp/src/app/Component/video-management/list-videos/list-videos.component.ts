import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../../../service/http.service'
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {


  // category section 

  public videoCatList: any = [];
  public serverUrl: any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public token: any = this.cookies.get('jwtToken');
  public updatedEndpoint: any = "addorupdatedata";
  public SourceName: any = "video_category";
  public deleteEndpoint: any = "deletesingledata";
  public EditRoute: any = "video-category/edit/";
  public addButtonRoute: any = "video-category/add";
  public videoManagementRoute: any = "video-library-management/list";
  public searchEndpoint: any = "datalist";
  public searchSourcename: any = "video_category_view";


  // video section 

  public AddVideoButtonRoute: any = 'video-library-management/add';
  public SearchEndpointForVideo: any = 'datalist';
  public SearchSourceNameForVideo: any = 'video_management_view';
  public listingForVideo: any = [];
  public editRouteForVideo: any = 'video-library-management/edit/';
  public serverUrlForVideo: any = 'https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/';
  public TokenForVideo: any = this.cookies.get('jwtToken');
  public updatedEndpointForVideo: any = 'addorupdatedata';
  public TableNameForVideo: any = 'video_management';
  public DeleteEndpointForVideo: any = 'deletesingledata';


  constructor(public activatedRoute: ActivatedRoute, public cookies: CookieService, public httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.res;
      this.videoCatList = result;
      // console.log("video dataaaa",this.videoList);

    })



    //for video

    let data: any;
    data = {
      "source": "video_management_view"
    }
    this.httpService.CustomRequest(data, 'datalist').subscribe(res => {
      // console.log(res);
      let result: any;
      result = res;
      this.listingForVideo = result.res;
    })
  }

}
