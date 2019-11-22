import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-listing-service',
  templateUrl: './listing-service.component.html',
  styleUrls: ['./listing-service.component.css']
})
export class ListingServiceComponent implements OnInit {


    /************** lib list setup start here *************/
    public serviceListConfig:any = {
      apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
      listEndPoint: "datalist",
      datasource: "",
      tableName: "services",
      updateurl: "addorupdatedata",
      editUrl: "service/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/service/add",
      view:"services_view"
    }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.serviceListConfig.datasource = resolveData.serviceList.res;
    this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}

