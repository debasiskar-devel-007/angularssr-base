import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-listing-newsletterlib',
  templateUrl: './listing-newsletterlib.component.html',
  styleUrls: ['./listing-newsletterlib.component.css']
})
export class ListingNewsletterlibComponent implements OnInit {

  // ==============================================declaration============================================
  public newsConfigForm: any;
  public loader: boolean = true;
  // =====================================================================================================




  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
    this.newsConfigForm = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at","title_search","publishdate_normal_format","subject_search"],
      listArray_modify_header: {
        'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
        'publishdate': 'Publish Date', 'status': 'Status','date added':'Date Added'
      },
      admintablenameTableName: "admin",
      status: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      detail_header: ['_id','publishdate_normal_format','title_search'],
      date_search_source:receivedData.view,
      date_search_endpoint:'datalist',
      search_settings: {
        textsearch: [{ label: "Search by title...", field: 'title_search' },
        { label: "Search by subject...", field: 'subject_search' }],
        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"publishdate_normal_format"}],
        // search: [{ label: "Search By group", field: '' }]
      },  
    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor() {

  }

  ngOnInit() {
  }

}


