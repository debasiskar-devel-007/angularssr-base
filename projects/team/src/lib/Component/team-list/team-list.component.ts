import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public DataList: any = [];
  public serverUrlData: any = '';
  public tokenVal:any='';
  public DelEndpoint:any='';
  public editroute :any='';
  public updatendpoint:any='';
  public collectionName:any='';
  public searchingSource:any='';
  public searchingEndpoint:any='';
  public addPageRoute:any='';

 
  @Input()    //getting all data via resolve call from app
  set allData(val: any) {
    this.DataList = (val) || '<no name set>';
    this.DataList = val;
    console.log("ts all data", this.DataList);
  }
  public data_skip: any = ["_id"];
  public data_modify_header: any = { "membername" : "Member Name","description":"Description",
  "categoryname":"Category Name","multipleemail":"Multiple E-mails",
  "bulletarray":"Bullet List","multiplephone":"Phone Numbers","images":"Images"
 };
 public search_settings: any =
    {
     
      textsearch: [{ label: "Search By Category Name", field: 'categoryname' },
      { label: "Search By Member Name" , field:'membername'},
      { label: "Search By E-Mail" , field:'multipleemail'}],
      // selectsearch:[{label:'Search By email',field:''}],
      // search:[{label:"Search By E-Mails",field:'multipleemail'}]

    };
   pendingmodelapplicationarray_detail_datatype:any=[{
      key: "images",
      value: 'image',
      fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/team/'             // Image path 
    }];
  //   pendingmodelapplicationarray_detail_datatype: any = [{
  //     key: "images",
  //     value: 'image',
  //     fileurl: "http://18.222.26.198/upload/brandimages/"             // Image path 
  // }];
  
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    console.log(this.serverUrlData);
  }
  @Input()
  set Token(val:any){
    this.tokenVal = (val) || '<no name set>';
    this.tokenVal = val;

  }
  @Input()
  set DeleteEndpoint(val:any){
    this.DelEndpoint = (val) || '<no name set>';
    this.DelEndpoint = val;
  }
  @Input()
  set EditRoute(val:any){
    this.editroute = (val) || '<no name set>';
    this.editroute = val;
  }
  @Input()
  set UpdateEndpoint(val:any){
    this.updatendpoint = (val) || '<no name set>';
    this.updatendpoint = val;
  }
  @Input()
  set SourceName(val:any){
    this.collectionName = (val) || '<no name set>';
    this.collectionName = val;
  }
  @Input()
  set SearchSourceName(val:any){
    this.searchingSource = (val) || '<no name set>';
    this.searchingSource = val;
  }
  @Input()
  set SearchEndpoint(val:any){
    this.searchingEndpoint = (val) || '<no name set>';
    this.searchingEndpoint = val;
  }
  @Input()
  set AddPageRoute(val:any){
    this.addPageRoute = (val) || '<no name set>';
    this.addPageRoute = val;
  }
 
  constructor(public router : Router) { }

  ngOnInit() {
    console.log('this.preview_detail_listing')
    console.log(this.pendingmodelapplicationarray_detail_datatype)
  }
  addButton(){
    this.router.navigateByUrl('/' + this.addPageRoute);
  }

}
