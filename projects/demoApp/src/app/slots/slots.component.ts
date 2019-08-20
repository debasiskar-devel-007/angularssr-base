import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  public condition :any = {};
  public source:any = "eventdayarr_view";


  constructor() {
    // this.condition = {$lte: moment(this.filterval5[1]).format('YYYY-MM-DD')};
   }

  ngOnInit() {
  }

}
