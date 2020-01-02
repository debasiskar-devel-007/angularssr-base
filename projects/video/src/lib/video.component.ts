import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-Video',
  templateUrl: 'video.component.html',
  styleUrls: ['style.css']
})
export class VideoComponent implements OnInit {
  public serverUrlData: any = '';
  public tokenViaApp: any = '';
  public addupdateRouteUrl: any = '';
  public TableNameViaApp: any = '';
  public deleteEndpointViaApp: any = '';
  public editRouteViaApp: any = '';
  public AddButtonRouteViaApp: any = '';
  public manageVideoRouteViaApp: any = '';
  public searchEndpointval: any = '';
  public searchSourceval: any = '';
  ;  /**lib-listing start here **/
  public allDataList: any = [];
  public allDataList_skip: any = ["_id", "description", "parent_id", "title_search", "parentvideocategory_search"];
  public allDataList_modify_header: any = {
    'title': "Title", 'description': "Description",
    "status": "Status", "priority": "Priority", "parentvideocategory": "Parent Category"
  };
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Title", field: 'title_search' }, { label: "Search By Parent Category", field: 'parentvideocategory_search' }],
    };
  public previewModal_detail_skip: any = ['_id', 'title_search', 'parentvideocategory_search'];

  /**lib-listing end here **/
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

  @Input()          //getting all video data via resolve
  set listingViaResolve(DataVal: any) {
    this.allDataList = (DataVal) || '<no name set>';
    this.allDataList = DataVal;

  }
  @Input()          //gettingadd button route 
  set AddButtonRoute(Val: any) {
    this.AddButtonRouteViaApp = (Val) || '<no name set>';
    this.AddButtonRouteViaApp = Val;

  }
  @Input()
  set VideoManagementRoute(val: any) {
    this.manageVideoRouteViaApp = (val) || '<no name set>';
    this.manageVideoRouteViaApp = val;
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
    this.deleteEndpointViaApp = (val) || '<no name set>';
    this.deleteEndpointViaApp = val;
  }
  constructor(public activeRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }
  addVideoCategoryButton() {

    this.router.navigateByUrl('/' + this.AddButtonRouteViaApp);
  }

  videoManagementButton() {

    this.router.navigateByUrl('/' + this.manageVideoRouteViaApp);
  }

}
