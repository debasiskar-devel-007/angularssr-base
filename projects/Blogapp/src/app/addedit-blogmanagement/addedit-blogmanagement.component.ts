import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addedit-blogmanagement',
  templateUrl: './addedit-blogmanagement.component.html',
  styleUrls: ['./addedit-blogmanagement.component.css']
})
export class AddeditBlogmanagementComponent implements OnInit {

  public configAddEdit: any = {
    action: "add",
    endpoint: "http://18.191.148.255:5009/",
    serverUrl:"http://18.191.148.255:5009/",
    addEndPoint: "addorupdatedata",
    source: "blogmanagement",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "role-management",
    userData: { id: "18801017007", name: "Admin" },
    getDataUrl: 'datalist'
  }
  
  // public server: any = 'http://18.191.148.255:5009/';
  // public addUrl: any = 'addorupdatedata';
  // public getDataUrl: any = 'datalist';
  // public editdata: any = [];
  constructor( private cookieService : CookieService , private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.editData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
         
        });
      }
    });
  }

}
