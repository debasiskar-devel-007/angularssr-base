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
  public serverUrl:any="https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/";
  public updatedEndpoint:any="api1/addorupdateimagecat";
  public SourceName:any="imagegallery_category";
  public DeleteEndpoint:any="api1/deleteimagecat";
  public EditRoute:any="image-gallery/category-management/edit";
  public addButtonRoute:any="image-gallery/category-management/add";
  public manageImageButtonRoute:any="image-gallery/list";
  public searchEndpoint:any="api1/imagecategorydata";
  public searchSourcename:any="imagegallery_category_view";
  public CountEndpoint:any='api1/imagecategorydata-count';
  public dataSourcename: any = "api1/imagecategorydata";
  public token=this.cookies.get('jwtToken');
  public catupdatedeleteendpoint:any={
    updateendpoint: 'api1/imagecatstatusupdate',
    updateendpointmany: 'api1/updateimagecat',
    deleteendpointmany: 'api1/deleteimagecat',
  }



  // image section 

  public AddImageButtonRoute:any='image-gallery/add';
  public TableNameForImage:any='imageGallery_management';
  public DataListForImage:any;
  public TokenForImage:any=this.cookies.get('jwtToken');
  public imageServerUrlData:any='https://ysugrnopw1.execute-api.us-east-1.amazonaws.com/dev/';
  public imageDeleteendpoint:any='api1/deleteimage';
  public imageEditRoute:any='image-gallery/edit';
  public imageAddupdateRouteUrl:any='addorupdateimage';
  public imageSearchSourceval:any='imageGallery_management_view';
  public CountimageEndpoint:any='api1/imagedata-count';
  public imageSearchEndpoint:any='api1/imagedata';
  public imageupdatedeleteendpoint:any={
    updateendpoint: 'api1/imagestatusupdate',
    updateendpointmany: 'api1/updateimage',
    deleteendpointmany: 'api1/deleteimage',
  }
  constructor(public activatedRoute : ActivatedRoute,public cookies :CookieService,public httpService:HttpService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.results.res;
      this.imageGalleryList = result;
      console.log("kk",this.imageGalleryList)
    })

    let data:any;
    data = {
      "source": "imageGallery_management_view",
      "condition": {
        "limit": 10,
        "skip": 0
      },
      "sort": {
        "type": "desc",
        "field": "title"
      }
    }
    this.httpService.CustomRequest(data,'imagedata').subscribe(res=>{
      // console.log(res)
      let result:any;
      result=res;
      this.DataListForImage=result.results.res;
       console.log(  this.DataListForImage)

    })

  }

  

}
