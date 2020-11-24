import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-edit-videos',
  templateUrl: './add-edit-videos.component.html',
  styleUrls: ['./add-edit-videos.component.css']
})
export class AddEditVideosComponent implements OnInit {
  public serverUrl: any = "https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/";
  public addUpdateEndpoint: any = "api1/addupdatevideo";
  public getDataEndpoint:any="api1/getvideocategorydata";
  public listingRoute: any = "video-category/list";
  public sourceName:any ="video_management";
  public categorySourceName = "video_category";
  public SingleVideoData: any = [];
  public userid:any='';
  public parentid:any='';
  public addCommunityCheckField:any='true'
  constructor(public activeRoute: ActivatedRoute, public cookies :CookieService) {
    //this.parentid = JSON.parse(this.cookies.get('userid'));
    console.log('Parent Id>>>', this.parentid);
   }

  ngOnInit() {
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.videodata.res[0];
        this.SingleVideoData = result;
      })
    }
    if(this.activeRoute.snapshot.params.userid != null){
      this.userid = this.activeRoute.snapshot.params.userid;
      console.log(this.userid,'userid');
    }
  }

}
