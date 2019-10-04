import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addedit-image',
  templateUrl: './addedit-image.component.html',
  styleUrls: ['./addedit-image.component.css']
})
export class AddeditImageComponent implements OnInit {
  public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public ListingPageUrl:any='image-gallery/list';
  public editedData:any=[];
  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "imageGallery-picture",
    path: "imageGallery",
    prefix: "imageGallery_picture_"
  }
  constructor(public activeRoute :ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.ImageData.res;
        this.editedData=result;
       
      })
    }
    
  }

}
