import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'lib-rolemanagementlib',
  templateUrl: 'rolemanagement.component.html',
  styleUrls: ['style.css']
})

export class RolemanagementlibComponent implements OnInit {
// ----------------------------variable declarations-----------------------
  public roleData: any;
  public roleListingConfig: any;
  public loader: boolean = true;
// ----------------------------------------------------------------------------








// --------------------------Lib Listing Input from App---------------------------
  @Input()
  set config(receivedCategoryData: any) {
    this.roleListingConfig = {
      apiUrl: receivedCategoryData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedCategoryData.datasource,
      tableName: receivedCategoryData.tableName,
      listArray_skip: [ "_id", "userId", "created_at", "id", "updated_at" ],
      listArray_modify_header: { "rolename": "Role Name","roledesc":"Role Description","status":"Status"},
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active"}, { val: 0, name:'Inactive' }],
      updateurl: receivedCategoryData.updateEndpoint,
      editUrl: receivedCategoryData.editUrl,
      jwtToken: receivedCategoryData.jwtToken,
      deleteEndPoint: receivedCategoryData.deleteEndPoint
    }
    this.loader = false; 
  }
// ---------------------------------------------------------------------------------







  constructor() {
    
  }

  ngOnInit() {
  }

}
