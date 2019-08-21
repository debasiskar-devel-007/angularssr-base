import { Component, OnInit,Input } from '@angular/core';

import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'lib-Blog',
  templateUrl:'blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public addMemberviaUrl:any;
  public editRouteUrl:any='';
  public serverUrlData:any;
  public getDataEndpointData:any;
  public getDataSourceData: any;
  public addEndpointData:any;
  //public getTeamdata:any;
  public temparray:any=[];
  public tablename: any = 'blog_category';
   public teamlist_skip:any=["_id"];
   public teamlist_modify_header:any={'title':"Title",'description':"Description",'parentcategoryname':"Parent Category"};
   public status:any=[{val:1,'name':'Active'},{val:0,'name':'Inactive'}];
   //public editteam:any='';
   public apiUrl:any="http://166.62.39.137:5009/";
   public token:any="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjY0NDkwMTUsImlhdCI6MTU2NjM2MjYxNX0.Fchllx2Zz7xDZMv7uaOjF26HlsgRv3x8EUKceltiTnI";
   public deleteendpoint:any='deletesingledata';
   public updateUrl:any = 'addorupdatedata';

  //  public server:any = 'http://166.62.39.137:5009/';
  //  public addUrl:any = 'addorupdatedata';
  //  public updateUrl:any = 'addorupdatedata';
  //  public deleteUrl:any = 'deletesingledata';
  //  public statusUpdateUrl:any = 'statusupdate';
  //  public getDataUrl:any = 'datalist';
  //  public getSourceUrl:any = 'demoteam';
 

   @Input()  //for add button
   set addTeammember(addvalue:any){
     this.addMemberviaUrl=(addvalue) || '<no name set>';
     this.addMemberviaUrl=addvalue;
   }

   @Input() //for edit
   set editblog(value:any){
     this.editRouteUrl=(value) || '<no name set>';
     this.editRouteUrl=value;
   }

  @Input()          //setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
  this.getDataEndpointData = (endpointUrlval) || '<no name set>';
  this.getDataEndpointData = endpointUrlval;
  console.log('okkkkk'+this.getDataEndpointData);
}
@Input()          //setting the server url from project
  set getDataSource(serverUrlval: any) {
  this.getDataSourceData = (serverUrlval) || '<no name set>';
  this.getDataSourceData = serverUrlval;
  console.log('okkkkk'+this.getDataSourceData);
}
@Input()          //setting the server url from project
 set serverUrl(serverUrlval: any) {
 this.serverUrlData = (serverUrlval) || '<no name set>';
 this.serverUrlData = serverUrlval;
 console.log('serverUrlval');
 console.log(this.serverUrlData);
​
} 
@Input()          //setting the server url from project
 set addEndpoint(endpointUrlval: any) {
 this.addEndpointData = (endpointUrlval) || '<no name set>';
 this.addEndpointData = endpointUrlval;
 console.log(this.addEndpointData);
}

  constructor(public router:Router, 
    public apiService: ApiService,public activeroute:ActivatedRoute) {

     }

  ngOnInit() {
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

    setTimeout(() => {
      this.getData();
    }, 100);
  }
  
  getData(){
     
    let data: any;
    data = {
      "source":"blog_category_view"
    }
    this.apiService.getData(data).subscribe(response => {
      //console.log(response);
        let result: any;
        result = response;
       this.temparray = result.res;
       console.log(this.temparray);
        
    })
    
  }
  addButton(){
    this.router.navigateByUrl('/'+this.addMemberviaUrl);
  }





}
