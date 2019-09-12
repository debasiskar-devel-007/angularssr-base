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
  public updateendpointData: any = '';
  public deleteendpointData: any = '';

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
    // console.log('this.addEndpointData');
    // console.log(this.addEndpointData)
  }

  @Input()          // setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;
    console.log('this.getDataEndpointData');
    console.log(this.getDataEndpointData);
  }

  @Input()          // This is a Update Url
  set updateendpoint(updateendpointval: any) {
    this.updateendpointData = (updateendpointval) || '<no name set>';
    this.updateendpointData = updateendpointval;
    console.log('this.updateendpointData');
    console.log(this.updateendpointData);
  }

  @Input()          // this is a Delete Url
  set deleteendpoint(deleteendpointval: any) {
    this.deleteendpointData = (deleteendpointval) || '<no name set>';
    this.deleteendpointData = deleteendpointval;
    console.log('this.deleteendpointData');
    console.log(this.deleteendpointData);
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
      this.apiService.setgetdataEndpoint(this.getDataEndpointData.endpoint);
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
      "source" : this.getDataEndpointData.source
    };
    this.apiService.getData(data).subscribe(response => {
      this.loadingComponent.loading = true;
      let result: any = [];

      result = response;
      if (result.resc != 0) {
      console.log('result');
      console.log(result);
      this.contactUsAllData = result.res;
      } else 
      console.log('oppes');
    });
  }

}
