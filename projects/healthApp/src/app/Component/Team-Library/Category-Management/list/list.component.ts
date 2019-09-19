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
 public sourceName:any="Team_category";
 public updateendpoint:any="addorupdatedata";
 public searchendpoint:any="datalist";
 public deleteEndpoint:any="deletesingledata";
 public addPageRoute:any='team/category-management/add';
 public editpageRoute:any='team/category-management/edit';
 public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
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
