import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent implements OnInit {

  public categoryData: any;
  public categoryListingConfig: any;
  public loader: boolean = true;

  @Input()
  set config(receivedCategoryData: any) {
    this.categoryListingConfig = {
      apiUrl: receivedCategoryData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedCategoryData.datasource,
      tableName: receivedCategoryData.tableName,
      listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
      listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
      admintablenameTableName: "admin",
      updateurl: receivedCategoryData.updateEndpoint,
      editUrl: receivedCategoryData.editUrl,
      jwtToken: receivedCategoryData.jwtToken,
      deleteEndPoint: receivedCategoryData.deleteEndPoint
    }
    this.loader = false; 
  }

  constructor(private httpRequest: CategoryManagementService, private router: Router) {
    console.log('Step 4 =================================== Component LIB');
  }

  ngOnInit() {
  }

  addNewCategory() {
    this.router.navigate(['/category-management/create-new']);
  }

}
