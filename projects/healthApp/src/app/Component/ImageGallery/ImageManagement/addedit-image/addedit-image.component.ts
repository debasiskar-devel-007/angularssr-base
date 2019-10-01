import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addedit-image',
  templateUrl: './addedit-image.component.html',
  styleUrls: ['./addedit-image.component.css']
})
export class AddeditImageComponent implements OnInit {
  public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "imageGallery-picture",
    path: "imageGallery",
    prefix: "imageGallery_picture_"
  }
  constructor() { }

  ngOnInit() {
  }

}
