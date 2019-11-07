import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'lib-Blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['style.css']
})
export class BlogComponent implements OnInit {
<<<<<<< HEAD
  /**blog variables declaration**/
  public addMemberviaUrl: any;
  public ResolveLIstData: any = [];
  public editRouteUrl: any = '';
  public Blogtablename: any = '';
  public deleteRouteUrl: any = '';
  public addupdateRouteUrl: any = '';
  public serverUrlData: any;
  public getDataEndpointData: any;
  public getDataSourceData: any;
  public addEndpointData: any;
  public apiUrlviaApp: any = '';
  public tokenViaapp: any = ''
  public statusArray: any = [];
  public searchEndpointViaApp: any = '';
  public SearchSourcenameViaapp: any = '';
  /**lib-listing start here**/
  public blogDataarray: any = [];
  public Bloglist_skip: any = ["_id", "description", "parent_id"];
  public Bloglist_modify_header: any = {
    'title': "Title", 'description': "Description",
    'parentcategoryname': "Parent Category", "status": "Status", "priority": "Priority"
  };

  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];

  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Title", field: 'title' }],
      search: [{ label: "Search By Parent Category", field: 'parentcategoryname' }]
    };
  /**lib-listing end here**/

  @Input()   // get search endpoint from app
  set SearchEndpoint(value: any) {
    this.searchEndpointViaApp = (value) || '<no name set>';
    this.searchEndpointViaApp = value;
  }
  @Input()   //get search source name from app
  set SearchSourcename(Sourcevalue: any) {
    this.SearchSourcenameViaapp = (Sourcevalue) || '<no name set>';
    this.SearchSourcenameViaapp = Sourcevalue;
  }


  @Input()  //for apiUrl via application
  set BlogapiUrl(apivalue: any) {
    this.apiUrlviaApp = (apivalue) || '<no name set>';
    this.apiUrlviaApp = apivalue;
  }
  @Input()  //for token via application
  set BlogToken(token: any) {
    this.tokenViaapp = (token) || '<no name set>';
    this.tokenViaapp = token;
  }

  @Input()  //for add button
  set addTeammember(addvalue: any) {
    this.addMemberviaUrl = (addvalue) || '<no name set>';
    this.addMemberviaUrl = addvalue;
  }
  @Input()   //Tablename from application
  set Blogtable(value: any) {
    this.Blogtablename = (value) || '<no name set>';
    this.Blogtablename = value;
  }

  @Input() //for edit route
  set editblog(value: any) {
    this.editRouteUrl = (value) || '<no name set>';
    this.editRouteUrl = value;
  }
  @Input()  //for add or update endpoint
  set AddEditBlog(addeditvalue: any) {
    this.addupdateRouteUrl = (addeditvalue) || '<no name set>';
    this.addupdateRouteUrl = addeditvalue
  }
  @Input()     //for deleteEndpoint
  set deleteBlog(delValue: any) {
    this.deleteRouteUrl = (delValue) || '<no name set>';
    this.deleteRouteUrl = delValue
  }

  @Input()          //setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;

  }
  @Input()          //setting the server url from project
  set getDataSource(serverUrlval: any) {
    this.getDataSourceData = (serverUrlval) || '<no name set>';
    this.getDataSourceData = serverUrlval;

  }
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;


  }
  @Input()          //setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;

  }
  @Input()          //resolve list
  set listResolve(listresolveUrlval: any) {
    this.blogDataarray = (listresolveUrlval) || '<no name set>';
    this.blogDataarray = listresolveUrlval;
=======
 
  // ===========================================declaration================================
  blogListConfig:any;
  loader:boolean=false;
  // ======================================================================================

  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
   
    this.blogListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "updated_at","image","description_html"],
      listArray_modify_header: { "blogtitle":"Blog Title", "description": "Description", "priority": "Priority", "status": "Status" ,"parentcategoryname":"Parent Category Name"},
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings:{
        textsearch: [{ label: "Search by blog title...", field: 'blogtitle' },{ label: "Search by parent category...", field: 'parentcategoryname' }],
        selectsearch: [{ label: 'Search By status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
      },
      //  /*Showing Image in the Modal*/
      //  pendingmodelapplicationarray_detail_datatype: [{
      //   key: "image",
      //   value: 'image',
      //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
      // }],
    }
    this.loader = false;
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
  }
  // ====================================================================================================

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    /**observable start here**/
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    this.apiService.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    /**observable end here**/

  }

  /**function end here**/

  addButton() {
    this.router.navigateByUrl('/' + this.addMemberviaUrl);
  }

=======
  }

>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
}

