import { Component, OnInit ,Input} from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse  } from 'ngx-facebook';

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
     console.log(this.ConfigData[0].link);
   }
  
  constructor(private fb: FacebookService) { 
    let initParams: InitParams = {
      appId: '2391556517777524',
      xfbml: true,
      version: 'v2.8'
    };
    fb.init(initParams);
   
   }

  ngOnInit() {
  }

  share(url: string) {
 
    let params: UIParams = {
      href: this.ConfigData[0].link,
      method: 'share'
    };
   
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
