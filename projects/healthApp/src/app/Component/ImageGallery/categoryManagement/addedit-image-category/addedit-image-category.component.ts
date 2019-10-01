import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addedit-image-category',
  templateUrl: './addedit-image-category.component.html',
  styleUrls: ['./addedit-image-category.component.css']
})
export class AddeditImageCategoryComponent implements OnInit {
  public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public listUrl:any="image-gallery/category-management/list";
  public dataList:any=[];
  public editedData:any=[];
  constructor(public activeRoute :ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        console.log(data);
        let result:any;
        result=data.ImageData.res;
        this.editedData=result;
        console.log("okk123456789",this.editedData);
      })
    }
  }

}
