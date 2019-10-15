import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-resourcelib',  
  templateUrl: 'resourcelib.component.html',
  styleUrls: ['resourcelib.component.css']
})
export class ResourcelibComponent implements OnInit {

  // ===========================================declaration================================
  resourceListConfig:any;
  loader:boolean=false;
  // ======================================================================================

  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
   
    this.resourceListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at","image"],
      listArray_modify_header: { "category name": "Category Name", "parent category": "Parent Category", "description": "Description", "priority": "Priority", "status": "Status" },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings:{
        textsearch: [{ label: "Search by Category name...", field: 'category_name' },{ label: "Search by parent category...", field: 'parent_category' }],
        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
      },
      //  /*Showing Image in the Modal*/
      //  pendingmodelapplicationarray_detail_datatype: [{
      //   key: "image",
      //   value: 'image',
      //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
      // }],
    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor() { }

  ngOnInit() {
  }

}
