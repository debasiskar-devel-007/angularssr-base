import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-videos',
  templateUrl: './add-edit-videos.component.html',
  styleUrls: ['./add-edit-videos.component.css']
})
export class AddEditVideosComponent implements OnInit {
  public serverUrl: any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public addUpdateEndpoint: any = "addorupdatedata";
  public getDataEndpoint:any="datalist";
  public listingRoute: any = "video-library-management/list";
  public sourceName:any ="video_management";
  public SingleVideoData: any = [];
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.videodata.res;
        this.SingleVideoData = result;
      })
    }
  }

}
