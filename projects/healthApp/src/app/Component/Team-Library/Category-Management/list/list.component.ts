import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {HttpService} from '../../../../service/http.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


//  team category management 
 public TeamData:any=[];

 public sourceName:any="team_category";
 public updateendpoint:any="addorupdatedata";
 public searchSourceName:any="team_category_view";
 public searchendpoint:any="datalist";
 public deleteEndpoint:any="deletesingledata";
 public addPageRoute:any='team/category-management/add';
 public editpageRoute:any='team/category-management/edit';
 public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
 public jwtToken=this.cookies.get('jwtToken');

//  team management 
public  manageButtonRoute:any='team/add';
public  TeamAllData:any=[];
public  EditTeamRoute:any='team/edit';
public  UpdateTeamRoute :any='addorupdatedata';
public  TokenTeam:any=this.cookies.get('jwtToken');;
public  SourceNameTeam:any='team_management';
public  SearchSourceNameTeam:any='team_management_view';
public  SearchEndpointTeam:any='datalist';
public  DeleteEndpointTeam:any='deletesingledata';
public  serverUrlTeam:any='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/';


  constructor(public activeRoute : ActivatedRoute,public cookies:CookieService,public httpService:HttpService) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
       let result: any;
        result = data.teamdata.res;
        this.TeamData = result;
    })


    let data:any;
    data={
      "source":"team_management_view"
    }
    this.httpService.CustomRequest(data,'datalist').subscribe(res=>{
      console.log(res)
      let result:any;
      result=res;
      this.TeamAllData=result.res;
      console.log('>>>>>',this.TeamAllData)


    })
  }

}
