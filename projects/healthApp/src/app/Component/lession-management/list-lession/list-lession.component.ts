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
    apiUrl: "http://166.62.39.137:5009/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "lession",
    listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
    listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
    admintablenameTableName: "admin",
    updateurl: "addorupdatedata",
    editUrl: "lession-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata"
  }
  /************** lib list setup end here *************/

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.activatedRoute.data.subscribe(resolveData => {
      this.lessionListingConfig.datasource = resolveData.lessionData;
      this.lessionListingConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

  ngOnInit() {
  }

}
