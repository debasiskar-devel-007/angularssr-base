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
  public addAvailURL:any='';      // url variable to fetch the add availability form page
  @Input()          //setting the add form url from project
  set addAvailData(addAvailurlval: any) {
    this.addAvailURL = (addAvailurlval) || '<no name set>';
    this.addAvailURL = addAvailurlval;
  }
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    console.log('serverUrlval');
    console.log(serverUrlval);

  }

  slotlist_skip:any=["_id", "phone", "username", "password", "address", "address2", "city", "state", "zip", "rsvp", "signupaffiliate","admin", "agreement", "noofclick", "mediaid", "gender", "ambassador", "dancer", "model", "musicians", "fan", "accesscode", "lastactivetime", "agreement_time", "sign", "commission","unixtime","fullname","children"];
  slotlist_modify_header:any={'added time':"Date Added",'firstname':"First Name",'lastname':"Last Name",'email':"Email",'parent':"Enroller"};
  slotlist_collection:any="events";

    deleteval:any= 'deletesingledata';
    slotlist_status_array:any=[{val:1,name:"Active"},{val:2,name:"Inactive"}];
    updateurl:any = 'addorupdatedata';
    public editroute1:any="";
    public apiurl:any="http://166.62.39.137:5009/";


  constructor(public dialog: MatDialog, public router:Router , public apiservice: ApiService) {
    
  //   this.slotlist= [
  //     {
  //     "id": 1,
  //     "description": "Test Event 1",
  //     "end_date": "2019-07-19",
  //     "end_time": "14:00",
  //     "meetingwith": "Meeting with T",
  //     "start_date": "2019-07-01",
  //     "start_time": "10:00",
  //     "timespan": "30",
  //     "timezone": "-08:00|America/Los_Angeles",
  //     "userid": "5c9b05bed69f4b52413626cf"
  //     },
  //     {
  //     "id": 2,
  //     "description": "Test Event 2",
  //     "end_date": "2019-07-20",
  //     "end_time": "14:00",
  //     "meetingwith": "Meeting with T",
  //     "start_date": "2019-07-08",
  //     "start_time": "10:00",
  //     "timespan": "60",
  //     "timezone": "-07:00|America/Los_Angeles",
  //     "userid": "5c9b05bed69f4b52413626cf"
  //     },
  //     {
  //     "id": 3,
  //     "description": "Test Event 3",
  //     "end_date": "2019-08-01",
  //     "end_time": "14:00",
  //     "meetingwith": "Meeting with T",
  //     "start_date": "2019-07-05",
  //     "start_time": "10:00",
  //     "timespan": "60",
  //     "timezone": "-07:00|America/Los_Angeles",
  //     "userid": "5c9b05bed69f4b52413626cf"
  //     }
  //     ]
   }

  ngOnInit() {
    
    console.log(this.serverUrlData);
    this.apiservice.clearServerUrl();
    setTimeout(() => {
      this.apiservice.setServerUrl(this.serverUrlData);
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
