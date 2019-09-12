import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  public fieldsValue: any;

  @Input()
  set fields(fieldsVal: any){
    this.fieldsValue = (fieldsVal) || '<no name set>';
    this.fieldsValue = fieldsVal;
    console.log(this.fieldsValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
