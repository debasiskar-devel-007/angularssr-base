import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'lib-Blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['style.css']
})
export class BlogComponent implements OnInit {
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
  public tokenViapp:any=''
  /**lib-listing start here**/
  public blogDataarray: any = [];
  public Bloglist_skip: any = ["_id","description"];
  public Bloglist_modify_header: any = { 'title': "Title", 'description': "Description",
      'parentcategoryname': "Parent Category","status":"Status","priority":"Priority" };
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  /**lib-listing end here**/

  @Input()  //for apiUrl via application
  set BlogapiUrl(apivalue: any) {
    this.apiUrlviaApp = (apivalue) || '<no name set>';
    this.apiUrlviaApp = apivalue;
  }
  @Input()  //for token via application
  set BlogToken(token: any) {
    this.tokenViapp = (token) || '<no name set>';
    this.tokenViapp = token;
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
    
    
  }

  constructor(public router: Router,
    public apiService: ApiService, public activeroute: ActivatedRoute) {

  }

  ngOnInit() {
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
  /***getting all the blog data function start here**/

  getData() {

    let data: any;
    data = {
      "source": "blog_category_view"
    }
    this.apiService.getData(data).subscribe(response => {
      let result: any;
      result = response;
      this.blogDataarray = result.res;
      

    })

  }
   /**function end here**/
 
  addButton(){
    this.router.navigateByUrl('/'+this.addMemberviaUrl);
  }
 
}
