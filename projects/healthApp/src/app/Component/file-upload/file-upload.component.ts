import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "profile-picture",
    path: "files",
    prefix: "profile_picture_",
    conversionNeeded: 1,
    aspectratio: [467/638,467/467],
    bucketName: "awsbackend-dev-patient-files"
  }

  constructor() { }

  ngOnInit() {
  }

  showData() {
    console.log(this.configData);
  }

}


