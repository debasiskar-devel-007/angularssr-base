import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public allDataList: any = [];
  public serverUrlData: any = '';
  public tokenVal: any = '';
  public DelEndpoint: any = '';
  public editroute: any = '';
  public updatendpoint: any = '';
  public collectionName: any = '';
  public searchingSource: any = '';
  public searchingEndpoint: any = '';
  public addPageRoute: any = '';


  @Input()    //getting all data via resolve call from app
  set allData(val: any) {
    this.allDataList = (val) || '<no name set>';
    this.allDataList = val;
  }
  public data_skip: any = ["_id", "multipleemail", "bulletarray", "created_at", "description_html", "description", "updated_at", "id","categoryname_search","membername_search"];
  public data_modify_header: any = {
    "membername": "Member Name", "date added": "Added Date"
    , "categoryname": "Category Name", "multiplephone": "Phone Numbers", "image": "Images"
  };
  public pendingmodelapplicationarray_detail_datatype: any = [{
    key: "images",
    value: 'image',
    fileurl: 'https://s3.us-east-2.amazonaws.com/teammanagement-files/team/'    // Image path 
  }];
  public search_settings: any =
    {
      textsearch: [{ label: "Search By Category Name", field: 'categoryname_search' },
      { label: "Search By Member Name", field: 'membername_search' }],

    };
  // public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public previewModal_detail_skip: any = ['_id'];

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
  }
  @Input()         //getting token from application
  set Token(val: any) {
    this.tokenVal = (val) || '<no name set>';
    this.tokenVal = val;

  }
  @Input()       //getting delete endpoint from application
  set DeleteEndpoint(val: any) {
    this.DelEndpoint = (val) || '<no name set>';
    this.DelEndpoint = val;
  }
  @Input()      //getting edit route from application
  set EditRoute(val: any) {
    this.editroute = (val) || '<no name set>';
    this.editroute = val;
  }
  @Input()      //getting the update endpoint from application
  set UpdateEndpoint(val: any) {
    this.updatendpoint = (val) || '<no name set>';
    this.updatendpoint = val;
  }
  @Input()      //getting the source name from application
  set SourceName(val: any) {
    this.collectionName = (val) || '<no name set>';
    this.collectionName = val;
  }
  @Input()      //getting the searching endpoint from the application
  set SearchSourceName(val: any) {
    this.searchingSource = (val) || '<no name set>';
    this.searchingSource = val;
  }
  @Input()     //getting the search endpoint from endpoint
  set SearchEndpoint(val: any) {
    this.searchingEndpoint = (val) || '<no name set>';
    this.searchingEndpoint = val;
  }
  @Input()   //getting the add page route from application
  set AddPageRoute(val: any) {
    this.addPageRoute = (val) || '<no name set>';
    this.addPageRoute = val;
  }

  constructor(public router: Router) { }

  ngOnInit() {
   
  }
  addButton() {
    this.router.navigateByUrl('/' + this.addPageRoute);
  }

}
