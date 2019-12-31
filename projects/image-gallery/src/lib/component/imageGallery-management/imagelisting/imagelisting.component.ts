import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-imagelisting',
  templateUrl: './imagelisting.component.html',
  styleUrls: ['./imagelisting.component.css']
})
export class ImagelistingComponent implements OnInit {
  public headerText: any = "Image List";
  public serverUrlData: any = '';
  public tokenViaApp: any = '';
  public addupdateRouteUrl: any = '';
  public TableNameViaApp: any = '';
  public DeleteendpointViaApp: any = '';
  public editRouteViaApp: any = '';
  public AddButtonRouteViaApp: any = '';
  public searchEndpointval: any = '';
  public searchSourceval: any = '';
  public listingData: any = [];
  @Input()           //getting all data from application
  set allDataList(val: any) {
    this.listingData = (val) || 'no name set';
    this.listingData = val;
  }
  @Input()          //getting add button route 
  set AddButtonRoute(Val: any) {
    this.AddButtonRouteViaApp = (Val) || '<no name set>';
    this.AddButtonRouteViaApp = Val;

  }
  @Input()          //getting edit route
  set editRoute(Val: any) {
    this.editRouteViaApp = (Val) || '<no name set>';
    this.editRouteViaApp = Val;
  }
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
  }
  @Input()          //setting the server url from project
  set Token(tokenval: any) {
    this.tokenViaApp = (tokenval) || '<no name set>';
    this.tokenViaApp = tokenval;
  }
  @Input()          //setting the updateendpoint from App
  set updatedEndpoint(val: any) {
    this.addupdateRouteUrl = (val) || '<no name set>';
    this.addupdateRouteUrl = val;
  }
  @Input()          //setting the server url from project
  set TableName(val: any) {
    this.TableNameViaApp = (val) || '<no name set>';
    this.TableNameViaApp = val;
  }
  @Input()
  set DeleteEndpoint(val: any) {
    this.DeleteendpointViaApp = (val) || '<no name set>';
    this.DeleteendpointViaApp = val;
  }
  @Input()          //getting search endpoint 
  set SearchEndpoint(Val: any) {
    this.searchEndpointval = (Val) || '<no name set>';
    this.searchEndpointval = Val;
  }
  @Input()          //getting search sourcename 
  set SearchSourceName(Val: any) {
    this.searchSourceval = (Val) || '<no name set>';
    this.searchSourceval = Val;
  }
  public data_skip: any = ["_id","category_name_search"];

  public data_modify_header: any =
    {
      'category_name': "Category Name",
      'images': "Images",
      'date_added': "Added Date"
    };
  public previewModal_detail_skip: any = ["_id","category_name_search"];

  public search_settings: any =
    {
      textsearch: [
        { label: "Search By Category", field: 'category_name_search' }],
    };
  public pendingmodelapplicationarray_detail_datatype: any = [{
    key: "images",
    value: 'image',
    fileurl: 'https://s3.us-east-2.amazonaws.com/image-gallery-bucket/imageGallery/'    // Image path 
  }];


  constructor(public router: Router) { }

  ngOnInit() {
  }
  AddButton() {
    this.router.navigateByUrl('/' + this.AddButtonRouteViaApp);
  }
}
