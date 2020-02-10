import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-addedit-blogmanagement',
  templateUrl: './addedit-blogmanagement.component.html',
  styleUrls: ['./addedit-blogmanagement.component.css']
})
export class AddeditBlogmanagementComponent implements OnInit {


    server: any ='https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/';

    // server: any =environment.apiBaseUrl;

    addUrl: any = 'addorupdatedata';
    // endpoint: environment.apiBaseUrl+ 'addorupdatedata';
    // endpoint2: environment.apiBaseUrl;
    getDataUrl: any= 'datalist';
    public editdata: any = [];
    action:any="add";
    listURL:any="blog-management/list";
  

    // public configData: any = {
    //   baseUrl: "http://3.15.236.141:5005/",
    //   endpoint: "uploads",
    //   size: "51200", // kb
    //   format: ["jpg", "jpeg", "png"], // use all small font
    //   type: "blogs-image",
    //   path: "blogs",
    //   prefix: "blogs-image_"
    // }

    public configData: any = {
      baseUrl: "https://fileupload.influxhostserver.com/",
      endpoint: "uploads",
      size: "51200", // kb
      format: ["jpg", "jpeg","png"], // use all small font
      type: "blogs-image",
      path: "blogs",
      prefix: "blogs-image_",
      formSubmit: false,
      conversionNeeded: 0,
      bucketName: "crmfiles.influxhostserver"
    }


    public configFileData: any = {
      baseUrl: "https://fileupload.influxhostserver.com/",
      endpoint: "uploads",
      size: "51200", // kb
      format: ["pdf", "doc", "docx","docxx"],  // use all small font
      type: "blogs-file",
      path: "blogs",
      prefix: "blogs-file",
      formSubmit: false,
      conversionNeeded: 0,
      bucketName: "crmfiles.influxhostserver"
    }

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.editdata= resolveData.blogList.res[0];  
          this.action="edit";    
        });
      }
    });
  }

}
