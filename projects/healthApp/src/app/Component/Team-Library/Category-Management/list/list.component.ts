import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 public allTeamData:any=[];
 public sourceName:any="team_category";
 public updateendpoint:any="addorupdatedata";
 public searchSourceName:any="team_category_view";
 public searchendpoint:any="datalist";
 public deleteEndpoint:any="deletesingledata";
 public addPageRoute:any='team/category-management/add';
 public manageButtonRoute:any='team/list';
 public editpageRoute:any='team/category-management/edit';
 public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
 public jwtToken=this.cookies.get('jwtToken');
  constructor(public activeRoute : ActivatedRoute,public cookies:CookieService) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
       let result: any;
        result = data.teamdata.res;
        this.allTeamData = result;
    })
  }

}
