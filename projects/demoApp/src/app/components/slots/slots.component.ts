import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/app-api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  public condition: any = {};
  public source: any = "eventdayarr_view";
  public slotlist: any = [];


  constructor(public apiservice: ApiService, public activatedroute: ActivatedRoute) {
    // this.activatedroute.data.forEach((data) => {
    //   // PRE LOAD DATA PRIOR
    //   //console.log(data['results']);
    //   this.slotlist = data['results'].res;
    //   console.log(this.slotlist);

    // });
    // this.condition = {$lte: moment(this.filterval5[1]).format('YYYY-MM-DD')};
  }

  ngOnInit() {
   
  }

}
