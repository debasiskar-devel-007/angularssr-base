import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list-lession',
  templateUrl: './list-lession.component.html',
  styleUrls: ['./list-lession.component.css']
})

export class ListLessionComponent implements OnInit {

  /************** lib list setup start here *************/
  public lessionListingConfig:any = {
    apiBaseUrl: "http://18.191.148.255:5009/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "lession",   
    updateurl: "addorupdatedata",
    editUrl: "lession-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata"
  }
 
  /************** lib list setup end here *************/

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.activatedRoute.data.subscribe(resolveData => {
      this.lessionListingConfig.datasource = resolveData.lessionData.res;
      this.lessionListingConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }
  // constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.data.subscribe(resolveData => {
  //     this.roleListingConfig.datasource = resolveData.roleListData.res;
  //     this.roleListingConfig.jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjcwODI2MDQsImlhdCI6MTU2Njk5NjIwNH0.wIrIG0ZNhiS9LGoNfy3BKQU6sBJ7kPp4fnCt2J48pPA';
  //     console.log('Get Data from reslove...................');
  //   });
  // }
  ngOnInit() {
  }

}
