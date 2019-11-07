import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-listing-resource',
  templateUrl: './listing-resource.component.html',
  styleUrls: ['./listing-resource.component.css']
})
export class ListingResourceComponent implements OnInit {

  

  

    /************** lib list setup start here *************/
    public resourceListConfig:any = {
      apiBaseUrl: "https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/",
      listEndPoint: "datalist",
      datasource: "",
      tableName: "resources",
      updateurl: "addorupdatedata",
      editUrl: "resource/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/resource/add",
      view: "resources_view"
      
    }
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        this.resourceListConfig.datasource = resolveData.resourceList.res;
        this.resourceListConfig.jwtToken = this.cookieService.get('jwtToken');
        
      });
    }

    ngOnInit() {
    }
}
