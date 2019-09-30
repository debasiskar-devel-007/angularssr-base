import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addedit-image-category',
  templateUrl: './addedit-image-category.component.html',
  styleUrls: ['./addedit-image-category.component.css']
})
export class AddeditImageCategoryComponent implements OnInit {
  public serverUrl:any="https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public listUrl:any="video-management/list";
  public dataList:any=[];
  public editedData:any=[];
  constructor() { }

  ngOnInit() {
  }

}
