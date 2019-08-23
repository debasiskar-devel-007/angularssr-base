import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  public server:any = 'http://166.62.39.137:5009/';
  public addUrl:any = 'addorupdatedata';
  public updateUrl:any = 'addorupdatedata';
  public deleteUrl:any = 'deletesingledata';
  public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  public getSourceUrl:any = 'demoteam';
  public BlogList:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.BlogList = this.activatedRoute.snapshot.data['BlogList'];
  }

}
