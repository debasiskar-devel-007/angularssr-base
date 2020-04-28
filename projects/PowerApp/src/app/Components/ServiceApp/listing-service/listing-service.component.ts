import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-listing-service',
  templateUrl: './listing-service.component.html',
  styleUrls: ['./listing-service.component.css']
})
export class ListingServiceComponent implements OnInit {

  public dataList:any;

    /************** lib list setup start here *************/
    public serviceListConfig:any = {
      apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/",
      listEndPoint: "datalist",
      datasource: this.dataList,
      tableName: "service_test",
      updateurl: "addorupdatedata",
      editUrl: "service/edit",
      jwtToken: this.cookieService.get('jwtToken'),
      deleteEndPoint: "deletesingledata",
      addLink: "/service/add",
      view:"service_test"
    }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

  this.activatedRoute.data.subscribe(resolveData => {
    console.log(resolveData)

    this.serviceListConfig.datasource = resolveData.serviceList.res;

    this.dataList=this.serviceListConfig.datasource;
    console.log(this.dataList)

    this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}

