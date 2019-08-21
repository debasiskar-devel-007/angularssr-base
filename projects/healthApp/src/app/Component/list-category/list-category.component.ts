import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  /************** lib list setup start here *************/
  public categoryData: any;
  public categoryListingConfig:any = {
    apiUrl: "http://166.62.39.137:5009/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "category",
    listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
    listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
    admintablenameTableName: "admin",
    updateurl: "addorupdatedata",
    editUrl: "category-management/edit",
    jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjY0Nzg5MzcsImlhdCI6MTU2NjM5MjUzN30.PpPJaIm_fK_HFB3y2A3zba-51k-JrNVgJpspp-k4Q2E",
    deleteEndPoint: "deletesingledata",
    categoryList: ""
  }
  /************** lib list setup end here *************/

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.data.subscribe(resolveData => {
      this.categoryListingConfig.categoryList = resolveData.categoryListData;
    });
  }

  ngOnInit() {
  }

}
