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
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "profile-picture",
    path: "files",
    prefix: "profile_picture_",
    conversionNeeded: 1,
    bucketName: "awsbackend-dev-patient-files"
  }

  constructor() { }

  ngOnInit() {
  }

  showData() {
    console.log(this.configData);
  }

}
