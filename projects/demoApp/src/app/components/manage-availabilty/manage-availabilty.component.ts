import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-availabilty',
  templateUrl: './manage-availabilty.component.html',
  styleUrls: ['./manage-availabilty.component.css']
})
export class ManageAvailabiltyComponent implements OnInit {
  public server:any = 'http://18.191.148.255:5009';
  public timespan1:any = '15';
  public timespan2:any = '60';
  public eventtype_arr:any = [];
  constructor() {
    this.eventtype_arr = ["Type 0","Type 1","Type 2","Type 3","Type 4","Type 5"];
    this.eventtype_arr = [
      { name: 'Type 0', value: 'type_0' },
      { name: 'Type 1', value: 'type_1' },
      { name: 'Type 2', value: 'type_2' },
      { name: 'Type 3', value: 'type_3' },
      { name: 'Type 4', value: 'type_4' },
    ];
   }

  ngOnInit() {
  }

}
