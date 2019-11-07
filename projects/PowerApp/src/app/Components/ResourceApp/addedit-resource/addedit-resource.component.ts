

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-addedit-resource',
  templateUrl: './addedit-resource.component.html',
  styleUrls: ['./addedit-resource.component.css']
})
export class AddeditResourceComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    endpoint: "https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata",
    endpoint2:"https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/",
    source: "resources",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "resource/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.resourceList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}


