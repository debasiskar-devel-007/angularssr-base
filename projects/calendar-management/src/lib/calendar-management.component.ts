import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './api.service';

export interface DialogData {             //for dialogue test
  animal: string ;
}

@Component({
  selector: 'lib-calendar-management',
  templateUrl: 'calendar-management.component.html',
  styleUrls: ['style.css']
})
export class CalendarManagementComponent implements OnInit {
  //for gridlist colspan and rowspan style
  cols: number=1;             
  rows: number=1;
  public slotlist:any= [];
  public serverUrlData:any;
  public addEndpointData:any;
  public slotUrl:any;
  public updateEndpointData:any;
  public deleteSingleEndpointData:any;
  public statusSingleUpdateEndpointData:any;
  public getDataEndpointData:any;
  public jwttoken:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjYwMzU4NTUsImlhdCI6MTU2NTk0OTQ1NX0.dYvUFuvdsRrvkAOsBd4Jm77OxvkDy2pTKmMaNGIBw9E';
  
  public addAvailURL:any='';      // url variable to fetch the add availability form page
  @Input()          //setting the add form url from project
  set addAvailData(addAvailurlval: any) {
    this.addAvailURL = (addAvailurlval) || '<no name set>';
    this.addAvailURL = addAvailurlval;
  }
  
@Input()          //setting the add form url from project
  set sloturl(val: any) {
    this.slotUrl = (val) || '<no name set>';
    this.slotUrl = val;
  }



  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    console.log('serverUrlval');
    console.log(serverUrlval);

  }
  @Input()          //setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }
  @Input()          //setting the server url from project
  set updateEndpoint(endpointUrlval: any) {
    this.updateEndpointData = (endpointUrlval) || '<no name set>';
    this.updateEndpointData = endpointUrlval;
  }
  @Input()          //setting the server url from project
  set deleteSingleEndpoint(endpointUrlval: any) {
    this.deleteSingleEndpointData = (endpointUrlval) || '<no name set>';
    this.deleteSingleEndpointData = endpointUrlval;
  }
  @Input()          //setting the server url from project
  set statusSingleUpdateEndpoint(endpointUrlval: any) {
    this.statusSingleUpdateEndpointData = (endpointUrlval) || '<no name set>';
    this.statusSingleUpdateEndpointData = endpointUrlval;
  }
  @Input()          //setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;
  }
  slotlist_skip:any=["_id","Fri","Mon","Sat","Sun","Tues","Thurs","Wed","timespan","status","created_at","event_details"];
  slotlist_modify_header:any={'event title':"Event Title",'start date':"Start Date",'end date':"End Date",'start time':"Start Time",'end time':"End Time","eventtype":"Type"};
  slotlist_collection:any="events";

    deleteval:any= 'deletesingledata';
    slotlist_status_array:any=[{val:1,name:"Active"},{val:0,name:"Inactive"}];
    updateurl:any = 'addorupdatedata';
    public editroute1:any="edit-availability/";
    public apiurl:any="http://166.62.39.137:5009/";


  constructor(public dialog: MatDialog, public router:Router , public apiservice: ApiService) {
    
   }

  ngOnInit() {
    
    console.log(this.serverUrlData);
    this.apiservice.clearServerUrl();
    setTimeout(() => {
      this.apiservice.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiservice.clearaddEndpoint();
    setTimeout(() => {
      this.apiservice.setaddEndpoint(this.addEndpointData);
    }, 50);
    this.apiservice.clearupdateEndpoint();
    setTimeout(() => {
      this.apiservice.setupdateEndpoint(this.updateEndpointData);
    }, 50);
    this.apiservice.cleardeletesingleEndpoint();
    setTimeout(() => {
      this.apiservice.setdeletesingleEndpoint(this.deleteSingleEndpointData);
    }, 50);
    this.apiservice.clearupdatestatus_singleEndpoint();
    setTimeout(() => {
      this.apiservice.setupdatestatus_singleEndpoint(this.statusSingleUpdateEndpointData);
    }, 50);
    this.apiservice.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    setTimeout(()=>{
      this.getSlotList();
    },100);
    
    
  }
  getSlotList(){
    let data: any = {};
    data= {
      "source": "events"
    };
    this.apiservice.getData(data).subscribe(res => {
        console.log(res);
        let resp: any;
        resp = res;
        console.log('result in getDataFunction');
        console.log(resp);
        this.slotlist = resp.res;
      });
  }
  gotoAvailability() {              //for rendering the project in the add form
    this.router.navigateByUrl('/'+this.addAvailURL);
  }
  gotoRoute(route:any){
    this.router.navigateByUrl('/'+route);
  }

}
@Component({
  selector: 'lib-add-availability',
  templateUrl: 'add-availability.component.html',
  styleUrls: ['style.css']
})
export class AddAvailabilityComponent {

  constructor( public dialogRef: MatDialogRef<AddAvailabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

}
