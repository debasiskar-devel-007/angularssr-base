import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public server: any = 'http://18.191.148.255:5009/';
  public addUrl: any = 'addorupdatedata';
  public getDataUrl: any = 'datalist';
  public editdata: any = [];
  public BlogList: any = [];

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.forEach(data => {
        let result: any;
        result = data.results.res;
        this.editdata = result;
      });
    }
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.BlogList=result;
    });
  }



  }

