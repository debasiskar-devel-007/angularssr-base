import { Component, OnInit, Input } from '@angular/core';

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
  @Input()    //getting all data via resolve call from app
  set allData(val: any) {
    this.DataList = (val) || '<no name set>';
    this.DataList = val;
    console.log("ts all data", this.DataList);
  }
  public data_skip: any = ["_id"];
  public data_modify_header: any = {"multipleemail":"Multiple E-mail","categoryname":"Category Name",
  "bulletarray":"Bullet List","multiplephone":"Multiple Phone",
  "membername" : "Member Name","description":"Description"};
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
  constructor() { }

  ngOnInit() {
  }

}
