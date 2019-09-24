import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/app-api.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] 
})
export class HomepageComponent implements OnInit {
  public server:any = 'http://18.191.148.255:5009/';
  public addUrl:any = 'addorupdatedata';
  public updateUrl:any = 'addorupdatedata';
  public deleteUrl:any = 'deletesingledata';
  public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  public getDataEndpointData:any = 'datalist';
  public eventList:any = [];
  constructor(public apiservice:ApiService, public activatedroute: ActivatedRoute) {
    
    
   }

  ngOnInit() { 
    this.activatedroute.data.forEach((data) => {
      // PRE LOAD DATA PRIOR
      this.eventList = data['results'].res;
      
  });
  }

}
