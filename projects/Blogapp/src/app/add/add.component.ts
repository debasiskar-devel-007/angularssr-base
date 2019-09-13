import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
import {ActivatedRoute,Router} from '@angular/router';
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
<<<<<<< HEAD
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
=======
  public server:any = 'http://18.191.148.255:5009/';
  public addUrl:any = 'addorupdatedata';
  public getDataUrl:any = 'datalist';
  public editdata:any=[];
  
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    /**getting single data by resolve call **/
    if(this.activatedRoute.snapshot.params.id) {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.editdata=result;
     
    })
  }


  }

}
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b
