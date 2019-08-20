import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'lib-availableslots',
  templateUrl: './availableslots.component.html',
  styleUrls: ['./availableslots.component.css']
})
export class AvailableslotsComponent implements OnInit {
  public slot_source:any='';
  public slot_cond:any = {};
  public slotarray:any = [];
  @Input()          //setting the slot source
  set slotdata_source(val: any) {
    this.slot_source = (val) || '<no name set>';
    this.slot_source = val;
    console.log(val);
  }
  @Input()          //setting the slot source
  set slotdata_cond(val: any) {
    this.slot_cond = (val) || '<no name set>';
    this.slot_cond = val;
    console.log(val);
  }

  constructor(public apiservice: ApiService) {
this.getSlots();
   }
   getSlots(){
    let data: any = {};
    data= {
      "source": "eventdayarr_view","condition":this.slot_cond
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
