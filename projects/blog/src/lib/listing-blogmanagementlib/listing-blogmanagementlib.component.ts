import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

/** This is the actuali main blog page **/

@Component({
  selector: 'lib-listing-blogmanagementlib',
  templateUrl: './listing-blogmanagementlib.component.html',
  styleUrls: ['./listing-blogmanagementlib.component.css']
})
export class ListingBlogmanagementlibComponent implements OnInit {

public value:any;

  // ===========================================declaration================================
  blogListConfig: any;
  loader: boolean = false;
  // ======================================================================================
 // send basic sort data
 sortdata:any={
  "type":'desc',
  "field":'priority',
  "options":['blog_title','author','category','blogtitle']
};
// datacollection
datacollection: any='getadminbloglistdata';
date_search_source_count: any=0;
// send basic limit data
limitcond:any={
  "limit":10,
  "skip":0,
  "pagecount":1
}; 
  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {

   this.value = receivedData;
    this.blogListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      endpoint :receivedData.endpoint,
      endpointc:receivedData.endpointc,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description_html", "credentials", "blogs_file", "blogs_image","blogtitle_search","author_search"],
      listArray_modify_header: {
        "blogtitle": "Blog Title", "description": "Description","date added":"Date","profile picture":"Profile Picture","tags":"Tags",
        "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
        "author": "Author","blogcat":"Blog Category","date":"Date"
      },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings: {
        textsearch: [{ label: "blog title...", field: 'blogtitle_search' },{ label: "author...", field: 'author_search' }],
        selectsearch: [{ label: 'status...', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
        // datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],
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



  constructor(private apiService: ApiService) {
   
  }

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
        "field":'blog title'
    }

    }
    this.apiService.getDataWithoutToken(endpointc, data).subscribe((res:any) => {
        // console.log('in constructor');
        // console.log(result);
        this.date_search_source_count =res.count;
        console.warn('blogData c',res);

    }, error => {
        console.log('Oooops!');
    });

    this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
        // console.log('in constructor');
        // console.log(result);
        // this.pendingmodelapplicationarray =res.results.res;
        //console.warn('blogData',res);

    }, error => {
        console.log('Oooops!');
    });

  }
}