import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addedit-image-category',
  templateUrl: './addedit-image-category.component.html',
  styleUrls: ['./addedit-image-category.component.css']
})
export class AddeditImageCategoryComponent implements OnInit {
  public serverUrl:any="https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/";
  public getDataEndpoint:any="api1/getimagecategorydata";
  public addEndpoint:any="api1/addorupdateimagecat";
  public catListingUrl:any="image-gallery/category-management/list";
  public sourceName:any="imagegallery_category";
  public dataList:any=[];
  public userid:any='';
  public editedData:any=[];
  constructor(public activeRoute :ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.ImageData.res;
        this.editedData=result;
      })
    }
    if(this.activeRoute.snapshot.params.userid != null){
      this.userid = this.activeRoute.snapshot.params.userid;
      console.log(this.userid,'userid');
    }
  }

}
