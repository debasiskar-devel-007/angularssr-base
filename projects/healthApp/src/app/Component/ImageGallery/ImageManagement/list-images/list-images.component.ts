import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
public imageGalleryallData:any=[];
public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="imageGallery_management";
  public DeleteEndpoint:any="deletesingledata";
  public EditRoute:any="image-gallery/edit";
  public addButtonRoute:any="image-gallery/add";
  public searchEndpoint:any="datalist";
  public searchSourcename:any="imageGallery_management_view";
  public token=this.cookies.get('jwtToken');
  constructor(public activatedRoute : ActivatedRoute,public cookies :CookieService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.res;
      this.imageGalleryallData = result;
      console.log("all data via resolve call",this.imageGalleryallData);
    })
  }

}
