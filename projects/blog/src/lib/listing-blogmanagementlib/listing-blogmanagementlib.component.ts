import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'lib-listing-blogmanagementlib',
  templateUrl: './listing-blogmanagementlib.component.html',
  styleUrls: ['./listing-blogmanagementlib.component.css']
})
export class ListingBlogmanagementlibComponent implements OnInit {
  // ----------------------------variable declarations-----------------------
  public blogData: any;
  public blogListingConfig: any;
  public loader: boolean = true;
  // date_search_endpoint is use for All search endpoint
date_search_endpoint: any='datalist';


// this is a database All search collection or view name
date_search_source: any='blogs_view';
  // ----------------------------------------------------------------------------





  // --------------------------Lib Listing Input from App---------------------------
  @Input()
  set config(receivedCategoryData: any) {
    console.log("END",receivedCategoryData);
    this.blogListingConfig = {
      
      apiUrl: receivedCategoryData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedCategoryData.datasource,
      tableName: receivedCategoryData.tableName,
      tableName2:receivedCategoryData.tableName2,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at",
      "blogcontent","metatitle","metadesc"],
      listArray_modify_header: {
        "blogtitle": "Blog Title", "blogcategory": "Blog Category",
        "blogcontent": "Blog Content", "priority": "Priority", "status": "Status",
        "metatitle": "Meta Title","metadesc":"Meta Description","credentials":"Credentials",
        "tags":"Number of tags","publication":"Publication","videos":"Number of videos"
        
      },   
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedCategoryData.updateEndpoint,
      editUrl: receivedCategoryData.editUrl,
      jwtToken: receivedCategoryData.jwtToken,
      deleteEndPoint: receivedCategoryData.deleteEndPoint,
     
       search_settings: 
   {
     
     textsearch: [{ label: "Search By Title", field: 'blogtitle' },
    //  { label: "Search By Blog Category", field: 'blogcat' },
     { label: "Search By Tags", field:'tags' }],
   },
     search: [{ label: "Search By Blog Category", field: 'blogcat' }]
    
   
    //   search_settings:{
    //     textsearch:[{label:"Search By Blog title",field:'blogtitle'},
    //     {label:"Search By Blog Category",field:'blogcat'},
    //     {label:"Search By Tags",field:'tags'}],
    //     datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],                
    // }
    }
    this.loader = false;
  }
  // ---------------------------------------------------------------------------------





  constructor(private apiService: ApiService) {

  }

  ngOnInit() {

  }
}