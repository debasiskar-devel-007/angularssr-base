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
  // ----------------------------------------------------------------------------





  // --------------------------Lib Listing Input from App---------------------------
  @Input()
  set config(receivedCategoryData: any) {
  
    this.blogListingConfig = {
      
      apiUrl: receivedCategoryData.apiBaseUrl,
      listEndPoint: "datalist",
      datasource: receivedCategoryData.datasource,
      tableName: receivedCategoryData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at",
      "blogcontent","metatitle","metadesc"],
      listArray_modify_header: {
        "blogtitle": "Blog Title", "blogcat": "Blog Category",
        "blogcontent": "Blog Content", "priority": "Priority", "status": "Status",
        "metatitle": "Meta Title","metadesc":"Meta Description","credentials":"Credentials",
        "tags":"Tags","publication":"Publication","videos":"Number of Videos"
      },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedCategoryData.updateEndpoint,
      editUrl: receivedCategoryData.editUrl,
      jwtToken: receivedCategoryData.jwtToken,
      deleteEndPoint: receivedCategoryData.deleteEndPoint
    }
    this.loader = false;
  }
  // ---------------------------------------------------------------------------------





  constructor(private apiService: ApiService) {

  }

  ngOnInit() {

  }
}