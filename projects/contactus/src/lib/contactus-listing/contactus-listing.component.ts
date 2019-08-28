import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {HttpClient} from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'lib-contactus-listing',
  templateUrl: './contactus-listing.component.html',
  styleUrls: ['./contactus-listing.component.css']
})
export class ContactusListingComponent implements OnInit {

  public contactUsAllData: any = [];
  contactUsAllDataHeaderSkipValue: any = [];
  contactUsAllDataModifyHeaderValue: any = {};

  // tslint:disable-next-line:variable-name
  contactUsAllData_collection: any = 'events';

  public serverURL: any = '';      // url variable to fetch the add availability form page
  public addEndpointData: any = '';
  public getDataEndpointData: any = '';

  @Input()     // setting the server url from project

  set serverUrl(serverUrlval: any) {
    this.serverURL = (serverUrlval) || '<no name set>';
    this.serverURL = serverUrlval;
    console.log(this.serverURL);

  }
  @Input()     // setting the server url from project

  set contactUsAllDataHeader_skip(contactUsAllDataHeaderSkipval: any) {
    this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
    this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
    console.log(this.contactUsAllDataHeaderSkipValue);

  }
  @Input()     // setting the server url from project

  set contactUsAllDataModify_header(contactUsAllDataModifyHeaderval: any) {
    this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
    this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
    console.log('this.contactUsAllDataModifyHeaderValue');
    console.log(this.contactUsAllDataModifyHeaderValue);

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


  constructor(public apiService: ApiService, public http: HttpClient,
     public loadingComponent: LoadingComponent
     ) { }

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
    this.loadingComponent.loading = false;
    let data: any;
    data = {
      "source" : 'demoappcontactdetails'
    };
    this.apiService.getData(data).subscribe( res => {
      this.loadingComponent.loading = true;
      let result: any = [];

      result = res;
      if (result.resc != 0) {
      console.log('resurt');
      console.log(result);
      this.contactUsAllData = result.res;
      } else 
      console.log('oppes');
    });
  }

}
