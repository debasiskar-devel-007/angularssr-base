import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  /************** lib list setup start here *************/
  public categoryListingConfig:any = {
    apiUrl: "http://166.62.39.137:5009/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "category",
    listArray_skip: [ "_id", "status", "userId", "created_at", "id", "updated_at" ],
    listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
    admintablenameTableName: "admin",
    updateurl: "addorupdatedata",
    editUrl: "category-management/edit",
    jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjYzMDI2NjAsImlhdCI6MTU2NjIxNjI2MH0.RpfUGqdg5DEvze3b1sHPTzJL0Q6hfP6igz7ReOAdQzc",
    deleteEndPoint: "deletesingledata",
  }
  /************** lib list setup end here *************/

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
