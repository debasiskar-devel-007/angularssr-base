import { Component, OnInit, Input, Inject } from '@angular/core';


@Component({
  selector: 'lib-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  // ==============================================declaration============================================
  public testimonialListConfig: any;
  public loader: boolean = true;
  // =====================================================================================================




  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
   
    this.testimonialListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at","image","description","name"],
      listArray_modify_header: { "name copy": "Customer/User Name", "email": "Customer/User Email", "description html": "Testimonial", "priority": "Priority", "status": "Status" },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings:{
        textsearch: [{ label: "Search By Customer Name", field: 'name_copy' },{ label: "Search By Customer Email", field: 'email' }],
        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
      },
       /*Showing Image in the Modal*/
       pendingmodelapplicationarray_detail_datatype: [{
        key: "image",
        value: 'image',
        fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
      }],
      detail_header:['_id']
    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor() { }

  ngOnInit() {
  }

}


