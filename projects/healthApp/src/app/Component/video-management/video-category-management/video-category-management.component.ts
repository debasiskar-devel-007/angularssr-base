import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-video-category-management',
  templateUrl: './video-category-management.component.html',
  styleUrls: ['./video-category-management.component.css']
})
export class VideoCategoryManagementComponent implements OnInit {
public serverUrl:any="https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/api1/";
public getDataEndpoint:any="getvideocategorydata";
public addEndpoint:any="addupdatevideocategory";
public listUrl:any="video-category/list";
public sourceName:any="video_category";
public dataList:any=[];
public editedData:any=[];
  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.videoData.res[0];
        this.editedData=result;
        console.log("okk",this.editedData);
      })
    }
  }

}
