import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'lib-availableslots',
  templateUrl: './availableslots.component.html',
  styleUrls: ['./availableslots.component.css']
})
export class AvailableslotsComponent implements OnInit {
  public slotarray: any = [];
  // @Input()          //setting the slot array from slot page
  // set slotListarray(array: any) {
  //   console.log(array);
  //   this.slotarray = (array) || '<no name set>';
  //   this.slotarray = array;
  //   console.log('array list from resolve'); 
  //   console.log(array);
  //  // console.log(this.slotarray);

  // }

  constructor(public apiservice: ApiService) {
    this.getSlots();
  }
  getSlots() {
    let data: any = {};
    data = {
      "source": "eventdayarr_view", "condition": {}
    };
    this.apiservice.getData(data).subscribe(res => {
      console.log(res);
      let resp: any;
      resp = res;
      console.log('result in getDataFunction');
      console.log(resp);
      this.slotarray = resp.res;
    });
  }

  ngOnInit() {

  }

}
