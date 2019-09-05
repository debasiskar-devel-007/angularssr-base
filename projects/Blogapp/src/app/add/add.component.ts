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

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //  console.log("Ki ID dea tanche URL",this.activatedRoute.snapshot.params.id);
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.forEach(data => {
        let result: any;
        result = data.results.res;
        this.editdata = result;
      });
    }
  }


}
