import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lib-contactus-listing',
  templateUrl: './contactus-listing.component.html',
  styleUrls: ['./contactus-listing.component.css']
})
export class ContactusListingComponent implements OnInit {

  public contactUsAllData: any = [];
  // tslint:disable-next-line:variable-name
  // contactUsAllData_skip: any = ['_id'];
  // tslint:disable-next-line:variable-name
  contactUsAllData_modify_header: any = {};

  // tslint:disable-next-line:variable-name
  contactUsAllData_collection: any = 'events';

  public serverURL: any = '';      // url variable to fetch the add availability form page
  public addEndpointData: any = '';
  public getDataEndpointData: any = '';

  @Input()

  set serverUrl(serverUrlval: any) {
    this.serverURL = (serverUrlval) || '<no name set>';
    this.serverURL = serverUrlval;
    console.log(this.serverURL);

  }
  @Input()     // setting the server url from project

  set contactUsAllData_skip(contactUsAllData_skipval: any) {
    this.serverURL = (contactUsAllData_skipval) || '<no name set>';
    this.serverURL = contactUsAllData_skipval;
    console.log(this.serverURL);

  }

  @Input()          // setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }

  @Input()          // setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;
    console.log('this.getDataEndpoint');
    console.log(this.getDataEndpoint);
  }


  constructor(public apiService: ApiService, public http: HttpClient) { }

  ngOnInit() {
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverURL);
    }, 50);
    console.log(this.serverURL);

    this.apiService.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);



    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    console.log(this.addEndpointData);


    setTimeout(() => {
      this.getAllData();
    }, 100);
  }
  getAllData() {
    let data: any;
    data = {
      "source" : 'demoappcontactdetails'
    };
    this.apiService.getData(data).subscribe( res => {
      let result: any = [];

      result = res;
      console.log('resurt');
      console.log(result.res);
      this.contactUsAllData = result.res;
    });
  }

}
