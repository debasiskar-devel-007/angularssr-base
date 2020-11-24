import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addedit-image',
  templateUrl: './addedit-image.component.html',
  styleUrls: ['./addedit-image.component.css']
})
export class AddeditImageComponent implements OnInit {
  public serverUrl:any="https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/";
  public sourceName : any = "imageGallery_management";
  public imageCategorySourceName:any="imageGallery_category";
  public getDataEndpoint:any="api1/getimagecategorydata";
  public addEndpoint:any="api1/addorupdateimage";
  public imageListingUrl:any="image-gallery/category-management/list";
  public editedData:any=[];
  public userid:any='';
  public parentid:any='';
  public addCommunityCheckField:any='true'

  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format:["jpg", "jpeg", "png", "bmp"],  // use all small font
    type: "imageGallery-picture",
    path: "imageGallery", 
    prefix: "imageGallery-picture_",
    formSubmit: false,
    conversionNeeded: 0,
    aspectratio: [467/638,467/467],
    bucketName: "image-gallery-bucket"
  }

  constructor(public activeRoute :ActivatedRoute, public cookieService: CookieService) {
   // this.parentid =JSON.parse(this.cookieService.get('userid'));
    console.log('cookie>>>',this.cookieService.get('userid'));
   }

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
