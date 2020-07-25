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


    server: any ='http://localhost:3000/dev/api1/';


    addUrl: any = 'addorupdateblogdata'; //endpoint for add blog

    categoryUrl:any='getcategorydata'; //endpoint for list blog  cat  

    tagsViewEndpoint:any='getblogtagsdata'
 
    getDataUrl: any= '';
    public editdata: any = [];
    action:any="add";
    listURL:any="blog-management/list";

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
          this.editdata= resolveData.blogList.result[0];  
          this.action="edit";    
        });
      }
    });
  }

}
