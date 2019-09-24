import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'lib-sharetools',
  templateUrl: './sharetools.component.html',
  styleUrls: ['./sharetools.component.css']

})
export class SharetoolsComponent implements OnInit {
public ConfigData:any=[];

   @Input()
   set Config(val:any)
   {
     this.ConfigData = (val) || '<no name set>';
     this.ConfigData = val;
     console.log("okkkkkkkkkkkkkkk",this.ConfigData);
   }
  
  constructor() { }

  ngOnInit() {
  }

}
