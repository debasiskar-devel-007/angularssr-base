
/** This is the category listing **/

import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'lib-Blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['style.css']
})
export class BlogComponent implements OnInit {
  public blodata:any=[];
 // send basic sort data
 sortdata:any={
  "type":'desc',
  "field":'priority',
  "options":['priority','parentcategoryname','blogtitle']
};
// datacollection
datacollection: any='getbloglistdata';
date_search_source_count: any=0;
// send basic limit data
limitcond:any={
  "limit":10,
  "skip":0,
  "pagecount":1
}; 
  // ===========================================declaration================================
  blogListConfig:any;
  loader:boolean=false;
  // ======================================================================================

  // ================================================Input For Lib Listing================================
  // public value:any=[{val:'','name':''}];
  public value:any=[];
  @Input()
  set config(receivedData: any) {
     for (let i in receivedData.datasource) {
       this.value.push(
         { 'name': receivedData.datasource[i].parentcategoryname, val: receivedData.datasource[i].parentcategoryname }
         );
  
   }

    this.blogListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      endpoint :receivedData.endpoint,
      endpointc:receivedData.endpointc,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "updated_at","image","description","parentcategoryname_search","blogtitle_search","blogtitlesearch"],
      listArray_modify_header: { "blogtitle":"Category Name", "description html": "Description", "priority": "Priority", "status": "Status" ,"parentcategoryname":"Parent Category Name","blogcat":"Blog Category","date":"Date"},
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,

      search_settings:{
        textsearch: [{ label: "Search by Blog Category Name", field: 'blogtitlesearch' }],
        selectsearch: [
          { label: 'Search By Status', field: 'status',values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
        },
          {label:"Search By Parent Category Name",field:'parentcategoryname',values:this.value}
        ]

        // search:[{label:"Search By Parent Category",field:'parentcategoryname',values:this.value}]
      }
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

  constructor(public apiService:ApiService) { }

  ngOnInit() {
    let endpoint=this.blogListConfig.endpoint;
    let endpointc=this.blogListConfig.endpointc;

    let data:any={
        "condition":{
            "limit":10,
            "skip":0
        },
    sort:{
        "type":'desc',
        "field":'priority'
    }

    }
    this.apiService.getDataWithoutToken(endpointc, data).subscribe((res:any) => {
        this.date_search_source_count =res.count;
      
    }, error => {
        console.log('Oooops!');
    });

    this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
    
    }, error => {
        console.log('Oooops!');
    });

  }
  

}

