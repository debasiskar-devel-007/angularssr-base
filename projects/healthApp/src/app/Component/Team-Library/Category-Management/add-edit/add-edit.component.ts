import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  public teamDataList: any = [];
  public serverUrl: any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public addendpoint: any = "addorupdatedata";
  public listRoute: any = "team/category-management/list";
  public sourceName : any = "team_category";
  public SingleTeamData: any = [];
  public getdataEndpoint:any="datalist";
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      console.log(data);
      let result: any;
      result = data.teamdata.res;
      this.teamDataList = result;
      console.log("okkkkkkk1111111111111",this.teamDataList);
    })
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        console.log(data);
        let result: any;
        result = data.teamdata.res;
        this.SingleTeamData = result;
       
      })
    }
  }

}
