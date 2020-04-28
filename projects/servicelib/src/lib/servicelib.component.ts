import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-servicelib',
  templateUrl: './servicelib.component.html',
  styleUrls: ['./servicelib.component.css']
})
export class ServicelibComponent implements OnInit {

  // ==============================================declaration============================================
  public serviceListConfig: any;
  public loader: boolean = true;
  // =====================================================================================================


  // =============================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
    this.serviceListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "id", "updated_at", "service_desc","additional_img","description",'service_title_search','additional_description','image','service_img','additional_details'],
      listArray_modify_header: { "service title": "Service title", "priority": "Priority", 
      "status": "Status", "bulletarr": "Number of Bullets","date added":"Date","image":"Image","description_html":"Description","description html":"Description" },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,

      /*Search settings in the Listing*/
      search_settings: {
        textsearch: [{ label: "Search by title", field: 'service_title_search' }],
        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }], // this is use for  select search
      },

      /*Showing Image in the Modal*/
      // pendingmodelapplicationarray_detail_datatype:[{
      //   key: "images",
      //   value: 'image',
      //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/'    
      // }],
      detail_header:['_id','additional_details']

    }
    this.loader = false;
  }

  // ====================================================================================================

  constructor() {
  }

  ngOnInit() {
  }

}


