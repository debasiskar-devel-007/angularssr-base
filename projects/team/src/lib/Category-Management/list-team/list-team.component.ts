import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
  public alldata: any = [];
  public addPageVal: any = '';
  public searchingendpoint: any = '';
  public sourcenameViaapp: any ='';
  public searchSourcenameViaapp:any='';
  public tokenVal: any = '';
  public deleteendpointVal: any="";
  public addupdate: any = '';
  public serverUrlData: any = '';
  public editRouteval: any = '';
  public manageRoute: any;
  public alldata_skip: any = ["_id","id","updated_at", "created_at","description_html","description","categoryName_search"];
  public alldata_modify_header: any = {
    "categoryName": "Category Name", "description": "Description",
    "rolename": "Role Name", "status": "Status","role" : "Role","parent category":"Parent Category"
  };
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public previewModal_detail_skip: any = ['_id',"id","updated_at","created_at","categoryName_search"];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Category Name", field: 'categoryName_search' }],

    };

  @Input()          //getting all data list via resolve call from app
  set TeamData(val: any) {
    this.alldata = (val) || '<no name set>';
    this.alldata = val;
  }
  @Input()          //getting edit page route from app
  set EditRoute(val: any) {
    this.editRouteval = (val) || '<no name set>';
    this.editRouteval = val;

  }
  @Input()
  set addButtonRoute(val: any) {
    this.addPageVal = (val) || '<no name set>';
    this.addPageVal = val;
  }
  @Input()        //manage team button route
  set ManageButtonRoute(val: any) {
    this.manageRoute = (val) || '<no name set>';
    this.manageRoute = (val);
  }
  @Input()
  set UpdateRoute(val: any) {
    this.addupdate = (val) || '<no name set>';
    this.addupdate = val;
    
  }
  @Input()
  set Token(val: any) {
    this.tokenVal = (val) || '<no name set>';
    this.tokenVal = val;
   
  }
  @Input()
  set SourceName(val: any) {
    this.sourcenameViaapp = (val) || '<no name set>';
    this.sourcenameViaapp = val;
  }
  @Input()
  set SearchSourceName(val: any) {
    this.searchSourcenameViaapp = (val) || '<no name set>';
    this.searchSourcenameViaapp = val;
  }
  @Input()
  set SearchEndpoint(val: any) {
    this.searchingendpoint = (val) || '<no name set>';
    this.searchingendpoint = val;

  }
  @Input()
  set DeleteEndpoint(val: any) {
    this.deleteendpointVal = (val) || '<no name set>';
    this.deleteendpointVal = val;
   
  }
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    
  }
  constructor(public router: Router) { }

  ngOnInit() {
  }
  addButton() {
    this.router.navigateByUrl('/' + this.addPageVal);
  }
  manageTeamButton() {
    this.router.navigateByUrl('/' + this.manageRoute);
  }
}
