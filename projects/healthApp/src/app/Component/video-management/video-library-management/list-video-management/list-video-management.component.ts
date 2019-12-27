import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list-video-management',
  templateUrl: './list-video-management.component.html',
  styleUrls: ['./list-video-management.component.css']
})
export class ListVideoManagementComponent implements OnInit {
  public VideoDataList : any = [];
  public serverurl :any="https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/"
  public SourceName:any="video_management";
  public searchEndpoint:any="datalist";
  public AddorUpdateEndpoint:any="addorupdatedata";
  public token:any=this.cookies.get('jwtToken');
  public deleteendpoint:any="deletesingledata";
  public addPageRoute:any="video-library-management/add";
  public editRoute :any="video-library-management/edit"

  constructor(public activateRoute : ActivatedRoute, public cookies :CookieService) { }

  ngOnInit() {
    this.activateRoute.data.forEach((data)=>{
      let result: any;
      result = data.videoData.res;
      this.VideoDataList=result;
    })
  }

}
