import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addedit-image',
  templateUrl: './addedit-image.component.html',
  styleUrls: ['./addedit-image.component.css']
})
export class AddeditImageComponent implements OnInit {
  public serverUrl:any="https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public sourceName : any = "imageGallery_management";
  public imageCategorySourceName:any="imageGallery_category";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public ListingPageUrl:any='image-gallery/list';
  public editedData:any=[];

  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format:["jpg", "jpeg", "png", "bmp", "zip", 'html'],  // use all small font
    type: "imageGallery-picture",
    path: "imageGallery",
    prefix: "imageGallery-picture_",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "image-gallery-bucket"
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
