import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public server:any = 'http://166.62.39.137:5009/';
  public addUrl:any = 'addorupdatedata';
  //public updateUrl:any = 'addorupdatedata';
  //public deleteUrl:any = 'deletesingledata';
 // public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  //public getSourceUrl:any = 'demoteam';
  constructor() { }

  ngOnInit() {
  }

}
