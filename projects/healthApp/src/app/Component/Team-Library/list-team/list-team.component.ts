import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
   public allDataList:any=[];
   public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/" ;
   public token=this.cookies.get('jwtToken');
   public deleteendpoint:any="deletesingledata";
   public editUrl="team/edit";
   public collectionName="team_management";
   public searchSourceName="team_management_view";
   public searchingEndpoint="datalist";
   public addPageRoute = "team/add";
  constructor(public activateRoute : ActivatedRoute,public cookies :CookieService) { }

  ngOnInit() {
    this.activateRoute.data.forEach(data => {
      let result: any;
      result = data.teamdata.res;
      this.allDataList = result;
      console.log(this.allDataList);
    })
  }

}
