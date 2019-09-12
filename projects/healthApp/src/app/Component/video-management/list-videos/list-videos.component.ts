import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
  

  
  public videoList: any = [];
  public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="video_category";
  public DeleteEndpoint:any="deletesingledata";
  public EditRoute:any="video-management/edit";
  public addButtonRoute:any="video-management/add";
  public searchEndpoint:any="dalalist";
  public searchSourcename:any="video_category_view";
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      
      let result: any;
      result = data.videoData.res;
      this.videoList = result;
    })

  }

}
