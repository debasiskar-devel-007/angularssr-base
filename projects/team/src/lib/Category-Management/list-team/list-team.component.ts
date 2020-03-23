import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  // team category section 
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
  public alldata_skip: any = ["_id","id","updated_at", "created_at","description","categoryName_search","role"];
  public alldata_modify_header: any = {
    "categoryName": "Category Name", "description": "Description",
    "rolename": "Role Name", "status": "Status","role" : "Role","parent category":"Parent Category","date_added":"Date","date added":"Date","description_html":"Description","description html":"Description"};
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public previewModal_detail_skip: any = ['_id',"id","updated_at","created_at","categoryName_search"];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Category Name", field: 'categoryName_search' }],
      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"created_at"}]
    };



    // team section 

    public allTeamdata: any = '';
    public searchingTeamendpoint: any = '';
    public sourcenameTeamViaapp: any ='';
    public searchSourcenameTeamViaapp:any='';
    public tokenTeamVal: any = '';
    public deleteTeamendpointVal: any="";
    public addTeamupdate: any = '';
    public serverUrlTeamData: any = '';
    public editTeamRouteval: any = '';
    public manageTeamRoute: any;

    //team category section

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







   //team section

   @Input()        //manage team button route
   set ManageButtonRoute(val: any) {
     this.manageTeamRoute = (val) || '<no name set>';
     this.manageTeamRoute = (val);
   }

   @Input()          //getting all data list via resolve call from app
   set TeamAllData(val: any) {
     this.allTeamdata = (val) || '<no name set>';
     this.allTeamdata = val;
   }
   @Input()          //getting edit page route from app
   set EditTeamRoute(val: any) {
     this.editTeamRouteval = (val) || '<no name set>';
     this.editTeamRouteval = val;
 
   }

 
   @Input()
   set UpdateTeamRoute(val: any) {
     this.addTeamupdate = (val) || '<no name set>';
     this.addTeamupdate = val;
     
   }
   @Input()
   set TokenTeam(val: any) {
     this.tokenTeamVal = (val) || '<no name set>';
     this.tokenTeamVal = val;
    
   }
   @Input()
   set SourceNameTeam(val: any) {
     this.sourcenameTeamViaapp = (val) || '<no name set>';
     this.sourcenameTeamViaapp = val;
   }
   @Input()
   set SearchSourceNameTeam(val: any) {
     this.searchSourcenameTeamViaapp = (val) || '<no name set>';
     this.searchSourcenameTeamViaapp = val;
   }
   @Input()
   set SearchEndpointTeam(val: any) {
     this.searchingTeamendpoint = (val) || '<no name set>';
     this.searchingTeamendpoint = val;
 
   }
   @Input()
   set DeleteEndpointTeam(val: any) {
     this.deleteTeamendpointVal = (val) || '<no name set>';
     this.deleteTeamendpointVal = val;
    
   }
   @Input()          //setting the server url from project
   set serverUrlTeam(serverUrlval: any) {
     this.serverUrlTeamData = (serverUrlval) || '<no name set>';
     this.serverUrlTeamData = serverUrlval;
     
   }

   public teamStatus: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];

   public alldata_skip_team: any = ["_id", "bulletarray", "created_at", "updated_at", "id","categoryname_search","membername_search","description","categoryid","teamsearch"];
   public data_modify_header: any = {
     "membername": "Member Name", "date added": "Date"
     , "categoryname": "Category Name", "multiplephone": "Phone Numbers", "image": "Image", "status": "Status","description_html":"Description","description html":"Description","multipleemail":"Emails","designation":"Designation","priority":"Priority"
   };
   public pendingmodelapplicationarray_detail_datatype: any = [{
     key: "images",
     value: 'image',
     fileurl: 'https://s3.us-east-2.amazonaws.com/teammanagement-files/team/'    // Image path 
   }];
   public team_search_settings: any =
     {
       textsearch: [
       { label: "Search By Member Name", field: 'membername_search' }],
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.teamStatus }],
      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"created_at"}]
      //    
 
     };
   public team_previewModal_detail_skip: any = ['_id',"description"];


  constructor(public router: Router) { }

  ngOnInit() {
  }
  addButton() {
    this.router.navigateByUrl('/' + this.addPageVal);
  }
  manageTeamButton() {
    this.router.navigateByUrl('/' + this.manageTeamRoute);
  }
}
