import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-video-category-management',
  templateUrl: './video-category-management.component.html',
  styleUrls: ['./video-category-management.component.css']
})
export class VideoCategoryManagementComponent implements OnInit {
public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
public getDataEndpoint:any="datalist";
public addEndpoint:any="addorupdatedata";
public listUrl:any="video-management/list";
public dataList:any=[];
public editedData:any=[];
  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.res;
      this.dataList = result;
      console.log("okk3",this.dataList);
    })
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.videoData.res;
        this.editedData=result;
        console.log("okk",this.editedData);
      })
    }
      

    


  }

}
