import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
  public teamDataList:any=[];
public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
public addendpoint:any="addorupdatedata";
public listPageRoute:any="team/list";

  constructor(public activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.teamdata.res;
      this.teamDataList = result;
  
    })
  }

}
