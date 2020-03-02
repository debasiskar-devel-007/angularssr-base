import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {HttpService} from '../../../../service/http.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-listing-category',
  templateUrl: './listing-category.component.html',
  styleUrls: ['./listing-category.component.css']
})
export class ListingCategoryComponent implements OnInit {

  //category setcion
  public imageGalleryList: any = [];
  public serverUrl:any="https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="imageGallery_category";
  public DeleteEndpoint:any="deletesingledata";
  public EditRoute:any="image-gallery/category-management/edit";
  public addButtonRoute:any="image-gallery/category-management/add";
  public manageImageButtonRoute:any="image-gallery/list";
  public searchEndpoint:any="datalist";
  public searchSourcename:any="imageGallery_category_view";
  public token=this.cookies.get('jwtToken');



  // image section 

  public AddImageButtonRoute:any='image-gallery/add';
  public TableNameForImage:any='imageGallery_management';
  public DataListForImage:any;
  public TokenForImage:any=this.cookies.get('jwtToken');
  public imageServerUrlData:any='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/';
  public imageDeleteendpoint:any='deletesingledata';
  public imageEditRoute:any='image-gallery/edit';
  public imageAddupdateRouteUrl:any='addorupdatedata';
  public imageSearchSourceval:any='imageGallery_management_view';
  public imageSearchEndpoint:any='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/datalist';
  constructor(public activatedRoute : ActivatedRoute,public cookies :CookieService,public httpService:HttpService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.res;
      this.imageGalleryList = result;
      
    })

    let data:any;
    data={
      "source":"imageGallery_management_view"
    }
    this.httpService.CustomRequest(data,'datalist').subscribe(res=>{
      // console.log(res)
      let result:any;
      result=res;
      this.DataListForImage=result.res;
      // console.log(  this.DataListForImage.length)

    })

  }

  

}
