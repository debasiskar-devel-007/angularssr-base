import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
public teamDataList:any=[];
public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
public addendpoint:any="addorupdatedata";
public listPageRoute:any="team/category-management/list";
public getdataEndpoint:any="datalist";
public sourceName :any="team_management";
public categorySourceName : any = "team_category";
public configData: any = {
  baseUrl: "https://fileupload.influxhostserver.com/",
  endpoint: "uploads",
  size: "51200", // kb
  format:["jpg", "jpeg", "png", "bmp", "zip", 'html'],  // use all small font
  type: "team-picture",
  path: "team",
  prefix: "team-picture_",
  formSubmit: false,
  conversionNeeded: 0,
  bucketName: "teammanagement-files"
}
  constructor(public activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.teamdata.res;
      this.teamDataList = result;    
    })
    
    if(this.activeRoute.snapshot.params._id){
       this.activeRoute.data.forEach(data => {
        let result: any= data.teamdata.res;
        // result = data.teamdata.res;
        this.teamDataList = result;    
        console.log("data for editttt",this.teamDataList);
      })
    }
  }

}
