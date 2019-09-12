import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public server: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public addUrl: any = 'addorupdatedata';
  public getDataUrl: any = 'datalist';
  public editdata: any = [];
  
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.forEach(data => {
        let result: any;
        result = data.results.res;
        this.editdata = result;
      });
    }
  }


}
