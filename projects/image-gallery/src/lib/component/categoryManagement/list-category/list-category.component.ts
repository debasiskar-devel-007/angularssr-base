import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  public headerText: any = "Image Category List";
  public serverUrlData: any = '';
  public tokenViaApp: any = '';
  public addupdateRouteUrl: any = '';
  public TableNameViaApp: any = '';
  public DeleteendpointViaApp: any = '';
  public editRouteViaApp: any = '';
  public AddButtonRouteViaApp: any = '';
  public manageButtonRouteViaApp: any = '';
  public searchEndpointval: any = '';
  public searchSourceval: any = '';

  public allDataList: any = [];
  public data_skip: any = ["_id", "description","title_search","parent_category_search"];
  public data_modify_header: any = {
    "parent category": "Parent Category", "title": "Title",
    "priority": "Priority", "status": "Status"
  };
  public previewModal_detail_skip: any = ["_id","title_search","parent_category_search"];

  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ 
        label: "Search By Title", field: 'title_search' },
      { label: "Search By Parent Category", field: 'parent_category' }],
    };
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
  @Input()          //getting add button route 
  set AddButtonRoute(Val: any) {
    this.AddButtonRouteViaApp = (Val) || '<no name set>';
    this.AddButtonRouteViaApp = Val;
  }
  @Input()
  set ManageImageButtonRoute(val : any){
    this.manageButtonRouteViaApp = (val) || '<no name set>';
    this.manageButtonRouteViaApp = val;
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
  constructor(public router : Router) { }
  ngOnInit() {
  }
  AddButton() {
    this.router.navigateByUrl('/' + this.AddButtonRouteViaApp);
  }
  manageButton(){
    this.router.navigateByUrl('/' + this.manageButtonRouteViaApp);
  }
}
