import { Component, OnInit, Input } from '@angular/core';
//import {MatPaginator} from '@angular/material/paginator';
//import {MatSort} from '@angular/material/sort';
//import {MatTableDataSource} from '@angular/material/table';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calenderlib',
  // template: `
  //   <p>
  //     calenderlib works!
  //   </p>
  // `,
  // ,
  templateUrl: 'calendarlib.component.html',
  styleUrls: ['style.css']
})
export class CalenderlibComponent implements OnInit {
//for gridlist colspan and rowspan style
cols: number=1;             
rows: number=1;
public slotlist:any= [];
public addAvailURL:any='';      // url variable to fetch the add availability form page
@Input()          //setting the add form url from project
set addAvailData(addAvailurlval: any) {
  this.addAvailURL = (addAvailurlval) || '<no name set>';
  this.addAvailURL = addAvailurlval;
}
  constructor(public router:Router) {
    this.slotlist= [
      {
      "id": 1,
      "description": "Test Event 1",
      "end_date": "2019-07-19",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-01",
      "start_time": "10:00",
      "timespan": "30",
      "timezone": "-08:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      },
      {
      "id": 2,
      "description": "Test Event 2",
      "end_date": "2019-07-20",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-08",
      "start_time": "10:00",
      "timespan": "60",
      "timezone": "-07:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      },
      {
      "id": 3,
      "description": "Test Event 3",
      "end_date": "2019-08-01",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-05",
      "start_time": "10:00",
      "timespan": "60",
      "timezone": "-07:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      }
      ]
   }

  ngOnInit() {
  }
  gotoAvailability() {              //for rendering the project in the add form
    this.router.navigateByUrl('/'+this.addAvailURL);
  }

}
