import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addedit-blogmanagement',
  templateUrl: './addedit-blogmanagement.component.html',
  styleUrls: ['./addedit-blogmanagement.component.css']
})
export class AddeditBlogmanagementComponent implements OnInit {

    server: any ='https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
    addUrl: any = 'addorupdatedata';
    getDataUrl: any= 'datalist';
    public editdata: any = [];
  

    public configData: any = {
      baseUrl: "http://3.15.236.141:5005/",
      endpoint: "uploads",
      size: "51200", // kb
      format: ["jpg", "jpeg", "png"], // use all small font
      type: "blogs-image",
      path: "blogs",
      prefix: "blogs-image_"
    }

    public configFileData: any = {
      baseUrl: "http://3.15.236.141:5005/",
      endpoint: "uploads",
      size: "51200", // kb
      format: ["pdf", "doc", "docx","docxx"], // use all small font
      type: "blogs-file",
      path: "blogs",
      prefix: "blogs-file"
    }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.forEach(data => {
        let result: any;
        result = data.results.res[0];
        this.editdata = result;
      });
    }
    
  }

}
