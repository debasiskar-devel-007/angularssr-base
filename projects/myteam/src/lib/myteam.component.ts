import { Component, OnInit, Input } from '@angular/core';
import { MyteamService } from './myteam.service';
import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { from } from 'rxjs';

@Component({
  selector: 'lib-myteam',
  // templateUrl: './myteam.component.html',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})

export class MyteamComponent implements OnInit {
  public addMemberviaUrl:any;
  public editMemberval:any;
  public serverUrlData:any;
  public getDataEndpointData:any;
  public getDataSourceData: any;
  public addEndpointData:any;
  public teamarray: any = [];
  public teamtablename: any = 'demoteam';
  public teamlist_skip:any=["_id","created_at","multiple_speciality"];
  public teamlist_modify_header:any={'images':"Image","role":"Role","contactemail":"Contact Mail",
  "contactphone":"Phone Number","status":"Status",
  "description":"Description"};
  public teamstatus:any=[{val:1,'name':'Active'},{val:0,'name':'Inactive'}];
  public editteam:any='/editteam';
  public apiUrl:any="http://166.62.39.137:5009/";
  public token:any="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjU0MTQ5NDQsImlhdCI6MTU2NTMyODU0NH0.ewcF3t-3bQIMqC2mB4Jfvtv4xF6yMbMCs2i4FQGV4Uw";
  public deleteendpoint:any='deletesingledata';

  @Input() 
   set addTeammember(addvalue:any){
     this.addMemberviaUrl=(addvalue) || '<no name set>';
     this.addMemberviaUrl=addvalue;
     
   }
  //  @Input()
  //     set editTeamMember(value:any){
  //       this.editMemberval=(value) || '<no name set>';
  //       this.editMemberval=value;
  //     }
   @Input()          //setting the server url from project
     set getDataEndpoint(endpointUrlval: any) {
     this.getDataEndpointData = (endpointUrlval) || '<no name set>';
     this.getDataEndpointData = endpointUrlval;
     console.log('okkkkk'+this.getDataEndpointData);
   }
   @Input()          //setting the server url from project
     set getDataSource(serverUrlval: any) {
     this.getDataSourceData = (serverUrlval) || '<no name set>';
     this.getDataSourceData = serverUrlval;
     console.log('okkkkk'+this.getDataSourceData);
   }
   @Input()          //setting the server url from project
    set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    console.log('serverUrlval');
    console.log(this.serverUrlData);
​
  } 
  @Input()          //setting the server url from project
    set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
    console.log(this.addEndpointData);
  }
  constructor(public httpRequest: MyteamService,public router:Router, public apiService: ApiService,public activeroute:ActivatedRoute) {


  }

  ngOnInit() {
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlData);
    }, 50);

    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    this.apiService.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);

    setTimeout(() => {
      this.getTeamdata();
    }, 100);

  }
  getTeamdata() {
    let data: any;
    data = {
      "source":"demoteam"
    }
    this.apiService.getData(data).subscribe(response => {
      console.log(response);
        let result: any;
        result = response;
        this.teamarray = result.res;
        
    })
    
  }
  addButton(){
    this.router.navigateByUrl('/'+this.addMemberviaUrl);
  }
}
