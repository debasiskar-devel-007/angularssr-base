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
  public serverUrl: any = "https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/";
  public token: any = this.cookies.get('jwtToken');
  public updatedEndpoint: any = "addorupdatedata";
  public SourceName: any = "video_category";
  public deleteEndpoint: any = "api1/deletevideocat";
  public EditRoute: any = "video-category/edit/";
  public addButtonRoute: any = "video-category/add";
  public videoManagementRoute: any = "video-library-management/list";
  public searchEndpoint: any = "datalist";
  public searchSourceval: any = "video_category_view";
  public CountEndpoint:any='api1/videocategorydata-count';
  public dataSourcename: any = "api1/videocategorydata";
  public catupdatedeleteendpoint:any={
    updateendpoint: 'api1/videocatstatusupdate',
    updateendpointmany: 'api1/videocatstatusupdate',
    deleteendpointmany: 'api1/deletevideocat',
  }


  // video section 
  public AddVideoButtonRoute: any = 'video-library-management/add';
  public SearchEndpointForVideo: any = 'datalist';
  public SearchSourceNameForVideo: any = 'video_management_view';
  public listingForVideo: any = [];
  public editRouteForVideo: any = 'video-library-management/edit/';
  public serverUrlForVideo: any = 'https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/';
  public TokenForVideo: any = this.cookies.get('jwtToken');
  public updatedEndpointForVideo: any = 'addupdatevideo';
  public TableNameForVideo: any = 'video_management';
  public DeleteEndpointForVideo: any = 'deletesingledata';
  public videodataSourcename:any='api1/videogallerydata';
  public CountvideoEndpoint:any='api1/videogallerydata-count';
  public UserId:any='';
  public videoupdatedeleteendpoint:any={
    updateendpoint: 'api1/videostatusupdate',
    updateendpointmany: 'api1/videostatusupdate',
    deleteendpointmany: 'api1/deletevideo',
  }

  constructor(public activatedRoute: ActivatedRoute, public cookies: CookieService, public httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.results.res;
      this.videoCatList = result;
      // console.log("video dataaaa",this.videoList);
    })



    //for video
    if(this.activatedRoute.snapshot.params.userid != null){
      this.UserId = this.activatedRoute.snapshot.params.userid;
      console.log('ddd',this.UserId)
    }
    let data: any;
    data = {
      "source": "video_management_view",
      "condition": {
        "limit": 10,
        "skip": 0,
        "userid": this.UserId,
      },
      "sort": {
        "type": "desc",
        "field": "title"
      }
    }
    this.httpService.CustomRequest(data, 'videogallerydata').subscribe(res => {
      let result: any;
      result = res;
      this.listingForVideo = result.results.res;
    })
  }

}
