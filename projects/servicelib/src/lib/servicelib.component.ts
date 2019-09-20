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


  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
    console.log("+++",receivedData.view);
    this.serviceListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
      listArray_modify_header: { "service title": "Service title", "service desc": "Service Description",  "priority": "Priority", "status": "Status","bulletarr":"Number of bullets" },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings: {
        textsearch: [{ label: "title...", field: 'service_title' }, { label: "status...", field: 'status' }],
      }
    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor() { }

  ngOnInit() {
  }

}


