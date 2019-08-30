import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-lession',
  templateUrl: './list-lession.component.html',
  styleUrls: ['./list-lession.component.css']
})

export class ListLessionComponent implements OnInit {

  public lessionListingConfig: any;
  public loader: boolean = true;

  @Input()
  set config(receivedLessionData: any) {

    this.lessionListingConfig = {
      apiUrl: receivedLessionData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedLessionData.datasource,
      tableName: receivedLessionData.tableName,
      listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active"}, { val: 0, name:'Inactive' }],
      updateurl: receivedLessionData.updateEndpoint,
      editUrl: receivedLessionData.editUrl,
      jwtToken: receivedLessionData.jwtToken,
      deleteEndPoint: receivedLessionData.deleteEndPoint
      
    }
   
    this.loader = false;
  }

  // @Input()
  // set config(receivedCategoryData: any) {
  //   this.roleListingConfig = {
  //     apiUrl: receivedCategoryData.apiBaseUrl,
  //     listEndPoint: "datalist",
  //     datasource: receivedCategoryData.datasource,
  //     tableName: receivedCategoryData.tableName,
  //     listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
  //     listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
  //     admintablenameTableName: "admin",
  //     statusarr: [{ val: 1, name: "Active"}, { val: 0, name:'Inactive' }],
  //     updateurl: receivedCategoryData.updateEndpoint,
  //     editUrl: receivedCategoryData.editUrl,
  //     jwtToken: receivedCategoryData.jwtToken,
  //     deleteEndPoint: receivedCategoryData.deleteEndPoint
  //   }
  //   this.loader = false; 
  // }


  constructor(private httpRequest: LessionManagementService, private router: Router) { }

  ngOnInit() {
  }

}
